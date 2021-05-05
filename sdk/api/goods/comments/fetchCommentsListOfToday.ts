import {
  createPddClient,
  FetchPddAntiContentParams,
  FetchPddExtraParams,
  PddClient,
} from "../../../pdd";
import { getSubDict, sleep } from "../../../utils";
import { dbInsertItemsRobust } from "../../../db";
import dayjs from "dayjs";
import { fetchCommentsSingleOfHistory } from "./fetchCommentsSingleOfHistory";
import {COLL_GOODS_COMMENTS_DETAIL, COLL_GOODS_COMMENTS_LIST} from "../../const";

export interface FetchCommentsParams extends FetchPddAntiContentParams {
  pageSize: number; // 最大 20
  pageNo: number;
}

export const URL_FETCH_COMMENTS_LIST =
  "https://mms.pinduoduo.com/sydney/api/saleQuality/queryGoodsEvaluateVO";

export const COMMENTS_DETAIL_KEYS = [
  "statDate",
  "avgServRevScr1m",
  "avgDescRevScr1m",
  "avgLgstRevScr1m",
  "goodsUnfkUndfltRevCnt1m",
];

export const fetchCommentsListOfToday = async (
  pddClient: PddClient,
  withHistory = false
) => {
  while (true) {
    let pageNo = 1,
      cnt = 0;
    const params: FetchPddExtraParams = {
      pageNo,
      pageSize: 20,
    };
    const data = await pddClient.fetch(URL_FETCH_COMMENTS_LIST, params);
    const items = data.result.goodsEvaluates as any[];

    console.log("updating comments [list] of yesterday");
    dbInsertItemsRobust(COLL_GOODS_COMMENTS_LIST, items, pddClient, "goodsId");

    if (withHistory) {
      items.map(async (item) => {
        await fetchCommentsSingleOfHistory(pddClient, item["goodsId"]);
        await sleep(500)
      });
    } else {
      const itemsDetail = items.map((item) => {
        const subItem = getSubDict(item, COMMENTS_DETAIL_KEYS);
        subItem["statDate"] = dayjs().subtract(1, "days").format("YYYY-MM-DD");
        subItem["_id"] = {
          goodsId: item["goodsId"],
          statDate: subItem["statDate"],
        };
        return subItem;
      });
      console.log("updating comments [detail] of yesterday");
      dbInsertItemsRobust(COLL_GOODS_COMMENTS_DETAIL, itemsDetail, pddClient);
    }

    const tot = data.result.mallOprGoodsCntStd;
    cnt += items.length;
    await sleep(500);
    if (cnt < tot) {
      pageNo++;
    } else {
      break;
    }
  }
};

export const initComments = async (pddClient: PddClient) => {
  fetchCommentsListOfToday(pddClient, true);
};

if (require.main === module) {
  createPddClient().then((pddClient) => {
    // fetchCommentsListOfToday(pddClient);
    initComments(pddClient);
  });
}
