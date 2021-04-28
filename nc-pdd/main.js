var jEcw = function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0,
  }),
    (t.riskEnhance = function (e, t) {
      var r = this,
        o = this.context.tap("auth");
      (t = t || this.getInternal("adapter")),
        (p = this.set("loginRedirectUrl"));
      var a = e.headers && void 0 !== e.headers["Anti-Content"];
      if (this.context.isClient && !a) {
        var s = this.context.set("endpoints"),
          u = (0, i.get)(s, "site.apis.getServerTime");
        return d(u && u.bind(this)).then(function (a) {
          return a.messagePackSync().then(function (a) {
            if (
              (void 0 === a && (a = "getRisckInfoError"),
              r.context.set("isLocal") && (e.withCredentials = !0),
              e.userInfo)
            ) {
              var i = (0, n.__assign)({}, e);
              return delete i.userInfo, v(e.userInfo, a, i, t);
            }
            return o
              .getUserInfo({
                headers: {
                  "Anti-Content": a,
                },
              })
              .then(function (r) {
                return v(r, a, e, t);
              });
          });
        });
      }
      return a
        ? (!1 === e.headers["Anti-Content"] && delete e.headers["Anti-Content"],
          (0, c.default)(e, t))
        : Promise.reject(
            new Error(
              "Request Error: Http rquest expected Anti-Content while not declare"
            )
          );
    });
  var n = r("mrSG"),
    o = s(r("xTJ+")),
    a = s(r("fbeZ")),
    i = r("LvDl"),
    c = s(r("gmvi"));
  function s(e) {
    return e && e.__esModule
      ? e
      : {
          default: e,
        };
  }
  function u(e) {
    return (u =
      "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" === typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  var l = {
    serverTime: new Date().getTime(),
    touchEventData: !0,
    clickEventData: !0,
    focusblurEventData: !0,
    changeEventData: !0,
    locationInfo: !0,
    referrer: !0,
    browserSize: !0,
    browserInfo: !0,
    token: !0,
    fingerprint: !0,
  };
  function d(e) {
    var t = d.defaults,
      r = t.serverTime,
      n = t.localTime,
      o = t.promise,
      i = t.anti;
    return r && n && i
      ? (i.updateServerTime(+new Date().getTime() + r - n),
        (t.promise = Promise.resolve(i)))
      : o ||
          (e
            ? (t.promise = e().then(function (e) {
                l.serverTime = e.server_time;
                var r = new a.default(l);
                return (
                  Object.assign(t, {
                    serverTime: e.server_time,
                    localTime: +new Date().getTime(),
                    anti: r,
                    promise: null,
                  }),
                  r
                );
              }))
            : Promise.reject(
                new Error(
                  "Invalid Option: risk anti has to input a serverTime."
                )
              ));
  }
  d.defaults = {
    serverTime: l.serverTime,
    localTime: 0,
    promise: null,
    anti: null,
  };
  var p = "";
  function f(e) {
    var t = d.defaults,
      r = t.serverTime,
      n = t.localTime;
    t.anti.updateServerTime(+new Date().getTime() + r - n),
      e.response &&
        429 === e.response.status &&
        e.response.data.indexOf("40001") > 0 &&
        p &&
        void 0 !== ("undefined" === typeof window ? "undefined" : u(window)) &&
        (window.parent.location.href = p);
  }
  var h = function (e, t, r) {
    "function" === typeof r
      ? (e[t] = r(e[t]))
      : e[t]
      ? Object.assign(e[t], r)
      : (e[t] = r);
  };
  function v(e, t, r, n) {
    h(r, "headers", {
      "Anti-Content": t,
    });
    var a,
      i = {
        crawlerInfo: t,
        mallId: e.mall_id,
      };
    ["delete", "get", "head", "options"].indexOf(r.method.toLowerCase()) > -1 ||
    o.default.isFormData(r.data) ||
    o.default.isArrayBuffer(r.data) ||
    o.default.isBuffer(r.data) ||
    o.default.isStream(r.data) ||
    o.default.isFile(r.data) ||
    o.default.isBlob(r.data) ||
    ("undefined" !== typeof ArrayBuffer && r.data instanceof ArrayBuffer)
      ? h(r, "params", i)
      : (a = r.headers) &&
        0 === a["Content-Type"].indexOf("application/x-www-form-urlencoded")
      ? h(r, "data", function (e) {
          var r = "crawlerInfo=" + i.crawlerInfo + "&mallId=" + t.mallId;
          return e ? r + "&" + e : r;
        })
      : !(function (e) {
          return e && 0 === e["Content-Type"].indexOf("application/json");
        })(r.headers)
      ? h(r, "params", i)
      : h(r, "data", function (e) {
          var t = JSON.stringify(i);
          return e && "{}" !== e
            ? e.replace("{", "{" + t.slice(1, -1) + ",")
            : t;
        });
    var s = (0, c.default)(r, n);
    return s.then(f, f).catch(f), s;
  }
};

var e = {
  i: "jEcw",
  l: false,
  exports: {},
};
var t = {};

var n = {},
  c = {
    0: 0,
  },
  a = {
    0: 0,
  },
  o = [];

var r = function f(t) {
  if (n[t]) return n[t].exports;
  var r = (n[t] = {
      i: t,
      l: !1,
      exports: {},
    }),
    c = !0;
  try {
    e[t].call(r.exports, r, r.exports, f), (c = !1);
  } finally {
    c && delete n[t];
  }
  return (r.l = !0), r.exports;
};

jEcw(e, t, r);
