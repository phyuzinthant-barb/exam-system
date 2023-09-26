import React from "react";
import Layout from "../../../components/layout";
import { Space, Table, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const Students = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "StuID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/students/edit/${record.key}`}>Edit</Link>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      id: 1,
      name: "Su Su",
      email: "susu@gmail.com",
      level: 1,
    },
    {
      key: "2",
      id: 2,
      name: "Mg Mg",
      email: "mgmg@gmail.com",
      level: 2,
    },
    {
      key: "3",
      id: 3,
      name: "Mg Soe",
      email: "mgsoe@gmail.com",
      level: 3,
    },
  ];
  return (
    <Layout>
      <Button
            type="primary"
            onClick={() => {
              navigate("/students/create");
            }}
            icon={<PlusOutlined />}>
            Add New
          </Button>
      <Table columns={columns} dataSource={data} />
    </Layout>
  );
};

export default Students;
