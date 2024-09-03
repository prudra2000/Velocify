"use client";
import React, { useState } from "react";

interface TableProps {
  className?: string;
  columns: Array<{ col1: string; col2: string }>;
  data: Array<{ prop: string; type: string;}>; // Define the structure of your data
}

const TableProps: React.FC<TableProps> = ({ className, data, columns }) => {
  return (
    <div className="border border-1 border-white/20 rounded-lg overflow-hidden text-white">
      <div className="overflow-x-auto">
        {" "}
        {/* Added this div for horizontal scrolling */}
        <table className="min-w-full divide-y divide-white/20">
          <thead className="bg-main-100">
            <tr className="text-start text-xs font-medium text-white">
              <th scope="col" className="text-start px-6 py-2 bg-[#1e293b]">
                <h2 className="text-md font-semibold text-white ">
                  {columns[0].col1}
                </h2>
              </th>
              <th scope="col" className=" text-start px-6 py-2 bg-[#1e293b]">
                <h2 className="text-md font-semibold text-white ">
                  {columns[0].col2}
                </h2>
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
                  <div className="flex flex-row space-x-2">
                    {item.type.split(",").map((type, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-row w-max px-3 py-1 justify-start items-end rounded-lg text-sm ${
                          idx === 0
                            ? "bg-white/10 text-paragraph-primary"
                            : "bg-white/10 text-paragraph-secondary"
                        }`}
                      >
                        {" "}
                        {/* Different styles for the first element */}
                        <p className="text-xs">{type.trim()}</p>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProps;
