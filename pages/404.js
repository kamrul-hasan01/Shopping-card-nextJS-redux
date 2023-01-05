import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Custom = () => {
  const Router = useRouter();
  useEffect(() => {
    Router.push("/");
  }, [Router]);
  return <div></div>;
};

export default Custom;
