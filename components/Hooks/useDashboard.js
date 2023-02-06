import { useState } from "react";

const useDashboard = (token) => {
  console.log("token :", token);
  const [brands, setBrands] = useState({});
  return { brands };
};

export default useDashboard;
