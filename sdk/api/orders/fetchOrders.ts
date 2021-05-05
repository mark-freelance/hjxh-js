import { PddClient } from "../../pdd";
import {  dbInsertItemsRobust } from "../../db";
import { paddy, sleep } from "../../utils";
import dayjs from "dayjs";
import {COLL_ORDERS, MillisecondsDelay, SecondsEachDay} from "../const";
import { GetOrdersParams, URL_FETCH_ORDERS } from "./interface";

export async function fetchOrders(
  pddClient: PddClient,
  startTime: number,
  endTime: number,
  pageNumber: number = 1
) {
  const data: GetOrdersParams = {
    orderType: 0,
    afterSaleType: 0,
    remarkStatus: -1,
    urgeShippingStatus: -1,
    pageNumber: pageNumber,
    pageSize: 50,
    groupStartTime: startTime,
    groupEndTime: endTime,
    sortType: 8,
  };
  const e = await pddClient.fetch(URL_FETCH_ORDERS, data);
  const items = e.result.pageItems.map((item: any) => {
    item["_id"] = item["order_sn"];
    item["updateTime"] = new Date();
    item["mallId"] = pddClient.userInfo.mallId;
    return item;
  });
  dbInsertItemsRobust(COLL_ORDERS, items);
  return e;
}

export async function fetchOrdersInterval(
  pddClient: PddClient,
  startTime: number,
  endTime: number
) {
  let page = 1,
    cnt = 0;
  while (true) {
    const data = await fetchOrders(pddClient, startTime, endTime, page);
    const len = data.result.pageItems.length;
    const tot = data.result.totalItemNum;
    cnt += len;
    console.log(
      `fetching orders | [${paddy(cnt, 4)} / ${paddy(tot, 4)}] page: ${paddy(
        page,
        2
      )}, time: ${dayjs(startTime * 1000).format("MM-DD")} ~ ${dayjs(
        endTime * 1000
      ).format("MM-DD")}`
    );
    if (cnt < tot) {
      page++;
      await sleep(MillisecondsDelay);
    } else {
      break;
    }
  }
}

export async function fetchOrdersOfDay(pddClient: PddClient, date: Date) {
  let startTime = date.setHours(0, 0, 0, 0) / 1000;
  return fetchOrdersInterval(pddClient, startTime, startTime + SecondsEachDay);
}

export async function fetchOrdersInit(pddClient: PddClient, days: number = 30) {
  let endTime = new Date().setHours(0, 0, 0, 0) / 1000;
  while (days > 0) {
    console.log("fetching date of " + new Date(endTime * 1000));
    await fetchOrdersInterval(pddClient, endTime - SecondsEachDay, endTime);
    days--;
    endTime -= SecondsEachDay;
  }
}

export async function fetchOrdersYesterday(pddClient: PddClient) {
  return fetchOrdersOfDay(pddClient, new Date(new Date().setDate(new Date().getDate() - 1)))
}
