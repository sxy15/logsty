function l(e) {
  return `${e[0].toUpperCase()}${e.slice(1)}`;
}
const c = {
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
function s() {
  return Object.entries(c).reduce((e, [r, t]) => (e[r] = `color: ${t};`, e), {});
}
function u() {
  return Object.entries(c).reduce((e, [r, t]) => {
    const n = `bg${l(r)}`;
    return e[n] = `background-color: ${t};padding: 0 2px;`, e;
  }, {});
}
const a = {
  ...u(),
  ...i,
  ...s()
}, f = ["info", "log", "warn", "error"];
function d(e) {
  return function(...r) {
    let t = "";
    const n = [];
    r.forEach((o) => {
      t += o[0], n.push(o[1]);
    }), console[e](t, ...n);
  };
}
function g() {
  let e = "";
  const r = (t) => {
    const n = e;
    return e = "", [`%c${t}`, n];
  };
  return Object.entries(a).forEach(([t, n]) => {
    Object.defineProperty(r, t, {
      get() {
        return e += n, r;
      }
    });
  }), f.forEach((t) => r[t] = d(t)), r;
}
const b = g();
export {
  b as default
};
