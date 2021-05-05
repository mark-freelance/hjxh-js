module.exports = function (e, t, n) {
  "use strict";
  e.exports = function (e, t, n) {
    if ((t -= (e += "").length) <= 0) return e;
    if ((n || 0 === n || (n = " "), " " == (n += "") && t < 10))
      return r[t] + e;
    for (var o = ""; 1 & t && (o += n), (t >>= 1); ) n += n;
    return o + e;
  };
  var r = [
    "",
    " ",
    "  ",
    "   ",
    "    ",
    "     ",
    "      ",
    "       ",
    "        ",
    "         ",
  ];
};
