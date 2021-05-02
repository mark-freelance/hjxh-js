module.exports = function (e, t, n) {
  "use strict";
  var r = (function () {
    for (var e, t = [], n = 0; n < 256; n++) {
      e = n;
      for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
      t[n] = e;
    }
    return t;
  })();
  e.exports = function (e, t, n, o) {
    var i = r,
      a = o + n;
    e ^= -1;
    for (var s = o; s < a; s++) e = (e >>> 8) ^ i[255 & (e ^ t[s])];
    return -1 ^ e;
  };
};
