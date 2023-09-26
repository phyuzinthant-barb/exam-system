import React from "react";
import Layout from "../../../components/layout";
import { Space, Table, Tag, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const sharedOnCell = (_, index) => {
  if (index === 1) {
    return {
      colSpan: 0,
    };
  }
  return {};
};

const index = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      colSpan: 1,
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {}
        };
        if (index % 3 === 0) {
          obj.props.rowSpan = 3;
        }
        if (index % 3 === 1) {
          obj.props.rowSpan = 0;
        }
        if (index % 3 === 2) {
          obj.props.rowSpan = 0;
        }
        return obj;
      }
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
          <Link to={`/categories/edit/${record.key}`}>Edit</Link>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      category: "Programming",
      level: 1,
    },
    {
      key: "2",
      category: "Programming",
      level: 2,
    },
    {
      key: "3",
      category: "Programming",
      level: 3,
    },
    {
      key: "4",
      category: "English",
      level: 1,
    },
    {
      key: "5",
      category: "English",
      level: 2,
    },
    {
      key: "6",
      category: "English",
      level: 3,
    },
  ];
  return (
    <Layout>
      <Button
        type="primary"
        onClick={() => {
          navigate("/categories/create");
        }}
        icon={<PlusOutlined />}>
        Add New
      </Button>
      <Table columns={columns} dataSource={data} />
    </Layout>
  );
};

export default index;
