import React from "react";
import CategoryTable from "../../../components/DashboardComponent/CategoryPage/CategoryTable";
import CategoryTitle from "../../../components/DashboardComponent/CategoryPage/CategoryTitle";

const index = () => {
  return (
    <div className="m-5 mx-10">
      <CategoryTitle />
      <div class=" overflow-x-auto shadow-md">
        <CategoryTable />
      </div>
    </div>
  );
};
index.layout = "dashboard";
export default index;
