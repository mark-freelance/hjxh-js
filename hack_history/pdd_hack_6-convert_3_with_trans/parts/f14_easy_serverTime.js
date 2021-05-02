module.exports = function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0,
  }),
    (t.crc32 = function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      (e = (function (e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? (t += String.fromCharCode(r))
            : r < 2048
            ? (t +=
                String.fromCharCode(192 | (r >> 6)) +
                String.fromCharCode(128 | (63 & r)))
            : r < 55296 || r >= 57344
            ? (t +=
                String.fromCharCode(224 | (r >> 12)) +
                String.fromCharCode(128 | ((r >> 6) & 63)) +
                String.fromCharCode(128 | (63 & r)))
            : ((r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(++n)))),
              (t +=
                String.fromCharCode(240 | (r >> 18)) +
                String.fromCharCode(128 | ((r >> 12) & 63)) +
                String.fromCharCode(128 | ((r >> 6) & 63)) +
                String.fromCharCode(128 | (63 & r))));
        }
        return t;
      })(e)),
        (t ^= -1);
      for (var n = 0; n < e.length; n++)
        t = (t >>> 8) ^ r[255 & (t ^ e.charCodeAt(n))];
      return (-1 ^ t) >>> 0;
    });
  var r = (function () {
    for (var e = [], t = void 0, n = 0; n < 256; n++) {
      t = n;
      for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
      e[n] = t;
    }
    return e;
  })();
};
