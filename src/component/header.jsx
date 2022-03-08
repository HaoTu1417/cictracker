import React from "react";
import { Layout, Card, Col, Row } from "antd";

const Header = () => {
  return (
    <Layout.Header className="header" style={{ display: "flex" }}>
      <div
        className="site-card-wrapper123"
        style={{ width: "100%", height: "100%" }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Investment" bordered={false}>
              Investment
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Value" bordered={false}>
              Value
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Profit" bordered={false}>
              Profit
            </Card>
          </Col>
        </Row>
      </div>
    </Layout.Header>
  );
};

export default Header;
