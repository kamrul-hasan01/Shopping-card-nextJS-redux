import React from "react";
import { Delete, Edit } from "../../SVG/SVG";

const CategoryTable = () => {
  const content = [1, 2, 3, 4, 5, 5];
  return (
    <table className="w-full text-sm text-left  text-gray-400">
      <thead className="text-xs  uppercase  bg-navyBlue  border-b border-[gray]">
        <tr>
          <td className="px-6 py-4">ID</td>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Description</th>
          <th className="px-6 py-3">Image</th>
          <th className="px-6 py-3  text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {content?.map((item, idx) => {
          return (
            <tr
              key={idx}
              className=" border-b bg-navyBlue border-[gray] hover:bg-darkBlue hover:text-white"
            >
              <td className="px-6 py-4">{idx + 1}</td>
              <td className="px-6 py-4">item.name</td>
              <td className="px-6 py-4">item.description</td>
              <td className="px-6 py-4">images</td>
              <td className="px-6 py-4  flex justify-center items-center gap-x-3 ">
                <span className="cursor-pointer hover:text-[#0D86FF]">
                  <Edit />
                </span>

                <span className="cursor-pointer hover:text-[#E03232]">
                  <Delete />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CategoryTable;
