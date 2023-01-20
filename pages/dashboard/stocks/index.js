import React from "react";
import ProductTable from "../../../components/DashboardComponent/ProductPage/ProductTable";
import StockTItle from "../../../components/DashboardComponent/StockPage/StockTItle";

const index = () => {
  return (
    <div className="m-5 mx-10">
      <StockTItle />
      <div class=" overflow-x-auto shadow-md">
        <ProductTable />
      </div>
    </div>
  );
};
index.layout = "dashboard";
export default index;
