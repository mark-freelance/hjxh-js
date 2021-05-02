/*! For license information please see main.2f4d9276.chunk.v20210407195834_b9df400d.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    203: function (e, n, t) {
      "use strict";
      var r,
        o = t(106),
        i = t(0),
        a = t.n(i),
        c = t(622),
        u = t(621),
        l = t(620),
        s = t(24),
        d = t(104),
        f = t(206),
        p = function (e, n) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: n })
              : (e.raw = n),
            e
          );
        },
        m = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (n) {
                i(n);
              }
            }

            function c(e) {
              try {
                u(r.throw(e));
              } catch (n) {
                i(n);
              }
            }

            function u(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, c);
            }

            u((r = r.apply(e, n || [])).next());
          });
        },
        w = function (e, n) {
          var t,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = {
              next: c(0),
              throw: c(1),
              return: c(2),
            }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );

          function c(i) {
            return function (c) {
              return (function (i) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = n.call(e, a);
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    t = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
        h = function (e, n) {
          var t = "function" === typeof Symbol && e[Symbol.iterator];
          if (!t) return e;
          var r,
            o,
            i = t.call(e),
            a = [];
          try {
            for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (c) {
            o = { error: c };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        v = function (e) {
          var n = e.phone,
            t = e.onOk,
            r = h(a.a.useState(""), 2),
            i = r[0],
            c = r[1],
            f = h(a.a.useState(""), 2),
            p = f[0],
            v = f[1],
            b = h(a.a.useState(0), 2),
            y = b[0],
            E = b[1],
            x = a.a.useRef(-1),
            _ = function (e) {
              v(
                e
                  ? ""
                  : "\u77ed\u4fe1\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a"
              );
            },
            S = function (e) {
              60 === e && clearTimeout(x.current),
                e < 0 ||
                  (E(e),
                  (x.current = setTimeout(function () {
                    S(e - 1);
                  }, 1e3)));
            };
          return a.a.createElement(
            g,
            null,
            a.a.createElement(
              "div",
              { className: "title" },
              "\u8bf7\u9a8c\u8bc1\u624b\u673a\u53f7\u540e\u7ee7\u7eed\u767b\u5f55"
            ),
            a.a.createElement(l.a, {
              disabled: !0,
              value: n,
              prefix: a.a.createElement(s.a, {
                type: "phone",
                style: { fontSize: 12, color: "rgba(0,0,0,0.4)" },
              }),
              marginTop: 16,
            }),
            a.a.createElement(
              "div",
              { className: "msg-input" },
              a.a.createElement(l.a, {
                placeholder: "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
                value: i,
                onChange: function (e) {
                  c(e), _(e);
                },
                prefix: a.a.createElement(s.a, {
                  type: "certificated_filled",
                  style: { fontSize: 12, color: "rgba(0,0,0,0.4)" },
                }),
                marginTop: 16,
                suffixDivide: !0,
                suffix: a.a.createElement(
                  d.a,
                  {
                    type: "textPrimary",
                    onClick: function () {
                      return m(void 0, void 0, void 0, function () {
                        var e;
                        return w(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (
                                n.trys.push([0, 2, , 3]),
                                [
                                  4,
                                  Object(
                                    o.b
                                  )("/janus/api/mobile/sendVerificationCode", {
                                    type: 117,
                                  }),
                                ]
                              );
                            case 1:
                              return n.sent(), S(60), [3, 3];
                            case 2:
                              return (
                                (e = n.sent()),
                                u.a.warn(
                                  (e && e.errorMsg) ||
                                    "\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25"
                                ),
                                [3, 3]
                              );
                            case 3:
                              return [2];
                          }
                        });
                      });
                    },
                    disabled: y > 0,
                    width: 65,
                    size: "small",
                  },
                  a.a.createElement(
                    "span",
                    {
                      style: {
                        textAlign: "center",
                        display: "inline-block",
                        width: "100%",
                      },
                    },
                    y > 0
                      ? "\u8fd8\u5269" + y + "\u79d2"
                      : "\u83b7\u53d6\u9a8c\u8bc1\u7801"
                  )
                ),
              }),
              !!p &&
                a.a.createElement("div", { className: "msg-input-error" }, p)
            ),
            a.a.createElement(
              "div",
              { className: "footer-btn" },
              a.a.createElement(
                d.a,
                {
                  size: "small",
                  type: "textPrimary",
                  href: "/mallcenter/changeAccountInfo/forgetMobile?type=3",
                  target: "_blank",
                },
                "\u65e0\u6cd5\u63a5\u6536\u5230\u9a8c\u8bc1\u7801\uff1f"
              ),
              a.a.createElement(
                d.a,
                {
                  width: 80,
                  onClick: function () {
                    _(i), i && "function" === typeof t && t(i);
                  },
                },
                "\u786e\u8ba4"
              )
            )
          );
        },
        b = function (e, n) {
          c.a.alert({
            showCloseIcon: !0,
            width: 184,
            content: a.a.createElement(v, { phone: e, onOk: n }),
            footer: null,
          });
        },
        g = f.a.div(
          r ||
            (r = p(
              [
                "\n  .title {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.6);\n  }\n  .msg-input {\n    padding-bottom: 20px;\n    position: relative;\n    .msg-input-error {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      font-size: 12px;\n      color: rgba(255, 84, 84, 1);\n    }\n  }\n\n  .footer-btn {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 30px;\n  }\n",
              ],
              [
                "\n  .title {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.6);\n  }\n  .msg-input {\n    padding-bottom: 20px;\n    position: relative;\n    .msg-input-error {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      font-size: 12px;\n      color: rgba(255, 84, 84, 1);\n    }\n  }\n\n  .footer-btn {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 30px;\n  }\n",
              ]
            ))
        ),
        y = (t(197), t(278)),
        E = t.n(y),
        x = t(61),
        _ = t.n(x),
        S = t(130),
        I = t(201),
        O = t.n(I);
      t.d(n, "f", function () {
        return N;
      }),
        t.d(n, "c", function () {
          return A;
        }),
        t.d(n, "g", function () {
          return j;
        }),
        t.d(n, "d", function () {
          return U;
        }),
        t.d(n, "j", function () {
          return P;
        }),
        t.d(n, "b", function () {
          return R;
        }),
        t.d(n, "o", function () {
          return M;
        }),
        t.d(n, "e", function () {
          return D;
        }),
        t.d(n, "k", function () {
          return W;
        }),
        t.d(n, "l", function () {
          return G;
        }),
        t.d(n, "a", function () {
          return H;
        }),
        t.d(n, "h", function () {
          return L;
        }),
        t.d(n, "n", function () {
          return J;
        }),
        t.d(n, "m", function () {
          return V;
        }),
        t.d(n, "q", function () {
          return Y;
        }),
        t.d(n, "p", function () {
          return $;
        }),
        t.d(n, "i", function () {
          return q;
        });
      var T = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (n) {
                i(n);
              }
            }

            function c(e) {
              try {
                u(r.throw(e));
              } catch (n) {
                i(n);
              }
            }

            function u(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, c);
            }

            u((r = r.apply(e, n || [])).next());
          });
        },
        k = function (e, n) {
          var t,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = {
              next: c(0),
              throw: c(1),
              return: c(2),
            }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );

          function c(i) {
            return function (c) {
              return (function (i) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = n.call(e, a);
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    t = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
        C = t.e(1).then(t.bind(null, 1057)),
        N = function () {
          return Object(o.a)("/janus/api/queryPasswordEncrypt", {}).then(
            function (e) {
              var n = e || {};
              return {
                passwordEncrypt: n.passwordEncrypt,
                publicKey: n.publicKey,
              };
            },
            function () {
              return { passwordEncrypt: !1, publicKey: "" };
            }
          );
        },
        A = function (e) {
          return (
            (e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0])
              .split(":")[0]
              .split("?")[0] || location.host
          );
        },
        j = function (e, n) {
          return C.then(function (t) {
            return (0, t.signLoginParams)(e, n);
          });
        },
        U = function (e, n, t, r, i) {
          return Object(o.b)("/janus/api/subSystem/generateAccessToken", {
            redirectUrl: e,
            mobileVerifyCode: t,
          })
            .then(function (e) {
              var n;
              r(null === (n = e) || void 0 === n ? void 0 : n.accessToken);
            })
            .catch(function (t) {
              return T(void 0, void 0, void 0, function () {
                return k(this, function (o) {
                  return (
                    t && 8000058 === t.errorCode
                      ? b(n, function (t) {
                          U(e, n, t, r, i);
                        })
                      : i && i(t),
                    [2]
                  );
                });
              });
            });
        },
        P = function (e) {
          return (
            e &&
            (function (e) {
              var n = new RegExp("(javascript)", "i");
              return e && !n.test(e);
            })(e) &&
            (function (e) {
              return !(
                window.location.host.indexOf("mms.pinduoduo.com") > -1 &&
                e &&
                /^(https?\:)?\/\/.+/i.test(e) &&
                !/^(https?\:)?\/\/([a-zA-Z0-9]+)\.pinduoduo\.com(\/.*)?$/i.test(
                  e
                )
              );
            })(e)
          );
        },
        R = function (e, n) {
          if (n.passwordEncrypt)
            try {
              var t = new E.a();
              return t.setPublicKey(n.publicKey), t.encrypt(e);
            } catch (r) {
              M(new Error("encrypt error"));
            }
          return e;
        },
        M = function (e) {
          var n = window.__PDD_SENTRY__;
          n ? n.captureException(e) : console.error(e);
        },
        D = function () {
          try {
            var e = window.navigator.mimeTypes.length
                ? O()(
                    Array.from(window.navigator.mimeTypes)
                      .map(function (e) {
                        return e.type;
                      })
                      .join(",")
                  )
                : -1,
              n = window.navigator.plugins.length
                ? O()(
                    Array.from(window.navigator.plugins)
                      .map(function (e) {
                        return e.name;
                      })
                      .join(",")
                  )
                : -1;
            return {
              innerHeight: window.innerHeight,
              innerWidth: window.innerWidth,
              devicePixelRatio: window.devicePixelRatio,
              availHeight: window.screen.availHeight,
              availWidth: window.screen.availWidth,
              height: window.screen.height,
              width: window.screen.width,
              colorDepth: window.screen.colorDepth,
              locationHref: window.location.href,
              clientWidth: document.body.clientWidth,
              clientHeight: document.body.clientHeight,
              offsetWidth: document.body.offsetWidth,
              offsetHeight: document.body.offsetHeight,
              scrollWidth: document.body.scrollWidth,
              scrollHeight: document.body.scrollHeight,
              navigator: {
                appCodeName: window.navigator.appCodeName,
                appName: window.navigator.appName,
                hardwareConcurrency: window.navigator.hardwareConcurrency,
                language: window.navigator.language,
                cookieEnabled: window.navigator.cookieEnabled,
                platform: window.navigator.platform,
                doNotTrack: window.navigator.doNotTrack,
                ua: window.navigator.userAgent,
                vendor: window.navigator.vendor,
                product: window.navigator.product,
                productSub: window.navigator.productSub,
                mimeTypes: e,
                plugins: n,
              },
              referer: window.document.referrer,
              timezoneOffset: new Date().getTimezoneOffset(),
            };
          } catch (t) {}
        },
        W = function () {
          var e = _.a.parse(window.location.search);
          if (!P(e.redirectUrl))
            return u.a.warn("\u975e\u6cd5\u7684 redirectUrl");
          S.b.open(e.redirectUrl || "");
        },
        G = function (e) {
          void 0 === e && (e = window.location.search);
          var n = _.a.parse(e),
            t = n.redirectUrl || n.redirect;
          if (!P(t)) return u.a.warn("\u975e\u6cd5\u7684 redirectUrl");
          if (t.includes("/clint")) {
            var r = t.indexOf("?redirect");
            G(t.substr(r));
          } else location.href = t;
        };
      var H = {
          DIDMOUNT_ENUM: "DIDMOUNT_ENUM",
          AFTERLOGIN_ENUM: "AFTERLOGIN_ENUM",
          GET_RISKCONTROL_FP: "GET_RISKCONTROL_FP",
        },
        L =
          window.ipcRenderer &&
          "live_obs_electron" === window.LIVE_OBS_ELECTRON;
      var z,
        J = function () {
          if (-1 !== window.location.host.indexOf("mc.pinduoduo.com")) {
            var e = void 0;
            (e = (function (e, n) {
              var t = n.split("?")[0],
                r = [],
                o = -1 !== n.indexOf("?") ? n.split("?")[1] : "";
              if ("" !== o) {
                for (var i = (r = o.split("&")).length - 1; i >= 0; i -= 1)
                  r[i].split("=")[0] === e && r.splice(i, 1);
                0 !== r.length && (t = t + "?" + r.join("&"));
              }
              return t;
            })(
              "redirectUrl",
              (e = window.location.href.replace(
                "mc.pinduoduo.com",
                "mms.pinduoduo.com"
              ))
            )),
              (window.location.href = e);
          }
        },
        K = {
          htj: "//mc.htj.pdd.net/ddmc-mms/mc-login",
          prod: "//mc.pinduoduo.com/ddmc-mms/mc-login",
        },
        B = {
          pc: {
            htj: "https://mc.htj.pdd.net/ddmc-mms/",
            prod: "https://mc.pinduoduo.com/ddmc-mms/",
          },
          host: ["mc.htj.pdd.net", "mc.pinduoduo.com"],
          mobile: {
            htj: "//testing.hutaojie.com/mobile-grocer-supply/home.html",
            prod: "//mai.pinduoduo.com/mobile-grocer-supply/home.html",
          },
        },
        F = { host: ["mms.htj.pdd.net", "mms.pinduoduo.com"] },
        V = function (e) {
          var n = K.prod,
            t = B.pc.prod,
            r = _.a.parse(window.location.search || "");
          r.ticket = e;
          var o = r.redirectUrl;
          ((!o ||
            B.host.includes(A(o)) ||
            [
              "fuwu.pinduoduo.com",
              "fuwu.htj.pdd.net",
              "open.pinduoduo.com",
              "open.htj.pdd.net",
            ].includes(A(o))) &&
            o) ||
            (r.redirectUrl = t);
          var i = n + "?" + _.a.stringify(r);
          window.location.href = i;
        },
        Y = function () {
          var e = _.a.parse(window.location.search || "").redirectUrl;
          return (
            !(!e || !B.host.includes(A(e))) &&
            ((function (e) {
              var n = B.pc.prod;
              window.location.href = e
                ? "/other/oneredirect?target=" + encodeURIComponent(e)
                : "/other/oneredirect?target=" + n;
            })(e),
            !0)
          );
        };
      !(function (e) {
        (e[(e.NOT_SIGN = 0)] = "NOT_SIGN"),
          (e[(e.MAIN_SITE_CHECKING = 1)] = "MAIN_SITE_CHECKING"),
          (e[(e.DEPOSIT_PAYING = 2)] = "DEPOSIT_PAYING"),
          (e[(e.MAIN_SITE_REJECT = 3)] = "MAIN_SITE_REJECT"),
          (e[(e.MC_AUDIT_REJECT = 21)] = "MC_AUDIT_REJECT"),
          (e[(e.MC_AUDIT_SUCCESS = 20)] = "MC_AUDIT_SUCCESS"),
          (e[(e.MC_WAIT_AUDIT = 10)] = "MC_WAIT_AUDIT");
      })(z || (z = {}));
      var $ = function (e) {
          var n = B.pc.prod;
          if (e === z.MC_AUDIT_SUCCESS)
            return (
              (window.location.href =
                "/other/oneredirect?target=" + encodeURIComponent(n)),
              !0
            );
          if (e === z.MC_AUDIT_REJECT)
            return (window.location.href = "/home"), !0;
          if ([0, 1, 2, 3, 10].includes(e)) {
            var t = n + "checking";
            return (
              (window.location.href =
                "/other/oneredirect?target=" + encodeURIComponent(t)),
              !0
            );
          }
          return !1;
        },
        q = function () {
          var e = _.a.parse(window.location.search || "").redirectUrl;
          return !!(e && F.host.includes(A(e)) && X(e));
        },
        X = function (e) {
          var n = new RegExp("/home/?$", "i");
          return e && n.test(e);
        };
    },
    289: function (e, n, t) {
      t(290), t(291), t(294), t(563), (e.exports = t(613));
    },
    565: function (e, n) {
      window.console ||
        (window.console = {
          log: function () {},
          error: function () {},
          warn: function () {},
        });
    },
    571: function (e, n, t) {},
    613: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(33),
        o = t.n(r),
        i = (t(565), t(0)),
        a = t.n(i),
        c = t(14),
        u = t.n(c),
        l = (t(570), t(571), t(572), t(619)),
        s = t(281),
        d = t(56);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var f = t(125),
        p = t(205),
        m = [
          { domain: "www.baidu.com", type: "baidu" },
          {
            domain: "www.sogou.com",
            type: "sougou",
          },
          { domain: "www.so.com", type: "360" },
          { domain: "www.google.com", type: "google" },
          {
            domain: "cn.bing.com",
            type: "biying",
          },
        ];

      function w() {
        var e, n, t, r;
        return o.a.async(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (i.prev = 0),
                    (e = "other"),
                    (n = window.document.referrer || ""),
                    (i.next = 5),
                    o.a.awrap(f.b.getItem("refer_tracking"))
                  );
                case 5:
                  (t = i.sent) && Object(l.b)() - t.time < 5e3
                    ? (e = t.typeReferer)
                    : n
                    ? ((r = m.filter(function (e) {
                        return n.indexOf(e.domain) > -1;
                      })[0]),
                      (e = r ? r.type : "other"))
                    : (e = "direct"),
                    f.b.removeItem("refer_tracking"),
                    Object(p.c)({
                      page_sn: "10279",
                      op: "pv",
                      refer_scene_name: e,
                      page_src: "PC",
                    }),
                    (i.next = 14);
                  break;
                case 11:
                  (i.prev = 11),
                    (i.t0 = i.catch(0)),
                    setTimeout(function () {
                      console.error(i.t0);
                    }, 0);
                case 14:
                case "end":
                  return i.stop();
              }
          },
          null,
          null,
          [[0, 11]],
          Promise
        );
      }

      var h = t(68),
        v = t(61),
        b = t.n(v),
        g = t(622),
        y = t(256),
        E = t(130),
        x = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                u(r.next(e));
              } catch (n) {
                i(n);
              }
            }

            function c(e) {
              try {
                u(r.throw(e));
              } catch (n) {
                i(n);
              }
            }

            function u(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, c);
            }

            u((r = r.apply(e, n || [])).next());
          });
        },
        _ = function (e, n) {
          var t,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = {
              next: c(0),
              throw: c(1),
              return: c(2),
            }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );

          function c(i) {
            return function (c) {
              return (function (i) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((t = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = n.call(e, a);
                  } catch (c) {
                    (i = [6, c]), (r = 0);
                  } finally {
                    t = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        },
        S = function () {
          return x(void 0, void 0, void 0, function () {
            var e, n, t, r, o, i, c;
            return _(this, function (u) {
              try {
                if (
                  ((e = window.history.back.toString()),
                  (n = new y.UAParser(window.navigator.userAgent)),
                  (t = n.getBrowser()),
                  (r = (t.name && t.name.toUpperCase()) || ""),
                  e.match("ipcRenderer") ||
                    !["CHROME", "EDGE", "IE"].includes(r) ||
                    ("IE" === r && Number(t.major) < 9))
                ) {
                  if (!I()) return [2];
                  !(function (e, n) {
                    if (window.localStorage) {
                      var t = JSON.stringify(n);
                      localStorage.setItem(e, t);
                    }
                  })("global_broswer_nav", {
                    times: 1,
                    date: Object(l.b)(),
                  }),
                    (o = n.getOS()),
                    (i = ""),
                    "XP" === o.version
                      ? (i =
                          "http://commoncdn.yangkeduo.com/chrome/49.0.2623.75_chrome32_stable_windows_installer.exe")
                      : "Windows" === o.name
                      ? (i =
                          "http://commoncdn.yangkeduo.com/chrome/71.0.3578.98_chrome_installer.exe")
                      : "Mac OS" === o.name &&
                        (i =
                          "http://commoncdn.yangkeduo.com/chrome/GoogleChrome-71.0.3578.98.dmg"),
                    (c = g.a.alert({
                      logo: "warning-circle_filled",
                      width: 600,
                      content: a.a.createElement(
                        "div",
                        {
                          style: {
                            fontSize: 14,
                            fontWeight: 500,
                          },
                        },
                        "\u6211\u4eec\u68c0\u6d4b\u5230\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u662fchrome\u6d4f\u89c8\u5668\uff0c\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u98ce\u9669\uff0c\u6216\u5bfc\u81f4\u9875\u9762\u65e0\u6cd5\u6b63\u5e38\u663e\u793a\uff0c\u4e3a\u4e86\u4e0d\u5f71\u54cd\u60a8\u6b63\u5e38\u4f7f\u7528\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528chrome\u6d4f\u89c8\u5668\u6253\u5f00\u7f51\u7ad9\uff01"
                      ),
                      okText: "\u4e0b\u8f7d\u6700\u65b0\u7248Chrome",
                      onOk: function () {
                        E.b.open(i), c.close();
                      },
                      closeText: "\u5df2\u5b89\u88c5\u53bb\u4f7f\u7528",
                    }));
                }
              } catch (s) {
                console.error(s);
              }
              return [2];
            });
          });
        };
      var I = function () {
          try {
            var e = (function (e) {
              if (window.localStorage) {
                var n = localStorage.getItem(e);
                return (n && JSON.parse(n)) || null;
              }
            })("global_broswer_nav");
            return !e || Object(l.b)() - e.date >= 864e5;
          } catch (n) {
            return console.error(n), !1;
          }
        },
        O = t(203);

      function T(e, n) {
        var t;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (!e) return;
              if ("string" === typeof e) return k(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return k(e, n);
            })(e)) ||
            (n && e && "number" === typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          c = !1;
        return {
          s: function () {
            t = e[Symbol.iterator]();
          },
          n: function () {
            var e = t.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (c = !0), (i = e);
          },
          f: function () {
            try {
              a || null == t.return || t.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }

      function k(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }

      function C() {
        var e;
        return o.a.async(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.next = 2),
                    o.a.awrap(
                      Promise.all([t.e(0), t.e(5), t.e(7)]).then(
                        t.bind(null, 1059)
                      )
                    )
                  );
                case 2:
                  (e = n.sent.default),
                    u.a.render(
                      a.a.createElement(s.a, null, a.a.createElement(e, null)),
                      document.getElementById("root")
                    );
                case 4:
                case "end":
                  return n.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      }

      !(function () {
        var e, n, r, i, c, s;
        o.a.async(
          function (p) {
            for (;;)
              switch ((p.prev = p.next)) {
                case 0:
                  if (
                    -1 === window.location.href.indexOf("/login/grocer") &&
                    -1 === window.location.href.indexOf("/login/h5")
                  ) {
                    p.next = 17;
                    break;
                  }
                  if (-1 !== window.location.href.indexOf("/login/h5")) {
                    p.next = 7;
                    break;
                  }
                  return (
                    (p.next = 4), o.a.awrap(t.e(9).then(t.bind(null, 1056)))
                  );
                case 4:
                  (p.t0 = p.sent.default), (p.next = 10);
                  break;
                case 7:
                  return (
                    (p.next = 9), o.a.awrap(t.e(8).then(t.bind(null, 1063)))
                  );
                case 9:
                  p.t0 = p.sent.default;
                case 10:
                  return (
                    (e = p.t0),
                    (p.next = 13),
                    o.a.awrap(
                      Promise.all([t.e(0), t.e(6)]).then(t.bind(null, 1058))
                    )
                  );
                case 13:
                  (n = p.sent.default),
                    u.a.render(
                      a.a.createElement(
                        a.a.Fragment,
                        null,
                        a.a.createElement(e, null),
                        a.a.createElement(n, null)
                      ),
                      document.getElementById("root")
                    ),
                    (p.next = 26);
                  break;
                case 17:
                  try {
                    (r = /pddmt_[^_]+_version/.test(
                      window.navigator.userAgent
                    )),
                      (i = b.a.parse(window.location.search)),
                      (c =
                        -1 === window.location.href.indexOf("mms.pinduoduo.com")
                          ? "https://testing.hutaojie.com/mobile-mixin/app-download.html"
                          : "https://mai.pinduoduo.com/mobile-mixin/app-download.html"),
                      (i && "mobile" === i.entry) ||
                        !h.IS_MOBILE ||
                        r ||
                        ("fuwu" !== i.platform && (window.location.href = c));
                  } catch (m) {}
                  Object(O.n)(),
                    w(),
                    "serviceWorker" in navigator &&
                      navigator.serviceWorker.ready.then(function (e) {
                        Object(d.reportError)({
                          name: "ServiceWorkerError",
                          message: "unregistering serviceWorker",
                        }),
                          e.unregister();
                      }),
                    "live_obs_electron" !== window.LIVE_OBS_ELECTRON && S(),
                    Object(l.a)({ timeout: 200 }).then(C, C),
                    (s = ["CITYMAP", "ALLREGION", "ALL_REGIONS", "PROMAP"]),
                    (function () {
                      var e, n, t;
                      return o.a.async(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                (e = T(s)), (r.prev = 1), e.s();
                              case 3:
                                if ((n = e.n()).done) {
                                  r.next = 16;
                                  break;
                                }
                                return (
                                  (t = n.value),
                                  (r.prev = 5),
                                  localStorage.removeItem(t),
                                  (r.next = 9),
                                  o.a.awrap(f.a.removeItem(t))
                                );
                              case 9:
                                r.next = 14;
                                break;
                              case 11:
                                (r.prev = 11),
                                  (r.t0 = r.catch(5)),
                                  console.error(r.t0);
                              case 14:
                                r.next = 3;
                                break;
                              case 16:
                                r.next = 21;
                                break;
                              case 18:
                                (r.prev = 18), (r.t1 = r.catch(1)), e.e(r.t1);
                              case 21:
                                return (r.prev = 21), e.f(), r.finish(21);
                              case 24:
                              case "end":
                                return r.stop();
                            }
                        },
                        null,
                        null,
                        [
                          [1, 18, 21, 24],
                          [5, 11],
                        ],
                        Promise
                      );
                    })();
                case 26:
                case "end":
                  return p.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      })();
    },
  },
  [[289, 3, 4]],
]);
//# sourceMappingURL=http://esxftfvh.com/msfe/sourcemap/login/static/js/main.2f4d9276.chunk.v20210407195834_b9df400d.js.map
