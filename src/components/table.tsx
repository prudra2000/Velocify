"use client";
import React, { useState } from "react";

interface TableProps {
  className?: string;
  columns: Array<{ col1: string; col2: string; col3: string }>;
  data: Array<{ prop: string; type: string; default: string }>; // Define the structure of your data
}

const Table: React.FC<TableProps> = ({ className, data, columns }) => {
  return (
    <div className="border border-1 border-white/20 rounded-lg overflow-hidden text-white">
      <div className="overflow-x-auto"> {/* Added this div for horizontal scrolling */}
        <table className="min-w-full divide-y divide-white/20">
          <thead className="bg-main-100">
            <tr className="text-start text-xs font-medium text-white">
              <th scope="col" className="text-start px-6 py-2 bg-[#1e293b]">
                <h2 className="text-md font-semibold text-white ">{columns[0].col1}</h2>
              </th>
              <th scope="col" className=" text-start px-6 py-2 bg-[#1e293b]">
                <h2 className="text-md font-semibold text-white ">{columns[0].col2}</h2>
              </th>
              <th scope="col" className=" text-start px-6 py-2 bg-[#1e293b]">
                <h2 className="text-md font-semibold text-white ">{columns[0].col3}</h2>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/20">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-3 py-2">
                  <div className="flex flex-row w-min px-3 py-1 justify-start items-end rounded-lg text-sm bg-white/10 text-[#F8CC38]">
                    <p className="text-xs">{item.prop}</p>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <div className="flex flex-row w-min px-3 py-1 justify-start items-end rounded-lg text-sm bg-white/10 text-gray-400">
                    <p className="text-xs">{item.type}</p>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-xs text-gray-400">{item.default}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
