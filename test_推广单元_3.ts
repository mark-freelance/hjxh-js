import axios from "axios";

axios.defaults.withCredentials = true;

const req = async () => {
  //  user-agent 必填，否则verifyAuthToken, error_code: 54001
  //  anti-content 必填，否则同上
  //  cookie 必填，否则直接403被拒绝
  //  anti-content 只能用一次，第二次就54001了

  // const antiContent = require('./pdd-hack-baidunet/anti_content')()
  const antiContent = "0apWtq-v0jXay99mWJ5bIqdPBjnwET3rG7Gy0evIsJaKxzm-JtlYRmOleMEyqeB1knb4TKdElJBd_YBauvCfCVoYQ9TgfwJTlbP0jbMSvI-Sy4iMm8Y5IbwwmVQevqievpxXaCv63Yr47dPPNnx35n5g5iZjfnQNwdZn4peQq3Fl2w1DWEUOo53N0kCEzej_vuKH8MGZd_XlimvoBKa4aVZJdXzozMxNjHrWOgxUulniUIG6oLvnKDZGpc9DM4PWOfTJw8aSeaaF9ZVcavLwBzLIc-0Qz9G9FDQpXi62d_jtQc3fl7IrvkiBd9LfM4XQ4ns28qER8n44bIOqfDZGrt-VZeRakYRcMkptLZVBVxJ7P4fomTGI7CJ7UziyMY8XAqWAXj1qXcEsnGiRETqsciTT5YxNoL2KA-8j4JJpbKeIQae-KDmMbiYYR-bNCmiRauvLkzvBkZbbas"
  console.log({ antiContent, length: antiContent.length });
  // "0apAfxnpdOtoy99D7g5C19GoedXDUa2X3M-IapDV-tj6qRO8G1opnHa-7kk_eQwfCzF_JuAoEyGvRLNCZhaBVr0G0x9Nl9iJSAJFXjUHVqd-ihQj1gMw20OT3VTJbyK3Mf9YAgupxgQR9wlm0C-PHj_w7ybPGbCPEa_fK0w_B_UMkR6bhW13Jfj_ilTeVVPnzJpxZO3AoNexneHxjwd6vFMZ8GMec_RbbT-yrdbDh93eTa07vk9jX90LCHAATWCl6jCP079kTOy9sfL_lRelv9t9Ukc_GiB2uwvdjEnPnz1rdeisq9Lfc4P0XEN2aoh32X4DdvzegjpsuM_TThWbK0RIwe_fLVCsICMGG5gYITxNKjA1LDl-H8RVucqI5RQoc35AlNiYDh3HV-zqxRyhlQgJ7tYKPCVEOAo32EtDxHW8zpiuAQMsN-eA_mv-655Y";
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
          Cookie:
            "_a42=38c8e6aa-9747-4c21-a36b-08808cad34ee;_bee=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;_crr=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;_f77=15d68fb8-7589-47f9-a16b-602aa543dea4;api_uid=rBQR42CCxYBbA0td1lZ/Ag==;rcgk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;rckk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;ru1k=15d68fb8-7589-47f9-a16b-602aa543dea4;ru2k=38c8e6aa-9747-4c21-a36b-08808cad34ee;_nano_fp=XpEalpgJlpUanqEjnC_SK3wNNb8aTwYnzsrY~rvh;csrfToken=Uv6IpXcxRrU5_QjkDNyXcDcg;SUB_PASS_ID=eyJ0IjoiUGdncHdWZVM4YlhSUmtNRGIwcjhlUTBoZjRqOUc1ano2b2tXZ1RYK2E0UVdBc3dUU3VTdkpWbitiZE9iZGZFQiIsInYiOjEsInMiOjcsIm0iOjUwNjY3Mzk3MCwidSI6OTM5MTc4OTJ9;SUB_SYSTEM_ID=7;",
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

req();
