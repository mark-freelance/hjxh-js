import {Avatar, Skeleton, Table, TableColumnProps} from "antd";
import React, { useEffect, useState } from "react";
import $ from "../../../plugins/axios";
import {adColumnOfStatus} from "./adColumnOfStatus";
import {fixedColumns} from "../../general/fixedColumns";

const columns: TableColumnProps<any>[] = [
  {
    dataIndex: "thumbUrl",
    render: (value) => <Avatar src={value} shape={"square"} />,
  },
  {
    dataIndex: "goodsName",
    title: "商品名称",
  },
  {
    dataIndex: "_id",
    title: "日期",
    render: (value) => value.beginDate,
  },
  adColumnOfStatus,
  {
    dataIndex: "impression",
    title: "曝光量",
    width: 100,
  },
  {
    dataIndex: "bid",
    title: "广告单位出价",
  },
  {
    dataIndex: "gmv",
    title: "广告转化支付金额",
  },
  {
    dataIndex: "spend",
    title: "广告消耗",
  },
  {
    dataIndex: "roi",
    title: "广告投入产出比",
    render: (v: number) => v && v.toFixed(2),
  },
  ...fixedColumns
];

export interface CompListAdFangxinProps {
  url: string;
}

export const CompListAdFangxin = (props: CompListAdFangxinProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    $.get(props.url).then((res) => {
      setLoading(false);
      setData(res.data);
      console.log(res.data);
    });
  }, [props.url]);

  return (
    <Skeleton loading={loading}>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={(r) => r._id.adId + r._id.beginDate}
        scroll={{ x: 1300 }}
        pagination={{ defaultPageSize: 50 }}
      />
    </Skeleton>
  );
};

export default CompListAdFangxin;
