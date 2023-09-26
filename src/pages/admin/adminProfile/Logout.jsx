import React from "react";
import Layout from "../../../components/layout";
import { Alert, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Alert
          message="Log out"
          description="You will be returned to the log in screen."
          type="text"
          action={
            <Space direction="vertical">
              <Button
                type="primary"
                ghost
                onClick={() => {
                  navigate("/");
                }}>
                Log out
              </Button>
              <Button
                type="primary"
                ghost
                onClick={() => {
                  navigate("/exams");
                }}>
                Cancel
              </Button>
            </Space>
          }
        />
      </Space>
    </Layout>
  );
};

export default Logout;
