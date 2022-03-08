import React from "react";
import Table from "./common/table";

import Style from "../css/investTable.css";

const InvestTable = () => {
  const data = [
    {
      _id: 1,
      coinCode: "BTC",
      coinName: "Bitcoin",
      coinStatus: "Invest+",
      safetyPoint: 10,
      coinInvestment: 100,
      coinCurrentValue: 200,
      realizedValue: 500,
    },
    {
      _id: 2,
      coinCode: "ETH",
      coinName: "Etherium",
      coinStatus: "Invest+",
      safetyPoint: 10,
      coinInvestment: 100,
      coinCurrentValue: 200,
      realizedValue: 500,
    },
  ];
  const columns = [
    {
      path: "coinCode",
      label: "Mã Coin",
    },
    { path: "coinName", label: "Tên Coin" },
    { path: "coinStatus", label: "Trạng Thái" },
    { path: "safetyPoint", label: "Điểm An Toàn" },
    { path: "coinInvestment", label: "Vốn" },
    { path: "coinCurrentValue", label: "Giá trị hiện tại" },
    { path: "realizedValue", label: "Đã chốt" },
  ];
  return (
    <Table
      id="tableNgoai"
      columns={columns}
      data={data}
      sortColumn={columns[0]}
      style={Style}
    />
  );
};

export default InvestTable;
