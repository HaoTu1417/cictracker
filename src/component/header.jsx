import React from "react";
import { Layout, Card, Col, Row } from "antd";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

const Header = () => {
  return (
    <Layout.Header className="header" style={{ display: "flex" }}>
      <div className="site-card-wrapper123" style={{ width: "100%", height: "100%" }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content

            </Card>

          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </Layout.Header>
  );
};

export default Header;
