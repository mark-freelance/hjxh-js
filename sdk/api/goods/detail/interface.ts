import { FetchPddExtraParams } from "../../../pdd";

/**
 cate1Id: ""
 cate2Id: ""
 cate3Id: ""
 crawlerInfo: "0apWtxUkM_VetaIPAtLSlsyySsBqvEPBeEWnriUWMElNt_HfRQq5ban550Bbvhn0ludIUyc30lGpVIGHCdjuJQXiwKqNjtGNbsfXYF6zYNUTYAzS8Px5UzQ01AbUJlbq2Fm7kVmMkIkB35D7x5D72U1B1KkB_VkMZFmB2ODBweyQgpaT9KodIYnH4xFHGUaYD6GYn-tj0Cznj0wNgjnYOaHqp6QOsmaY4ctYzg945Ub2qcgG2VDx2hDx1cHGUV7sQpFZIuMW7W7LtODMROkMq-KWPhgRTHKGQ_FkIuIhGuMkRAHGUZSsfPuk7MVkL2SeMtOKBA1H24uMtke-9SzjD9_vW4DMsnw71sEMBf_v_ZpB7gkrx-FLt1Os1qDvwGy8nRYf0fYJXGqV85zgR02ztMk-jL_Mk5Ts-eXtfIu9-TNUkYiTdlu4Nl4YPain6ncPAlcmzCMm8QOcnSGMVg9JOMBibNeydO6"
 startDate: "2021-05-04"
 endDate: "2021-05-04"
 goodsId: ""

 pageNum: 1
 pageSize: 10

 queryType: 0
 sortCol: 0
 sortType: 1
 */
export interface GetGoodsDetailParams extends FetchPddExtraParams {
  cate1Id: string;
  cate2Id: string;
  cate3Id: string;
  startDate: string; // 2012-05-04
  endDate: string;
  goodsId: string | number;
  pageNum: number;
  pageSize: number;
  queryType: number; // 0
  sortCol: number; // 0
  sortType: number; // 1
}
