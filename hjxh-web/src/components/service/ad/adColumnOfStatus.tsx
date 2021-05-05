import React from "react";
import {TableColumnProps, Tag} from "antd";


export const adColumnOfStatus: TableColumnProps<any> = {
  dataIndex: "status",
  title: "推广状态",
  render: (v: number) => {
    switch (v) {
      case 1:
        return <Tag color={"green"}> 推广中 </Tag>;
      case 2:
        return <Tag color={"red"}> 手动暂停 </Tag>;
      default:
        return "-";
    }
  }
}