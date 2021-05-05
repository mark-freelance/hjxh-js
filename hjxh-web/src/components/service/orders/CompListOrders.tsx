import {Avatar, Skeleton, Table, TableColumnProps} from "antd";
import React, { useEffect, useState } from "react";
import $ from "../../../plugins/axios";
import {ORDER_STATUS_STRS} from "./interface";
import dayjs from "dayjs";
import {fixedColumns} from "../../general/fixedColumns";


export const ordersColumns: TableColumnProps<any>[] = [
  {
    dataIndex: "thumb_url",
    render: (value) => <Avatar src={value} shape={"square"} />,
  },
  {
    dataIndex: "goods_name",
    title: "商品名称",
  },
  {
    dataIndex: "spec",
    title: "SKU名称",
  },
  {
    dataIndex: "order_status_str",
    title: "订单状态",
    filters: ORDER_STATUS_STRS.map((s) => ({ text: s, value: s })),
    onFilter: (value, record) =>
      record["order_status_str"].indexOf(value) === 0,
  },
  {
    dataIndex: "order_amount",
    title: "成交金额",
    sorter: (a, b) => (a.order_amount = b.order_amount),
  },
  {
    dataIndex: "order_time",
    title: "交易时间",
    render: (v) => dayjs(v * 1000).format("MM-DD HH:mm:ss"),
    sorter: (a, b) => a.order_time - b.order_time,
  },
  ...fixedColumns,
];

export const CompListOrders = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    $.get("/orders").then((res) => {
      setLoading(false);
      setData(res.data);
    });
  }, []);

  return (
    <Skeleton loading={loading}>
      <Table
        dataSource={data}
        columns={ordersColumns}
        rowKey={"order_sn"}
        scroll={{ x: 1300 }}
        pagination={{ defaultPageSize: 50 }}
      />
    </Skeleton>
  );
};

export default CompListOrders;
