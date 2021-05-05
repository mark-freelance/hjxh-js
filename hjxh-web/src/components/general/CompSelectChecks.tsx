import {Button, Checkbox, CheckboxOptionType, Drawer, Skeleton} from "antd";
import React, {useState} from "react";
import {AntdIcons} from "../../plugins/antd";

const checks: CheckboxOptionType[] = [
  { style: { width: "100%" }, label: "订单量", value: "订单量" },
  {
    style: { width: "100%" },
    label: "销售金额（含税）",
    value: "销售金额（含税）",
  },
  { style: { width: "100%" }, label: "退款金额", value: "退款金额" },
  { style: { width: "100%" }, label: "退款占比", value: "退款占比" },
  {
    style: { width: "100%" },
    label: "推广成交金额占比",
    value: "推广成交金额占比",
  },
  {
    style: { width: "100%" },
    label: "直通车/多多搜索",
    value: "直通车/多多搜索",
  },
  {
    style: { width: "100%" },
    label: "超级推荐/多多场景",
    value: "超级推荐/多多场景",
  },
  { style: { width: "100%" }, label: "放心推", value: "放心推" },
  { style: { width: "100%" }, label: "免费流量占比", value: "免费流量占比" },
  { style: { width: "100%" }, label: "免费订单占比", value: "免费订单占比" },
];


export const CompSelectChecks = () => {

  const [showSetColumns, setShowSetColumns] = useState(false);

  return <div>
    <Drawer visible={showSetColumns} onClose={() => setShowSetColumns(false)}>
      <h3>筛选要显示的列指标</h3>
      <Checkbox.Group options={checks} />
    </Drawer>

    <div
      style={{
        width: "100%",
        display: "inline-flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: "30px",
        marginBottom: "10px",
      }}
    >
      <Button type={"text"}>最近一周</Button>
      <Button type={"text"}>最近一个月</Button>
      <AntdIcons
        type={"icon-settings"}
        style={{ fontSize: 20 }}
        onClick={() => setShowSetColumns(!showSetColumns)}
      />
    </div>

  </div>
}

export default CompSelectChecks
