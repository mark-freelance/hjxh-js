import axios from "axios";

axios.defaults.withCredentials = true;

const req = async () => {
  const ac = require("./anti_content.js")();
  const res = await axios.post(
    "https://mms.pinduoduo.com/sydney/api/goodsDataShow/queryGoodsDetailVOList",
    {
      goodsId: "",
      cate1Id: "",
      cate2Id: "",
      cate3Id: "",
      startDate: "2021-04-19",
      endDate: "2021-04-19",
      queryType: 0,
      sortCol: 0,
      sortType: 1,
      pageNum: 1,
      pageSize: 10,
      crawlerInfo: ac,
    },
    {
      headers: {
        "Anti-Content": ac,
        Cookie:
          "_a42=38c8e6aa-9747-4c21-a36b-08808cad34ee;_bee=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;_crr=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;_f77=15d68fb8-7589-47f9-a16b-602aa543dea4;accesstoken=2210010f64b1bdd721644e9eba2f006807e46da46cf09f;api_uid=rBQR42CCxYBbA0td1lZ/Ag==;rcgk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;rckk=IyctlSCGL1k8SVLI2bTMNCIh9EpeZLCr;ru1k=15d68fb8-7589-47f9-a16b-602aa543dea4;ru2k=38c8e6aa-9747-4c21-a36b-08808cad34ee;_nano_fp=XpEalpgJlpUanqEjnC_SK3wNNb8aTwYnzsrY~rvh;csrfToken=Tom4-tdzbzTgTsaaYYJ9ooNp;SUB_PASS_ID=eyJ0IjoiSGNIcnhjczhpNUJ6MlV4ZEZLZEQrVUsvUWxyZ2ZlRGg4VXNuU3ZGd0ttb1lidmJHOW16aktVcUtLYXI0MWNEVSIsInYiOjEsInMiOjcsIm0iOjUwNjY3Mzk3MCwidSI6OTM5MTc4OTJ9;SUB_SYSTEM_ID=7;",
      },
    }
  );
  console.log(res.data);
};

req();
