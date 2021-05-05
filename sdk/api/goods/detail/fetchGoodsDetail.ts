import { createPddClient, PddClient } from "../../../pdd";
import {COLL_GOODS_DETAIL, URL_FETCH_GOODS_DETAIL} from "../../const";
import { PddResult } from "../../interface";
import { sleep } from "../../../utils";
import  {dbInsertItemsRobust} from "../../../db";
import { GetGoodsDetailParams } from "./interface";

export const fetchGoodsDetailOfDay = async (
  pddClient: PddClient,
  date: string
) => {
  let pageNum = 1,
    cnt = 0;
  while (true) {
    const params: GetGoodsDetailParams = {
      cate1Id: "",
      cate2Id: "",
      cate3Id: "",
      startDate: date,
      endDate: date,
      goodsId: "", // important, dont specify goodsId
      pageNum,
      pageSize: 50,
      queryType: 0,
      sortCol: 0,
      sortType: 1,
    };
    const data: PddResult = await pddClient.fetch(
      URL_FETCH_GOODS_DETAIL,
      params
    );
    let items = data.result.goodsDetailList as any[];
    items.forEach((item) => {
      const goodsId = item["goodsId"];
      const statDate = item["statDate"]; // 竟然是statDate....
      item["_id"] = { goodsId, statDate };
      item["updateTime"] = new Date();
      item["mallId"] = pddClient.userInfo.mallId;
    });

    dbInsertItemsRobust(COLL_GOODS_DETAIL, items)

    const tot = data.result.totalNum;
    cnt += items.length;
    if (cnt < tot) {
      pageNum++;
      await sleep(500);
    } else {
      break;
    }
  }
};

if (require.main === module) {
  createPddClient().then((pddClient) => {
    pddClient.initFetch(fetchGoodsDetailOfDay, "商品明细");
  });
}
