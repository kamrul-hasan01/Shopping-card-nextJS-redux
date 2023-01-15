import React, { useState } from "react";
import StoreTable from "../../../components/DashboardComponent/StorePage/StoreTable";
import StoreTitle from "../../../components/DashboardComponent/StorePage/StoreTitle";
import { GetRequest } from "../../../components/Hooks/HTTPRequest/GetRequest";

const Index = ({ data }) => {
  const [storeDate, setStoreDate] = useState(data);

  return (
    <div className="m-5 mx-10">
      <StoreTitle setStoreDate={setStoreDate} />
      <div class=" overflow-x-auto shadow-md">
        <StoreTable content={storeDate || []} setStoreDate={setStoreDate} />
      </div>
    </div>
  );
};
Index.layout = "dashboard";
export async function getServerSideProps() {
  let result = await GetRequest("/store");
  return {
    props: {
      data: result || [],
    },
  };
}
export default Index;
