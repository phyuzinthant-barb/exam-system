import React from "react";
import { Button, Form, Input, Select } from "antd";
import Layout from "../../../components/layout";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const Edit = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          margin: "0 auto",
        }}
        validateMessages={validateMessages}>
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "phNum"]}
          label="Phone Number"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "field"]}
          label="Field"
          rules={[
            {
              required: true,
            },
          ]}>
          <Select allowClear>
            <Select.Option value="english">English</Select.Option>
            <Select.Option value="myanmar">Myanmar</Select.Option>
            <Select.Option value="maths">Maths</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
          <Button
            type="link"
            onClick={() => {
              navigate("/students");
            }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};
export default Edit;
