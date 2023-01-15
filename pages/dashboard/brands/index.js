import React, { useState } from "react";
import BrandTable from "../../../components/DashboardComponent/BrandPage/BrandTable";
import BrandTitle from "../../../components/DashboardComponent/BrandPage/BrandTitle";
import { GetRequest } from "../../../components/Hooks/HTTPRequest/GetRequest";

const Index = ({ data }) => {
  const [BrandTableData, setBrandTableData] = useState(data);
  return (
    <div className="m-5 mx-10">
      <BrandTitle setBrandTableData={setBrandTableData} />
      <div class=" overflow-x-auto shadow-md">
        <BrandTable
          content={BrandTableData}
          setBrandTableData={setBrandTableData}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  let result = await GetRequest("/brand");
  return {
    props: {
      data: result || [],
    },
  };
}

Index.layout = "dashboard";
export default Index;
