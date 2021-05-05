import axios from "axios";
const hackAntiContentFromCookie = require('../algos/hack_anti-content_from_cookie')
// axios.defaults.withCredentials = true;

/**
 * user-agent 必填，否则verifyAuthToken, error_code: 54001
 * anti-content 必填，否则同上
 * cookie 必填，否则直接403被拒绝
 * anti-content 只能用一次，第二次就54001了
 */
const fetchDataOfListPage = async (cookie, antiContent) => {
  // console.log({ Cookie, antiContent, length: antiContent.length });

  const res = await axios
    .post(
      "https://yingxiao.pinduoduo.com/mms-gateway/venus/api/unit/listPage",
      {
        crawlerInfo: antiContent,
        mallId: 506673970,
        pageSize: 50,
        pageNumber: 1,
        scenesType: 2,
        beginDate: "2021-04-27",
        endDate: "2021-05-01",
      },
      {
        headers: {
          "anti-content": antiContent,
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36",
          Cookie: cookie,
        },
      }
    )
  const data= res.data;
  return data
};



const cookie =
  '_a42=6fbd982d-1e76-434d-a1af-4f864275d15a;_bee=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;_crr=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;_f77=49d2f578-23b2-439b-aa4e-a84f95cff979;api_uid=rBQdO2COIhEqVT6MIio9Ag==;rcgk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;rckk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;ru1k=49d2f578-23b2-439b-aa4e-a84f95cff979;ru2k=6fbd982d-1e76-434d-a1af-4f864275d15a;_nano_fp=XpEalpCjlpEYXqdjn9_bn7ZFBW6yuyeLtaXMCztW;csrfToken=ONial4HDdAw-yG3cbs0ZmdDJ;SUB_PASS_ID=eyJ0IjoiQ2JJQmJSblg5ME84NkNJVDEydTUrREVHb2ZmZ0luY2cyQlRjbjdpNUxmbUFtdldTZ3Q0aXg3RTk3Q0VQRXF6aCIsInYiOjEsInMiOjcsIm0iOjUwNjY3Mzk3MCwidSI6OTM5MTc4OTJ9;SUB_SYSTEM_ID=7;'
if(require.main === module) {
  fetchDataOfListPage(cookie, hackAntiContentFromCookie(cookie))
    .then(data => {
    })
}
