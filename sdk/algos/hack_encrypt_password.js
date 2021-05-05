var window = {
  crypto: require('crypto')
}
var navigator = {
  appName: "Netscape"
}

function xxx(e) {
  "use strict";

  function t(e) {
    return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e);
  }

  function n(e, t) {
    return e & t;
  }

  function r(e, t) {
    return e | t;
  }

  function o(e, t) {
    return e ^ t;
  }

  function i(e, t) {
    return e & ~t;
  }

  function a(e) {
    if (0 == e) return -1;
    var t = 0;
    return (
      0 == (65535 & e) && ((e >>= 16), (t += 16)),
      0 == (255 & e) && ((e >>= 8), (t += 8)),
      0 == (15 & e) && ((e >>= 4), (t += 4)),
      0 == (3 & e) && ((e >>= 2), (t += 2)),
      0 == (1 & e) && ++t,
      t
    );
  }

  function s(e) {
    for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
    return t;
  }

  var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  function c(e) {
    var t,
      n,
      r = "";
    for (t = 0; t + 3 <= e.length; t += 3)
      (n = parseInt(e.substring(t, t + 3), 16)),
        (r += u.charAt(n >> 6) + u.charAt(63 & n));
    for (
      t + 1 == e.length
        ? ((n = parseInt(e.substring(t, t + 1), 16)), (r += u.charAt(n << 2)))
        : t + 2 == e.length &&
          ((n = parseInt(e.substring(t, t + 2), 16)),
          (r += u.charAt(n >> 2) + u.charAt((3 & n) << 4)));
      (3 & r.length) > 0;

    )
      r += "=";
    return r;
  }

  function l(e) {
    var n,
      r = "",
      o = 0,
      i = 0;
    for (n = 0; n < e.length && "=" != e.charAt(n); ++n) {
      var a = u.indexOf(e.charAt(n));
      a < 0 ||
        (0 == o
          ? ((r += t(a >> 2)), (i = 3 & a), (o = 1))
          : 1 == o
          ? ((r += t((i << 2) | (a >> 4))), (i = 15 & a), (o = 2))
          : 2 == o
          ? ((r += t(i)), (r += t(a >> 2)), (i = 3 & a), (o = 3))
          : ((r += t((i << 2) | (a >> 4))), (r += t(15 & a)), (o = 0)));
    }
    return 1 == o && (r += t(i << 2)), r;
  }

  var f,
    d,
    p = function (e, t) {
      return (p =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    },
    h = function (e) {
      var t;
      if (void 0 === f) {
        var n = "0123456789ABCDEF";
        for (f = {}, t = 0; t < 16; ++t) f[n.charAt(t)] = t;
        for (n = n.toLowerCase(), t = 10; t < 16; ++t) f[n.charAt(t)] = t;
        for (t = 0; t < " \f\n\r\t\xa0\u2028\u2029".length; ++t)
          f[" \f\n\r\t\xa0\u2028\u2029".charAt(t)] = -1;
      }
      var r = [],
        o = 0,
        i = 0;
      for (t = 0; t < e.length; ++t) {
        var a = e.charAt(t);
        if ("=" == a) break;
        if (-1 != (a = f[a])) {
          if (void 0 === a) throw new Error("Illegal character at offset " + t);
          (o |= a),
            ++i >= 2 ? ((r[r.length] = o), (o = 0), (i = 0)) : (o <<= 4);
        }
      }
      if (i) throw new Error("Hex encoding incomplete: 4 bits missing");
      return r;
    },
    g = {
      decode: function (e) {
        var t;
        if (void 0 === d) {
          for (d = Object.create(null), t = 0; t < 64; ++t)
            d[
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                t
              )
            ] = t;
          for (t = 0; t < "= \f\n\r\t\xa0\u2028\u2029".length; ++t)
            d["= \f\n\r\t\xa0\u2028\u2029".charAt(t)] = -1;
        }
        var n = [],
          r = 0,
          o = 0;
        for (t = 0; t < e.length; ++t) {
          var i = e.charAt(t);
          if ("=" == i) break;
          if (-1 != (i = d[i])) {
            if (void 0 === i)
              throw new Error("Illegal character at offset " + t);
            (r |= i),
              ++o >= 4
                ? ((n[n.length] = r >> 16),
                  (n[n.length] = (r >> 8) & 255),
                  (n[n.length] = 255 & r),
                  (r = 0),
                  (o = 0))
                : (r <<= 6);
          }
        }
        switch (o) {
          case 1:
            throw new Error(
              "Base64 encoding incomplete: at least 2 bits missing"
            );
          case 2:
            n[n.length] = r >> 10;
            break;
          case 3:
            (n[n.length] = r >> 16), (n[n.length] = (r >> 8) & 255);
        }
        return n;
      },
      re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
      unarmor: function (e) {
        var t = g.re.exec(e);
        if (t)
          if (t[1]) e = t[1];
          else {
            if (!t[2]) throw new Error("RegExp out of sync");
            e = t[2];
          }
        return g.decode(e);
      },
    },
    v = 1e13,
    m = (function () {
      function e(e) {
        this.buf = [+e || 0];
      }

      return (
        (e.prototype.mulAdd = function (e, t) {
          var n,
            r,
            o = this.buf,
            i = o.length;
          for (n = 0; n < i; ++n)
            (r = o[n] * e + t) < v ? (t = 0) : (r -= (t = 0 | (r / v)) * v),
              (o[n] = r);
          t > 0 && (o[n] = t);
        }),
        (e.prototype.sub = function (e) {
          var t,
            n,
            r = this.buf,
            o = r.length;
          for (t = 0; t < o; ++t)
            (n = r[t] - e) < 0 ? ((n += v), (e = 1)) : (e = 0), (r[t] = n);
          for (; 0 === r[r.length - 1]; ) r.pop();
        }),
        (e.prototype.toString = function (e) {
          if (10 != (e || 10)) throw new Error("only base 10 is supported");
          for (
            var t = this.buf, n = t[t.length - 1].toString(), r = t.length - 2;
            r >= 0;
            --r
          )
            n += (v + t[r]).toString().substring(1);
          return n;
        }),
        (e.prototype.valueOf = function () {
          for (var e = this.buf, t = 0, n = e.length - 1; n >= 0; --n)
            t = t * v + e[n];
          return t;
        }),
        (e.prototype.simplify = function () {
          var e = this.buf;
          return 1 == e.length ? e[0] : this;
        }),
        e
      );
    })(),
    y = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
    b = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

  function x(e, t) {
    return e.length > t && (e = e.substring(0, t) + "\u2026"), e;
  }

  var w,
    S = (function () {
      function e(t, n) {
        (this.hexDigits = "0123456789ABCDEF"),
          t instanceof e
            ? ((this.enc = t.enc), (this.pos = t.pos))
            : ((this.enc = t), (this.pos = n));
      }

      return (
        (e.prototype.get = function (e) {
          if ((void 0 === e && (e = this.pos++), e >= this.enc.length))
            throw new Error(
              "Requesting byte offset " +
                e +
                " on a stream of length " +
                this.enc.length
            );
          return "string" === typeof this.enc
            ? this.enc.charCodeAt(e)
            : this.enc[e];
        }),
        (e.prototype.hexByte = function (e) {
          return (
            this.hexDigits.charAt((e >> 4) & 15) + this.hexDigits.charAt(15 & e)
          );
        }),
        (e.prototype.hexDump = function (e, t, n) {
          for (var r = "", o = e; o < t; ++o)
            if (((r += this.hexByte(this.get(o))), !0 !== n))
              switch (15 & o) {
                case 7:
                  r += "  ";
                  break;
                case 15:
                  r += "\n";
                  break;
                default:
                  r += " ";
              }
          return r;
        }),
        (e.prototype.isASCII = function (e, t) {
          for (var n = e; n < t; ++n) {
            var r = this.get(n);
            if (r < 32 || r > 176) return !1;
          }
          return !0;
        }),
        (e.prototype.parseStringISO = function (e, t) {
          for (var n = "", r = e; r < t; ++r)
            n += String.fromCharCode(this.get(r));
          return n;
        }),
        (e.prototype.parseStringUTF = function (e, t) {
          for (var n = "", r = e; r < t; ) {
            var o = this.get(r++);
            n +=
              o < 128
                ? String.fromCharCode(o)
                : o > 191 && o < 224
                ? String.fromCharCode(((31 & o) << 6) | (63 & this.get(r++)))
                : String.fromCharCode(
                    ((15 & o) << 12) |
                      ((63 & this.get(r++)) << 6) |
                      (63 & this.get(r++))
                  );
          }
          return n;
        }),
        (e.prototype.parseStringBMP = function (e, t) {
          for (var n, r, o = "", i = e; i < t; )
            (n = this.get(i++)),
              (r = this.get(i++)),
              (o += String.fromCharCode((n << 8) | r));
          return o;
        }),
        (e.prototype.parseTime = function (e, t, n) {
          var r = this.parseStringISO(e, t),
            o = (n ? y : b).exec(r);
          return o
            ? (n && ((o[1] = +o[1]), (o[1] += +o[1] < 70 ? 2e3 : 1900)),
              (r = o[1] + "-" + o[2] + "-" + o[3] + " " + o[4]),
              o[5] &&
                ((r += ":" + o[5]),
                o[6] && ((r += ":" + o[6]), o[7] && (r += "." + o[7]))),
              o[8] &&
                ((r += " UTC"),
                "Z" != o[8] && ((r += o[8]), o[9] && (r += ":" + o[9]))),
              r)
            : "Unrecognized time: " + r;
        }),
        (e.prototype.parseInteger = function (e, t) {
          for (
            var n, r = this.get(e), o = r > 127, i = o ? 255 : 0, a = "";
            r == i && ++e < t;

          )
            r = this.get(e);
          if (0 === (n = t - e)) return o ? -1 : 0;
          if (n > 4) {
            for (a = r, n <<= 3; 0 == (128 & (+a ^ i)); ) (a = +a << 1), --n;
            a = "(" + n + " bit)\n";
          }
          o && (r -= 256);
          for (var s = new m(r), u = e + 1; u < t; ++u)
            s.mulAdd(256, this.get(u));
          return a + s.toString();
        }),
        (e.prototype.parseBitString = function (e, t, n) {
          for (
            var r = this.get(e),
              o = "(" + (((t - e - 1) << 3) - r) + " bit)\n",
              i = "",
              a = e + 1;
            a < t;
            ++a
          ) {
            for (
              var s = this.get(a), u = a == t - 1 ? r : 0, c = 7;
              c >= u;
              --c
            )
              i += (s >> c) & 1 ? "1" : "0";
            if (i.length > n) return o + x(i, n);
          }
          return o + i;
        }),
        (e.prototype.parseOctetString = function (e, t, n) {
          if (this.isASCII(e, t)) return x(this.parseStringISO(e, t), n);
          var r = t - e,
            o = "(" + r + " byte)\n";
          r > (n /= 2) && (t = e + n);
          for (var i = e; i < t; ++i) o += this.hexByte(this.get(i));
          return r > n && (o += "\u2026"), o;
        }),
        (e.prototype.parseOID = function (e, t, n) {
          for (var r = "", o = new m(), i = 0, a = e; a < t; ++a) {
            var s = this.get(a);
            if ((o.mulAdd(128, 127 & s), (i += 7), !(128 & s))) {
              if ("" === r)
                if ((o = o.simplify()) instanceof m)
                  o.sub(80), (r = "2." + o.toString());
                else {
                  var u = o < 80 ? (o < 40 ? 0 : 1) : 2;
                  r = u + "." + (o - 40 * u);
                }
              else r += "." + o.toString();
              if (r.length > n) return x(r, n);
              (o = new m()), (i = 0);
            }
          }
          return i > 0 && (r += ".incomplete"), r;
        }),
        e
      );
    })(),
    _ = (function () {
      function e(e, t, n, r, o) {
        if (!(r instanceof C)) throw new Error("Invalid tag value.");
        (this.stream = e),
          (this.header = t),
          (this.length = n),
          (this.tag = r),
          (this.sub = o);
      }

      return (
        (e.prototype.typeName = function () {
          switch (this.tag.tagClass) {
            case 0:
              switch (this.tag.tagNumber) {
                case 0:
                  return "EOC";
                case 1:
                  return "BOOLEAN";
                case 2:
                  return "INTEGER";
                case 3:
                  return "BIT_STRING";
                case 4:
                  return "OCTET_STRING";
                case 5:
                  return "NULL";
                case 6:
                  return "OBJECT_IDENTIFIER";
                case 7:
                  return "ObjectDescriptor";
                case 8:
                  return "EXTERNAL";
                case 9:
                  return "REAL";
                case 10:
                  return "ENUMERATED";
                case 11:
                  return "EMBEDDED_PDV";
                case 12:
                  return "UTF8String";
                case 16:
                  return "SEQUENCE";
                case 17:
                  return "SET";
                case 18:
                  return "NumericString";
                case 19:
                  return "PrintableString";
                case 20:
                  return "TeletexString";
                case 21:
                  return "VideotexString";
                case 22:
                  return "IA5String";
                case 23:
                  return "UTCTime";
                case 24:
                  return "GeneralizedTime";
                case 25:
                  return "GraphicString";
                case 26:
                  return "VisibleString";
                case 27:
                  return "GeneralString";
                case 28:
                  return "UniversalString";
                case 30:
                  return "BMPString";
              }
              return "Universal_" + this.tag.tagNumber.toString();
            case 1:
              return "Application_" + this.tag.tagNumber.toString();
            case 2:
              return "[" + this.tag.tagNumber.toString() + "]";
            case 3:
              return "Private_" + this.tag.tagNumber.toString();
          }
        }),
        (e.prototype.content = function (e) {
          if (void 0 === this.tag) return null;
          void 0 === e && (e = 1 / 0);
          var t = this.posContent(),
            n = Math.abs(this.length);
          if (!this.tag.isUniversal())
            return null !== this.sub
              ? "(" + this.sub.length + " elem)"
              : this.stream.parseOctetString(t, t + n, e);
          switch (this.tag.tagNumber) {
            case 1:
              return 0 === this.stream.get(t) ? "false" : "true";
            case 2:
              return this.stream.parseInteger(t, t + n);
            case 3:
              return this.sub
                ? "(" + this.sub.length + " elem)"
                : this.stream.parseBitString(t, t + n, e);
            case 4:
              return this.sub
                ? "(" + this.sub.length + " elem)"
                : this.stream.parseOctetString(t, t + n, e);
            case 6:
              return this.stream.parseOID(t, t + n, e);
            case 16:
            case 17:
              return null !== this.sub
                ? "(" + this.sub.length + " elem)"
                : "(no elem)";
            case 12:
              return x(this.stream.parseStringUTF(t, t + n), e);
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 26:
              return x(this.stream.parseStringISO(t, t + n), e);
            case 30:
              return x(this.stream.parseStringBMP(t, t + n), e);
            case 23:
            case 24:
              return this.stream.parseTime(t, t + n, 23 == this.tag.tagNumber);
          }
          return null;
        }),
        (e.prototype.toString = function () {
          return (
            this.typeName() +
            "@" +
            this.stream.pos +
            "[header:" +
            this.header +
            ",length:" +
            this.length +
            ",sub:" +
            (null === this.sub ? "null" : this.sub.length) +
            "]"
          );
        }),
        (e.prototype.toPrettyString = function (e) {
          void 0 === e && (e = "");
          var t = e + this.typeName() + " @" + this.stream.pos;
          if (
            (this.length >= 0 && (t += "+"),
            (t += this.length),
            this.tag.tagConstructed
              ? (t += " (constructed)")
              : !this.tag.isUniversal() ||
                (3 != this.tag.tagNumber && 4 != this.tag.tagNumber) ||
                null === this.sub ||
                (t += " (encapsulates)"),
            (t += "\n"),
            null !== this.sub)
          ) {
            e += "  ";
            for (var n = 0, r = this.sub.length; n < r; ++n)
              t += this.sub[n].toPrettyString(e);
          }
          return t;
        }),
        (e.prototype.posStart = function () {
          return this.stream.pos;
        }),
        (e.prototype.posContent = function () {
          return this.stream.pos + this.header;
        }),
        (e.prototype.posEnd = function () {
          return this.stream.pos + this.header + Math.abs(this.length);
        }),
        (e.prototype.toHexString = function () {
          return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
        }),
        (e.decodeLength = function (e) {
          var t = e.get(),
            n = 127 & t;
          if (n == t) return n;
          if (n > 6)
            throw new Error(
              "Length over 48 bits not supported at position " + (e.pos - 1)
            );
          if (0 === n) return null;
          t = 0;
          for (var r = 0; r < n; ++r) t = 256 * t + e.get();
          return t;
        }),
        (e.prototype.getHexStringValue = function () {
          var e = this.toHexString(),
            t = 2 * this.header,
            n = 2 * this.length;
          return e.substr(t, n);
        }),
        (e.decode = function (t) {
          var n;
          n = t instanceof S ? t : new S(t, 0);
          var r = new S(n),
            o = new C(n),
            i = e.decodeLength(n),
            a = n.pos,
            s = a - r.pos,
            u = null,
            c = function () {
              var t = [];
              if (null !== i) {
                for (var r = a + i; n.pos < r; ) t[t.length] = e.decode(n);
                if (n.pos != r)
                  throw new Error(
                    "Content size is not correct for container starting at offset " +
                      a
                  );
              } else
                try {
                  for (;;) {
                    var o = e.decode(n);
                    if (o.tag.isEOC()) break;
                    t[t.length] = o;
                  }
                  i = a - n.pos;
                } catch (s) {
                  throw new Error(
                    "Exception while decoding undefined length content: " + s
                  );
                }
              return t;
            };
          if (o.tagConstructed) u = c();
          else if (o.isUniversal() && (3 == o.tagNumber || 4 == o.tagNumber))
            try {
              if (3 == o.tagNumber && 0 != n.get())
                throw new Error(
                  "BIT STRINGs with unused bits cannot encapsulate."
                );
              u = c();
              for (var l = 0; l < u.length; ++l)
                if (u[l].tag.isEOC())
                  throw new Error("EOC is not supposed to be actual content.");
            } catch (f) {
              u = null;
            }
          if (null === u) {
            if (null === i)
              throw new Error(
                "We can't skip over an invalid tag with undefined length at offset " +
                  a
              );
            n.pos = a + Math.abs(i);
          }
          return new e(r, s, i, o, u);
        }),
        e
      );
    })(),
    C = (function () {
      function e(e) {
        var t = e.get();
        if (
          ((this.tagClass = t >> 6),
          (this.tagConstructed = 0 !== (32 & t)),
          (this.tagNumber = 31 & t),
          31 == this.tagNumber)
        ) {
          var n = new m();
          do {
            (t = e.get()), n.mulAdd(128, 127 & t);
          } while (128 & t);
          this.tagNumber = n.simplify();
        }
      }

      return (
        (e.prototype.isUniversal = function () {
          return 0 === this.tagClass;
        }),
        (e.prototype.isEOC = function () {
          return 0 === this.tagClass && 0 === this.tagNumber;
        }),
        e
      );
    })(),
    k = [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
      101,
      103,
      107,
      109,
      113,
      127,
      131,
      137,
      139,
      149,
      151,
      157,
      163,
      167,
      173,
      179,
      181,
      191,
      193,
      197,
      199,
      211,
      223,
      227,
      229,
      233,
      239,
      241,
      251,
      257,
      263,
      269,
      271,
      277,
      281,
      283,
      293,
      307,
      311,
      313,
      317,
      331,
      337,
      347,
      349,
      353,
      359,
      367,
      373,
      379,
      383,
      389,
      397,
      401,
      409,
      419,
      421,
      431,
      433,
      439,
      443,
      449,
      457,
      461,
      463,
      467,
      479,
      487,
      491,
      499,
      503,
      509,
      521,
      523,
      541,
      547,
      557,
      563,
      569,
      571,
      577,
      587,
      593,
      599,
      601,
      607,
      613,
      617,
      619,
      631,
      641,
      643,
      647,
      653,
      659,
      661,
      673,
      677,
      683,
      691,
      701,
      709,
      719,
      727,
      733,
      739,
      743,
      751,
      757,
      761,
      769,
      773,
      787,
      797,
      809,
      811,
      821,
      823,
      827,
      829,
      839,
      853,
      857,
      859,
      863,
      877,
      881,
      883,
      887,
      907,
      911,
      919,
      929,
      937,
      941,
      947,
      953,
      967,
      971,
      977,
      983,
      991,
      997,
    ],
    O = (1 << 26) / k[k.length - 1],
    E = (function () {
      function e(e, t, n) {
        null != e &&
          ("number" == typeof e
            ? this.fromNumber(e, t, n)
            : null == t && "string" != typeof e
            ? this.fromString(e, 256)
            : this.fromString(e, t));
      }

      return (
        (e.prototype.toString = function (e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var n;
          if (16 == e) n = 4;
          else if (8 == e) n = 3;
          else if (2 == e) n = 1;
          else if (32 == e) n = 5;
          else {
            if (4 != e) return this.toRadix(e);
            n = 2;
          }
          var r,
            o = (1 << n) - 1,
            i = !1,
            a = "",
            s = this.t,
            u = this.DB - ((s * this.DB) % n);
          if (s-- > 0)
            for (
              u < this.DB && (r = this[s] >> u) > 0 && ((i = !0), (a = t(r)));
              s >= 0;

            )
              u < n
                ? ((r = (this[s] & ((1 << u) - 1)) << (n - u)),
                  (r |= this[--s] >> (u += this.DB - n)))
                : ((r = (this[s] >> (u -= n)) & o),
                  u <= 0 && ((u += this.DB), --s)),
                r > 0 && (i = !0),
                i && (a += t(r));
          return i ? a : "0";
        }),
        (e.prototype.negate = function () {
          var t = A();
          return e.ZERO.subTo(this, t), t;
        }),
        (e.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (e.prototype.compareTo = function (e) {
          var t = this.s - e.s;
          if (0 != t) return t;
          var n = this.t;
          if (0 != (t = n - e.t)) return this.s < 0 ? -t : t;
          for (; --n >= 0; ) if (0 != (t = this[n] - e[n])) return t;
          return 0;
        }),
        (e.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + L(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (e.prototype.mod = function (t) {
          var n = A();
          return (
            this.abs().divRemTo(t, null, n),
            this.s < 0 && n.compareTo(e.ZERO) > 0 && t.subTo(n, n),
            n
          );
        }),
        (e.prototype.modPowInt = function (e, t) {
          var n;
          return (
            (n = e < 256 || t.isEven() ? new W(t) : new R(t)), this.exp(e, n)
          );
        }),
        (e.prototype.clone = function () {
          var e = A();
          return this.copyTo(e), e;
        }),
        (e.prototype.intValue = function () {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }),
        (e.prototype.byteValue = function () {
          return 0 == this.t ? this.s : (this[0] << 24) >> 24;
        }),
        (e.prototype.shortValue = function () {
          return 0 == this.t ? this.s : (this[0] << 16) >> 16;
        }),
        (e.prototype.signum = function () {
          return this.s < 0
            ? -1
            : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
        }),
        (e.prototype.toByteArray = function () {
          var e = this.t,
            t = [];
          t[0] = this.s;
          var n,
            r = this.DB - ((e * this.DB) % 8),
            o = 0;
          if (e-- > 0)
            for (
              r < this.DB &&
              (n = this[e] >> r) != (this.s & this.DM) >> r &&
              (t[o++] = n | (this.s << (this.DB - r)));
              e >= 0;

            )
              r < 8
                ? ((n = (this[e] & ((1 << r) - 1)) << (8 - r)),
                  (n |= this[--e] >> (r += this.DB - 8)))
                : ((n = (this[e] >> (r -= 8)) & 255),
                  r <= 0 && ((r += this.DB), --e)),
                0 != (128 & n) && (n |= -256),
                0 == o && (128 & this.s) != (128 & n) && ++o,
                (o > 0 || n != this.s) && (t[o++] = n);
          return t;
        }),
        (e.prototype.equals = function (e) {
          return 0 == this.compareTo(e);
        }),
        (e.prototype.min = function (e) {
          return this.compareTo(e) < 0 ? this : e;
        }),
        (e.prototype.max = function (e) {
          return this.compareTo(e) > 0 ? this : e;
        }),
        (e.prototype.and = function (e) {
          var t = A();
          return this.bitwiseTo(e, n, t), t;
        }),
        (e.prototype.or = function (e) {
          var t = A();
          return this.bitwiseTo(e, r, t), t;
        }),
        (e.prototype.xor = function (e) {
          var t = A();
          return this.bitwiseTo(e, o, t), t;
        }),
        (e.prototype.andNot = function (e) {
          var t = A();
          return this.bitwiseTo(e, i, t), t;
        }),
        (e.prototype.not = function () {
          for (var e = A(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }),
        (e.prototype.shiftLeft = function (e) {
          var t = A();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }),
        (e.prototype.shiftRight = function (e) {
          var t = A();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }),
        (e.prototype.getLowestSetBit = function () {
          for (var e = 0; e < this.t; ++e)
            if (0 != this[e]) return e * this.DB + a(this[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (e.prototype.bitCount = function () {
          for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
            e += s(this[n] ^ t);
          return e;
        }),
        (e.prototype.testBit = function (e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t
            ? 0 != this.s
            : 0 != (this[t] & (1 << e % this.DB));
        }),
        (e.prototype.setBit = function (e) {
          return this.changeBit(e, r);
        }),
        (e.prototype.clearBit = function (e) {
          return this.changeBit(e, i);
        }),
        (e.prototype.flipBit = function (e) {
          return this.changeBit(e, o);
        }),
        (e.prototype.add = function (e) {
          var t = A();
          return this.addTo(e, t), t;
        }),
        (e.prototype.subtract = function (e) {
          var t = A();
          return this.subTo(e, t), t;
        }),
        (e.prototype.multiply = function (e) {
          var t = A();
          return this.multiplyTo(e, t), t;
        }),
        (e.prototype.divide = function (e) {
          var t = A();
          return this.divRemTo(e, t, null), t;
        }),
        (e.prototype.remainder = function (e) {
          var t = A();
          return this.divRemTo(e, null, t), t;
        }),
        (e.prototype.divideAndRemainder = function (e) {
          var t = A(),
            n = A();
          return this.divRemTo(e, t, n), [t, n];
        }),
        (e.prototype.modPow = function (e, t) {
          var n,
            r,
            o = e.bitLength(),
            i = B(1);
          if (o <= 0) return i;
          (n = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6),
            (r = o < 8 ? new W(t) : t.isEven() ? new j(t) : new R(t));
          var a = [],
            s = 3,
            u = n - 1,
            c = (1 << n) - 1;
          if (((a[1] = r.convert(this)), n > 1)) {
            var l = A();
            for (r.sqrTo(a[1], l); s <= c; )
              (a[s] = A()), r.mulTo(l, a[s - 2], a[s]), (s += 2);
          }
          var f,
            d,
            p = e.t - 1,
            h = !0,
            g = A();
          for (o = L(e[p]) - 1; p >= 0; ) {
            for (
              o >= u
                ? (f = (e[p] >> (o - u)) & c)
                : ((f = (e[p] & ((1 << (o + 1)) - 1)) << (u - o)),
                  p > 0 && (f |= e[p - 1] >> (this.DB + o - u))),
                s = n;
              0 == (1 & f);

            )
              (f >>= 1), --s;
            if (((o -= s) < 0 && ((o += this.DB), --p), h))
              a[f].copyTo(i), (h = !1);
            else {
              for (; s > 1; ) r.sqrTo(i, g), r.sqrTo(g, i), (s -= 2);
              s > 0 ? r.sqrTo(i, g) : ((d = i), (i = g), (g = d)),
                r.mulTo(g, a[f], i);
            }
            for (; p >= 0 && 0 == (e[p] & (1 << o)); )
              r.sqrTo(i, g),
                (d = i),
                (i = g),
                (g = d),
                --o < 0 && ((o = this.DB - 1), --p);
          }
          return r.revert(i);
        }),
        (e.prototype.modInverse = function (t) {
          var n = t.isEven();
          if ((this.isEven() && n) || 0 == t.signum()) return e.ZERO;
          for (
            var r = t.clone(),
              o = this.clone(),
              i = B(1),
              a = B(0),
              s = B(0),
              u = B(1);
            0 != r.signum();

          ) {
            for (; r.isEven(); )
              r.rShiftTo(1, r),
                n
                  ? ((i.isEven() && a.isEven()) ||
                      (i.addTo(this, i), a.subTo(t, a)),
                    i.rShiftTo(1, i))
                  : a.isEven() || a.subTo(t, a),
                a.rShiftTo(1, a);
            for (; o.isEven(); )
              o.rShiftTo(1, o),
                n
                  ? ((s.isEven() && u.isEven()) ||
                      (s.addTo(this, s), u.subTo(t, u)),
                    s.rShiftTo(1, s))
                  : u.isEven() || u.subTo(t, u),
                u.rShiftTo(1, u);
            r.compareTo(o) >= 0
              ? (r.subTo(o, r), n && i.subTo(s, i), a.subTo(u, a))
              : (o.subTo(r, o), n && s.subTo(i, s), u.subTo(a, u));
          }
          return 0 != o.compareTo(e.ONE)
            ? e.ZERO
            : u.compareTo(t) >= 0
            ? u.subtract(t)
            : u.signum() < 0
            ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u)
            : u;
        }),
        (e.prototype.pow = function (e) {
          return this.exp(e, new T());
        }),
        (e.prototype.gcd = function (e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            n = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(n) < 0) {
            var r = t;
            (t = n), (n = r);
          }
          var o = t.getLowestSetBit(),
            i = n.getLowestSetBit();
          if (i < 0) return t;
          for (
            o < i && (i = o), i > 0 && (t.rShiftTo(i, t), n.rShiftTo(i, n));
            t.signum() > 0;

          )
            (o = t.getLowestSetBit()) > 0 && t.rShiftTo(o, t),
              (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
              t.compareTo(n) >= 0
                ? (t.subTo(n, t), t.rShiftTo(1, t))
                : (n.subTo(t, n), n.rShiftTo(1, n));
          return i > 0 && n.lShiftTo(i, n), n;
        }),
        (e.prototype.isProbablePrime = function (e) {
          var t,
            n = this.abs();
          if (1 == n.t && n[0] <= k[k.length - 1]) {
            for (t = 0; t < k.length; ++t) if (n[0] == k[t]) return !0;
            return !1;
          }
          if (n.isEven()) return !1;
          for (t = 1; t < k.length; ) {
            for (var r = k[t], o = t + 1; o < k.length && r < O; ) r *= k[o++];
            for (r = n.modInt(r); t < o; ) if (r % k[t++] == 0) return !1;
          }
          return n.millerRabin(e);
        }),
        (e.prototype.copyTo = function (e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }),
        (e.prototype.fromInt = function (e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0
              ? (this[0] = e)
              : e < -1
              ? (this[0] = e + this.DV)
              : (this.t = 0);
        }),
        (e.prototype.fromString = function (t, n) {
          var r;
          if (16 == n) r = 4;
          else if (8 == n) r = 3;
          else if (256 == n) r = 8;
          else if (2 == n) r = 1;
          else if (32 == n) r = 5;
          else {
            if (4 != n) return void this.fromRadix(t, n);
            r = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var o = t.length, i = !1, a = 0; --o >= 0; ) {
            var s = 8 == r ? 255 & +t[o] : M(t, o);
            s < 0
              ? "-" == t.charAt(o) && (i = !0)
              : ((i = !1),
                0 == a
                  ? (this[this.t++] = s)
                  : a + r > this.DB
                  ? ((this[this.t - 1] |=
                      (s & ((1 << (this.DB - a)) - 1)) << a),
                    (this[this.t++] = s >> (this.DB - a)))
                  : (this[this.t - 1] |= s << a),
                (a += r) >= this.DB && (a -= this.DB));
          }
          8 == r &&
            0 != (128 & +t[0]) &&
            ((this.s = -1),
            a > 0 && (this[this.t - 1] |= ((1 << (this.DB - a)) - 1) << a)),
            this.clamp(),
            i && e.ZERO.subTo(this, this);
        }),
        (e.prototype.clamp = function () {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }),
        (e.prototype.dlShiftTo = function (e, t) {
          var n;
          for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
          for (n = e - 1; n >= 0; --n) t[n] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }),
        (e.prototype.drShiftTo = function (e, t) {
          for (var n = e; n < this.t; ++n) t[n - e] = this[n];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }),
        (e.prototype.lShiftTo = function (e, t) {
          for (
            var n = e % this.DB,
              r = this.DB - n,
              o = (1 << r) - 1,
              i = Math.floor(e / this.DB),
              a = (this.s << n) & this.DM,
              s = this.t - 1;
            s >= 0;
            --s
          )
            (t[s + i + 1] = (this[s] >> r) | a), (a = (this[s] & o) << n);
          for (s = i - 1; s >= 0; --s) t[s] = 0;
          (t[i] = a), (t.t = this.t + i + 1), (t.s = this.s), t.clamp();
        }),
        (e.prototype.rShiftTo = function (e, t) {
          t.s = this.s;
          var n = Math.floor(e / this.DB);
          if (n >= this.t) t.t = 0;
          else {
            var r = e % this.DB,
              o = this.DB - r,
              i = (1 << r) - 1;
            t[0] = this[n] >> r;
            for (var a = n + 1; a < this.t; ++a)
              (t[a - n - 1] |= (this[a] & i) << o), (t[a - n] = this[a] >> r);
            r > 0 && (t[this.t - n - 1] |= (this.s & i) << o),
              (t.t = this.t - n),
              t.clamp();
          }
        }),
        (e.prototype.subTo = function (e, t) {
          for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
            (r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
          if (e.t < this.t) {
            for (r -= e.s; n < this.t; )
              (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += this.s;
          } else {
            for (r += this.s; n < e.t; )
              (r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r -= e.s;
          }
          (t.s = r < 0 ? -1 : 0),
            r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r),
            (t.t = n),
            t.clamp();
        }),
        (e.prototype.multiplyTo = function (t, n) {
          var r = this.abs(),
            o = t.abs(),
            i = r.t;
          for (n.t = i + o.t; --i >= 0; ) n[i] = 0;
          for (i = 0; i < o.t; ++i) n[i + r.t] = r.am(0, o[i], n, i, 0, r.t);
          (n.s = 0), n.clamp(), this.s != t.s && e.ZERO.subTo(n, n);
        }),
        (e.prototype.squareTo = function (e) {
          for (var t = this.abs(), n = (e.t = 2 * t.t); --n >= 0; ) e[n] = 0;
          for (n = 0; n < t.t - 1; ++n) {
            var r = t.am(n, t[n], e, 2 * n, 0, 1);
            (e[n + t.t] += t.am(
              n + 1,
              2 * t[n],
              e,
              2 * n + 1,
              r,
              t.t - n - 1
            )) >= t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
          }
          e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
            (e.s = 0),
            e.clamp();
        }),
        (e.prototype.divRemTo = function (t, n, r) {
          var o = t.abs();
          if (!(o.t <= 0)) {
            var i = this.abs();
            if (i.t < o.t)
              return (
                null != n && n.fromInt(0), void (null != r && this.copyTo(r))
              );
            null == r && (r = A());
            var a = A(),
              s = this.s,
              u = t.s,
              c = this.DB - L(o[o.t - 1]);
            c > 0
              ? (o.lShiftTo(c, a), i.lShiftTo(c, r))
              : (o.copyTo(a), i.copyTo(r));
            var l = a.t,
              f = a[l - 1];
            if (0 != f) {
              var d = f * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2 : 0),
                p = this.FV / d,
                h = (1 << this.F1) / d,
                g = 1 << this.F2,
                v = r.t,
                m = v - l,
                y = null == n ? A() : n;
              for (
                a.dlShiftTo(m, y),
                  r.compareTo(y) >= 0 && ((r[r.t++] = 1), r.subTo(y, r)),
                  e.ONE.dlShiftTo(l, y),
                  y.subTo(a, a);
                a.t < l;

              )
                a[a.t++] = 0;
              for (; --m >= 0; ) {
                var b =
                  r[--v] == f
                    ? this.DM
                    : Math.floor(r[v] * p + (r[v - 1] + g) * h);
                if ((r[v] += a.am(0, b, r, m, 0, l)) < b)
                  for (a.dlShiftTo(m, y), r.subTo(y, r); r[v] < --b; )
                    r.subTo(y, r);
              }
              null != n && (r.drShiftTo(l, n), s != u && e.ZERO.subTo(n, n)),
                (r.t = l),
                r.clamp(),
                c > 0 && r.rShiftTo(c, r),
                s < 0 && e.ZERO.subTo(r, r);
            }
          }
        }),
        (e.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var e = this[0];
          if (0 == (1 & e)) return 0;
          var t = 3 & e;
          return (t =
            ((t =
              ((t =
                ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) &
                255) *
                (2 - (((65535 & e) * t) & 65535))) &
              65535) *
              (2 - ((e * t) % this.DV))) %
            this.DV) > 0
            ? this.DV - t
            : -t;
        }),
        (e.prototype.isEven = function () {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }),
        (e.prototype.exp = function (t, n) {
          if (t > 4294967295 || t < 1) return e.ONE;
          var r = A(),
            o = A(),
            i = n.convert(this),
            a = L(t) - 1;
          for (i.copyTo(r); --a >= 0; )
            if ((n.sqrTo(r, o), (t & (1 << a)) > 0)) n.mulTo(o, i, r);
            else {
              var s = r;
              (r = o), (o = s);
            }
          return n.revert(r);
        }),
        (e.prototype.chunkSize = function (e) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(e));
        }),
        (e.prototype.toRadix = function (e) {
          if ((null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36))
            return "0";
          var t = this.chunkSize(e),
            n = Math.pow(e, t),
            r = B(n),
            o = A(),
            i = A(),
            a = "";
          for (this.divRemTo(r, o, i); o.signum() > 0; )
            (a = (n + i.intValue()).toString(e).substr(1) + a),
              o.divRemTo(r, o, i);
          return i.intValue().toString(e) + a;
        }),
        (e.prototype.fromRadix = function (t, n) {
          this.fromInt(0), null == n && (n = 10);
          for (
            var r = this.chunkSize(n),
              o = Math.pow(n, r),
              i = !1,
              a = 0,
              s = 0,
              u = 0;
            u < t.length;
            ++u
          ) {
            var c = M(t, u);
            c < 0
              ? "-" == t.charAt(u) && 0 == this.signum() && (i = !0)
              : ((s = n * s + c),
                ++a >= r &&
                  (this.dMultiply(o), this.dAddOffset(s, 0), (a = 0), (s = 0)));
          }
          a > 0 && (this.dMultiply(Math.pow(n, a)), this.dAddOffset(s, 0)),
            i && e.ZERO.subTo(this, this);
        }),
        (e.prototype.fromNumber = function (t, n, o) {
          if ("number" == typeof n)
            if (t < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(t, o),
                  this.testBit(t - 1) ||
                    this.bitwiseTo(e.ONE.shiftLeft(t - 1), r, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(n);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > t &&
                    this.subTo(e.ONE.shiftLeft(t - 1), this);
          else {
            var i = [],
              a = 7 & t;
            (i.length = 1 + (t >> 3)),
              n.nextBytes(i),
              a > 0 ? (i[0] &= (1 << a) - 1) : (i[0] = 0),
              this.fromString(i, 256);
          }
        }),
        (e.prototype.bitwiseTo = function (e, t, n) {
          var r,
            o,
            i = Math.min(e.t, this.t);
          for (r = 0; r < i; ++r) n[r] = t(this[r], e[r]);
          if (e.t < this.t) {
            for (o = e.s & this.DM, r = i; r < this.t; ++r)
              n[r] = t(this[r], o);
            n.t = this.t;
          } else {
            for (o = this.s & this.DM, r = i; r < e.t; ++r) n[r] = t(o, e[r]);
            n.t = e.t;
          }
          (n.s = t(this.s, e.s)), n.clamp();
        }),
        (e.prototype.changeBit = function (t, n) {
          var r = e.ONE.shiftLeft(t);
          return this.bitwiseTo(r, n, r), r;
        }),
        (e.prototype.addTo = function (e, t) {
          for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
            (r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
          if (e.t < this.t) {
            for (r += e.s; n < this.t; )
              (r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += this.s;
          } else {
            for (r += this.s; n < e.t; )
              (r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB);
            r += e.s;
          }
          (t.s = r < 0 ? -1 : 0),
            r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
            (t.t = n),
            t.clamp();
        }),
        (e.prototype.dMultiply = function (e) {
          (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }),
        (e.prototype.dAddOffset = function (e, t) {
          if (0 != e) {
            for (; this.t <= t; ) this[this.t++] = 0;
            for (this[t] += e; this[t] >= this.DV; )
              (this[t] -= this.DV),
                ++t >= this.t && (this[this.t++] = 0),
                ++this[t];
          }
        }),
        (e.prototype.multiplyLowerTo = function (e, t, n) {
          var r = Math.min(this.t + e.t, t);
          for (n.s = 0, n.t = r; r > 0; ) n[--r] = 0;
          for (var o = n.t - this.t; r < o; ++r)
            n[r + this.t] = this.am(0, e[r], n, r, 0, this.t);
          for (o = Math.min(e.t, t); r < o; ++r)
            this.am(0, e[r], n, r, 0, t - r);
          n.clamp();
        }),
        (e.prototype.multiplyUpperTo = function (e, t, n) {
          --t;
          var r = (n.t = this.t + e.t - t);
          for (n.s = 0; --r >= 0; ) n[r] = 0;
          for (r = Math.max(t - this.t, 0); r < e.t; ++r)
            n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
          n.clamp(), n.drShiftTo(1, n);
        }),
        (e.prototype.modInt = function (e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            n = this.s < 0 ? e - 1 : 0;
          if (this.t > 0)
            if (0 == t) n = this[0] % e;
            else
              for (var r = this.t - 1; r >= 0; --r) n = (t * n + this[r]) % e;
          return n;
        }),
        (e.prototype.millerRabin = function (t) {
          var n = this.subtract(e.ONE),
            r = n.getLowestSetBit();
          if (r <= 0) return !1;
          var o = n.shiftRight(r);
          (t = (t + 1) >> 1) > k.length && (t = k.length);
          for (var i = A(), a = 0; a < t; ++a) {
            i.fromInt(k[Math.floor(Math.random() * k.length)]);
            var s = i.modPow(o, this);
            if (0 != s.compareTo(e.ONE) && 0 != s.compareTo(n)) {
              for (var u = 1; u++ < r && 0 != s.compareTo(n); )
                if (0 == (s = s.modPowInt(2, this)).compareTo(e.ONE)) return !1;
              if (0 != s.compareTo(n)) return !1;
            }
          }
          return !0;
        }),
        (e.prototype.square = function () {
          var e = A();
          return this.squareTo(e), e;
        }),
        (e.prototype.gcda = function (e, t) {
          var n = this.s < 0 ? this.negate() : this.clone(),
            r = e.s < 0 ? e.negate() : e.clone();
          if (n.compareTo(r) < 0) {
            var o = n;
            (n = r), (r = o);
          }
          var i = n.getLowestSetBit(),
            a = r.getLowestSetBit();
          if (a < 0) t(n);
          else {
            i < a && (a = i), a > 0 && (n.rShiftTo(a, n), r.rShiftTo(a, r));
            var s = function () {
              (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
                (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
                n.compareTo(r) >= 0
                  ? (n.subTo(r, n), n.rShiftTo(1, n))
                  : (r.subTo(n, r), r.rShiftTo(1, r)),
                n.signum() > 0
                  ? setTimeout(s, 0)
                  : (a > 0 && r.lShiftTo(a, r),
                    setTimeout(function () {
                      t(r);
                    }, 0));
            };
            setTimeout(s, 10);
          }
        }),
        (e.prototype.fromNumberAsync = function (t, n, o, i) {
          if ("number" == typeof n)
            if (t < 2) this.fromInt(1);
            else {
              this.fromNumber(t, o),
                this.testBit(t - 1) ||
                  this.bitwiseTo(e.ONE.shiftLeft(t - 1), r, this),
                this.isEven() && this.dAddOffset(1, 0);
              var a = this,
                s = function () {
                  a.dAddOffset(2, 0),
                    a.bitLength() > t && a.subTo(e.ONE.shiftLeft(t - 1), a),
                    a.isProbablePrime(n)
                      ? setTimeout(function () {
                          i();
                        }, 0)
                      : setTimeout(s, 0);
                };
              setTimeout(s, 0);
            }
          else {
            var u = [],
              c = 7 & t;
            (u.length = 1 + (t >> 3)),
              n.nextBytes(u),
              c > 0 ? (u[0] &= (1 << c) - 1) : (u[0] = 0),
              this.fromString(u, 256);
          }
        }),
        e
      );
    })(),
    T = (function () {
      function e() {}

      return (
        (e.prototype.convert = function (e) {
          return e;
        }),
        (e.prototype.revert = function (e) {
          return e;
        }),
        (e.prototype.mulTo = function (e, t, n) {
          e.multiplyTo(t, n);
        }),
        (e.prototype.sqrTo = function (e, t) {
          e.squareTo(t);
        }),
        e
      );
    })(),
    W = (function () {
      function e(e) {
        this.m = e;
      }

      return (
        (e.prototype.convert = function (e) {
          return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
        }),
        (e.prototype.revert = function (e) {
          return e;
        }),
        (e.prototype.reduce = function (e) {
          e.divRemTo(this.m, null, e);
        }),
        (e.prototype.mulTo = function (e, t, n) {
          e.multiplyTo(t, n), this.reduce(n);
        }),
        (e.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        e
      );
    })(),
    R = (function () {
      function e(e) {
        (this.m = e),
          (this.mp = e.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (e.DB - 15)) - 1),
          (this.mt2 = 2 * e.t);
      }

      return (
        (e.prototype.convert = function (e) {
          var t = A();
          return (
            e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(E.ZERO) > 0 && this.m.subTo(t, t),
            t
          );
        }),
        (e.prototype.revert = function (e) {
          var t = A();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (e.prototype.reduce = function (e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var n = 32767 & e[t],
              r =
                (n * this.mpl +
                  (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              e[(n = t + this.m.t)] += this.m.am(0, r, e, t, 0, this.m.t);
              e[n] >= e.DV;

            )
              (e[n] -= e.DV), e[++n]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }),
        (e.prototype.mulTo = function (e, t, n) {
          e.multiplyTo(t, n), this.reduce(n);
        }),
        (e.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        e
      );
    })(),
    j = (function () {
      function e(e) {
        (this.m = e),
          (this.r2 = A()),
          (this.q3 = A()),
          E.ONE.dlShiftTo(2 * e.t, this.r2),
          (this.mu = this.r2.divide(e));
      }

      return (
        (e.prototype.convert = function (e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = A();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (e.prototype.revert = function (e) {
          return e;
        }),
        (e.prototype.reduce = function (e) {
          for (
            e.drShiftTo(this.m.t - 1, this.r2),
              e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            e.compareTo(this.r2) < 0;

          )
            e.dAddOffset(1, this.m.t + 1);
          for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
            e.subTo(this.m, e);
        }),
        (e.prototype.mulTo = function (e, t, n) {
          e.multiplyTo(t, n), this.reduce(n);
        }),
        (e.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        e
      );
    })();

  function A() {
    return new E(null);
  }

  function P(e, t) {
    return new E(e, t);
  }

  "Microsoft Internet Explorer" == navigator.appName
    ? ((E.prototype.am = function (e, t, n, r, o, i) {
        for (var a = 32767 & t, s = t >> 15; --i >= 0; ) {
          var u = 32767 & this[e],
            c = this[e++] >> 15,
            l = s * u + c * a;
          (o =
            ((u = a * u + ((32767 & l) << 15) + n[r] + (1073741823 & o)) >>>
              30) +
            (l >>> 15) +
            s * c +
            (o >>> 30)),
            (n[r++] = 1073741823 & u);
        }
        return o;
      }),
      (w = 30))
    : "Netscape" != navigator.appName
    ? ((E.prototype.am = function (e, t, n, r, o, i) {
        for (; --i >= 0; ) {
          var a = t * this[e++] + n[r] + o;
          (o = Math.floor(a / 67108864)), (n[r++] = 67108863 & a);
        }
        return o;
      }),
      (w = 26))
    : ((E.prototype.am = function (e, t, n, r, o, i) {
        for (var a = 16383 & t, s = t >> 14; --i >= 0; ) {
          var u = 16383 & this[e],
            c = this[e++] >> 14,
            l = s * u + c * a;
          (o =
            ((u = a * u + ((16383 & l) << 14) + n[r] + o) >> 28) +
            (l >> 14) +
            s * c),
            (n[r++] = 268435455 & u);
        }
        return o;
      }),
      (w = 28)),
    (E.prototype.DB = w),
    (E.prototype.DM = (1 << w) - 1),
    (E.prototype.DV = 1 << w),
    (E.prototype.FV = Math.pow(2, 52)),
    (E.prototype.F1 = 52 - w),
    (E.prototype.F2 = 2 * w - 52);
  var I,
    N,
    D = [];
  for (I = "0".charCodeAt(0), N = 0; N <= 9; ++N) D[I++] = N;
  for (I = "a".charCodeAt(0), N = 10; N < 36; ++N) D[I++] = N;
  for (I = "A".charCodeAt(0), N = 10; N < 36; ++N) D[I++] = N;

  function M(e, t) {
    var n = D[e.charCodeAt(t)];
    return null == n ? -1 : n;
  }

  function B(e) {
    var t = A();
    return t.fromInt(e), t;
  }

  function L(e) {
    var t,
      n = 1;
    return (
      0 != (t = e >>> 16) && ((e = t), (n += 16)),
      0 != (t = e >> 8) && ((e = t), (n += 8)),
      0 != (t = e >> 4) && ((e = t), (n += 4)),
      0 != (t = e >> 2) && ((e = t), (n += 2)),
      0 != (t = e >> 1) && ((e = t), (n += 1)),
      n
    );
  }

  (E.ZERO = B(0)), (E.ONE = B(1));
  var F,
    U,
    q = (function () {
      function e() {
        (this.i = 0), (this.j = 0), (this.S = []);
      }

      return (
        (e.prototype.init = function (e) {
          var t, n, r;
          for (t = 0; t < 256; ++t) this.S[t] = t;
          for (n = 0, t = 0; t < 256; ++t)
            (n = (n + this.S[t] + e[t % e.length]) & 255),
              (r = this.S[t]),
              (this.S[t] = this.S[n]),
              (this.S[n] = r);
          (this.i = 0), (this.j = 0);
        }),
        (e.prototype.next = function () {
          var e;
          return (
            (this.i = (this.i + 1) & 255),
            (this.j = (this.j + this.S[this.i]) & 255),
            (e = this.S[this.i]),
            (this.S[this.i] = this.S[this.j]),
            (this.S[this.j] = e),
            this.S[(e + this.S[this.i]) & 255]
          );
        }),
        e
      );
    })(),
    z = null;
  if (null == z) {
    (z = []), (U = 0);
    var H = void 0;
    if (window.crypto && window.crypto.getRandomValues) {
      var V = new Uint32Array(256);
      for (window.crypto.getRandomValues(V), H = 0; H < V.length; ++H)
        z[U++] = 255 & V[H];
    }
    var G = function (e) {
      if (((this.count = this.count || 0), this.count >= 256 || U >= 256))
        window.removeEventListener
          ? window.removeEventListener("mousemove", G, !1)
          : window.detachEvent && window.detachEvent("onmousemove", G);
      else
        try {
          var t = e.x + e.y;
          (z[U++] = 255 & t), (this.count += 1);
        } catch (n) {}
    };
    window.addEventListener
      ? window.addEventListener("mousemove", G, !1)
      : window.attachEvent && window.attachEvent("onmousemove", G);
  }

  function $() {
    if (null == F) {
      for (F = new q(); U < 256; ) {
        var e = Math.floor(65536 * Math.random());
        z[U++] = 255 & e;
      }
      for (F.init(z), U = 0; U < z.length; ++U) z[U] = 0;
      U = 0;
    }
    return F.next();
  }

  var Q = (function () {
      function e() {}

      return (
        (e.prototype.nextBytes = function (e) {
          for (var t = 0; t < e.length; ++t) e[t] = $();
        }),
        e
      );
    })(),
    J = (function () {
      function e() {
        (this.n = null),
          (this.e = 0),
          (this.d = null),
          (this.p = null),
          (this.q = null),
          (this.dmp1 = null),
          (this.dmq1 = null),
          (this.coeff = null);
      }

      return (
        (e.prototype.doPublic = function (e) {
          return e.modPowInt(this.e, this.n);
        }),
        (e.prototype.doPrivate = function (e) {
          if (null == this.p || null == this.q) return e.modPow(this.d, this.n);
          for (
            var t = e.mod(this.p).modPow(this.dmp1, this.p),
              n = e.mod(this.q).modPow(this.dmq1, this.q);
            t.compareTo(n) < 0;

          )
            t = t.add(this.p);
          return t
            .subtract(n)
            .multiply(this.coeff)
            .mod(this.p)
            .multiply(this.q)
            .add(n);
        }),
        (e.prototype.setPublic = function (e, t) {
          null != e && null != t && e.length > 0 && t.length > 0
            ? ((this.n = P(e, 16)), (this.e = parseInt(t, 16)))
            : console.error("Invalid RSA public key");
        }),
        (e.prototype.encrypt = function (e) {
          var t = (function (e, t) {
            if (t < e.length + 11)
              return console.error("Message too long for RSA"), null;
            for (var n = [], r = e.length - 1; r >= 0 && t > 0; ) {
              var o = e.charCodeAt(r--);
              o < 128
                ? (n[--t] = o)
                : o > 127 && o < 2048
                ? ((n[--t] = (63 & o) | 128), (n[--t] = (o >> 6) | 192))
                : ((n[--t] = (63 & o) | 128),
                  (n[--t] = ((o >> 6) & 63) | 128),
                  (n[--t] = (o >> 12) | 224));
            }
            n[--t] = 0;
            for (var i = new Q(), a = []; t > 2; ) {
              for (a[0] = 0; 0 == a[0]; ) i.nextBytes(a);
              n[--t] = a[0];
            }
            return (n[--t] = 2), (n[--t] = 0), new E(n);
          })(e, (this.n.bitLength() + 7) >> 3);
          if (null == t) return null;
          var n = this.doPublic(t);
          if (null == n) return null;
          var r = n.toString(16);
          return 0 == (1 & r.length) ? r : "0" + r;
        }),
        (e.prototype.setPrivate = function (e, t, n) {
          null != e && null != t && e.length > 0 && t.length > 0
            ? ((this.n = P(e, 16)),
              (this.e = parseInt(t, 16)),
              (this.d = P(n, 16)))
            : console.error("Invalid RSA private key");
        }),
        (e.prototype.setPrivateEx = function (e, t, n, r, o, i, a, s) {
          null != e && null != t && e.length > 0 && t.length > 0
            ? ((this.n = P(e, 16)),
              (this.e = parseInt(t, 16)),
              (this.d = P(n, 16)),
              (this.p = P(r, 16)),
              (this.q = P(o, 16)),
              (this.dmp1 = P(i, 16)),
              (this.dmq1 = P(a, 16)),
              (this.coeff = P(s, 16)))
            : console.error("Invalid RSA private key");
        }),
        (e.prototype.generate = function (e, t) {
          var n = new Q(),
            r = e >> 1;
          this.e = parseInt(t, 16);
          for (var o = new E(t, 16); ; ) {
            for (
              ;
              (this.p = new E(e - r, 1, n)),
                0 != this.p.subtract(E.ONE).gcd(o).compareTo(E.ONE) ||
                  !this.p.isProbablePrime(10);

            );
            for (
              ;
              (this.q = new E(r, 1, n)),
                0 != this.q.subtract(E.ONE).gcd(o).compareTo(E.ONE) ||
                  !this.q.isProbablePrime(10);

            );
            if (this.p.compareTo(this.q) <= 0) {
              var i = this.p;
              (this.p = this.q), (this.q = i);
            }
            var a = this.p.subtract(E.ONE),
              s = this.q.subtract(E.ONE),
              u = a.multiply(s);
            if (0 == u.gcd(o).compareTo(E.ONE)) {
              (this.n = this.p.multiply(this.q)),
                (this.d = o.modInverse(u)),
                (this.dmp1 = this.d.mod(a)),
                (this.dmq1 = this.d.mod(s)),
                (this.coeff = this.q.modInverse(this.p));
              break;
            }
          }
        }),
        (e.prototype.decrypt = function (e) {
          var t = P(e, 16),
            n = this.doPrivate(t);
          return null == n
            ? null
            : (function (e, t) {
                for (
                  var n = e.toByteArray(), r = 0;
                  r < n.length && 0 == n[r];

                )
                  ++r;
                if (n.length - r != t - 1 || 2 != n[r]) return null;
                for (++r; 0 != n[r]; ) if (++r >= n.length) return null;
                for (var o = ""; ++r < n.length; ) {
                  var i = 255 & n[r];
                  i < 128
                    ? (o += String.fromCharCode(i))
                    : i > 191 && i < 224
                    ? ((o += String.fromCharCode(
                        ((31 & i) << 6) | (63 & n[r + 1])
                      )),
                      ++r)
                    : ((o += String.fromCharCode(
                        ((15 & i) << 12) |
                          ((63 & n[r + 1]) << 6) |
                          (63 & n[r + 2])
                      )),
                      (r += 2));
                }
                return o;
              })(n, (this.n.bitLength() + 7) >> 3);
        }),
        (e.prototype.generateAsync = function (e, t, n) {
          var r = new Q(),
            o = e >> 1;
          this.e = parseInt(t, 16);
          var i = new E(t, 16),
            a = this,
            s = function () {
              var t = function () {
                  if (a.p.compareTo(a.q) <= 0) {
                    var e = a.p;
                    (a.p = a.q), (a.q = e);
                  }
                  var t = a.p.subtract(E.ONE),
                    r = a.q.subtract(E.ONE),
                    o = t.multiply(r);
                  0 == o.gcd(i).compareTo(E.ONE)
                    ? ((a.n = a.p.multiply(a.q)),
                      (a.d = i.modInverse(o)),
                      (a.dmp1 = a.d.mod(t)),
                      (a.dmq1 = a.d.mod(r)),
                      (a.coeff = a.q.modInverse(a.p)),
                      setTimeout(function () {
                        n();
                      }, 0))
                    : setTimeout(s, 0);
                },
                u = function () {
                  (a.q = A()),
                    a.q.fromNumberAsync(o, 1, r, function () {
                      a.q.subtract(E.ONE).gcda(i, function (e) {
                        0 == e.compareTo(E.ONE) && a.q.isProbablePrime(10)
                          ? setTimeout(t, 0)
                          : setTimeout(u, 0);
                      });
                    });
                },
                c = function () {
                  (a.p = A()),
                    a.p.fromNumberAsync(e - o, 1, r, function () {
                      a.p.subtract(E.ONE).gcda(i, function (e) {
                        0 == e.compareTo(E.ONE) && a.p.isProbablePrime(10)
                          ? setTimeout(u, 0)
                          : setTimeout(c, 0);
                      });
                    });
                };
              setTimeout(c, 0);
            };
          setTimeout(s, 0);
        }),
        (e.prototype.sign = function (e, t, n) {
          var r = (function (e, t) {
            if (t < e.length + 22)
              return console.error("Message too long for RSA"), null;
            for (var n = t - e.length - 6, r = "", o = 0; o < n; o += 2)
              r += "ff";
            return P("0001" + r + "00" + e, 16);
          })((K[n] || "") + t(e).toString(), this.n.bitLength() / 4);
          if (null == r) return null;
          var o = this.doPrivate(r);
          if (null == o) return null;
          var i = o.toString(16);
          return 0 == (1 & i.length) ? i : "0" + i;
        }),
        (e.prototype.verify = function (e, t, n) {
          var r = P(t, 16),
            o = this.doPublic(r);
          return null == o
            ? null
            : (function (e) {
                for (var t in K)
                  if (K.hasOwnProperty(t)) {
                    var n = K[t],
                      r = n.length;
                    if (e.substr(0, r) == n) return e.substr(r);
                  }
                return e;
              })(o.toString(16).replace(/^1f+00/, "")) == n(e).toString();
        }),
        e
      );
    })(),
    K = {
      md2: "3020300c06082a864886f70d020205000410",
      md5: "3020300c06082a864886f70d020505000410",
      sha1: "3021300906052b0e03021a05000414",
      sha224: "302d300d06096086480165030402040500041c",
      sha256: "3031300d060960864801650304020105000420",
      sha384: "3041300d060960864801650304020205000430",
      sha512: "3051300d060960864801650304020305000440",
      ripemd160: "3021300906052b2403020105000414",
    },
    Y = {};
  Y.lang = {
    extend: function (e, t, n) {
      if (!t || !e)
        throw new Error(
          "YAHOO.lang.extend failed, please check that all dependencies are included."
        );
      var r = function () {};
      if (
        ((r.prototype = t.prototype),
        (e.prototype = new r()),
        (e.prototype.constructor = e),
        (e.superclass = t.prototype),
        t.prototype.constructor == Object.prototype.constructor &&
          (t.prototype.constructor = t),
        n)
      ) {
        var o;
        for (o in n) e.prototype[o] = n[o];
        var i = function () {},
          a = ["toString", "valueOf"];
        try {
          /MSIE/.test(navigator.userAgent) &&
            (i = function (e, t) {
              for (o = 0; o < a.length; o += 1) {
                var n = a[o],
                  r = t[n];
                "function" === typeof r &&
                  r != Object.prototype[n] &&
                  (e[n] = r);
              }
            });
        } catch (s) {}
        i(e.prototype, n);
      }
    },
  };
  var X = {};
  ("undefined" != typeof X.asn1 && X.asn1) || (X.asn1 = {}),
    (X.asn1.ASN1Util = new (function () {
      (this.integerToByteHex = function (e) {
        var t = e.toString(16);
        return t.length % 2 == 1 && (t = "0" + t), t;
      }),
        (this.bigIntToMinTwosComplementsHex = function (e) {
          var t = e.toString(16);
          if ("-" != t.substr(0, 1))
            t.length % 2 == 1
              ? (t = "0" + t)
              : t.match(/^[0-7]/) || (t = "00" + t);
          else {
            var n = t.substr(1).length;
            n % 2 == 1 ? (n += 1) : t.match(/^[0-7]/) || (n += 2);
            for (var r = "", o = 0; o < n; o++) r += "f";
            t = new E(r, 16).xor(e).add(E.ONE).toString(16).replace(/^-/, "");
          }
          return t;
        }),
        (this.getPEMStringFromHex = function (e, t) {
          return hextopem(e, t);
        }),
        (this.newObject = function (e) {
          var t = X.asn1,
            n = t.DERBoolean,
            r = t.DERInteger,
            o = t.DERBitString,
            i = t.DEROctetString,
            a = t.DERNull,
            s = t.DERObjectIdentifier,
            u = t.DEREnumerated,
            c = t.DERUTF8String,
            l = t.DERNumericString,
            f = t.DERPrintableString,
            d = t.DERTeletexString,
            p = t.DERIA5String,
            h = t.DERUTCTime,
            g = t.DERGeneralizedTime,
            v = t.DERSequence,
            m = t.DERSet,
            y = t.DERTaggedObject,
            b = t.ASN1Util.newObject,
            x = Object.keys(e);
          if (1 != x.length) throw "key of param shall be only one.";
          var w = x[0];
          if (
            -1 ==
            ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(
              ":" + w + ":"
            )
          )
            throw "undefined key: " + w;
          if ("bool" == w) return new n(e[w]);
          if ("int" == w) return new r(e[w]);
          if ("bitstr" == w) return new o(e[w]);
          if ("octstr" == w) return new i(e[w]);
          if ("null" == w) return new a(e[w]);
          if ("oid" == w) return new s(e[w]);
          if ("enum" == w) return new u(e[w]);
          if ("utf8str" == w) return new c(e[w]);
          if ("numstr" == w) return new l(e[w]);
          if ("prnstr" == w) return new f(e[w]);
          if ("telstr" == w) return new d(e[w]);
          if ("ia5str" == w) return new p(e[w]);
          if ("utctime" == w) return new h(e[w]);
          if ("gentime" == w) return new g(e[w]);
          if ("seq" == w) {
            for (var S = e[w], _ = [], C = 0; C < S.length; C++) {
              var k = b(S[C]);
              _.push(k);
            }
            return new v({ array: _ });
          }
          if ("set" == w) {
            for (S = e[w], _ = [], C = 0; C < S.length; C++)
              (k = b(S[C])), _.push(k);
            return new m({ array: _ });
          }
          if ("tag" == w) {
            var O = e[w];
            if (
              "[object Array]" === Object.prototype.toString.call(O) &&
              3 == O.length
            ) {
              var E = b(O[2]);
              return new y({ tag: O[0], explicit: O[1], obj: E });
            }
            var T = {};
            if (
              (void 0 !== O.explicit && (T.explicit = O.explicit),
              void 0 !== O.tag && (T.tag = O.tag),
              void 0 === O.obj)
            )
              throw "obj shall be specified for 'tag'.";
            return (T.obj = b(O.obj)), new y(T);
          }
        }),
        (this.jsonToASN1HEX = function (e) {
          return this.newObject(e).getEncodedHex();
        });
    })()),
    (X.asn1.ASN1Util.oidHexToInt = function (e) {
      for (
        var t = "",
          n = parseInt(e.substr(0, 2), 16),
          r = ((t = Math.floor(n / 40) + "." + (n % 40)), ""),
          o = 2;
        o < e.length;
        o += 2
      ) {
        var i = ("00000000" + parseInt(e.substr(o, 2), 16).toString(2)).slice(
          -8
        );
        (r += i.substr(1, 7)),
          "0" == i.substr(0, 1) &&
            ((t = t + "." + new E(r, 2).toString(10)), (r = ""));
      }
      return t;
    }),
    (X.asn1.ASN1Util.oidIntToHex = function (e) {
      var t = function (e) {
          var t = e.toString(16);
          return 1 == t.length && (t = "0" + t), t;
        },
        n = function (e) {
          var n = "",
            r = new E(e, 10).toString(2),
            o = 7 - (r.length % 7);
          7 == o && (o = 0);
          for (var i = "", a = 0; a < o; a++) i += "0";
          for (r = i + r, a = 0; a < r.length - 1; a += 7) {
            var s = r.substr(a, 7);
            a != r.length - 7 && (s = "1" + s), (n += t(parseInt(s, 2)));
          }
          return n;
        };
      if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
      var r = "",
        o = e.split("."),
        i = 40 * parseInt(o[0]) + parseInt(o[1]);
      (r += t(i)), o.splice(0, 2);
      for (var a = 0; a < o.length; a++) r += n(o[a]);
      return r;
    }),
    (X.asn1.ASN1Object = function () {
      (this.getLengthHexFromValue = function () {
        if ("undefined" == typeof this.hV || null == this.hV)
          throw "this.hV is null or undefined.";
        if (this.hV.length % 2 == 1)
          throw (
            "value hex must be even length: n=" + "".length + ",v=" + this.hV
          );
        var e = this.hV.length / 2,
          t = e.toString(16);
        if ((t.length % 2 == 1 && (t = "0" + t), e < 128)) return t;
        var n = t.length / 2;
        if (n > 15)
          throw (
            "ASN.1 length too long to represent by 8x: n = " + e.toString(16)
          );
        return (128 + n).toString(16) + t;
      }),
        (this.getEncodedHex = function () {
          return (
            (null == this.hTLV || this.isModified) &&
              ((this.hV = this.getFreshValueHex()),
              (this.hL = this.getLengthHexFromValue()),
              (this.hTLV = this.hT + this.hL + this.hV),
              (this.isModified = !1)),
            this.hTLV
          );
        }),
        (this.getValueHex = function () {
          return this.getEncodedHex(), this.hV;
        }),
        (this.getFreshValueHex = function () {
          return "";
        });
    }),
    (X.asn1.DERAbstractString = function (e) {
      X.asn1.DERAbstractString.superclass.constructor.call(this),
        (this.getString = function () {
          return this.s;
        }),
        (this.setString = function (e) {
          (this.hTLV = null),
            (this.isModified = !0),
            (this.s = e),
            (this.hV = stohex(this.s));
        }),
        (this.setStringHex = function (e) {
          (this.hTLV = null),
            (this.isModified = !0),
            (this.s = null),
            (this.hV = e);
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        "undefined" != typeof e &&
          ("string" == typeof e
            ? this.setString(e)
            : "undefined" != typeof e.str
            ? this.setString(e.str)
            : "undefined" != typeof e.hex && this.setStringHex(e.hex));
    }),
    Y.lang.extend(X.asn1.DERAbstractString, X.asn1.ASN1Object),
    (X.asn1.DERAbstractTime = function (e) {
      X.asn1.DERAbstractTime.superclass.constructor.call(this),
        (this.localDateToUTC = function (e) {
          let utc;
          return (
            (utc = e.getTime() + 6e4 * e.getTimezoneOffset()), new Date(utc)
          );
        }),
        (this.formatDate = function (e, t, n) {
          var r = this.zeroPadding,
            o = this.localDateToUTC(e),
            i = String(o.getFullYear());
          "utc" == t && (i = i.substr(2, 2));
          var a =
            i +
            r(String(o.getMonth() + 1), 2) +
            r(String(o.getDate()), 2) +
            r(String(o.getHours()), 2) +
            r(String(o.getMinutes()), 2) +
            r(String(o.getSeconds()), 2);
          if (!0 === n) {
            var s = o.getMilliseconds();
            if (0 != s) {
              var u = r(String(s), 3);
              a = a + "." + (u = u.replace(/[0]+$/, ""));
            }
          }
          return a + "Z";
        }),
        (this.zeroPadding = function (e, t) {
          return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e;
        }),
        (this.getString = function () {
          return this.s;
        }),
        (this.setString = function (e) {
          (this.hTLV = null),
            (this.isModified = !0),
            (this.s = e),
            (this.hV = stohex(e));
        }),
        (this.setByDateValue = function (e, t, n, r, o, i) {
          var a = new Date(Date.UTC(e, t - 1, n, r, o, i, 0));
          this.setByDate(a);
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        });
    }),
    Y.lang.extend(X.asn1.DERAbstractTime, X.asn1.ASN1Object),
    (X.asn1.DERAbstractStructured = function (e) {
      X.asn1.DERAbstractString.superclass.constructor.call(this),
        (this.setByASN1ObjectArray = function (e) {
          (this.hTLV = null), (this.isModified = !0), (this.asn1Array = e);
        }),
        (this.appendASN1Object = function (e) {
          (this.hTLV = null), (this.isModified = !0), this.asn1Array.push(e);
        }),
        (this.asn1Array = new Array()),
        "undefined" != typeof e &&
          "undefined" != typeof e.array &&
          (this.asn1Array = e.array);
    }),
    Y.lang.extend(X.asn1.DERAbstractStructured, X.asn1.ASN1Object),
    (X.asn1.DERBoolean = function () {
      X.asn1.DERBoolean.superclass.constructor.call(this),
        (this.hT = "01"),
        (this.hTLV = "0101ff");
    }),
    Y.lang.extend(X.asn1.DERBoolean, X.asn1.ASN1Object),
    (X.asn1.DERInteger = function (e) {
      X.asn1.DERInteger.superclass.constructor.call(this),
        (this.hT = "02"),
        (this.setByBigInteger = function (e) {
          (this.hTLV = null),
            (this.isModified = !0),
            (this.hV = X.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e));
        }),
        (this.setByInteger = function (e) {
          var t = new E(String(e), 10);
          this.setByBigInteger(t);
        }),
        (this.setValueHex = function (e) {
          this.hV = e;
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        "undefined" != typeof e &&
          ("undefined" != typeof e.bigint
            ? this.setByBigInteger(e.bigint)
            : "undefined" != typeof e.int
            ? this.setByInteger(e.int)
            : "number" == typeof e
            ? this.setByInteger(e)
            : "undefined" != typeof e.hex && this.setValueHex(e.hex));
    }),
    Y.lang.extend(X.asn1.DERInteger, X.asn1.ASN1Object),
    (X.asn1.DERBitString = function (e) {
      if (void 0 !== e && "undefined" !== typeof e.obj) {
        var t = X.asn1.ASN1Util.newObject(e.obj);
        e.hex = "00" + t.getEncodedHex();
      }
      X.asn1.DERBitString.superclass.constructor.call(this),
        (this.hT = "03"),
        (this.setHexValueIncludingUnusedBits = function (e) {
          (this.hTLV = null), (this.isModified = !0), (this.hV = e);
        }),
        (this.setUnusedBitsAndHexValue = function (e, t) {
          if (e < 0 || 7 < e)
            throw "unused bits shall be from 0 to 7: u = " + e;
          var n = "0" + e;
          (this.hTLV = null), (this.isModified = !0), (this.hV = n + t);
        }),
        (this.setByBinaryString = function (e) {
          var t = 8 - ((e = e.replace(/0+$/, "")).length % 8);
          8 == t && (t = 0);
          for (var n = 0; n <= t; n++) e += "0";
          var r = "";
          for (n = 0; n < e.length - 1; n += 8) {
            var o = e.substr(n, 8),
              i = parseInt(o, 2).toString(16);
            1 == i.length && (i = "0" + i), (r += i);
          }
          (this.hTLV = null), (this.isModified = !0), (this.hV = "0" + t + r);
        }),
        (this.setByBooleanArray = function (e) {
          for (var t = "", n = 0; n < e.length; n++)
            1 == e[n] ? (t += "1") : (t += "0");
          this.setByBinaryString(t);
        }),
        (this.newFalseArray = function (e) {
          for (var t = new Array(e), n = 0; n < e; n++) t[n] = !1;
          return t;
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        "undefined" != typeof e &&
          ("string" == typeof e && e.toLowerCase().match(/^[0-9a-f]+$/)
            ? this.setHexValueIncludingUnusedBits(e)
            : "undefined" != typeof e.hex
            ? this.setHexValueIncludingUnusedBits(e.hex)
            : "undefined" != typeof e.bin
            ? this.setByBinaryString(e.bin)
            : "undefined" != typeof e.array && this.setByBooleanArray(e.array));
    }),
    Y.lang.extend(X.asn1.DERBitString, X.asn1.ASN1Object),
    (X.asn1.DEROctetString = function (e) {
      if (void 0 !== e && "undefined" !== typeof e.obj) {
        var t = X.asn1.ASN1Util.newObject(e.obj);
        e.hex = t.getEncodedHex();
      }
      X.asn1.DEROctetString.superclass.constructor.call(this, e),
        (this.hT = "04");
    }),
    Y.lang.extend(X.asn1.DEROctetString, X.asn1.DERAbstractString),
    (X.asn1.DERNull = function () {
      X.asn1.DERNull.superclass.constructor.call(this),
        (this.hT = "05"),
        (this.hTLV = "0500");
    }),
    Y.lang.extend(X.asn1.DERNull, X.asn1.ASN1Object),
    (X.asn1.DERObjectIdentifier = function (e) {
      var t = function (e) {
          var t = e.toString(16);
          return 1 == t.length && (t = "0" + t), t;
        },
        n = function (e) {
          var n = "",
            r = new E(e, 10).toString(2),
            o = 7 - (r.length % 7);
          7 == o && (o = 0);
          for (var i = "", a = 0; a < o; a++) i += "0";
          for (r = i + r, a = 0; a < r.length - 1; a += 7) {
            var s = r.substr(a, 7);
            a != r.length - 7 && (s = "1" + s), (n += t(parseInt(s, 2)));
          }
          return n;
        };
      X.asn1.DERObjectIdentifier.superclass.constructor.call(this),
        (this.hT = "06"),
        (this.setValueHex = function (e) {
          (this.hTLV = null),
            (this.isModified = !0),
            (this.s = null),
            (this.hV = e);
        }),
        (this.setValueOidString = function (e) {
          if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
          var r = "",
            o = e.split("."),
            i = 40 * parseInt(o[0]) + parseInt(o[1]);
          (r += t(i)), o.splice(0, 2);
          for (var a = 0; a < o.length; a++) r += n(o[a]);
          (this.hTLV = null),
            (this.isModified = !0),
            (this.s = null),
            (this.hV = r);
        }),
        (this.setValueName = function (e) {
          var t = X.asn1.x509.OID.name2oid(e);
          if ("" === t) throw "DERObjectIdentifier oidName undefined: " + e;
          this.setValueOidString(t);
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        void 0 !== e &&
          ("string" === typeof e
            ? e.match(/^[0-2].[0-9.]+$/)
              ? this.setValueOidString(e)
              : this.setValueName(e)
            : void 0 !== e.oid
            ? this.setValueOidString(e.oid)
            : void 0 !== e.hex
            ? this.setValueHex(e.hex)
            : void 0 !== e.name && this.setValueName(e.name));
    }),
    Y.lang.extend(X.asn1.DERObjectIdentifier, X.asn1.ASN1Object),
    (X.asn1.DEREnumerated = function (e) {
      X.asn1.DEREnumerated.superclass.constructor.call(this),
        (this.hT = "0a"),
        (this.setByBigInteger = function (e) {
          (this.hTLV = null),
            (this.isModified = !0),
            (this.hV = X.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e));
        }),
        (this.setByInteger = function (e) {
          var t = new E(String(e), 10);
          this.setByBigInteger(t);
        }),
        (this.setValueHex = function (e) {
          this.hV = e;
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        "undefined" != typeof e &&
          ("undefined" != typeof e.int
            ? this.setByInteger(e.int)
            : "number" == typeof e
            ? this.setByInteger(e)
            : "undefined" != typeof e.hex && this.setValueHex(e.hex));
    }),
    Y.lang.extend(X.asn1.DEREnumerated, X.asn1.ASN1Object),
    (X.asn1.DERUTF8String = function (e) {
      X.asn1.DERUTF8String.superclass.constructor.call(this, e),
        (this.hT = "0c");
    }),
    Y.lang.extend(X.asn1.DERUTF8String, X.asn1.DERAbstractString),
    (X.asn1.DERNumericString = function (e) {
      X.asn1.DERNumericString.superclass.constructor.call(this, e),
        (this.hT = "12");
    }),
    Y.lang.extend(X.asn1.DERNumericString, X.asn1.DERAbstractString),
    (X.asn1.DERPrintableString = function (e) {
      X.asn1.DERPrintableString.superclass.constructor.call(this, e),
        (this.hT = "13");
    }),
    Y.lang.extend(X.asn1.DERPrintableString, X.asn1.DERAbstractString),
    (X.asn1.DERTeletexString = function (e) {
      X.asn1.DERTeletexString.superclass.constructor.call(this, e),
        (this.hT = "14");
    }),
    Y.lang.extend(X.asn1.DERTeletexString, X.asn1.DERAbstractString),
    (X.asn1.DERIA5String = function (e) {
      X.asn1.DERIA5String.superclass.constructor.call(this, e),
        (this.hT = "16");
    }),
    Y.lang.extend(X.asn1.DERIA5String, X.asn1.DERAbstractString),
    (X.asn1.DERUTCTime = function (e) {
      X.asn1.DERUTCTime.superclass.constructor.call(this, e),
        (this.hT = "17"),
        (this.setByDate = function (e) {
          (this.hTLV = null),
            (this.isModified = !0),
            (this.date = e),
            (this.s = this.formatDate(this.date, "utc")),
            (this.hV = stohex(this.s));
        }),
        (this.getFreshValueHex = function () {
          return (
            "undefined" == typeof this.date &&
              "undefined" == typeof this.s &&
              ((this.date = new Date()),
              (this.s = this.formatDate(this.date, "utc")),
              (this.hV = stohex(this.s))),
            this.hV
          );
        }),
        void 0 !== e &&
          (void 0 !== e.str
            ? this.setString(e.str)
            : "string" == typeof e && e.match(/^[0-9]{12}Z$/)
            ? this.setString(e)
            : void 0 !== e.hex
            ? this.setStringHex(e.hex)
            : void 0 !== e.date && this.setByDate(e.date));
    }),
    Y.lang.extend(X.asn1.DERUTCTime, X.asn1.DERAbstractTime),
    (X.asn1.DERGeneralizedTime = function (e) {
      X.asn1.DERGeneralizedTime.superclass.constructor.call(this, e),
        (this.hT = "18"),
        (this.withMillis = !1),
        (this.setByDate = function (e) {
          (this.hTLV = null),
            (this.isModified = !0),
            (this.date = e),
            (this.s = this.formatDate(this.date, "gen", this.withMillis)),
            (this.hV = stohex(this.s));
        }),
        (this.getFreshValueHex = function () {
          return (
            void 0 === this.date &&
              void 0 === this.s &&
              ((this.date = new Date()),
              (this.s = this.formatDate(this.date, "gen", this.withMillis)),
              (this.hV = stohex(this.s))),
            this.hV
          );
        }),
        void 0 !== e &&
          (void 0 !== e.str
            ? this.setString(e.str)
            : "string" == typeof e && e.match(/^[0-9]{14}Z$/)
            ? this.setString(e)
            : void 0 !== e.hex
            ? this.setStringHex(e.hex)
            : void 0 !== e.date && this.setByDate(e.date),
          !0 === e.millis && (this.withMillis = !0));
    }),
    Y.lang.extend(X.asn1.DERGeneralizedTime, X.asn1.DERAbstractTime),
    (X.asn1.DERSequence = function (e) {
      X.asn1.DERSequence.superclass.constructor.call(this, e),
        (this.hT = "30"),
        (this.getFreshValueHex = function () {
          for (var e = "", t = 0; t < this.asn1Array.length; t++)
            e += this.asn1Array[t].getEncodedHex();
          return (this.hV = e), this.hV;
        });
    }),
    Y.lang.extend(X.asn1.DERSequence, X.asn1.DERAbstractStructured),
    (X.asn1.DERSet = function (e) {
      X.asn1.DERSet.superclass.constructor.call(this, e),
        (this.hT = "31"),
        (this.sortFlag = !0),
        (this.getFreshValueHex = function () {
          for (var e = new Array(), t = 0; t < this.asn1Array.length; t++) {
            var n = this.asn1Array[t];
            e.push(n.getEncodedHex());
          }
          return (
            1 == this.sortFlag && e.sort(), (this.hV = e.join("")), this.hV
          );
        }),
        "undefined" != typeof e &&
          "undefined" != typeof e.sortflag &&
          0 == e.sortflag &&
          (this.sortFlag = !1);
    }),
    Y.lang.extend(X.asn1.DERSet, X.asn1.DERAbstractStructured),
    (X.asn1.DERTaggedObject = function (e) {
      X.asn1.DERTaggedObject.superclass.constructor.call(this),
        (this.hT = "a0"),
        (this.hV = ""),
        (this.isExplicit = !0),
        (this.asn1Object = null),
        (this.setASN1Object = function (e, t, n) {
          (this.hT = t),
            (this.isExplicit = e),
            (this.asn1Object = n),
            this.isExplicit
              ? ((this.hV = this.asn1Object.getEncodedHex()),
                (this.hTLV = null),
                (this.isModified = !0))
              : ((this.hV = null),
                (this.hTLV = n.getEncodedHex()),
                (this.hTLV = this.hTLV.replace(/^../, t)),
                (this.isModified = !1));
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        "undefined" != typeof e &&
          ("undefined" != typeof e.tag && (this.hT = e.tag),
          "undefined" != typeof e.explicit && (this.isExplicit = e.explicit),
          "undefined" != typeof e.obj &&
            ((this.asn1Object = e.obj),
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
    }),
    Y.lang.extend(X.asn1.DERTaggedObject, X.asn1.ASN1Object);
  var Z = (function (e) {
      function t(n) {
        var r = e.call(this) || this;
        return (
          n &&
            ("string" === typeof n
              ? r.parseKey(n)
              : (t.hasPrivateKeyProperty(n) || t.hasPublicKeyProperty(n)) &&
                r.parsePropertiesFrom(n)),
          r
        );
      }

      return (
        (function (e, t) {
          function n() {
            this.constructor = e;
          }

          p(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        })(t, e),
        (t.prototype.parseKey = function (e) {
          try {
            var t = 0,
              n = 0,
              r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(e)
                ? h(e)
                : g.unarmor(e),
              o = _.decode(r);
            if (
              (3 === o.sub.length && (o = o.sub[2].sub[0]), 9 === o.sub.length)
            ) {
              (t = o.sub[1].getHexStringValue()),
                (this.n = P(t, 16)),
                (n = o.sub[2].getHexStringValue()),
                (this.e = parseInt(n, 16));
              var i = o.sub[3].getHexStringValue();
              this.d = P(i, 16);
              var a = o.sub[4].getHexStringValue();
              this.p = P(a, 16);
              var s = o.sub[5].getHexStringValue();
              this.q = P(s, 16);
              var u = o.sub[6].getHexStringValue();
              this.dmp1 = P(u, 16);
              var c = o.sub[7].getHexStringValue();
              this.dmq1 = P(c, 16);
              var l = o.sub[8].getHexStringValue();
              this.coeff = P(l, 16);
            } else {
              if (2 !== o.sub.length) return !1;
              var f = o.sub[1].sub[0];
              (t = f.sub[0].getHexStringValue()),
                (this.n = P(t, 16)),
                (n = f.sub[1].getHexStringValue()),
                (this.e = parseInt(n, 16));
            }
            return !0;
          } catch (d) {
            return !1;
          }
        }),
        (t.prototype.getPrivateBaseKey = function () {
          var e = {
            array: [
              new X.asn1.DERInteger({ int: 0 }),
              new X.asn1.DERInteger({ bigint: this.n }),
              new X.asn1.DERInteger({ int: this.e }),
              new X.asn1.DERInteger({ bigint: this.d }),
              new X.asn1.DERInteger({ bigint: this.p }),
              new X.asn1.DERInteger({ bigint: this.q }),
              new X.asn1.DERInteger({ bigint: this.dmp1 }),
              new X.asn1.DERInteger({ bigint: this.dmq1 }),
              new X.asn1.DERInteger({ bigint: this.coeff }),
            ],
          };
          return new X.asn1.DERSequence(e).getEncodedHex();
        }),
        (t.prototype.getPrivateBaseKeyB64 = function () {
          return c(this.getPrivateBaseKey());
        }),
        (t.prototype.getPublicBaseKey = function () {
          var e = new X.asn1.DERSequence({
              array: [
                new X.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
                new X.asn1.DERNull(),
              ],
            }),
            t = new X.asn1.DERSequence({
              array: [
                new X.asn1.DERInteger({ bigint: this.n }),
                new X.asn1.DERInteger({ int: this.e }),
              ],
            }),
            n = new X.asn1.DERBitString({ hex: "00" + t.getEncodedHex() });
          return new X.asn1.DERSequence({ array: [e, n] }).getEncodedHex();
        }),
        (t.prototype.getPublicBaseKeyB64 = function () {
          return c(this.getPublicBaseKey());
        }),
        (t.wordwrap = function (e, t) {
          if (!e) return e;
          var n = "(.{1," + (t = t || 64) + "})( +|$\n?)|(.{1," + t + "})";
          return e.match(RegExp(n, "g")).join("\n");
        }),
        (t.prototype.getPrivateKey = function () {
          var e = "-----BEGIN RSA PRIVATE KEY-----\n";
          return (
            (e += t.wordwrap(this.getPrivateBaseKeyB64()) + "\n"),
            (e += "-----END RSA PRIVATE KEY-----")
          );
        }),
        (t.prototype.getPublicKey = function () {
          var e = "-----BEGIN PUBLIC KEY-----\n";
          return (
            (e += t.wordwrap(this.getPublicBaseKeyB64()) + "\n"),
            (e += "-----END PUBLIC KEY-----")
          );
        }),
        (t.hasPublicKeyProperty = function (e) {
          return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e");
        }),
        (t.hasPrivateKeyProperty = function (e) {
          return (
            (e = e || {}).hasOwnProperty("n") &&
            e.hasOwnProperty("e") &&
            e.hasOwnProperty("d") &&
            e.hasOwnProperty("p") &&
            e.hasOwnProperty("q") &&
            e.hasOwnProperty("dmp1") &&
            e.hasOwnProperty("dmq1") &&
            e.hasOwnProperty("coeff")
          );
        }),
        (t.prototype.parsePropertiesFrom = function (e) {
          (this.n = e.n),
            (this.e = e.e),
            e.hasOwnProperty("d") &&
              ((this.d = e.d),
              (this.p = e.p),
              (this.q = e.q),
              (this.dmp1 = e.dmp1),
              (this.dmq1 = e.dmq1),
              (this.coeff = e.coeff));
        }),
        t
      );
    })(J),
    ee = (function () {
      function e(e) {
        (e = e || {}),
          (this.default_key_size = parseInt(e.default_key_size, 10) || 1024),
          (this.default_public_exponent =
            e.default_public_exponent || "010001"),
          (this.log = e.log || !1),
          (this.key = null);
      }

      return (
        (e.prototype.setKey = function (e) {
          this.log &&
            this.key &&
            console.warn("A key was already set, overriding existing."),
            (this.key = new Z(e));
        }),
        (e.prototype.setPrivateKey = function (e) {
          this.setKey(e);
        }),
        (e.prototype.setPublicKey = function (e) {
          this.setKey(e);
        }),
        (e.prototype.decrypt = function (e) {
          try {
            return this.getKey().decrypt(l(e));
          } catch (t) {
            return !1;
          }
        }),
        (e.prototype.encrypt = function (e) {
          try {
            return c(this.getKey().encrypt(e));
          } catch (t) {
            return !1;
          }
        }),
        (e.prototype.sign = function (e, t, n) {
          try {
            return c(this.getKey().sign(e, t, n));
          } catch (r) {
            return !1;
          }
        }),
        (e.prototype.verify = function (e, t, n) {
          try {
            return this.getKey().verify(e, l(t), n);
          } catch (r) {
            return !1;
          }
        }),
        (e.prototype.getKeyOfCookie = function (e) {
          if (!this.key) {
            if (
              ((this.key = new Z()),
              e && "[object Function]" === {}.toString.call(e))
            )
              return void this.key.generateAsync(
                this.default_key_size,
                this.default_public_exponent,
                e
              );
            this.key.generate(
              this.default_key_size,
              this.default_public_exponent
            );
          }
          return this.key;
        }),
        (e.prototype.getPrivateKey = function () {
          return this.getKey().getPrivateKey();
        }),
        (e.prototype.getPrivateKeyB64 = function () {
          return this.getKey().getPrivateBaseKeyB64();
        }),
        (e.prototype.getPublicKey = function () {
          return this.getKey().getPublicKey();
        }),
        (e.prototype.getPublicKeyB64 = function () {
          return this.getKey().getPublicBaseKeyB64();
        }),
        (e.version = "3.0.0-rc.1"),
        e
      );
    })();

  (window.JSEncrypt = ee),
    (e.JSEncrypt = ee),
    (e.default = ee),
    Object.defineProperty(e, "__esModule", { value: !0 });
}


const hackEncryptPassword = e => {
  var k = {};
  xxx(k);
  var t = new k.default;
  var publickKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDOJ3pYE2cYqdHAnQhd0akAQ6tKiepF6ZCXnYix8HyZJapWm5aeJRmXpWPaH2l+tZzgwOELJLu0BYk6eefWpd79Zm63+cSRdRqhgSv3/Anh4XVjBBewc26KUKMq5MWnEVCyjEDZSzUvCnDiVOl+Uid9tRRr1ZrBMKsXwSgjvge0NwIDAQAB"
  // var e = "Fl123456..."
  t.setPublicKey(publickKey)
  return  t.encrypt(e)
}


module.exports = hackEncryptPassword

if(require.main === module){
  console.log(hackEncryptPassword("Fl123456..."));
  console.log("finished");
}
