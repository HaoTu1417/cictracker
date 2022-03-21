import React, { useState } from "react";
import Table from "./common/table";

import Style from "../css/investTable.css";

import InvestTableData from "./investTableData";
import investTableData from "./investTableData";
import continuousColorLegend from "react-vis/dist/legends/continuous-color-legend";

const InvestTable = () => {
  const [data, setData] = useState([
    {
      _id: 1,
      coinCode: "BTC",
      coinName: "Bitcoin",
      coinStatus: "Invest+",
      safetyPoint: 10,
      group: "A",
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
      group: "B",
      coinInvestment: 100,
      coinCurrentValue: 200,
      realizedValue: 500,
    },
  ]);
  const columns = InvestTableData.columns;
  console.log("InvestTableData", InvestTableData.columns);
  const handleReadFirstFileDone = (data) => {
    const sortedData = data.sort((a, b) => {
      if (a.safetyPoint > b.safetyPoint) {
        return -1;
      }
      return 1;
    });
    setData(sortedData);
  };
  const handleReadSecondFileDone = (result) => {
    console.log("data", data);
    const oldData = [...data];
    console.log("oldData", oldData);
    result.forEach((element) => {
      // const coin = oldData[element.coinCode];
      const coin = oldData.filter((c) => {
        return c.coinCode === element.coinCode;
      });
      console.log("coin:", coin);
      if (coin && coin.length > 0) {
        coin[0].realizedValue += element.realizedValue;
      }
    });
    console.log("oldData", oldData);
    setData(oldData);
  };

  const onChange = (e) => {
    investTableData.readFileToData(e, handleReadFirstFileDone);
  };
  const onChangeOfSecondFile = (e) => {
    investTableData.readFileToData(e, handleReadSecondFileDone);
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
      <div>
        <input type="file" id="myfile2" onChange={onChangeOfSecondFile} />
      </div>
    </React.Fragment>
  );
};

export default InvestTable;
