'use client'
import React, { useState, useEffect } from "react";
import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  starColor?: string;
  clickable?: boolean; // New optional prop
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, starColor = "#ffc978", clickable = false }) => {
  const [ratingStars, setRating] = useState(rating);

  // Update local state when the prop changes
  useEffect(() => {
    setRating(rating);
  }, [rating]);

  const handleRating = (value: number) => {
    if (clickable) {
      setRating(value); // Update the state with the new rating if clickable is true
    }
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <div 
            key={index} 
            onClick={() => handleRating(starValue)} 
            className={clickable ? "cursor-pointer" : ""}
          >
            {ratingStars >= starValue ? (
              <Star fill={starColor} stroke={starColor} className="w-4"/>
            ) : ratingStars >= starValue - 0.5 ? (
              <StarHalf fill={starColor} stroke={starColor} className="w-4"/>
            ) : (
              <Star fill="none" stroke={starColor} className="w-4"/>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RatingStars;
