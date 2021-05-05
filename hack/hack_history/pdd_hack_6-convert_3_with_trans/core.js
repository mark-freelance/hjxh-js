const fs = require("fs");
const path = require("path");
const funcs = [
  require("./parts/f1_easy"),
  require("./parts/f2_easy"),
  //  hard 3
  require("./parts/f3_hard"),
  require("./parts/f4_easy"),
  require("./parts/f5_easy"),
  //  hard 6
  require("./parts/f6_hard_important_v2"),
  require("./parts/f7_easy"),
  require("./parts/f8_easy"),
  require("./parts/f9_easy"),
  require("./parts/f10_easy"),
  require("./parts/f11_easy"),
  require("./parts/f12_easy"),
  require("./parts/f12_easy_deviceOrientationEvent"),
  require("./parts/f13_easy_deviceMotionEvent"),
  require("./parts/f14_easy_serverTime"),
  //  hard 16
  require("./parts/f15_hard_CookieStorage"),
  require("./parts/f16_easy"),
  require("./parts/f17_easy"),
  //  hard 19
  require("./parts/f18_hard"),
];

const f = function (e) {
  var d = {};

  function n(r) {
    var o = (d[r] = {
      i: r,
      l: !1,
      exports: {},
    });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }

  return n(5);
};

const antiContent = f(funcs)(require("./e_init")).messagePack();
console.log({ antiContent, length: antiContent.length });
fs.writeFileSync(path.resolve(__dirname, "../anti_content.txt"), antiContent);
console.log("dumped");
