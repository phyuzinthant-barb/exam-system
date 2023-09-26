import React from "react";
import Layout from "../../../components/layout";
import { Space, Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Exam Name",
    dataIndex: "examName",
    key: "examName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Level",
    dataIndex: "level",
    key: "level",
  },
  {
    title: "Total Marks",
    dataIndex: "totalMarks",
    key: "totalMarks",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Disable</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    examName: "Software Development",
    category: "Programming",
    totalMarks: "20 Marks",
    duration: "20 Minutes",
    level: 1,
  },
  {
    key: "2",
    examName: "Graph Theory",
    category: "Programming",
    totalMarks: "20 Marks",
    duration: "20 Minutes",
    level: 2,
  },
  {
    key: "3",
    examName: "IELTS",
    category: "English",
    totalMarks: "20 Marks",
    duration: "20 Minutes",
    level: 2,
  },
  {
    key: "4",
    examName: "Basic English",
    category: "English",
    totalMarks: "20 Marks",
    duration: "20 Minutes",
    level: 1,
  },
];

const Exams = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Exam Lists</h1>
      <Table columns={columns} dataSource={data} />
      <Space className="site-button-ghost-wrapper" wrap>
        <Button
          type="primary"
          ghost
          onClick={() => {
            navigate("/exams/create");
          }}>
          <PlusOutlined />
          Create Exam
        </Button>
      </Space>
    </Layout>
  );
};

export default Exams;
