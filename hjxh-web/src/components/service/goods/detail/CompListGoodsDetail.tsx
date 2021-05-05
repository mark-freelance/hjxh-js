import { Avatar, Skeleton, Table, TableColumnProps } from "antd";
import React, { useEffect, useState } from "react";
import $ from "../../../../plugins/axios";
import {fixedColumns} from "../../../general/fixedColumns";

const columns: TableColumnProps<any>[] = [
  {
    dataIndex: "hdThumbUrl",
    render: (value) => <Avatar src={value} shape={"square"} />,
  },
  {
    dataIndex: "goodsName",
    title: "商品名称",
  },
  {
    dataIndex: "goodsFavCnt",
    title: "商品收藏用户数",
  },
  {
    dataIndex: "goodsUv",
    title: "商品访客数",
  },
  {
    dataIndex: "goodsPv",
    title: "商品浏览数",
  },
  {
    dataIndex: "payOrdrCnt",
    title: "支付订单数",
  },
  ...fixedColumns
];

export const CompListGoodsDetail = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    $.get("/goods/detail").then((res) => {
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

export default CompListGoodsDetail;
