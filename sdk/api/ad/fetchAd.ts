import { PddClient } from "../../pdd";
import { dbInsertItemsRobust } from "../../db";
import { paddy, sleep } from "../../utils";
import { PddResult } from "../interface";
import {
  GetAdGeneralParams,
  Scene2CollId,
  Scene2CollNameDict,
  Scene2Name,
  Scene2Url,
  SceneNumbers,
  SceneNumberType,
} from "./interface";

export const fetchAdInterval = async (
  pddClient: PddClient,
  scenesType: SceneNumberType,
  beginDate: string,
  endDate: string,
  pageNumber: number
): Promise<PddResult> => {
  const mallId = pddClient.userInfo.mallId;
  const pageSize = 50;
  const params: GetAdGeneralParams = {
    crawlerInfo: pddClient.getAntiContent(),
    beginDate,
    startDate: beginDate,
    endDate,
    pageNumber,
    scenesType,
    mallId,
    pageSize,
  };
  const sceneName = Scene2Name[scenesType];
  const data: PddResult = await pddClient.fetch(Scene2Url[scenesType], params);

  const items = data.result.result.map((item: any) => {
    item["updateTime"] = new Date();
    item["_id"] = { adId: item[Scene2CollId[scenesType]], beginDate, endDate };
    return item;
  });

  dbInsertItemsRobust(Scene2CollNameDict[scenesType], items);

  const cum = pageSize * (pageNumber - 1) + data.result.result.length;
  const tot = data.result.total;
  console.log(
    `fetched ad | [${paddy(cum, 4)} / ${paddy(
      tot,
      4
    )}], scene: ${sceneName}, date: ${beginDate} ~ ${endDate}, page: ${pageNumber}`
  );
  return data;
};

export const fetchAdOfDayOfScene = async (
  pddClient: PddClient,
  date: string,
  scenesType: SceneNumberType
) => {
  console.log(
    "fetching ad data of date: " + date + " of scene: " + Scene2Name[scenesType]
  );
  let page = 1,
    cnt = 0;
  while (true) {
    const data = await fetchAdInterval(pddClient, scenesType, date, date, page);

    cnt += data.result.result.length;
    await sleep(500); // 10秒20次限制：https://open.pinduoduo.com/application/document/api?id=pdd.ad.api.unit.query.list
    if (cnt < data.result.total) {
      page++;
    } else {
      break;
    }
  }
};

export const fetchAdOfDay = async (pddClient: PddClient, date: string) => {
  console.log("fetching ad data of date: " + date);
  SceneNumbers.map(async (scenesType) => {
    await fetchAdOfDayOfScene(pddClient, date, scenesType);
  });
};
