import React from "react";
import Layout from "../../../components/layout";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Questions = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/questions/${id}/details`);
  };

  return (
    <Layout>
      <Button type="primary" ghost onClick={() => {
              navigate("/questions/create");
            }}>
        <PlusOutlined />
        Create Questions
      </Button>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={8}>
          <Card
            title="Programming Level 1"
            bordered={true}
            id="1"
            onClick={() => handleCardClick(1)}>
            Total Questions : 100
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Programming Level 2"
            bordered={true}
            id="2"
            onClick={() => handleCardClick(2)}>
            Total Questions : 50
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Programming Level 3"
            bordered={true}
            id="3"
            onClick={() => handleCardClick(3)}>
            Total Questions : 30
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={8}>
          <Card
            title="English Level 1"
            bordered={true}
            id="4"
            onClick={() => handleCardClick(4)}>
            Total Questions : 70
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="English Level 2"
            bordered={true}
            id="5"
            onClick={() => handleCardClick(5)}>
            Total Questions : 20
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="English Level 3"
            bordered={true}
            id="6"
            onClick={() => handleCardClick(6)}>
            Total Questions : 90
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Questions;
