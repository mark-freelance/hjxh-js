module.exports = function (e, t, n) {
  "use strict";
  var r = n(1),
    o = !0,
    i = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (e) {
    o = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (e) {
    i = !1;
  }
  for (var a = new r.Buf8(256), s = 0; s < 256; s++)
    a[s] =
      s >= 252
        ? 6
        : s >= 248
        ? 5
        : s >= 240
        ? 4
        : s >= 224
        ? 3
        : s >= 192
        ? 2
        : 1;

  function u(e, t) {
    if (t < 65534 && ((e.subarray && i) || (!e.subarray && o)))
      return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
    for (var n = "", a = 0; a < t; a++) n += String.fromCharCode(e[a]);
    return n;
  }

  (a[254] = a[254] = 1),
    (t.string2buf = function (e) {
      var t,
        n,
        o,
        i,
        a,
        s = e.length,
        u = 0;
      for (i = 0; i < s; i++)
        55296 == (64512 & (n = e.charCodeAt(i))) &&
          i + 1 < s &&
          56320 == (64512 & (o = e.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (o - 56320)), i++),
          (u += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
      for (t = new r.Buf8(u), a = 0, i = 0; a < u; i++)
        55296 == (64512 & (n = e.charCodeAt(i))) &&
          i + 1 < s &&
          56320 == (64512 & (o = e.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (o - 56320)), i++),
          n < 128
            ? (t[a++] = n)
            : n < 2048
            ? ((t[a++] = 192 | (n >>> 6)), (t[a++] = 128 | (63 & n)))
            : n < 65536
            ? ((t[a++] = 224 | (n >>> 12)),
              (t[a++] = 128 | ((n >>> 6) & 63)),
              (t[a++] = 128 | (63 & n)))
            : ((t[a++] = 240 | (n >>> 18)),
              (t[a++] = 128 | ((n >>> 12) & 63)),
              (t[a++] = 128 | ((n >>> 6) & 63)),
              (t[a++] = 128 | (63 & n)));
      return t;
    }),
    (t.buf2binstring = function (e) {
      return u(e, e.length);
    }),
    (t.binstring2buf = function (e) {
      for (var t = new r.Buf8(e.length), n = 0, o = t.length; n < o; n++)
        t[n] = e.charCodeAt(n);
      return t;
    }),
    (t.buf2string = function (e, t) {
      var n,
        r,
        o,
        i,
        s = t || e.length,
        c = new Array(2 * s);
      for (r = 0, n = 0; n < s; )
        if ((o = e[n++]) < 128) c[r++] = o;
        else if ((i = a[o]) > 4) (c[r++] = 65533), (n += i - 1);
        else {
          for (o &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && n < s; )
            (o = (o << 6) | (63 & e[n++])), i--;
          i > 1
            ? (c[r++] = 65533)
            : o < 65536
            ? (c[r++] = o)
            : ((o -= 65536),
              (c[r++] = 55296 | ((o >> 10) & 1023)),
              (c[r++] = 56320 | (1023 & o)));
        }
      return u(c, r);
    }),
    (t.utf8border = function (e, t) {
      var n;
      for (
        (t = t || e.length) > e.length && (t = e.length), n = t - 1;
        n >= 0 && 128 == (192 & e[n]);

      )
        n--;
      return n < 0 || 0 === n ? t : n + a[e[n]] > t ? n : t;
    });
};
