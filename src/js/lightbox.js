import GLightbox from 'glightbox';

export function initLightbox() {
  const lightbox = GLightbox({
    selector: '[data-glightbox]',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    zoomable: true,
    draggable: true,
    closeButton: true,
    closeOnOutsideClick: true,
  });
  
  return lightbox;
}