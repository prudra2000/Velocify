"use client";
import React, { useState, useEffect } from "react";

import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";
import RatingStars from "./ratingstars";
import ProgressBar from "./progressbar";

interface RatingsBreakdownProps {
  accentColor?: string;
  oneStars: number;
  twoStars: number;
  threeStars: number;
  fourStars: number;
  fiveStars: number;

  starColor?: string;
}

const RatingsBreakdown: React.FC<RatingsBreakdownProps> = ({
  accentColor,
  oneStars,
  twoStars,
  threeStars,
  fourStars,
  fiveStars,
}) => {
  const totalRatings = oneStars + twoStars + threeStars + fourStars + fiveStars;
  const weightedSum =
    oneStars * 1 +
    twoStars * 2 +
    threeStars * 3 +
    fourStars * 4 +
    fiveStars * 5;

  // Calculate the average rating
  const average = totalRatings ? (weightedSum / totalRatings).toFixed(1) : 0;

  const calculatePercentage = (stars: number) =>
    totalRatings ? ((stars / totalRatings) * 100).toFixed(0) : 0;

  return (
    <div className="flex flex-col w-full h-full rounded-lg border p-4 gap-2 text-xs sm:text-sm md:text-base ">
      <div className="flex flex-col items-center mb-3 rounded-full ">
        <p className=" px-4 pb-1">Customer Reviews</p>
        <div className="flex flex-row justify-center items-center gap-2 px-3 py-1 rounded-full bg-gray-100">
          <RatingStars
            rating={Number(average)}
            clickable={false}
            starColor={accentColor}
          />
          <p className="text-gray-400 ">{average} out of 5</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex flex-col items-center gap-2 w-min">
          <p className="text-xs whitespace-nowrap">5 Stars</p>
          <p className="text-xs whitespace-nowrap">4 Stars</p>
          <p className="text-xs whitespace-nowrap">3 Stars</p>
          <p className="text-xs whitespace-nowrap">2 Stars</p>
          <p className="text-xs whitespace-nowrap">1 Stars</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          {[fiveStars, fourStars, threeStars, twoStars, oneStars].map(
            (stars, index) => (
              <ProgressBar
                key={index}
                progress={Number(calculatePercentage(stars))}
                progressBarColor={accentColor}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingsBreakdown;