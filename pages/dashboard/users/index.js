import React from "react";
import UserTable from "../../../components/DashboardComponent/UserPage/UserTable";
import UserTitle from "../../../components/DashboardComponent/UserPage/UserTitle";

const index = () => {
  return (
    <div className="m-5 mx-10">
      <UserTitle />
      <div class=" overflow-x-auto shadow-md">
        <UserTable />
      </div>
    </div>
  );
};
index.layout = "dashboard";
export default index;
