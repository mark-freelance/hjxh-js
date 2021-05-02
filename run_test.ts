import axios from "axios";
import * as fs from "fs";

axios.defaults.withCredentials = true;

/**
 * user-agent 必填，否则verifyAuthToken, error_code: 54001
 * anti-content 必填，否则同上
 * cookie 必填，否则直接403被拒绝
 * anti-content 只能用一次，第二次就54001了
 */
const req = async (antiContent, Cookie) => {
  console.log({ Cookie, antiContent, length: antiContent.length });

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
          "anti-content": antiContent,
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36",
          Cookie: Cookie,
        },
      }
    )
    .then((res) => {
      // console.log(res.headers);
      console.log(res.data);
    })
    .catch((e) => {
      console.error(e.message);
      throw e;
    });
};

const antiContent = require('./hack_anti-content')()
const Cookie = fs.readFileSync('cookie.txt', 'utf-8')

req(antiContent, Cookie);
