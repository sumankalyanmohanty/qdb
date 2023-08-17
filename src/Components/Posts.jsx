import React, {useState} from 'react';

import Sidebar from './Sidebar';
import Blogs from './Blogs';
import { Layout, Button, theme } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
const Posts = () =>{
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      const [collapsed, setCollapsed] = useState(false);
return(
 <Layout>  
  <Sidebar/>
  <Layout>
  <Header style={{ padding: 0, background: colorBgContainer }}>
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: "16px",
        width: 64,
        height: 64,
      }}
    />
  </Header>
    <Blogs/>
  </Layout>
  </Layout>
)
}
export default Posts;