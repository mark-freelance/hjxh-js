import mongoose, { Collection } from "mongoose";
import assert from "assert";
import { PddClient } from "./pdd";

export const MONGO_HOST = "nanchuan.site";
export const MONGO_PORT = 2708;
export const MONGO_DB_AUTH = "hjxh-operate";
export const MONGO_USERNAME = "hjxh-operator";
export const MONGO_PASSWORD = "hjxh-operator";
export const MONGO_DATABASE_NAME = "hjxh-operate";
export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE_NAME}?authSource=${MONGO_DB_AUTH}`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("connected", () => {
  console.log('mongodb database "hjxh-operate" connected ~');
});

db.on("error", (e) => {
  console.error(e);
});

export default db;


export const dbInsertItemsRobust = (
  coll: Collection | string,
  items: any[],
  mallId?: number | PddClient,
  ids?: string[] | string
) => {
  if (items.length === 0) return;

  if (typeof coll === "string") {
    coll = db.collection(coll);
  }

  if (mallId instanceof PddClient) {
    mallId = mallId.userInfo.mallId;
  }

  assert(ids || items[0]["_id"], "必须要有_id字段！");
  assert(mallId || items[0]["mallId"], "必须要有mallId字段！");
  if (mallId || ids) {
    items.forEach((item) => {
      // update time
      item["updateTime"] = new Date();

      // update mall_id
      if (mallId) {
        item["mallId"] = mallId;
      }

      // update id
      if (ids && !item["_id"]) {
        if (typeof ids === "string") {
          item["_id"] = item[ids];
        } else {
          const d: { [key: string]: any } = {};
          ids.forEach((id) => {
            d[id] = item[id];
          });
          item["_id"] = d;
        }
      }
    });
  }
  coll
    .insertMany(items, { ordered: false })
    .then((insertedResult) => {
      console.log(
        "inserted into coll of " + (coll as Collection).name,
        insertedResult.result
      );
    })
    .catch((e) => {
      console.warn(e.message);
    });
};
