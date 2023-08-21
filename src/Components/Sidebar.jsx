import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  PoweroffOutlined,
  DashboardOutlined,
  ReadOutlined,
} from "@ant-design/icons";
const mystyle = {
  
  width:"80px",
  height:"60px",
  marginLeft:"60px"
};
const { Sider } = Layout;
const Sidebar = ({username }) => {
  const navi = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  var name = localStorage.getItem("newuser");
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" style={{background: 'azure'}} ><img class="logo" style={mystyle} src="https://www.qdb.qa/Style%20Library/QDB/images/logo.png" /></div> 
      <div className="demo-logo-vertical" />
      
            <Menu
        onClick={({ key }) => {
          if (key == "signout") {
            localStorage.clear();
            navi("/");
          } else {
            navi(key);
          }
        }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        items={[
          {
            key: "#",
            icon: <UserOutlined />,
            label:"Hello "+ username,
          },
          {
            key: "/dashboard",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "/posts",
            icon: <ReadOutlined />,
            label: "Blog",
          },
          {
            key: "/",
            icon: <PoweroffOutlined />,
            label: "Sign out",
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
