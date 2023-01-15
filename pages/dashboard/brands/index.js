import axios from "axios";
import React, { useState } from "react";
import BrandTable from "../../../components/BrandPage/BrandTable";
import BrandTitle from "../../../components/BrandPage/BrandTitle";
import { URL } from "../../../components/Utils/BaseUrl";

const Index = ({ brandData }) => {
  console.log("brandData :", brandData);
  const [BrandTableData, setBrandTableData] = useState(brandData);
  return (
    <div className="m-5 mx-10">
      <BrandTitle />
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
  let result;
  try {
    result = await axios.get(`${URL}/brand`);
  } catch (error) {
    console.log("error :", error);
  }

  return {
    props: {
      brandData: result?.data?.data || [],
    },
  };
}

Index.layout = "dashboard";
export default Index;
