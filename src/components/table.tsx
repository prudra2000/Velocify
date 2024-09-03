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
      <div className="overflow-x-auto">
        {" "}
        {/* Added this div for horizontal scrolling */}
        <table className="min-w-full divide-y divide-white/20">
          <thead className="">
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
              <th scope="col" className=" text-start px-6 py-2 bg-[#1e293b]">
                <h2 className="text-md font-semibold text-white ">
                  {columns[0].col3}
                </h2>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/20">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-3 py-2">
                  <div className="flex flex-row w-min px-3 py-1 justify-start items-end rounded-lg text-sm bg-white/10 text-[#F8CC38]">
                    <p className="text-xs">
                      {item.prop.split("*").map((part, i) => (
                        <>
                          {part}
                          {i < item.prop.split("*").length - 1 && (
                            <span className="text-error-primary text-sm">
                              *
                            </span>
                          )}
                        </>
                      ))}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <div className="flex flex-row w-min px-3 py-1 justify-start items-end rounded-lg text-sm bg-white/10 text-paragraph-secondary">
                    <p className="text-xs">
                      {item.type.split("*").map((part, i) => (
                        <>
                          {part}
                          {i < item.type.split("*").length - 1 && (
                            <span className="text-error-primary">*</span>
                          )}
                        </>
                      ))}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-2">
                  <p className="text-xs text-paragraph-secondary">
                    {item.default.split("*").map((part, i) => (
                      <>
                        {part}
                        {i < item.default.split("*").length - 1 && (
                          <span className="text-error-primary">*</span>
                        )}
                      </>
                    ))}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-[#1e293b]">
            <tr>
              <td colSpan={3} className="px-3 py-2">
                <p className="text-xs text-paragraph-secondary">
                  <span className="text-error-primary">*</span> Required
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
