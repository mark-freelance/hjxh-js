import { Breadcrumb, Layout, Menu, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { Content } from "antd/es/layout/layout";
import { Header } from "antd/lib/layout/layout";
import SubMenu from "antd/es/menu/SubMenu";
import routers, { RouterItem } from "../config/routers";
import CompListOrders from "./service/orders/CompListOrders";
import CompListAdSearch from "./service/ad/CompListAdSearch";
import CompListAdFangxin from "./service/ad/CompListAdFangxin";
import {AntdIcons} from "../plugins/antd";
import CompListGoodsDetail from "./service/goods/detail/CompListGoodsDetail";
import CompListGoodsComments from "./service/goods/comments/CompListGoodsComments";

export const SiderWidth = 200;
export const SiderCollapsedWidth = 60;

export const LayoutBase = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState<string[]>(["首页"]);
  const [key, setKey] = useState("home");

  const buildSider = (router: RouterItem, breadcrumb: string[] = []) =>
    router.children ? (
      <SubMenu key={router.key} title={router.title}>
        {router.children.map((subRouter) =>
          buildSider(subRouter, [...breadcrumb, router.title])
        )}
      </SubMenu>
    ) : (
      <Menu.Item
        key={router.key}
        onClick={() => {
          setBreadcrumb([...breadcrumb, router.title]);
          setKey(router.key);
        }}
      >
        {router.title}
      </Menu.Item>
    );

  return (
    <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        width={SiderWidth}
        collapsedWidth={SiderCollapsedWidth}
        onCollapse={() => setCollapsed(!collapsed)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Menu
          theme={"dark"}
          defaultOpenKeys={["analysis", "raw"]}
          mode={"inline"}
        >
          {routers.map((router) => buildSider(router, []))}
        </Menu>
      </Sider>

      <Layout
        className={"site-layout"}
        style={{
          width: "100%",
          paddingLeft: collapsed ? SiderCollapsedWidth : SiderWidth,
        }}
      >
        <Header
          style={{
            width: "100%",
            padding: "0 40px",
            height: "50px",
            background: "white",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Breadcrumb>
            {breadcrumb.map((b) => (
              <Breadcrumb.Item key={b}>{b}</Breadcrumb.Item>
            ))}
          </Breadcrumb>

          <Space
            size={"large"}
            direction={"horizontal"}
            style={{ height: "100%" }}
          >
            <AntdIcons type={"icon-message"} style={{ fontSize: 20 }} />
            <AntdIcons type={"icon-feedback"} style={{ fontSize: 20 }} />
            <AntdIcons type={"icon-settings"} style={{ fontSize: 20 }} />
            <AntdIcons type={"icon-member"} style={{ fontSize: 20 }} />
          </Space>
        </Header>

        <Content style={{ margin: "16px 16px" }}>
          <div id={"content"} style={{ padding: 24, minHeight: 600 }}>
            {(() => {
              switch (key) {
                case "raw_orders":
                  return <CompListOrders />;
                case "raw_ad_search":
                  return <CompListAdSearch url={"/ad/search"} />;
                case "raw_ad_scene":
                  return <CompListAdSearch url={"/ad/scene"} />;
                case "raw_ad_fangxin":
                  return <CompListAdFangxin url={"/ad/fangxin"} />;
                case 'raw_goods_detail':
                  return <CompListGoodsDetail/>
                case 'raw_goods_comments':
                  return <CompListGoodsComments/>
                default:
                  return <></>;
              }
            })()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
