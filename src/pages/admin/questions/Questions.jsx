import React from 'react'
import Layout from '../../../components/layout';
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Questions = () => {
  const navigate = useNavigate();
  return (
    <Layout>
    <Button
          type="primary"
          ghost
          onClick={() => {
            navigate("/questions/create");
          }}>
          <PlusOutlined />
          Create Questions
        </Button>
    </Layout>
  )
}

export default Questions
