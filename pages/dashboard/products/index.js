import React from "react";
import ProductTable from "../../../components/DashboardComponent/ProductPage/ProductTable";
import ProductTitle from "../../../components/DashboardComponent/ProductPage/ProductTitle";

const index = () => {
  return (
    <div className="m-5 mx-10">
      <ProductTitle />
      <div class=" overflow-x-auto shadow-md">
        <ProductTable />
      </div>
    </div>
  );
};
index.layout = "dashboard";
export default index;
