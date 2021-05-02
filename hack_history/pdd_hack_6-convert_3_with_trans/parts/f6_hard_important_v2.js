var math = require("mathjs");
var addeventlistener = require("addeventlistener");
const hackI = require("../hack_i");
const readCookie = require("../utils/readCookie");
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./localstorage");
}

const ENABLE_RANDOM = false;

var window = this;
this.location = {
  href: "https://yingxiao.pinduoduo.com/marketing/main/center/search/list",
};
this.history = {};
this.parseInt = parseInt;
(this.outerHeight = 1347),
  (this.outerWidth = 2354),
  (this.innerHeight = 329),
  (this.innerWidth = 2354),
  (this.screenLeft = 1394),
  (this.screenTop = 47),
  (this.screenX = 1394),
  (this.screenY = 47),
  (this.localStorage = localStorage);
this.document = {
  addEventListener: addeventlistener,
  cookie: readCookie(),
};
this.navigator = {
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",
  appVersion:
    "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",
  product: "Gecko",
  productSub: "20030107",
  platform: "MacIntel",
  language: "zh-CN",
  vendor: "Google Inc.",
  vendorSub: "",
  appCodeName: "Mozilla",
  appName: "Netscape",
  onLine: true,
  webdriver: false,
  _phantom: false,
  callPhantom: false,
};
this.Math = math;
this.Date = Date;
this.screen = {
  availHeight: 1417,
  availLeft: 1280,
  availTop: 23,
  availWidth: 2560,
  colorDepth: 24,
  height: 1440,
};

module.exports = function (e, t, n) {
  console.log("entered func6");

  ("use strict");
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
      n6 = n(6),
      n2 = n(2),
      n15 = n(15),
      n18 = n(18),
      d = [
        "wYtcP2me",
        "cdvofSosWRTRWOP2CLumW4RdJ8kW",
        "sxxcQMFcNq==",
        "WPJcUCoqwuO=",
        "WR82WP4=",
        "WRvNfCoxhSo0WRtcRCoJAwaKWRtcLmoXW77cVCo8dHCHWOy=",
        "vmkbWRpcHsZcR8oBW7uCWPxdGmk6WRqu",
        "emoxWRpdIZS=",
        "WOepaCooBW==",
        "WPKDcCogFW==",
        "FmkpW6JdMCof",
        "oSoCW57cM1q=",
        "aCkTWQ0Gy0mAsx3dHaxdQdj9",
        "W4hcMdBdGSkV",
        "WRebWQaRiq==",
        "eCkunftdVCkDWQS=",
        "mCorW7jWsW==",
        "F13cIrVcHby6rSkrW49R",
        "W6NcTcK=",
        "W55mvs7dQW==",
        "WR1Km8oFpG==",
        "C8kqtYRdTW==",
        "WP4xlmouxCoHWQRdJGGp",
        "DCkNWQVcRqK=",
        "hmkPWRe5wviHt3VdIa==",
        "WPrVcSok",
        "WQ0VW5GMW5ysvXNcNa==",
        "qCkLmmolsa==",
        "cmkvWR4EW5uAWRehnSkpWPW=",
        "pmonWRa=",
        "W6n4yXRdKq==",
        "W5RdUCo5WQC=",
        "iCoxWQNdKZS=",
        "WPavW6edW60=",
        "WQL4W7v4W7q=",
        "DSo+W7hdOY4=",
        "WPf6W6rCW53cS8ok",
        "ysCuW47dNq==",
        "wHq+W5ZdQhRcRCoKW4TjchKNW6Ww",
        "WPVcSc1pW6K=",
        "WOCzkq==",
        "WP7cS8ouu1pdI8o1xq==",
        "aCkppf3dV8kgWOu=",
        "vmk8CY7dSW==",
        "W73cQZBdGCk1",
        "sgRcIqVcJW==",
        "yYeghXG=",
        "WQFdJxysCq==",
        "w8kiWRtcGtpcGG==",
        "W7/dUsTIW4C=",
        "WQ4OW5uHW40urWFcNG==",
        "W4JcHSkch8kV",
        "W55CxJldKW==",
        "Cg0NW5bS",
        "W4RcQs7dGCkM",
        "u8omWPldMbLr",
        "WPZdK0OdymomW58rW4VcKmknrwPRWQ9a",
        "w8kQWOlcHuC=",
        "W5biqZxdLW==",
        "WRhdN8ojeLS=",
        "EwmDv1y9WQKv",
        "WOa3WP/dUMq=",
        "uCkstqhdVa==",
        "WO7cNWPHW4q=",
        "fIzpdCoIWRXMWPvH",
        "WOpdRSkIfXi=",
        "WOC4WRJdKKa=",
        "A0RcVd7cNa==",
        "WPecWPuxcG==",
        "emkShNZdSW==",
        "WOunlCosr8ofWRFdIW4t",
        "DmkfW4SbWOu=",
        "WOOdWPufkG==",
        "FCocWOJdKW==",
        "WR8QW48yW4e=",
        "qNdcPhdcJmk6",
        "F8kukmoLEG==",
        "WOvTmmokd8o4WPxcUa==",
        "WQBdKNRdSK4=",
        "ySkuFda=",
        "WPFcRc5aW4W=",
        "WOKupmowr8orWR/dJbiE",
        "g2ldRLOc",
        "eSoPW7HtvG==",
        "fSoaW4VcL1W=",
        "rmoXW4ldLWJdT2tdK8klowvQWRea",
        "WQZdUCkaasxcJmkgWOmka8kepW==",
        "u8oWW47dNbZdPMhdQSku",
        "WQewWQVdULi=",
        "W7xdRbDpW4i=",
        "zYNcJvmg",
        "WOJdGvqnuG==",
        "W6axWRBdN8o0fCovFLPzqgNdMwFdPfaoDG==",
        "CCkHW5GZWRi=",
        "zJmRW7NdGq==",
        "zvJcGhtcJa==",
        "hG7dGmkktq==",
        "kqBdICkQwG==",
        "W7H1oCkMWQq=",
        "W7tdQ8o7WQtcGG==",
        "W4fFuqZdOG==",
        "yCopW63dKGm=",
        "CSk6vb/dNW==",
        "WQO4W5u2W4SpwaZcIW==",
        "w8oXD8o/ya==",
        "WPCzWR8tfq==",
        "wu3cIIdcOa==",
        "W7lcNmkzjSkR",
        "kSk+WReGtG==",
        "W4CxWQRdGG==",
        "W7JdHbbUW40oW6xcRqdcUmkL",
        "WQqCWPCYkG==",
        "smkiW7WfWOms",
        "umkEeCoNuG==",
        "vmo2WQNdJdq=",
        "WRCIWPtdMvS=",
        "W77cVZ7dT8k3W6n8",
        "kuldPgaK",
        "W4hdVSk/nKi=",
        "WRjdW7jvW6u=",
        "WPRdRNNdM0W=",
        "gSoCW6NcPenEumoUWOi=",
        "gSocW6NcOffsBCoUWPtcUHDly8kAWPVdMa==",
        "aM/dU3C6sw3dO8oM",
        "mH1mdmod",
        "WPNdMemhy8oDW54iW6BcJCkxxMfgWQvCWQJdJmkoWRGSW67cNq==",
        "W6NdSSocWPhcIq==",
        "tSkmW6agWOmuW6ej",
        "F3FcTG7cRW==",
        "WRKZcCoFxW==",
        "sSk2EHldTW==",
        "FqS8ad0UD8ob",
        "iuxdMeeX",
        "y8o8zmkuoG==",
        "cmoxW7NcHeLsu8oUWOJcUdbaFSkx",
        "nCojWQ7dUWS=",
        "W6VcPmk6cSk7",
        "WRJdSCkWjrS=",
        "bSkrW6NcMNxcLSkzW6Xc",
        "smkLgCoPxSoWz33cRa==",
        "WP7dS8kNWO7cKG==",
        "k8onWRhdTW==",
        "vCopWPNdLH1lE1/cGG==",
        "WP7cGbb9W5pdQfW=",
        "o8osW6n7tCoXWQlcP8k8mq==",
        "WRSmW4VcH8ox",
        "WQGuW4qQW60=",
        "vg7cQ3BcNa==",
        "W4tdI8ouWRxcOG==",
        "FLVcRJZcKW==",
        "w8ogWOxdIa==",
        "W7vJlmkQWOq=",
        "WRddGemuDW==",
        "W6W5WPpdQ8o7",
        "ESk5W5m=",
        "WRpcGJjZW7C=",
        "WQavWQOepmkk",
        "D8kMuq/dMa==",
        "WQVdT2tdOKq=",
        "WOxdTSo8eea=",
        "W77cMmkqjW==",
        "WRW8WPtdL1C=",
        "W5GiWQFdJCoLnmoPBezQu37dO3RdJvq=",
        "WQJdT8knbd3cGmkSWPSMa8kw",
        "WRJdRSkNWQ/cLq==",
        "o0JdGfir",
        "iCo9W4NcHhPYCmoD",
        "bdvdeG==",
        "WQmeWRCvnSkqkI9H",
        "D8k2W5BdV8oudSkmWRNdNmkfW5rmurG=",
        "WPNdSmoWiq==",
        "WQ4rWRddUfm=",
        "WPlcJavLW53dRKa=",
        "WOjUcSoDga==",
        "etfchCo/WQfPWOb2",
        "W57dKW9QW49bW4xcOrdcUG==",
        "W6xdPXXpW6a=",
        "pCoqWQZdRJ3cR8kCk8oyWRLwgW==",
        "WR/dVCo7hNy=",
        "nCkfWOOltW==",
        "DSoXs8opuvVdICoeyCoijG==",
        "hfxdH14d",
        "r8kNWP/cILq=",
        "WOhdS27dQh0=",
        "s0CMW59XWRZcIqHd",
        "oSkjaK3dKa==",
        "CSoSW7tdRGi=",
        "n8oGW5xcH1m=",
        "dmkioeddPa==",
        "gmoAWOldTd0=",
        "x0/cLZRcHa==",
        "W7WFWPhdTSoq",
        "rmkoW50NWQW=",
        "W43dVSoKWOhcRa==",
        "xLGQW5nUWP/cGqfhsG==",
        "WRpdO8kKWQxcRa==",
        "AxaxFx8=",
        "WQNdQ8oumui=",
        "sSkjWQdcOK4=",
        "iqldLq==",
        "dSkaawZdPW==",
        "WOlcHHzQW5tdIve1WPese8kieWWyvq3cNd0=",
        "W6VcOYRdH8kZW7n8",
        "WOirW77cPSoE",
        "B8kLW4RdHmomfmkLWRVdLG==",
        "WQBdPmkPWRZcRG==",
        "xSobWRhdLIi=",
        "WP/dJ8kZWRxcPG==",
        "W7zftI/dGSk2ASkeltlcHSkUfCkS",
        "WRKhW57cT8ok",
        "dCoBW6pcPq==",
        "WRxdN8kqgau=",
        "W5b4eG==",
        "WOrfj8osoa==",
        "EqS+hZuIFa==",
        "WRWKWPhdMfC=",
        "yCkmWOtcH1C=",
        "W53dRrbXW4y=",
        "smk1fq==",
        "cCoxWOVdIHm=",
        "W7tcU8kIoSkt",
        "W6ynWRpdPmou",
        "W49ftJ/dJ8kbCCksmqm=",
        "FvVcV1FcHW==",
        "rmokASkbcCopW5z1W7W=",
        "WO7dLfWPESofW6ukW7C=",
        "sCkbW6SNWPC=",
        "umkAcSoRvmkZ",
        "qNWwq1uSWQGmWOBcJmkesKfXW7K=",
        "WRKXWPpdLuZcPa==",
        "lCo4W7ZcIMS=",
        "jWJdKmkYy8ouuhK=",
        "f8knjLddUmkuWQG=",
        "WQBdGK7dH0K=",
        "W7xcMCkDkSkBW5OstSkS",
        "WPtdSmkSWRhcHCog",
        "jt94gmo7",
        "uwzVWQZcLa==",
        "WQldT2FdTxRcJCkgjX4=",
        "rSkchmoLtCkZF8kgW4ddLu7cQSkoW4SVFq==",
        "WOuGWOeadq==",
        "japdHSkKBmosug8Z",
        "FCokW7RdJJC=",
        "a8orW5NcLvm=",
        "vN8auveNWRu=",
        "W5/dLmo7WRJcNq==",
        "yfNcLaZcIHW=",
        "WPiMW57cQG==",
        "wCowA8kc",
        "DmkaW4mKWPq=",
        "WPeLW4BcQmorWRDy",
        "qtxcLNmz",
        "WQxcImosD1i=",
        "WOPcW41CW70=",
        "C8oIsCkpcW==",
        "WOtcJavSW47dQeaM",
        "W6dcUIZdGCkMW6z7Egu=",
        "bcBdKCk5tG==",
        "WP3cNJTWW6y=",
        "yYVcSheV",
        "WQxdPSk4WRJcJmoyWRP/WO8=",
        "mCkfphVdHW==",
        "WQuAaConrG==",
        "W5nBW4JcGmknpW==",
        "BCoDW6RdSYG=",
        "DmkFW6m7WPq=",
        "W6tcQcZdJSk5",
        "WRWdWQWek8kSnJzJWPlcJG==",
        "WRtdRwmrvW==",
        "B8kIW5BdMa==",
        "WQWUf8oCwq==",
        "WQFdVMCczq==",
        "WPCzW74yW74=",
        "DuKAyfu=",
        "sxhcSa==",
        "rCkTW73dPmoe",
        "C8oiWQtdMG4=",
        "ncfOmmoG",
        "W4/dSCkSfq==",
        "v8k5aSoYrmoNDN7cVqmRWOK=",
        "vSk8g8oLra==",
        "FWJcPvaQncbNW68=",
        "BWeJmIe1DSoFWPLHWOJdS8kP",
        "W7/cLSkymG==",
        "WR/dG2mWrq==",
        "AXdcOfWGfsTRW6XtCW==",
        "yKRcLrZcIGuMzSkv",
        "FxXS",
        "W55pW4NcJSk4jrlcNgq/sW==",
        "WOhdVmo9j1C=",
        "oSohW5RcLKG=",
        "omooWQBdOGZcHmkCoSoZWRm=",
        "jgldMKiN",
        "W781WO0=",
        "dmkbgfxdIW==",
        "kajlnSou",
        "hmkVWReGueWHswy=",
        "WOBcIWa=",
        "CmoQw8opw1ZdIG==",
        "g8kLl3ZdKa==",
        "WPOFWO7dIwC=",
        "WQzOW7nzW5lcUCoWW7Dmo2pcTHpcP0TJsq==",
        "lmk1pNFdIa==",
        "W5T4aSk9WQmygKO=",
        "EWWT",
        "tSovD8oVyG==",
        "W4/dVmk2o08=",
        "WPJcSmoWtgu=",
        "WPRdHmkqaZS=",
        "WOBdTMRdPehcJCkjmG==",
        "W5VcKIRdHmkI",
        "WQ7cGZr8W70=",
        "W67dQSoIWRBcLCkoWP/cPHO=",
        "tsaHpJ0=",
        "xCo2s8odra==",
        "WOqzlCoEq8o3W77dJbuFkW==",
        "A2qYW55b",
        "WQCxpCosr8o8WRFdLqG=",
        "u2aqrhKUWQmwWRC=",
        "WRvCW411W7a=",
        "rCoSW4FdNGRdPG==",
        "yCoVvmobCW==",
        "DSkzkCo+CG==",
        "ESkIpSoiCG==",
        "yWa7W67dUa==",
        "W77cVZ7dT8k0W7rQzuGmkG==",
        "W4pcRdFdUSkG",
        "BmkEzr/dQa==",
        "WPxdN8ktddi=",
        "WRy/W487W4K=",
        "WOKxnSoCxmo3",
        "v3/cTwZcJCkwymoS",
        "W47dLSo6WQFcRG==",
        "WPVdMfWdD8okW5K=",
        "ws3cKv0M",
        "WO7dQgRdJ33cISkl",
        "WRS6WO4ffa==",
        "yCoSx8kddG==",
        "W4JcJrtdG8kT",
        "W4KTWPBdM8oD",
        "ySkKWQRcIIq=",
        "W4KuWQ3dO8oi",
        "x8kfW6ChWOGsW5W=",
        "yCkQeSo0Ba==",
        "xCofymkdgSohW591W6S=",
        "yCoTx8k9ca==",
        "Dw0UW7ni",
        "DCoVrCoUDG==",
        "BGNcOKaHocb2",
        "FIKkhXe=",
        "v3zSWOxdSCkoa3WsWRDcW6dcHSoV",
        "WR3cGCoQz2O=",
        "sComBSonqG==",
        "WPJcGG5XW4K=",
        "WO9IW6ffW53cUCoo",
        "W4PixY7dGq==",
        "W6FcQZNdUSkKW6LRCMuapa==",
        "W45EW4tcLCkg",
        "W4JcVCknoSkD",
      ];
    (r = d),
      (o = 175),
      (function (e) {
        for (; --e; ) r.push(r.shift());
      })(++o);
    var indexOf = "indexOf",
      bind = "bind",
      shift = "shift",
      join = "join",
      split = "split",
      replace = "replace",
      slice = "slice",
      map = "map",
      toString = "toString",
      parseInt = "parseInt",
      target = "target",
      id = "id",
      now = "now",
      handleEvent = "handleEvent",
      fromCharCode = "fromCharCode",
      substring = "substring",
      pow = "pow",
      random = "random",
      serverTime = "serverTime",
      cookie = "cookie",
      addEventListener = "addEventListener",
      document = "document",
      availHeight = "availHeight",
      availWidth = "availWidth",
      screen = "screen",
      port = "port",
      href = "href",
      location = "location",
      timestamp = "timestamp",
      clientY = "clientY",
      clientX = "clientX",
      elementId = "elementId",
      length = "length",
      concat = "concat",
      forEach = "forEach",
      push = "push",
      init = "init",
      data = "data",
      _date0 = 0,
      _date1 = void 0,
      _date2 = void 0,
      _dataLen = 1,
      _basicInfo = [],
      _init = function () {},
      _window = window,
      _navigator = void 0,
      _date = void 0,
      _math = math,
      _history = void 0,
      _isTouchStart = void 0,
      ue = (void 0 === e ? "undefined" : i(e)) === "undefined" ? null : e;
    if (
      ("undefined" == typeof _window ? "undefined" : i(_window)) !== "undefined"
    )
      for (var ce = "4|0|3|5|1|2"["split"]("|"), de = 0; ; ) {
        switch (ce[de++]) {
          case "0":
            _navigator = _window["navigator"];
            continue;
          case "1":
            _history = _window["history"];
            continue;
          case "2":
            _isTouchStart = "ontouchstart" in _window[document];
            continue;
          case "3":
            _date = _window["Date"];
            continue;
          case "4":
            console.log("ne init to be window");
            _window = window;
            continue;
          case "5":
            _math = _window["Math"];
            continue;
        }
        break;
      }
    var packBasicInfo = function () {
      var t = {};
      (t["nBVKq"] = function (e, t) {
        return e !== t;
      }),
        (t["BtMvS"] = "number"),
        (t["HiMFr"] = function (e, t) {
          return e !== t;
        }),
        (t["TIluN"] = function (e, t) {
          return e < t;
        }),
        (t["rOKDb"] = function (e, t) {
          return e < t;
        }),
        (t["KupHE"] = function (e, t) {
          return e !== t;
        }),
        (t["nkmxu"] = "undefined"),
        (t["OcbKG"] = function (e, t) {
          return e === t;
        }),
        (t["cXMif"] = function (e, t) {
          return e === t;
        }),
        (t["Drtig"] = function (e, t) {
          return e === t;
        }),
        (t["JDIJG"] = function (e, t) {
          return e === t;
        }),
        (t["FVNkl"] = "Error"),
        (t["lcTTv"] = function (e, t) {
          return e === t;
        }),
        (t["IJybF"] = "Brian Paul"),
        (t["nbMmZ"] = function (e, t) {
          return e === t;
        }),
        (t["VVYaT"] = "Mesa OffScreen"),
        (t["NVkOY"] = function (e, t) {
          return e in t;
        }),
        (t["QgRZA"] = "webdriver"),
        (t["CkXav"] = "hasOwnProperty"),
        (t["dUUwL"] = function (e, t) {
          return e > t;
        }),
        (t["XRXFv"] = "ipcRenderer"),
        (t["IZMWA"] = function (e, t) {
          return e > t;
        }),
        (t["KSWFU"] = "native code"),
        (t["SfiCV"] = function (e, t) {
          return e << t;
        });
      var n = t,
        r = [];
      n["nBVKq"](i(_window["outerHeight"]), n["BtMvS"]) ||
      n["HiMFr"](i(_window["outerWidth"]), n["BtMvS"])
        ? (r[0] = 1)
        : (r[0] =
            n["TIluN"](_window["outerHeight"], 1) ||
            n["rOKDb"](_window["outerWidth"], 1)
              ? 1
              : 0),
        (r[1] =
          (i(_window["callPhantom"]) !== "undefined") ||
          (i(_window["_phantom"]) !== "undefined")
            ? 1
            : 0),
        (r[2] = (i(_window["Buffer"]) === "undefined") ? 0 : 1),
        (r[3] = (i(_window["emit"]) === "undefined") ? 0 : 1),
        (r[4] = (i(_window["spawn"]) === "undefined") ? 0 : 1),
        (r[5] = n["cXMif"](_navigator["webdriver"], !0) ? 1 : 0),
        (r[6] =
          n["cXMif"](i(_window["domAutomation"]), "undefined") &&
          n["Drtig"](i(_window["domAutomationController"]), "undefined")
            ? 0
            : 1);
      try {
        n["JDIJG"](i(Function["prototype"][bind]), "undefined") && (r[7] = 1),
          n["KupHE"](
            Function["prototype"][bind][toString]()[replace](
              /bind/g,
              n["FVNkl"]
            ),
            Error[toString]()
          ) && (r[7] = 1),
          n["KupHE"](
            Function["prototype"][toString][toString]()[replace](
              /toString/g,
              n["FVNkl"]
            ),
            Error[toString]()
          ) && (r[7] = 1);
      } catch (e) {}
      (r[8] =
        _navigator["plugins"] && n["JDIJG"](_navigator["plugins"][length], 0)
          ? 1
          : 0),
        (r[9] = n["lcTTv"](_navigator["languages"], "") ? 1 : 0),
        (r[10] =
          n["lcTTv"](_window["vendor"], n["IJybF"]) &&
          n["nbMmZ"](_window["renderer"], n["VVYaT"])
            ? 1
            : 0),
        (r[11] =
          _window["Modernizr"] && !_window["Modernizr"]["hairline"] ? 1 : 0),
        (r[12] = n["nbMmZ"](_window["chrome"], void 0) ? 1 : 0),
        (r[13] = n["NVkOY"](n["QgRZA"], _navigator) ? 1 : 0),
        (r[14] = _navigator[n["CkXav"]](n["QgRZA"]) ? 1 : 0),
        (r[15] =
          _history["back"] &&
          n["dUUwL"](_history["back"][toString]()[indexOf](n["XRXFv"]), -1)
            ? 1
            : 0),
        (r[16] = ue && ue["versions"] && ue["versions"]["modules"] ? 1 : 0);
      try {
        r[17] = n["IZMWA"](
          _window[document]["getElementById"][toString]()[indexOf](n["KSWFU"]),
          -1
        )
          ? 0
          : 1;
      } catch (e) {
        r[17] = 0;
      }
      for (var o = 0, a = 0; n["rOKDb"](a, r[length]); a++)
        o += n["SfiCV"](r[a], a);
      return o;
    };

    function packChangeTouchEvent(e, t) {
      var i = t || _window["event"],
        a = i[target][id] || "",
        s = {};
      if (
        ((s[elementId] = a),
        (s[timestamp] = _date[now]() - _date0),
        _isTouchStart)
      ) {
        var u = i["changedTouches"];
        u &&
          u[length] &&
          ((s[clientX] = u[0][clientX]), (s[clientY] = u[0][clientY]));
      } else (s[clientX] = i[clientX]), (s[clientY] = i[clientY]);
      e[data][push](s), e[data][length] > _dataLen && e[data][shift]();
    }

    // function pe(e) {
    //     return (
    //         (window.document.cookie
    //             ? window.document.cookie.split('; ')
    //             : []).some(function (item) {
    //                 var a = item.split('='),
    //                     s = a.slice(1).join('='),
    //                     u = a[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    //                 return (
    //                     s = s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)),
    //                     e === u;
    //                 )
    //         })
    //     )
    // }

    function packCookie(e) {
      var o = {};
      return (
        (_window[document][cookie]
          ? _window[document][cookie][split]("; ")
          : [])["some"](function (n) {
          var a = n[split]("="),
            s = a[slice](1)[join]("="),
            u = a[0][replace](/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          return (
            (s = s[replace](/(%[0-9A-Z]{2})+/g, decodeURIComponent)),
            (o[u] = s),
            e === u
          );
        }),
        e ? o[e] || "" : o
      );
    }

    var packN2Ek4_Click = {
        init: function () {
          var t = {};
          (t["TJydC"] = "clickEventData"),
            (t["ObXzs"] = "touchStartEventData"),
            (t["sePqJ"] = "MouseDownEventData"),
            (t["TqvAq"] = function (e, t) {
              return e + t;
            });
          var n = t;
          packN2Ek4_Click[data] = [];
          var r = n2["gos"](packN2Ek4_Click, n["TJydC"]),
            o = _isTouchStart
              ? n2["gos"](packN2Ek1_le, n["ObXzs"])
              : n2["gos"](n18["MouseDownEvent"], n["sePqJ"]);
          packN2Ek4_Click.c = n2["pbc"](n["TqvAq"](r, o));
        },
        handleEvent: function (e) {
          var n = {};
          (n["uheEq"] = function (e, t) {
            return e - t;
          }),
            (n["PNweT"] = function (e, t) {
              return e > t;
            });
          var r = n,
            o = e || _window["event"],
            i = o[target][id] || "",
            a = {};
          (a[elementId] = i),
            (a[clientX] = o[clientX]),
            (a[clientY] = o[clientY]),
            (a[timestamp] = r["uheEq"](_date[now](), _date0)),
            packN2Ek4_Click[data][push](a),
            r["PNweT"](packN2Ek4_Click[data][length], _dataLen) &&
              packN2Ek4_Click[data][shift]();
        },
        packN: function () {
          console.log("packing he");
          packN2Ek4_Click[data] = [require("../utils/dataPack")];
          var e = [][concat](n2.ek(4, packN2Ek4_Click[data]));
          return (
            packN2Ek4_Click[data][forEach](function (t) {
              var n = n2.sc(t[elementId]);
              e = e[concat](
                n2.va(t[clientX]),
                n2.va(t[clientY]),
                n2.va(t[timestamp]),
                n2.va(n[length]),
                n
              );
            }),
            (e = e[concat](packN2Ek4_Click.c))
          );
        },
      },
      packN2Ek1_le = {
        init: function () {
          packN2Ek1_le[data] = [];
        },
        handleEvent: function (e) {
          packChangeTouchEvent(packN2Ek1_le, e);
        },
        packN: function () {
          var e = f,
            t = {};
          if (
            ((t["MHVQT"] = function (e, t) {
              return e === t;
            }),
            t["MHVQT"](packN2Ek1_le[data][length], 0))
          )
            return [];
          var n = [][concat](n2.ek(1, packN2Ek1_le[data]));
          return (
            packN2Ek1_le[data][forEach](function (e) {
              var t = n2.sc(e[elementId]);
              n = n[concat](
                n2.va(e[clientX]),
                n2.va(e[clientY]),
                n2.va(e[timestamp]),
                n2.va(t[length]),
                t
              );
            }),
            n
          );
        },
      },
      packN2Ek7_Port = {
        init: function () {
          (packN2Ek7_Port[data] = {}),
            (packN2Ek7_Port[data][href] = _window[location][href]),
            (packN2Ek7_Port[data][port] = _window[location][port]),
            (packN2Ek7_Port.c = n2["pbc"](
              n2["gos"](packN2Ek7_Port, "locationInfo")
            ));
        },
        packN: function () {
          console.log("packing port");
          packN2Ek7_Port[data] = {
            href: location.href,
            port: location.port,
            c: n2["pbc"](n2["gos"](packN2Ek7_Port, "locationInfo")),
          };
          var r = n2.ek(7),
            o = packN2Ek7_Port[data],
            i = o.href,
            a = void 0 === i ? "" : i,
            u = o.port,
            c = void 0 === u ? "" : u;
          if (!a && !c) return [][concat](r, packN2Ek7_Port.c);
          var d = a[length] > 128 ? a[slice](0, 128) : a,
            l = n2.sc(d);
          return [][concat](
            r,
            n2.va(l[length]),
            l,
            n2.va(c[length]),
            c[length] === 0 ? [] : n2.sc(packN2Ek7_Port[data][port]),
            packN2Ek7_Port.c
          );
        },
      },
      packN2Ek8_WindowSize = {
        init: function () {
          (packN2Ek8_WindowSize[data] = {}),
            (packN2Ek8_WindowSize[data][availWidth] =
              _window[screen][availWidth]),
            (packN2Ek8_WindowSize[data][availHeight] =
              _window[screen][availHeight]);
        },
        packN: function () {
          console.log("packing window size");
          packN2Ek8_WindowSize[data] = {
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
          };
          return [][concat](
            n2.ek(8),
            n2.va(packN2Ek8_WindowSize[data][availWidth]),
            n2.va(packN2Ek8_WindowSize[data][availHeight])
          );
        },
      },
      packN2Ek9_Random = {
        init: function () {
            // window.parseInt(0.5*(window.math.pow(2, 52)+1)).toString()
          _window = window;
          packN2Ek9_Random[data] =
            _window[parseInt](
               _math[random]()  *
                (_math[pow](2, 52) + 1)[toString](),
              10
            ) +
            _window[parseInt](
               _math[random]()  *
                (_math[pow](2, 30) + 1)[toString](),
              10
            ) +
            "-" +
            _date1;
        },
        packN: function () {
          return (
            packN2Ek9_Random[init](),
            [][concat](n2.ek(9, packN2Ek9_Random[data]))
          );
        },
      },
      packN2Ek10_Fe = {
        init: function () {
          packN2Ek10_Fe[data] = packBasicInfo();
        },
        packN: function () {
          return [][concat](n2.ek(10), n2.va(packN2Ek10_Fe[data]));
        },
      },
      packN2Ek11_Href = {
        init: function () {
          packN2Ek11_Href[data] = n2["pbc"](
            _window[location][href] ? _window[location][href] : ""
          );
        },
        packN: function () {
          return packN2Ek11_Href[data][toString]()[length]
            ? [][concat](n2.ek(11), packN2Ek11_Href[data])
            : [];
        },
      },
      packN2Ek12_DeviceOrientationEvent = {
        init: function () {
          packN2Ek12_DeviceOrientationEvent[data] = _window[
            "DeviceOrientationEvent"
          ]
            ? "y"
            : "n";
        },
        packN: function () {
          return [][concat](n2.ek(12, packN2Ek12_DeviceOrientationEvent[data]));
        },
      },
      packN2Ek13_DeviceMotionEvent = {
        init: function () {
          packN2Ek13_DeviceMotionEvent[data] = _window["DeviceMotionEvent"]
            ? "y"
            : "n";
        },
        packN: function () {
          return [][concat](n2.ek(13, packN2Ek13_DeviceMotionEvent[data]));
        },
      },
      packN2Ek14_ServerTime = {
        init: function () {
          packN2Ek14_ServerTime[data] = _date[now]() - _date2;
        },
        packN: function () {
          //  hack: 这是数据差，直接取3就可以了
          packN2Ek14_ServerTime[data] = 3;
          return (
            packN2Ek14_ServerTime[init](),
            [][concat](n2.ek(14, packN2Ek14_ServerTime[data]))
          );
        },
      },
      packN2_Ek15_UA = {
        init: function () {
          packN2_Ek15_UA[data] = _navigator["userAgent"];
        },
        packN: function () {
          return packN2_Ek15_UA[data][length]
            ? [][concat](n2.ek(15, packN2_Ek15_UA[data]))
            : [];
        },
      },
      packN2Ek16_17_CookieStorage = {
        init: function () {
          packN2Ek16_17_CookieStorage[data] = n15();
        },
        packN: function () {
          var r = [],
            o = {};
          return (
            (o["nano_cookie_fp"] = 16),
            (o["nano_storage_fp"] = 17),
            Object["keys"](packN2Ek16_17_CookieStorage[data])[forEach](
              function (e) {
                var t = [][concat](
                  packN2Ek16_17_CookieStorage[data][e]
                    ? n2.ek(o[e], packN2Ek16_17_CookieStorage[data][e])
                    : []
                );
                r[push](t);
              }
            ),
            r
          );
        },
      },
      packN2Ek18_Referer = {
        init: function () {
          var r = _window[document]["referrer"] || "",
            o = r[indexOf]("?");
          packN2Ek18_Referer[data] = r[slice](0, o > -1 ? o : r[length]);
        },
        packN: function () {
          return packN2Ek18_Referer[data][length]
            ? [][concat](n2.ek(18, packN2Ek18_Referer[data]))
            : [];
        },
      },
      packN2Ek19_UserId = {
        init: function () {
          packN2Ek19_UserId[data] = packCookie("pdd_user_id");
        },
        packN: function () {
          return packN2Ek19_UserId[data][length]
            ? [][concat](n2.ek(19, packN2Ek19_UserId[data]))
            : [];
        },
      },
      packN2Ek20_ApiUid = {
        init: function () {
          packN2Ek20_ApiUid[data] = packCookie("api_uid");
        },
        packN: function () {
          return packN2Ek20_ApiUid[data][length]
            ? [][concat](n2.ek(20, packN2Ek20_ApiUid[data]))
            : [];
        },
      },
      packN2Ek21 = {
        init: function () {
          packN2Ek21[data] = 0;
        },
        packN: function () {
          return [][concat](n2.ek(21, packN2Ek21[data]));
        },
      },
      packN2Ek22 = {
        init: function (e) {
          packN2Ek22[data] = e;
        },
        packN: function () {
          return [][concat](n2.ek(22, packN2Ek22[data]));
        },
      },
      packN2Ek23_PddVds = {
        init: function () {
          packN2Ek23_PddVds[data] = packCookie("pdd_vds");
        },
        packN: function () {
          return packN2Ek23_PddVds[data][length]
            ? [][concat](n2.ek(23, packN2Ek23_PddVds[data]))
            : [];
        },
      };

    function N18Init(e, t) {
      n18[init](e, t),
        n18["initInfo"](),
        [
          packN2Ek8_WindowSize,
          packN2Ek10_Fe,
          packN2Ek11_Href,
          packN2Ek12_DeviceOrientationEvent,
          packN2Ek13_DeviceMotionEvent,
          packN2_Ek15_UA,
          packN2Ek16_17_CookieStorage,
          packN2Ek18_Referer,
          packN2Ek19_UserId,
          packN2Ek20_ApiUid,
          packN2Ek1_le,
          packN2Ek4_Click,
          packN2Ek21,
          packN2Ek22,
          packN2Ek23_PddVds,
          packN2Ek7_Port,
        ][forEach](function (t) {
          t[init](e);
        });
    }

    function N18Invoke() {
      // todo: core, change action
      n18.initEvent();
      // _window[document][addEventListener]('click', he),
      //   se
      //     ? _window[document][addEventListener]('touchstart', ve, !0)
      //     : n18["initEvent"]();
    }

    function N18Clear() {
      n18["clearCache"](),
        [packN2Ek1_le, packN2Ek4_Click][forEach](function (e) {
          e[data] = [];
        });
    }

    function N2PbcToEE() {
      _basicInfo = n2["pbc"](packBasicInfo.toString() + Me.toString()).map(
        function (e) {
          return String.fromCharCode(e);
        }
      );
    }

    function qe() {
      var t = {};
      (t["uvzKD"] = function (e, t) {
        return e > t;
      }),
        (t["ALvzg"] = function (e, t) {
          return e - t;
        });
      var n = t,
        r =
          _window[document]["documentElement"]["scrollTop"] ||
          _window[document]["body"]["scrollTop"];
      if (n["uvzKD"](r, 0)) {
        var o = {};
        (o["scrollTop"] = r),
          (o["timestamp"] = n["ALvzg"](_date[now](), _date0));
        var i = o;
        return [][concat](
          n2.ek(3, [{}]),
          n2.va(i["scrollTop"]),
          n2.va(i[timestamp])
        );
      }
      return [];
    }

    function Me() {
      console.log("entered func6 Me");
      var e;
      var i = (e = [])[concat].apply(
        e,
        [
          n18.packN(), // finished
          packN2Ek4_Click.packN(),
          packN2Ek7_Port.packN(),
          packN2Ek8_WindowSize.packN(),
          packN2Ek9_Random.packN(),
          packN2Ek10_Fe.packN(),
          packN2Ek11_Href.packN(),
          packN2Ek12_DeviceOrientationEvent.packN(),
          packN2Ek13_DeviceMotionEvent.packN(),
          packN2Ek14_ServerTime.packN(),
          packN2_Ek15_UA.packN(),
        ].concat(
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(packN2Ek16_17_CookieStorage.packN()),
          [
            packN2Ek18_Referer.packN(),
            packN2Ek19_UserId.packN(),
            packN2Ek20_ApiUid.packN(),
            packN2Ek21.packN(),
            packN2Ek22.packN(),
            packN2Ek23_PddVds.packN(),
          ]
        )
      );
      N18Clear();
      for (
        var u = i[length][toString](2)[split](""), d = 0;
        u[length] < 16;
        d += 1
      )
        u.unshift("0");
      u = u[join]("");
      var l = [];
      i[length] === 0
        ? l[push](0, 0)
        : i[length] > 0 && i[length] <= (1 << 8) - 1
        ? l[push](0, i[length])
        : i[length] > (1 << 8) - 1 &&
          l[push](
            _window.parseInt(u[substring](0, 8), 2),
            _window.parseInt(u[substring](8, 16), 2)
          ),
        (i = [][concat]([3], [1, 0, 0], l, i));


      var h = [].map["call"](n6.deflate(i), function (e) {
        return String.fromCharCode(e);
      });
      var antiContent =
        "0ap" + n2.encode(h.join("") + _basicInfo.join(""), n2["budget"]);
      return antiContent;
    }

    function Ie() {
      console.log("entered func6 Ie");
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = {};
      (n["BFGkd"] = function (e, t) {
        return e !== t;
      }),
        (n["SZoVm"] = "undefined"),
        (n["kwXyZ"] = "1|3|2|4|0"),
        (n["MwmRa"] = function (e) {
          return e();
        }),
        (n["kbxip"] = function (e, t, n) {
          return e(t, n);
        });
      var r = n;
      if (r["BFGkd"](void 0 === _window ? "undefined" : i(_window), r["SZoVm"]))
        for (var o = r["kwXyZ"]["split"]("|"), a = 0; ; ) {
          switch (o[a++]) {
            case "0":
              r["MwmRa"](N2PbcToEE);
              continue;
            case "1":
              this["updateServerTime"](e[serverTime] || 879609302220);
              continue;
            case "2":
              r["kbxip"](N18Init, _date0, _window);
              continue;
            case "3":
              _date0 = _date[now]();
              continue;
            case "4":
              r["MwmRa"](N18Invoke);
              continue;
          }
          break;
        }
    }

    Ie.prototype.updateServerTime = function (e) {
      (_date2 = _date[now]()), (_date1 = e);
    };
    Ie.prototype.init = _init;
    Ie.prototype.clearCache = _init;
    Ie.prototype.messagePack = function () {
      return packN2Ek21[data]++, Me();
    };
    Ie.prototype.messagePackSync = function () {
      var t = {};
      (t["HlEcc"] = function (e, t) {
        return e(t);
      }),
        (t["aEMIp"] = function (e) {
          return e();
        });
      var n = t;
      return new Promise(function (t) {
        packN2Ek21[data]++, n["HlEcc"](t, n["aEMIp"](Me));
      });
    };

    e["env"]["NODE_ENV"] === "development" &&
      (Ie["prototype"]["swallow"] = function (e) {
        var n = {};
        (n["BuHUC"] = "click"), (n["EkQzK"] = "touchstart");
        var r = n;
        switch (e.type) {
          case r["BuHUC"]:
            packN2Ek4_Click[handleEvent](e);
            break;
          case r["EkQzK"]:
            packN2Ek1_le[handleEvent](e);
            break;
          default:
            n18["swallow"](e);
        }
      });
    var Ae = new Ie();
    t.exports = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e[serverTime] && _window && Ae.updateServerTime(e[serverTime]), Ae;
    };
  }.call(this, n(3), n(0)(e)));
};
