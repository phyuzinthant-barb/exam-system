import { Button, Form, Input, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import Layout from "../../../components/layout";

const App = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  return (
    <Layout>

      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}>

        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input exam category!",
            },
          ]}>
          <Select allowClear>
            <Select.Option value="category">Programming</Select.Option>
            <Select.Option value="category">English</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Level"
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

        <Form.Item label="Question">
          <TextArea placeholder="input question..." />
        </Form.Item>

        <Form.Item label="Option 1">
          <TextArea placeholder="input option 1..." />
        </Form.Item>

        <Form.Item label="Option 2">
          <TextArea placeholder="input option 2..." />
        </Form.Item>

        <Form.Item label="Option 3">
          <TextArea placeholder="input option 3..." />
        </Form.Item>
        
        <Form.Item label="Option 4">
          <TextArea placeholder="input option 4..." />
        </Form.Item>

        <Form.Item
          label="Correct Answer"
          name="option"
          rules={[
            {
              required: true,
              message: "Please input exam correct answer!",
            },
          ]}>
          <Select allowClear>
            <Select.Option value="option">Option 1</Select.Option>
            <Select.Option value="option">Option 2</Select.Option>
            <Select.Option value="option">Option 3</Select.Option>
            <Select.Option value="option">Option 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};
export default App;
