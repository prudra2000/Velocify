"use client";
import React, { useState, useEffect } from "react";

import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";
import RatingStars from "./ratingstars";
import ProgressBar from "./progressbar";

interface RatingsBreakdownProps {
  progress: number;
  starColor?: string;
}

const RatingsBreakdown: React.FC<RatingsBreakdownProps> = ({ progress }) => {
  return (
    <div className="flex flex-col justify-center w-72 h-52 rounded-lg border p-4">
      <p className="">Customer Reviews</p>
      <div className="flex justify-center mb-5 gap-3 bg-gray-100 p-2 rounded-full ">
        <RatingStars rating={3} />
        <p className="text-gray-400">{3} out of 5</p>
      </div>
      <div className="flex flex-row items-center gap-2 ">
        <Star fill="#ffc978" stroke="#ffc978" />
        <ProgressBar progress={progress} /> d
      </div>
    </div>
  );
};

export default RatingsBreakdown;
