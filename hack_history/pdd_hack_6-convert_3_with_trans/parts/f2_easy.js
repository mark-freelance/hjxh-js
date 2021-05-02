module.exports = function (e, t, n) {
  "use strict";
  var r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    o =
      "undefined" != typeof Uint8Array &&
      "undefined" != typeof Uint16Array &&
      "undefined" != typeof Int32Array;

  function i(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }

  (t.assign = function (e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
      var n = t.shift();
      if (n) {
        if ("object" !== (void 0 === n ? "undefined" : r(n)))
          throw new TypeError(n + "must be non-object");
        for (var o in n) i(n, o) && (e[o] = n[o]);
      }
    }
    return e;
  }),
    (t.shrinkBuf = function (e, t) {
      return e.length === t
        ? e
        : e.subarray
        ? e.subarray(0, t)
        : ((e.length = t), e);
    });
  var a = {
      arraySet: function (e, t, n, r, o) {
        if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), o);
        else for (var i = 0; i < r; i++) e[o + i] = t[n + i];
      },
      flattenChunks: function (e) {
        var t, n, r, o, i, a;
        for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
        for (a = new Uint8Array(r), o = 0, t = 0, n = e.length; t < n; t++)
          (i = e[t]), a.set(i, o), (o += i.length);
        return a;
      },
    },
    s = {
      arraySet: function (e, t, n, r, o) {
        for (var i = 0; i < r; i++) e[o + i] = t[n + i];
      },
      flattenChunks: function (e) {
        return [].concat.apply([], e);
      },
    };
  (t.setTyped = function (e) {
    e
      ? ((t.Buf8 = Uint8Array),
        (t.Buf16 = Uint16Array),
        (t.Buf32 = Int32Array),
        t.assign(t, a))
      : ((t.Buf8 = Array),
        (t.Buf16 = Array),
        (t.Buf32 = Array),
        t.assign(t, s));
  }),
    t.setTyped(o);
};
