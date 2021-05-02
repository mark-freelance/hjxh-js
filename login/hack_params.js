const encryptPassword = require("./algos/hack_encrypt_password");
const hackSign = require("./algos/hack_sign");
const axios = require("axios");
const hackAntiContentFromCookie = require("./algos/hack_anti-content_from_cookie");

const url = 'https://mms.pinduoduo.com/janus/api/auth';

const hackParams = (username, password) => {
  const time_now = new Date().getTime();
  const time_start = time_now - 128503;
  const encryptedPassword = encryptPassword(password);
  const cookie = 'api_uid=rBReI2COIKke+kSAHlFYAg=='
  const antiContent = hackAntiContentFromCookie(cookie)
  console.log({antiContent, cookie})

  const params = {
    username: username,
    password: encryptedPassword,
    passwordEncrypt: true,
    verificationCode: "",
    mobileVerifyCode: "",
    sign: "",
    touchevent: {
      mobileInputEditStartTime: time_start, // 1619873607671,
      mobileInputEditFinishTime: time_start + 12,
      mobileInputKeyboardEvent: "0|0|0|",
      passwordInputEditStartTime: time_start + 15,
      passwordInputEditFinishTime: time_start + 24,
      passwordInputKeyboardEvent: "0|0|0|",
      captureInputEditStartTime: "",
      captureInputEditFinishTime: "",
      captureInputKeyboardEvent: "",
      loginButtonTouchPoint: "1335,408",
      loginButtonClickTime: time_start + 3012,
    },
    fingerprint: {
      innerHeight: 348,
      innerWidth: 1741,
      devicePixelRatio: 2,
      availHeight: 1095,
      availWidth: 1741,
      height: 1120,
      width: 1792,
      colorDepth: 30,
      locationHref: "https://mms.pinduoduo.com/login",
      clientWidth: 1741,
      clientHeight: 883,
      offsetWidth: 1741,
      offsetHeight: 883,
      scrollWidth: 2899,
      scrollHeight: 883,
      navigator: {
        appCodeName: "Mozilla",
        appName: "Netscape",
        hardwareConcurrency: 12,
        language: "zh",
        cookieEnabled: true,
        platform: "MacIntel",
        doNotTrack: "1",
        ua:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
        vendor: "Google Inc.",
        product: "Gecko",
        productSub: "20030107",
        mimeTypes: "929366d991bcb074a793ac3fe76dcb4a27d30ed8",
        plugins: "b52df06a1ec8b703e6274d928c7df35f3e741f33",
      },
      referer: "https://mms.pinduoduo.com/home",
      timezoneOffset: -480,
    },
    riskSign: hackSign(username, encryptedPassword, time_now),
    timestamp: time_now,
    crawlerInfo: antiContent,
  };


  axios.post(url, params, {
    headers: {
      "anti-content": antiContent,
      "cookie": cookie,
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
      'etag': 'IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr'
    }
  })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
};

module.exports = hackParams;

if (require.main === module) {
  const username = "乐和食品店:冯露";
  const password = "Fl123456...";
  hackParams(username, password);
}
