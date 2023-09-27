import React from "react";
import Chart from "react-google-charts";
import Layout from "../../../components/layout";
import { Table, Form, Select } from "antd";
import { useNavigate } from "react-router-dom";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export const chartData = [
  ["Category", "Level"],
  ["Programming Level 1", 30],
  ["Programming Level 2", 60],
  ["Programming Level 3", 40],
];

export const options = {
  title: "Category",
};

const Reports = () => {
  const navigate = useNavigate();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const columns = [
    {
      title: "StuID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "stuName",
      key: "stuName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Level",
      dataIndex: "stuLevel",
      key: "stuLevel",
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
      key: "totalMarks",
    },
    {
      title: "Obt Marks",
      dataIndex: "obtMarks",
      key: "obtMarks",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  const data = [
    {
      key: "r1",
      id: 1,
      stuName: "Su Su",
      stuLevel: 1,
      totalMarks: 100,
      obtMarks: 20,
      status: 'fail',
    },
    {
      key: "r2",
      id: 2,
      stuName: "Mg Mg",
      stuLevel: 2,
      totalMarks: 100,
      obtMarks: 55,
      status: 'pass',
    },
    {
      key: "r3",
      id: 3,
      stuName: "Mg Soe",
      stuLevel: 3,
      totalMarks: 100,
      obtMarks: 90,
      status: 'pass',
    },
  ];

  return (
    <Layout>
      <Form
        {...layout}
        name="nest-messages"
        style={{
          maxWidth: 300,
          textAlign: 'center',
          margin: "0",
        }}>
      <Form.Item
        name={["categoryName", "catName"]}
        label="Category">
        <Select allowClear>
          <Select.Option value="catName1">Programming</Select.Option>
          <Select.Option value="catName2">English</Select.Option>
        </Select>
      </Form.Item>
      </Form>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <Table columns={columns} dataSource={data} />
    </Layout>
  );
};

export default Reports;
