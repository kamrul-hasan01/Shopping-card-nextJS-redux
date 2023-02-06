import React from "react";
import StockTable from "../../../components/DashboardComponent/StockPage/StockTable";
import StockTItle from "../../../components/DashboardComponent/StockPage/StockTItle";

const index = () => {
  return (
    <div className="m-5 mx-10">
      <StockTItle />
      <div class=" overflow-x-auto shadow-md">
        <StockTable />
      </div>
    </div>
  );
};
index.layout = "dashboard";
export default index;
