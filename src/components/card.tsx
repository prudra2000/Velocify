"use client";
import React, { useState } from "react";
import { Zap } from "lucide-react";

interface CardProps {
  className?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, title, description, icon }) => {
  return (
    <div
      className={`flex flex-row items-center  w-72  rounded-md bg-gray-900 text-white  outline outline-1 outline-gray-800  ${className}`}
    >
      <div className="flex flex-col gap-y-2 p-5 justify-start items-start">
        <div className="flex flex-col gap-y-3 justify-start items-start">
          <div className="flex flex-row gap-x-2 justify-center items-center ">
            <div className="flex flex-row justify-center items-center w-10 h-10 bg-[#F8CC38]/30 rounded-full border border-1 border-[#F8CC38]">
              {icon}
            </div>
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-400">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
