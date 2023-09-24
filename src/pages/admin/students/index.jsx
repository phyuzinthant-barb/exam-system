import React from "react";
import Layout from "../../../components/layout";
import { Space, Table, Tag, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
      name: "Su Su",
      age: 23,
      email: "susu@gmail.com",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Mg Mg",
      age: 18,
      email: "mgmg@gmail.com",
      tags: ["loser"],
    },
  ];
  return (
    <Layout>
      <Button
            type="link"
            onClick={() => {
              navigate("/students/create");
            }}>
            Add New
          </Button>
      <Table columns={columns} dataSource={data} />
    </Layout>
  );
};

export default Students;
