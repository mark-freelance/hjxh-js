import { Skeleton, Table, TableColumnProps } from "antd";
import React, { useEffect, useState } from "react";
import $ from "../../../../plugins/axios";
import { fixedColumns } from "../../../general/fixedColumns";

const columns: TableColumnProps<any>[] = [
  {
    key: "goodsId",
    title: "商品ID",
    render: (r) => r._id.goodsId,
  },
  {
    key: "statDate",
    title: "日期",
    render: (r) => r._id.statDate,
  },
  {
    dataIndex: "goodsUnfkUndfltRevCnt1m",
    title: "评价总数",
  },
  {
    dataIndex: "avgServRevScr1m",
    title: "商品DSR",
    render: (v: number) => v.toFixed(2),
  },
  ...fixedColumns,
];

export const CompListGoodsComments = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    $.get("/goods/comments").then((res) => {
      setLoading(false);
      setData(res.data);
    });
  }, []);

  return (
    <Skeleton loading={loading}>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={(r) => Object.values(r["_id"]).join("_")}
        scroll={{ x: 1300 }}
        pagination={{ defaultPageSize: 50 }}
      />
    </Skeleton>
  );
};

export default CompListGoodsComments;
