import { FetchPddAntiContentParams } from "../../pdd";

export const URL_FETCH_AD =
  "https://yingxiao.pinduoduo.com/mms-gateway/venus/api/unit/listPage";
export const URL_FETCH_AD_FANGXIN =
  "https://yingxiao.pinduoduo.com/mms-gateway/venus/api/cpa/goods/list";

export type SceneNumberType = 0 | 2 | 6;
export const SceneNumbers: SceneNumberType[] = [0, 2, 6];
export const Scene2Name: { [key in SceneNumberType]: string } = {
  0: "多多搜索",
  2: "多多场景",
  6: "放心推",
};

export const Scene2CollNameDict: { [key in SceneNumberType]: string } = {
  0: "ad_search",
  2: "ad_scene",
  6: "ad_fangxin",
};
export const Scene2CollId: { [key in SceneNumberType]: string } = {
  0: "adId",
  2: "adId",
  6: "unitId",
};
export const Scene2Url: { [key in SceneNumberType]: string } = {
  0: URL_FETCH_AD,
  2: URL_FETCH_AD,
  6: URL_FETCH_AD_FANGXIN,
};

export interface GetAdParams extends FetchPddAntiContentParams {
  crawlerInfo: string; // antiContent
  endDate: string; // "2021-05-05"
  mallId: number; //  506673970
  pageNumber: number; // 1
  pageSize: number; // 50
  scenesType: number; // 0
}

export interface GetAdSearchParams extends GetAdParams {
  beginDate: string; // 多多搜索、场景接口
}

export interface GetAdFangxinParams extends GetAdParams {
  startDate?: string; // 多多放心推接口
}

export interface GetAdGeneralParams
  extends GetAdSearchParams,
    GetAdFangxinParams {}