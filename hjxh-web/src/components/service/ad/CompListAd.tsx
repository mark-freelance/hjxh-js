import { connect } from "react-redux";
import { ColumnProps } from "antd/es/table";
import {AppState} from "../../../redux/store";

export const round = (s: number, n: number, percent = false) => {
  if (!percent) {
    return s.toFixed(n);
  } else {
    return (s * 100).toFixed(n) + "%";
  }
};

const promoteColumns: ColumnProps<any>[] = [
  {
    title: "数据时间",
    dataIndex: "date",
    width: 120,
    render: (date: string) => {
      return date.substr(0, 10);
    },
  },
  {
    title: "渠道",
    key: "desc",
    width: 120,
    render: () => (
      <div style={{ fontSize: "small", color: "#333" }}>
        <p>多多搜索</p>
        <p>多多场景</p>
        <p>放心推</p>
        <p>合计</p>
      </div>
    ),
  },
  {
    title: "流量",
    key: "liuliang",
    width: 100,
    align: "right",
    render: (item: any) => {
      return (
        <div>
          <p>{round(item.ddss_liuliang, 2)}</p>
          <p>{round(item.ddcj_liuliang, 2)}</p>
          <p>{round(item.fxt_liuliang, 2)}</p>
          <p>{round(item.all_liuliang, 2)}</p>
        </div>
      );
    },
  },
  {
    title: "点击率",
    key: "dianjilv",
    width: 100,
    align: "right",

    render: (item: any) => {
      return (
        <div>
          <p>{round(item.ddss_dianjilv, 2, true)}</p>
          <p>{round(item.ddcj_dianjilv, 2, true)}</p>
          <p>{round(item.fxt_dianjilv, 2, true)}</p>
          <p>{round(item.all_dianjilv, 2, true)}</p>
        </div>
      );
    },
  },
  {
    title: "转化率",
    key: "zhuanhua",
    width: 100,
    align: "right",

    render: (item: any) => {
      return (
        <div>
          <p>{round(item.ddss_zhuanhua, 2, true)}</p>
          <p>{round(item.ddcj_zhuanhua, 2, true)}</p>
          <p>{round(item.fxt_zhuanhua, 2, true)}</p>
          <p>{round(item.all_zhuanhua, 2, true)}</p>
        </div>
      );
    },
  },
  {
    title: "投产",
    key: "touchan",
    width: 100,
    align: "right",

    render: (item: any) => {
      return (
        <div>
          <p>{round(item.ddss_touchan, 2)}</p>
          <p>{round(item.ddcj_touchan, 2)}</p>
          <p>{round(item.fxt_touchan, 2)}</p>
          <p>{round(item.all_touchan, 2)}</p>
        </div>
      );
    },
  },
  {
    title: "销量",
    key: "xiaoliang",
    width: 100,
    align: "right",

    render: (item: any) => {
      return (
        <div>
          <p>{round(item.ddss_xiaoliang, 2)}</p>
          <p>{round(item.ddcj_xiaoliang, 2)}</p>
          <p>{round(item.fxt_xiaoliang, 2)}</p>
          <p>{round(item.all_xiaoliang, 2)}</p>
        </div>
      );
    },
  },
  {
    title: "成交额",
    key: "chegnjiaoe",
    width: 100,
    align: "right",

    render: (item: any) => {
      return (
        <div>
          <p>{round(item.ddss_chengjiaoe, 2)}</p>
          <p>{round(item.ddcj_chengjiaoe, 2)}</p>
          <p>{round(item.fxt_chengjiaoe, 2)}</p>
          <p>{round(item.all_chengjiaoe, 2)}</p>
        </div>
      );
    },
  },
  {
    title: "花费",
    key: "huafei",
    width: 100,
    align: "right",

    render: (item: any) => {
      return (
        <div>
          <p>{round(item.ddss_huafei, 2)}</p>
          <p>{round(item.ddcj_huafei, 2)}</p>
          <p>{round(item.fxt_huafei, 2)}</p>
          <p>{round(item.all_huafei, 2)}</p>
        </div>
      );
    },
  },
];

export interface CompShowPromotesProps {
  promotes: [];
}

export const CompListAd = (props: CompShowPromotesProps) => {
  return (
    <></>
    // <Table
    //   dataSource={props.ad}
    //   columns={promoteColumns}
    //   rowKey={"date"}
    //   pagination={false}
    // />
  );
};

const map2state = (state: AppState) => ({
  ad: state.ad.ad,
});
export default connect(map2state)(CompListAd);
