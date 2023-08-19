import React, { useEffect, useState } from "react";
import Sidebar from '../Sidebar'
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme, Card, Col, Row, Carousel } from "antd";
import axios from "axios";
const { Header, Sider, Content } = Layout;
const { Meta } = Card;
let uid = localStorage.getItem("userId");
let uname = localStorage.getItem("newuser");
let baseUrl = process.env.REACT_APP_BASE_URL_USERS;
let url = baseUrl + uid + "/posts";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [posts, setPosts] = useState([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    axios.get(url).then((data) => setPosts(data.data));
  });

  let userPosts = posts.length;
  return (
    <Layout>
      <Sidebar />
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
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={{ background: "#0092ff", padding: "8px  40px" }}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1692197808~exp=1692198408~hmac=00f4b266eb02838bfba447ac847502f188e8717f8fa464d893521b15bbaf86b5"
                  />
                }
              >
                <Meta
                  title="Welcome to QDB "
                  description="QDB has always been firmly committed to creating an economy that is sustainable, diversified and competitive, with dynamic, successful SMEs at the core"
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ background: "#0092ff", padding: "8px  10px" }}>
              <Card title="Overall" bordered={false} style={{ width: 300 }}>
                <p>{userPosts} published posts</p>
                <p>By {uname}</p>
                <p>2 posts in Queue</p>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ background: "#0092ff", padding: "8px  40px" }}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1692197808~exp=1692198408~hmac=00f4b266eb02838bfba447ac847502f188e8717f8fa464d893521b15bbaf86b5"
                  />
                }
              >
                <Meta
                  title="Welcome to QDB "
                  description="QDB has always been firmly committed to creating an economy that is sustainable, diversified and competitive, with dynamic, successful SMEs at the core"
                />
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" span={6}>
            <div style={{ background: "#0092ff", padding: "8px 0" }}>
              <Carousel autoplay>
                <div>
                  <h3
                    style={{
                      height: "160px",
                      color: "#fff",
                      lineHeight: "160px",
                      textAlign: "center",
                      background: "#364d79",
                    }}
                  >
                    POSTS SLIDER ONE
                  </h3>
                </div>
                <div>
                  <h3
                    style={{
                      height: "160px",
                      color: "#fff",
                      lineHeight: "160px",
                      textAlign: "center",
                      background: "#364d79",
                    }}
                  >
                    POSTS SLIDER ONE
                  </h3>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
