import React from "react";
import Layout from "../../../components/layout";
import { Button, Form, Input, Select, TimePicker } from "antd";
import { useNavigate } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Create = () => {
  const navigate = useNavigate();

  return (
    <Layout>
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
          label="Exam Name"
          name="examName"
          rules={[
            {
              required: true,
              message: "Please input EXAM NAME!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Choose Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input exam category!",
            },
          ]}>
          <Select allowClear>
            <Select.Option value="category">English</Select.Option>
            <Select.Option value="category">Programming</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Choose Exam Level"
          name="level"
          rules={[
            {
              required: true,
              message: "Please input exam level!",
            },
          ]}>
          <Select allowClear>
            <Select.Option value="level">Level 1</Select.Option>
            <Select.Option value="level">Level 2</Select.Option>
            <Select.Option value="level">Level 3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Maximum Marks"
          name="marks"
          rules={[
            {
              required: true,
              message: "Please input maximum marks!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Number of Questions"
          name="questions"
          rules={[
            {
              required: true,
              message: "Please input number of questions!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item label="Time Duration" hasFeedback>
          <TimePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Create Exam
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

export default Create;
