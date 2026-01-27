export function initPanZoom(viewer, img, options = {}) {
  // ---- Config -------------------------------------------------
  const {
    initialWidthRatio = 2,   // 200%
    minWidthRatio = 0.75,    // 75%
    maxScale: baseMaxScale = 6,
    zoomSpeed = 0.004,
    buttonZoomFactor = 1.2,
    buttonPanStep = 80
  } = options;

  // ---- State --------------------------------------------------
  let scale = 1;
  let minScale = 0;
  let maxScale = baseMaxScale;

  let translateX = 0;
  let translateY = 0;

  let initialState = {};

  let isDragging = false;
  let startX = 0;
  let startY = 0;

  // ---- Helpers ------------------------------------------------
  function update() {
    img.style.transform =
      `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  function clampScale(value) {
    return Math.min(maxScale, Math.max(minScale, value));
  }

  function zoomAtPoint(newScale, x, y) {
    newScale = clampScale(newScale);
    if (newScale === scale) return;

    const imageX = (x - translateX) / scale;
    const imageY = (y - translateY) / scale;

    scale = newScale;
    translateX = x - imageX * scale;
    translateY = y - imageY * scale;

    update();
  }

  function zoomBy(factor) {
    const rect = viewer.getBoundingClientRect();
    zoomAtPoint(
      scale * factor,
      rect.width / 2,
      rect.height / 2
    );
  }

  function panBy(dx, dy) {
    translateX += dx;
    translateY += dy;
    update();
  }

  // ---- Mouse Pan ---------------------------------------------
  viewer.addEventListener('mousedown', (e) => {
    isDragging = true;
    viewer.style.cursor = 'grabbing';
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    viewer.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    update();
  });

  // ---- Wheel Zoom --------------------------------------------
  viewer.addEventListener('wheel', (e) => {
    e.preventDefault();

    const rect = viewer.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    const zoomFactor = 1 - e.deltaY * zoomSpeed;
    zoomAtPoint(scale * zoomFactor, cursorX, cursorY);
  }, { passive: false });

  img.addEventListener('dragstart', e => e.preventDefault());

  // ---- Initial Zoom ------------------------------------------
  function setInitialZoom() {
    const rect = viewer.getBoundingClientRect();

    scale = (rect.width * initialWidthRatio) / img.naturalWidth;
    minScale = (rect.width * minWidthRatio) / img.naturalWidth;

    translateX = (rect.width - img.naturalWidth * scale) / 2;
    translateY = 0;

    initialState = { scale, translateX, translateY };
    update();
  }

  // ---- Controls UI -------------------------------------------
  function createControls() {
    const controls = document.createElement('div');
    controls.className = 'panzoom-controls';
    controls.innerHTML = `
      <div class="zoom-controls">
        <button data-zoom="in">+</button>
        <button data-zoom="out">−</button>
      </div>
      <div class="pan-controls">
        <button data-pan="up">↑</button>
        <div class="pan-row">
          <button data-pan="left">←</button>
          <button data-pan="right">→</button>
        </div>
        <button data-pan="down">↓</button>
      </div>
    `;

    viewer.appendChild(controls);

    controls.querySelector('[data-zoom="in"]')
      .addEventListener('click', () => zoomBy(buttonZoomFactor));

    controls.querySelector('[data-zoom="out"]')
      .addEventListener('click', () => zoomBy(1 / buttonZoomFactor));

    controls.querySelector('[data-pan="up"]')
      .addEventListener('click', () => panBy(0, buttonPanStep));

    controls.querySelector('[data-pan="down"]')
      .addEventListener('click', () => panBy(0, -buttonPanStep));

    controls.querySelector('[data-pan="left"]')
      .addEventListener('click', () => panBy(buttonPanStep, 0));

    controls.querySelector('[data-pan="right"]')
      .addEventListener('click', () => panBy(-buttonPanStep, 0));
  }

  // ---- Init ---------------------------------------------------
  viewer.style.cursor = 'grab';
  viewer.style.position ||= 'relative';

  if (img.complete) {
    setInitialZoom();
    createControls();
  } else {
    img.addEventListener('load', () => {
      setInitialZoom();
      createControls();
    }, { once: true });
  }

  // ---- API ----------------------------------------------------
  return {
    reset() {
      ({ scale, translateX, translateY } = initialState);
      update();
    },
    zoomIn() { zoomBy(buttonZoomFactor); },
    zoomOut() { zoomBy(1 / buttonZoomFactor); },
    panBy,
    getState() {
      return { scale, translateX, translateY };
    }
  };
}
