module.exports = function (e, t, n) {
  "use strict";
  (function (e, t) {
    var r,
      o,
      i =
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
      a = n(2),
      s = [
        "WO/cHHiaFW==",
        "su3cU8omW6q=",
        "q0FcMmoz",
        "WPNdQqvvWRRcMKaVha==",
        "mmo5B0mJFJ3dHmoFFW==",
        "W5HbWPxdJ0m=",
        "pCosaCoMAN4=",
        "WRD+WRLmW7e=",
        "WQnHr3Dzvq==",
        "CZ5la8kvu8kC",
        "cwm7W7hcNu/cImkM",
        "WOLnx31C",
        "puKzW5BcIG==",
        "WQz4WRfIW7m=",
        "cCkixrjrwMNdHSo2",
        "WPddTWy=",
        "Dr3dRZeXfwfDbG==",
        "W4NdGCoMW4u=",
        "k3ZcSGZcJKVdPSoNCmoOr8oWWQ8+WRKk",
        "W6ldUmkXuJ0=",
        "BSoUdrtdUW==",
        "E8o5cXhdGq==",
        "WOldS27dVt4=",
        "WPBdGSkNmCkM",
        "WR5NB8kRWQS=",
        "iumnW7hcO2NcRG==",
        "WPFdTHtdPq==",
        "rWzxk0GhzYG=",
        "pCohW5iDW6W=",
        "WORcKtCPCfZcNgpdJq==",
        "hKO5W7FcMa==",
        "W7hdJYzFW5C=",
        "W78vWOj2WPBcJCk9",
        "DCoQhCoMaSkkkmo9",
        "WOZdKc53WOq=",
        "W4hdHWLO",
        "WOxdQvtdMhhdSqLcWRO=",
        "yCoKhCo4iq==",
        "ufhcQSoNW6ldP3BdGIj6WRBdH3NdPq==",
        "WO0BrG==",
        "W5hdUCkkyJ8=",
        "d8oDWOCCW54=",
        "W68AWPL8WPtcLCkXqCk1",
        "wLZcGSof",
        "tKBcKSoyW41gk8oYW6RcS8oJFWyqza==",
        "WPidcwZdGq==",
        "W4SdWPunAq==",
        "WRBdGmo8WPxdKG==",
        "ECoKemo3a8kka8o/W4pdSG4=",
        "WPNdVb7dUYVdMa==",
        "cCkdrHTj",
        "t8kYW5z2fWHy",
        "lmo3WOSBW78=",
        "WOxdUbpdTXe=",
        "WOageSohW5hcT8on",
        "WRiLvSkAbG==",
        "eSoxWQ5mWQm=",
        "DCk5FmoaB0BdOxBdHq==",
        "B8o1pG/dTW==",
        "WO7dRWztWQJcMG==",
        "mCo4W6ePW4rcxSk6W40=",
        "W5WnWRexFCoL",
        "WP3dQexdJNldVaHqWRa=",
        "Amo/dXldHa==",
        "lCosb8oG",
      ];
    (r = s),
      (o = 266),
      (function (e) {
        for (; --e; ) r.push(r.shift());
      })(++o);
    var u = function e(t, n) {
        var r = s[(t -= 0)];
        void 0 === e.DaotbI &&
          ((e.bPBPDY = function (e, t) {
            for (
              var n = [],
                r = 0,
                o = void 0,
                i = "",
                a = "",
                s = 0,
                u = (e = (function (e) {
                  for (
                    var t,
                      n,
                      r = String(e).replace(/=+$/, ""),
                      o = "",
                      i = 0,
                      a = 0;
                    (n = r.charAt(a++));
                    ~n && ((t = i % 4 ? 64 * t + n : n), i++ % 4)
                      ? (o += String.fromCharCode(255 & (t >> ((-2 * i) & 6))))
                      : 0
                  )
                    n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
                      n
                    );
                  return o;
                })(e)).length;
              s < u;
              s++
            )
              a += "%" + ("00" + e.charCodeAt(s).toString(16)).slice(-2);
            e = decodeURIComponent(a);
            var c = void 0;
            for (c = 0; c < 256; c++) n[c] = c;
            for (c = 0; c < 256; c++)
              (r = (r + n[c] + t.charCodeAt(c % t.length)) % 256),
                (o = n[c]),
                (n[c] = n[r]),
                (n[r] = o);
            (c = 0), (r = 0);
            for (var d = 0; d < e.length; d++)
              (r = (r + n[(c = (c + 1) % 256)]) % 256),
                (o = n[c]),
                (n[c] = n[r]),
                (n[r] = o),
                (i += String.fromCharCode(
                  e.charCodeAt(d) ^ n[(n[c] + n[r]) % 256]
                ));
            return i;
          }),
          (e.LtGUlx = {}),
          (e.DaotbI = !0));
        var o = e.LtGUlx[t];
        return (
          void 0 === o
            ? (void 0 === e.XOiSfQ && (e.XOiSfQ = !0),
              (r = e.bPBPDY(r, n)),
              (e.LtGUlx[t] = r))
            : (r = o),
          r
        );
      },
      c = u,
      shift = "shift",
      now = "now",
      handleEvent = "handleEvent",
      addEventListener = "addEventListener",
      document = "document",
      timestamp = "timestamp",
      clientY = "clientY",
      clientX = "clientX",
      elementId = "elementId",
      length = "length",
      concat = "concat",
      forEach = "forEach",
      push = "push",
      data = "data",
      k = 0,
      S = void 0,
      O = void 0,
      C = {
        init: function () {
          C[data] = [];
        },
        handleEvent: function () {
          var r = {},
            o =
              S[document]["documentElement"]["scrollTop"] ||
              S[document]["body"]["scrollTop"];
          o > 0 &&
            ((r["scrollTop"] = o),
            (r[timestamp] = O[now]() - k),
            C[data][push](r)),
            C[data][length] > 3 && C[data][shift]();
        },
        packN: function () {
          // if (!C[data][length]) return [];
          // todo: hack C
          console.log("packing func19 C");

          C.data = [
            require("../utils/dataPack"),
            require("../utils/dataPack"),
            require("../utils/dataPack"),
          ];

          var e = [][concat](a.ek(3, C[data]));
          return (
            C[data][forEach](function (t) {
              var n = u;
              e = e[concat](a.va(t["scrollTop"]), a.va(t[timestamp]));
            }),
            e
          );
        },
      },
      R = {
        init: function () {
          R[data] = [];
        },
        handleEvent: function (e) {
          var o = e || S["event"],
            i = o.target.id || "",
            a = {
              elementId: i,
              clientX: o.clientX,
              clientY: o.clientY,
              timestamp: new Date() - k,
            };
          R[data][push](a);
          R[data][length] > 3 && R[data][shift]();
        },
        packN: function () {
          // if (!R[data][length]) return [];
          console.log("packing func19 R");
          R.data = [
            require("../utils/dataPack"),
            require("../utils/dataPack"),
            require("../utils/dataPack"),
          ];

          var e = [][concat](a.ek(2, R[data]));
          return (
            R[data][forEach](function (t) {
              e = e[concat](
                a.va(t[clientX]),
                a.va(t[clientY]),
                a.va(t[timestamp]),
                a.va(t[elementId][length]),
                a.sc(t[elementId])
              );
            }),
            e
          );
        },
      },
      E = function () {};
    e["env"]["NODE_ENV"] &&
      (E = function (e) {
        var t = c,
          n = {};
        (n["lxaza"] = "scroll"), (n["vtWFc"] = "mousedown");
        var r = n;
        switch (e.type) {
          case r["lxaza"]:
            C[handleEvent](e);
            break;
          case r["vtWFc"]:
            R[handleEvent](e);
        }
      });
    var P = {};
    (P["init"] = function (e, t) {
      var n = c,
        r = {};
      (r["lMtUk"] = function (e, t) {
        return e !== t;
      }),
        (r["YfFCZ"] = "undefined");
      var o = r;
      (k = e),
        o["lMtUk"](void 0 === t ? "undefined" : i(t), o["YfFCZ"]) &&
          (O = (S = t)["Date"]);
    }),
      (P["initInfo"] = function () {
        var e = c,
          t = {};
        t["aPFGM"] = "init";
        var n = t;
        [C, R][forEach](function (t) {
          t[n["aPFGM"]]();
        });
      }),
      (P["initEvent"] = function () {
        // S &&
        //   (S[document][addEventListener]("mousedown", R, !0),
        //   S[document][addEventListener]("scroll", C, !0));
      }),
      (P["clearCache"] = function () {
        [C, R][forEach](function (e) {
          e[data] = [];
        });
      }),
      (P["packN"] = function () {
        var e = c;
        return [][concat](C["packN"](), R["packN"]());
      }),
      (P["swallow"] = E),
      (P["MouseDownEvent"] = R);
    var N = P;
    t["exports"] = N;
  }.call(this, n(3), n(0)(e)));
};
