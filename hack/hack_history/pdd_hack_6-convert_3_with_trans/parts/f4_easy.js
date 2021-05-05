module.exports = function (e, t, n) {
  "use strict";
  var r,
    o,
    i = (e.exports = {});

  function a() {
    throw new Error("setTimeout has not been defined");
  }

  function s() {
    throw new Error("clearTimeout has not been defined");
  }

  function u(e) {
    if (r === setTimeout) return setTimeout(e, 0);
    if ((r === a || !r) && setTimeout)
      return (r = setTimeout), setTimeout(e, 0);
    try {
      return r(e, 0);
    } catch (t) {
      try {
        return r.call(null, e, 0);
      } catch (t) {
        return r.call(this, e, 0);
      }
    }
  }

  !(function () {
    try {
      r = "function" == typeof setTimeout ? setTimeout : a;
    } catch (e) {
      r = a;
    }
    try {
      o = "function" == typeof clearTimeout ? clearTimeout : s;
    } catch (e) {
      o = s;
    }
  })();
  var c,
    d = [],
    f = !1,
    l = -1;

  function p() {
    f &&
      c &&
      ((f = !1), c.length ? (d = c.concat(d)) : (l = -1), d.length && h());
  }

  function h() {
    if (!f) {
      var e = u(p);
      f = !0;
      for (var t = d.length; t; ) {
        for (c = d, d = []; ++l < t; ) c && c[l].run();
        (l = -1), (t = d.length);
      }
      (c = null),
        (f = !1),
        (function (e) {
          if (o === clearTimeout) return clearTimeout(e);
          if ((o === s || !o) && clearTimeout)
            return (o = clearTimeout), clearTimeout(e);
          try {
            o(e);
          } catch (t) {
            try {
              return o.call(null, e);
            } catch (t) {
              return o.call(this, e);
            }
          }
        })(e);
    }
  }

  function v(e, t) {
    (this.fun = e), (this.array = t);
  }

  function m() {}

  (i.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    d.push(new v(e, t)), 1 !== d.length || f || u(h);
  }),
    (v.prototype.run = function () {
      this.fun.apply(null, this.array);
    }),
    (i.title = "browser"),
    (i.browser = !0),
    (i.env = {}),
    (i.argv = []),
    (i.version = ""),
    (i.versions = {}),
    (i.on = m),
    (i.addListener = m),
    (i.once = m),
    (i.off = m),
    (i.removeListener = m),
    (i.removeAllListeners = m),
    (i.emit = m),
    (i.prependListener = m),
    (i.prependOnceListener = m),
    (i.listeners = function (e) {
      return [];
    }),
    (i.binding = function (e) {
      throw new Error("process.binding is not supported");
    }),
    (i.cwd = function () {
      return "/";
    }),
    (i.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }),
    (i.umask = function () {
      return 0;
    });
};
