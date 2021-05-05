/*! For license information please see 7.28dd4f70.chunk.v20210407195834_b9df400d.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    1059: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(623),
        r = n(624),
        o = n(627),
        i = n(626),
        c = n(625),
        s = n(0),
        l = n.n(s),
        u = n(789),
        f = n(802);
      n(792);

      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var d = (function (e) {
          Object(o.a)(n, e);
          var t = p(n);

          function n() {
            return Object(a.a)(this, n), t.apply(this, arguments);
          }

          return (
            Object(r.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "pdd-app-skeleton" },
                    l.a.createElement(
                      "div",
                      { className: "pdd-app-skeleton-body-wrapper" },
                      l.a.createElement(
                        "div",
                        { className: "pdd-app-skeleton-body" },
                        l.a.createElement(
                          "main",
                          { className: "pdd-app-skeleton-content" },
                          this.props.children
                        )
                      )
                    ),
                    l.a.createElement("footer", null)
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        m = n(1053),
        g = n(718),
        h = n(1052),
        v = n(793),
        b = n(33),
        y = n.n(b),
        E = n(92),
        w = n.n(E),
        O = n(106),
        k = n(621),
        C = n(622),
        j = n(104),
        x = n(197),
        S = n(130),
        N = function (e) {
          return e.replace(/^\s*|\s*$/g, "");
        };

      function P(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : window.location.href,
          a = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
          r = -1 !== n.indexOf("?") ? "&" : "?";
        return n.match(a)
          ? n.replace(a, "$1" + e + "=" + t + "$2")
          : n + r + e + "=" + t;
      }

      function T(e) {
        return e ? e.replace(/^http(s*)\:/, "") : "";
      }

      var M = /^.{8,20}$/;

      function I(e) {
        return M.test(e);
      }

      function R(e) {
        return !/\s/.test(e) && e.length > 0;
      }

      function A(e) {
        var t = 0;
        return (
          /\d+/.test(e) && t++,
          /[a-z]+/.test(e) && t++,
          /[A-Z]+/.test(e) && t++,
          /[\W_]+/.test(e) && t++,
          t
        );
      }

      function _(e) {
        return A(e) >= 3;
      }

      var L,
        H,
        B,
        U = n(61),
        V = n.n(U),
        F = n(206),
        D = n(649),
        z = n.n(D),
        K = function (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        },
        q = function (e) {
          var t = e.title,
            n = e.content;
          return l.a.createElement(
            G,
            null,
            l.a.createElement("div", { className: "tips-top" }, t),
            l.a.createElement("div", { className: "tips-label" }, n)
          );
        },
        G = F.a.div(
          L ||
            (L = K(
              [
                "\n  text-align: center;\n  line-height: 1;\n  .tips-top {\n    font-size: 16px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.8);\n  }\n\n  .tips-label {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.6);\n    margin-top: 12px;\n  }\n\n  .qr-code {\n    width: 112px;\n    height: 112px;\n    margin: 16px auto 0;\n  }\n",
              ],
              [
                "\n  text-align: center;\n  line-height: 1;\n  .tips-top {\n    font-size: 16px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.8);\n  }\n\n  .tips-label {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.6);\n    margin-top: 12px;\n  }\n\n  .qr-code {\n    width: 112px;\n    height: 112px;\n    margin: 16px auto 0;\n  }\n",
              ]
            ))
        ),
        Q = n(619),
        W = function (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        },
        J = function (e) {
          var t,
            n = e.identityVerifyURL,
            a = e.maskMobile,
            r = e.loginLimitEffectiveTime,
            o = e.title,
            i = (t = r) ? (t - Object(Q.b)()) / 864e5 : 0;
          return l.a.createElement(
            X,
            null,
            l.a.createElement(q, {
              title:
                o ||
                "\u5b58\u5728\u591a\u4e2a\u8d26\u53f7\u5df2\u7ed1\u5b9a " +
                  a +
                  " \u624b\u673a",
              content: l.a.createElement(
                l.a.Fragment,
                null,
                "\u672c\u8d26\u53f7\u5c06\u5728",
                l.a.createElement(
                  "span",
                  { className: "day" },
                  i < 1 ? 1 : Math.floor(i)
                ),
                "\u5929",
                i < 1 ? "\u5185" : "\u540e",
                "\u9650\u5236\u767b\u5f55\uff0c\u5982\u9700\u7ee7\u7eed\u4f7f\u7528\uff0c\u8bf7\u5fae\u4fe1\u626b\u7801\u8ba4\u8bc1\u8d26\u53f7"
              ),
            }),
            l.a.createElement(
              "div",
              { className: "qr-code" },
              n
                ? l.a.createElement(z.a, {
                    value: n,
                    size: 112,
                  })
                : null
            )
          );
        },
        X = F.a.div(
          H ||
            (H = W(
              [
                "\n  width: 424px;\n  .qr-code {\n    width: 112px;\n    height: 112px;\n    margin: 16px auto 0;\n  }\n\n  .day {\n    color: #dd4433;\n    margin: 0 3px;\n  }\n",
              ],
              [
                "\n  width: 424px;\n  .qr-code {\n    width: 112px;\n    height: 112px;\n    margin: 16px auto 0;\n  }\n\n  .day {\n    color: #dd4433;\n    margin: 0 3px;\n  }\n",
              ]
            ))
        ),
        Y = function (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        },
        Z = function (e) {
          var t = e.identityVerifyURL,
            n = e.title,
            a = e.content;
          return l.a.createElement(
            $,
            null,
            l.a.createElement(q, {
              title:
                n ||
                "\u8be5\u8d26\u53f7\u5c1a\u672a\u8ba4\u8bc1\uff0c\u5df2\u9650\u5236\u767b\u5f55",
              content:
                a ||
                "\u5982\u9700\u7ee7\u7eed\u4f7f\u7528\uff0c\u8bf7\u5fae\u4fe1\u626b\u7801\u8ba4\u8bc1\u8d26\u53f7",
            }),
            l.a.createElement(
              "div",
              { className: "qr-code" },
              t
                ? l.a.createElement(z.a, {
                    value: t,
                    size: 112,
                  })
                : null
            )
          );
        },
        $ = F.a.div(
          B ||
            (B = Y(
              [
                "\n  width: 424px;\n  .qr-code {\n    width: 112px;\n    height: 112px;\n    margin: 16px auto 0;\n  }\n",
              ],
              [
                "\n  width: 424px;\n  .qr-code {\n    width: 112px;\n    height: 112px;\n    margin: 16px auto 0;\n  }\n",
              ]
            ))
        ),
        ee = n(56),
        te = n(125),
        ne = n(800),
        ae = n.n(ne),
        re = n(203);

      function oe(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var ie = (function (e) {
        Object(o.a)(n, e);
        var t = oe(n);

        function n(e) {
          var r;
          return (
            Object(a.a)(this, n),
            ((r = t.call(this, e)).riskControlFingerAdapter = function (e, t) {
              var n,
                a,
                o = arguments;
              return y.a.async(
                function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        (n = o.length > 2 && void 0 !== o[2] ? o[2] : ""),
                          (a = o.length > 3 && void 0 !== o[3] ? o[3] : 500),
                          ae.a.setUid(n),
                          ae.a.setApp("mms-login"),
                          (i.t0 = e),
                          (i.next =
                            i.t0 === re.a.DIDMOUNT_ENUM
                              ? 7
                              : i.t0 === re.a.AFTERLOGIN_ENUM
                              ? 9
                              : i.t0 === re.a.GET_RISKCONTROL_FP
                              ? 10
                              : 11);
                        break;
                      case 7:
                        return (
                          ae.a.getParamsAsync(function (e) {
                            t && t(e);
                          }),
                          i.abrupt("return", Promise.resolve(!0))
                        );
                      case 9:
                        return i.abrupt("return", ae.a.getParams(n, a));
                      case 10:
                        return i.abrupt(
                          "return",
                          Promise.resolve(r.riskControlFp)
                        );
                      case 11:
                      case "end":
                        return i.stop();
                    }
                },
                null,
                null,
                null,
                Promise
              );
            }),
            (r.getPlatformType = function () {
              return V.a.parse(window.location.search).platform;
            }),
            (r.getLiveLoginType = function () {
              var e = V.a.parse(window.location.search);
              return "live" === e.platform && e.liveLoginType
                ? Number(e.liveLoginType)
                : 0;
            }),
            (r.isInvalidLiveLogin = function () {
              var e = V.a.parse(window.location.search);
              return (
                1 === r.state.liveLoginType && !Object(re.j)(e.redirectUrl)
              );
            }),
            (r.initStorage = function () {
              localStorage.removeItem("PASSID"),
                localStorage.removeItem("MMS_PERMISSIONS_DATA"),
                localStorage.removeItem("MMS_SIDE_NAV_DATA"),
                localStorage.removeItem("MMS_SIDE_NAV_HTML"),
                S.b.saveToLocalStorage(S.a.SPRING),
                S.b.saveToLocalStorage(S.a.ISLOGIN, 1),
                S.b.saveToLocalStorage(S.a.PROTOCOL_MODAL);
            }),
            (r.initLogin = function () {
              return y.a.async(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ("/login/sso/invalid" !== location.pathname) {
                          e.next = 12;
                          break;
                        }
                        return (
                          (r.loadUserInfoPromise = Promise.resolve(null)),
                          (e.prev = 2),
                          (e.next = 5),
                          y.a.awrap(Object(O.a)("/janus/api/logout"))
                        );
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(2));
                      case 9:
                        r.props.history.replace(
                          "/login/sso".concat(location.search)
                        ),
                          (e.next = 14);
                        break;
                      case 12:
                        (r.loadUserInfoPromise = r.fetchUserinfo()),
                          r.subsystemAutoGenerateAccessToken();
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                null,
                null,
                [[2, 7]],
                Promise
              );
            }),
            (r.fetchAuthCode = function () {
              Object(O.b)("/janus/api/getCaptchaCode", { sceneId: 15 })
                .then(function (e) {
                  r.setState({
                    captChaCodeUrl: e.picture,
                    sign: e.sign,
                    captchaType: e.captchaType,
                  });
                })
                .catch(function () {});
            }),
            (r.getLoginApi = function () {
              return {
                userNameChangeHandle: r.inputChangeHandle("username"),
                passwordChangeHandle: r.inputChangeHandle("password"),
                verifyCodeChangeHandle: r.inputChangeHandle("verifyCode"),
                userNameBlurHandle: r.inputTimeHandle(
                  "mobileInputEditFinishTime"
                ),
                passwordBlurHandle: r.inputTimeHandle(
                  "passwordInputEditFinishTime"
                ),
                verifyCodeBlurHandle: r.inputTimeHandle(
                  "captureInputEditFinishTime"
                ),
                userNameFocusHandle: r.inputTimeHandle(
                  "mobileInputEditStartTime"
                ),
                passwordFocusHandle: r.inputTimeHandle(
                  "passwordInputEditStartTime"
                ),
                verifyCodeFocusHandle: r.inputTimeHandle(
                  "captureInputEditStartTime"
                ),
                userNameKeyboardHandle: r.inputKeyboardHandle("mobile"),
                passwordKeyboardHandle: r.inputKeyboardHandle("password"),
                verifyCodeKeyboardHandle: r.inputKeyboardHandle("capture"),
                loginHandle: r.loginHandle,
                fetchAuthCode: r.fetchAuthCode,
                setValue: r.setValue,
                fetchUserinfo: r.fetchUserinfo,
                fetchUserinfoFromCache: function () {
                  return r.loadUserInfoPromise;
                },
                setLoginState: r.setLoginState,
                verifyParams: r.verifyParams,
                verifyMessageChangeHandle: r.verifyMessageChangeHandle,
                verifyMessageSubmit: r.verifyMessageSubmit,
                getVerifyMessageHandle: r.getVerifyMessageHandle,
                bindPhoneInputHandle: r.bindPhoneInputHandle,
                bindMeassageInputHandle: r.bindMeassageInputHandle,
                bindPhoneSubmit: r.bindPhoneSubmit,
                getBindPhoneMessage: r.getBindPhoneMessage,
                loginSuccessHandle: r.loginSuccessHandle,
                enterLogin: r.enterLogin,
                jumpLogic: r.jumpLogic,
                jumpToRegister: r.jumpToRegister,
                riskControlFingerAdapter: r.riskControlFingerAdapter,
              };
            }),
            (r.jumpToRegister = function () {
              r.props.history.push("/login/register".concat(location.search));
            }),
            (r.loginHandle = function (e) {
              if (!r.isLogin && r.verifyParams()) {
                if (r.isInvalidLiveLogin() && !re.h)
                  return k.a.warn("\u975e\u6cd5\u7684 redirectUrl");
                var t = (e && e.screenX) || "",
                  n = (e && e.screenY) || "";
                return r.publicKeyPromise.then(function (e) {
                  r.setIsFinancial(), r.setLoginStatus(!0);
                  var a = r.getLoginParams({ screenX: t, screenY: n }, e);
                  if ("function" === typeof re.g)
                    return Object(re.g)(a.username, a.password).then(function (
                      e
                    ) {
                      var t, n, o, i;
                      return y.a.async(
                        function (c) {
                          for (;;)
                            switch ((c.prev = c.next)) {
                              case 0:
                                return (
                                  Object(ee.reportLog)(
                                    "janus-api-auth-init",
                                    ""
                                  ),
                                  (t = r.riskControlFp),
                                  (n = re.h
                                    ? { headers: { ETag_obs: t } }
                                    : { headers: { ETag: t } }),
                                  (o = "/janus/api/auth"),
                                  (i = function (e) {
                                    return r.loginPasswordResolveHandle(e, a);
                                  }),
                                  1 === r.state.liveLoginType &&
                                    ((o = "/janus/api/contractor/login"),
                                    (i = function (e) {
                                      r.handleOutsourcingLogin(e, a);
                                    }),
                                    (a.contractorLoginPlatform = 3)),
                                  c.abrupt(
                                    "return",
                                    Object(O.b)(o, Object(v.a)({}, a, {}, e), n)
                                      .then(i, function (e) {
                                        return (
                                          Object(ee.reportLog)(
                                            "janus-api-auth-fail",
                                            ""
                                          ),
                                          r
                                            .errorResponeTransform(e)
                                            .then(function (e) {
                                              return r.loginPasswordRejectHandle(
                                                e,
                                                a
                                              );
                                            })
                                        );
                                      })
                                      .catch(function () {
                                        Object(ee.reportLog)(
                                          "janus-api-auth-fail",
                                          ""
                                        ),
                                          r.setLoginStatus(!1);
                                      })
                                  )
                                );
                              case 7:
                              case "end":
                                return c.stop();
                            }
                        },
                        null,
                        null,
                        null,
                        Promise
                      );
                    });
                });
              }
            }),
            (r.enterLogin = function (e) {
              13 === e.keyCode && r.loginHandle();
            }),
            (r.errorResponeTransform = function (e) {
              return new Promise(function (t) {
                "[object Error]" === Object.prototype.toString.call(e) &&
                e.response
                  ? t(e.response.json())
                  : t(e);
              });
            }),
            (r.loginPasswordRejectHandle = function (e, t) {
              if ((r.setLoginStatus(!1), e)) {
                var n = t.username,
                  a = e.error_code ? e.error_code : e.errorCode,
                  o = e.error_msg ? e.error_msg : e.errorMsg;
                if (
                  (S.b.saveToLocalStorage("old_username", { username: n }),
                  S.b.saveToSessionStorage("old_easy_psd", {
                    old_easy_psd: t.password,
                  }),
                  e &&
                    !e.mobileVerification &&
                    e.inMobileWhiteList &&
                    e.userInfo &&
                    e.userInfo.mallOwner)
                )
                  r.handerOfValPhone(e, n, 0);
                else if (e) {
                  if (8000037 === a)
                    return void C.a.alert({
                      content: l.a.createElement(Z, {
                        identityVerifyURL: e && e.result.identityVerifyURL,
                        title:
                          r.authTipsCount > 0
                            ? "\u8ba4\u8bc1\u672a\u5b8c\u6210"
                            : "",
                        content:
                          r.authTipsCount > 0
                            ? "\u5982\u9700\u7ee7\u7eed\u4f7f\u7528\uff0c\u8bf7\u5fae\u4fe1\u626b\u7801\u8ba4\u8bc1\u8d26\u53f7"
                            : "",
                      }),
                      logo: "warning-circle_filled",
                      okText: "\u5df2\u5b8c\u6210\u8ba4\u8bc1",
                      closeText: "\u767b\u5f55\u5176\u4ed6\u8d26\u53f7",
                      onOk: function () {
                        return (
                          r.authTipsCount++,
                          (r.state.verificationCode = ""),
                          r.setState({
                            verificationCode: "",
                            errorMsg: "",
                          }),
                          r.loginHandle()
                        );
                      },
                      onClose: function () {
                        r.authTipsCount = 0;
                      },
                    });
                  if (8000040 === a) {
                    var i = C.a.alert({
                      content: l.a.createElement(q, {
                        title:
                          "\u8be5\u8d26\u53f7\u6b63\u5728\u8ba4\u8bc1\u5ba1\u6838\u4e2d",
                        content:
                          "\u60a8\u53ef\u5c1d\u8bd5\u66f4\u6362\u5176\u4ed6\u8d26\u53f7\u767b\u5f55\u5546\u5bb6\u540e\u53f0",
                      }),
                      logo: "warning-circle_filled",
                      footer: l.a.createElement(
                        j.a,
                        {
                          onClick: function () {
                            return i.close();
                          },
                        },
                        "\u6211\u77e5\u9053\u4e86"
                      ),
                    });
                    return;
                  }
                  return (
                    402 === a
                      ? r.setState({ errorMsg: 402 })
                      : r.setState({ errorMsg: o }),
                    2000014 === a || 2000016 === a
                      ? void r.setState({
                          resetPassword: !0,
                          loginVisible: !1,
                          errorCode: a,
                        })
                      : (2000015 === a &&
                          r.setState({ mustValidate: !0 }, function () {
                            r.handerOfValPhone(e, n, 0);
                          }),
                        2000017 === a
                          ? void r.setState({
                              errorMsg:
                                "\u624b\u673a\u9a8c\u8bc1\u7801\u9519\u8bef",
                            })
                          : 2000020 === a
                          ? void r.handerOfValPhone(e, n, 1)
                          : 2000021 === a
                          ? void r.handerOfValPhone(e, n, 2)
                          : 2000018 === a
                          ? void r.setState({
                              bindPhoneVisible: !0,
                              loginVisible: !1,
                              verifyPhoneType: 3,
                            })
                          : void 0)
                  );
                }
              }
            }),
            (r.handerOfValPhone = function (e, t, n) {
              var a,
                o = "";
              if (
                (e && e.result && e.result.userInfo
                  ? (a = e.result.userInfo)
                  : e &&
                    e.result &&
                    e.result.userInfoVO &&
                    (a = e.result.userInfoVO),
                (o = a
                  ? "" !== r.state.mobile
                    ? r.state.mobile
                    : a.mobile
                  : (e.result && e.result.maskMobile) || e.result || e.mobile))
              ) {
                var i = "";
                i =
                  -1 === o.indexOf("*")
                    ? 11 !== o.length || o.match(/^[0]{2}/)
                      ? o.replace(/(.{3})(?=.{3}$)/, "***")
                      : o.substr(0, 3) + "****" + o.substr(7, 4)
                    : o;
                var c = { username: t, bindtel: o };
                S.b.saveToLocalStorage("pddUser", c),
                  r.setState({
                    mobile: o,
                    mobileText: i,
                    verifyPhoneType: n,
                    verifyPhoneVisible: !0,
                    loginVisible: !1,
                  });
              } else r.setState({ unbindPhone: !0, loginVisible: !1 });
            }),
            (r.handleOutsourcingLogin = function (e, t) {
              var n, a, o, i;
              return y.a.async(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          r.setLoginStatus(!1),
                          (c.prev = 1),
                          (c.next = 4),
                          y.a.awrap(r.limitLoginCheck(e))
                        );
                      case 4:
                        c.next = 8;
                        break;
                      case 6:
                        (c.prev = 6), (c.t0 = c.catch(1));
                      case 8:
                        if (
                          ((n = e.subSystemAccessToken),
                          (a = V.a.parse(window.location.search)),
                          !re.h)
                        ) {
                          c.next = 16;
                          break;
                        }
                        return (
                          "https://live.pinduoduo.com/login/checker",
                          (o = P(
                            "accessToken",
                            n,
                            "https://live.pinduoduo.com/login/checker"
                          )),
                          (o = P("username", t.username, o)),
                          window.pinBridge.callNative(
                            {
                              method: "loginSuccess",
                              url: o,
                              userinfo: e,
                            },
                            function (e) {},
                            function (e) {}
                          ),
                          c.abrupt("return")
                        );
                      case 16:
                        if (r.isInvalidLiveLogin()) {
                          c.next = 23;
                          break;
                        }
                        if (
                          window.location.host !== Object(re.c)(a.redirectUrl)
                        ) {
                          c.next = 20;
                          break;
                        }
                        return (
                          (location.href = a.redirectUrl), c.abrupt("return")
                        );
                      case 20:
                        (i = P("accessToken", n, a.redirectUrl)),
                          (i = P("username", t.username, i)),
                          (location.href = i);
                      case 23:
                      case "end":
                        return c.stop();
                    }
                },
                null,
                null,
                [[1, 6]],
                Promise
              );
            }),
            (r.loginPasswordResolveHandle = function (e, t) {
              r.setLoginStatus(!1), (e.userinfo = e.userInfoVO);
              var n = e.pass_id || e.passId,
                a = e.userinfo && e.userinfo.username;
              a || (a = t.username),
                S.b.saveToLocalStorage("old_username", { username: a }),
                S.b.saveToSessionStorage("old_easy_psd", {
                  old_easy_psd: t.password,
                }),
                localStorage.removeItem("EXTENSIONONLY"),
                r.loginSuccessHandle(n, e);
            }),
            (r.subsystemAutoGenerateAccessToken = function () {
              var e, t, n, a;
              return y.a.async(
                function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (e = "auto_access_time"),
                          (t = V.a.parse(window.location.search)),
                          (o.next = 4),
                          y.a.awrap(te.b.getItem(e))
                        );
                      case 4:
                        if (
                          ((n = o.sent) && !(Object(Q.b)() - n > 5e3)) ||
                          "auto" !== t.accessType ||
                          !Object(re.j)(t.redirectUrl)
                        ) {
                          o.next = 12;
                          break;
                        }
                        if (
                          window.location.host !== Object(re.c)(t.redirectUrl)
                        ) {
                          o.next = 8;
                          break;
                        }
                        return o.abrupt("return");
                      case 8:
                        return (o.next = 10), y.a.awrap(r.loadUserInfoPromise);
                      case 10:
                        (a = o.sent),
                          Object(re.d)(
                            t.redirectUrl,
                            a && a.mobile,
                            void 0,
                            function (n) {
                              if (n && a && a.username) {
                                var r = P("accessToken", n, t.redirectUrl);
                                (r = P("username", a.username, r)),
                                  (location.href = r),
                                  te.b.setItem(e, Object(Q.b)());
                              }
                            },
                            function () {}
                          );
                      case 12:
                      case "end":
                        return o.stop();
                    }
                },
                null,
                null,
                null,
                Promise
              );
            }),
            (r.loginSuccessHandle = function (e, t) {
              var n;
              return y.a.async(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        try {
                          (n = window.history.back.toString()).match(
                            "ipcRenderer"
                          ) &&
                            (Object(O.a)("/janus/api/heartbeat"),
                            Object(ee.reportLog)("cR", n));
                        } catch (o) {
                          console.error(o);
                        }
                        return (
                          (a.prev = 1),
                          (a.next = 4),
                          y.a.awrap(r.limitLoginCheck(t))
                        );
                      case 4:
                        a.next = 8;
                        break;
                      case 6:
                        (a.prev = 6), (a.t0 = a.catch(1));
                      case 8:
                        return (
                          e &&
                            (localStorage.setItem("PASSID", e),
                            localStorage.setItem(
                              "msfe.auth.timer",
                              Object(Q.b)()
                            )),
                          a.abrupt(
                            "return",
                            Promise.all([
                              r.fetchUserinfo(!0),
                              r.fetchMallStatus(),
                              r.getDefaultRefundAddress(),
                            ])
                              .then(function (e) {
                                var n, a, o, i, c, s, l, u;
                                return y.a.async(
                                  function (f) {
                                    for (;;)
                                      switch ((f.prev = f.next)) {
                                        case 0:
                                          if (
                                            ((n = Object(h.a)(e, 3)),
                                            (a = n[0]),
                                            (o = n[1]),
                                            (i = n[2]),
                                            -1 !== o && a)
                                          ) {
                                            f.next = 4;
                                            break;
                                          }
                                          return (
                                            (location.href = "/"),
                                            f.abrupt("return")
                                          );
                                        case 4:
                                          if (
                                            (S.b.saveLocal(S.a.MALLSTATUS, o),
                                            (c = V.a.parse(
                                              window.location.search
                                            )),
                                            !Object(re.j)(c.authurl))
                                          ) {
                                            f.next = 9;
                                            break;
                                          }
                                          return (
                                            (location.href = c.authurl),
                                            f.abrupt("return")
                                          );
                                        case 9:
                                          if (
                                            !(null === t || void 0 === t
                                              ? void 0
                                              : t.maicaiSupplier)
                                          ) {
                                            f.next = 12;
                                            break;
                                          }
                                          return (
                                            Object(O.b)(
                                              "/janus/api/ticket/exchangeTicketByToken",
                                              {
                                                tokenTicketSystem: 4,
                                                releaseToken: !0,
                                              }
                                            )
                                              .then(function (e) {
                                                Object(re.m)(
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.ticket
                                                );
                                              })
                                              .catch(function () {
                                                r.setState({
                                                  errorMsg:
                                                    "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u65b0\u518d\u8bd5",
                                                });
                                              }),
                                            f.abrupt("return")
                                          );
                                        case 12:
                                          if (
                                            c.redirectUrl ||
                                            1 !==
                                              (null === t || void 0 === t
                                                ? void 0
                                                : t.maicaiCreateType)
                                          ) {
                                            f.next = 15;
                                            break;
                                          }
                                          if (
                                            !Object(re.p)(
                                              null === t || void 0 === t
                                                ? void 0
                                                : t.maicaiAuditStatus
                                            )
                                          ) {
                                            f.next = 15;
                                            break;
                                          }
                                          return f.abrupt("return");
                                        case 15:
                                          if (
                                            !Object(re.i)() ||
                                            1 !==
                                              (null === t || void 0 === t
                                                ? void 0
                                                : t.maicaiCreateType) ||
                                            (null === t || void 0 === t
                                              ? void 0
                                              : t.efficientOperation)
                                          ) {
                                            f.next = 18;
                                            break;
                                          }
                                          if (
                                            !Object(re.p)(
                                              null === t || void 0 === t
                                                ? void 0
                                                : t.maicaiAuditStatus
                                            )
                                          ) {
                                            f.next = 18;
                                            break;
                                          }
                                          return f.abrupt("return");
                                        case 18:
                                          if (!Object(re.q)()) {
                                            f.next = 20;
                                            break;
                                          }
                                          return f.abrupt("return");
                                        case 20:
                                          if (!Object(re.j)(c.redirectUrl)) {
                                            f.next = 26;
                                            break;
                                          }
                                          if (
                                            window.location.host !==
                                            Object(re.c)(c.redirectUrl)
                                          ) {
                                            f.next = 24;
                                            break;
                                          }
                                          return (
                                            (location.href = c.redirectUrl),
                                            f.abrupt("return")
                                          );
                                        case 24:
                                          return (
                                            Object(re.d)(
                                              c.redirectUrl,
                                              a && a.mobile,
                                              void 0,
                                              function (e) {
                                                var t = P(
                                                  "accessToken",
                                                  e,
                                                  c.redirectUrl
                                                );
                                                (t = P(
                                                  "username",
                                                  a.username,
                                                  t
                                                )),
                                                  (location.href = t);
                                              },
                                              function (e) {
                                                if (!e || 2e6 !== e.errorCode)
                                                  return (
                                                    e &&
                                                      8000019 === e.errorCode &&
                                                      r.setState({
                                                        errorMsg:
                                                          "\u767b\u5f55\u5931\u8d25: " +
                                                          e.errorMsg,
                                                      }),
                                                    void k.a.warn(
                                                      (e && e.errorMsg) ||
                                                        "\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"
                                                    )
                                                  );
                                                location.href = c.redirectUrl;
                                              }
                                            ),
                                            f.abrupt("return")
                                          );
                                        case 26:
                                          if (!re.h) {
                                            f.next = 31;
                                            break;
                                          }
                                          return (
                                            (s = sessionStorage.getItem(
                                              "sessionEnterReLogin"
                                            )),
                                            (l =
                                              "https://live.pinduoduo.com/login/checker"),
                                            Object(re.d)(
                                              l,
                                              a && a.mobile,
                                              void 0,
                                              function (e) {
                                                var t = P("accessToken", e, l);
                                                (t = P(
                                                  "username",
                                                  a.username,
                                                  t
                                                )),
                                                  window.pinBridge.callNative(
                                                    {
                                                      method: "loginSuccess",
                                                      url: t,
                                                      type:
                                                        "1" === s
                                                          ? "reLogin-mall"
                                                          : "",
                                                      userinfo: a,
                                                    },
                                                    function (e) {},
                                                    function (e) {}
                                                  );
                                              },
                                              function (e) {
                                                window.pinBridge.callNative({
                                                  method: "loginFailure",
                                                  error: e,
                                                  redirectUrl: l,
                                                  userinfo: a,
                                                });
                                              }
                                            ),
                                            f.abrupt("return")
                                          );
                                        case 31:
                                          if (1 !== a.applyClose) {
                                            f.next = 34;
                                            break;
                                          }
                                          return (
                                            (location.href =
                                              "/mallcenter/close/index"),
                                            f.abrupt("return")
                                          );
                                        case 34:
                                          if (
                                            !(null !== o && o < 4 && 2 !== o)
                                          ) {
                                            f.next = 37;
                                            break;
                                          }
                                          return (
                                            (location.href =
                                              "/mallcenter/info/entry/index"),
                                            f.abrupt("return")
                                          );
                                        case 37:
                                          if (5 !== (u = a.roleId)) {
                                            f.next = 43;
                                            break;
                                          }
                                          return (
                                            (location.href = "/orders/list/"),
                                            f.abrupt("return")
                                          );
                                        case 43:
                                          if (3 !== u) {
                                            f.next = 46;
                                            break;
                                          }
                                          return (
                                            (location.href =
                                              "/chat-service/search"),
                                            f.abrupt("return")
                                          );
                                        case 46:
                                          if (1 !== o) {
                                            f.next = 49;
                                            break;
                                          }
                                          return (
                                            (location.href =
                                              "/mallcenter/info/entry/index"),
                                            f.abrupt("return")
                                          );
                                        case 49:
                                          if (
                                            !a.mallOwner ||
                                            4 !== o ||
                                            (i &&
                                              "" !== N(i.refundAddress || "") &&
                                              "" !== N(i.refundPhone || "") &&
                                              "" !==
                                                N(a.mall.company_phone || ""))
                                          ) {
                                            f.next = 52;
                                            break;
                                          }
                                          return (
                                            (location.href =
                                              "/aftersales/setup"),
                                            f.abrupt("return")
                                          );
                                        case 52:
                                          S.b.saveToLocalStorage(S.a.PREURL, {
                                            url: "login",
                                          }),
                                            r.jumpLogic();
                                        case 54:
                                        case "end":
                                          return f.stop();
                                      }
                                  },
                                  null,
                                  null,
                                  null,
                                  Promise
                                );
                              })
                              .catch(function () {
                                location.href = "/home";
                              })
                          )
                        );
                      case 10:
                      case "end":
                        return a.stop();
                    }
                },
                null,
                null,
                [[1, 6]],
                Promise
              );
            }),
            (r.getDefaultRefundAddress = function () {
              return Object(O.a)(
                "/antis/api/refundAddress/getDefaultRefundAddress"
              ).catch(function () {});
            }),
            (r.jumpLogic = function () {
              location.href = "/home";
            }),
            (r.reportFingerNew = function (e) {
              var t, n;
              return y.a.async(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (!e) {
                          a.next = 12;
                          break;
                        }
                        return (
                          (a.prev = 1),
                          (t = e.id),
                          (n = Date.now()),
                          (a.next = 6),
                          y.a.awrap(
                            r.riskControlFingerAdapter(
                              re.a.AFTERLOGIN_ENUM,
                              void 0,
                              String(t),
                              500
                            )
                          )
                        );
                      case 6:
                        Object(ee.reportLog)(
                          "new-fingerPrint-time:",
                          Date.now() - n
                        ),
                          (a.next = 12);
                        break;
                      case 9:
                        (a.prev = 9),
                          (a.t0 = a.catch(1)),
                          Object(ee.reportLog)(
                            "new-fingerPrint-getParams-error:",
                            String(a.t0)
                          );
                      case 12:
                      case "end":
                        return a.stop();
                    }
                },
                null,
                null,
                [[1, 9]],
                Promise
              );
            }),
            (r.fetchUserinfo = function () {
              var e,
                t,
                n = arguments;
              return y.a.async(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (e = n.length > 0 && void 0 !== n[0] && n[0]),
                          (a.prev = 1),
                          (a.next = 4),
                          y.a.awrap(x.a.invalidate())
                        );
                      case 4:
                        return (a.next = 6), y.a.awrap(x.a.load());
                      case 6:
                        (t = a.sent), (a.next = 12);
                        break;
                      case 9:
                        (a.prev = 9),
                          (a.t0 = a.catch(1)),
                          e &&
                            r.riskControlFingerAdapter(
                              re.a.AFTERLOGIN_ENUM,
                              void 0,
                              void 0,
                              500
                            );
                      case 12:
                        return e && r.reportFingerNew(t), a.abrupt("return", t);
                      case 14:
                      case "end":
                        return a.stop();
                    }
                },
                null,
                null,
                [[1, 9]],
                Promise
              );
            }),
            (r.fetchMallStatus = function () {
              return Object(O.a)("/earth/api/merchant/importNewStatus").then(
                function (e) {
                  return e;
                },
                function () {
                  return Promise.resolve(-1);
                }
              );
            }),
            (r.verifyMessageChangeHandle = function (e) {
              e.length > 6 || r.setState({ verificationCode: e });
            }),
            (r.verifyMessageSubmit = function () {
              r.state.verificationCode
                ? r.loginHandle()
                : r.setState({
                    errorMsg:
                      "\u77ed\u4fe1\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a",
                  });
            }),
            (r.getVerifyMessageHandle = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = Object(v.a)({ username: r.state.username }, e);
              return new Promise(function (e, n) {
                var a =
                  1 === r.state.liveLoginType
                    ? "/janus/api/contractor/getLoginVerificationCode"
                    : "/janus/api/user/getLoginVerificationCode";
                1 === r.state.liveLoginType && (t.contractorLoginPlatform = 3),
                  Object(O.b)(a, t).then(
                    function () {
                      k.a.success(
                        "\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f\uff01"
                      ),
                        r.setState({
                          canQueryCode: !1,
                          errorMsg: "",
                        }),
                        e({ risk: !1 });
                    },
                    function (t) {
                      r.errorResponeTransform(t).then(function (t) {
                        t && 4000005 === t.errorCode
                          ? e({ risk: !0 })
                          : t && 41012 === t.errorCode
                          ? (k.a.warn(
                              "\u56fe\u5f62\u9a8c\u8bc1\u7801\u9519\u8bef\uff01"
                            ),
                            n())
                          : (r.setState({
                              errorMsg:
                                (t && t.errorMsg) ||
                                "\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25\uff01",
                            }),
                            n());
                      });
                    }
                  );
              });
            }),
            (r.bindPhoneInputHandle = function (e) {
              /[0-9]{0,11}/.test(e) && r.setState({ bindPhone: e });
            }),
            (r.bindMeassageInputHandle = function (e) {
              e.length > 6 || r.setState({ bindMessage: e });
            }),
            (r.bindPhoneSubmit = function () {
              r.validatePhone() &&
                r.validateCode() &&
                r.publicKeyPromise.then(function (e) {
                  var t = r.state,
                    n = t.bindPhone,
                    a = t.bindMessage,
                    o = t.username,
                    i = t.password,
                    c = {
                      mobile: n,
                      verificationCode: a,
                      username: o,
                      password: Object(re.b)(i, e),
                      passwordEncrypt: e.passwordEncrypt,
                    };
                  Object(O.b)("/janus/api/user/bindMobileByPassword", c)
                    .then(function (e) {
                      k.a.success(
                        "\u60a8\u5df2\u6210\u529f\u7ed1\u5b9a\u624b\u673a\u53f7\uff01"
                      ),
                        setTimeout(function () {
                          if (e.isWeakPassword)
                            if (
                              "live_obs_electron" === window.LIVE_OBS_ELECTRON
                            ) {
                              window.pinBridge.callNative({
                                method: "goBrowser",
                                url:
                                  "https://mms.pinduoduo.com/mallcenter/resetPwd/index",
                              });
                            } else
                              window.location.href =
                                "/mallcenter/changeAccountInfo/weakPwdEdit";
                          else r.loginSuccessHandle();
                        }, 2e3);
                    })
                    .catch(function (e) {
                      e && e.errorMsg && r.setState({ errorMsg: e.errorMsg });
                    });
                });
            }),
            (r.validateCode = function () {
              return (
                !!r.state.bindMessage ||
                (r.setState({
                  errorMsg: "\u8bf7\u586b\u5199\u9a8c\u8bc1\u7801",
                }),
                !1)
              );
            }),
            (r.validatePhone = function () {
              var e = r.state.bindPhone;
              return e
                ? !!/^1\d{10}$/.test(e) ||
                    (r.setState({
                      errorMsg:
                        "\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e",
                    }),
                    !1)
                : (r.setState({
                    errorMsg: "\u8bf7\u586b\u5199\u624b\u673a\u53f7",
                  }),
                  !1);
            }),
            (r.getBindPhoneMessage = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!r.validatePhone()) return Promise.reject();
              var t = r.state,
                n = t.bindPhone,
                a = t.username,
                o = Object(v.a)({ type: 14, mobile: N(n), username: a }, e);
              return new Promise(function (e, t) {
                Object(O.b)(
                  "/janus/api/mobile/sendVerificationCode/noLogin",
                  o
                ).then(
                  function () {
                    return (
                      k.a.success(
                        "\u9a8c\u8bc1\u7801\u83b7\u53d6\u6210\u529f\uff01"
                      ),
                      r.setState({ errorMsg: "" }),
                      e({ risk: !1 })
                    );
                  },
                  function (n) {
                    r.errorResponeTransform(n).then(function (n) {
                      return n && 4000005 === n.errorCode
                        ? e({ risk: !0 })
                        : n && 3e6 === n.errorCode
                        ? (k.a.warn(
                            "\u56fe\u5f62\u9a8c\u8bc1\u7801\u9519\u8bef\uff01"
                          ),
                          void t())
                        : (r.setState({
                            errorMsg:
                              (n && n.errorMsg) ||
                              "\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25\uff01",
                          }),
                          e({ risk: !1 }));
                    });
                  }
                );
              });
            }),
            (r.setIsFinancial = function () {
              var e = localStorage.getItem("isFinancial");
              e && 1 * e === 1 && localStorage.setItem("isFinancial", 0);
            }),
            (r.setLoginStatus = function (e) {
              var t = e ? "\u767b\u5f55\u4e2d..." : "\u767b\u5f55";
              (r.isLogin = e), r.setState({ loginBtnText: t });
            }),
            /**
             * 核心登录部分
             */
            (e = {
              screenX: 1349,
              screenY: 339,
            }),
            (t = {
              passwordEncrypt: true,
              publicKey:
                "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDOJ3pYE2cYqdHAnQhd0akAQ6tKiepF6ZCXnYix8HyZJapWm5aeJRmXpWPaH2l+tZzgwOELJLu0BYk6eefWpd79Zm63+cSRdRqhgSv3/Anh4XVjBBewc26KUKMq5MWnEVCyjEDZSzUvCnDiVOl+Uid9tRRr1ZrBMKsXwSgjvge0NwIDAQAB",
            }),
            (r.getLoginParams = function (e, t) {
              var n = Object(Q.b)(),
                a = r.state,
                o = a.username,
                i = a.password,
                c = a.verificationCode,
                s = a.sign,
                l = (e && e.screenX) || "",
                u = (e && e.screenY) || "",
                f = {
                  username: o,
                  password: Object(re.b)(i, t),
                  passwordEncrypt: t.passwordEncrypt,
                  verificationCode: c,
                  mobileVerifyCode: c,
                  sign: s,
                  touchevent: {
                    mobileInputEditStartTime: r.state.mobileInputEditStartTime,
                    mobileInputEditFinishTime:
                      r.state.mobileInputEditFinishTime,
                    mobileInputKeyboardEvent: r.state.mobileInputKeyboardEvent,
                    passwordInputEditStartTime:
                      r.state.passwordInputEditStartTime,
                    passwordInputEditFinishTime:
                      r.state.passwordInputEditFinishTime,
                    passwordInputKeyboardEvent:
                      r.state.passwordInputKeyboardEvent,
                    captureInputEditStartTime:
                      r.state.captureInputEditStartTime,
                    captureInputEditFinishTime:
                      r.state.captureInputEditFinishTime,
                    captureInputKeyboardEvent:
                      r.state.captureInputKeyboardEvent,
                    loginButtonTouchPoint: l + "," + u,
                    loginButtonClickTime: n,
                  },
                  fingerprint: Object(re.e)(),
                };
              return (
                r.state.captchaType && (f.captchaType = r.state.captchaType), f
              );
            }),
            (r.verifyParams = function () {
              var e = r.state,
                t = e.username,
                n = e.password,
                a = null;
              return (
                t
                  ? n || (a = "\u8bf7\u8f93\u5165\u5bc6\u7801\uff01")
                  : (a = "\u8bf7\u8f93\u5165\u8d26\u53f7\uff01"),
                a && r.setState({ errorMsg: a }),
                !a
              );
            }),
            (r.inputChangeHandle = function (e) {
              return function (t) {
                ("verifyCode" === e && t.length > 6) || r.setValue(e, t);
              };
            }),
            (r.inputTimeHandle = function (e) {
              return function () {
                var t = Object(Q.b)();
                r.setValue(e, t);
              };
            }),
            (r.inputKeyboardHandle = function (e) {
              return function (t) {
                var n = "".concat(e, "InputEditStartTime"),
                  a = "".concat(e, "InputKeyboardEvent"),
                  o = "".concat(e, "InputKeyboardEventList"),
                  i = r.store[o],
                  c = Object(Q.b)();
                i.push({ time: c, keyCode: t.keyCode }),
                  (i = i.filter(function (e) {
                    return null !== e.keyCode && void 0 !== e.keyCode;
                  })),
                  (r.store[o] = i),
                  r.setKeyboardEvent(r.state[n], i, a);
              };
            }),
            (r.setKeyboardEvent = function (e, t, n) {
              for (
                var a = "", o = 0, i = 0, c = 0, s = "", l = 0;
                l < t.length;
                l++
              )
                9 === t[l].keyCode
                  ? (o = 1)
                  : 17 === t[l].keyCode || 91 === t[l].keyCode
                  ? (i = 1)
                  : 86 === t[l].keyCode && (c = 1),
                  (a += 0 === l ? t[l].time - e : t[l].time - t[l - 1].time),
                  l < t.length - 1 && (a += "-");
              s += o + "|" + i + "|" + c + "|" + a;
              var u = {};
              (u[n] = s), r.setState(u);
            }),
            (r.cloneState = function () {
              return JSON.parse(JSON.stringify(r.state));
            }),
            (r.setValue = function (e, t) {
              r.setState(Object(g.a)({}, e, t));
            }),
            (r.setLoginState = function () {
              var e;
              return (e = r).setState.apply(e, arguments);
            }),
            (r.state = {
              username: "",
              password: "",
              verifyCode: "",
              verificationCode: "",
              mobileInputEditFinishTime: "",
              passwordInputEditFinishTime: "",
              captureInputEditFinishTime: "",
              mobileInputEditStartTime: "",
              passwordInputEditStartTime: "",
              captureInputEditStartTime: "",
              mobileInputKeyboardEvent: "",
              passwordInputKeyboardEvent: "",
              captureInputKeyboardEvent: "",
              loginBtnText: "\u767b\u5f55",
              captChaCodeUrl: "",
              sign: "",
              captchaType: "",
              resetPassword: !1,
              errorMsg: "",
              bindPhoneVisible: !1,
              verifyPhoneVisible: !1,
              loginVisible: !0,
              mobile: "",
              mobileText: "",
              platform: r.getPlatformType(),
              liveLoginType: r.getLiveLoginType(),
              riskControlFp: "",
            }),
            (r.store = {
              mobileInputKeyboardEventList: [],
              passwordInputKeyboardEventList: [],
              captureInputKeyboardEventList: [],
            }),
            (r.publicKeyPromise = Object(re.f)()),
            (r.authTipsCount = 0),
            (r.riskControlFp = ""),
            r.initLogin(),
            r
          );
        }

        return (
          Object(r.a)(n, [
            {
              key: "getChildContext",
              value: function () {
                return {
                  loginApi: this.getLoginApi(),
                  loginState: this.cloneState(),
                };
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                this.initStorage(),
                  this.riskControlFingerAdapter(
                    re.a.DIDMOUNT_ENUM,
                    function (t) {
                      return (e.riskControlFp = t);
                    },
                    void 0
                  );
              },
            },
            {
              key: "limitLoginCheck",
              value: function (e, t) {
                var n = this;
                return new Promise(function (a) {
                  if (e && 2 === e.loginLimitStatus)
                    var r = C.a.alert({
                      content: l.a.createElement(J, {
                        identityVerifyURL: e.identityVerifyURL,
                        maskMobile: e.maskMobile,
                        loginLimitEffectiveTime: e.loginLimitEffectiveTime,
                        title: t,
                      }),
                      logo: "warning-circle_filled",
                      okText: "\u5df2\u5b8c\u6210\u8ba4\u8bc1",
                      closeText: "\u6682\u4e0d\u8ba4\u8bc1",
                      onOk: function () {
                        var t;
                        return y.a.async(
                          function (o) {
                            for (;;)
                              switch ((o.prev = o.next)) {
                                case 0:
                                  return (
                                    (o.prev = 0),
                                    (o.next = 3),
                                    y.a.awrap(
                                      Object(O.b)("/janus/api/identity/status")
                                    )
                                  );
                                case 3:
                                  if (
                                    !(t = o.sent) ||
                                    (0 !== t.identityStatus &&
                                      3 !== t.identityStatus)
                                  ) {
                                    o.next = 8;
                                    break;
                                  }
                                  return (
                                    r.close(),
                                    (o.next = 8),
                                    y.a.awrap(
                                      n.limitLoginCheck(
                                        e,
                                        "\u8ba4\u8bc1\u672a\u5b8c\u6210"
                                      )
                                    )
                                  );
                                case 8:
                                  o.next = 12;
                                  break;
                                case 10:
                                  (o.prev = 10), (o.t0 = o.catch(0));
                                case 12:
                                  a();
                                case 13:
                                case "end":
                                  return o.stop();
                              }
                          },
                          null,
                          null,
                          [[0, 10]],
                          Promise
                        );
                      },
                      onClose: function () {
                        a();
                      },
                    });
                  else a();
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = Object(m.a)(e, ["children"]);
                return l.a.cloneElement(t, n);
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      ie.childContextTypes = { loginApi: w.a.object, loginState: w.a.object };
      var ce = Object(f.e)(ie),
        se = n(205),
        le = n(1061),
        ue = n(256),
        fe =
          (n(811),
          (function () {
            var e = function (t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function (t, n) {
              function a() {
                this.constructor = t;
              }

              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })()),
        pe = "window_app_version_log",
        de = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.windowAppVersion = ""),
              (t.downObsApp = function () {
                var e = new ue.UAParser().getOS(),
                  t = document.createElement("a");
                t.setAttribute("download", "true"),
                  "Windows" === e.name
                    ? t.setAttribute(
                        "href",
                        "https://commoncdn.yangkeduo.com/galerie-go/2020-03-10/3af33d8b-e1e9-4b3b-973c-a9d11ba6322f.exe"
                      )
                    : "Mac OS" === e.name
                    ? t.setAttribute(
                        "href",
                        "https://commoncdn.yangkeduo.com/galerie-go/2020-03-10/FF92D1D1-D442-4D87-9FD9-10549105AECA.dmg"
                      )
                    : k.a.warn(
                        "\u6682\u4e0d\u652f\u6301\u8be5\u7cfb\u7edf\uff0c\u8bf7\u5230obs\u5b98\u7f51\u4e0b\u8f7d\uff01"
                      ),
                  document.body.appendChild(t),
                  t.click(),
                  t.remove();
              }),
              (t.downLiveTutorial = function () {
                S.b.open(
                  "https://mms.pinduoduo.com/other/help/detail/195/2844"
                );
              }),
              (t.downWindows = function () {
                Object(se.c)({
                  page_sn: "10279",
                  op: "click",
                  page_el_sn: "95418",
                }),
                  t.winUrlPromise &&
                    t.winUrlPromise.then(function (e) {
                      e
                        ? S.b.open(e)
                        : k.a.warn(
                            "\u6682\u65f6\u672a\u83b7\u53d6\u5230\u4e0b\u8f7d\u5730\u5740, \u8bf7\u5237\u65b0\u4e86\u91cd\u8bd5"
                          ),
                        t.windowAppVersion &&
                          localStorage.setItem(pe, t.windowAppVersion);
                    });
              }),
              (t.downAppMouseEnter = function () {
                Object(se.c)({
                  page_sn: "10279",
                  op: "click",
                  page_el_sn: "95589",
                });
              }),
              (t.getAppVersionInfo = function () {
                t.winUrlPromise = Object(O.b)("/earth/api/pack/queryPackList")
                  .then(function (e) {
                    var n = (e.packList || []).filter(function (e) {
                      return 3 === e.type;
                    })[0];
                    if (n) {
                      try {
                        var a = localStorage.getItem(pe);
                        a !== n.version &&
                          Object(Q.b)() - n.updatedAt <= 1728e5 &&
                          (t.windowAppVersion = n.version);
                      } catch (r) {
                        Object(re.o)(r);
                      }
                      return n.url;
                    }
                  })
                  .catch(function () {});
              }),
              t
            );
          }

          return (
            fe(t, e),
            (t.prototype.componentDidMount = function () {
              this.getAppVersionInfo();
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n = this.props.platform;
              return (
                "live" === (void 0 === n ? "" : n)
                  ? ((e = l.a.createElement(
                      "div",
                      {
                        className: "info-footer-btn-item",
                        onClick: this.downObsApp,
                      },
                      l.a.createElement(
                        "div",
                        { className: "download-tools" },
                        "obs\u76f4\u64ad\u5de5\u5177\u4e0b\u8f7d"
                      )
                    )),
                    (t = l.a.createElement(
                      "div",
                      {
                        className: "info-footer-btn-item",
                        onClick: this.downLiveTutorial,
                      },
                      l.a.createElement(
                        "div",
                        { className: "userbook" },
                        "\u591a\u591a\u76f4\u64ad\u4f7f\u7528\u6559\u7a0b"
                      )
                    )))
                  : ((e = l.a.createElement(
                      "div",
                      {
                        className: "info-footer-btn-item item-content1",
                        onMouseEnter: this.downAppMouseEnter,
                      },
                      l.a.createElement(
                        "div",
                        { className: "download-app" },
                        "\u624b\u673a\u7248"
                      ),
                      l.a.createElement(
                        "div",
                        { className: "info-footer-btn-app-down" },
                        l.a.createElement("div", {
                          className: "info-footer-btn-app-down-arrow ",
                        }),
                        l.a.createElement("img", {
                          className: "info-footer-btn-app-down-img",
                          src:
                            "//t16img.yangkeduo.com/mms_static/9cec02b3933714b9d5b6daa439391159.png",
                          alt: "",
                        }),
                        l.a.createElement(
                          "div",
                          { className: "info-footer-btn-app-down-text" },
                          "\u626b\u7801\u4e0b\u8f7d"
                        )
                      )
                    )),
                    (t = l.a.createElement(
                      "div",
                      {
                        className: "info-footer-btn-item",
                        onClick: this.downWindows,
                      },
                      l.a.createElement(
                        "div",
                        { className: "download-pc" },
                        "PC\u7248"
                      )
                    ))),
                l.a.createElement("div", { className: "info-footer-btn" }, e, t)
              );
            }),
            t
          );
        })(l.a.Component);
      n(812);

      function me(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var ge = n(813),
        he = [
          {
            url: "https://ims.pinduoduo.com/plus",
            name: "\u5546\u5bb6\u5165\u9a7b",
            checkLogin: !1,
            page_el_sn: 88372,
          },
          {
            url: "https://pifa.pinduoduo.com/?sn=84147",
            name: "\u6279\u53d1\u91c7\u8d2d",
            checkLogin: !1,
            page_sn: 11528,
            page_el_sn: 84147,
          },
          {
            url: "https://open.pinduoduo.com/application/home",
            name: "\u5f00\u653e\u5e73\u53f0",
            checkLogin: !1,
          },
          {
            url: "https://fuwu.pinduoduo.com/service-market/",
            name: "\u670d\u52a1\u5e02\u573a",
            checkLogin: !1,
          },
          {
            url: "https://live.pinduoduo.com/login",
            name: "\u591a\u591a\u76f4\u64ad",
            checkLogin: !1,
          },
          {
            url: "/other/help",
            name: "\u591a\u591a\u5927\u5b66",
            checkLogin: !1,
            page_el_sn: 98146,
          },
          {
            url: "https://shuyuan.pinduoduo.com/",
            name: "\u8425\u9500\u4e66\u9662",
            checkLogin: !1,
          },
          {
            url: "/bbs/home/hotTopicsList",
            name: "\u5546\u5bb6\u793e\u533a",
            checkLogin: !0,
            platform: "community",
            page_el_sn: 98143,
          },
          {
            url: "/other/helpcenter",
            name: "\u5e2e\u52a9\u4e2d\u5fc3",
            checkLogin: !1,
            page_el_sn: 98145,
          },
          {
            url: "/other/rule",
            name: "\u89c4\u5219\u4e2d\u5fc3",
            checkLogin: !0,
            platform: "rule",
            page_el_sn: 98144,
          },
          {
            url: "/other/report",
            name: "\u5ec9\u6b63\u4e3e\u62a5",
            checkLogin: !0,
            platform: "jubao",
            page_el_sn: 88373,
          },
        ],
        ve = (function (e) {
          Object(o.a)(n, e);
          var t = me(n);

          function n() {
            var e;
            Object(a.a)(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(o))).policeGo = function () {
                S.b.open(
                  "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502000392"
                );
              }),
              (e.replaceRedirectUrl = function (t) {
                var n = V.a.parse(window.location.search || "");
                n.redirectUrl = e.addChannelParams(t);
                var a = "/login?".concat(V.a.stringify(n));
                window.history && window.history.pushState
                  ? window.history.pushState({}, "", a)
                  : (window.location.href = a);
              }),
              (e.goToCustomizedLogin = function (e) {
                var t = V.a.parse(window.location.search || "");
                (t.platform = e.platform),
                  (t.redirectUrl = e.url),
                  S.b.open("/login?".concat(V.a.stringify(t)));
              }),
              (e.linkClikHandle = function (t) {
                return function () {
                  var n;
                  return y.a.async(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              (t.page_el_sn &&
                                Object(se.c)({
                                  page_sn: t.page_sn || "10279",
                                  op: "click",
                                  page_el_sn: t.page_el_sn,
                                }),
                              !t.checkLogin)
                            ) {
                              a.next = 8;
                              break;
                            }
                            return (
                              (a.next = 4),
                              y.a.awrap(Object(O.a)("/janus/api/checkLogin"))
                            );
                          case 4:
                            (n = a.sent) && n.login
                              ? S.b.open(e.addChannelParams(t))
                              : e.goToCustomizedLogin(t),
                              (a.next = 9);
                            break;
                          case 8:
                            S.b.open(e.addChannelParams(t));
                          case 9:
                          case "end":
                            return a.stop();
                        }
                    },
                    null,
                    null,
                    null,
                    Promise
                  );
                };
              }),
              (e.addChannelParams = function (e) {
                return (
                  e.url +
                  (e.url.indexOf("?") > -1 ? "&" : "?") +
                  "channel=mmslogin"
                );
              }),
              e
            );
          }

          return (
            Object(r.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return l.a.createElement(
                    "section",
                    { className: "login-footer" },
                    l.a.createElement(
                      "div",
                      { className: "footer-tab" },
                      he.map(function (t, n) {
                        return l.a.createElement(
                          "div",
                          {
                            key: n,
                            className: "link-text",
                            onClick: e.linkClikHandle(t),
                          },
                          t.name
                        );
                      }),
                      l.a.createElement(de, { platform: this.props.platform })
                    ),
                    l.a.createElement(
                      "div",
                      { className: "login-copyright" },
                      "Copyright 2015-2021 pinduoduo.com \u7248\u6743\u6240\u6709 (\u589e\u503c\u7535\u4fe1\u4e1a\u52a1\u7ecf\u8425\u8bb8\u53ef\u8bc1\uff1a\u6caaB2-20170215)",
                      l.a.createElement(
                        "div",
                        { className: "login-copyright-police" },
                        l.a.createElement("img", {
                          src: ge,
                          className: "police-img",
                        }),
                        l.a.createElement(
                          "span",
                          {
                            onClick: this.policeGo,
                            style: { cursor: "pointer" },
                          },
                          "\u6caa\u516c\u7f51\u5b89\u5907 31010502000392\u53f7"
                        ),
                        l.a.createElement(le.a, {
                          type: "vertical",
                          style: { margin: "0 6px" },
                        }),
                        l.a.createElement(
                          "span",
                          null,
                          "\u6caaICP\u590715010535\u53f7-13"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component);
      n(814);

      function be(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var ye = (function (e) {
          Object(o.a)(n, e);
          var t = be(n);

          function n() {
            var e;
            Object(a.a)(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((e = t.call.apply(
                t,
                [this].concat(o)
              )).downloadApp = function () {
                Object(se.c)({
                  page_sn: "10279",
                  page_el_sn: "95589",
                  op: "click",
                }),
                  S.b.open("/other/download_app");
              }),
              e
            );
          }

          return (
            Object(r.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = l.a.createElement(
                    "div",
                    { className: "login-header-logo" },
                    l.a.createElement("img", {
                      src:
                        "//funimg.pddpic.com/msfe/2020-07-23/a9c5a0f1-08ac-493a-ba13-42288db48b84.png",
                      alt: "\u5546\u5bb6\u540e\u53f0",
                    })
                  );
                  return l.a.createElement(
                    "section",
                    { style: { minWidth: "800px" } },
                    l.a.createElement("div", { className: "login-header" }, e)
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        Ee = n(1060),
        we =
          (n(815),
          {
            dmp: n(816),
            shuyuan:
              "//funimg.pddpic.com/msfe/2020-07-24/66d0fb88-1770-49d7-9045-f390ea7f0d19.jpg",
            live: n(817),
            wholesale: n(818),
            fuwu: n(819),
            jubao:
              "//funimg.pddpic.com/msfe/2020-07-23/57696d6b-0988-44a6-bcd1-3bd59fe7dbd0.png",
            community: n(820),
            rule: n(821),
            logistics: n(822),
            default:
              "//funimg.pddpic.com/msfe/2020-07-23/3ece0c8d-80cd-4051-a5ee-3753740c7a2e.png",
          });
      var Oe = function (e) {
          var t = e.platform,
            n = e.children;
          return l.a.createElement(
            "div",
            { className: "login-center" },
            l.a.createElement(ye, { platform: t }),
            l.a.createElement(
              "section",
              { className: "login-content " + t },
              l.a.createElement(
                "div",
                { className: "login-viewport" },
                l.a.createElement(Ee.a, {
                  src: we[t] || we.default,
                  className: "login-img",
                  setImgStr: "?imageMogr2/thumbnail/!10p",
                  isNeedOriginal: !0,
                }),
                l.a.createElement("div", { className: "login-info-section" }, n)
              )
            ),
            l.a.createElement(ve, { platform: t })
          );
        },
        ke =
          (n(823),
          (function () {
            var e = function (t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function (t, n) {
              function a() {
                this.constructor = t;
              }

              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })()),
        Ce = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n.getStyle = function (e) {
              return n.state.tab === e ? { color: "#FA2A31" } : {};
            }),
              (n.qrcodeClick = function () {
                n.setState({ tab: 0 });
              }),
              (n.switchTab = function (e) {
                void 0 === e && (e = 0), n.setState({ tab: e });
              }),
              (n.handleLiveLoginTypeClick = function () {
                var e = Number(!n.context.loginState.liveLoginType);
                e && n.setState({ tab: 1 }),
                  n.context.loginApi.setValue("liveLoginType", e);
              });
            var a = V.a.parse(window.location.search),
              r = a.tab,
              o = void 0 === r ? 0 : r,
              i = a.liveLoginType,
              c = void 0 === i ? 0 : i,
              s = a.platform;
            (o = Number(o)), (c = Number(c));
            var l = "live" === s && 1 === c;
            return (n.state = { tab: l ? 1 : o }), n;
          }

          return (
            ke(t, e),
            (t.prototype.render = function () {
              var e,
                t,
                n = this,
                a = this.context.loginState,
                r = a.liveLoginType,
                o = a.errorMsg ? { marginTop: 28 } : {},
                i = l.a.Children.map(this.props.children, function (e) {
                  return l.a.cloneElement(e, {
                    styleS: o,
                    tab: n.state.tab,
                    switchTab: n.switchTab,
                  });
                }),
                c = l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(
                    "div",
                    {
                      className: "tab-item",
                      onClick: this.qrcodeClick,
                      style: this.getStyle(0),
                    },
                    "\u626b\u7801\u767b\u5f55"
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: "tab-item last-item",
                      onClick: function () {
                        return n.setState({ tab: 1 });
                      },
                      style: this.getStyle(1),
                    },
                    "\u8d26\u6237\u767b\u5f55"
                  )
                );
              return (
                "live" === a.platform
                  ? ((e = l.a.createElement(
                      "div",
                      { className: "right-top-button" },
                      l.a.createElement(
                        j.a,
                        {
                          type: "textPrimary",
                          size: "small",
                          onClick: this.handleLiveLoginTypeClick,
                        },
                        0 === r
                          ? "\u5916\u5305\u767b\u5f55"
                          : "\u5546\u5bb6\u767b\u5f55"
                      )
                    )),
                    (t =
                      0 === r
                        ? c
                        : l.a.createElement(
                            "div",
                            {
                              className: "tab-item",
                              style: { color: "#FA2A31" },
                            },
                            "\u5916\u5305\u767b\u5f55"
                          )))
                  : (t = c),
                l.a.createElement(
                  Oe,
                  { platform: a.platform },
                  l.a.createElement(
                    "div",
                    { className: "info-part" },
                    l.a.createElement(
                      "div",
                      { className: "login-tab" },
                      l.a.createElement("div", { className: "tab-operate" }, t),
                      e
                    ),
                    i
                  )
                )
              );
            }),
            (t.contextTypes = { loginApi: w.a.object, loginState: w.a.object }),
            t
          );
        })(l.a.Component),
        je = Object(f.e)(Ce),
        xe = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function a() {
              this.constructor = t;
            }

            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((a.prototype = n.prototype), new a()));
          };
        })(),
        Se = function () {
          return (Se =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Ne = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }

          return (
            xe(t, e),
            (t.prototype.render = function () {
              return l.a.createElement(
                ce,
                null,
                l.a.createElement(je, Se({}, this.props))
              );
            }),
            t
          );
        })(l.a.Component),
        Pe = (n(824), n(620)),
        Te = n(24);

      function Me(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Ie = (function (e) {
        Object(o.a)(n, e);
        var t = Me(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this.context,
                  t = e.loginApi,
                  n = e.loginState.username;
                return l.a.createElement(
                  Pe.a,
                  Object.assign(
                    {
                      placeholder:
                        "\u8bf7\u8f93\u5165\u8d26\u6237\u540d/\u624b\u673a\u53f7",
                      onChange: t.userNameChangeHandle,
                      onFocus: t.userNameFocusHandle,
                      onBlur: t.userNameBlurHandle,
                      onKeyDown: t.userNameKeyboardHandle,
                      value: n,
                      id: "usernameId",
                      size: "large",
                      prefix: l.a.createElement(Te.a, {
                        type: "user_filled",
                        style: { fontSize: 16, color: "#999" },
                      }),
                    },
                    this.props
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      Ie.contextTypes = { loginApi: w.a.object, loginState: w.a.object };
      var Re = Ie;

      function Ae(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var _e = (function (e) {
        Object(o.a)(n, e);
        var t = Ae(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this.context,
                  t = e.loginApi,
                  n = e.loginState.password;
                return l.a.createElement(
                  Pe.a,
                  Object.assign(
                    {
                      type: "password",
                      placeholder: "\u8bf7\u8f93\u5165\u5bc6\u7801",
                      onChange: t.passwordChangeHandle,
                      onFocus: t.passwordFocusHandle,
                      onBlur: t.passwordBlurHandle,
                      onKeyDown: t.passwordKeyboardHandle,
                      value: n,
                      onKeyUp: t.enterLogin,
                      id: "passwordId",
                      size: "large",
                      prefix: l.a.createElement(Te.a, {
                        type: "unlock_filled",
                        style: { fontSize: 16, color: "#999" },
                      }),
                    },
                    this.props
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      _e.contextTypes = { loginApi: w.a.object, loginState: w.a.object };
      var Le = _e;

      function He(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Be = (function (e) {
        Object(o.a)(n, e);
        var t = He(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this.context,
                  t = e.loginApi,
                  n = e.loginState.loginBtnText;
                return l.a.createElement(
                  j.a,
                  Object.assign({ onClick: t.loginHandle }, this.props, {
                    width: "100%",
                    size: "large",
                    margin: "24px 0px 0px",
                    type: "danger",
                  }),
                  n
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      Be.contextTypes = { loginApi: w.a.object, loginState: w.a.object };
      var Ue = Be;
      n(825);

      function Ve() {
        return l.a.createElement(
          "section",
          { className: "download-note" },
          l.a.createElement(
            "p",
            { className: "note-line1" },
            "\u6253\u5f00\u5546\u5bb6\u7248APP\u626b\u4e00\u626b\u767b\u5f55"
          )
        );
      }

      function Fe() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return l.a.createElement(
          "section",
          {
            className: "common-container error-code-".concat(e.errorCode || ""),
          },
          l.a.createElement("img", {
            className: "no-bind-phone-picture",
            src:
              e.src ||
              "//funimg.pddpic.com/msfe/2020-07-23/026a67cb-8afb-497d-8fa5-a2335bcf81db.png",
            alt: "\u672a\u7ed1\u5b9a\u624b\u673a\u53f7",
          }),
          l.a.createElement(
            "div",
            { className: "common-note no-bind-phone-note" },
            l.a.createElement(
              "div",
              { className: "tip1" },
              e.title || "\u60a8\u672a\u7ed1\u5b9a\u8fc7\u624b\u673a\u53f7"
            ),
            l.a.createElement(
              "div",
              { className: "tip2" },
              e.msg ||
                "\u8bf7\u8054\u7cfb\u4e3b\u8d26\u53f7\u914d\u7f6e\u540e\u91cd\u65b0\u767b\u5f55"
            ),
            e.btn
              ? e.btn
              : l.a.createElement(
                  j.a,
                  {
                    type: "danger",
                    width: 88,
                    onClick: function () {
                      return window.location.reload();
                    },
                  },
                  "\u786e\u8ba4"
                )
          )
        );
      }

      function De(e) {
        return l.a.createElement(
          "div",
          { className: "scan-mask" },
          l.a.createElement("div", { className: "qr-mask" }),
          l.a.createElement(
            "div",
            { className: "common-note qr-scan-note" },
            l.a.createElement(
              "p",
              null,
              {
                "-2": "\u5df2\u53d6\u6d88",
                "-1": "\u4e8c\u7ef4\u7801\u5df2\u5931\u6548",
              }[e.codeStatus]
            ),
            l.a.createElement(
              j.a,
              {
                type: "danger",
                width: "88px",
                onClick: e.reflesh,
              },
              "\u70b9\u51fb\u5237\u65b0"
            )
          )
        );
      }

      function ze(e) {
        return l.a.createElement(
          "section",
          { className: "scan-success-container" },
          l.a.createElement(
            "div",
            { className: "scan-success" },
            l.a.createElement(z.a, {
              value: e.qrcodeUri,
              size: 120,
            }),
            l.a.createElement("div", { className: "qr-mask" }),
            l.a.createElement(
              "div",
              { className: "check-icon" },
              l.a.createElement("img", {
                src:
                  "//funimg.pddpic.com/msfe/2020-07-24/1105a824-5a1f-46ea-8e95-45ad5d359f91.png",
              })
            )
          ),
          l.a.createElement(
            "div",
            { className: "scan-success-sub-note" },
            l.a.createElement(
              "div",
              { className: "tip1" },
              "\u626b\u7801\u6210\u529f"
            ),
            l.a.createElement(
              "div",
              { className: "tip2" },
              "\u8bf7\u5728\u624b\u673a\u4e0a\u786e\u8ba4\u767b\u5f55"
            )
          )
        );
      }

      function Ke(e) {
        var t =
            2000016 === e.errorCode
              ? {
                  msg:
                    "\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u7684\u8d26\u53f7\u5f02\u5e38\uff0c\u5b58\u5728\u76d7\u53f7\u98ce\u9669",
                  link: "/mallcenter/resetPwd/index",
                }
              : {
                  msg:
                    "\u5bc6\u7801\u5f3a\u5ea6\u8fc7\u4f4e\uff0c\u5b58\u5728\u76d7\u53f7\u98ce\u9669",
                  link: "/mallcenter/changeAccountInfo/weakPwdEdit",
                },
          n = t.msg,
          a = t.link;
        return l.a.createElement(
          "section",
          { className: "common-container" },
          l.a.createElement(
            "div",
            { className: "no-bind-phone" },
            l.a.createElement(
              "div",
              { className: "lowintensity" },
              l.a.createElement("img", {
                className: "lowintensity-picture",
                src:
                  "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                alt: "\u672a\u7ed1\u5b9a\u624b\u673a\u53f7",
              }),
              l.a.createElement(
                "div",
                { className: "lowintensity-note" },
                l.a.createElement("div", { className: "tip1" }, n),
                l.a.createElement(
                  "div",
                  { className: "tip2" },
                  "\u5efa\u8bae\u60a8\u7acb\u5373\u4fee\u6539\u5bc6\u7801"
                )
              )
            )
          ),
          l.a.createElement(
            "div",
            {
              style: {
                textAlign: "center",
                marginBottom: -14,
              },
            },
            l.a.createElement(
              j.a,
              {
                type: "danger",
                onClick: function () {
                  return (window.location = a);
                },
              },
              "\u4fee\u6539\u5bc6\u7801"
            )
          )
        );
      }

      n(683), n(826);

      function qe(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Ge = (function (e) {
        Object(o.a)(n, e);
        var t = qe(n);

        function n(e) {
          var r;
          return (
            Object(a.a)(this, n),
            ((r = t.call(this, e)).getPicCode = function () {
              var e = r.props,
                t = e.sceneId,
                n = e.url;
              Object(O.b)(n, { sceneId: t })
                .then(function (e) {
                  r.setState({ codeUlr: e.picture, sign: e.sign });
                })
                .catch(function (e) {
                  e && e.errorMsg && k.a.warn(e.errorMsg);
                });
            }),
            (r.verifyCodeChangeHandle = function (e) {
              r.setState({ verifyCode: e });
            }),
            (r.onOk = function () {
              if (!r.state.verifyCode.trim())
                return k.a.warn("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801!"), !1;
              var e = r.props.onSuccess;
              "function" === typeof e &&
                e({
                  verifyCode: r.state.verifyCode,
                  sign: r.state.sign,
                  userAgent: navigator.userAgent,
                }).then(
                  function () {},
                  function () {
                    r.getPicCode();
                  }
                );
            }),
            (r.onNo = function () {
              var e = r.props.onCancle;
              "function" === typeof e && e();
            }),
            (r.state = { codeUlr: "", sign: "", verifyCode: "" }),
            r
          );
        }

        return (
          Object(r.a)(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.visible && this.getPicCode();
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (
                  e.visible !== this.props.visible &&
                    e.visible &&
                    (this.setState({ verifyCode: "" }), this.getPicCode()),
                  !0
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.state,
                  t = e.verifyCode,
                  n = e.codeUlr,
                  a = this.props.visible;
                return l.a.createElement(
                  C.a,
                  {
                    visible: a,
                    onOk: this.onOk,
                    onClose: this.onNo,
                    showCloseIcon: !1,
                    header: null,
                    width: 398,
                  },
                  l.a.createElement(
                    "div",
                    { className: "login-modal" },
                    l.a.createElement(
                      "div",
                      { className: "modal-content" },
                      l.a.createElement(
                        "p",
                        { className: "modal-text" },
                        "\u8bf7\u5148\u8f93\u5165\u56fe\u5f62\u9a8c\u8bc1\u7801"
                      ),
                      l.a.createElement(
                        "div",
                        { className: "modal-operate" },
                        l.a.createElement(Pe.a, {
                          placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                          onChange: this.verifyCodeChangeHandle,
                          value: t,
                          size: "large",
                          width: 160,
                          height: 36,
                        }),
                        n
                          ? l.a.createElement("img", {
                              onClick: this.getPicCode,
                              className: "modal-code",
                              src: n,
                            })
                          : null
                      )
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      n(827);

      function Qe(e) {
        var t = e.msg,
          n = void 0 === t ? "" : t;
        return l.a.createElement(
          "div",
          { className: "info-danger-container" },
          l.a.createElement(
            "div",
            { className: "info-error-icon" },
            l.a.createElement(Te.a, {
              type: "warning-circle_filled",
              style: { fontSize: "12px" },
            })
          ),
          l.a.createElement("span", { className: "info-error-text" }, n)
        );
      }

      function We(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Je = [
          {
            title:
              "\u4e3a\u4e86\u60a8\u7684\u8d26\u53f7\u5b89\u5168\uff0c\u8bf7\u9a8c\u8bc1\u624b\u673a\u53f7\u540e\u7ee7\u7eed\u767b\u5f55",
            footer: "\u65e0\u6cd5\u63a5\u6536\u5230\u9a8c\u8bc1\u7801\uff1f",
            onClick: function () {
              return (window.location =
                "/mallcenter/changeAccountInfo/forgetMobile?type=3");
            },
            hasMore: !1,
          },
          {
            title:
              "\u4e3a\u4fdd\u969c\u60a8\u8d26\u53f7\u7684\u5b89\u5168\uff0c\u8bf7\u9a8c\u8bc1\u624b\u673a\u540e\u7ee7\u7eed\u767b\u5f55",
            footer: "\u65e0\u6cd5\u63a5\u6536\u5230\u9a8c\u8bc1\u7801\uff1f",
            onClick: function () {
              return (window.location =
                "/mallcenter/changeAccountInfo/forgetMobile?type=3");
            },
            hasMore: !1,
          },
          {
            title:
              "\u8bf7\u9a8c\u8bc1\u624b\u673a\u53f7\u540e\u7ee7\u7eed\u767b\u5f55",
            footer:
              "\u624b\u673a\u53f7\u6709\u8bef\uff0c\u8bf7\u8054\u7cfb\u4e3b\u8d26\u53f7",
            hasMore: !1,
            onClick: function () {},
          },
          {
            title:
              "\u8bf7\u8f93\u5165\u5e97\u94fa\u7ed1\u5b9a\u624b\u673a\u53f7",
            footer: "\u8054\u7cfb\u5ba2\u670d",
            hasMore: !0,
            onClick: function () {},
          },
        ],
        Xe = (function (e) {
          Object(o.a)(n, e);
          var t = We(n);

          function n(e) {
            var r;
            return (
              Object(a.a)(this, n),
              ((r = t.call(this, e)).getMessageClickHandle = function () {
                var e = r.props.getMessageHandle,
                  t = r.state.count;
                "function" === typeof e &&
                  t <= 0 &&
                  e().then(
                    function (e) {
                      e && e.risk && r.setState(e), r.disabledMessageClick(60);
                    },
                    function () {}
                  );
              }),
              (r.disabledMessageClick = function (e) {
                60 === e && clearTimeout(r.timer),
                  e < 0 ||
                    (0 !== e ||
                      r.props.messageValue ||
                      r.setState({ tipsShow: !0 }),
                    r.setState({ count: e }),
                    (r.timer = setTimeout(function () {
                      r.disabledMessageClick(e - 1);
                    }, 1e3)));
              }),
              (r.getGetMessageText = function () {
                var e = r.state.count;
                return e > 0
                  ? "\u8fd8\u5269".concat(e, "\u79d2")
                  : "\u83b7\u53d6\u9a8c\u8bc1\u7801";
              }),
              (r.onSuccessHandle = function (e) {
                return (0, r.props.getMessageHandle)(e).then(function () {
                  r.setState({ risk: !1 }), r.disabledMessageClick(60);
                });
              }),
              (r.onCancleHandle = function () {
                r.setState({ risk: !1 });
              }),
              (r.state = {
                count: 0,
                risk: !1,
                url: "/janus/api/getCaptchaCode",
                sceneId: 15,
                tipsShow: !1,
              }),
              r
            );
          }

          return (
            Object(r.a)(n, [
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this.timer);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.codeType,
                    n = e.errorMsg,
                    a = e.disabled,
                    r = e.onMobileChange,
                    o = e.onMessageChange,
                    i = e.messageValue,
                    c = e.mobileValue,
                    s = e.onOk,
                    u = this.state,
                    f = u.risk,
                    p = u.url,
                    d = u.sceneId,
                    m = u.tipsShow;
                  return l.a.createElement(
                    "section",
                    { className: "verify-phone-container" },
                    l.a.createElement(
                      "div",
                      { className: "vertify-title" },
                      l.a.createElement(
                        "div",
                        { className: "vertify-subtitle" },
                        Je[t].title,
                        " "
                      ),
                      l.a.createElement(
                        "div",
                        { className: "verify-error-container" },
                        n
                          ? l.a.createElement(
                              "div",
                              { style: { marginTop: 5 } },
                              l.a.createElement(Qe, { msg: n })
                            )
                          : null
                      )
                    ),
                    l.a.createElement(Pe.a, {
                      placeholder:
                        "\u8bf7\u8f93\u5165\u5e97\u94fa\u7ed1\u5b9a\u624b\u673a\u53f7",
                      onChange: r,
                      disabled: a,
                      value: c,
                      size: "large",
                      prefix: l.a.createElement(Te.a, {
                        type: "user_filled",
                        style: { fontSize: 16, color: "#999" },
                      }),
                      margin: "16px 0 0",
                    }),
                    l.a.createElement(
                      "div",
                      { className: "vertify-code" },
                      l.a.createElement(Pe.a, {
                        placeholder:
                          "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
                        onChange: o,
                        value: i,
                        size: "large",
                        prefix: l.a.createElement(Te.a, {
                          type: "certificated_filled",
                          style: { fontSize: 16, color: "#999" },
                        }),
                        suffixDivide: !0,
                        suffix: l.a.createElement(
                          j.a,
                          {
                            type: "textPrimary",
                            onClick: this.getMessageClickHandle,
                            disabled: this.state.count > 0,
                            size: "large",
                          },
                          l.a.createElement(
                            "span",
                            {
                              style: {
                                fontSize: 14,
                                textAlign: "center",
                                display: "inline-block",
                                width: "100%",
                              },
                            },
                            this.getGetMessageText()
                          )
                        ),
                      }),
                      m &&
                        l.a.createElement(
                          "div",
                          { className: "verify-code-tip" },
                          "\u82e5\u957f\u65f6\u95f4\u672a\u6536\u5230\u9a8c\u8bc1\u7801, \u60a8\u53ef\u5c1d\u8bd5APP\u626b\u7801\u767b\u5f55"
                        )
                    ),
                    l.a.createElement(
                      j.a,
                      {
                        type: "danger",
                        width: "100%",
                        size: "large",
                        margin: "24px 0 0",
                        onClick: s,
                      },
                      "\u786e\u8ba4"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "have-no-code" },
                      2 === t
                        ? l.a.createElement(
                            "span",
                            { className: "have-no-code-tip" },
                            "\u624b\u673a\u53f7\u6709\u8bef? \u8bf7\u8054\u7cfb\u4e3b\u8d26\u53f7\u4fee\u6539"
                          )
                        : l.a.createElement(
                            j.a,
                            {
                              type: "textPrimary",
                              size: "small",
                              onClick: Je[t].onClick,
                            },
                            Je[t].footer
                          )
                    ),
                    l.a.createElement(Ge, {
                      visible: f,
                      url: p,
                      sceneId: d,
                      onSuccess: this.onSuccessHandle,
                      onCancle: this.onCancleHandle,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        Ye = n(1062);

      function Ze(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var $e = [
          {
            title:
              "\u4e3a\u4e86\u60a8\u7684\u8d26\u6237\u5b89\u5168\uff0c\u8bf7\u7ed1\u5b9a\u624b\u673a\u53f7",
            footer: "\u8054\u7cfb\u5ba2\u670d",
            hasMore: !0,
          },
        ],
        et = (function (e) {
          Object(o.a)(n, e);
          var t = Ze(n);

          function n(e) {
            var r;
            return (
              Object(a.a)(this, n),
              ((r = t.call(this, e)).getMessageClickHandle = function () {
                var e = r.props.getMessageHandle,
                  t = r.state.count;
                "function" === typeof e &&
                  t <= 0 &&
                  e().then(function (e) {
                    e && e.risk && r.setState(e), r.disabledMessageClick(60);
                  });
              }),
              (r.disabledMessageClick = function (e) {
                60 === e && clearTimeout(r.timer),
                  e < 0 ||
                    (r.setState({ count: e }),
                    (r.timer = setTimeout(function () {
                      r.disabledMessageClick(e - 1);
                    }, 1e3)));
              }),
              (r.getGetMessageText = function () {
                var e = r.state.count;
                return e > 0
                  ? "\u8fd8\u5269".concat(e, "\u79d2")
                  : "\u83b7\u53d6\u9a8c\u8bc1\u7801";
              }),
              (r.onSuccessHandle = function (e) {
                return (0, r.props.getMessageHandle)(e).then(function (e) {
                  r.setState({ risk: !1 }), r.disabledMessageClick(60);
                });
              }),
              (r.onCancleHandle = function () {
                r.setState({ risk: !1 });
              }),
              (r.state = {
                count: 0,
                risk: !1,
                url: "/earth/api/merchant/getCaptchaCode",
                sceneId: 17,
              }),
              r
            );
          }

          return (
            Object(r.a)(n, [
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this.timer);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.errorMsg,
                    n = e.onMobileChange,
                    a = e.onMessageChange,
                    r = e.messageValue,
                    o = e.mobileValue,
                    i = e.onOk,
                    c = this.state,
                    s = c.risk,
                    u = c.count,
                    f = c.url,
                    p = c.sceneId;
                  return l.a.createElement(
                    "section",
                    { className: "verify-phone-container" },
                    l.a.createElement(
                      "div",
                      { className: "vertify-title" },
                      l.a.createElement(
                        "div",
                        { className: "vertify-subtitle" },
                        $e[0].title,
                        " "
                      ),
                      t
                        ? l.a.createElement(
                            "div",
                            { className: "verify-error-container" },
                            l.a.createElement(Qe, { msg: t })
                          )
                        : null
                    ),
                    l.a.createElement(Pe.a, {
                      placeholder:
                        "\u8bf7\u8f93\u5165\u5e97\u94fa\u7ed1\u5b9a\u624b\u673a\u53f7",
                      onChange: n,
                      value: o,
                      size: "large",
                      prefix: l.a.createElement(Te.a, {
                        type: "user_filled",
                        style: { fontSize: 16, color: "#999" },
                      }),
                      margin: "16px 0 0",
                    }),
                    l.a.createElement(
                      "div",
                      { className: "vertify-code" },
                      l.a.createElement(Pe.a, {
                        placeholder:
                          "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
                        onChange: a,
                        value: r,
                        size: "large",
                        prefix: l.a.createElement(Te.a, {
                          type: "certificated_filled",
                          style: { fontSize: 16, color: "#999" },
                        }),
                        suffixDivide: !0,
                        suffix: l.a.createElement(
                          j.a,
                          {
                            type: "textPrimary",
                            onClick: this.getMessageClickHandle,
                            disabled: u > 0,
                            size: "large",
                          },
                          l.a.createElement(
                            "span",
                            {
                              style: {
                                fontSize: 14,
                                textAlign: "center",
                                display: "inline-block",
                                width: "100%",
                              },
                            },
                            this.getGetMessageText()
                          )
                        ),
                      })
                    ),
                    l.a.createElement(
                      j.a,
                      {
                        type: "danger",
                        width: "100%",
                        size: "large",
                        margin: "24px 0 0",
                        onClick: i,
                      },
                      "\u786e\u8ba4"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "have-no-code" },
                      l.a.createElement(
                        "span",
                        { className: "have-no-code-tip" },
                        "\u65e0\u6cd5\u63a5\u6536\u5230\u9a8c\u8bc1\u7801\uff1f"
                      ),
                      l.a.createElement(
                        Ye.a,
                        {
                          placement: "bottom",
                          content: tt,
                        },
                        l.a.createElement("a", null, $e[0].footer)
                      )
                    ),
                    l.a.createElement(Ge, {
                      visible: s,
                      url: f,
                      sceneId: p,
                      onSuccess: this.onSuccessHandle,
                      onCancle: this.onCancleHandle,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        tt = l.a.createElement(
          "div",
          {
            style: {
              lineHeight: "12px",
              width: "250px",
            },
          },
          l.a.createElement("img", {
            src:
              "//imsproductionimg.pddpic.com/f6df4163a022053258588e94da416e39.jpg",
            style: { width: "200px", height: "auto", marginLeft: "25px" },
          }),
          l.a.createElement(
            "p",
            null,
            "\u54a8\u8be2\u7535\u8bdd\uff1a \xa0\xa0021-61730509"
          ),
          l.a.createElement(
            "p",
            null,
            "\u54a8\u8be2\u7535\u8bdd\uff1a \xa0\xa0021-61730507"
          ),
          l.a.createElement(
            "p",
            { style: { lineHeight: "15px" } },
            "\u7cfb\u7edf\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5982\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u626b\u7801\u5173\u6ce8\u516c\u4f17\u53f7\u201c\u62fc\u591a\u591a\u5546\u5bb6\u670d\u52a1\u201d\uff0c\u5e76\u5728\u516c\u4f17\u53f7\u53f3\u4e0b\u89d2\u8054\u7cfb\u6211\u4eec\uff0c\u6211\u4eec\u5c06\u63d0\u4f9b\u4e13\u4eba\u89e3\u51b3\u60a8\u7684\u95ee\u9898\u3002"
          )
        );

      function nt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var at = (function (e) {
        Object(o.a)(n, e);
        var t = nt(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props.visible,
                  n = this.context,
                  a = n.loginApi,
                  r = n.loginState,
                  o = r.resetPassword,
                  i = r.bindPhoneVisible,
                  c = r.loginVisible,
                  s = r.verifyPhoneVisible,
                  u = r.unbindPhone,
                  f = r.platform,
                  p = r.liveLoginType,
                  d = r.errorMsg;
                return (
                  402 === d &&
                    (d = l.a.createElement(
                      "div",
                      { style: { position: "relative" } },
                      "\u8d26\u6237\u5bc6\u7801\u4e0d\u5339\u914d\u3002\u5b50\u8d26\u6237\u8bf7\u7528\u8d26\u6237\u540d\u767b\u5f55\uff08\u4e0d\u652f\u6301\u624b\u673a\u53f7\u767b\u5f55\uff09",
                      l.a.createElement(
                        j.a,
                        {
                          type: "textPrimary",
                          size: "small",
                          onClick: function () {
                            window.location =
                              "/mallcenter/changeAccountInfo/findAccountName/index";
                          },
                        },
                        "\u5fd8\u8bb0\u8d26\u6237\u540d"
                      )
                    )),
                  (e =
                    "live" === f
                      ? l.a.createElement(
                          "div",
                          { className: "operationBtn" },
                          l.a.createElement(
                            j.a,
                            {
                              type: "textPrimary",
                              onClick: re.k,
                              size: "small",
                            },
                            "\u5207\u6362\u767b\u5f55\u89d2\u8272"
                          )
                        )
                      : "logistics" === f
                      ? l.a.createElement(
                          "div",
                          { className: "operationBtn" },
                          l.a.createElement(
                            j.a,
                            {
                              type: "textPrimary",
                              onClick: function () {
                                return Object(re.l)();
                              },
                              size: "small",
                            },
                            "\u7535\u5b50\u9762\u5355\u8d26\u6237\u767b\u5f55"
                          )
                        )
                      : l.a.createElement(
                          "div",
                          { className: "operationBtn" },
                          "\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f",
                          l.a.createElement(
                            j.a,
                            {
                              type: "textPrimary",
                              size: "small",
                              onClick: a.jumpToRegister,
                            },
                            "\u7acb\u5373\u6ce8\u518c"
                          )
                        )),
                  l.a.createElement(
                    "div",
                    {
                      className: "password-section",
                      style: { display: t ? "" : "none" },
                    },
                    l.a.createElement(
                      "section",
                      null,
                      c
                        ? l.a.createElement(
                            "div",
                            null,
                            l.a.createElement(
                              "div",
                              { className: "info-danger-warn" },
                              d ? l.a.createElement(Qe, { msg: d }) : null
                            ),
                            l.a.createElement(
                              "div",
                              { className: "info-content" },
                              l.a.createElement(Re, { margin: "16px 0 0" }),
                              l.a.createElement(Le, { margin: "24px 0 0" }),
                              l.a.createElement(Ue, null),
                              l.a.createElement(
                                "div",
                                { className: "forget-password" },
                                e,
                                1 !== p
                                  ? l.a.createElement(
                                      j.a,
                                      {
                                        type: "textPrimary",
                                        size: "small",
                                        onClick: function () {
                                          return (window.location =
                                            "/mallcenter/resetPwd/index");
                                        },
                                      },
                                      "\u5fd8\u8bb0\u5bc6\u7801"
                                    )
                                  : ""
                              )
                            )
                          )
                        : null,
                      i
                        ? l.a.createElement(et, {
                            onMessageChange: a.bindMeassageInputHandle,
                            onMobileChange: a.bindPhoneInputHandle,
                            messageValue: r.bindMessage,
                            mobileValue: r.bindPhone,
                            onOk: a.bindPhoneSubmit,
                            getMessageHandle: a.getBindPhoneMessage,
                            errorMsg: r.errorMsg,
                          })
                        : null,
                      s
                        ? l.a.createElement(Xe, {
                            codeType: r.verifyPhoneType || 0,
                            disabled: !0,
                            onMessageChange: a.verifyMessageChangeHandle,
                            messageValue: r.verificationCode,
                            mobileValue: r.mobileText,
                            onOk: a.verifyMessageSubmit,
                            getMessageHandle: a.getVerifyMessageHandle,
                            errorMsg: r.errorMsg,
                          })
                        : null,
                      u ? l.a.createElement(Fe, null) : null,
                      o
                        ? l.a.createElement(Ke, { errorCode: r.errorCode })
                        : null
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      (at.defaultProps = { visible: !0 }),
        (at.contextTypes = { loginApi: w.a.object, loginState: w.a.object });
      var rt = at,
        ot = n(93),
        it = n.n(ot);
      n(828);

      function ct(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var st = [2000008, 2000009, 40029, 5e5, 8000079],
        lt = (function (e) {
          Object(o.a)(i, e);
          var t = ct(i);

          function i(e) {
            var n;
            return (
              Object(a.a)(this, i),
              ((n = t.call(this, e)).getQrcode = function () {
                var e;
                return y.a.async(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            n.setState({ codeStatus: 1 }),
                            (t.next = 3),
                            y.a.awrap(
                              n.context.loginApi.riskControlFingerAdapter(
                                re.a.GET_RISKCONTROL_FP
                              )
                            )
                          );
                        case 3:
                          return (
                            (e = t.sent),
                            t.abrupt(
                              "return",
                              Object(O.b)(
                                "/janus/api/scan/login/qrcode",
                                { fingerprint: Object(re.e)() },
                                { headers: { ETag: e } }
                              )
                                .then(function (e) {
                                  return new Promise(function (t) {
                                    var a = V.a.parse(e.uri);
                                    a && a.data
                                      ? n.setState(
                                          { qrcodeUri: e.uri },
                                          function () {
                                            t((n.token = a.data));
                                          }
                                        )
                                      : n.setState({ codeStatus: 5e5 });
                                  });
                                })
                                .then(n.startFetchStatus)
                                .catch(function () {})
                            )
                          );
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              }),
              (n.startFetchStatus = function (e) {
                var t,
                  a,
                  r = arguments;
                return y.a.async(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (
                            ((t = r.length > 1 && void 0 !== r[1] ? r[1] : 2e3),
                            e)
                          ) {
                            o.next = 3;
                            break;
                          }
                          return o.abrupt("return");
                        case 3:
                          return (
                            (o.next = 5),
                            y.a.awrap(
                              n.context.loginApi.riskControlFingerAdapter(
                                re.a.GET_RISKCONTROL_FP
                              )
                            )
                          );
                        case 5:
                          (a = o.sent),
                            (n.timer = setTimeout(function () {
                              return Object(O.b)(
                                "/janus/api/scan/login/query",
                                {
                                  data: e,
                                  fingerprint: Object(re.e)(),
                                },
                                { headers: { ETag: a } }
                              ).then(
                                function () {
                                  var t,
                                    a,
                                    r = arguments;
                                  return y.a.async(
                                    function (o) {
                                      for (;;)
                                        switch ((o.prev = o.next)) {
                                          case 0:
                                            if (
                                              ((t =
                                                r.length > 0 && void 0 !== r[0]
                                                  ? r[0]
                                                  : {}),
                                              n.token === e)
                                            ) {
                                              o.next = 3;
                                              break;
                                            }
                                            return o.abrupt("return");
                                          case 3:
                                            if (3 !== (a = t.status)) {
                                              o.next = 7;
                                              break;
                                            }
                                            return (
                                              n.context.loginApi.loginSuccessHandle(
                                                t && t.token,
                                                t
                                              ),
                                              o.abrupt("return")
                                            );
                                          case 7:
                                            n.setState({ codeStatus: a }),
                                              [1, 2].indexOf(a) > -1 &&
                                                n.startFetchStatus(e, 2e3);
                                          case 9:
                                          case "end":
                                            return o.stop();
                                        }
                                    },
                                    null,
                                    null,
                                    null,
                                    Promise
                                  );
                                },
                                function (a) {
                                  n.token === e &&
                                    (a && st.indexOf(a.errorCode) > -1
                                      ? n.setState({ codeStatus: a.errorCode })
                                      : a &&
                                        145934 !== a.errorCode &&
                                        (n.startFetchStatus(e, t + 2e3),
                                        console.error(a)));
                                }
                              );
                            }, t));
                        case 7:
                        case "end":
                          return o.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              }),
              (n.getMessage = function (e) {
                var t = {};
                return (
                  40029 === e
                    ? (t = {
                        title:
                          "\u672c\u8d26\u53f7\u5df2\u6210\u529f\u9000\u5e97",
                        msg:
                          "\u60a8\u53ef\u66f4\u6362\u624b\u673a\u53f7\u540e\u518d\u6b21\u5165\u9a7b\uff0c\u671f\u5f85\u4e0e\u60a8\u518d\u4f1a",
                        src:
                          "//funimg.pddpic.com/msfe/2020-07-24/0832135a-30fa-44e4-8e71-f5d1dd183c00.png",
                      })
                    : 2000009 === e
                    ? (t = {
                        title: "\u5e97\u94fa\u65e0\u6cd5\u767b\u5f55",
                        msg:
                          "\u8bf7\u8054\u7cfbdpzx@pinduoduo.com\uff0c\u5e76\u544a\u77e5\u5e97\u94fa\u7f16\u53f7",
                        src:
                          "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                      })
                    : 5e5 === e
                    ? (t = {
                        title:
                          "\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u6240\u5904\u7684\u7f51\u7edc\u73af\u5883\u5f02\u5e38 ",
                        msg:
                          "\u5efa\u8bae\u60a8\u4f7f\u7528\u8d26\u53f7\u548c\u5bc6\u7801\u767b\u5f55",
                        btn: l.a.createElement(
                          j.a,
                          {
                            type: "danger",
                            onClick: function () {
                              n.props.switchTab(1);
                            },
                          },
                          "\u4f7f\u7528\u8d26\u53f7\u548c\u5bc6\u7801\u767b\u5f55"
                        ),
                        src:
                          "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                      })
                    : 8000079 === e &&
                      (t = {
                        title:
                          "\u8d26\u53f7\u56e0\u5b89\u5168\u4fdd\u62a4\u5df2\u88ab\u7981\u6b62\u5728\u7f51\u9875\u7248\u767b\u5f55",
                        msg:
                          "\u6743\u9650\u5c01\u7981\u671f\u95f4\u76f8\u5173\u529f\u80fd\u8bf7\u524d\u5f80windows\u5ba2\u6237\u7aef\u3001App\u6216\u8005\u670d\u52a1\u5e02\u573a\u670d\u52a1\u8fdb\u884c\u64cd\u4f5c",
                        src:
                          "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                        errorCode: 8000079,
                      }),
                  t
                );
              }),
              (n.state = {
                qrcodeUri: "",
                codeStatus: 1,
                userInfo: {},
                riskControlFp: "",
              }),
              (n.updating = !1),
              n
            );
          }

          return (
            Object(r.a)(i, [
              {
                key: "updateUserInfo",
                value: function (e) {
                  var t,
                    n = this;
                  return y.a.async(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!this.updating) {
                              a.next = 2;
                              break;
                            }
                            return a.abrupt("return");
                          case 2:
                            return (
                              (this.updating = !0),
                              (t =
                                !0 === e
                                  ? "fetchUserinfoFromCache"
                                  : "fetchUserinfo"),
                              (a.next = 6),
                              y.a.awrap(
                                this.context.loginApi[t]()
                                  .then(function (e) {
                                    return (
                                      n.setState({ userInfo: e }),
                                      (n.updating = !1),
                                      e
                                    );
                                  })
                                  .catch(function (e) {
                                    n.setState({ userInfo: {} }),
                                      (n.updating = !1);
                                  })
                              )
                            );
                          case 6:
                            return a.abrupt("return", a.sent);
                          case 7:
                          case "end":
                            return a.stop();
                        }
                    },
                    null,
                    this,
                    null,
                    Promise
                  );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.visible && this.getQrcode(),
                    this.updateUserInfo(!0),
                    -1 !== this.props.location.pathname.indexOf("login/sso") &&
                      (document.addEventListener(
                        "visibilitychange",
                        this.updateUserInfo.bind(this)
                      ),
                      window.addEventListener(
                        "focus",
                        this.updateUserInfo.bind(this)
                      ),
                      window.addEventListener(
                        "blur",
                        this.updateUserInfo.bind(this)
                      ));
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  return (
                    e.visible !== this.props.visible && e.visible
                      ? (this.context.loginApi.setValue("errorMsg", ""),
                        this.getQrcode())
                      : e.visible === this.props.visible ||
                        e.visible ||
                        (this.token = ""),
                    !0
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.timer),
                    (this.token = ""),
                    (this.startFetchStatus = null);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.state,
                    a = t.qrcodeUri,
                    r = t.codeStatus,
                    o = this.props,
                    i = o.visible,
                    c = o.style,
                    s = this.context,
                    u = s.loginState,
                    f = s.loginApi,
                    p = u && u.errorMsg,
                    d = -1 === r || -2 === r,
                    m =
                      ~this.props.location.pathname.indexOf("login/sso") &&
                      this.state.userInfo &&
                      this.state.userInfo.mall,
                    g = it()("scan-login", {
                      "scan-login-sso": m,
                      "qr-code-activity": !d,
                    });
                  return (
                    (e =
                      "live" === u.platform
                        ? l.a.createElement(
                            "div",
                            { className: "operationBtn" },
                            l.a.createElement(
                              j.a,
                              {
                                type: "textPrimary",
                                onClick: re.k,
                                size: "small",
                              },
                              "\u5207\u6362\u767b\u5f55\u89d2\u8272"
                            )
                          )
                        : "logistics" === u.platform
                        ? l.a.createElement(
                            "div",
                            { className: "operationBtn" },
                            l.a.createElement(
                              j.a,
                              {
                                type: "textPrimary",
                                onClick: function () {
                                  return Object(re.l)();
                                },
                                size: "small",
                              },
                              "\u7535\u5b50\u9762\u5355\u8d26\u6237\u767b\u5f55"
                            )
                          )
                        : l.a.createElement(
                            "div",
                            { className: "operationBtn" },
                            "\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f",
                            l.a.createElement(
                              j.a,
                              {
                                type: "textPrimary",
                                size: "small",
                                onClick: f.jumpToRegister,
                              },
                              "\u7acb\u5373\u6ce8\u518c"
                            )
                          )),
                    i
                      ? l.a.createElement(
                          "section",
                          { style: c || {} },
                          [1, -1, -2].indexOf(r) > -1 && !p
                            ? l.a.createElement(
                                "div",
                                { className: "scan-login-container" },
                                l.a.createElement(
                                  "div",
                                  { className: g },
                                  m
                                    ? l.a.createElement(
                                        "div",
                                        {
                                          className: "avatar",
                                          onClick: this.context.loginApi
                                            .loginSuccessHandle,
                                        },
                                        l.a.createElement("img", {
                                          src: T(this.state.userInfo.mall.logo),
                                        }),
                                        l.a.createElement(
                                          "div",
                                          { className: "desc" },
                                          this.state.userInfo.mall.mall_name
                                        ),
                                        l.a.createElement("div", {
                                          className: "avatar-mask",
                                        })
                                      )
                                    : "",
                                  l.a.createElement(
                                    "div",
                                    {
                                      className: m ? "qr-code-sso" : "qr-code",
                                    },
                                    a
                                      ? l.a.createElement(z.a, {
                                          value: a,
                                          size: 120,
                                        })
                                      : null,
                                    d
                                      ? l.a.createElement(De, {
                                          codeStatus: r,
                                          reflesh: this.getQrcode,
                                        })
                                      : null
                                  ),
                                  m
                                    ? ""
                                    : l.a.createElement(
                                        "div",
                                        { className: "qr-note" },
                                        l.a.createElement("img", {
                                          src: n(829),
                                          alt: "",
                                        })
                                      )
                                ),
                                m
                                  ? l.a.createElement(
                                      "div",
                                      { className: "tips" },
                                      l.a.createElement(
                                        "div",
                                        { className: "subtip" },
                                        "\u8bf7\u70b9\u51fb\u5934\u50cf\u76f4\u63a5\u767b\u5f55"
                                      ),
                                      l.a.createElement(
                                        "div",
                                        { className: "subtip" },
                                        "\u6216\u6253\u5f00\u5546\u5bb6\u7248APP\u626b\u4e00\u626b\u767b\u5f55"
                                      )
                                    )
                                  : l.a.createElement(Ve, null),
                                e
                              )
                            : null,
                          st.indexOf(r) > -1
                            ? l.a.createElement(Fe, this.getMessage(r))
                            : null,
                          p
                            ? l.a.createElement(Fe, {
                                title: p,
                                msg: "   ",
                                src:
                                  "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                              })
                            : null,
                          2 === r && !p && a
                            ? l.a.createElement(ze, { qrcode: a })
                            : null
                        )
                      : null
                  );
                },
              },
            ]),
            i
          );
        })(l.a.Component);
      (lt.defaultProps = { visible: !0 }),
        (lt.contextTypes = { loginApi: w.a.object, loginState: w.a.object });
      var ut = Object(f.e)(function (e) {
        return l.a.createElement(lt, e);
      });

      function ft(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var pt = (function (e) {
        Object(o.a)(n, e);
        var t = ft(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                return l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(rt, { visible: 1 === this.props.tab }),
                  l.a.createElement(ut, {
                    style: this.props.styleS,
                    visible: 0 === this.props.tab,
                    switchTab: this.props.switchTab,
                  })
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);

      function dt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var mt = (function (e) {
        Object(o.a)(n, e);
        var t = dt(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                return l.a.createElement(Ne, null, l.a.createElement(pt, null));
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      n(830);
      var gt,
        ht,
        vt = function (e) {
          var t = e.children;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement("div", { className: "login-info-section" }, t)
          );
        },
        bt = (n(831), n(833)),
        yt = n.n(bt),
        Et =
          (n(832),
          function () {
            return (Et =
              Object.assign ||
              function (e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          }),
        wt = function (e, t, n, a) {
          return new (n || (n = Promise))(function (r, o) {
            function i(e) {
              try {
                s(a.next(e));
              } catch (t) {
                o(t);
              }
            }

            function c(e) {
              try {
                s(a.throw(e));
              } catch (t) {
                o(t);
              }
            }

            function s(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, c);
            }

            s((a = a.apply(e, t || [])).next());
          });
        },
        Ot = function (e, t) {
          var n,
            a,
            r,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = {
              next: c(0),
              throw: c(1),
              return: c(2),
            }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );

          function c(o) {
            return function (c) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      a &&
                        (r =
                          2 & o[0]
                            ? a.return
                            : o[0]
                            ? a.throw || ((r = a.return) && r.call(a), 0)
                            : a.next) &&
                        !(r = r.call(a, o[1])).done)
                    )
                      return r;
                    switch (((a = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                      case 0:
                      case 1:
                        r = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (a = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!r || (o[1] > r[0] && o[1] < r[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < r[1]) {
                          (i.label = r[1]), (r = o);
                          break;
                        }
                        if (r && i.label < r[2]) {
                          (i.label = r[2]), i.ops.push(o);
                          break;
                        }
                        r[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = t.call(e, i);
                  } catch (c) {
                    (o = [6, c]), (a = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, c]);
            };
          }
        },
        kt = function (e, t) {
          var n = "function" === typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var a,
            r,
            o = n.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
              i.push(a.value);
          } catch (c) {
            r = { error: c };
          } finally {
            try {
              a && !a.done && (n = o.return) && n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return i;
        };
      !(function (e) {
        (e[(e.NORMAL = 1)] = "NORMAL"),
          (e[(e.SUCCESS = 2)] = "SUCCESS"),
          (e[(e.FAIL = 3)] = "FAIL");
      })(gt || (gt = {})),
        (function (e) {
          (e[(e.NOT_REFRESH = 60022)] = "NOT_REFRESH"),
            (e[(e.SERVER_ERROR = 10001)] = "SERVER_ERROR"),
            (e[(e.DATA_INVALID = -1)] = "DATA_INVALID"),
            (e[(e.HAS_EXPIRED = 60020)] = "HAS_EXPIRED"),
            (e[(e.TOO_FREQUENT = 60016)] = "TOO_FREQUENT");
        })(ht || (ht = {}));
      var Ct = function () {
          var e = kt(Object(s.useState)(!1), 2),
            t = (e[0], e[1]),
            n = kt(Object(s.useState)(gt.NORMAL), 2),
            a = n[0],
            r = n[1],
            o = kt(Object(s.useState)(!0), 2),
            i = o[0],
            c = o[1],
            u = {
              className: "qrCode",
              loopInterval: 3,
              environment: "production",
              width: 140,
              successCallback: function (e) {
                var t = e.ticket;
                return wt(void 0, void 0, void 0, function () {
                  var e;
                  return Ot(this, function (n) {
                    r(gt.SUCCESS),
                      {
                        token_type: 2,
                        out_token: t,
                      },
                      (e =
                        "https://live.pinduoduo.com/login/checker?accessToken=" +
                        t +
                        "&loginType=daren");
                    try {
                      window.pinBridge.callNative(
                        {
                          method: "loginSuccess",
                          url: e,
                          type: "daren",
                          userinfo: { mall_id: "daren", id: "daren" },
                        },
                        function (e) {},
                        function (e) {}
                      );
                    } catch (a) {
                      k.a.warn(
                        a.error_msg ||
                          a.errorMsg ||
                          "\u767b\u5f55\u5931\u8d25\u8bf7\u7a0d\u540e\u91cd\u8bd5"
                      ),
                        window.pinBridge.callNative({
                          method: "loginFailure",
                          error: a,
                          redirectUrl: e,
                          type: "daren",
                        });
                    }
                    return [2];
                  });
                });
              },
              failCallback: function (e) {
                e.errorCode !== ht.NOT_REFRESH && r(gt.FAIL);
              },
            };
          return (
            Object(s.useEffect)(function () {
              setTimeout(function () {
                return t(!0);
              }, 0);
            }, []),
            l.a.createElement(
              "div",
              { className: "optionArea" },
              l.a.createElement(
                "div",
                {
                  className: "codeWrap",
                  style: { display: a !== gt.SUCCESS ? "flex" : "none" },
                },
                l.a.createElement(
                  "div",
                  { className: "qrCode" },
                  l.a.createElement(
                    "div",
                    {
                      className: "fail",
                      style: { display: a === gt.FAIL ? "flex" : "none" },
                    },
                    l.a.createElement(
                      "span",
                      { className: "text" },
                      "\u4e8c\u7ef4\u7801\u5df2\u5931\u6548"
                    ),
                    l.a.createElement(
                      j.a,
                      {
                        type: "primary",
                        onClick: function () {
                          c(!1);
                          var e = setTimeout(function () {
                            c(!0), clearTimeout(e);
                          }, 100);
                          r(gt.NORMAL);
                        },
                        marginTop: 13,
                      },
                      "\u70b9\u51fb\u5237\u65b0"
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: "wrapLogin" },
                    i && l.a.createElement(yt.a, Et({}, u))
                  )
                )
              ),
              a === gt.SUCCESS &&
                l.a.createElement(
                  "div",
                  { className: "success" },
                  l.a.createElement("img", {
                    className: "successImg",
                    src:
                      "https://commimg.pddpic.com/mms_static/2020-04-22/bf012035-b348-44f5-91c2-701c716b33f5.png",
                    alt: "",
                  }),
                  l.a.createElement(
                    "span",
                    { className: "successText" },
                    "\u626b\u7801\u6210\u529f"
                  ),
                  l.a.createElement(
                    "span",
                    { className: "explainText" },
                    "\u8bf7\u5728\u624b\u673a\u4e0a\u786e\u8ba4"
                  )
                )
            )
          );
        },
        jt = "",
        xt = "",
        St = function (e) {
          return y.a.async(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (((t.prev = 0), (t.t0 = !jt), !t.t0)) {
                      t.next = 6;
                      break;
                    }
                    return (
                      (t.next = 5),
                      y.a.awrap(window.ipcRenderer.invoke("getChannelInfo"))
                    );
                  case 5:
                    jt = t.sent;
                  case 6:
                    if (((t.t1 = !xt), !t.t1)) {
                      t.next = 11;
                      break;
                    }
                    return (
                      (t.next = 10),
                      y.a.awrap(window.ipcRenderer.invoke("getActiveInfo"))
                    );
                  case 10:
                    xt = t.sent;
                  case 11:
                    t.next = 18;
                    break;
                  case 13:
                    (t.prev = 13),
                      (t.t2 = t.catch(0)),
                      (jt = "normal_install"),
                      (xt = "normal_startup"),
                      t.t2;
                  case 18:
                    Object(se.a)({
                      download_from: jt,
                      active_from: xt,
                    }),
                      Object(se.b)("https://livetk.pinduoduo.com/t.gif"),
                      Object(se.c)(e);
                  case 20:
                  case "end":
                    return t.stop();
                }
            },
            null,
            null,
            [[0, 13]],
            Promise
          );
        },
        Nt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function a() {
              this.constructor = t;
            }

            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((a.prototype = n.prototype), new a()));
          };
        })(),
        Pt = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.getStyle = function (e) {
                return n.state.tab === e ? { color: "#FA2A31" } : {};
              }),
              (n.qrcodeClick = function () {
                St({ op: "click", page_sn: "79560", page_el_sn: "4113784" }),
                  n.setState({
                    tab: 0,
                    switchLoginText: "\u8d26\u53f7\u5bc6\u7801\u767b\u5f55",
                  });
              }),
              (n.switchTab = function (e) {
                var t,
                  a = e;
                0 === n.state.tab
                  ? ((a = 1),
                    (t = "\u5207\u6362\u4e3a\u626b\u7801\u767b\u5f55"))
                  : ((a = 0), (t = "\u8d26\u53f7\u5bc6\u7801\u767b\u5f55")),
                  n.setState({
                    tab: a,
                    switchLoginText: t,
                  }),
                  n.context.loginApi.setValue("liveLoginType", 0);
              }),
              (n.darenLogin = function () {
                n.setState({ tab: 2 }),
                  n.context.loginApi.setValue("liveLoginType", 1);
              }),
              (n.waibaoLogin = function () {
                n.setState({ tab: 3 }),
                  n.context.loginApi.setValue("liveLoginType", 1);
              }),
              (n.state = {
                tab: 0,
                switchLoginText: "\u8d26\u53f7\u5bc6\u7801\u767b\u5f55",
              }),
              n
            );
          }

          return (
            Nt(t, e),
            (t.prototype.componentDidMount = function () {
              St({ op: "impr", page_sn: "79560", page_el_sn: "4113780" });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.state,
                n = t.switchLoginText,
                a = t.tab,
                r = this.context.loginState,
                o = r.errorMsg ? { marginTop: 28 } : {},
                i = l.a.Children.map(this.props.children, function (t) {
                  return l.a.cloneElement(t, {
                    styleS: o,
                    tab: e.state.tab,
                    switchTab: e.switchTab,
                  });
                });
              return l.a.createElement(
                vt,
                { platform: r.platform },
                l.a.createElement(
                  "div",
                  { className: "obs-info-part" },
                  l.a.createElement(
                    "div",
                    { className: "obs-login-tab" },
                    l.a.createElement(
                      "span",
                      {
                        className:
                          0 === a || 1 === a
                            ? "tab-item tab-item-active"
                            : "tab-item",
                        onClick: this.qrcodeClick,
                      },
                      "\u5546\u5bb6\u767b\u5f55"
                    ),
                    l.a.createElement(
                      "span",
                      {
                        className:
                          2 === a ? "tab-item tab-item-active" : "tab-item",
                        onClick: this.darenLogin,
                      },
                      "\u8fbe\u4eba\u767b\u5f55"
                    )
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className:
                        2 !== a
                          ? "obs-login-middle"
                          : "obs-login-middle obs-login-hidden",
                    },
                    i
                  ),
                  2 === a && l.a.createElement(Ct, null),
                  l.a.createElement(
                    "div",
                    { className: "obs-login-bottom" },
                    0 === a || 1 === a
                      ? l.a.createElement(
                          "span",
                          {
                            className: "olb-item",
                            onClick: function () {
                              St({
                                op: "impr",
                                page_sn: "79560",
                                page_el_sn: "4113781",
                              }),
                                St({
                                  op: "click",
                                  page_sn: "79560",
                                  page_el_sn: "4113781",
                                }),
                                e.switchTab(null);
                            },
                          },
                          n
                        )
                      : l.a.createElement("span", null),
                    2 !== a
                      ? l.a.createElement(
                          "span",
                          {
                            className: "olb-item waibao",
                            onClick: this.waibaoLogin,
                          },
                          "\u5916\u5305\u767b\u5f55"
                        )
                      : ""
                  )
                )
              );
            }),
            (t.contextTypes = { loginApi: w.a.object, loginState: w.a.object }),
            t
          );
        })(l.a.Component),
        Tt = Object(f.e)(Pt),
        Mt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function a() {
              this.constructor = t;
            }

            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((a.prototype = n.prototype), new a()));
          };
        })(),
        It = function () {
          return (It =
            Object.assign ||
            function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        Rt = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }

          return (
            Mt(t, e),
            (t.prototype.render = function () {
              return l.a.createElement(
                ce,
                null,
                l.a.createElement(Tt, It({}, this.props))
              );
            }),
            t
          );
        })(l.a.Component);
      n(880), n(734);

      function At(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var _t = (function (e) {
        Object(o.a)(n, e);
        var t = At(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this.context,
                  t = e.loginApi,
                  n = e.loginState.username;
                return l.a.createElement(
                  "div",
                  { className: "username" },
                  l.a.createElement(
                    "div",
                    { className: "userIcon" },
                    l.a.createElement(Te.a, {
                      className: "iconicon",
                      type: "user_filled",
                    })
                  ),
                  l.a.createElement("input", {
                    type: "text",
                    placeholder:
                      "\u8bf7\u8f93\u5165\u8d26\u6237\u540d/\u624b\u673a\u53f7",
                    onChange: function (e) {
                      e.persist(), t.userNameChangeHandle(e.target.value);
                    },
                    onFocus: function (e) {
                      e.persist(), t.userNameFocusHandle();
                    },
                    onBlur: function (e) {
                      e.persist(), t.userNameBlurHandle();
                    },
                    onKeyDown: function (e) {
                      e.persist(), t.userNameKeyboardHandle(e);
                    },
                    value: n,
                    className: "input",
                  })
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      _t.contextTypes = { loginApi: w.a.object, loginState: w.a.object };
      var Lt = _t;

      function Ht(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Bt = (function (e) {
        Object(o.a)(n, e);
        var t = Ht(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this.context,
                  t = e.loginApi,
                  n = e.loginState.password;
                return l.a.createElement(
                  "div",
                  { className: "password" },
                  l.a.createElement(
                    "div",
                    { className: "userIcon" },
                    l.a.createElement(Te.a, {
                      className: "iconicon",
                      type: "unlock_filled",
                    })
                  ),
                  l.a.createElement("input", {
                    type: "password",
                    placeholder: "\u8bf7\u8f93\u5165\u5bc6\u7801",
                    onChange: function (e) {
                      e.persist(), t.passwordChangeHandle(e.target.value);
                    },
                    onFocus: function (e) {
                      e.persist(), t.passwordFocusHandle();
                    },
                    onBlur: function (e) {
                      e.persist(), t.passwordBlurHandle();
                    },
                    onKeyDown: function (e) {
                      e.persist(), t.passwordKeyboardHandle(e);
                    },
                    onKeyUp: function (e) {
                      e.persist(), t.enterLogin(e);
                    },
                    value: n,
                    className: "input",
                  })
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      Bt.contextTypes = { loginApi: w.a.object, loginState: w.a.object };
      var Ut = Bt;
      n(881);

      function Vt() {
        return l.a.createElement(
          "section",
          { className: "obs-download-note" },
          "\u8bf7\u6253\u5f00\u5546\u5bb6\u7248APP\u626b\u4e00\u626b"
        );
      }

      function Ft() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return l.a.createElement(
          "section",
          {
            className: "common-container error-code-".concat(e.errorCode || ""),
          },
          l.a.createElement("img", {
            className: "no-bind-phone-picture",
            src:
              e.src ||
              "//funimg.pddpic.com/msfe/2020-07-23/026a67cb-8afb-497d-8fa5-a2335bcf81db.png",
            alt: "\u672a\u7ed1\u5b9a\u624b\u673a\u53f7",
          }),
          l.a.createElement(
            "div",
            { className: "common-note no-bind-phone-note" },
            l.a.createElement(
              "div",
              { className: "tip1" },
              e.title || "\u60a8\u672a\u7ed1\u5b9a\u8fc7\u624b\u673a\u53f7"
            ),
            l.a.createElement(
              "div",
              { className: "tip2" },
              e.msg ||
                "\u8bf7\u8054\u7cfb\u4e3b\u8d26\u53f7\u914d\u7f6e\u540e\u91cd\u65b0\u767b\u5f55"
            ),
            e.btn
              ? e.btn
              : l.a.createElement(
                  j.a,
                  {
                    type: "danger",
                    width: 88,
                    onClick: function () {
                      return window.location.reload();
                    },
                  },
                  "\u786e\u8ba4"
                )
          )
        );
      }

      function Dt(e) {
        return l.a.createElement(
          "div",
          { className: "scan-mask" },
          l.a.createElement("div", { className: "qr-mask" }),
          l.a.createElement(
            "div",
            { className: "common-note qr-scan-note obs-common-note" },
            l.a.createElement(
              "p",
              null,
              {
                "-2": "\u5df2\u53d6\u6d88",
                "-1": "\u4e8c\u7ef4\u7801\u5df2\u5931\u6548",
              }[e.codeStatus]
            ),
            l.a.createElement(
              j.a,
              {
                type: "danger",
                width: "88px",
                onClick: e.reflesh,
              },
              "\u70b9\u51fb\u5237\u65b0"
            )
          )
        );
      }

      function zt(e) {
        return l.a.createElement(
          "section",
          { className: "scan-success-container" },
          l.a.createElement(
            "div",
            { className: "scan-success" },
            l.a.createElement(z.a, {
              value: e.qrcodeUri,
              size: 120,
            }),
            l.a.createElement("div", { className: "qr-mask" }),
            l.a.createElement(
              "div",
              { className: "check-icon" },
              l.a.createElement("img", {
                src:
                  "//funimg.pddpic.com/msfe/2020-07-24/1105a824-5a1f-46ea-8e95-45ad5d359f91.png",
              })
            )
          ),
          l.a.createElement(
            "div",
            { className: "scan-success-sub-note" },
            l.a.createElement(
              "div",
              { className: "tip1" },
              "\u626b\u7801\u6210\u529f"
            ),
            l.a.createElement(
              "div",
              { className: "tip2" },
              "\u8bf7\u5728\u624b\u673a\u4e0a\u786e\u8ba4\u767b\u5f55"
            )
          )
        );
      }

      function Kt(e) {
        var t =
            2000016 === e.errorCode
              ? {
                  msg:
                    "\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u7684\u8d26\u53f7\u5f02\u5e38\uff0c\u5b58\u5728\u76d7\u53f7\u98ce\u9669",
                  link: "/mallcenter/resetPwd/index",
                }
              : {
                  msg:
                    "\u5bc6\u7801\u5f3a\u5ea6\u8fc7\u4f4e\uff0c\u5b58\u5728\u76d7\u53f7\u98ce\u9669",
                  link: "/mallcenter/changeAccountInfo/weakPwdEdit",
                },
          n = t.msg,
          a = t.link;
        return l.a.createElement(
          "section",
          { className: "common-container" },
          l.a.createElement(
            "div",
            { className: "no-bind-phone" },
            l.a.createElement(
              "div",
              { className: "lowintensity" },
              l.a.createElement("img", {
                className: "lowintensity-picture",
                src:
                  "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                alt: "\u672a\u7ed1\u5b9a\u624b\u673a\u53f7",
              }),
              l.a.createElement(
                "div",
                { className: "lowintensity-note" },
                l.a.createElement("div", { className: "tip1" }, n),
                l.a.createElement(
                  "div",
                  { className: "tip2" },
                  "\u5efa\u8bae\u60a8\u7acb\u5373\u4fee\u6539\u5bc6\u7801"
                )
              )
            )
          ),
          l.a.createElement(
            "div",
            {
              style: {
                textAlign: "center",
                marginBottom: -14,
              },
            },
            l.a.createElement(
              j.a,
              {
                type: "danger",
                onClick: function () {
                  window.pinBridge.callNative({
                    method: "goBrowser",
                    url: "https://mms.pinduoduo.com" + a,
                  });
                },
              },
              "\u4fee\u6539\u5bc6\u7801"
            )
          )
        );
      }

      function qt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Gt = [
          {
            title:
              "\u4e3a\u4e86\u60a8\u7684\u8d26\u53f7\u5b89\u5168\uff0c\u8bf7\u9a8c\u8bc1\u624b\u673a\u53f7\u540e\u7ee7\u7eed\u767b\u5f55",
            footer: "\u65e0\u6cd5\u63a5\u6536\u5230\u9a8c\u8bc1\u7801\uff1f",
            onClick: function () {
              window.pinBridge.callNative({
                method: "goBrowser",
                url:
                  "https://mms.pinduoduo.com/mallcenter/changeAccountInfo/forgetMobile?type=3",
              });
            },
            hasMore: !1,
          },
          {
            title:
              "\u4e3a\u4fdd\u969c\u60a8\u8d26\u53f7\u7684\u5b89\u5168\uff0c\u8bf7\u9a8c\u8bc1\u624b\u673a\u540e\u7ee7\u7eed\u767b\u5f55",
            footer: "\u65e0\u6cd5\u63a5\u6536\u5230\u9a8c\u8bc1\u7801\uff1f",
            onClick: function () {
              window.pinBridge.callNative({
                method: "goBrowser",
                url:
                  "https://mms.pinduoduo.com/mallcenter/changeAccountInfo/forgetMobile?type=3",
              });
            },
            hasMore: !1,
          },
          {
            title:
              "\u8bf7\u9a8c\u8bc1\u624b\u673a\u53f7\u540e\u7ee7\u7eed\u767b\u5f55",
            footer:
              "\u624b\u673a\u53f7\u6709\u8bef\uff0c\u8bf7\u8054\u7cfb\u4e3b\u8d26\u53f7",
            hasMore: !1,
            onClick: function () {},
          },
          {
            title:
              "\u8bf7\u8f93\u5165\u5e97\u94fa\u7ed1\u5b9a\u624b\u673a\u53f7",
            footer: "\u8054\u7cfb\u5ba2\u670d",
            hasMore: !0,
            onClick: function () {},
          },
        ],
        Qt = (function (e) {
          Object(o.a)(n, e);
          var t = qt(n);

          function n(e) {
            var r;
            return (
              Object(a.a)(this, n),
              ((r = t.call(this, e)).getMessageClickHandle = function () {
                var e = r.props.getMessageHandle,
                  t = r.state.count;
                "function" === typeof e &&
                  t <= 0 &&
                  e().then(
                    function (e) {
                      e && e.risk && r.setState(e), r.disabledMessageClick(60);
                    },
                    function () {}
                  );
              }),
              (r.disabledMessageClick = function (e) {
                60 === e && clearTimeout(r.timer),
                  e < 0 ||
                    (0 !== e ||
                      r.props.messageValue ||
                      r.setState({ tipsShow: !0 }),
                    r.setState({ count: e }),
                    (r.timer = setTimeout(function () {
                      r.disabledMessageClick(e - 1);
                    }, 1e3)));
              }),
              (r.getGetMessageText = function () {
                var e = r.state.count;
                return e > 0
                  ? "\u8fd8\u5269".concat(e, "\u79d2")
                  : "\u83b7\u53d6\u9a8c\u8bc1\u7801";
              }),
              (r.onSuccessHandle = function (e) {
                return (0, r.props.getMessageHandle)(e).then(function () {
                  r.setState({ risk: !1 }), r.disabledMessageClick(60);
                });
              }),
              (r.onCancleHandle = function () {
                r.setState({ risk: !1 });
              }),
              (r.state = {
                count: 0,
                risk: !1,
                url: "/janus/api/getCaptchaCode",
                sceneId: 15,
                tipsShow: !1,
              }),
              r
            );
          }

          return (
            Object(r.a)(n, [
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this.timer);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.codeType,
                    n = e.errorMsg,
                    a = e.disabled,
                    r = e.onMobileChange,
                    o = e.onMessageChange,
                    i = e.messageValue,
                    c = e.mobileValue,
                    s = e.onOk,
                    u = this.state,
                    f = u.risk,
                    p = u.url,
                    d = u.sceneId,
                    m = u.tipsShow;
                  return l.a.createElement(
                    "section",
                    { className: "verify-phone-container" },
                    l.a.createElement(
                      "div",
                      { className: "vertify-title" },
                      l.a.createElement(
                        "div",
                        { className: "vertify-subtitle" },
                        Gt[t].title,
                        " "
                      ),
                      l.a.createElement(
                        "div",
                        { className: "verify-error-container" },
                        n
                          ? l.a.createElement(
                              "div",
                              { style: { marginTop: 5 } },
                              l.a.createElement(Qe, { msg: n })
                            )
                          : null
                      )
                    ),
                    l.a.createElement(Pe.a, {
                      placeholder:
                        "\u8bf7\u8f93\u5165\u5e97\u94fa\u7ed1\u5b9a\u624b\u673a\u53f7",
                      onChange: r,
                      disabled: a,
                      value: c,
                      size: "large",
                      prefix: l.a.createElement(Te.a, {
                        type: "user_filled",
                        style: { fontSize: 16, color: "#999" },
                      }),
                      margin: "16px 0 0",
                    }),
                    l.a.createElement(
                      "div",
                      { className: "vertify-code" },
                      l.a.createElement(Pe.a, {
                        placeholder:
                          "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
                        onChange: o,
                        value: i,
                        size: "large",
                        prefix: l.a.createElement(Te.a, {
                          type: "certificated_filled",
                          style: { fontSize: 16, color: "#999" },
                        }),
                        suffixDivide: !0,
                        suffix: l.a.createElement(
                          j.a,
                          {
                            type: "textPrimary",
                            onClick: this.getMessageClickHandle,
                            disabled: this.state.count > 0,
                            size: "large",
                          },
                          l.a.createElement(
                            "span",
                            {
                              style: {
                                fontSize: 14,
                                textAlign: "center",
                                display: "inline-block",
                                width: "100%",
                              },
                            },
                            this.getGetMessageText()
                          )
                        ),
                      }),
                      m &&
                        l.a.createElement(
                          "div",
                          { className: "verify-code-tip" },
                          "\u82e5\u957f\u65f6\u95f4\u672a\u6536\u5230\u9a8c\u8bc1\u7801, \u60a8\u53ef\u5c1d\u8bd5APP\u626b\u7801\u767b\u5f55"
                        )
                    ),
                    l.a.createElement(
                      j.a,
                      {
                        type: "danger",
                        width: "100%",
                        size: "large",
                        margin: "24px 0 0",
                        onClick: s,
                      },
                      "\u786e\u8ba4"
                    ),
                    l.a.createElement(
                      "div",
                      { className: "have-no-code" },
                      2 === t
                        ? l.a.createElement(
                            "span",
                            { className: "have-no-code-tip" },
                            "\u624b\u673a\u53f7\u6709\u8bef? \u8bf7\u8054\u7cfb\u4e3b\u8d26\u53f7\u4fee\u6539"
                          )
                        : l.a.createElement(
                            j.a,
                            {
                              type: "textPrimary",
                              size: "small",
                              onClick: Gt[t].onClick,
                            },
                            Gt[t].footer
                          )
                    ),
                    l.a.createElement(Ge, {
                      visible: f,
                      url: p,
                      sceneId: d,
                      onSuccess: this.onSuccessHandle,
                      onCancle: this.onCancleHandle,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component);

      function Wt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Jt = (function (e) {
        Object(o.a)(n, e);
        var t = Wt(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props,
                  n = t.visible,
                  a = t.tab,
                  r = this.context,
                  o = r.loginApi,
                  i = r.loginState,
                  c = i.resetPassword,
                  s = i.bindPhoneVisible,
                  u = i.loginVisible,
                  f = i.verifyPhoneVisible,
                  p = i.unbindPhone,
                  d = i.errorMsg;
                402 === d &&
                  (d = l.a.createElement(
                    "div",
                    { style: { position: "relative" } },
                    "\u8d26\u6237\u5bc6\u7801\u4e0d\u5339\u914d\u3002\u5b50\u8d26\u6237\u8bf7\u7528\u8d26\u6237\u540d\u767b\u5f55\uff08\u4e0d\u652f\u6301\u624b\u673a\u53f7\u767b\u5f55\uff09",
                    l.a.createElement(
                      j.a,
                      {
                        type: "textPrimary",
                        size: "small",
                        onClick: function () {
                          window.pinBridge.callNative({
                            method: "goBrowser",
                            url:
                              "https://mms.pinduoduo.com/mallcenter/changeAccountInfo/findAccountName/index",
                          });
                        },
                      },
                      "\u5fd8\u8bb0\u8d26\u6237\u540d"
                    )
                  ));
                return (
                  (e = l.a.createElement(
                    "div",
                    { className: "obs-operationBtn" },
                    "\u8fd8\u6ca1\u6709\u8d26\u53f7\uff1f",
                    l.a.createElement(
                      "span",
                      {
                        className: "now-reg",
                        onClick: function () {
                          return window.pinBridge.callNative({
                            method: "goBrowser",
                            url: "https://mms.pinduoduo.com/login/register",
                          });
                        },
                      },
                      "\u7acb\u5373\u6ce8\u518c"
                    )
                  )),
                  l.a.createElement(
                    "div",
                    {
                      className: "obs-password-section password-section",
                      style: { display: n ? "" : "none" },
                    },
                    l.a.createElement(
                      "section",
                      null,
                      u
                        ? l.a.createElement(
                            "div",
                            null,
                            l.a.createElement(
                              "div",
                              { className: "info-danger-warn obs-info-warn" },
                              d ? l.a.createElement(Qe, { msg: d }) : null
                            ),
                            l.a.createElement(
                              "div",
                              { className: "info-content" },
                              l.a.createElement(Lt, { margin: "16px 0 0" }),
                              l.a.createElement(Ut, { margin: "24px 0 0" }),
                              l.a.createElement(Ue, null),
                              3 !== a
                                ? l.a.createElement(
                                    "div",
                                    { className: "forget-password" },
                                    e,
                                    l.a.createElement(
                                      "span",
                                      {
                                        className: "forget-pass",
                                        onClick: function () {
                                          St({
                                            op: "click",
                                            page_sn: "79560",
                                            page_el_sn: "4113783",
                                          }),
                                            St({
                                              op: "impr",
                                              page_sn: "79560",
                                              page_el_sn: "4113783",
                                            });
                                          window.pinBridge.callNative({
                                            method: "goBrowser",
                                            url:
                                              "https://mms.pinduoduo.com/mallcenter/resetPwd/index",
                                          });
                                        },
                                      },
                                      "\u5fd8\u8bb0\u5bc6\u7801"
                                    )
                                  )
                                : ""
                            )
                          )
                        : null,
                      s
                        ? l.a.createElement(et, {
                            onMessageChange: o.bindMeassageInputHandle,
                            onMobileChange: o.bindPhoneInputHandle,
                            messageValue: i.bindMessage,
                            mobileValue: i.bindPhone,
                            onOk: o.bindPhoneSubmit,
                            getMessageHandle: o.getBindPhoneMessage,
                            errorMsg: i.errorMsg,
                          })
                        : null,
                      f
                        ? l.a.createElement(Qt, {
                            codeType: i.verifyPhoneType || 0,
                            disabled: !0,
                            onMessageChange: o.verifyMessageChangeHandle,
                            messageValue: i.verificationCode,
                            mobileValue: i.mobileText,
                            onOk: o.verifyMessageSubmit,
                            getMessageHandle: o.getVerifyMessageHandle,
                            errorMsg: i.errorMsg,
                          })
                        : null,
                      p ? l.a.createElement(Ft, null) : null,
                      c
                        ? l.a.createElement(Kt, { errorCode: i.errorCode })
                        : null
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      (Jt.defaultProps = { visible: !0 }),
        (Jt.contextTypes = { loginApi: w.a.object, loginState: w.a.object });
      var Xt = Jt;
      n(882);

      function Yt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Zt = [2000008, 2000009, 40029, 5e5, 8000079],
        $t = (function (e) {
          Object(o.a)(n, e);
          var t = Yt(n);

          function n(e) {
            var r;
            return (
              Object(a.a)(this, n),
              ((r = t.call(this, e)).getQrcode = function () {
                var e;
                return y.a.async(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            r.setState({ codeStatus: 1 }),
                            (t.next = 3),
                            y.a.awrap(
                              r.context.loginApi.riskControlFingerAdapter(
                                re.a.GET_RISKCONTROL_FP
                              )
                            )
                          );
                        case 3:
                          return (
                            (e = t.sent),
                            t.abrupt(
                              "return",
                              Object(O.b)(
                                "/janus/api/scan/login/qrcode",
                                { fingerprint: Object(re.e)() },
                                { headers: { ETag_obs: e } }
                              )
                                .then(function (e) {
                                  return new Promise(function (t) {
                                    var n = V.a.parse(e.uri);
                                    n && n.data
                                      ? r.setState(
                                          { qrcodeUri: e.uri },
                                          function () {
                                            t((r.token = n.data));
                                          }
                                        )
                                      : r.setState({ codeStatus: 5e5 });
                                  });
                                })
                                .then(r.startFetchStatus)
                                .catch(function () {})
                            )
                          );
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              }),
              (r.startFetchStatus = function (e) {
                var t,
                  n,
                  a = arguments;
                return y.a.async(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (
                            ((t = a.length > 1 && void 0 !== a[1] ? a[1] : 2e3),
                            e)
                          ) {
                            o.next = 3;
                            break;
                          }
                          return o.abrupt("return");
                        case 3:
                          return (
                            (o.next = 5),
                            y.a.awrap(
                              r.context.loginApi.riskControlFingerAdapter(
                                re.a.GET_RISKCONTROL_FP
                              )
                            )
                          );
                        case 5:
                          (n = o.sent),
                            (r.timer = setTimeout(function () {
                              return Object(O.b)(
                                "/janus/api/scan/login/query",
                                {
                                  data: e,
                                  fingerprint: Object(re.e)(),
                                },
                                { headers: { ETag_obs: n } }
                              ).then(
                                function () {
                                  var t,
                                    n,
                                    a = arguments;
                                  return y.a.async(
                                    function (o) {
                                      for (;;)
                                        switch ((o.prev = o.next)) {
                                          case 0:
                                            if (
                                              ((t =
                                                a.length > 0 && void 0 !== a[0]
                                                  ? a[0]
                                                  : {}),
                                              r.token === e)
                                            ) {
                                              o.next = 3;
                                              break;
                                            }
                                            return o.abrupt("return");
                                          case 3:
                                            if (3 !== (n = t.status)) {
                                              o.next = 8;
                                              break;
                                            }
                                            return (
                                              St({
                                                op: "impr",
                                                page_sn: "79560",
                                                page_el_sn: "4113790",
                                              }),
                                              r.context.loginApi.loginSuccessHandle(
                                                t && t.token,
                                                t
                                              ),
                                              o.abrupt("return")
                                            );
                                          case 8:
                                            r.setState({ codeStatus: n }),
                                              [1, 2].indexOf(n) > -1 &&
                                                r.startFetchStatus(e, 2e3);
                                          case 10:
                                          case "end":
                                            return o.stop();
                                        }
                                    },
                                    null,
                                    null,
                                    null,
                                    Promise
                                  );
                                },
                                function (n) {
                                  r.token === e &&
                                    (n && Zt.indexOf(n.errorCode) > -1
                                      ? r.setState({ codeStatus: n.errorCode })
                                      : n &&
                                        145934 !== n.errorCode &&
                                        (r.startFetchStatus(e, t + 2e3),
                                        console.error(n)));
                                }
                              );
                            }, t));
                        case 7:
                        case "end":
                          return o.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              }),
              (r.getMessage = function (e) {
                var t = {};
                return (
                  40029 === e
                    ? (t = {
                        title:
                          "\u672c\u8d26\u53f7\u5df2\u6210\u529f\u9000\u5e97",
                        msg:
                          "\u60a8\u53ef\u66f4\u6362\u624b\u673a\u53f7\u540e\u518d\u6b21\u5165\u9a7b\uff0c\u671f\u5f85\u4e0e\u60a8\u518d\u4f1a",
                        src:
                          "//funimg.pddpic.com/msfe/2020-07-24/0832135a-30fa-44e4-8e71-f5d1dd183c00.png",
                      })
                    : 2000009 === e
                    ? (t = {
                        title: "\u5e97\u94fa\u65e0\u6cd5\u767b\u5f55",
                        msg:
                          "\u8bf7\u8054\u7cfbdpzx@pinduoduo.com\uff0c\u5e76\u544a\u77e5\u5e97\u94fa\u7f16\u53f7",
                        src:
                          "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                      })
                    : 5e5 === e
                    ? (t = {
                        title:
                          "\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u6240\u5904\u7684\u7f51\u7edc\u73af\u5883\u5f02\u5e38 ",
                        msg:
                          "\u5efa\u8bae\u60a8\u4f7f\u7528\u8d26\u53f7\u548c\u5bc6\u7801\u767b\u5f55",
                        btn: l.a.createElement(
                          j.a,
                          {
                            type: "danger",
                            onClick: function () {
                              r.props.switchTab(1);
                            },
                          },
                          "\u4f7f\u7528\u8d26\u53f7\u548c\u5bc6\u7801\u767b\u5f55"
                        ),
                        src:
                          "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                      })
                    : 8000079 === e &&
                      (t = {
                        title:
                          "\u8d26\u53f7\u56e0\u5b89\u5168\u4fdd\u62a4\u5df2\u88ab\u7981\u6b62\u5728\u7f51\u9875\u7248\u767b\u5f55",
                        msg:
                          "\u6743\u9650\u5c01\u7981\u671f\u95f4\u76f8\u5173\u529f\u80fd\u8bf7\u524d\u5f80windows\u5ba2\u6237\u7aef\u3001App\u6216\u8005\u670d\u52a1\u5e02\u573a\u670d\u52a1\u8fdb\u884c\u64cd\u4f5c",
                        src:
                          "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                        errorCode: 8000079,
                      }),
                  t
                );
              }),
              (r.state = { qrcodeUri: "", codeStatus: 1, userInfo: {} }),
              (r.updating = !1),
              r
            );
          }

          return (
            Object(r.a)(n, [
              {
                key: "updateUserInfo",
                value: function (e) {
                  var t,
                    n = this;
                  return y.a.async(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!this.updating) {
                              a.next = 2;
                              break;
                            }
                            return a.abrupt("return");
                          case 2:
                            return (
                              (this.updating = !0),
                              (t =
                                !0 === e
                                  ? "fetchUserinfoFromCache"
                                  : "fetchUserinfo"),
                              (a.next = 6),
                              y.a.awrap(
                                this.context.loginApi[t]()
                                  .then(function (e) {
                                    return (
                                      n.setState({ userInfo: e }),
                                      (n.updating = !1),
                                      e
                                    );
                                  })
                                  .catch(function (e) {
                                    n.setState({ userInfo: {} }),
                                      (n.updating = !1);
                                  })
                              )
                            );
                          case 6:
                            return a.abrupt("return", a.sent);
                          case 7:
                          case "end":
                            return a.stop();
                        }
                    },
                    null,
                    this,
                    null,
                    Promise
                  );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.visible && this.getQrcode(),
                    this.updateUserInfo(!0),
                    -1 !== this.props.location.pathname.indexOf("login/sso") &&
                      (document.addEventListener(
                        "visibilitychange",
                        this.updateUserInfo.bind(this)
                      ),
                      window.addEventListener(
                        "focus",
                        this.updateUserInfo.bind(this)
                      ),
                      window.addEventListener(
                        "blur",
                        this.updateUserInfo.bind(this)
                      ));
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  return (
                    e.visible !== this.props.visible && e.visible
                      ? (this.context.loginApi.setValue("errorMsg", ""),
                        this.getQrcode())
                      : e.visible === this.props.visible ||
                        e.visible ||
                        (this.token = ""),
                    !0
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.timer),
                    (this.token = ""),
                    (this.startFetchStatus = null);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n = this.state,
                    a = n.qrcodeUri,
                    r = n.codeStatus,
                    o = this.props,
                    i = o.visible,
                    c = o.style,
                    s = this.context.loginState,
                    u = s && s.errorMsg,
                    f = -1 === r || -2 === r,
                    p =
                      ~this.props.location.pathname.indexOf("login/sso") &&
                      this.state.userInfo &&
                      this.state.userInfo.mall,
                    d = it()("obs-scan-login", {
                      "scan-login-sso": p,
                      "qr-code-activity": !f,
                    });
                  return (
                    (e = l.a.createElement(
                      "div",
                      { className: "obs-operationBtn" },
                      "\u5e76\u5728\u624b\u673a\u4e0a\u70b9\u51fb\u201c\u786e\u8ba4\u767b\u5f55\u201d"
                    )),
                    (t = l.a.createElement(
                      "div",
                      { className: d },
                      p
                        ? l.a.createElement(
                            "div",
                            {
                              className: "avatar",
                              onClick: this.context.loginApi.loginSuccessHandle,
                            },
                            l.a.createElement("img", {
                              src: T(this.state.userInfo.mall.logo),
                            }),
                            l.a.createElement(
                              "div",
                              { className: "desc" },
                              this.state.userInfo.mall.mall_name
                            ),
                            l.a.createElement("div", {
                              className: "avatar-mask",
                            })
                          )
                        : "",
                      l.a.createElement(
                        "div",
                        { className: p ? "qr-code-sso" : "qr-code" },
                        a
                          ? l.a.createElement(z.a, {
                              value: a,
                              size: p ? 120 : 140,
                            })
                          : null,
                        f
                          ? l.a.createElement(Dt, {
                              codeStatus: r,
                              reflesh: this.getQrcode,
                            })
                          : null
                      )
                    )),
                    i
                      ? l.a.createElement(
                          "section",
                          { style: c || {} },
                          [1, -1, -2].indexOf(r) > -1 && !u
                            ? l.a.createElement(
                                "div",
                                { className: "scan-login-container" },
                                t,
                                p
                                  ? l.a.createElement(
                                      "div",
                                      { className: "tips" },
                                      l.a.createElement(
                                        "div",
                                        { className: "subtip" },
                                        "\u8bf7\u70b9\u51fb\u5934\u50cf\u76f4\u63a5\u767b\u5f55"
                                      ),
                                      l.a.createElement(
                                        "div",
                                        { className: "subtip" },
                                        "\u6216\u6253\u5f00\u5546\u5bb6\u7248APP\u626b\u4e00\u626b\u767b\u5f55"
                                      )
                                    )
                                  : l.a.createElement(Vt, null),
                                e
                              )
                            : null,
                          Zt.indexOf(r) > -1
                            ? l.a.createElement(Ft, this.getMessage(r))
                            : null,
                          u
                            ? l.a.createElement(Ft, {
                                title: u,
                                msg: "   ",
                                src:
                                  "//funimg.pddpic.com/msfe/2020-07-24/0a07ef71-17d4-4a45-91e2-9c3d6d928c74.png",
                              })
                            : null,
                          2 === r && !u && a
                            ? l.a.createElement(zt, { qrcode: a })
                            : null
                        )
                      : null
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component);
      ($t.defaultProps = { visible: !0 }),
        ($t.contextTypes = { loginApi: w.a.object, loginState: w.a.object });
      var en = Object(f.e)(function (e) {
        return l.a.createElement($t, e);
      });

      function tn(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var nn = (function (e) {
        Object(o.a)(n, e);
        var t = tn(n);

        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }

        return (
          Object(r.a)(n, [
            {
              key: "render",
              value: function () {
                return l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(Xt, {
                    visible: 1 === this.props.tab || 3 === this.props.tab,
                    tab: this.props.tab,
                  }),
                  l.a.createElement(en, {
                    style: this.props.styleS,
                    visible: 0 === this.props.tab,
                    switchTab: this.props.switchTab,
                  })
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);

      function an(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var rn = (function (e) {
          Object(o.a)(n, e);
          var t = an(n);

          function n() {
            return Object(a.a)(this, n), t.apply(this, arguments);
          }

          return (
            Object(r.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    Rt,
                    null,
                    l.a.createElement(nn, null)
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        on = (n(883), n(36));

      function cn(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var sn = (function (e) {
        Object(o.a)(n, e);
        var t = cn(n);

        function n(e) {
          var r;
          return (
            Object(a.a)(this, n),
            ((r = t.call(this, e)).state = {
              userImg: "",
              userName: "",
              modalShow: !1,
            }),
            r
          );
        }

        return (
          Object(r.a)(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this,
                  t = {};
                try {
                  sessionStorage.setItem("sessionEnterReLogin", 1),
                    (t = window.obsStore.get("ACCOUNT")[0].userInfo);
                } catch (r) {}
                var n =
                    t.username ||
                    "\u672a\u83b7\u53d6\u5230\u7528\u6237\u540d\uff0c\u8bf7\u9000\u51fa\u91cd\u65b0\u767b\u5f55",
                  a = t.mall ? t.mall.logo : "";
                setTimeout(function () {
                  e.setState({ userName: n, userImg: a }),
                    e.context.loginApi.userNameChangeHandle(n);
                }, 0);
              },
            },
            {
              key: "closeRelogin",
              value: function () {
                window.pinBridge.callNative(
                  { method: "closeWindow", type: "reLoginWindow" },
                  function (e) {},
                  function (e) {}
                );
              },
            },
            {
              key: "closeModal",
              value: function () {
                this.setState({ modalShow: !1 });
              },
            },
            {
              key: "okModal",
              value: function () {
                window.pinBridge.callNative({ method: "logOut" });
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  n = this.state,
                  a = n.userName,
                  r = n.userImg,
                  o = n.modalShow,
                  i = this.context,
                  c = i.loginApi,
                  s = i.loginState,
                  u = s.resetPassword,
                  f = s.bindPhoneVisible,
                  p = s.loginVisible,
                  d = s.verifyPhoneVisible,
                  m = s.unbindPhone,
                  g = s.errorMsg;
                return (
                  402 === g &&
                    (g = l.a.createElement(
                      "div",
                      { style: { position: "relative" } },
                      "\u8d26\u6237\u5bc6\u7801\u4e0d\u5339\u914d\u3002\u5b50\u8d26\u6237\u8bf7\u7528\u8d26\u6237\u540d\u767b\u5f55\uff08\u4e0d\u652f\u6301\u624b\u673a\u53f7\u767b\u5f55\uff09",
                      l.a.createElement(
                        j.a,
                        {
                          type: "textPrimary",
                          size: "small",
                          onClick: function () {
                            window.pinBridge.callNative({
                              method: "goBrowser",
                              url:
                                "https://mms.pinduoduo.com/mallcenter/changeAccountInfo/findAccountName/index",
                            });
                          },
                        },
                        "\u5fd8\u8bb0\u8d26\u6237\u540d"
                      )
                    )),
                  (e = l.a.createElement(
                    "div",
                    { className: "obs-operationBtn" },
                    l.a.createElement(
                      "span",
                      {
                        className: "now-reg",
                        onClick: function () {
                          return t.setState({ modalShow: !0 });
                        },
                      },
                      "\u66f4\u6362\u8d26\u53f7"
                    )
                  )),
                  l.a.createElement(
                    "div",
                    { className: "relogin-password-section" },
                    l.a.createElement(
                      on.b,
                      { isDark: !0 },
                      l.a.createElement(
                        C.a,
                        {
                          showCloseIcon: !1,
                          visible: o,
                          theme: "red",
                          width: 300,
                          onOk: function () {
                            t.okModal();
                          },
                          onClose: function () {
                            return t.closeModal();
                          },
                        },
                        l.a.createElement(
                          "div",
                          { className: "relogin-modal" },
                          l.a.createElement(
                            "span",
                            { className: "modal-img" },
                            "!"
                          ),
                          l.a.createElement(
                            "span",
                            { className: "madal-text" },
                            "\u786e\u8ba4\u66f4\u6362\u8d26\u53f7\u5417\uff1f"
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { className: "relogin-modal-text" },
                          "\u66f4\u6362\u8d26\u53f7\u540e\u5df2\u5f00\u76f4\u64ad\u5c06\u4f1a\u5173\u95ed"
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "header" },
                      l.a.createElement(
                        "span",
                        null,
                        "\u8bf7\u8f93\u5165\u5bc6\u7801\u540e\u7ee7\u7eed\u64cd\u4f5c"
                      ),
                      l.a.createElement(Te.a, {
                        className: "close",
                        onClick: function () {
                          t.closeRelogin();
                        },
                        type: "close",
                      })
                    ),
                    l.a.createElement(
                      "section",
                      null,
                      p
                        ? l.a.createElement(
                            "div",
                            { className: "relogin-section" },
                            l.a.createElement(
                              "div",
                              { className: "info-danger-warn" },
                              g ? l.a.createElement(Qe, { msg: g }) : null
                            ),
                            l.a.createElement(
                              "div",
                              { className: "relogin-info-content" },
                              l.a.createElement(
                                "div",
                                { className: "relogin-user" },
                                r
                                  ? l.a.createElement("img", {
                                      className: "user-img",
                                      src: r,
                                    })
                                  : l.a.createElement("span", {
                                      className: "user-img",
                                    }),
                                l.a.createElement(
                                  "span",
                                  { className: "user-name" },
                                  a
                                )
                              ),
                              l.a.createElement(Ut, null),
                              l.a.createElement(Ue, null),
                              l.a.createElement(
                                "div",
                                { className: "forget-password" },
                                e,
                                l.a.createElement(
                                  "span",
                                  {
                                    className: "forget-pass",
                                    onClick: function () {
                                      St({
                                        op: "click",
                                        page_sn: "79560",
                                        page_el_sn: "4113783",
                                      }),
                                        St({
                                          op: "impr",
                                          page_sn: "79560",
                                          page_el_sn: "4113783",
                                        });
                                      window.pinBridge.callNative({
                                        method: "goBrowser",
                                        url:
                                          "https://mms.pinduoduo.com/mallcenter/resetPwd/index",
                                      });
                                    },
                                  },
                                  "\u5fd8\u8bb0\u5bc6\u7801"
                                )
                              )
                            )
                          )
                        : null,
                      f
                        ? l.a.createElement(et, {
                            onMessageChange: c.bindMeassageInputHandle,
                            onMobileChange: c.bindPhoneInputHandle,
                            messageValue: s.bindMessage,
                            mobileValue: s.bindPhone,
                            onOk: c.bindPhoneSubmit,
                            getMessageHandle: c.getBindPhoneMessage,
                            errorMsg: s.errorMsg,
                          })
                        : null,
                      d
                        ? l.a.createElement(Qt, {
                            codeType: s.verifyPhoneType || 0,
                            disabled: !0,
                            onMessageChange: c.verifyMessageChangeHandle,
                            messageValue: s.verificationCode,
                            mobileValue: s.mobileText,
                            onOk: c.verifyMessageSubmit,
                            getMessageHandle: c.getVerifyMessageHandle,
                            errorMsg: s.errorMsg,
                          })
                        : null,
                      m ? l.a.createElement(Ft, null) : null,
                      u
                        ? l.a.createElement(Kt, { errorCode: s.errorCode })
                        : null
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.a.Component);
      sn.contextTypes = { loginApi: w.a.object, loginState: w.a.object };
      var ln = sn;

      function un(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var fn = (function (e) {
          Object(o.a)(n, e);
          var t = un(n);

          function n() {
            return Object(a.a)(this, n), t.apply(this, arguments);
          }

          return (
            Object(r.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  window.pinBridge.callNative({
                    method: "uploadResponseError",
                    tags: { main_stage: "token_expire_popup" },
                    report_type: "obs_event",
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    ce,
                    null,
                    l.a.createElement(ln, null)
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        pn =
          (n(884),
          [
            {
              label: "8-20 \u4f4d",
              checker: I,
            },
            {
              label:
                "\u53ea\u80fd\u5305\u542b\u5927\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u4ee5\u53ca\u7b26\u53f7\uff08\u4e0d\u5305\u542b\u7a7a\u683c\uff09",
              checker: R,
            },
            {
              label:
                "\u5927\u5199\u5b57\u6bcd/\u5c0f\u5199\u5b57\u6bcd/\u6570\u5b57/\u7b26\u53f7\u81f3\u5c11\u5305\u542b3\u79cd",
              checker: _,
            },
          ]);
      var dn,
        mn = function (e) {
          var t = e.value,
            n = e.checkItems,
            a = void 0 === n ? pn : n,
            r = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = A(e),
                n = e.length;
              if (n < 8 && t >= 4) return 1;
              if (n >= 8 && n <= 15) {
                if (4 === t) return 2;
                if (3 === t) return 1;
              }
              return n >= 16 && t >= 3 ? 2 : 0;
            })(t),
            o = ["\u4f4e", "\u4e2d", "\u9ad8"][r];
          return l.a.createElement(
            "div",
            { className: "password-checker" },
            l.a.createElement(
              "div",
              { className: "safety-level" },
              "\u5b89\u5168\u7a0b\u5ea6\uff1a",
              [0, 1, 2].map(function (e) {
                return l.a.createElement("div", {
                  key: e,
                  className: it()("safety-level-item", "level" + r, {
                    active: r >= e,
                  }),
                });
              }),
              l.a.createElement(
                "div",
                { className: "safety-level-desc level" + r },
                o
              )
            ),
            a.map(function (e, n) {
              var a = e.label,
                r = (0, e.checker)(t);
              return l.a.createElement(
                "div",
                { key: n },
                l.a.createElement(Te.a, {
                  type: r ? "check-circle_filled" : "close-circle_filled",
                  color: r ? "#62B82E" : "#FF5454",
                  marginRight: 9,
                  fontSize: 10,
                }),
                a
              );
            })
          );
        },
        gn = n(659),
        hn = n(660),
        vn = n.n(hn),
        bn =
          (n(885),
          function () {
            return (bn =
              Object.assign ||
              function (e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          }),
        yn = function (e, t, n, a) {
          return new (n || (n = Promise))(function (r, o) {
            function i(e) {
              try {
                s(a.next(e));
              } catch (t) {
                o(t);
              }
            }

            function c(e) {
              try {
                s(a.throw(e));
              } catch (t) {
                o(t);
              }
            }

            function s(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(i, c);
            }

            s((a = a.apply(e, t || [])).next());
          });
        },
        En = function (e, t) {
          var n,
            a,
            r,
            o,
            i = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = {
              next: c(0),
              throw: c(1),
              return: c(2),
            }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );

          function c(o) {
            return function (c) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i; )
                  try {
                    if (
                      ((n = 1),
                      a &&
                        (r =
                          2 & o[0]
                            ? a.return
                            : o[0]
                            ? a.throw || ((r = a.return) && r.call(a), 0)
                            : a.next) &&
                        !(r = r.call(a, o[1])).done)
                    )
                      return r;
                    switch (((a = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                      case 0:
                      case 1:
                        r = o;
                        break;
                      case 4:
                        return i.label++, { value: o[1], done: !1 };
                      case 5:
                        i.label++, (a = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = i.ops.pop()), i.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          i = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!r || (o[1] > r[0] && o[1] < r[3]))
                        ) {
                          i.label = o[1];
                          break;
                        }
                        if (6 === o[0] && i.label < r[1]) {
                          (i.label = r[1]), (r = o);
                          break;
                        }
                        if (r && i.label < r[2]) {
                          (i.label = r[2]), i.ops.push(o);
                          break;
                        }
                        r[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    o = t.call(e, i);
                  } catch (c) {
                    (o = [6, c]), (a = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, c]);
            };
          }
        },
        wn = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        On = function (e, t) {
          var n = "function" === typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var a,
            r,
            o = n.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
              i.push(a.value);
          } catch (c) {
            r = { error: c };
          } finally {
            try {
              a && !a.done && (n = o.return) && n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return i;
        };
      !(function (e) {
        (e[(e.OK = 0)] = "OK"),
          (e[(e.Null = 1)] = "Null"),
          (e[(e.Error = 2)] = "Error");
      })(dn || (dn = {}));
      var kn = {
        mobile: "\u624b\u673a\u53f7",
        password: "\u5bc6\u7801",
        verifyCode: "\u9a8c\u8bc1\u7801",
      };
      var Cn = Object(f.e)(function (e) {
          var t = this,
            n = On(Object(gn.a)(), 2),
            a = n[0],
            r = n[1],
            o = On(Object(s.useState)(!1), 2),
            i = o[0],
            c = o[1],
            u = On(
              Object(s.useState)({ mobile: "", password: "", verifyCode: "" }),
              2
            ),
            f = u[0],
            p = u[1],
            d = On(Object(s.useState)({}), 2),
            m = d[0],
            g = d[1],
            h = Object(s.useRef)();
          Object(s.useEffect)(function () {
            h.current = Object(re.f)();
          }, []);
          var v = function (e) {
              Array.isArray(e) || (e = [e]);
              var t = "string" === typeof m ? {} : m,
                n = e.reduce(function (e, t) {
                  var n,
                    a = E[t]();
                  if (a) return bn(bn({}, e), (((n = {})[t] = a), n));
                  var r = t;
                  e[r];
                  return wn(e, ["symbol" === typeof r ? r : r + ""]);
                }, t);
              return g(n), b(n);
            },
            b = function (e) {
              return void 0 === e && (e = m), Boolean(Object.keys(e).length);
            },
            y = Object(s.useCallback)(
              function () {
                if ("string" === typeof m) return m;
                var e = [],
                  t = [];
                Object.keys(kn).forEach(function (n) {
                  m[n] &&
                    (m[n] === dn.Null
                      ? e.push(kn[n])
                      : m[n] === dn.Error && t.push(kn[n]));
                });
                var n = [];
                return (
                  e.length &&
                    n.push(e.join("\u3001") + "\u4e0d\u80fd\u4e3a\u7a7a"),
                  t.length &&
                    n.push(t.join("\u3001") + "\u683c\u5f0f\u9519\u8bef"),
                  n.join("\uff1b")
                );
              },
              [m]
            ),
            E = Object(s.useMemo)(
              function () {
                return {
                  mobile: function () {
                    var e = f.mobile;
                    return e
                      ? (function (e) {
                          return /^1[3-9][\d*]{9}$/.test(e);
                        })(e)
                        ? dn.OK
                        : dn.Error
                      : dn.Null;
                  },
                  password: function () {
                    var e = f.password;
                    return e
                      ? I(e) && R(e) && _(e)
                        ? dn.OK
                        : dn.Error
                      : dn.Null;
                  },
                  verifyCode: function () {
                    return f.verifyCode ? dn.OK : dn.Null;
                  },
                };
              },
              [f]
            ),
            w = [
              {
                name: "mobile",
                placeholder: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7",
                prefixIcon: "user_filled",
                filter: function (e) {
                  return e.substr(0, 11).replace(/\D+/g, "");
                },
              },
              {
                type: i ? "text" : "password",
                name: "password",
                placeholder: "\u8bbe\u7f6e\u5bc6\u7801",
                prefixIcon: "unlock_filled",
                suffix: l.a.createElement(Te.a, {
                  type: i ? "eye" : "eye-invisible",
                  onClick: function () {
                    return c(!i);
                  },
                }),
                allowClear: !0,
                filter: function (e) {
                  return e.replace(/[\u4e00-\u9fa5\s]/g, "");
                },
                tip: l.a.createElement(mn, { value: f.password }),
              },
              {
                name: "verifyCode",
                placeholder: "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
                prefixIcon: "certificated_filled",
                suffixDivide: !0,
                suffix: l.a.createElement(
                  j.a,
                  {
                    type: "textPrimary",
                    onClick: function () {
                      return yn(t, void 0, void 0, function () {
                        var e;
                        return En(this, function (t) {
                          switch (t.label) {
                            case 0:
                              if (E.mobile()) return [2];
                              t.label = 1;
                            case 1:
                              return (
                                t.trys.push([1, 3, , 4]),
                                [
                                  4,
                                  Object(
                                    O.b
                                  )(
                                    "/earth/api/sendSms/sendMmsCreateMallVerificationCode",
                                    { mobile: f.mobile }
                                  ),
                                ]
                              );
                            case 2:
                              return t.sent(), r(), [3, 4];
                            case 3:
                              return (
                                (e = t.sent()),
                                g(
                                  e.errorMsg ||
                                    "\u9a8c\u8bc1\u7801\u53d1\u9001\u5931\u8d25"
                                ),
                                [3, 4]
                              );
                            case 4:
                              return [2];
                          }
                        });
                      });
                    },
                    disabled: a > 0 || Boolean(E.mobile()),
                    size: "large",
                  },
                  l.a.createElement(
                    "div",
                    { className: "get-verify-code" },
                    a > 0 ? a + "\u79d2" : "\u83b7\u53d6\u9a8c\u8bc1\u7801"
                  )
                ),
                filter: function (e) {
                  return e.replace(/\D+/g, "").substr(0, 6);
                },
              },
            ];
          return l.a.createElement(
            "div",
            { className: "info-part" },
            l.a.createElement(
              "div",
              { className: "register-panel" },
              l.a.createElement(
                "div",
                { className: "register-header" },
                l.a.createElement(
                  "div",
                  { className: "title" },
                  "\u6b22\u8fce\u6ce8\u518c"
                )
              ),
              l.a.createElement(
                "div",
                { className: "error-message" },
                b() ? l.a.createElement(Qe, { msg: y() }) : ""
              ),
              w.map(function (e) {
                var t = e.name,
                  n = e.placeholder,
                  a = e.prefixIcon,
                  r = e.suffix,
                  o = e.type,
                  i = e.allowClear,
                  c = void 0 !== i && i,
                  s = e.suffixDivide,
                  u = void 0 !== s && s,
                  d = e.filter,
                  m = void 0 === d ? function () {} : d,
                  g = e.tip,
                  h = void 0 === g ? null : g;
                return l.a.createElement(
                  "div",
                  {
                    key: t,
                    className: "register-item register-" + t,
                  },
                  l.a.createElement(Pe.a, {
                    type: o,
                    placeholder: n,
                    size: "large",
                    tipPlacement: "leftTop",
                    showTip: !0,
                    tip: h,
                    prefix: l.a.createElement(Te.a, {
                      type: a,
                      style: { fontSize: 16, color: "#999" },
                    }),
                    onBlur: function () {
                      "verifyCode" !== t && v(t);
                    },
                    value: f[t],
                    onChange: function (e) {
                      var n,
                        a = m(e);
                      p(bn(bn({}, f), (((n = {})[t] = a), n)));
                    },
                    allowClear: c,
                    suffixDivide: u,
                    suffix: r,
                    htmlAutoComplete: "new-password",
                  })
                );
              }),
              l.a.createElement(
                j.a,
                {
                  onClick: vn()(function () {
                    return yn(t, void 0, void 0, function () {
                      var e, t, n, a, r, o, i, c, s, l, u, p, d, m;
                      return En(this, function (b) {
                        switch (b.label) {
                          case 0:
                            if (v(["mobile", "password", "verifyCode"]))
                              return [2];
                            if (
                              ((e = f.mobile),
                              (t = f.password),
                              (n = f.verifyCode),
                              (a = {}),
                              !h.current)
                            )
                              return [3, 5];
                            b.label = 1;
                          case 1:
                            return b.trys.push([1, 4, , 5]), [4, h.current];
                          case 2:
                            return (
                              (r = b.sent()),
                              (t = Object(re.b)(t, r)),
                              [4, Object(re.g)(e, t)]
                            );
                          case 3:
                            return (a = b.sent()), [3, 5];
                          case 4:
                            return (
                              b.sent(),
                              Object(re.o)(new Error("encrypt or sign error")),
                              [3, 5]
                            );
                          case 5:
                            (o = V.a.parse(window.location.search) || {}),
                              (i = o.redirectUrl),
                              (c = o.platform),
                              (s = o.supplierInviteCode),
                              (b.label = 6);
                          case 6:
                            return (
                              b.trys.push([6, 8, , 9]),
                              [
                                4,
                                Object(O.b)(
                                  "/janus/api/register",
                                  bn(
                                    {
                                      mobile: e,
                                      code: n,
                                      password: t,
                                      overseaType: 0,
                                    },
                                    a
                                  )
                                ),
                              ]
                            );
                          case 7:
                            if (
                              ((l = b.sent()),
                              (u = l.username),
                              (p = l.mallId),
                              Object(se.c)({
                                page_sn: "10279",
                                op: "click",
                                page_el_sn: "84341",
                                system: c || "mms",
                                mallId: p,
                              }),
                              Object(re.j)(i))
                            ) {
                              if (window.location.host === Object(re.c)(i))
                                return (location.href = i), [2];
                              Object(re.d)(
                                i,
                                e,
                                "",
                                function (e) {
                                  var t = P("accessToken", e, i);
                                  (t = P("username", u, t)),
                                    (location.href = t);
                                },
                                function (e) {
                                  g(
                                    e.errorMsg ||
                                      "\u8df3\u8f6c\u5b50\u7cfb\u7edf\u5931\u8d25"
                                  );
                                }
                              );
                            } else (d = s ? "?supplierInviteCode=" + decodeURIComponent(s) : ""), (location.href = "/mallcenter/info/entry/index" + d);
                            return [3, 9];
                          case 8:
                            return (
                              (m = b.sent()),
                              g(
                                m.errorMsg ||
                                  m.error_msg ||
                                  "\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"
                              ),
                              [3, 9]
                            );
                          case 9:
                            return [2];
                        }
                      });
                    });
                  }, 500),
                  type: "danger",
                  width: "100%",
                  size: "large",
                },
                "\u6ce8\u518c"
              ),
              l.a.createElement(
                "div",
                { className: "goToLogin" },
                "\u5df2\u6709\u8d26\u53f7\uff1f",
                l.a.createElement(
                  j.a,
                  {
                    type: "textPrimary",
                    size: "small",
                    onClick: function () {
                      e.history.replace("/login" + e.location.search);
                    },
                  },
                  "\u7acb\u5373\u767b\u5f55"
                )
              )
            )
          );
        }),
        jn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function a() {
              this.constructor = t;
            }

            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((a.prototype = n.prototype), new a()));
          };
        })(),
        xn = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }

          return (
            jn(t, e),
            (t.prototype.render = function () {
              var e = V.a.parse(window.location.search) || {};
              return l.a.createElement(
                Oe,
                { platform: e.platform },
                l.a.createElement(Cn, null)
              );
            }),
            t
          );
        })(l.a.Component),
        Sn = n(1051);

      function Nn(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(c.a)(e);
          if (t) {
            var r = Object(c.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }

      var Pn = Object(u.a)(),
        Tn = (function (e) {
          Object(o.a)(n, e);
          var t = Nn(n);

          function n() {
            return Object(a.a)(this, n), t.apply(this, arguments);
          }

          return (
            Object(r.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    d,
                    null,
                    l.a.createElement(
                      f.c,
                      { history: Pn },
                      l.a.createElement(
                        f.d,
                        null,
                        l.a.createElement(f.b, {
                          exact: !0,
                          path: "/login",
                          component: mt,
                        }),
                        l.a.createElement(f.b, {
                          exact: !0,
                          path: ["/login/sso", "/login/sso/invalid"],
                          component: mt,
                        }),
                        l.a.createElement(f.b, {
                          exact: !0,
                          path: "/login/register",
                          component: xn,
                        }),
                        l.a.createElement(f.b, {
                          exact: !0,
                          path: "/login/electronObs",
                          component: rn,
                        }),
                        l.a.createElement(f.b, {
                          exact: !0,
                          path: "/login/obsReLogin",
                          component: fn,
                        }),
                        l.a.createElement(f.a, { to: "/login" })
                      )
                    ),
                    l.a.createElement(Sn.a, null)
                  );
                },
              },
            ]),
            n
          );
        })(s.Component);
      t.default = Tn;
    },
    659: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = function (e, t) {
          var n = "function" === typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var a,
            r,
            o = n.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
              i.push(a.value);
          } catch (c) {
            r = { error: c };
          } finally {
            try {
              a && !a.done && (n = o.return) && n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return i;
        };
      t.a = function () {
        var e = r(Object(a.useState)(0), 2),
          t = e[0],
          n = e[1],
          o = Object(a.useRef)(0),
          i = function (e) {
            n(e),
              e <= 0 ||
                (o.current = setTimeout(function () {
                  i(e - 1);
                }, 1e3));
          };
        return (
          Object(a.useEffect)(function () {
            return function () {
              o.current && clearTimeout(o.current);
            };
          }, []),
          [
            t,
            function (e) {
              void 0 === e && (e = 60), i(e);
            },
          ]
        );
      };
    },
    683: function (e, t, n) {},
    734: function (e, t, n) {},
    792: function (e, t, n) {},
    811: function (e, t, n) {},
    812: function (e, t, n) {},
    813: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAGrElEQVRIS43We2xT1x0H8O+5T19fXzu245g4JOQFCRAgPNaVQf+g6xQKEVQVQ+02VZ0GGtANSJMiUtGKrgqPNe0QCJiiqh2j06YyrWN0ox0dtBVkhUApDbQBQkresWPH8eva93mmRFq1dGXd+euco3POR78/fvoegv9rUELpiaB2u38tYcU8IVT4B3Lq0QGsJ9Y3XSf/60AXPalU3Px0We/l3rWjI+qDH3fTWZrJoHYm01tULL9fWjvjZG72wg88ZOXYvd65B0DJ2OUXHx+82v301SuJGjuniYKDQvDx4GQRkINIDGig2YyxoFbuLl8+/+ivqrce3k2I/VXoawGa+X3o9tvnzu8/TstK3KNYMSMKTyQJPqkBHANpcQnMBVU4287hwoUUnt0oDc+or1sqSat7vxGg8ddLxzou7v/t28b6WCyLx+f3wjwTATqiQLUCZ4UXmdN9oEuLEXzqW3jzUgHMaBibnggdo/d95xmFrBr9T2RKBblwW93ghU9fPf5WYnp7j4w9a2+DO9sPfigHO2fBcgGOch+0ixGYThakOgjftofQ+LKNRQXD+MEjgc88lcVNvrlNp/+NTAHoaEvj6XOO1tUbR7FzXRQ/nnsb2pFbQNYEyRPBUMBUTcAtgKYNaBkLwZe+iz/dKUTDL3W8ebQM3693NJP8p/b9F9B16LFQ8RKl5VR31ZNPNkSxd83neEjpBXNiCEgawDQH2DwRRlIHK/Cw7qaQpTaUHfeha1oN1jWZeKWlFJvrM8fTqrnLV/NC3wTyZQWftz3WFvBaG9/NLMKGHSnsq7+GupJx0Nd6YCc0WIu84AI8eJ8DdJxCPzWAnK7D/cJy3CqswroGC3ufC2FzXRypDPfX66rwyIoVu81J4G8HD4rFrosdPjY57xPpfjy6TcP2uj5s+V4M4693QR1Igl89HVJAhFSogHUpyP2mC2bOhmfDHLzV6cO2Aw68cWQ6Hi77AvGkEHbmVc+ftmxzZBLoOb2rKtnb166QmC9RsgirmngUiREceaIbZCyJ3KUwXJSAVURwMg8WLKjCgft2CSyWx/ZfK2i/5cK7vwugTL+BxKiVFvwFD5StPvDJJHDrxNafI5E4aCeH4V5YhR+2TsOFqxqaij7Ej0oiQEUA+j8Hofs4yGVukM4k7EofpIyGvw/50XBtNhbMlfHHVgvGjU5wsh+WM6+hrP7QgUng5hubGjlorZm7Pcgv8eDY4DI0v5LCBlxEA/0IZnkBaEiEltIgBRUIDh7GjXE4euJ4zZ6NvdpiNG/Px88WX0eiPwJ3aRlsjt1Ssqrt6CTQd6ZhrTUcPsG5BZ4jLMJiCdbsIKjs/xhNXDtkD4XgZIB8EbKTQJE9SDAS1I4EDsWK8Z5nHv58UESZlAZggKG6KoQCdb6a/ecngdErrYtTVzrOim7TDbcHvM3i2I1q7GwZRjkdQRGXQpGdhEJNMISFzgm4K8lI6xIupX1o2JSHHSv7YQkS2FwKpk7jTMmslYW1uy9NAgMfPN/IJVOt6XAEDFQwDAVTPhOHTzqhjgzgvU4PLM6BNQvDmF5g49gZDwZHGYDamDnLiVcb45DTw7BBQUDgLS+CwUvP+2tbX5wEItdblzPp6DupwahsjCXBEhUwsvDfPwd6NIZomsChKHCqYTiQw52xfKiCBM40oQTdcA99BsPmQHkGrkIPpGD+GOsqfNBVvvPal42W6t63y44P/SIxOEL0RA7p7gh4hUPggTlgEuMgdhYGRNg2gSBx4BQnCM9h/HIP1HEDYsgPMV+Gu8in2zz/tKfqpcNTOpnSc1z65ofNZnakWVezUnY4g+xgHO5SN8R8DyzVhJlNgxU5sJIEInDQ4jnkwhkIATfEYD6obuV4l/MZ77y9hwkhdArwxbndDjY2vIXa2V2OIOO1dANmUgXv5MCILBhCQAQnJjLF1nLIRtKghIXgcYL1+2CrBvRYJiMG/S8XLK3YQ8hWbQoQ7nw26PG6z4siKmMjMWTD42BMHQxrgmEs6MksRL8fNJtELqoCNsD7ZBCHBHti7nbCXxqCSZhuI60ud5XvCU8BJhaZ/paHWWT36fH4fDOegKmbMA0LtmaCWhScyMAcV0FcMhiBByPy4CUBjjw3GK/XBCd8ZFr0OaWw+f2vzYOJzUT7T3yZrL6eZtRVLDVrwJNinmE4I6XD4XeAGjYMVgInCYAo5BiO7zYJf4WV5L9kk5F3Qkva1Hsm2lfylPnHpgWFgXJfpexzVGRGNKeryFvNUM6ZSabPOgOuFETnSCwWvbPkp6ei9/pV/AsycNk38epl5gAAAABJRU5ErkJggg==";
    },
    814: function (e, t, n) {},
    815: function (e, t, n) {},
    816: function (e, t, n) {
      e.exports = n.p + "static/media/dmp.3eb61455.jpg";
    },
    817: function (e, t, n) {
      e.exports = n.p + "static/media/live.5901a9ce.png";
    },
    818: function (e, t, n) {
      e.exports = n.p + "static/media/pifa.db424694.png";
    },
    819: function (e, t, n) {
      e.exports = n.p + "static/media/fuwu.2264c3c4.png";
    },
    820: function (e, t, n) {
      e.exports = n.p + "static/media/community.f1c30229.png";
    },
    821: function (e, t, n) {
      e.exports = n.p + "static/media/rule.667edb72.jpg";
    },
    822: function (e, t, n) {
      e.exports = n.p + "static/media/logistics.37d0d978.png";
    },
    823: function (e, t, n) {},
    824: function (e, t, n) {},
    825: function (e, t, n) {},
    826: function (e, t, n) {},
    827: function (e, t, n) {},
    828: function (e, t, n) {},
    829: function (e, t, n) {
      e.exports = n.p + "static/media/scan.20494a13.png";
    },
    830: function (e, t, n) {},
    831: function (e, t, n) {},
    832: function (e, t, n) {},
    880: function (e, t, n) {},
    881: function (e, t, n) {},
    882: function (e, t, n) {},
    883: function (e, t, n) {},
    884: function (e, t, n) {},
    885: function (e, t, n) {},
  },
]);
//# sourceMappingURL=http://esxftfvh.com/msfe/sourcemap/login/static/js/7.28dd4f70.chunk.v20210407195834_b9df400d.js.map
