import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="m-5 mx-10">
      <div className="flex justify-between mb-2">
        <h4>Brands</h4>
        <Link
          href="brands/add-brand"
          className="text-white bg-[green] py-2 px-3 rounded"
        >
          Add Brand
        </Link>
      </div>
      <div class="relative overflow-x-auto shadow-md">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>

              <th scope="col" class="px-6 py-3  text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <td class="px-6 py-4">Name</td>
              <td class="px-6 py-4">Description</td>
              <td class="px-6 py-4">location</td>
              <td class="px-6 py-4 text-center">
                <Link
                  href="/dashboard/brands/edit-brand/1234"
                  class="font-medium  text-white hover:underline mx-2"
                >
                  View
                </Link>
                <Link
                  href="brands/edit-brand/1234"
                  class="font-medium  text-blue-500 hover:underline mx-2"
                >
                  Edit
                </Link>
                <Link
                  href="/dashboard/brands/edit-brand/1234"
                  class="font-medium  text-[red] hover:underline mx-2"
                >
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
index.layout = "dashboard";
export default index;
