import React from "react";
import SupplierTable from "../../../components/DashboardComponent/SuppiierPage/SupplierTable";
import SupplierTitle from "../../../components/DashboardComponent/SuppiierPage/SupplierTitle";

const index = () => {
  return (
    <div className="m-5 mx-10">
      <SupplierTitle />
      <div class=" overflow-x-auto shadow-md">
        <SupplierTable />
      </div>
    </div>
  );
};
index.layout = "dashboard";
export default index;
