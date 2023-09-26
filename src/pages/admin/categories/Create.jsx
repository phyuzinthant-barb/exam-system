import React from "react";
import { Button, Input, Form, Select } from "antd";
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

const onFinish = (values) => {
  console.log(values);
};

const Create = () => {
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
        }}>
        <Form.Item
          name={["categoryName", "name"]}
          label="Category"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["categoryName", "level"]}
          label="Level"
          rules={[
            {
              required: true,
            },
          ]}>
          <Select allowClear>
            <Select.Option value="level1">Level 1</Select.Option>
            <Select.Option value="level2">Level 2</Select.Option>
            <Select.Option value="level3">Level 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button
            style={{ marginLeft: "5px" }}
            type="primary"
            onClick={() => {
              navigate("/categories");
            }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Create;
