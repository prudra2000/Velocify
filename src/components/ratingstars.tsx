'use client'
import React, { useState, useEffect } from "react";

import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";

interface RatingStarsProps {
    rating: number;
    starColor?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, starColor = "#ffc978" }) => {
  const [ratingStars, setRating] = useState(rating);

  // Update local state when the prop changes
  useEffect(() => {
    setRating(rating);
  }, [rating]);

  const handleRating = (value: number) => {
    setRating(value); // Update the state with the new rating
  };


  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <div key={index} onClick={() => handleRating(starValue)} className="cursor-pointer">
            {ratingStars >= starValue ? (
                <Star fill={starColor} stroke=""/>
            ) : ratingStars >= starValue - 0.5 ? (
                <StarHalf fill={starColor} stroke=""/>
            ) : (
                <Star fill="none" stroke=""/>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RatingStars;