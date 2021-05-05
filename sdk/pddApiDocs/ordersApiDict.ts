import * as fs from "fs";
import { PddResult } from "../api/interface";
import {sortDict} from "../utils";

export interface PddApiParamItem {
  id: number;
  parentId: number;
  childrenNum: number;
  paramName: string;
  paramType: string;
  sourcePath?: string;
  example: string;
  paramDesc: string;
}

const res: PddResult = JSON.parse(
  fs.readFileSync("./pdd.order.list.get.json", "utf-8")
);
let orderApiDict: { [key: string]: any } = {};
res.result.responseParamList.forEach((item: PddApiParamItem) => {
  orderApiDict[item.paramName] = item.paramDesc;
});

orderApiDict = sortDict(orderApiDict)

export default orderApiDict;

if (require.main === module) {
  console.log(orderApiDict);
  fs.writeFileSync('./ordersDict.json', JSON.stringify(orderApiDict, null, 2), )
}
