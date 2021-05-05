import { createPddClient, PddClient } from "../../../pdd";
import { dbInsertItemsRobust } from "../../../db";

export const URL_FETCH_COMMENTS_SINGLE =
  "https://mms.pinduoduo.com/sydney/api/saleQuality/queryGoodsEvaluateDetailVOList";

export const fetchCommentsSingleOfHistory = async (
  pddClient: PddClient,
  goodsId: number
) => {
  console.log('fetching comment history of goodsId: ' + goodsId)

  const data = await pddClient.fetch(URL_FETCH_COMMENTS_SINGLE, {
    goodsId: goodsId,
  });
  const items = (data.result as any[]).map((item) => {
    item["mallId"] = pddClient.userInfo.mallId;
    item["updateTime"] = new Date();
    item["_id"] = { goodsId: goodsId, statDate: item["statDate"] };
    return item;
  });
  // 由于goodsId 需要从外界补，所以这里就不用自动更新了
  dbInsertItemsRobust("commentsDetail", items);
  return data;
};

if (require.main === module) {
  createPddClient().then((pddClient) => {
    fetchCommentsSingleOfHistory(pddClient, 221058511472);
  });
}
