"use client";
import React, { useState } from "react";

interface UIDisplayCardProps {
  className?: string;
  title: string;
  component: React.ReactNode;
}

const UIDisplayCard: React.FC<UIDisplayCardProps> = ({
  className,
  title,
  component,
}) => {
  return (
    <div
      className={`flex flex-col h-full w-72 rounded-md text-white outline outline-1 outline-gray-800 hover:outline-2 hover:outline-[#F8CC38]  hover:scale-105 transition-all duration-300 ${className}`}
    >
      <div className="flex justify-center items-center p-5 md:p-10 overflow-y-auto flex-grow min-h-40">
        {component}
      </div>
      <div className="flex flex-row py-3 justify-center items-end bg-gray-900"> {/* Added mt-auto */}
        <h1 className="text-base font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default UIDisplayCard;
