"use client";
import React, { useState, useEffect } from "react";
import { Star, StarHalf } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const ratingStarsVariants = cva("flex", {
  variants: {
    size: {
      default: "h-5 w-5",
      small: "h-4 w-4",
      large: "h-6 w-6",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    size: "default",
    disabled: false,
  },
});

interface RatingStarsProps extends VariantProps<typeof ratingStarsVariants> {
  rating: number;
  starColor?: string;
  clickable?: boolean;
  maxRating?: number;
  size?: "default" | "small" | "large";
  className?: string;
  onChange?: (rating: number) => void;
  disabled?: boolean;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  disabled = false,
  size = "default",
  maxRating = 5,
  starColor = "#ffc978",
  clickable = false,
  onChange,
}) => {
  const [ratingStars, setRating] = useState(rating);

  useEffect(() => {
    setRating(rating);
  }, [rating]);

  const handleRating = (value: number) => {
    if (clickable) {
      setRating(value);
      handleClick(value); 
    }
  };

  const handleClick = (newRating: number) => {
    if (clickable && onChange) {
      onChange(newRating); 
    }
  };

  return (
    <div
      className={`flex ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <div
            key={index}
            onClick={() => handleRating(starValue)}
            className={`${
              disabled
                ? "cursor-not-allowed"
                : clickable
                ? "cursor-pointer"
                : ""
            }`}
          >
            {ratingStars >= starValue ? (
              <Star
                fill={starColor}
                stroke={starColor}
                className={twMerge(ratingStarsVariants({ size }))}
              />
            ) : ratingStars >= starValue - 0.5 ? (
              <>
                <Star
                  fill="none"
                  stroke={starColor}
                  className={twMerge(ratingStarsVariants({ size }), "absolute")}
                />
                <StarHalf
                  fill={starColor}
                  stroke={starColor}
                  className={twMerge(ratingStarsVariants({ size }))}
                />
              </>
            ) : (
              <Star
                fill="none"
                stroke={starColor}
                className={twMerge(ratingStarsVariants({ size }))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RatingStars;
