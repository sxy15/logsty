function l(e) {
  return `${e[0].toUpperCase()}${e.slice(1)}`;
}
const n = {
  red: "#f87171",
  green: "#4ade80",
  blue: "#60a5fa",
  purple: "#c084fc",
  pink: "#f472b6",
  black: "#000",
  white: "#fff",
  yellow: "#facc15"
}, i = {
  bold: "font-weight:bold;",
  italic: "font-style:italic;",
  underline: "text-decoration:underline;",
  linethrough: "text-decoration:line-through;"
};
function u() {
  return Object.entries(n).reduce((e, [r, t]) => (e[r] = `color: ${t};`, e), {});
}
function a() {
  return Object.entries(n).reduce((e, [r, t]) => {
    const o = `bg${l(r)}`;
    return e[o] = `background-color: ${t};padding: 0 2px;`, e;
  }, {});
}
const f = {
  ...a(),
  ...i,
  ...u()
}, s = ["info", "log", "warn", "error"];
function d(e) {
  return function(...r) {
    let t = "";
    const o = [];
    r.forEach((c) => {
      t += c[0], o.push(c[1]);
    }), console[e](t, ...o);
  };
}
function g() {
  let e = "";
  const r = (t) => {
    const o = e;
    return e = "", [`%c${t}`, o];
  };
  return Object.entries(f).forEach(([t, o]) => {
    Object.defineProperty(r, t, {
      get() {
        return e += o, r;
      }
    });
  }), s.forEach((t) => r[t] = d(t)), r;
}
const b = g();
export {
  b as default
};
