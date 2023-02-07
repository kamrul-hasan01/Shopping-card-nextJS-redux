import React from "react";

const Loading = ({ customStyle }) => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <div
        className={`w-40 h-40 border-t-4 border-b-4 border-[red] rounded-full animate-spin ${customStyle}`}
      ></div>
    </div>
  );
};

export default Loading;
