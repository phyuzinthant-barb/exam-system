import React from 'react'
import { Table } from 'antd';
import Layout from "../../../components/layout";

const columns = [
  {
    title: 'Exam Name',
    dataIndex: 'exName',
    key: 'exName',
  },
  {
    title: 'Total Marks',
    dataIndex: 'totalMarks',
    key: 'totalMarks',
  },
  {
    title: 'Obt Marks',
    dataIndex: 'obtMarks',
    key: 'obtMarks',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];
const data = [
  {
    key: "r1",
    exName: 'Programming',
    totalMarks: 100,
    obtMarks: 20,
    status: 'fail',
  },
];

const IndividualReport = () => {
  return (
    <Layout>
      <h2>Su Su</h2>
      <h4>Student ID : 1</h4>
      <h4>Student Level : 1</h4>
      <Table columns={columns} dataSource={data} />;
    </Layout>
  )
}

export default IndividualReport
