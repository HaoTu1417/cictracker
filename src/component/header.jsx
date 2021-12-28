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
    <Layout.Header className="header">
      Header
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
              <XYPlot width={300} height={300}>
                <HorizontalGridLines />
                <LineSeries
                  data={[
                    { x: 1, y: 10 },
                    { x: 2, y: 5 },
                    { x: 3, y: 15 },
                  ]}
                />
                <XAxis />
                <YAxis />
              </XYPlot>
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
