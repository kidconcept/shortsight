const Qs = (r) => import(r), Ys = () => Promise.resolve().then(() => Js), { Fragment: Xs, jsx: e, jsxs: t } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
globalThis.__GLOBALS__.React;
const { Children: Ks, cloneElement: el, Component: tl, createContext: al, createElement: me, createFactory: sl, createRef: ll, forwardRef: be, Fragment: rl, isValidElement: il, lazy: nl, memo: cl, Profiler: dl, PureComponent: ol, startTransition: ml, StrictMode: hl, Suspense: xl, use: pl, useCallback: gl, useContext: ul, useDebugValue: bl, useDeferredValue: yl, useEffect: Nl, useId: fl, useImperativeHandle: vl, useInsertionEffect: wl, useLayoutEffect: kl, useMemo: zl, useReducer: Sl, useRef: jl, useState: ge, useSyncExternalStore: Cl, useTransition: Ml, version: _l } = globalThis.__GLOBALS__.React;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $e = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (l, i, b) => b ? b.toUpperCase() : i.toLowerCase()
), ue = (r) => {
  const l = $e(r);
  return l.charAt(0).toUpperCase() + l.slice(1);
}, ye = (...r) => r.filter((l, i, b) => !!l && l.trim() !== "" && b.indexOf(l) === i).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = be(
  ({
    color: r = "currentColor",
    size: l = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: b,
    className: ae = "",
    children: I,
    iconNode: de,
    ...y
  }, Be) => me(
    "svg",
    {
      ref: Be,
      ...Pe,
      width: l,
      height: l,
      stroke: r,
      strokeWidth: b ? Number(i) * 24 / Number(l) : i,
      className: ye("lucide", ae),
      ...y
    },
    [
      ...de.map(([Le, Ie]) => me(Le, Ie)),
      ...Array.isArray(I) ? I : [I]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s = (r, l) => {
  const i = be(
    ({ className: b, ...ae }, I) => me(He, {
      ref: I,
      iconNode: l,
      className: ye(
        `lucide-${Fe(ue(r))}`,
        `lucide-${r}`,
        b
      ),
      ...ae
    })
  );
  return i.displayName = ue(r), i;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], qe = s("activity", Re);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], se = s("award", Oe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Y = s("bell", De);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = [
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }],
  ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
  ["path", { d: "M10 18v3", key: "1yea0a" }],
  ["path", { d: "M14 17.75V21", key: "1pymcb" }],
  ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]
], Ve = s("bird", Ee);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], Ue = s("book-open", Ge);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
], he = s("bookmark", We);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7"
    }
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
], Je = s("bug", Ze);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], A = s("calendar", Qe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], p = s("camera", Ye);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ne = s("check", Xe);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], B = s("chevron-down", Ke);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], $ = s("chevron-left", et);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], k = s("chevron-right", tt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], st = s("chevron-up", at);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], D = s("circle-alert", lt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], L = s("circle-check-big", rt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], nt = s("circle-help", it);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], le = s("circle-x", ct);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], X = s("clock", dt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
], mt = s("cloud-rain", ot);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], K = s("compass", ht);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], pt = s("copy", xt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
], ut = s("crosshair", gt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], yt = s("download", bt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
], ft = s("droplets", Nt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], H = s("ellipsis-vertical", vt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], fe = s("ellipsis", wt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], zt = s("external-link", kt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ve = s("eye", St);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], Ct = s("file", jt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = [
  [
    "path",
    {
      d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
      key: "15baut"
    }
  ],
  ["path", { d: "M18 12v.5", key: "18hhni" }],
  ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
      key: "l9di03"
    }
  ],
  [
    "path",
    { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4", key: "1kjonw" }
  ],
  [
    "path",
    { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98", key: "1zlm23" }
  ]
], _t = s("fish", Mt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
], Tt = s("flag", At);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
], Lt = s("flower-2", Bt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], Ft = s("folder", It);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], ne = s("funnel", $t);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
], Ht = s("git-branch", Pt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], qt = s("globe", Rt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], we = s("grid-3x3", Ot);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
], x = s("heart", Dt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], re = s("house", Et);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Gt = s("image", Vt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
], Wt = s("inbox", Ut);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], ke = s("info", Zt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], Qt = s("layers", Jt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
], ze = s("leaf", Yt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Kt = s("link", Xt);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], Se = s("list", ea);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], aa = s("lock-open", ta);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], la = s("lock", sa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
], ia = s("log-in", ra);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
], ca = s("log-out", na);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], oa = s("mail", da);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], z = s("map-pin", ma);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
], je = s("map", ha);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], pa = s("maximize", xa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], te = s("message-circle", ga);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
], ba = s("mic", ua);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
], Na = s("minimize", ya);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = [["path", { d: "M5 12h14", key: "1ays0h" }]], va = s("minus", fa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], ka = s("moon", wa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const za = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], Sa = s("navigation", za);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
], Ca = s("paperclip", ja);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ma = [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
], _a = s("pause", Ma);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], Ta = s("phone", Aa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ba = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], ie = s("play", Ba);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const La = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ce = s("plus", La);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Fa = s("refresh-cw", Ia);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $a = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], Pa = s("rotate-ccw", $a);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ha = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], Ra = s("rotate-cw", Ha);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], P = s("search", qa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ce = s("settings", Oa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Da = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], Z = s("share-2", Da);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ea = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], Va = s("shield", Ea);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ga = [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
], Ua = s("skip-back", Ga);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wa = [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
], Za = s("skip-forward", Wa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
], Me = s("sliders-horizontal", Ja);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], _e = s("square-pen", Qa);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ya = [
  ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5", key: "21bitc" }],
  ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4", key: "oh0fg0" }],
  ["path", { d: "M18 13h.01", key: "9veqaj" }],
  [
    "path",
    {
      d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
      key: "980v8a"
    }
  ]
], Xa = s("squirrel", Ya);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], ee = s("star", Ka);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], ts = s("sun", es);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], ss = s("target", as);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
], rs = s("thumbs-up", ls);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], ns = s("trash-2", is);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  [
    "path",
    {
      d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
      key: "cpyugq"
    }
  ],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
], ds = s("tree-pine", cs);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
], ms = s("trending-up", os);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ae = s("triangle-alert", hs);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  [
    "path",
    {
      d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
      key: "yqzxt4"
    }
  ],
  [
    "path",
    {
      d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
      key: "4qinb0"
    }
  ],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "5", key: "1041cp" }],
  ["line", { x1: "2", x2: "5", y1: "8", y2: "8", key: "14m1p5" }],
  ["line", { x1: "16", x2: "16", y1: "19", y2: "22", key: "rzdirn" }],
  ["line", { x1: "19", x2: "22", y1: "16", y2: "16", key: "ox905f" }]
], ps = s("unlink", xs);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
], pe = s("upload", gs);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], bs = s("user-plus", us);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], E = s("user", ys);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], Te = s("users", Ns);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], vs = s("video", fs);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], xe = s("volume-2", ws);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
], zs = s("wifi", ks);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], js = s("wind", Ss);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], j = s("x", Cs);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], _s = s("zap", Ms);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ts = s("zoom-in", As);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ls = s("zoom-out", Bs);
function R({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function N({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-white rounded-lg border border-gray-200 flex flex-wrap gap-3 items-center", children: i })
  ] });
}
function Is() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Buttons" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Interactive elements for user actions throughout the app" })
    ] }),
    /* @__PURE__ */ t(R, { title: "Primary Buttons", children: [
      /* @__PURE__ */ t(N, { title: "Solid Green Buttons", description: "Main call-to-action buttons", children: [
        /* @__PURE__ */ e("button", { className: "px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors", children: "Submit Observation" }),
        /* @__PURE__ */ e("button", { className: "px-5 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-sm", children: "Save Changes" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-sm", children: "Join Project" })
      ] }),
      /* @__PURE__ */ t(N, { title: "Large Action Buttons", description: "Prominent buttons for key actions", children: [
        /* @__PURE__ */ t("button", { className: "w-full max-w-sm px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ e(p, { className: "size-5" }),
          "Take Photo"
        ] }),
        /* @__PURE__ */ t("button", { className: "w-full max-w-sm px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ e(pe, { className: "size-5" }),
          "Choose from Library"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(R, { title: "Secondary Buttons", children: [
      /* @__PURE__ */ t(N, { title: "Outline Buttons", description: "Secondary actions", children: [
        /* @__PURE__ */ e("button", { className: "px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors", children: "Cancel" }),
        /* @__PURE__ */ e("button", { className: "px-5 py-2.5 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors", children: "Follow" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm", children: "Edit Profile" })
      ] }),
      /* @__PURE__ */ t(N, { title: "Ghost Buttons", description: "Minimal visual weight", children: [
        /* @__PURE__ */ e("button", { className: "px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors", children: "View All" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors", children: "Learn More" })
      ] })
    ] }),
    /* @__PURE__ */ t(R, { title: "Icon Buttons", children: [
      /* @__PURE__ */ t(N, { title: "Circular Icon Buttons", description: "Single icon actions", children: [
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors", children: /* @__PURE__ */ e(x, { className: "size-5 text-gray-600" }) }),
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors", children: /* @__PURE__ */ e(te, { className: "size-5 text-gray-600" }) }),
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors", children: /* @__PURE__ */ e(Z, { className: "size-5 text-gray-600" }) }),
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors", children: /* @__PURE__ */ e(he, { className: "size-5 text-gray-600" }) })
      ] }),
      /* @__PURE__ */ t(N, { title: "Icon Buttons - Active State", children: [
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-full bg-red-50 border border-red-200", children: /* @__PURE__ */ e(x, { className: "size-5 text-red-600 fill-red-600" }) }),
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-full bg-blue-50 border border-blue-200", children: /* @__PURE__ */ e(he, { className: "size-5 text-blue-600 fill-blue-600" }) })
      ] }),
      /* @__PURE__ */ t(N, { title: "Square Icon Buttons", children: [
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors", children: /* @__PURE__ */ e(ne, { className: "size-5 text-gray-700" }) }),
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors", children: /* @__PURE__ */ e(fe, { className: "size-5 text-gray-700" }) }),
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors", children: /* @__PURE__ */ e(_e, { className: "size-5 text-gray-700" }) })
      ] }),
      /* @__PURE__ */ t(N, { title: "Small Icon Buttons", children: [
        /* @__PURE__ */ e("button", { className: "size-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors", children: /* @__PURE__ */ e(j, { className: "size-4 text-gray-600" }) }),
        /* @__PURE__ */ e("button", { className: "size-8 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition-colors", children: /* @__PURE__ */ e(Ne, { className: "size-4 text-white" }) })
      ] })
    ] }),
    /* @__PURE__ */ e(R, { title: "Floating Action Button", children: /* @__PURE__ */ t(N, { title: "FAB - Camera Button", description: "Persistent action button", children: [
      /* @__PURE__ */ e("button", { className: "size-14 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all hover:shadow-xl", children: /* @__PURE__ */ e(p, { className: "size-6" }) }),
      /* @__PURE__ */ e("button", { className: "size-16 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all hover:shadow-xl", children: /* @__PURE__ */ e(Ce, { className: "size-7" }) })
    ] }) }),
    /* @__PURE__ */ t(R, { title: "Button Groups", children: [
      /* @__PURE__ */ e(N, { title: "Segmented Control", description: "Toggle between views", children: /* @__PURE__ */ t("div", { className: "inline-flex bg-gray-100 rounded-lg p-1", children: [
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-md bg-white shadow-sm text-sm", children: "Grid" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-md text-gray-600 text-sm", children: "List" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-md text-gray-600 text-sm", children: "Map" })
      ] }) }),
      /* @__PURE__ */ e(N, { title: "Icon Button Group", children: /* @__PURE__ */ t("div", { className: "inline-flex gap-1", children: [
        /* @__PURE__ */ e("button", { className: "px-3 py-2 rounded-lg bg-green-600 text-white", children: "All" }),
        /* @__PURE__ */ e("button", { className: "px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100", children: "Needs ID" }),
        /* @__PURE__ */ e("button", { className: "px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100", children: "Research" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(R, { title: "Text Buttons", children: [
      /* @__PURE__ */ t(N, { title: "Link-style Buttons", description: "Inline text actions", children: [
        /* @__PURE__ */ e("button", { className: "text-green-600 hover:underline", children: "See all observations" }),
        /* @__PURE__ */ e("button", { className: "text-green-600 hover:underline text-sm", children: "View more" }),
        /* @__PURE__ */ e("button", { className: "text-gray-600 hover:text-gray-800 text-sm", children: "Cancel" })
      ] }),
      /* @__PURE__ */ t(N, { title: "Chevron Buttons", description: "Navigation hints", children: [
        /* @__PURE__ */ t("button", { className: "flex items-center gap-1 text-green-600 hover:gap-2 transition-all", children: [
          "View Profile",
          /* @__PURE__ */ e(k, { className: "size-4" })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex items-center gap-1 text-gray-600 hover:gap-2 transition-all text-sm", children: [
          "See Details",
          /* @__PURE__ */ e(k, { className: "size-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(R, { title: "State Variations", children: /* @__PURE__ */ t(N, { title: "Button States", children: [
      /* @__PURE__ */ e("button", { className: "px-5 py-2.5 bg-green-600 text-white rounded-full", children: "Normal" }),
      /* @__PURE__ */ e("button", { className: "px-5 py-2.5 bg-green-700 text-white rounded-full", children: "Hover" }),
      /* @__PURE__ */ e("button", { className: "px-5 py-2.5 bg-green-600 text-white rounded-full opacity-50 cursor-not-allowed", children: "Disabled" }),
      /* @__PURE__ */ t("button", { className: "px-5 py-2.5 bg-green-600 text-white rounded-full flex items-center gap-2", children: [
        /* @__PURE__ */ e("div", { className: "size-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
        "Loading..."
      ] })
    ] }) })
  ] });
}
function J({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function f({ title: r, description: l, children: i, dark: b }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: `p-6 rounded-lg border ${b ? "bg-gray-900" : "bg-white border-gray-200"}`, children: i })
  ] });
}
function Fs() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Navigation" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Tab bars, headers, and navigation components" })
    ] }),
    /* @__PURE__ */ t(J, { title: "Bottom Navigation", children: [
      /* @__PURE__ */ e(f, { title: "Tab Bar - Default", description: "Main navigation with icons and labels", children: /* @__PURE__ */ e("nav", { className: "max-w-md mx-auto border border-gray-200 rounded-2xl overflow-hidden", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-around bg-white py-2", children: [
        /* @__PURE__ */ t("button", { className: "flex flex-col items-center gap-1 px-4 py-2 text-gray-400", children: [
          /* @__PURE__ */ e(re, { className: "size-6" }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: "Home" })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex flex-col items-center gap-1 px-4 py-2 text-green-600", children: [
          /* @__PURE__ */ e(K, { className: "size-6" }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: "Explore" })
        ] }),
        /* @__PURE__ */ e("button", { className: "flex flex-col items-center gap-1 px-4 py-2 -mt-6", children: /* @__PURE__ */ e("div", { className: "size-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ e(p, { className: "size-7 text-white" }) }) }),
        /* @__PURE__ */ t("button", { className: "flex flex-col items-center gap-1 px-4 py-2 text-gray-400", children: [
          /* @__PURE__ */ e(Y, { className: "size-6" }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: "Activity" })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex flex-col items-center gap-1 px-4 py-2 text-gray-400", children: [
          /* @__PURE__ */ e(E, { className: "size-6" }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: "Profile" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(f, { title: "Tab Bar - Active State Variations", children: /* @__PURE__ */ e("div", { className: "space-y-4 max-w-md mx-auto", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-around bg-white border border-gray-200 rounded-2xl py-3", children: [
        /* @__PURE__ */ t("button", { className: "flex flex-col items-center gap-1 px-3 text-green-600", children: [
          /* @__PURE__ */ e(re, { className: "size-6 fill-green-600" }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: "Home" })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex flex-col items-center gap-1 px-3 text-gray-400", children: [
          /* @__PURE__ */ e(K, { className: "size-6" }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: "Explore" })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex flex-col items-center gap-1 px-3 text-gray-400", children: [
          /* @__PURE__ */ e(Y, { className: "size-6" }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: "Activity" })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex flex-col items-center gap-1 px-3 text-gray-400", children: [
          /* @__PURE__ */ e(E, { className: "size-6" }),
          /* @__PURE__ */ e("span", { className: "text-xs", children: "Profile" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(f, { title: "Tab Bar - Icon Only", children: /* @__PURE__ */ e("div", { className: "max-w-md mx-auto bg-white border border-gray-200 rounded-2xl", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-around py-3", children: [
        /* @__PURE__ */ e("button", { className: "p-2 text-gray-400", children: /* @__PURE__ */ e(re, { className: "size-7" }) }),
        /* @__PURE__ */ e("button", { className: "p-2 text-green-600", children: /* @__PURE__ */ e(K, { className: "size-7" }) }),
        /* @__PURE__ */ e("button", { className: "p-2 text-gray-400", children: /* @__PURE__ */ e(Y, { className: "size-7" }) }),
        /* @__PURE__ */ e("button", { className: "p-2 text-gray-400", children: /* @__PURE__ */ e(E, { className: "size-7" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ t(J, { title: "Top Navigation Headers", children: [
      /* @__PURE__ */ e(f, { title: "Header with Back Button", description: "Standard page header", children: /* @__PURE__ */ e("div", { className: "max-w-md mx-auto bg-white border border-gray-200 rounded-xl", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 py-3", children: [
        /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e($, { className: "size-6" }) }),
        /* @__PURE__ */ e("h2", { className: "text-lg", children: "Observation Details" }),
        /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(H, { className: "size-6" }) })
      ] }) }) }),
      /* @__PURE__ */ e(f, { title: "Header with Search", description: "Explore page header", children: /* @__PURE__ */ e("div", { className: "max-w-md mx-auto bg-white border border-gray-200 rounded-xl", children: /* @__PURE__ */ t("div", { className: "px-4 py-3", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ e("h2", { className: "text-xl flex-1", children: "Explore" }),
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(ce, { className: "size-5" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e(P, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              placeholder: "Search observations, species...",
              className: "w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(f, { title: "Header with Actions", description: "Edit or action pages", children: /* @__PURE__ */ e("div", { className: "max-w-md mx-auto bg-white border border-gray-200 rounded-xl", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 py-3", children: [
        /* @__PURE__ */ e("button", { className: "text-gray-600 hover:text-gray-800", children: "Cancel" }),
        /* @__PURE__ */ e("h2", { className: "text-lg", children: "Edit Observation" }),
        /* @__PURE__ */ e("button", { className: "text-green-600 hover:text-green-700", children: "Save" })
      ] }) }) }),
      /* @__PURE__ */ e(f, { title: "Transparent Header", description: "Over image content", dark: !0, children: /* @__PURE__ */ e("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 py-3", children: [
        /* @__PURE__ */ e("button", { className: "p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/40", children: /* @__PURE__ */ e($, { className: "size-6 text-white" }) }),
        /* @__PURE__ */ e("button", { className: "p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/40", children: /* @__PURE__ */ e(H, { className: "size-6 text-white" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ t(J, { title: "View Toggles", children: [
      /* @__PURE__ */ e(f, { title: "View Switcher", description: "Toggle between grid, list, and map views", children: /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ t("div", { className: "inline-flex bg-gray-100 rounded-lg p-1", children: [
        /* @__PURE__ */ e("button", { className: "p-2 rounded-md bg-white shadow-sm", children: /* @__PURE__ */ e(we, { className: "size-5 text-gray-700" }) }),
        /* @__PURE__ */ e("button", { className: "p-2 rounded-md text-gray-500", children: /* @__PURE__ */ e(Se, { className: "size-5" }) }),
        /* @__PURE__ */ e("button", { className: "p-2 rounded-md text-gray-500", children: /* @__PURE__ */ e(je, { className: "size-5" }) })
      ] }) }) }),
      /* @__PURE__ */ e(f, { title: "Text View Switcher", children: /* @__PURE__ */ t("div", { className: "inline-flex bg-gray-100 rounded-full p-1", children: [
        /* @__PURE__ */ e("button", { className: "px-4 py-1.5 rounded-full bg-white shadow-sm text-sm", children: "All" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-1.5 rounded-full text-gray-600 text-sm", children: "Needs ID" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-1.5 rounded-full text-gray-600 text-sm", children: "Research" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(J, { title: "Tabs", children: [
      /* @__PURE__ */ e(f, { title: "Underline Tabs", description: "Content section tabs", children: /* @__PURE__ */ e("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ t("div", { className: "flex gap-6 px-4", children: [
        /* @__PURE__ */ e("button", { className: "pb-3 border-b-2 border-green-600 text-green-600", children: "Observations" }),
        /* @__PURE__ */ e("button", { className: "pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700", children: "Species" }),
        /* @__PURE__ */ e("button", { className: "pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700", children: "Observers" }),
        /* @__PURE__ */ e("button", { className: "pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700", children: "About" })
      ] }) }) }),
      /* @__PURE__ */ e(f, { title: "Pill Tabs", description: "Rounded tab style", children: /* @__PURE__ */ t("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-green-600 text-white text-sm", children: "Photos" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200", children: "Sounds" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200", children: "Map" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200", children: "Data" })
      ] }) }),
      /* @__PURE__ */ e(f, { title: "Scrollable Tabs", description: "For many options", children: /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("div", { className: "flex gap-2 min-w-max pb-2", children: [
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-green-600 text-white text-sm whitespace-nowrap", children: "All Taxa" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm whitespace-nowrap", children: "Plants" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm whitespace-nowrap", children: "Animals" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm whitespace-nowrap", children: "Fungi" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm whitespace-nowrap", children: "Birds" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm whitespace-nowrap", children: "Insects" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ t(J, { title: "Breadcrumbs & Hierarchy", children: [
      /* @__PURE__ */ e(f, { title: "Taxonomic Breadcrumb", description: "Species classification path", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
        /* @__PURE__ */ e("span", { children: "Kingdom" }),
        /* @__PURE__ */ e("span", { children: "›" }),
        /* @__PURE__ */ e("span", { children: "Phylum" }),
        /* @__PURE__ */ e("span", { children: "›" }),
        /* @__PURE__ */ e("span", { children: "Class" }),
        /* @__PURE__ */ e("span", { children: "›" }),
        /* @__PURE__ */ e("span", { className: "text-gray-900", children: "Species" })
      ] }) }),
      /* @__PURE__ */ e(f, { title: "Location Breadcrumb", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e("span", { className: "text-green-600", children: "North America" }),
        /* @__PURE__ */ e("span", { className: "text-gray-400", children: "›" }),
        /* @__PURE__ */ e("span", { className: "text-green-600", children: "United States" }),
        /* @__PURE__ */ e("span", { className: "text-gray-400", children: "›" }),
        /* @__PURE__ */ e("span", { className: "text-gray-900", children: "California" })
      ] }) })
    ] })
  ] });
}
function T({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function g({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-white rounded-lg border border-gray-200", children: i })
  ] });
}
function $s() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Form Controls" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Inputs, search bars, selectors, and form elements" })
    ] }),
    /* @__PURE__ */ t(T, { title: "Search Inputs", children: [
      /* @__PURE__ */ e(g, { title: "Rounded Search Bar", description: "Primary search input", children: /* @__PURE__ */ e("div", { className: "max-w-md", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e(P, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Search observations, species...",
            className: "w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ e(g, { title: "Search Bar with Clear Button", children: /* @__PURE__ */ e("div", { className: "max-w-md", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e(P, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Search",
            defaultValue: "American Robin",
            className: "w-full pl-12 pr-10 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          }
        ),
        /* @__PURE__ */ e("button", { className: "absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full", children: /* @__PURE__ */ e(j, { className: "size-4 text-gray-500" }) })
      ] }) }) }),
      /* @__PURE__ */ e(g, { title: "Search Bar - White Background", children: /* @__PURE__ */ e("div", { className: "max-w-md", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e(P, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Search projects...",
            className: "w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ e(g, { title: "Compact Search", children: /* @__PURE__ */ e("div", { className: "max-w-sm", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e(P, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Filter",
            className: "w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          }
        )
      ] }) }) })
    ] }),
    /* @__PURE__ */ t(T, { title: "Text Inputs", children: [
      /* @__PURE__ */ e(g, { title: "Standard Text Input", description: "Basic form input", children: /* @__PURE__ */ t("div", { className: "max-w-md space-y-4", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Species Name" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              placeholder: "Enter species name",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Common Name" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              defaultValue: "American Robin",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e(g, { title: "Input with Icon", description: "Location and date inputs", children: /* @__PURE__ */ t("div", { className: "max-w-md space-y-4", children: [
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e(z, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              placeholder: "Add location",
              className: "w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e(A, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              placeholder: "Select date",
              defaultValue: "Feb 9, 2026",
              className: "w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e(g, { title: "Text Input States", children: /* @__PURE__ */ t("div", { className: "max-w-md space-y-4", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Default state",
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Focus state",
            className: "w-full px-4 py-3 border-2 border-green-500 rounded-lg outline-none ring-2 ring-green-500"
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Disabled state",
            disabled: !0,
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed"
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            defaultValue: "Invalid input",
            className: "w-full px-4 py-3 border-2 border-red-500 rounded-lg outline-none"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ e(T, { title: "Textareas", children: /* @__PURE__ */ e(g, { title: "Multiline Text Input", description: "Notes and descriptions", children: /* @__PURE__ */ t("div", { className: "max-w-md space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Notes" }),
        /* @__PURE__ */ e(
          "textarea",
          {
            placeholder: "Add notes about your observation...",
            rows: 4,
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Description" }),
        /* @__PURE__ */ e(
          "textarea",
          {
            rows: 6,
            defaultValue: "Observed in backyard garden. Bird was foraging for worms in freshly watered soil.",
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ t(T, { title: "Select Dropdowns", children: [
      /* @__PURE__ */ e(g, { title: "Standard Dropdown", description: "Selection menus", children: /* @__PURE__ */ t("div", { className: "max-w-md space-y-4", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Quality Grade" }),
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ t("select", { className: "w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white", children: [
              /* @__PURE__ */ e("option", { children: "All Quality Grades" }),
              /* @__PURE__ */ e("option", { children: "Research Grade" }),
              /* @__PURE__ */ e("option", { children: "Needs ID" }),
              /* @__PURE__ */ e("option", { children: "Casual" })
            ] }),
            /* @__PURE__ */ e(B, { className: "absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Sort By" }),
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ t("select", { className: "w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white", children: [
              /* @__PURE__ */ e("option", { children: "Most Recent" }),
              /* @__PURE__ */ e("option", { children: "Most Faves" }),
              /* @__PURE__ */ e("option", { children: "Most Viewed" })
            ] }),
            /* @__PURE__ */ e(B, { className: "absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(g, { title: "Compact Dropdown", children: /* @__PURE__ */ e("div", { className: "max-w-xs", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ t("select", { className: "w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg appearance-none text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white", children: [
          /* @__PURE__ */ e("option", { children: "English" }),
          /* @__PURE__ */ e("option", { children: "Spanish" }),
          /* @__PURE__ */ e("option", { children: "French" })
        ] }),
        /* @__PURE__ */ e(B, { className: "absolute right-2 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ t(T, { title: "Checkboxes", children: [
      /* @__PURE__ */ e(g, { title: "Standard Checkboxes", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              className: "size-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            }
          ),
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Include photos only" })
        ] }),
        /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              defaultChecked: !0,
              className: "size-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            }
          ),
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Research grade only" })
        ] }),
        /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              className: "size-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            }
          ),
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Has location data" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(g, { title: "Checkbox with Description", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t("label", { className: "flex items-start gap-3 cursor-pointer", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              className: "size-5 mt-0.5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            }
          ),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-sm", children: "Enable notifications" }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Get notified about new identifications" })
          ] })
        ] }),
        /* @__PURE__ */ t("label", { className: "flex items-start gap-3 cursor-pointer", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              defaultChecked: !0,
              className: "size-5 mt-0.5 rounded border-gray-300 text-green-600 focus:ring-green-500"
            }
          ),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-sm", children: "Auto-upload observations" }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Upload when connected to WiFi" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e(T, { title: "Radio Buttons", children: /* @__PURE__ */ e(g, { title: "Radio Group", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
      /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "radio",
            name: "privacy",
            defaultChecked: !0,
            className: "size-5 border-gray-300 text-green-600 focus:ring-green-500"
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-sm", children: "Public" })
      ] }),
      /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "radio",
            name: "privacy",
            className: "size-5 border-gray-300 text-green-600 focus:ring-green-500"
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-sm", children: "Private" })
      ] }),
      /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "radio",
            name: "privacy",
            className: "size-5 border-gray-300 text-green-600 focus:ring-green-500"
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-sm", children: "Obscured" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(T, { title: "Toggles / Switches", children: /* @__PURE__ */ e(g, { title: "Toggle Switches", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e("span", { className: "text-sm", children: "Geoprivacy" }),
        /* @__PURE__ */ e("button", { className: "w-12 h-7 bg-green-600 rounded-full relative", children: /* @__PURE__ */ e("div", { className: "size-5 bg-white rounded-full absolute right-1 top-1 shadow-sm" }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e("span", { className: "text-sm", children: "Captive / Cultivated" }),
        /* @__PURE__ */ e("button", { className: "w-12 h-7 bg-gray-300 rounded-full relative", children: /* @__PURE__ */ e("div", { className: "size-5 bg-white rounded-full absolute left-1 top-1 shadow-sm" }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-sm", children: "Auto-upload" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Sync when on WiFi" })
        ] }),
        /* @__PURE__ */ e("button", { className: "w-12 h-7 bg-green-600 rounded-full relative", children: /* @__PURE__ */ e("div", { className: "size-5 bg-white rounded-full absolute right-1 top-1 shadow-sm" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(T, { title: "Sliders", children: /* @__PURE__ */ e(g, { title: "Range Slider", description: "Numeric range selection", children: /* @__PURE__ */ t("div", { className: "max-w-md space-y-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between text-sm mb-2", children: [
          /* @__PURE__ */ e("span", { className: "text-gray-700", children: "Photo Quality" }),
          /* @__PURE__ */ e("span", { className: "text-gray-500", children: "75%" })
        ] }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            min: "0",
            max: "100",
            defaultValue: "75",
            className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between text-sm mb-2", children: [
          /* @__PURE__ */ e("span", { className: "text-gray-700", children: "Search Radius" }),
          /* @__PURE__ */ e("span", { className: "text-gray-500", children: "5 km" })
        ] }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            min: "1",
            max: "50",
            defaultValue: "5",
            className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(T, { title: "Chip Inputs", children: /* @__PURE__ */ e(g, { title: "Tag Input", description: "Multiple selection chips", children: /* @__PURE__ */ t("div", { className: "max-w-md", children: [
      /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Tags" }),
      /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2 p-3 border border-gray-300 rounded-lg", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm", children: [
          "garden",
          /* @__PURE__ */ e("button", { className: "hover:text-green-900", children: /* @__PURE__ */ e(j, { className: "size-3" }) })
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm", children: [
          "backyard",
          /* @__PURE__ */ e("button", { className: "hover:text-green-900", children: /* @__PURE__ */ e(j, { className: "size-3" }) })
        ] }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Add tag...",
            className: "flex-1 min-w-[100px] outline-none text-sm"
          }
        )
      ] })
    ] }) }) })
  ] });
}
function Q({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function C({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-gray-50 rounded-lg", children: i })
  ] });
}
function Ps() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Cards" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Observation cards, species cards, project cards, and content containers" })
    ] }),
    /* @__PURE__ */ t(Q, { title: "Observation Cards", children: [
      /* @__PURE__ */ e(C, { title: "Observation Card - Grid View", description: "Image-focused card for grid layouts", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ t("div", { className: "aspect-square bg-gray-200 relative", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=400&fit=crop",
              alt: "Observation",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ t("div", { className: "absolute top-2 right-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full flex items-center gap-1", children: [
            /* @__PURE__ */ e(L, { className: "size-3" }),
            "Research"
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg mb-1", children: "American Robin" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 italic mb-2", children: "Turdus migratorius" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500 mb-3", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(z, { className: "size-3" }),
              "San Francisco, CA"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(A, { className: "size-3" }),
              "Feb 9"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                  alt: "User",
                  className: "size-6 rounded-full"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-sm text-gray-600", children: "jsmith" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-gray-500", children: [
              /* @__PURE__ */ t("button", { className: "flex items-center gap-1 hover:text-red-600", children: [
                /* @__PURE__ */ e(x, { className: "size-4" }),
                /* @__PURE__ */ e("span", { className: "text-xs", children: "12" })
              ] }),
              /* @__PURE__ */ t("button", { className: "flex items-center gap-1 hover:text-blue-600", children: [
                /* @__PURE__ */ e(te, { className: "size-4" }),
                /* @__PURE__ */ e("span", { className: "text-xs", children: "5" })
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(C, { title: "Observation Card - List View", description: "Compact horizontal card", children: /* @__PURE__ */ e("div", { className: "max-w-2xl bg-white rounded-lg overflow-hidden shadow-sm", children: /* @__PURE__ */ t("div", { className: "flex gap-3 p-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop",
            alt: "Observation",
            className: "size-20 rounded-lg object-cover flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-2 mb-1", children: [
            /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e("h3", { className: "text-base truncate", children: "Monarch Butterfly" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 italic truncate", children: "Danaus plexippus" })
            ] }),
            /* @__PURE__ */ e("button", { className: "p-1 hover:bg-gray-100 rounded-full flex-shrink-0", children: /* @__PURE__ */ e(H, { className: "size-4 text-gray-400" }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500 mb-2", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(E, { className: "size-3" }),
              "naturelover"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(z, { className: "size-3" }),
              "Pacific Grove, CA"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full", children: "Research Grade" }),
            /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full", children: "3 identifications" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(C, { title: "Observation Card - Detailed", description: "Expanded card with all info", children: /* @__PURE__ */ t("div", { className: "max-w-2xl bg-white rounded-xl overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=400&fit=crop",
            alt: "Observation",
            className: "w-full h-56 object-cover"
          }
        ),
        /* @__PURE__ */ t("div", { className: "p-4", children: [
          /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-xl mb-1", children: "Ruby-throated Hummingbird" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 italic", children: "Archilochus colubris" })
            ] }),
            /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(H, { className: "size-5 text-gray-400" }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2 text-sm mb-4", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-gray-600", children: [
              /* @__PURE__ */ e(z, { className: "size-4" }),
              "Brooklyn, NY"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-gray-600", children: [
              /* @__PURE__ */ e(A, { className: "size-4" }),
              "Feb 9, 2026 10:23 AM"
            ] })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-700 mb-4", children: "Spotted at my backyard feeder. Beautiful male with bright red throat patch." }),
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between pt-3 border-t border-gray-200", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                  alt: "User",
                  className: "size-8 rounded-full"
                }
              ),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: "text-sm", children: "birdwatcher22" }),
                /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "2,341 observations" })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t("button", { className: "flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-gray-100", children: [
                /* @__PURE__ */ e(x, { className: "size-4 text-gray-600" }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "24" })
              ] }),
              /* @__PURE__ */ t("button", { className: "flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-gray-100", children: [
                /* @__PURE__ */ e(te, { className: "size-4 text-gray-600" }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "8" })
              ] }),
              /* @__PURE__ */ t("button", { className: "flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-gray-100", children: [
                /* @__PURE__ */ e(ve, { className: "size-4 text-gray-600" }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "156" })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(Q, { title: "Species Cards", children: [
      /* @__PURE__ */ e(C, { title: "Species Card - Grid", description: "Taxon display card", children: /* @__PURE__ */ t("div", { className: "max-w-xs bg-white rounded-xl overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1551006973-67b6f16f4e88?w=400&h=300&fit=crop",
            alt: "Species",
            className: "w-full h-40 object-cover"
          }
        ),
        /* @__PURE__ */ t("div", { className: "p-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg mb-1", children: "Eastern Bluebird" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 italic mb-3", children: "Sialia sialis" }),
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between text-xs text-gray-600", children: [
            /* @__PURE__ */ e("span", { children: "1,234 observations" }),
            /* @__PURE__ */ e("span", { className: "px-2 py-1 bg-gray-100 rounded", children: "Birds" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(C, { title: "Species Card - List", description: "Compact species item", children: /* @__PURE__ */ e("div", { className: "max-w-lg bg-white rounded-lg p-3 shadow-sm", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=200&h=200&fit=crop",
            alt: "Species",
            className: "size-16 rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "text-base mb-0.5", children: "Northern Cardinal" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 italic mb-2", children: "Cardinalis cardinalis" }),
          /* @__PURE__ */ t("div", { className: "text-xs text-gray-600", children: [
            /* @__PURE__ */ e("span", { children: "892 observations" }),
            /* @__PURE__ */ e("span", { className: "mx-2", children: "•" }),
            /* @__PURE__ */ e("span", { children: "Class: Aves" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(C, { title: "Species Suggestion Card", description: "ID suggestion", children: /* @__PURE__ */ t("div", { className: "max-w-lg bg-white rounded-lg border-2 border-green-200 p-4", children: [
        /* @__PURE__ */ t("div", { className: "flex gap-3 mb-3", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=200&fit=crop",
              alt: "Species",
              className: "size-20 rounded-lg object-cover"
            }
          ),
          /* @__PURE__ */ t("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ e("h3", { className: "text-lg", children: "House Sparrow" }),
              /* @__PURE__ */ e("span", { className: "text-green-600 text-sm", children: "89% match" })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 italic mb-2", children: "Passer domesticus" }),
            /* @__PURE__ */ e("p", { className: "text-xs text-gray-600", children: "Based on visual similarity and location" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700", children: "Confirm ID" }),
          /* @__PURE__ */ e("button", { className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50", children: "Not sure" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(Q, { title: "Project Cards", children: [
      /* @__PURE__ */ e(C, { title: "Project Card", description: "Project overview card", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ e("div", { className: "h-32 bg-gradient-to-br from-green-400 to-green-600 relative", children: /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=200&fit=crop",
            alt: "Project",
            className: "w-full h-full object-cover opacity-60"
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "p-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg mb-2", children: "City Nature Challenge 2026" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-4 line-clamp-2", children: "Join us in documenting urban biodiversity during this global event. All observations count!" }),
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between text-sm text-gray-600 mb-4", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xl text-gray-900", children: "12,456" }),
              /* @__PURE__ */ e("div", { className: "text-xs", children: "Observations" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xl text-gray-900", children: "892" }),
              /* @__PURE__ */ e("div", { className: "text-xs", children: "Observers" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xl text-gray-900", children: "1,234" }),
              /* @__PURE__ */ e("div", { className: "text-xs", children: "Species" })
            ] })
          ] }),
          /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700", children: "Join Project" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(C, { title: "Project Card - Minimal", children: /* @__PURE__ */ t("div", { className: "max-w-lg bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-600", children: [
        /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
          /* @__PURE__ */ e("h3", { className: "text-base", children: "Backyard Birds 2026" }),
          /* @__PURE__ */ e("span", { className: "px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded", children: "Collection" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-3", children: "Document bird species visiting your backyard" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-4 text-xs text-gray-500", children: [
          /* @__PURE__ */ e("span", { children: "245 members" }),
          /* @__PURE__ */ e("span", { children: "•" }),
          /* @__PURE__ */ e("span", { children: "3,421 observations" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e(Q, { title: "User Cards", children: /* @__PURE__ */ e(C, { title: "User Profile Card", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl p-5 shadow-sm", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
            alt: "User",
            className: "size-16 rounded-full"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg", children: "Sarah Johnson" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-500", children: "@sarahj_nature" })
        ] }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 border border-green-600 text-green-600 rounded-full text-sm hover:bg-green-50", children: "Follow" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-4", children: "Passionate about documenting local flora and fauna. 🌿🦋" }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-xl", children: "1,234" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Observations" })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-xl", children: "456" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Species" })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-xl", children: "89" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Identifications" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(Q, { title: "Mission/Challenge Cards", children: /* @__PURE__ */ e(C, { title: "Mission Card", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-5 text-white shadow-lg", children: [
      /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-3", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-xl mb-1", children: "February Challenge" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-purple-100", children: "Observe 10 different bird species" })
        ] }),
        /* @__PURE__ */ e("div", { className: "px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs", children: "7 days left" })
      ] }),
      /* @__PURE__ */ t("div", { className: "mb-4", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between text-sm mb-2", children: [
          /* @__PURE__ */ e("span", { children: "Progress" }),
          /* @__PURE__ */ e("span", { children: "6/10" })
        ] }),
        /* @__PURE__ */ e("div", { className: "h-2 bg-white/30 rounded-full overflow-hidden", children: /* @__PURE__ */ e("div", { className: "h-full bg-white rounded-full", style: { width: "60%" } }) })
      ] }),
      /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50", children: "View Details" })
    ] }) }) })
  ] });
}
function q({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function M({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "bg-white rounded-lg border border-gray-200 overflow-hidden", children: i })
  ] });
}
function Hs() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Lists" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "List items, feed entries, and repeating content patterns" })
    ] }),
    /* @__PURE__ */ t(q, { title: "Basic List Items", children: [
      /* @__PURE__ */ e(M, { title: "Simple List Items", description: "Basic menu items with chevron", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
        /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Account Settings" }),
          /* @__PURE__ */ e(k, { className: "size-5 text-gray-400" })
        ] }),
        /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Privacy" }),
          /* @__PURE__ */ e(k, { className: "size-5 text-gray-400" })
        ] }),
        /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Notifications" }),
          /* @__PURE__ */ e(k, { className: "size-5 text-gray-400" })
        ] }),
        /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Help & Support" }),
          /* @__PURE__ */ e(k, { className: "size-5 text-gray-400" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(M, { title: "List Items with Descriptions", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
        /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ t("div", { className: "text-left", children: [
            /* @__PURE__ */ e("div", { className: "text-sm mb-0.5", children: "Enable Location Services" }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Automatically add location to observations" })
          ] }),
          /* @__PURE__ */ e(k, { className: "size-5 text-gray-400 flex-shrink-0 ml-3" })
        ] }),
        /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ t("div", { className: "text-left", children: [
            /* @__PURE__ */ e("div", { className: "text-sm mb-0.5", children: "Data Quality Assessment" }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Help us improve observation quality" })
          ] }),
          /* @__PURE__ */ e(k, { className: "size-5 text-gray-400 flex-shrink-0 ml-3" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(q, { title: "Activity Feed Items", children: [
      /* @__PURE__ */ e(M, { title: "Comment Activity", description: "Interaction notifications", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
        /* @__PURE__ */ e("div", { className: "p-4 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
              alt: "User",
              className: "size-10 rounded-full flex-shrink-0"
            }
          ),
          /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ t("p", { className: "text-sm mb-1", children: [
              /* @__PURE__ */ e("span", { className: "font-medium", children: "alex_nature" }),
              " commented on your observation"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-2", children: '"Great shot! I think this might be a juvenile."' }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
              /* @__PURE__ */ e("span", { children: "2 hours ago" }),
              /* @__PURE__ */ e("span", { children: "•" }),
              /* @__PURE__ */ e("span", { children: "American Robin" })
            ] })
          ] }),
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=100&h=100&fit=crop",
              alt: "Observation",
              className: "size-12 rounded-lg object-cover flex-shrink-0"
            }
          )
        ] }) }),
        /* @__PURE__ */ e("div", { className: "p-4 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
              alt: "User",
              className: "size-10 rounded-full flex-shrink-0"
            }
          ),
          /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ t("p", { className: "text-sm mb-1", children: [
              /* @__PURE__ */ e("span", { className: "font-medium", children: "birdwatcher99" }),
              " agreed with your identification"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
              /* @__PURE__ */ e("span", { children: "5 hours ago" }),
              /* @__PURE__ */ e("span", { children: "•" }),
              /* @__PURE__ */ e("span", { children: "Monarch Butterfly" })
            ] })
          ] }),
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop",
              alt: "Observation",
              className: "size-12 rounded-lg object-cover flex-shrink-0"
            }
          )
        ] }) }),
        /* @__PURE__ */ e("div", { className: "p-4 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
              alt: "User",
              className: "size-10 rounded-full flex-shrink-0"
            }
          ),
          /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ t("p", { className: "text-sm mb-1", children: [
              /* @__PURE__ */ e("span", { className: "font-medium", children: "naturelover" }),
              " faved your observation"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
              /* @__PURE__ */ e("span", { children: "1 day ago" }),
              /* @__PURE__ */ e("span", { children: "•" }),
              /* @__PURE__ */ e("span", { children: "Ruby-throated Hummingbird" })
            ] })
          ] }),
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=100&h=100&fit=crop",
              alt: "Observation",
              className: "size-12 rounded-lg object-cover flex-shrink-0"
            }
          )
        ] }) })
      ] }) }),
      /* @__PURE__ */ e(M, { title: "Identification Activity", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
        /* @__PURE__ */ e("div", { className: "p-4 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e("div", { className: "size-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(L, { className: "size-5 text-green-600" }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ t("p", { className: "text-sm mb-1", children: [
              "Your observation reached ",
              /* @__PURE__ */ e("span", { className: "font-medium text-green-600", children: "Research Grade" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
              /* @__PURE__ */ e("span", { children: "3 hours ago" }),
              /* @__PURE__ */ e("span", { children: "•" }),
              /* @__PURE__ */ e("span", { children: "Eastern Bluebird" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "p-4 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e("div", { className: "size-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e(D, { className: "size-5 text-blue-600" }) }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("p", { className: "text-sm mb-1", children: "New identification suggested for your observation" }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
              /* @__PURE__ */ e("span", { children: "6 hours ago" }),
              /* @__PURE__ */ e("span", { children: "•" }),
              /* @__PURE__ */ e("span", { children: "House Sparrow" })
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ e(q, { title: "Observation List Items", children: /* @__PURE__ */ e(M, { title: "My Observations List", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
      /* @__PURE__ */ e("div", { className: "p-3 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=200&h=200&fit=crop",
            alt: "Observation",
            className: "size-16 rounded-lg object-cover flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm mb-0.5 truncate", children: "Northern Cardinal" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic mb-2 truncate", children: "Cardinalis cardinalis" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full", children: "Research" }),
            /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full", children: "5 IDs" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(A, { className: "size-3" }),
              "Feb 9"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(z, { className: "size-3" }),
              "Chicago, IL"
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "p-3 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1551006973-67b6f16f4e88?w=200&h=200&fit=crop",
            alt: "Observation",
            className: "size-16 rounded-lg object-cover flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm mb-0.5 truncate", children: "Eastern Bluebird" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic mb-2 truncate", children: "Sialia sialis" }),
          /* @__PURE__ */ e("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full", children: "Needs ID" }) }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(A, { className: "size-3" }),
              "Feb 8"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(z, { className: "size-3" }),
              "Atlanta, GA"
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "p-3 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=200&h=200&fit=crop",
            alt: "Observation",
            className: "size-16 rounded-lg object-cover flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm mb-0.5 truncate", children: "Ruby-throated Hummingbird" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic mb-2 truncate", children: "Archilochus colubris" }),
          /* @__PURE__ */ e("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full", children: "Casual" }) }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(A, { className: "size-3" }),
              "Feb 7"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ e(z, { className: "size-3" }),
              "Boston, MA"
            ] })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ t(q, { title: "Species List Items", children: [
      /* @__PURE__ */ e(M, { title: "Species List - With Stats", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
        /* @__PURE__ */ e("div", { className: "p-3 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=200&h=200&fit=crop",
              alt: "Species",
              className: "size-14 rounded-lg object-cover flex-shrink-0"
            }
          ),
          /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("h4", { className: "text-sm mb-0.5", children: "American Robin" }),
            /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic mb-2", children: "Turdus migratorius" }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4 text-xs text-gray-600", children: [
              /* @__PURE__ */ e("span", { children: "12,456 obs" }),
              /* @__PURE__ */ e("span", { children: "•" }),
              /* @__PURE__ */ e("span", { children: "Class: Aves" })
            ] })
          ] }),
          /* @__PURE__ */ e(k, { className: "size-5 text-gray-400 self-center flex-shrink-0" })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "p-3 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop",
              alt: "Species",
              className: "size-14 rounded-lg object-cover flex-shrink-0"
            }
          ),
          /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ e("h4", { className: "text-sm mb-0.5", children: "Monarch Butterfly" }),
            /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic mb-2", children: "Danaus plexippus" }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4 text-xs text-gray-600", children: [
              /* @__PURE__ */ e("span", { children: "8,934 obs" }),
              /* @__PURE__ */ e("span", { children: "•" }),
              /* @__PURE__ */ e("span", { children: "Class: Insecta" })
            ] })
          ] }),
          /* @__PURE__ */ e(k, { className: "size-5 text-gray-400 self-center flex-shrink-0" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ e(M, { title: "Compact Species List", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
        /* @__PURE__ */ e("button", { className: "w-full p-3 hover:bg-gray-50 transition-colors text-left", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-sm mb-0.5", children: "House Sparrow" }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500 italic", children: "Passer domesticus" })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-right", children: [
            /* @__PURE__ */ e("div", { className: "text-sm", children: "2,341" }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "obs" })
          ] })
        ] }) }),
        /* @__PURE__ */ e("button", { className: "w-full p-3 hover:bg-gray-50 transition-colors text-left", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-sm mb-0.5", children: "European Starling" }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500 italic", children: "Sturnus vulgaris" })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-right", children: [
            /* @__PURE__ */ e("div", { className: "text-sm", children: "1,892" }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "obs" })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ e(q, { title: "User/Observer Lists", children: /* @__PURE__ */ e(M, { title: "Observers List", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
      /* @__PURE__ */ e("div", { className: "p-3 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-12 rounded-full flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm mb-0.5", children: "Alex Thompson" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 mb-1", children: "@alexthompson" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-600", children: "234 observations • 156 species" })
        ] }),
        /* @__PURE__ */ e("button", { className: "px-3 py-1.5 border border-green-600 text-green-600 rounded-full text-xs hover:bg-green-50 flex-shrink-0", children: "Follow" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "p-3 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-12 rounded-full flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm mb-0.5", children: "Sarah Johnson" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 mb-1", children: "@sarahj_nature" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-600", children: "1,456 observations • 892 species" })
        ] }),
        /* @__PURE__ */ e("button", { className: "px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs flex-shrink-0", children: "Following" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ e(q, { title: "Comment Lists", children: /* @__PURE__ */ e(M, { title: "Comments Thread", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
      /* @__PURE__ */ e("div", { className: "p-4", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-8 rounded-full flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ t("div", { className: "flex items-baseline gap-2 mb-1", children: [
            /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: "naturewatcher" }),
            /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "2 hours ago" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-700 mb-2", children: "Great observation! I've seen these in the same area recently." }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t("button", { className: "flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700", children: [
              /* @__PURE__ */ e(x, { className: "size-3" }),
              "Like"
            ] }),
            /* @__PURE__ */ e("button", { className: "text-xs text-gray-500 hover:text-gray-700", children: "Reply" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "p-4", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-8 rounded-full flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ t("div", { className: "flex items-baseline gap-2 mb-1", children: [
            /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: "birdexpert" }),
            /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "5 hours ago" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-700 mb-2", children: "Based on the plumage and location, I agree with the ID. Nice find!" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t("button", { className: "flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700", children: [
              /* @__PURE__ */ e(x, { className: "size-3 fill-red-500 text-red-500" }),
              "3"
            ] }),
            /* @__PURE__ */ e("button", { className: "text-xs text-gray-500 hover:text-gray-700", children: "Reply" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "p-4 pl-14", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-8 rounded-full flex-shrink-0"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ t("div", { className: "flex items-baseline gap-2 mb-1", children: [
            /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: "observer123" }),
            /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "3 hours ago" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-700 mb-2", children: "Thanks for confirming!" }),
          /* @__PURE__ */ e("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ t("button", { className: "flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700", children: [
            /* @__PURE__ */ e(x, { className: "size-3" }),
            "Like"
          ] }) })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ e(q, { title: "Project List Items", children: /* @__PURE__ */ e(M, { title: "Projects List", children: /* @__PURE__ */ t("div", { className: "divide-y divide-gray-200", children: [
      /* @__PURE__ */ e("div", { className: "p-4 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e("div", { className: "size-16 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex-shrink-0" }),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: "City Nature Challenge 2026" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 mb-2 line-clamp-2", children: "Document urban biodiversity in your city" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
            /* @__PURE__ */ e("span", { children: "892 members" }),
            /* @__PURE__ */ e("span", { children: "•" }),
            /* @__PURE__ */ e("span", { children: "12,456 obs" })
          ] })
        ] }),
        /* @__PURE__ */ e(k, { className: "size-5 text-gray-400 self-center flex-shrink-0" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "p-4 hover:bg-gray-50", children: /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ e("div", { className: "size-16 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0" }),
        /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: "Backyard Birds 2026" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-600 mb-2 line-clamp-2", children: "Track birds visiting your backyard" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-xs text-gray-500", children: [
            /* @__PURE__ */ e("span", { children: "245 members" }),
            /* @__PURE__ */ e("span", { children: "•" }),
            /* @__PURE__ */ e("span", { children: "3,421 obs" })
          ] })
        ] }),
        /* @__PURE__ */ e(k, { className: "size-5 text-gray-400 self-center flex-shrink-0" })
      ] }) })
    ] }) }) })
  ] });
}
function O({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function o({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-white rounded-lg border border-gray-200 flex flex-wrap gap-2 items-start", children: i })
  ] });
}
function Rs() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Badges & Tags" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Status indicators, labels, chips, and category tags" })
    ] }),
    /* @__PURE__ */ t(O, { title: "Quality Grade Badges", children: [
      /* @__PURE__ */ t(o, { title: "Research Grade", description: "High confidence identifications", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm", children: [
          /* @__PURE__ */ e(L, { className: "size-4" }),
          "Research Grade"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs", children: [
          /* @__PURE__ */ e(L, { className: "size-3" }),
          "Research"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-600 text-white rounded-full text-xs", children: [
          /* @__PURE__ */ e(L, { className: "size-3" }),
          "Research"
        ] })
      ] }),
      /* @__PURE__ */ t(o, { title: "Needs ID", description: "Requires more identifications", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm", children: [
          /* @__PURE__ */ e(X, { className: "size-4" }),
          "Needs ID"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs", children: [
          /* @__PURE__ */ e(X, { className: "size-3" }),
          "Needs ID"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-600 text-white rounded-full text-xs", children: [
          /* @__PURE__ */ e(X, { className: "size-3" }),
          "Needs ID"
        ] })
      ] }),
      /* @__PURE__ */ t(o, { title: "Casual", description: "Missing data or captive", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm", children: [
          /* @__PURE__ */ e(D, { className: "size-4" }),
          "Casual"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs", children: [
          /* @__PURE__ */ e(D, { className: "size-3" }),
          "Casual"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-600 text-white rounded-full text-xs", children: [
          /* @__PURE__ */ e(D, { className: "size-3" }),
          "Casual"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(O, { title: "Status Badges", children: [
      /* @__PURE__ */ t(o, { title: "Identification Status", children: [
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm", children: "Pending Review" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm", children: "Under Discussion" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm", children: "Conflicting IDs" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm", children: "Community Taxon" })
      ] }),
      /* @__PURE__ */ t(o, { title: "Small Status Badges", children: [
        /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs", children: "Verifiable" }),
        /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs", children: "Captive" }),
        /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs", children: "Cultivated" }),
        /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs", children: "No Location" })
      ] }),
      /* @__PURE__ */ t(o, { title: "Dot Status Indicators", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full text-sm", children: [
          /* @__PURE__ */ e("span", { className: "size-2 rounded-full bg-green-500" }),
          "Active"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full text-sm", children: [
          /* @__PURE__ */ e("span", { className: "size-2 rounded-full bg-yellow-500" }),
          "Ending Soon"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full text-sm", children: [
          /* @__PURE__ */ e("span", { className: "size-2 rounded-full bg-gray-400" }),
          "Ended"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(O, { title: "Count Badges", children: [
      /* @__PURE__ */ t(o, { title: "Identification Counts", children: [
        /* @__PURE__ */ e("span", { className: "px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs", children: "3 IDs" }),
        /* @__PURE__ */ e("span", { className: "px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs", children: "12 identifications" }),
        /* @__PURE__ */ e("span", { className: "px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs", children: "5 agreeing" }),
        /* @__PURE__ */ e("span", { className: "px-2.5 py-1 bg-red-100 text-red-700 rounded-full text-xs", children: "2 conflicting" })
      ] }),
      /* @__PURE__ */ t(o, { title: "Notification Badges", children: [
        /* @__PURE__ */ t("div", { className: "relative inline-block", children: [
          /* @__PURE__ */ e("span", { className: "px-4 py-2 bg-gray-100 rounded-lg text-sm", children: "Activity" }),
          /* @__PURE__ */ e("span", { className: "absolute -top-1 -right-1 size-5 flex items-center justify-center bg-red-600 text-white text-xs rounded-full", children: "3" })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative inline-block", children: [
          /* @__PURE__ */ e("span", { className: "px-4 py-2 bg-gray-100 rounded-lg text-sm", children: "Messages" }),
          /* @__PURE__ */ e("span", { className: "absolute -top-1 -right-1 size-5 flex items-center justify-center bg-red-600 text-white text-xs rounded-full", children: "12" })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative inline-block", children: [
          /* @__PURE__ */ e("span", { className: "px-4 py-2 bg-gray-100 rounded-lg text-sm", children: "Notifications" }),
          /* @__PURE__ */ e("span", { className: "absolute -top-1 -right-1 size-2 bg-red-600 rounded-full" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(O, { title: "Category Tags", children: [
      /* @__PURE__ */ t(o, { title: "Taxonomy Tags", description: "Classification categories", children: [
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm", children: "Birds" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm", children: "Plants" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm", children: "Fungi" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm", children: "Insects" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm", children: "Mammals" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm", children: "Reptiles" })
      ] }),
      /* @__PURE__ */ t(o, { title: "Small Category Tags", children: [
        /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs", children: "Aves" }),
        /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs", children: "Plantae" }),
        /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs", children: "Animalia" }),
        /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs", children: "Insecta" })
      ] }),
      /* @__PURE__ */ t(o, { title: "Project Type Tags", children: [
        /* @__PURE__ */ e("span", { className: "px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm", children: "Collection" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm", children: "Bioblitz" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm", children: "Traditional" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm", children: "Umbrella" })
      ] })
    ] }),
    /* @__PURE__ */ t(O, { title: "Achievement Badges", children: [
      /* @__PURE__ */ t(o, { title: "User Achievements", description: "Gamification and milestones", children: [
        /* @__PURE__ */ t("div", { className: "inline-flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ e("div", { className: "size-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center", children: /* @__PURE__ */ e(se, { className: "size-6 text-white" }) }),
          /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Top Observer" })
        ] }),
        /* @__PURE__ */ t("div", { className: "inline-flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ e("div", { className: "size-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center", children: /* @__PURE__ */ e(ze, { className: "size-6 text-white" }) }),
          /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "100 Species" })
        ] }),
        /* @__PURE__ */ t("div", { className: "inline-flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ e("div", { className: "size-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center", children: /* @__PURE__ */ e(ee, { className: "size-6 text-white" }) }),
          /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Expert ID" })
        ] }),
        /* @__PURE__ */ t("div", { className: "inline-flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ e("div", { className: "size-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center", children: /* @__PURE__ */ e(p, { className: "size-6 text-white" }) }),
          /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "1000 Obs" })
        ] })
      ] }),
      /* @__PURE__ */ t(o, { title: "Small Achievement Badges", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full text-xs", children: [
          /* @__PURE__ */ e(se, { className: "size-3" }),
          "Streak: 7 days"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs", children: [
          /* @__PURE__ */ e(ee, { className: "size-3" }),
          "Expert"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs", children: [
          /* @__PURE__ */ e(L, { className: "size-3" }),
          "Verified"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(O, { title: "Interactive Tags", children: [
      /* @__PURE__ */ t(o, { title: "Removable Tags", description: "Tags with close button", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm", children: [
          "garden",
          /* @__PURE__ */ e("button", { className: "hover:text-green-900", children: /* @__PURE__ */ e(le, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm", children: [
          "backyard",
          /* @__PURE__ */ e("button", { className: "hover:text-blue-900", children: /* @__PURE__ */ e(le, { className: "size-3.5" }) })
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm", children: [
          "wildlife",
          /* @__PURE__ */ e("button", { className: "hover:text-purple-900", children: /* @__PURE__ */ e(le, { className: "size-3.5" }) })
        ] })
      ] }),
      /* @__PURE__ */ t(o, { title: "Selectable Tags", children: [
        /* @__PURE__ */ e("button", { className: "px-3 py-1.5 bg-green-600 text-white rounded-full text-sm", children: "All" }),
        /* @__PURE__ */ e("button", { className: "px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200", children: "Plants" }),
        /* @__PURE__ */ e("button", { className: "px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200", children: "Animals" }),
        /* @__PURE__ */ e("button", { className: "px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200", children: "Fungi" })
      ] }),
      /* @__PURE__ */ t(o, { title: "Checkbox Tags", children: [
        /* @__PURE__ */ t("label", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200", children: [
          /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded text-green-600" }),
          "Has Photos"
        ] }),
        /* @__PURE__ */ t("label", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200", children: [
          /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded text-green-600", defaultChecked: !0 }),
          "Has Location"
        ] }),
        /* @__PURE__ */ t("label", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm cursor-pointer hover:bg-gray-200", children: [
          /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded text-green-600" }),
          "Has Sounds"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(O, { title: "Contextual Badges", children: [
      /* @__PURE__ */ t(o, { title: "Location Badges", children: [
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm", children: "Obscured" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm", children: "Private" }),
        /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm", children: "Public" })
      ] }),
      /* @__PURE__ */ t(o, { title: "Date Badges", children: [
        /* @__PURE__ */ e("span", { className: "px-2.5 py-1 bg-blue-100 text-blue-700 rounded text-xs", children: "Today" }),
        /* @__PURE__ */ e("span", { className: "px-2.5 py-1 bg-blue-100 text-blue-700 rounded text-xs", children: "This Week" }),
        /* @__PURE__ */ e("span", { className: "px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs", children: "Feb 2026" })
      ] }),
      /* @__PURE__ */ t(o, { title: "Featured/Special Badges", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm", children: [
          /* @__PURE__ */ e(ee, { className: "size-3 fill-white" }),
          "Featured"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm", children: [
          /* @__PURE__ */ e(se, { className: "size-3" }),
          "Staff Pick"
        ] }),
        /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm", children: "New" })
      ] })
    ] })
  ] });
}
function F({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function d({ title: r, description: l, children: i, dark: b }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: `rounded-lg overflow-hidden ${b ? "bg-gray-900" : "bg-white border border-gray-200"}`, children: i })
  ] });
}
function qs() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Headers" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Page headers, section titles, and header patterns" })
    ] }),
    /* @__PURE__ */ t(F, { title: "Page Headers", children: [
      /* @__PURE__ */ e(d, { title: "Header with Title Only", children: /* @__PURE__ */ e("div", { className: "px-4 py-4 border-b border-gray-200", children: /* @__PURE__ */ e("h1", { className: "text-2xl", children: "Explore" }) }) }),
      /* @__PURE__ */ e(d, { title: "Header with Title and Subtitle", children: /* @__PURE__ */ t("div", { className: "px-4 py-4 border-b border-gray-200", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl mb-1", children: "My Observations" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "1,234 total observations" })
      ] }) }),
      /* @__PURE__ */ e(d, { title: "Large Header with Description", children: /* @__PURE__ */ t("div", { className: "px-6 py-6 border-b border-gray-200", children: [
        /* @__PURE__ */ e("h1", { className: "text-3xl mb-2", children: "City Nature Challenge 2026" }),
        /* @__PURE__ */ e("p", { className: "text-gray-600 mb-4", children: "Join thousands of nature enthusiasts documenting biodiversity in cities around the world" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-4 text-sm text-gray-500", children: [
          /* @__PURE__ */ e("span", { children: "Feb 9-16, 2026" }),
          /* @__PURE__ */ e("span", { children: "•" }),
          /* @__PURE__ */ e("span", { children: "Global Event" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(F, { title: "Headers with Actions", children: [
      /* @__PURE__ */ e(d, { title: "Header with Back Button", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-gray-200", children: [
        /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e($, { className: "size-6" }) }),
        /* @__PURE__ */ e("h1", { className: "text-xl flex-1", children: "Observation Details" })
      ] }) }),
      /* @__PURE__ */ e(d, { title: "Header with Back and Menu", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200", children: [
        /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e($, { className: "size-6" }) }),
        /* @__PURE__ */ e("h1", { className: "text-xl", children: "Species Profile" }),
        /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(H, { className: "size-6" }) })
      ] }) }),
      /* @__PURE__ */ e(d, { title: "Header with Multiple Actions", children: /* @__PURE__ */ e("div", { className: "px-4 py-3 border-b border-gray-200", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl", children: "Projects" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(ne, { className: "size-5" }) }),
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(ce, { className: "size-5" }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(d, { title: "Header with Cancel/Save", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200", children: [
        /* @__PURE__ */ e("button", { className: "text-gray-600 hover:text-gray-800", children: "Cancel" }),
        /* @__PURE__ */ e("h1", { className: "text-lg", children: "Edit Observation" }),
        /* @__PURE__ */ e("button", { className: "text-green-600 hover:text-green-700", children: "Save" })
      ] }) }),
      /* @__PURE__ */ e(d, { title: "Header with Close/Share", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-200", children: [
        /* @__PURE__ */ e("h1", { className: "text-xl flex-1", children: "American Robin" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(Z, { className: "size-5" }) }),
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(H, { className: "size-5" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(F, { title: "Transparent/Overlay Headers", children: [
      /* @__PURE__ */ e(d, { title: "Transparent Header - Over Image", dark: !0, children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e("div", { className: "h-64 bg-gradient-to-b from-gray-800 to-gray-600" }),
        /* @__PURE__ */ t("div", { className: "absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3", children: [
          /* @__PURE__ */ e("button", { className: "p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/40", children: /* @__PURE__ */ e($, { className: "size-6 text-white" }) }),
          /* @__PURE__ */ e("button", { className: "p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/40", children: /* @__PURE__ */ e(H, { className: "size-6 text-white" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ e(d, { title: "Gradient Header Overlay", dark: !0, children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e("div", { className: "h-64 bg-gradient-to-b from-gray-800 to-gray-600" }),
        /* @__PURE__ */ e("div", { className: "absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3 px-4 py-3", children: [
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-white/10 rounded-full", children: /* @__PURE__ */ e($, { className: "size-6 text-white" }) }),
          /* @__PURE__ */ e("h1", { className: "text-xl text-white flex-1", children: "Observation" }),
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-white/10 rounded-full", children: /* @__PURE__ */ e(Z, { className: "size-6 text-white" }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ t(F, { title: "Section Headers", children: [
      /* @__PURE__ */ e(d, { title: "Simple Section Header", children: /* @__PURE__ */ e("div", { className: "px-4 py-3 bg-gray-50 border-b border-gray-200", children: /* @__PURE__ */ e("h2", { className: "text-lg", children: "Recent Observations" }) }) }),
      /* @__PURE__ */ e(d, { title: "Section Header with Count", children: /* @__PURE__ */ e("div", { className: "px-4 py-3 bg-gray-50 border-b border-gray-200", children: /* @__PURE__ */ t("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg", children: "Identifications" }),
        /* @__PURE__ */ e("span", { className: "text-sm text-gray-500", children: "(24)" })
      ] }) }) }),
      /* @__PURE__ */ e(d, { title: "Section Header with Action", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg", children: "Similar Species" }),
        /* @__PURE__ */ e("button", { className: "text-green-600 hover:text-green-700 text-sm", children: "View All" })
      ] }) }),
      /* @__PURE__ */ e(d, { title: "Collapsible Section Header", children: /* @__PURE__ */ e("div", { className: "px-4 py-3 bg-gray-50 border-b border-gray-200", children: /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between text-left", children: [
        /* @__PURE__ */ e("h2", { className: "text-lg", children: "Observation Fields" }),
        /* @__PURE__ */ e($, { className: "size-5 text-gray-400 -rotate-90" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ e(F, { title: "Sticky Headers", children: /* @__PURE__ */ t(d, { title: "Sticky Header with Shadow", children: [
      /* @__PURE__ */ e("div", { className: "sticky top-0 z-10", children: /* @__PURE__ */ e("div", { className: "px-4 py-3 bg-white border-b border-gray-200 shadow-sm", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e("h1", { className: "text-xl", children: "Observations" }),
        /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(ne, { className: "size-5" }) })
      ] }) }) }),
      /* @__PURE__ */ e("div", { className: "p-4 text-sm text-gray-500", children: "(Content would scroll beneath the header)" })
    ] }) }),
    /* @__PURE__ */ t(F, { title: "Headers with Tabs", children: [
      /* @__PURE__ */ e(d, { title: "Header with Tab Navigation", children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ t("div", { className: "px-4 pt-4 pb-0 bg-white", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl mb-4", children: "User Profile" }),
        /* @__PURE__ */ t("div", { className: "flex gap-6 border-b border-gray-200", children: [
          /* @__PURE__ */ e("button", { className: "pb-3 border-b-2 border-green-600 text-green-600", children: "Observations" }),
          /* @__PURE__ */ e("button", { className: "pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700", children: "Species" }),
          /* @__PURE__ */ e("button", { className: "pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700", children: "Journal" }),
          /* @__PURE__ */ e("button", { className: "pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700", children: "About" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(d, { title: "Compact Header with Pill Tabs", children: /* @__PURE__ */ t("div", { className: "px-4 py-3 bg-white border-b border-gray-200", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ e("h2", { className: "text-xl", children: "Activity" }),
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(ce, { className: "size-5" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ e("button", { className: "px-4 py-1.5 bg-green-600 text-white rounded-full text-sm", children: "All" }),
          /* @__PURE__ */ e("button", { className: "px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm", children: "Comments" }),
          /* @__PURE__ */ e("button", { className: "px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm", children: "IDs" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(F, { title: "Headers with Stats", children: [
      /* @__PURE__ */ e(d, { title: "Header with Statistics", children: /* @__PURE__ */ t("div", { className: "px-6 py-5 bg-white border-b border-gray-200", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl mb-4", children: "City Nature Challenge 2026" }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-2xl mb-1", children: "12,456" }),
            /* @__PURE__ */ e("div", { className: "text-sm text-gray-600", children: "Observations" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-2xl mb-1", children: "892" }),
            /* @__PURE__ */ e("div", { className: "text-sm text-gray-600", children: "Participants" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-2xl mb-1", children: "1,234" }),
            /* @__PURE__ */ e("div", { className: "text-sm text-gray-600", children: "Species" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(d, { title: "User Header with Avatar and Stats", children: /* @__PURE__ */ t("div", { className: "px-6 py-5 bg-white border-b border-gray-200", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
              alt: "User",
              className: "size-16 rounded-full"
            }
          ),
          /* @__PURE__ */ t("div", { className: "flex-1", children: [
            /* @__PURE__ */ e("h1", { className: "text-xl mb-1", children: "Alex Thompson" }),
            /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "@alexthompson" })
          ] }),
          /* @__PURE__ */ e("button", { className: "px-4 py-2 border border-green-600 text-green-600 rounded-full text-sm hover:bg-green-50", children: "Follow" })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-4 text-center text-sm", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-lg", children: "1,234" }),
            /* @__PURE__ */ e("div", { className: "text-gray-600", children: "Observations" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-lg", children: "456" }),
            /* @__PURE__ */ e("div", { className: "text-gray-600", children: "Species" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-lg", children: "89" }),
            /* @__PURE__ */ e("div", { className: "text-gray-600", children: "IDs" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e(F, { title: "Hero Headers", children: /* @__PURE__ */ e(d, { title: "Hero Header with Background", dark: !0, children: /* @__PURE__ */ e("div", { className: "relative h-80 bg-gradient-to-br from-green-600 to-emerald-700", children: /* @__PURE__ */ t("div", { className: "absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent text-white", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl mb-2", children: "Discover Nature Around You" }),
      /* @__PURE__ */ e("p", { className: "text-white/90 mb-4", children: "Join millions of people documenting and learning about biodiversity" }),
      /* @__PURE__ */ e("button", { className: "self-start px-6 py-3 bg-white text-green-700 rounded-full hover:bg-gray-100", children: "Get Started" })
    ] }) }) }) })
  ] });
}
function V({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function u({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-gray-50 rounded-lg", children: i })
  ] });
}
function Os() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Images & Media" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Photo grids, thumbnails, avatars, and media display patterns" })
    ] }),
    /* @__PURE__ */ t(V, { title: "Avatars", children: [
      /* @__PURE__ */ e(u, { title: "Avatar Sizes", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-8 rounded-full"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-10 rounded-full"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-12 rounded-full"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-16 rounded-full"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-20 rounded-full"
          }
        )
      ] }) }),
      /* @__PURE__ */ e(u, { title: "Avatar with Border", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-12 rounded-full border-2 border-white shadow-sm"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-12 rounded-full border-2 border-green-500"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-12 rounded-full ring-2 ring-green-500 ring-offset-2"
          }
        )
      ] }) }),
      /* @__PURE__ */ e(u, { title: "Avatar Stack", children: /* @__PURE__ */ t("div", { className: "flex items-center", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-10 rounded-full border-2 border-white shadow-sm"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-10 rounded-full border-2 border-white shadow-sm -ml-3"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            alt: "User",
            className: "size-10 rounded-full border-2 border-white shadow-sm -ml-3"
          }
        ),
        /* @__PURE__ */ e("div", { className: "size-10 rounded-full border-2 border-white shadow-sm -ml-3 bg-gray-200 flex items-center justify-center text-xs text-gray-600", children: "+12" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(V, { title: "Thumbnails", children: [
      /* @__PURE__ */ e(u, { title: "Square Thumbnails", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-4 gap-2 max-w-md", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1702525518548-48dcdb153e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200",
            alt: "Butterfly",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1678048632153-d961f9c37a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200",
            alt: "Bird",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1682971291335-193d11f84a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200",
            alt: "Flower",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1663639681732-ed83fe086a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200",
            alt: "Mushroom",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        )
      ] }) }),
      /* @__PURE__ */ e(u, { title: "Rectangular Thumbnails", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-2 max-w-lg", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1668900030471-170e936b201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=200",
            alt: "Forest",
            className: "w-full aspect-video rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1683482170250-bdeb2844a2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=200",
            alt: "Frog",
            className: "w-full aspect-video rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1623584402789-23d19bd4a7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=200",
            alt: "Beetle",
            className: "w-full aspect-video rounded-lg object-cover"
          }
        )
      ] }) }),
      /* @__PURE__ */ e(u, { title: "Thumbnail with Overlay Badge", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-2 max-w-lg", children: [
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1702525518548-48dcdb153e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200",
              alt: "Butterfly",
              className: "w-full aspect-square rounded-lg object-cover"
            }
          ),
          /* @__PURE__ */ e("div", { className: "absolute top-2 right-2 px-2 py-1 bg-green-600 text-white text-xs rounded-full", children: "Research" })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1678048632153-d961f9c37a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200",
              alt: "Bird",
              className: "w-full aspect-square rounded-lg object-cover"
            }
          ),
          /* @__PURE__ */ t("div", { className: "absolute bottom-2 left-2 flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded", children: [
            /* @__PURE__ */ e(z, { className: "size-3" }),
            "San Francisco"
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: "https://images.unsplash.com/photo-1682971291335-193d11f84a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200",
              alt: "Flower",
              className: "w-full aspect-square rounded-lg object-cover"
            }
          ),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg", children: /* @__PURE__ */ e("div", { className: "size-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ e(ie, { className: "size-5 text-gray-700" }) }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(V, { title: "Photo Grids", children: [
      /* @__PURE__ */ e(u, { title: "2-Column Grid", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2 max-w-md", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1702525518548-48dcdb153e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
            alt: "Butterfly",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1678048632153-d961f9c37a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
            alt: "Bird",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1682971291335-193d11f84a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
            alt: "Flower",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1663639681732-ed83fe086a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
            alt: "Mushroom",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        )
      ] }) }),
      /* @__PURE__ */ e(u, { title: "3-Column Grid", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-2 max-w-2xl", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1668900030471-170e936b201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Forest",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1683482170250-bdeb2844a2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Frog",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1623584402789-23d19bd4a7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Beetle",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1643717094992-5ab09ef07263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Cactus",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1702525518548-48dcdb153e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Butterfly",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1678048632153-d961f9c37a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Bird",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        )
      ] }) }),
      /* @__PURE__ */ e(u, { title: "Mixed Layout Grid", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-4 gap-2 max-w-2xl", children: [
        /* @__PURE__ */ e("div", { className: "col-span-2 row-span-2", children: /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1702525518548-48dcdb153e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=600",
            alt: "Butterfly",
            className: "w-full h-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1678048632153-d961f9c37a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Bird",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1682971291335-193d11f84a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Flower",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1663639681732-ed83fe086a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Mushroom",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        ),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1668900030471-170e936b201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
            alt: "Forest",
            className: "w-full aspect-square rounded-lg object-cover"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ t(V, { title: "Image Carousels", children: [
      /* @__PURE__ */ e(u, { title: "Image Carousel Indicators", children: /* @__PURE__ */ e("div", { className: "max-w-md bg-white rounded-xl overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1702525518548-48dcdb153e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600",
            alt: "Butterfly",
            className: "w-full aspect-video object-cover"
          }
        ),
        /* @__PURE__ */ t("div", { className: "absolute bottom-3 left-0 right-0 flex justify-center gap-1.5", children: [
          /* @__PURE__ */ e("div", { className: "size-2 rounded-full bg-white" }),
          /* @__PURE__ */ e("div", { className: "size-2 rounded-full bg-white/50" }),
          /* @__PURE__ */ e("div", { className: "size-2 rounded-full bg-white/50" }),
          /* @__PURE__ */ e("div", { className: "size-2 rounded-full bg-white/50" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(u, { title: "Image Counter", children: /* @__PURE__ */ e("div", { className: "max-w-md bg-white rounded-xl overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1678048632153-d961f9c37a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600",
            alt: "Bird",
            className: "w-full aspect-video object-cover"
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute top-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full", children: "1 / 4" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ t(V, { title: "Media Types", children: [
      /* @__PURE__ */ e(u, { title: "Video Thumbnail", children: /* @__PURE__ */ e("div", { className: "max-w-xs bg-white rounded-xl overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1682971291335-193d11f84a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=300",
            alt: "Flower Video",
            className: "w-full aspect-video object-cover"
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20", children: /* @__PURE__ */ e("div", { className: "size-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg", children: /* @__PURE__ */ e(ie, { className: "size-6 text-gray-700 ml-1" }) }) }),
        /* @__PURE__ */ e("div", { className: "absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded", children: "2:34" })
      ] }) }) }),
      /* @__PURE__ */ e(u, { title: "Audio/Sound Thumbnail", children: /* @__PURE__ */ e("div", { className: "max-w-xs bg-white rounded-xl overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e("div", { className: "w-full aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center", children: /* @__PURE__ */ e(xe, { className: "size-16 text-white/50" }) }),
        /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("div", { className: "size-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg", children: /* @__PURE__ */ e(ie, { className: "size-6 text-gray-700 ml-1" }) }) }),
        /* @__PURE__ */ t("div", { className: "absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded flex items-center gap-1", children: [
          /* @__PURE__ */ e(xe, { className: "size-3" }),
          "0:15"
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(u, { title: "Multiple Photos Indicator", children: /* @__PURE__ */ e("div", { className: "max-w-xs bg-white rounded-xl overflow-hidden shadow-sm", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ t("div", { className: "absolute top-2 right-2 flex gap-1", children: [
          /* @__PURE__ */ e("div", { className: "size-12 rounded-lg bg-white/30 backdrop-blur-sm border border-white/50 -rotate-6" }),
          /* @__PURE__ */ e("div", { className: "size-12 rounded-lg bg-white/50 backdrop-blur-sm border border-white/50 rotate-6" })
        ] }),
        /* @__PURE__ */ e(
          "img",
          {
            src: "https://images.unsplash.com/photo-1702525518548-48dcdb153e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
            alt: "Butterfly",
            className: "w-full aspect-square object-cover"
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded", children: "+3 photos" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ t(V, { title: "Empty States", children: [
      /* @__PURE__ */ e(u, { title: "No Photo Placeholder", children: /* @__PURE__ */ e("div", { className: "max-w-xs", children: /* @__PURE__ */ e("div", { className: "aspect-square rounded-lg bg-gray-200 flex items-center justify-center", children: /* @__PURE__ */ t("div", { className: "text-center text-gray-400", children: [
        /* @__PURE__ */ e("div", { className: "size-16 mx-auto mb-2 rounded-full bg-gray-300 flex items-center justify-center", children: /* @__PURE__ */ e(z, { className: "size-8" }) }),
        /* @__PURE__ */ e("p", { className: "text-sm", children: "No photo" })
      ] }) }) }) }),
      /* @__PURE__ */ e(u, { title: "Loading Skeleton", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-2 max-w-md", children: [
        /* @__PURE__ */ e("div", { className: "aspect-square rounded-lg bg-gray-200 animate-pulse" }),
        /* @__PURE__ */ e("div", { className: "aspect-square rounded-lg bg-gray-200 animate-pulse" }),
        /* @__PURE__ */ e("div", { className: "aspect-square rounded-lg bg-gray-200 animate-pulse" }),
        /* @__PURE__ */ e("div", { className: "aspect-square rounded-lg bg-gray-200 animate-pulse" })
      ] }) })
    ] })
  ] });
}
function _({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function n({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-white rounded-lg border border-gray-200", children: i })
  ] });
}
function Ds() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Typography" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Text styles, headings, labels, and content formatting" })
    ] }),
    /* @__PURE__ */ t(_, { title: "Headings", children: [
      /* @__PURE__ */ e(n, { title: "Page Titles", description: "Main page headings", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e("h1", { className: "text-3xl", children: "City Nature Challenge 2026" }),
        /* @__PURE__ */ e("h1", { className: "text-2xl", children: "Explore Observations" }),
        /* @__PURE__ */ e("h1", { className: "text-xl", children: "My Profile" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Section Headings", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e("h2", { className: "text-xl", children: "Recent Activity" }),
        /* @__PURE__ */ e("h2", { className: "text-lg", children: "Similar Species" }),
        /* @__PURE__ */ e("h3", { className: "text-base", children: "Observation Details" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Card Titles", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e("h3", { className: "text-lg", children: "American Robin" }),
        /* @__PURE__ */ e("h3", { className: "text-base", children: "Monarch Butterfly" }),
        /* @__PURE__ */ e("h4", { className: "text-sm", children: "House Sparrow" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Scientific Names", children: [
      /* @__PURE__ */ e(n, { title: "Species Names", description: "Italicized taxonomic names", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-base text-gray-500 italic", children: "Turdus migratorius" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 italic", children: "Danaus plexippus" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic", children: "Passer domesticus" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Combined Common + Scientific", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-lg mb-1", children: "American Robin" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 italic", children: "Turdus migratorius" })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-base mb-0.5", children: "Monarch Butterfly" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 italic", children: "Danaus plexippus" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Body Text", children: [
      /* @__PURE__ */ e(n, { title: "Regular Body Text", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e("p", { className: "text-base text-gray-700", children: "This is a regular paragraph of text that would appear in observation descriptions or project details." }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-700", children: "Smaller body text used for secondary content, comments, or additional information." }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-700", children: "Extra small text for fine print, timestamps, or tertiary information." })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Muted/Secondary Text", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-base text-gray-600", children: "Secondary text color for less important information" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-500", children: "Muted text for timestamps and metadata" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "Very subtle text for fine details" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Description Text", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-700 leading-relaxed", children: "Observed in backyard garden during morning hours. Bird was actively foraging for worms in freshly watered soil. Plumage appeared healthy with characteristic orange-red breast clearly visible." }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 line-clamp-2", children: "This is a long description that will be truncated after two lines using the line-clamp utility. Additional content here that won't be visible unless expanded." })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Labels & Metadata", children: [
      /* @__PURE__ */ e(n, { title: "Field Labels", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e("label", { className: "block text-sm text-gray-700", children: "Species Name" }),
        /* @__PURE__ */ e("label", { className: "block text-xs text-gray-600", children: "Observation Date" }),
        /* @__PURE__ */ e("label", { className: "block text-xs text-gray-500 uppercase tracking-wide", children: "Location" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Inline Metadata", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ e("span", { children: "San Francisco, CA" }),
          /* @__PURE__ */ e("span", { children: "•" }),
          /* @__PURE__ */ e("span", { children: "Feb 9, 2026" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [
          /* @__PURE__ */ e("span", { children: "234 observations" }),
          /* @__PURE__ */ e("span", { children: "•" }),
          /* @__PURE__ */ e("span", { children: "Class: Aves" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Counts & Stats", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl mb-1", children: "12,456" }),
          /* @__PURE__ */ e("div", { className: "text-sm text-gray-600", children: "Observations" })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("div", { className: "text-2xl mb-1", children: "892" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Participants" })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-xl text-gray-900", children: "1,234" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-gray-500", children: "Species" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Usernames & Links", children: [
      /* @__PURE__ */ e(n, { title: "Username Styles", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-base font-medium", children: "@naturelover" }),
        /* @__PURE__ */ e("p", { className: "text-sm font-medium", children: "alex_nature" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-600", children: "@jsmith" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Links", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("a", { href: "#", className: "text-green-600 hover:underline", children: "View all observations" }),
        /* @__PURE__ */ e("a", { href: "#", className: "text-green-600 hover:underline text-sm", children: "See more" }),
        /* @__PURE__ */ e("a", { href: "#", className: "text-blue-600 hover:underline text-sm", children: "Learn more about this species" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Timestamps", children: [
      /* @__PURE__ */ e(n, { title: "Relative Time", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "2 hours ago" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "5 hours ago" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "1 day ago" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "3 weeks ago" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Full Dates", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "Feb 9, 2026" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "Feb 9, 2026 10:23 AM" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "February 9, 2026" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "2026-02-09" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Special Text Styles", children: [
      /* @__PURE__ */ e(n, { title: "Truncation", children: /* @__PURE__ */ t("div", { className: "space-y-3 max-w-xs", children: [
        /* @__PURE__ */ e("p", { className: "text-sm truncate", children: "This is a very long text that will be truncated with an ellipsis when it exceeds the container width" }),
        /* @__PURE__ */ e("p", { className: "text-sm line-clamp-2", children: "This is a longer paragraph that will be clamped to exactly two lines using the line-clamp utility. Any text beyond the second line will be hidden with an ellipsis." }),
        /* @__PURE__ */ e("p", { className: "text-sm line-clamp-3", children: "This text can span up to three lines before it gets truncated. This is useful for preview text in cards or list items where you want to show a bit more content but still maintain a consistent layout across items." })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Text Alignment", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e("p", { className: "text-left text-sm", children: "Left aligned text (default)" }),
        /* @__PURE__ */ e("p", { className: "text-center text-sm", children: "Center aligned text" }),
        /* @__PURE__ */ e("p", { className: "text-right text-sm", children: "Right aligned text" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Text Transform", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-xs uppercase tracking-wide text-gray-600", children: "Uppercase Label" }),
        /* @__PURE__ */ e("p", { className: "text-sm capitalize", children: "capitalized text style" }),
        /* @__PURE__ */ e("p", { className: "text-sm font-medium tracking-tight", children: "Tight tracking for headings" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Emphasis & State", children: [
      /* @__PURE__ */ e(n, { title: "Font Weights", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-base font-light", children: "Light weight text (300)" }),
        /* @__PURE__ */ e("p", { className: "text-base", children: "Regular weight text (400)" }),
        /* @__PURE__ */ e("p", { className: "text-base font-medium", children: "Medium weight text (500)" }),
        /* @__PURE__ */ e("p", { className: "text-base font-semibold", children: "Semibold weight text (600)" }),
        /* @__PURE__ */ e("p", { className: "text-base font-bold", children: "Bold weight text (700)" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Color States", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-900", children: "Primary text color" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-700", children: "Secondary text color" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-500", children: "Muted text color" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-green-600", children: "Success / Primary brand color" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-blue-600", children: "Info / Link color" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-yellow-700", children: "Warning color" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-red-600", children: "Error / Danger color" })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Interactive Text States", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 hover:text-gray-900 cursor-pointer", children: "Hover to see color change" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-green-600 hover:text-green-700 cursor-pointer", children: "Hoverable link text" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-400 cursor-not-allowed", children: "Disabled text state" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Lists", children: [
      /* @__PURE__ */ e(n, { title: "Unordered Lists", children: /* @__PURE__ */ t("ul", { className: "space-y-2 text-sm text-gray-700", children: [
        /* @__PURE__ */ t("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ e("span", { className: "text-gray-400 mt-1", children: "•" }),
          /* @__PURE__ */ e("span", { children: "First list item with bullet point" })
        ] }),
        /* @__PURE__ */ t("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ e("span", { className: "text-gray-400 mt-1", children: "•" }),
          /* @__PURE__ */ e("span", { children: "Second list item with bullet point" })
        ] }),
        /* @__PURE__ */ t("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ e("span", { className: "text-gray-400 mt-1", children: "•" }),
          /* @__PURE__ */ e("span", { children: "Third list item with bullet point" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Ordered Lists", children: /* @__PURE__ */ t("ol", { className: "space-y-2 text-sm text-gray-700", children: [
        /* @__PURE__ */ t("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ e("span", { className: "text-gray-500 font-medium", children: "1." }),
          /* @__PURE__ */ e("span", { children: "First numbered item" })
        ] }),
        /* @__PURE__ */ t("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ e("span", { className: "text-gray-500 font-medium", children: "2." }),
          /* @__PURE__ */ e("span", { children: "Second numbered item" })
        ] }),
        /* @__PURE__ */ t("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ e("span", { className: "text-gray-500 font-medium", children: "3." }),
          /* @__PURE__ */ e("span", { children: "Third numbered item" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(_, { title: "Helper Text", children: [
      /* @__PURE__ */ e(n, { title: "Input Helper Text", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-1 text-gray-700", children: "Species Name" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "Enter the common or scientific name" })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-1 text-gray-700", children: "Location" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-red-600", children: "Location is required for research grade observations" })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-1 text-gray-700", children: "Date Observed" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-green-600", children: "Date successfully validated" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(n, { title: "Placeholder Text", children: /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-400 italic", children: "No description provided" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-400", children: "No location data" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-400", children: "Empty state message" })
      ] }) })
    ] })
  ] });
}
function G({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function v({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-gray-100 rounded-lg", children: i })
  ] });
}
function Es() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Modals & Dialogs" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Modal windows, dialogs, bottom sheets, and overlay patterns" })
    ] }),
    /* @__PURE__ */ t(G, { title: "Standard Modals", children: [
      /* @__PURE__ */ e(v, { title: "Basic Modal", description: "Simple modal with header and content", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-xl shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-6 py-4 border-b border-gray-200", children: [
          /* @__PURE__ */ e("h2", { className: "text-xl", children: "Edit Observation" }),
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(j, { className: "size-5 text-gray-500" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-6", children: [
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-4", children: "Make changes to your observation details below." }),
          /* @__PURE__ */ t("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                placeholder: "Species name",
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              }
            ),
            /* @__PURE__ */ e(
              "textarea",
              {
                placeholder: "Add notes...",
                rows: 3,
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "px-6 py-4 bg-gray-50 flex gap-3 justify-end", children: [
          /* @__PURE__ */ e("button", { className: "px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg", children: "Cancel" }),
          /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700", children: "Save Changes" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(v, { title: "Modal with Scrollable Content", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-xl shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-6 py-4 border-b border-gray-200", children: [
          /* @__PURE__ */ e("h2", { className: "text-xl", children: "Species Information" }),
          /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(j, { className: "size-5 text-gray-500" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "px-6 py-4 max-h-64 overflow-y-auto", children: [
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-700 mb-3", children: "The American Robin is a migratory songbird of the true thrush genus and Turdidae, the wider thrush family." }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-700 mb-3", children: "It is named after the European robin because of its reddish-orange breast, though the two species are not closely related." }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-700", children: "The American robin is active mostly during the day and assembles in large flocks at night." })
        ] }),
        /* @__PURE__ */ e("div", { className: "px-6 py-4 border-t border-gray-200", children: /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700", children: "Close" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ t(G, { title: "Alert Modals", children: [
      /* @__PURE__ */ e(v, { title: "Success Alert", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl shadow-xl p-6 text-center", children: [
        /* @__PURE__ */ e("div", { className: "size-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center", children: /* @__PURE__ */ e(L, { className: "size-8 text-green-600" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Observation Submitted!" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "Your observation has been successfully submitted and is now awaiting identification." }),
        /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700", children: "View Observation" })
      ] }) }),
      /* @__PURE__ */ e(v, { title: "Error Alert", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl shadow-xl p-6 text-center", children: [
        /* @__PURE__ */ e("div", { className: "size-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center", children: /* @__PURE__ */ e(D, { className: "size-8 text-red-600" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Upload Failed" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "There was an error uploading your observation. Please check your connection and try again." }),
        /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50", children: "Cancel" }),
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700", children: "Retry" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(v, { title: "Warning Alert", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl shadow-xl p-6 text-center", children: [
        /* @__PURE__ */ e("div", { className: "size-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center", children: /* @__PURE__ */ e(Ae, { className: "size-8 text-yellow-600" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Missing Location Data" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "This observation doesn't have location data. Would you like to add it now?" }),
        /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50", children: "Skip" }),
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700", children: "Add Location" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(v, { title: "Info Alert", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl shadow-xl p-6 text-center", children: [
        /* @__PURE__ */ e("div", { className: "size-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center", children: /* @__PURE__ */ e(ke, { className: "size-8 text-blue-600" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Research Grade!" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "Your observation has reached Research Grade with 3 confirming identifications." }),
        /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700", children: "Got it" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(G, { title: "Confirmation Dialogs", children: [
      /* @__PURE__ */ e(v, { title: "Delete Confirmation", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl shadow-xl p-6", children: [
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Delete Observation?" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "Are you sure you want to delete this observation? This action cannot be undone." }),
        /* @__PURE__ */ t("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50", children: "Cancel" }),
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700", children: "Delete" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(v, { title: "Leave Confirmation", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl shadow-xl p-6", children: [
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Unsaved Changes" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "You have unsaved changes. Are you sure you want to leave without saving?" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700", children: "Save Changes" }),
          /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50", children: "Discard Changes" }),
          /* @__PURE__ */ e("button", { className: "w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg", children: "Cancel" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(G, { title: "Bottom Sheets", children: [
      /* @__PURE__ */ e(v, { title: "Action Sheet", description: "Mobile-style bottom sheet menu", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-t-2xl shadow-2xl overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "pt-3 pb-1 flex justify-center", children: /* @__PURE__ */ e("div", { className: "w-12 h-1 bg-gray-300 rounded-full" }) }),
        /* @__PURE__ */ t("div", { className: "p-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg mb-4 px-2", children: "Choose an option" }),
          /* @__PURE__ */ t("div", { className: "space-y-1", children: [
            /* @__PURE__ */ t("button", { className: "w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-left", children: [
              /* @__PURE__ */ e(p, { className: "size-5 text-gray-600" }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Take Photo" })
            ] }),
            /* @__PURE__ */ t("button", { className: "w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-left", children: [
              /* @__PURE__ */ e(pe, { className: "size-5 text-gray-600" }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Choose from Library" })
            ] }),
            /* @__PURE__ */ t("button", { className: "w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg text-left text-red-600", children: [
              /* @__PURE__ */ e(j, { className: "size-5" }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Remove Photo" })
            ] })
          ] }),
          /* @__PURE__ */ e("button", { className: "w-full mt-4 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200", children: "Cancel" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(v, { title: "Filter Bottom Sheet", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-t-2xl shadow-2xl overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "pt-3 pb-1 flex justify-center", children: /* @__PURE__ */ e("div", { className: "w-12 h-1 bg-gray-300 rounded-full" }) }),
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-6 py-4 border-b border-gray-200", children: [
          /* @__PURE__ */ e("h3", { className: "text-xl", children: "Filters" }),
          /* @__PURE__ */ e("button", { className: "text-green-600 hover:text-green-700 text-sm", children: "Reset" })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-6 max-h-96 overflow-y-auto", children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("label", { className: "block text-sm mb-3 text-gray-700", children: "Quality Grade" }),
            /* @__PURE__ */ t("div", { className: "space-y-2", children: [
              /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600", defaultChecked: !0 }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "Research Grade" })
              ] }),
              /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600" }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "Needs ID" })
              ] }),
              /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600" }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "Casual" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e("label", { className: "block text-sm mb-3 text-gray-700", children: "Media Type" }),
            /* @__PURE__ */ t("div", { className: "space-y-2", children: [
              /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600" }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "Has Photos" })
              ] }),
              /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600" }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "Has Sounds" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "px-6 py-4 border-t border-gray-200 bg-gray-50", children: /* @__PURE__ */ e("button", { className: "w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700", children: "Apply Filters" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ e(G, { title: "Selection Modals", children: /* @__PURE__ */ e(v, { title: "Species Selector", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-xl shadow-xl overflow-hidden", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-6 py-4 border-b border-gray-200", children: [
        /* @__PURE__ */ e("h2", { className: "text-xl", children: "Select Species" }),
        /* @__PURE__ */ e("button", { className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ e(j, { className: "size-5 text-gray-500" }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "p-4", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Search species...",
            className: "w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          }
        ),
        /* @__PURE__ */ t("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: [
          /* @__PURE__ */ t("button", { className: "w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left", children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=100&h=100&fit=crop",
                alt: "Species",
                className: "size-12 rounded-lg object-cover"
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-medium truncate", children: "American Robin" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-gray-500 italic truncate", children: "Turdus migratorius" })
            ] })
          ] }),
          /* @__PURE__ */ t("button", { className: "w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left", children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop",
                alt: "Species",
                className: "size-12 rounded-lg object-cover"
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-medium truncate", children: "Monarch Butterfly" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-gray-500 italic truncate", children: "Danaus plexippus" })
            ] })
          ] }),
          /* @__PURE__ */ t("button", { className: "w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left", children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: "https://images.unsplash.com/photo-1551006973-67b6f16f4e88?w=100&h=100&fit=crop",
                alt: "Species",
                className: "size-12 rounded-lg object-cover"
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-medium truncate", children: "Eastern Bluebird" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-gray-500 italic truncate", children: "Sialia sialis" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ t(G, { title: "Loading States", children: [
      /* @__PURE__ */ e(v, { title: "Loading Modal", children: /* @__PURE__ */ t("div", { className: "max-w-xs bg-white rounded-xl shadow-xl p-8 text-center", children: [
        /* @__PURE__ */ e("div", { className: "size-12 mx-auto mb-4 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" }),
        /* @__PURE__ */ e("h3", { className: "text-lg mb-2", children: "Uploading..." }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "Please wait while we process your observation" })
      ] }) }),
      /* @__PURE__ */ e(v, { title: "Progress Modal", children: /* @__PURE__ */ t("div", { className: "max-w-sm bg-white rounded-xl shadow-xl p-6", children: [
        /* @__PURE__ */ e("h3", { className: "text-lg mb-4", children: "Syncing Observations" }),
        /* @__PURE__ */ t("div", { className: "mb-2", children: [
          /* @__PURE__ */ t("div", { className: "flex justify-between text-sm text-gray-600 mb-2", children: [
            /* @__PURE__ */ e("span", { children: "Progress" }),
            /* @__PURE__ */ e("span", { children: "3 of 10" })
          ] }),
          /* @__PURE__ */ e("div", { className: "h-2 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ e("div", { className: "h-full bg-green-600 rounded-full transition-all duration-300", style: { width: "30%" } }) })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500 mt-3", children: "Uploading photos and metadata..." })
      ] }) })
    ] })
  ] });
}
function U({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function m({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-white rounded-lg border border-gray-200", children: i })
  ] });
}
function Vs() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Empty States" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Placeholder states for empty lists, search results, and error scenarios" })
    ] }),
    /* @__PURE__ */ t(U, { title: "No Content States", children: [
      /* @__PURE__ */ e(m, { title: "No Observations", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "size-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e(p, { className: "size-10 text-gray-400" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "No Observations Yet" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "Start exploring nature! Create your first observation to get started." }),
        /* @__PURE__ */ t("button", { className: "px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 inline-flex items-center gap-2", children: [
          /* @__PURE__ */ e(p, { className: "size-5" }),
          "Create Observation"
        ] })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "No Results Found", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "size-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e(P, { className: "size-10 text-gray-400" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "No Results Found" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "We couldn't find any observations matching your search. Try adjusting your filters." }),
        /* @__PURE__ */ e("button", { className: "px-5 py-2.5 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50", children: "Clear Filters" })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "No Activity", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "size-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e(Wt, { className: "size-10 text-gray-400" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "All Caught Up!" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "You have no new activity. Check back later for updates." })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "No Projects", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "size-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e(Ue, { className: "size-10 text-gray-400" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "No Projects Yet" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "Join projects to collaborate with other naturalists and contribute to science." }),
        /* @__PURE__ */ e("button", { className: "px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700", children: "Explore Projects" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(U, { title: "First-Time User States", children: [
      /* @__PURE__ */ e(m, { title: "Welcome - First Observation", children: /* @__PURE__ */ t("div", { className: "max-w-md mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "size-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center", children: /* @__PURE__ */ e(K, { className: "size-12 text-white" }) }),
        /* @__PURE__ */ e("h3", { className: "text-2xl mb-3", children: "Welcome to iNaturalist!" }),
        /* @__PURE__ */ e("p", { className: "text-base text-gray-600 mb-8", children: "Discover and document the living world around you. Start by creating your first observation." }),
        /* @__PURE__ */ t("div", { className: "space-y-3", children: [
          /* @__PURE__ */ t("button", { className: "w-full px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ e(p, { className: "size-5" }),
            "Take Photo"
          ] }),
          /* @__PURE__ */ e("button", { className: "w-full px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50", children: "Learn More" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "Getting Started Guide", children: /* @__PURE__ */ t("div", { className: "max-w-md mx-auto py-8", children: [
        /* @__PURE__ */ t("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl mb-2", children: "Get Started" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "Follow these steps to make your first observation" })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ e("div", { className: "size-10 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-700", children: "1" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "text-base mb-1", children: "Take a Photo" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "Snap a picture of any plant, animal, or fungi you encounter" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ e("div", { className: "size-10 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-gray-600", children: "2" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "text-base mb-1", children: "Add Details" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "Include location, date, and any observations you noted" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ e("div", { className: "size-10 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-gray-600", children: "3" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "text-base mb-1", children: "Get Identified" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "Our community will help identify what you saw" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("button", { className: "w-full mt-8 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700", children: "Start Observing" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(U, { title: "Error States", children: [
      /* @__PURE__ */ e(m, { title: "Connection Error", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "size-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center", children: /* @__PURE__ */ e(zs, { className: "size-10 text-red-600" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "No Internet Connection" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "Please check your connection and try again." }),
        /* @__PURE__ */ e("button", { className: "px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800", children: "Retry" })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "Location Permission", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "size-20 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center", children: /* @__PURE__ */ e(z, { className: "size-10 text-yellow-600" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Location Access Needed" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "Enable location services to automatically add location data to your observations." }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e("button", { className: "w-full px-5 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700", children: "Enable Location" }),
          /* @__PURE__ */ e("button", { className: "w-full px-5 py-2.5 text-gray-600 hover:bg-gray-50 rounded-full", children: "Not Now" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "Generic Error", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "size-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center", children: /* @__PURE__ */ e(D, { className: "size-10 text-gray-400" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Something Went Wrong" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "We encountered an unexpected error. Please try again later." }),
        /* @__PURE__ */ e("button", { className: "px-5 py-2.5 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50", children: "Go Back" })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "Not Found", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "text-8xl mb-4", children: "🔍" }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Observation Not Found" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-6", children: "The observation you're looking for doesn't exist or has been removed." }),
        /* @__PURE__ */ e("button", { className: "px-5 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700", children: "Browse Observations" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(U, { title: "Compact Empty States", children: [
      /* @__PURE__ */ e(m, { title: "Inline Empty - No Comments", children: /* @__PURE__ */ t("div", { className: "max-w-md p-8 text-center", children: [
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 mb-3", children: "No comments yet" }),
        /* @__PURE__ */ e("button", { className: "text-green-600 hover:text-green-700 text-sm", children: "Be the first to comment" })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "Inline Empty - No Identifications", children: /* @__PURE__ */ t("div", { className: "max-w-md p-8 text-center", children: [
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-500 mb-3", children: "No identifications yet" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700", children: "Suggest Identification" })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "Inline Empty - No Followers", children: /* @__PURE__ */ t("div", { className: "max-w-md p-8 text-center", children: [
        /* @__PURE__ */ e(Te, { className: "size-12 mx-auto mb-3 text-gray-300" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-500", children: "Not following anyone yet" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(U, { title: "Loading Placeholder States", children: [
      /* @__PURE__ */ e(m, { title: "Loading Skeleton - List", children: /* @__PURE__ */ t("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t("div", { className: "flex gap-3 p-3 animate-pulse", children: [
          /* @__PURE__ */ e("div", { className: "size-16 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ t("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "h-4 bg-gray-200 rounded w-3/4" }),
            /* @__PURE__ */ e("div", { className: "h-3 bg-gray-200 rounded w-1/2" }),
            /* @__PURE__ */ e("div", { className: "h-3 bg-gray-200 rounded w-2/3" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-3 p-3 animate-pulse", children: [
          /* @__PURE__ */ e("div", { className: "size-16 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ t("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "h-4 bg-gray-200 rounded w-3/4" }),
            /* @__PURE__ */ e("div", { className: "h-3 bg-gray-200 rounded w-1/2" }),
            /* @__PURE__ */ e("div", { className: "h-3 bg-gray-200 rounded w-2/3" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-3 p-3 animate-pulse", children: [
          /* @__PURE__ */ e("div", { className: "size-16 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ t("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ e("div", { className: "h-4 bg-gray-200 rounded w-3/4" }),
            /* @__PURE__ */ e("div", { className: "h-3 bg-gray-200 rounded w-1/2" }),
            /* @__PURE__ */ e("div", { className: "h-3 bg-gray-200 rounded w-2/3" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "Loading Skeleton - Card", children: /* @__PURE__ */ t("div", { className: "max-w-sm animate-pulse", children: [
        /* @__PURE__ */ e("div", { className: "aspect-square bg-gray-200 rounded-xl mb-3" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e("div", { className: "h-5 bg-gray-200 rounded w-3/4" }),
          /* @__PURE__ */ e("div", { className: "h-4 bg-gray-200 rounded w-1/2" }),
          /* @__PURE__ */ t("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ e("div", { className: "h-3 bg-gray-200 rounded w-20" }),
            /* @__PURE__ */ e("div", { className: "h-3 bg-gray-200 rounded w-24" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(U, { title: "Informational Empty States", children: [
      /* @__PURE__ */ e(m, { title: "Coming Soon", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "text-6xl mb-4", children: "🚀" }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Coming Soon" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "This feature is currently in development. Stay tuned!" })
      ] }) }),
      /* @__PURE__ */ e(m, { title: "Maintenance Mode", children: /* @__PURE__ */ t("div", { className: "max-w-sm mx-auto text-center py-12", children: [
        /* @__PURE__ */ e("div", { className: "text-6xl mb-4", children: "🔧" }),
        /* @__PURE__ */ e("h3", { className: "text-xl mb-2", children: "Under Maintenance" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600 mb-4", children: "We're making some improvements. Check back soon!" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: "Estimated time: 30 minutes" })
      ] }) })
    ] })
  ] });
}
function W({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function w({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-white rounded-lg border border-gray-200", children: i })
  ] });
}
function Gs() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-5xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Filters & Selection" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Filter panels, dropdowns, date pickers, and advanced selection controls" })
    ] }),
    /* @__PURE__ */ t(W, { title: "Filter Panels", children: [
      /* @__PURE__ */ e(w, { title: "Filter Header", description: "Top bar with filter trigger", children: /* @__PURE__ */ e("div", { className: "max-w-2xl bg-white rounded-lg border border-gray-200 overflow-hidden", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between p-4", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e("h2", { className: "text-lg", children: "Observations" }),
          /* @__PURE__ */ e("span", { className: "px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full", children: "1,234 results" })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50", children: [
          /* @__PURE__ */ e(Me, { className: "size-4" }),
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Filters" }),
          /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-green-600 text-white text-xs rounded-full", children: "3" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e(w, { title: "Active Filters Bar", description: "Show applied filters with remove option", children: /* @__PURE__ */ e("div", { className: "max-w-2xl", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg", children: [
        /* @__PURE__ */ e("span", { className: "text-sm text-green-700", children: "Active filters:" }),
        /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-green-300 text-green-700 rounded-full text-sm", children: [
            "Research Grade",
            /* @__PURE__ */ e("button", { className: "hover:text-green-900", children: /* @__PURE__ */ e(j, { className: "size-3.5" }) })
          ] }),
          /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-green-300 text-green-700 rounded-full text-sm", children: [
            "Birds",
            /* @__PURE__ */ e("button", { className: "hover:text-green-900", children: /* @__PURE__ */ e(j, { className: "size-3.5" }) })
          ] }),
          /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-green-300 text-green-700 rounded-full text-sm", children: [
            "San Francisco",
            /* @__PURE__ */ e("button", { className: "hover:text-green-900", children: /* @__PURE__ */ e(j, { className: "size-3.5" }) })
          ] })
        ] }),
        /* @__PURE__ */ e("button", { className: "ml-auto text-green-600 hover:text-green-700 text-sm", children: "Clear all" })
      ] }) }) }),
      /* @__PURE__ */ e(w, { title: "Expandable Filter Panel", children: /* @__PURE__ */ t("div", { className: "max-w-2xl bg-white rounded-lg border border-gray-200 overflow-hidden", children: [
        /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between p-4 hover:bg-gray-50", children: [
          /* @__PURE__ */ e("span", { className: "text-sm", children: "Filters" }),
          /* @__PURE__ */ e(B, { className: "size-5 text-gray-400" })
        ] }),
        /* @__PURE__ */ e("div", { className: "border-t border-gray-200 p-4 space-y-4", children: /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Quality Grade" }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600", defaultChecked: !0 }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Research Grade" })
            ] }),
            /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600" }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Needs ID" })
            ] }),
            /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600" }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Casual" })
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ t(W, { title: "Filter Groups", children: [
      /* @__PURE__ */ e(w, { title: "Checkbox Filter Group", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-lg border border-gray-200 p-4", children: [
        /* @__PURE__ */ e("h4", { className: "text-sm mb-3 text-gray-700", children: "Taxonomy" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
            /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600" }),
            /* @__PURE__ */ t("div", { className: "flex-1 flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Birds" }),
              /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "12,456" })
            ] })
          ] }),
          /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
            /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600", defaultChecked: !0 }),
            /* @__PURE__ */ t("div", { className: "flex-1 flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Plants" }),
              /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "8,934" })
            ] })
          ] }),
          /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
            /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600" }),
            /* @__PURE__ */ t("div", { className: "flex-1 flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Insects" }),
              /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "6,721" })
            ] })
          ] }),
          /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer", children: [
            /* @__PURE__ */ e("input", { type: "checkbox", className: "size-5 rounded border-gray-300 text-green-600" }),
            /* @__PURE__ */ t("div", { className: "flex-1 flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Fungi" }),
              /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "3,245" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(w, { title: "Radio Filter Group", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-lg border border-gray-200 p-4", children: [
        /* @__PURE__ */ e("h4", { className: "text-sm mb-3 text-gray-700", children: "Sort By" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ e("input", { type: "radio", name: "sort", className: "size-5 border-gray-300 text-green-600", defaultChecked: !0 }),
            /* @__PURE__ */ e("span", { className: "text-sm", children: "Most Recent" })
          ] }),
          /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ e("input", { type: "radio", name: "sort", className: "size-5 border-gray-300 text-green-600" }),
            /* @__PURE__ */ e("span", { className: "text-sm", children: "Most Faves" })
          ] }),
          /* @__PURE__ */ t("label", { className: "flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ e("input", { type: "radio", name: "sort", className: "size-5 border-gray-300 text-green-600" }),
            /* @__PURE__ */ e("span", { className: "text-sm", children: "Most Viewed" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(W, { title: "Date & Location Filters", children: [
      /* @__PURE__ */ e(w, { title: "Date Range Filter", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-lg border border-gray-200 p-4 space-y-4", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Date Range" }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ t("div", { className: "relative", children: [
              /* @__PURE__ */ e(A, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  placeholder: "Start date",
                  defaultValue: "Feb 1, 2026",
                  className: "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "relative", children: [
              /* @__PURE__ */ e(A, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  placeholder: "End date",
                  defaultValue: "Feb 9, 2026",
                  className: "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ e("button", { className: "px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200", children: "Today" }),
          /* @__PURE__ */ e("button", { className: "px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200", children: "This Week" }),
          /* @__PURE__ */ e("button", { className: "px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200", children: "This Month" })
        ] })
      ] }) }),
      /* @__PURE__ */ e(w, { title: "Location Filter", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-lg border border-gray-200 p-4 space-y-4", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Location" }),
          /* @__PURE__ */ t("div", { className: "relative", children: [
            /* @__PURE__ */ e(z, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                placeholder: "Enter location",
                defaultValue: "San Francisco, CA",
                className: "w-full pl-11 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("label", { className: "block text-sm mb-2 text-gray-700", children: "Radius" }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "range",
                min: "1",
                max: "100",
                defaultValue: "10",
                className: "flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-sm text-gray-600 min-w-[3rem]", children: "10 km" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(w, { title: "Quick Date Filters", children: /* @__PURE__ */ t("div", { className: "max-w-md flex flex-wrap gap-2", children: [
        /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-green-600 text-white rounded-full text-sm", children: "All Time" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200", children: "Today" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200", children: "This Week" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200", children: "This Month" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200", children: "This Year" }),
        /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200", children: "Custom" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(W, { title: "Advanced Filters", children: [
      /* @__PURE__ */ e(w, { title: "Multi-Select Dropdown", children: /* @__PURE__ */ e("div", { className: "max-w-md bg-white rounded-lg border border-gray-200", children: /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-sm mb-1", children: "Iconic Taxa" }),
          /* @__PURE__ */ t("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded", children: "Birds" }),
            /* @__PURE__ */ e("span", { className: "px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded", children: "Plants" })
          ] })
        ] }),
        /* @__PURE__ */ e(B, { className: "size-5 text-gray-400" })
      ] }) }) }),
      /* @__PURE__ */ e(w, { title: "Nested Filter Options", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-lg border border-gray-200 p-4", children: [
        /* @__PURE__ */ e("h4", { className: "text-sm mb-3 text-gray-700", children: "Advanced Filters" }),
        /* @__PURE__ */ t("div", { className: "space-y-3", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer mb-2", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600", defaultChecked: !0 }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "With Photos" })
            ] }),
            /* @__PURE__ */ e("div", { className: "ml-6 space-y-2", children: /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600" }),
              /* @__PURE__ */ e("span", { className: "text-sm text-gray-600", children: "Multiple photos only" })
            ] }) })
          ] }),
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer mb-2", children: [
            /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600" }),
            /* @__PURE__ */ e("span", { className: "text-sm", children: "With Sounds" })
          ] }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer mb-2", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600", defaultChecked: !0 }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Has Location" })
            ] }),
            /* @__PURE__ */ e("div", { className: "ml-6 space-y-2", children: /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600", defaultChecked: !0 }),
              /* @__PURE__ */ e("span", { className: "text-sm text-gray-600", children: "Public location only" })
            ] }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t(W, { title: "Filter Actions", children: [
      /* @__PURE__ */ e(w, { title: "Filter Footer with Actions", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-lg border border-gray-200", children: [
        /* @__PURE__ */ t("div", { className: "p-4 border-b border-gray-200", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm mb-3 text-gray-700", children: "Filters" }),
          /* @__PURE__ */ t("div", { className: "space-y-3", children: [
            /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600", defaultChecked: !0 }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Research Grade" })
            ] }),
            /* @__PURE__ */ t("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ e("input", { type: "checkbox", className: "size-4 rounded border-gray-300 text-green-600" }),
              /* @__PURE__ */ e("span", { className: "text-sm", children: "Has Photos" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-4 bg-gray-50 flex items-center justify-between", children: [
          /* @__PURE__ */ e("button", { className: "text-green-600 hover:text-green-700 text-sm", children: "Reset" }),
          /* @__PURE__ */ t("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ e("button", { className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-100", children: "Cancel" }),
            /* @__PURE__ */ e("button", { className: "px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700", children: "Apply" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(w, { title: "Save Filter Preset", children: /* @__PURE__ */ t("div", { className: "max-w-md bg-white rounded-lg border border-gray-200 p-4", children: [
        /* @__PURE__ */ e("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ e("h4", { className: "text-sm text-gray-700", children: "Save this filter?" }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Enter filter name...",
            className: "w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50", children: "Cancel" }),
          /* @__PURE__ */ e("button", { className: "flex-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700", children: "Save Filter" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e(W, { title: "Saved Filters", children: /* @__PURE__ */ e(w, { title: "Filter Presets", children: /* @__PURE__ */ t("div", { className: "max-w-md space-y-2", children: [
      /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-left", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-sm mb-1", children: "Research Grade Birds" }),
          /* @__PURE__ */ e("div", { className: "flex gap-1", children: /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "3 filters active" }) })
        ] }),
        /* @__PURE__ */ e(B, { className: "size-5 text-gray-400 -rotate-90" })
      ] }),
      /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between p-3 bg-white border-2 border-green-600 rounded-lg hover:bg-green-50 text-left", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-sm mb-1 text-green-700", children: "My Local Plants" }),
          /* @__PURE__ */ e("div", { className: "flex gap-1", children: /* @__PURE__ */ e("span", { className: "text-xs text-green-600", children: "5 filters active" }) })
        ] }),
        /* @__PURE__ */ e(B, { className: "size-5 text-green-600 -rotate-90" })
      ] }),
      /* @__PURE__ */ t("button", { className: "w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-left", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-sm mb-1", children: "Needs ID Nearby" }),
          /* @__PURE__ */ e("div", { className: "flex gap-1", children: /* @__PURE__ */ e("span", { className: "text-xs text-gray-500", children: "2 filters active" }) })
        ] }),
        /* @__PURE__ */ e(B, { className: "size-5 text-gray-400 -rotate-90" })
      ] })
    ] }) }) })
  ] });
}
function S({ title: r, children: l }) {
  return /* @__PURE__ */ t("div", { className: "mb-12", children: [
    /* @__PURE__ */ e("h3", { className: "text-lg mb-4 pb-2 border-b border-gray-200", children: r }),
    /* @__PURE__ */ e("div", { className: "space-y-6", children: l })
  ] });
}
function c({ title: r, description: l, children: i }) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "mb-3", children: [
      /* @__PURE__ */ e("h4", { className: "text-sm mb-1", children: r }),
      l && /* @__PURE__ */ e("p", { className: "text-xs text-gray-500", children: l })
    ] }),
    /* @__PURE__ */ e("div", { className: "p-6 bg-white rounded-lg border border-gray-200", children: i })
  ] });
}
function h({ children: r }) {
  return /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4", children: r });
}
function a({ icon: r, name: l }) {
  return /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors", children: [
    /* @__PURE__ */ e(r, { className: "size-6 text-gray-700" }),
    /* @__PURE__ */ e("span", { className: "text-xs text-gray-600 text-center", children: l })
  ] });
}
function Us() {
  return /* @__PURE__ */ t("div", { className: "p-8 max-w-7xl", children: [
    /* @__PURE__ */ t("div", { className: "mb-8", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl mb-2", children: "Icons" }),
      /* @__PURE__ */ e("p", { className: "text-gray-600", children: "Icon set from Lucide React used throughout the application" })
    ] }),
    /* @__PURE__ */ t(S, { title: "Navigation Icons", children: [
      /* @__PURE__ */ e(c, { title: "Primary Navigation", description: "Bottom tab bar and main navigation", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: re, name: "Home" }),
        /* @__PURE__ */ e(a, { icon: K, name: "Explore" }),
        /* @__PURE__ */ e(a, { icon: p, name: "Camera" }),
        /* @__PURE__ */ e(a, { icon: Y, name: "Activity" }),
        /* @__PURE__ */ e(a, { icon: E, name: "Profile" }),
        /* @__PURE__ */ e(a, { icon: P, name: "Search" })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "Chevrons & Arrows", description: "Directional indicators", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: $, name: "Back" }),
        /* @__PURE__ */ e(a, { icon: k, name: "Forward" }),
        /* @__PURE__ */ e(a, { icon: B, name: "Down" }),
        /* @__PURE__ */ e(a, { icon: st, name: "Up" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(S, { title: "Action Icons", children: [
      /* @__PURE__ */ e(c, { title: "Primary Actions", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: Ce, name: "Add" }),
        /* @__PURE__ */ e(a, { icon: _e, name: "Edit" }),
        /* @__PURE__ */ e(a, { icon: ns, name: "Delete" }),
        /* @__PURE__ */ e(a, { icon: pt, name: "Copy" }),
        /* @__PURE__ */ e(a, { icon: Z, name: "Share" }),
        /* @__PURE__ */ e(a, { icon: pe, name: "Upload" }),
        /* @__PURE__ */ e(a, { icon: yt, name: "Download" }),
        /* @__PURE__ */ e(a, { icon: j, name: "Close" }),
        /* @__PURE__ */ e(a, { icon: Ne, name: "Confirm" }),
        /* @__PURE__ */ e(a, { icon: va, name: "Remove" })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "Menu & More", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: H, name: "More (Vertical)" }),
        /* @__PURE__ */ e(a, { icon: fe, name: "More (Horizontal)" }),
        /* @__PURE__ */ e(a, { icon: ce, name: "Settings" }),
        /* @__PURE__ */ e(a, { icon: ne, name: "Filter" }),
        /* @__PURE__ */ e(a, { icon: Me, name: "Adjust" })
      ] }) })
    ] }),
    /* @__PURE__ */ e(S, { title: "Interaction Icons", children: /* @__PURE__ */ e(c, { title: "Social Actions", children: /* @__PURE__ */ t(h, { children: [
      /* @__PURE__ */ e(a, { icon: x, name: "Like/Fave" }),
      /* @__PURE__ */ e(a, { icon: te, name: "Comment" }),
      /* @__PURE__ */ e(a, { icon: Z, name: "Share" }),
      /* @__PURE__ */ e(a, { icon: he, name: "Save" }),
      /* @__PURE__ */ e(a, { icon: ve, name: "View" }),
      /* @__PURE__ */ e(a, { icon: rs, name: "Agree" })
    ] }) }) }),
    /* @__PURE__ */ t(S, { title: "Data & Information", children: [
      /* @__PURE__ */ e(c, { title: "Location & Time", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: z, name: "Location" }),
        /* @__PURE__ */ e(a, { icon: A, name: "Date" }),
        /* @__PURE__ */ e(a, { icon: X, name: "Time" }),
        /* @__PURE__ */ e(a, { icon: qt, name: "Global" }),
        /* @__PURE__ */ e(a, { icon: Sa, name: "Navigate" }),
        /* @__PURE__ */ e(a, { icon: ut, name: "GPS" })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "View Options", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: we, name: "Grid View" }),
        /* @__PURE__ */ e(a, { icon: Se, name: "List View" }),
        /* @__PURE__ */ e(a, { icon: je, name: "Map View" }),
        /* @__PURE__ */ e(a, { icon: Qt, name: "Layers" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(S, { title: "Status Icons", children: [
      /* @__PURE__ */ e(c, { title: "Feedback & Alerts", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: L, name: "Success" }),
        /* @__PURE__ */ e(a, { icon: D, name: "Error" }),
        /* @__PURE__ */ e(a, { icon: Ae, name: "Warning" }),
        /* @__PURE__ */ e(a, { icon: ke, name: "Info" }),
        /* @__PURE__ */ e(a, { icon: le, name: "Cancel" }),
        /* @__PURE__ */ e(a, { icon: nt, name: "Help" })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "Achievement & Stats", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: ee, name: "Star/Featured" }),
        /* @__PURE__ */ e(a, { icon: se, name: "Achievement" }),
        /* @__PURE__ */ e(a, { icon: _s, name: "Activity" }),
        /* @__PURE__ */ e(a, { icon: ms, name: "Trending" }),
        /* @__PURE__ */ e(a, { icon: qe, name: "Stats" }),
        /* @__PURE__ */ e(a, { icon: ss, name: "Goal" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(S, { title: "Nature & Taxonomy Icons", children: [
      /* @__PURE__ */ e(c, { title: "Flora & Fauna", description: "Species and organism types", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: ze, name: "Plant" }),
        /* @__PURE__ */ e(a, { icon: Lt, name: "Flower" }),
        /* @__PURE__ */ e(a, { icon: ds, name: "Conifer" }),
        /* @__PURE__ */ e(a, { icon: Je, name: "Insect" }),
        /* @__PURE__ */ e(a, { icon: Ve, name: "Bird" }),
        /* @__PURE__ */ e(a, { icon: _t, name: "Fish" }),
        /* @__PURE__ */ e(a, { icon: Xa, name: "Mammal" })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "Weather & Environment", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: ts, name: "Sunny" }),
        /* @__PURE__ */ e(a, { icon: ka, name: "Night" }),
        /* @__PURE__ */ e(a, { icon: mt, name: "Rain" }),
        /* @__PURE__ */ e(a, { icon: js, name: "Wind" }),
        /* @__PURE__ */ e(a, { icon: ft, name: "Water" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(S, { title: "Media Icons", children: [
      /* @__PURE__ */ e(c, { title: "Content Types", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: Gt, name: "Photo" }),
        /* @__PURE__ */ e(a, { icon: vs, name: "Video" }),
        /* @__PURE__ */ e(a, { icon: xe, name: "Sound" }),
        /* @__PURE__ */ e(a, { icon: ba, name: "Record" }),
        /* @__PURE__ */ e(a, { icon: p, name: "Camera" }),
        /* @__PURE__ */ e(a, { icon: Ct, name: "File" }),
        /* @__PURE__ */ e(a, { icon: Ft, name: "Folder" })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "Media Controls", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: ie, name: "Play" }),
        /* @__PURE__ */ e(a, { icon: _a, name: "Pause" }),
        /* @__PURE__ */ e(a, { icon: Ua, name: "Previous" }),
        /* @__PURE__ */ e(a, { icon: Za, name: "Next" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(S, { title: "User & Account", children: [
      /* @__PURE__ */ e(c, { title: "Account Actions", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: E, name: "Profile" }),
        /* @__PURE__ */ e(a, { icon: Te, name: "Community" }),
        /* @__PURE__ */ e(a, { icon: bs, name: "Follow" }),
        /* @__PURE__ */ e(a, { icon: ia, name: "Sign In" }),
        /* @__PURE__ */ e(a, { icon: ca, name: "Sign Out" }),
        /* @__PURE__ */ e(a, { icon: Va, name: "Privacy" }),
        /* @__PURE__ */ e(a, { icon: la, name: "Secure" }),
        /* @__PURE__ */ e(a, { icon: aa, name: "Public" })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "Communication", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: oa, name: "Email" }),
        /* @__PURE__ */ e(a, { icon: Ta, name: "Phone" }),
        /* @__PURE__ */ e(a, { icon: te, name: "Message" }),
        /* @__PURE__ */ e(a, { icon: Y, name: "Notifications" })
      ] }) })
    ] }),
    /* @__PURE__ */ t(S, { title: "Utility Icons", children: [
      /* @__PURE__ */ e(c, { title: "View Controls", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: Ts, name: "Zoom In" }),
        /* @__PURE__ */ e(a, { icon: Ls, name: "Zoom Out" }),
        /* @__PURE__ */ e(a, { icon: pa, name: "Fullscreen" }),
        /* @__PURE__ */ e(a, { icon: Na, name: "Exit Full" }),
        /* @__PURE__ */ e(a, { icon: Fa, name: "Refresh" }),
        /* @__PURE__ */ e(a, { icon: Ra, name: "Rotate CW" }),
        /* @__PURE__ */ e(a, { icon: Pa, name: "Rotate CCW" })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "Linking & Connections", children: /* @__PURE__ */ t(h, { children: [
        /* @__PURE__ */ e(a, { icon: Kt, name: "Link" }),
        /* @__PURE__ */ e(a, { icon: ps, name: "Unlink" }),
        /* @__PURE__ */ e(a, { icon: zt, name: "External" }),
        /* @__PURE__ */ e(a, { icon: Ca, name: "Attach" }),
        /* @__PURE__ */ e(a, { icon: Ht, name: "Branch" }),
        /* @__PURE__ */ e(a, { icon: Tt, name: "Flag" })
      ] }) })
    ] }),
    /* @__PURE__ */ e(S, { title: "Icon Sizes", children: /* @__PURE__ */ e(c, { title: "Size Variations", description: "Common icon sizes used in the app", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-8", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(p, { className: "size-4 text-gray-700" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "size-4 (16px)" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(p, { className: "size-5 text-gray-700" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "size-5 (20px)" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(p, { className: "size-6 text-gray-700" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "size-6 (24px)" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(p, { className: "size-8 text-gray-700" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "size-8 (32px)" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(p, { className: "size-10 text-gray-700" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "size-10 (40px)" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(p, { className: "size-12 text-gray-700" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "size-12 (48px)" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e(S, { title: "Icon Colors", children: /* @__PURE__ */ e(c, { title: "Color Variations", description: "Icon colors for different states", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-6", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(x, { className: "size-6 text-gray-700" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Default" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(x, { className: "size-6 text-gray-400" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Muted" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(x, { className: "size-6 text-green-600" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Primary" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(x, { className: "size-6 text-red-600 fill-red-600" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Active" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(x, { className: "size-6 text-blue-600" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Info" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(x, { className: "size-6 text-yellow-600" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "Warning" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ e(x, { className: "size-6 text-white" }),
        /* @__PURE__ */ e("span", { className: "text-xs text-gray-600", children: "White" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ t(S, { title: "Icon in Context", children: [
      /* @__PURE__ */ e(c, { title: "Buttons with Icons", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ t("button", { className: "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700", children: [
          /* @__PURE__ */ e(p, { className: "size-5" }),
          "Take Photo"
        ] }),
        /* @__PURE__ */ t("button", { className: "flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50", children: [
          /* @__PURE__ */ e(Z, { className: "size-4" }),
          "Share"
        ] }),
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-50", children: /* @__PURE__ */ e(x, { className: "size-5 text-gray-600" }) }),
        /* @__PURE__ */ e("button", { className: "size-10 flex items-center justify-center rounded-full bg-red-50 border border-red-200", children: /* @__PURE__ */ e(x, { className: "size-5 text-red-600 fill-red-600" }) })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "Badges with Icons", children: /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm", children: [
          /* @__PURE__ */ e(L, { className: "size-4" }),
          "Research Grade"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs", children: [
          /* @__PURE__ */ e(X, { className: "size-3" }),
          "Needs ID"
        ] }),
        /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm", children: [
          /* @__PURE__ */ e(ee, { className: "size-3 fill-white" }),
          "Featured"
        ] })
      ] }) }),
      /* @__PURE__ */ e(c, { title: "List Items with Icons", children: /* @__PURE__ */ t("div", { className: "space-y-2 max-w-md", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-sm text-gray-600", children: [
          /* @__PURE__ */ e(z, { className: "size-4" }),
          /* @__PURE__ */ e("span", { children: "San Francisco, CA" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-sm text-gray-600", children: [
          /* @__PURE__ */ e(A, { className: "size-4" }),
          /* @__PURE__ */ e("span", { children: "Feb 9, 2026" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-sm text-gray-600", children: [
          /* @__PURE__ */ e(E, { className: "size-4" }),
          /* @__PURE__ */ e("span", { children: "@naturelover" })
        ] })
      ] }) })
    ] })
  ] });
}
const oe = [
  { id: "buttons", name: "Buttons", description: "Primary, secondary, icon, and action buttons", component: Is },
  { id: "navigation", name: "Navigation", description: "Tab bars, bottom nav, headers, and menu items", component: Fs },
  { id: "forms", name: "Form Controls", description: "Inputs, search bars, textareas, and selectors", component: $s },
  { id: "cards", name: "Cards", description: "Observation cards, species cards, project cards", component: Ps },
  { id: "lists", name: "Lists", description: "List items, feed items, and repeating elements", component: Hs },
  { id: "badges", name: "Badges & Tags", description: "Status badges, tags, chips, and labels", component: Rs },
  { id: "headers", name: "Headers", description: "Page headers, section headers, and titles", component: qs },
  { id: "images", name: "Images & Media", description: "Image grids, thumbnails, and media displays", component: Os },
  { id: "typography", name: "Typography", description: "Text styles, headings, and content formatting", component: Ds },
  { id: "icons", name: "Icons", description: "Icon set from Lucide React library", component: Us },
  { id: "modals", name: "Modals & Dialogs", description: "Modal windows, alerts, and bottom sheets", component: Es },
  { id: "filters", name: "Filters & Selection", description: "Filter panels, date pickers, and advanced filters", component: Gs },
  { id: "empty", name: "Empty States", description: "Placeholders, loading states, and error messages", component: Vs }
];
function Ws() {
  const [r, l] = ge("buttons"), [i, b] = ge(""), I = oe.find((y) => y.id === r)?.component, de = oe.filter(
    (y) => y.name.toLowerCase().includes(i.toLowerCase()) || y.description.toLowerCase().includes(i.toLowerCase())
  );
  return /* @__PURE__ */ t("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ t("aside", { className: "w-72 bg-white border-r border-gray-200 flex flex-col", children: [
      /* @__PURE__ */ t("div", { className: "p-6 border-b border-gray-200", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl mb-2", children: "iNaturalist" }),
        /* @__PURE__ */ e("p", { className: "text-sm text-gray-600", children: "Component Library" })
      ] }),
      /* @__PURE__ */ e("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e(P, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            placeholder: "Search components...",
            value: i,
            onChange: (y) => b(y.target.value),
            className: "w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          }
        )
      ] }) }),
      /* @__PURE__ */ e("nav", { className: "flex-1 overflow-y-auto p-4", children: /* @__PURE__ */ e("div", { className: "space-y-1", children: de.map((y) => /* @__PURE__ */ t(
        "button",
        {
          onClick: () => l(y.id),
          className: `w-full text-left px-4 py-3 rounded-lg transition-colors ${r === y.id ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ e("div", { className: "text-sm", children: y.name }),
            /* @__PURE__ */ e("div", { className: "text-xs text-gray-500 mt-0.5", children: y.description })
          ]
        },
        y.id
      )) }) }),
      /* @__PURE__ */ t("div", { className: "p-4 border-t border-gray-200 text-xs text-gray-500", children: [
        oe.length,
        " categories • Based on iNaturalist mobile app"
      ] })
    ] }),
    /* @__PURE__ */ e("main", { className: "flex-1 overflow-y-auto", children: I && /* @__PURE__ */ e(I, {}) })
  ] });
}
function Zs() {
  return /* @__PURE__ */ e("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ e(Ws, {}) });
}
const Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ys as Code0_8,
  Qs as __importModule__
};
