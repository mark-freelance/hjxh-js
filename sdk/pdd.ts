import * as path from "path";
import { getKeyFromCookie } from "./utils";
import axios from "axios";
import assert from "assert";
import { URL_FETCH_USER_INFO } from "./api/const";
import db from "./db";
import { PddResult, PddUserInfo } from "./api/interface";
import dayjs from "dayjs";

const hackAntiContentFromCookie = require("./algos/hack_anti-content_from_cookie");

export const SDK_PATH = path.resolve(__dirname);
export const DATA_PATH = path.resolve(SDK_PATH, "data");

export const DEFAULT_USERNAME = "乐和食品店:冯露";
export const DEFAULT_PASSWORD = "FL123456...";
export const DEFAULT_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36";

export interface FetchPddAntiContentParams {
  crawlerInfo: string;
}

export interface FetchPddExtraParams {}

export interface FetchPddParams
  extends FetchPddAntiContentParams,
    FetchPddExtraParams {}

export interface UserInfoBase {
  username: string;
  password: string;
  cookie: string;
}

export interface UserInfo extends UserInfoBase {
  hasLogin: boolean;
  id: number;
  isAdUser: boolean;
  mallId: number;
  mallOwner: boolean;

  userId: number;
  updateTime: Date;
}

const fetchPddData = async (
  url: string,
  params: FetchPddAntiContentParams,
  cookie: string
): Promise<PddResult> => {
  const res = await axios.post(url, params, {
    headers: {
      cookie,
      "Anti-Content": params["crawlerInfo"]
        ? params["crawlerInfo"]
        : hackAntiContentFromCookie(cookie),
      "User-Agent": DEFAULT_USER_AGENT,
    },
  });
  assert(res.data.success === true, JSON.stringify(res.data, null, 2));
  return res.data;
};

const loginPddAccount = async (
  userInfoBase: UserInfoBase
): Promise<UserInfo> => {
  const loginParams = {
    crawlerInfo: hackAntiContentFromCookie(userInfoBase.cookie),
    mallId: undefined,
  };
  const data: PddResult = await fetchPddData(
    URL_FETCH_USER_INFO,
    loginParams,
    userInfoBase.cookie
  );
  const pddUserInfo: PddUserInfo = data.result;
  console.log({ userInfoBase, userInfo: pddUserInfo });
  const userInfo: UserInfo = {
    ...userInfoBase,
    ...pddUserInfo,
    updateTime: new Date(),
  };
  const res = await db
    .collection("user")
    .updateOne({ _id: pddUserInfo.id }, { $set: userInfo }, { upsert: true });
  console.log("login update result: ", res.result);
  return userInfo;
};

/**
 * - 不提供用户名，则随机从数据库选一个
 * - 提供用户名，但不提供其他信息，则指定数据库内查找该用户
 * - 提供用户名、密码和cookie，则新建或更新一个用户
 * @param username
 * @param password
 * @param cookie
 */
export const createPddClient = async (
  username?: string,
  password?: string,
  cookie?: string
): Promise<PddClient> => {
  let user: UserInfo;
  if (username && password && cookie) {
    cookie = cookie.split("\n").filter((s) => s.match(/^[^/\s]/))[0];
    user = await loginPddAccount({ username, password, cookie });
  } else if (username) {
    user = await db.collection("user").findOne({ username: username });
  } else {
    user = await db.collection("user").findOne({});
  }
  console.log("use pdd client of username: " + user.username);
  return new PddClient(user);
};

export class PddClient {
  public userInfo: UserInfo;

  constructor(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  public getCookie(key: string) {
    return getKeyFromCookie(this.userInfo.cookie, key);
  }

  public getAntiContent() {
    return hackAntiContentFromCookie(this.userInfo.cookie);
  }

  public async fetch(
    url: string,
    extraParams: FetchPddExtraParams
  ): Promise<PddResult> {
    const cookie = this.userInfo.cookie;
    const antiContent: string = hackAntiContentFromCookie(cookie);
    const params: FetchPddParams = { ...extraParams, crawlerInfo: antiContent };
    const res = await axios.post(url, params, {
      headers: {
        cookie,
        "Anti-Content": antiContent,
        "User-Agent": DEFAULT_USER_AGENT,
      },
    });
    assert(res.data.success === true, JSON.stringify(res.data, null, 2));
    return res.data;
  }

  public async initFetch(
    targetFunc: any,
    targetFuncName: string,
    days: number = 30
  ) {
    let endDate = dayjs().startOf("day").subtract(1, "day");
    console.log(
      "start init data of " +
        targetFuncName +
        " from " +
        endDate.subtract(days, "days").format("MM-DD") +
        " to " +
        endDate.format("MM-DD")
    );
    for (let day = 1; day <= days; day++) {
      console.log(`fetching ${targetFuncName} ( ${day} / ${days} )`);
      await targetFunc(this, endDate.format("YYYY-MM-DD"));
      endDate = endDate.subtract(1, "day");
    }
    console.log("finished init data of " + targetFuncName);
  }
}
