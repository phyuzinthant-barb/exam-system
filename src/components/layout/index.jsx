import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  UserOutlined,
  ContainerOutlined,
  DownOutlined,
  QuestionCircleOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Space, Avatar } from "antd";
import { useLocation, useNavigate, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "1",
    label: <Link to="/changepw">Change Password</Link>,
  },
  {
    key: "2",
    label: <Link to="/logout">Logout</Link>,
  },
];

const App = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (obj) => {
    navigate(obj.key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical"
          style={{
            fontSize: "16px",
            height: 64,
            color: "white",
            textAlign: "center",
            padding: 25,
          }}>
          Exam System
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          onClick={handleClick}
          items={[
            {
              key: "/students",
              icon: <UserOutlined />,
              label: "Students",
            },
            {
              key: "/categories",
              icon: <UnorderedListOutlined />,
              label: "Categories",
            },
            {
              key: "/exams",
              icon: <ContainerOutlined />,
              label: "Exams",
            },
            {
              key: "/questions",
              icon: <QuestionCircleOutlined />,
              label: "Questions",
            },
            {
              key: "/reports",
              icon: <PieChartOutlined />,
              label: "Reports",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
          }}>
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
          <Dropdown
            style={{ alignSelf: "end" }}
            menu={{
              items,
            }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space wrap size={16}>
                <Avatar icon={<UserOutlined />} />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
          }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
