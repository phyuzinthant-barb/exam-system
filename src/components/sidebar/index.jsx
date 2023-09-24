import React, {useState} from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Sider, Content } = Layout;
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (obj) => {
    navigate(obj.key);
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical"
          style={{
            fontSize: "16px",
            height: 64,
            color: "white",
            textAlign: 'center',
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
              icon: <UserOutlined />,
              label: "Categories",
            },
            {
              key: "/exams",
              icon: <VideoCameraOutlined />,
              label: "Exams",
            },
            {
              key: "/questions",
              icon: <VideoCameraOutlined />,
              label: "Questions",
            },
            {
              key: "/reports",
              icon: <UploadOutlined />,
              label: "Reports",
            },
          ]}
        />
      </Sider>
  )
}

export default Sidebar