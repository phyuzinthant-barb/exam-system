import React, { Component } from "react";
import Chart from "react-google-charts";
import Layout from "../../../components/layout";
import { Space, Table, Button, Form, Select } from "antd";
import { useNavigate, Link } from "react-router-dom";

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
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
      key: "marks",
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
      key: "1",
      id: 1,
      name: "Su Su",
      level: 1,
      totalMarks: 100,
      obtMarks: 20,
      status: 'fail',
    },
    {
      key: "2",
      id: 2,
      name: "Mg Mg",
      level: 2,
      totalMarks: 100,
      obtMarks: 55,
      status: 'pass',
    },
    {
      key: "3",
      id: 3,
      name: "Mg Soe",
      level: 3,
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
        name={["categoryName", "name"]}
        label="Category">
        <Select allowClear>
          <Select.Option value="name">Programming</Select.Option>
          <Select.Option value="name">English</Select.Option>
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
