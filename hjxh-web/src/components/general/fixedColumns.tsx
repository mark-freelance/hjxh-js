import {TableColumnProps} from "antd";
import dayjs from "dayjs";

export const fixedColumns: TableColumnProps<any>[] = [
  {
    dataIndex: "mallId",
    title: "店铺ID",
  },
  {
    dataIndex: 'updateTime',
    title: '更新时间',
    width: 120,
    render: (v: Date) => dayjs(v).format('MM-DD HH:MM')

  }
]