import React from "react";
import Table from "./common/table";
import * as XLSX from "xlsx";
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
  const onChange = (e) => {
    console.log("onchange");
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      console.log(data);
    };
    reader.readAsBinaryString(file);
  };
  return (
    <React.Fragment>
      <Table
        id="tableNgoai"
        columns={columns}
        data={data}
        sortColumn={columns[0]}
        style={Style}
      />
      <div>
        <input type="file" id="myfile" onChange={onChange} />
      </div>
    </React.Fragment>
  );
};

export default InvestTable;
