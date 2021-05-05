import axios from "axios";

axios.defaults.withCredentials = true;

const req = async () => {
  const antiContent = require("./anti_content.js")();
  // const antiContent =
  //   "0apWtqlducQaF99Z4VdeRG4MqWYN7ttcXcXhr_K5s4g_PSb90lbF0x-m_W7cHpHc0wDUcrN4DRWoTFXSoVSW29gd0Dkqdaq6i-nthhgzMC2Jdxj1wq5eaVdrUFx1rbDu62N3GAwmEN6kYpun1-MIWfWctFS7w5U-4FvTtfk37giv-So26ajiU46xspKpgdAf4KxUS9_-2_pwpRe06cEIyH2eWtNyewSNjauc2y-Bbt0K5GVcGSlTW-PrVFbdxNsp9ja8wziVlswFL6_4ivVsQqQUk1uwIfkI-espHT_DruQVW4d4OLeTCEYaPtgCNkV0D-fjEvlIpe4EC1fw2LJ75SiKs3BbBqfbtkLN2HsObmA1HmKAseMrpy6JUfG4L2ZO2o8rRmPm-5rocsX-ZvTDInIFMnOrMPzGku2crRYpDrW82aBHstb0_7eWQn2";
  console.log({ antiContent });
  axios
    .post(
      "https://yingxiao.pinduoduo.com/mms-gateway/venus/api/unit/listPage",
      {
        crawlerInfo: antiContent,
        mallId: 506673970,
        pageSize: 5,
        pageNumber: 1,
        scenesType: 2,
        beginDate: "2021-04-27",
        endDate: "2021-04-27",
      },
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "anti-content": antiContent,
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36",
          dnt: "1",
          "content-type": "application/json;charset=UTF-8",
          origin: "https://yingxiao.pinduoduo.com",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer:
            "https://yingxiao.pinduoduo.com/marketing/main/center/scene/list",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh,en-GB;q=0.9,en;q=0.8,en-US;q=0.7,zh-CN;q=0.6",
          Cookie:
            "_a42=38c8e6aa-9747-4c21-a36b-08808cad34ee; _bee=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr; _crr=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr; _f77=15d68fb8-7589-47f9-a16b-602aa543dea4; accesstoken=2210010f64b1bdd721644e9eba2f006807e46da46cf09f; api_uid=rBQR42CCxYBbA0td1lZ/Ag==; rcgk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr; rckk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr; ru1k=15d68fb8-7589-47f9-a16b-602aa543dea4; ru2k=38c8e6aa-9747-4c21-a36b-08808cad34ee; _nano_fp=XpEalpgJlpUanqEjnC_SK3wNNb8aTwYnzsrY~rvh; csrfToken=Tom4-tdzbzTgTsaaYYJ9ooNp; SUB_SYSTEM_ID=7; SUB_PASS_ID=eyJ0IjoiSGNIcnhjczhpNUJ6MlV4ZEZLZEQrVUsvUWxyZ2ZlRGg4VXNuU3ZGd0ttb1lidmJHOW16aktVcUtLYXI0MWNEVSIsInYiOjEsInMiOjcsIm0iOjUwNjY3Mzk3MCwidSI6OTM5MTc4OTJ9",
        },
      }
    )
    .then((res) => {
      // console.log(res.headers);
      console.log(res.data);
    })
    .catch((e) => {
      console.error(e.message);
    });
};

req();
