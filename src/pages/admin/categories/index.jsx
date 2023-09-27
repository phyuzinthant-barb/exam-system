import React from "react";
import Layout from "../../../components/layout";
import { Space, Table, Button } from "antd";
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
      onCell: (record, rowIndex) => {
        const categoryCount = dataSource.filter(
          (item) => item.category === record.category
        ).length;
        return {
          rowSpan:
            rowIndex === 0 ||
            (rowIndex > 0 &&
              record.category !== dataSource[rowIndex - 1].category)
              ? categoryCount
              : 0,
        };
      },
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
  const dataSource = [
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
      <Table columns={columns} dataSource={dataSource} />
    </Layout>
  );
};

export default index;
