import React from "react";
import Layout from "../../../components/layout";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ChangePassword = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {" "}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Current Password"
          name="curPassword"
          rules={[
            {
              required: true,
              message: "Please input your current password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="conPassword"
          rules={[
            {
              required: true,
              message: "Please input your confirm password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              navigate("/exams");
            }}>
            Confirm
          </Button>
          <Button
            style={{ marginLeft: "5px" }}
            type="primary"
            htmlType="submit"
            onClick={() => {
              navigate("/exams");
            }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default ChangePassword;
