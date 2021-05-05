import { TableColumnProps } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import { ALI_ICON_PATH } from "../config/const";

export const AntdIcons = createFromIconfontCN({
  scriptUrl: ALI_ICON_PATH, // 在 iconfont.cn 上生成
});

export const mergeAntdColumnDict = (
  item: { [key: string]: any },
  dict: { [key: string]: any }
): TableColumnProps<any>[] => {
  let arr: any[] = [];
  for (let key in item) {
    if (dict.hasOwnProperty(key)) {
      arr.push({ dataIndex: key, title: dict[key] });
    }
  }
  return arr;
};
