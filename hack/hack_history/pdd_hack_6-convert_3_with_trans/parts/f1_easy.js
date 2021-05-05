module.exports = function (e, t, n) {
  console.log("entered func1");
  ("use strict");
  e.exports = function (e) {
    return (
      e.webpackPolyfill ||
        ((e.deprecate = function () {}),
        (e.paths = []),
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
          enumerable: !0,
          get: function () {
            return e.l;
          },
        }),
        Object.defineProperty(e, "id", {
          enumerable: !0,
          get: function () {
            return e.i;
          },
        }),
        (e.webpackPolyfill = 1)),
      e
    );
  };
};
