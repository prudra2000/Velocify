"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const progressBarVariants = cva(
  "relative flex items-center w-full h-4 bg-dark-primary text-white",
  {
    variants: {
      variant: {
        default: "bg-dark-primary text-white outline outline-1 outline-dark-secondary",
        secondary: "bg-light-primary hover:bg-light-secondary text-black outline outline-1 outline-light-secondary",
      },
      disabled: {
        true: "opacity-50",
        false: "",
      },
      size: {
        small: "h-2",
        default: "h-4",
        large: "h-6",
      },
      rounded: {
        full: "rounded-full",
        default: "rounded-md",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      disabled: false,
      rounded: "default",
    },
  }
);

export interface ProgressBarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof progressBarVariants> {
  progress: number;
  progressBarColor?: string;
  className?: string;
  displayPercentage?: boolean;
  disabled?: boolean;
  size?: "small" | "default" | "large";
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, progressBarColor = "#F8CC38", variant, className, displayPercentage = true, disabled = false, size = "default", rounded = "default" }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const progressBarWidth = clampedProgress < 5 ? "5%" : `${clampedProgress}%`;
  const minWidth = clampedProgress < 10 ? "10%" : progressBarWidth; 

  return (
    <div className={twMerge(progressBarVariants({ variant, disabled, size, rounded }), className)}>
      <div
        className={twMerge(progressBarVariants({ variant, size, rounded }))}
        style={{ width: minWidth, backgroundColor: progressBarColor }}
      ></div>
      {displayPercentage && size !== "small" && (
        <p className="absolute right-0 text-[0.5rem] mr-1.5 text-paragraph-secondary">
          {`${clampedProgress}%`}
        </p>
      )}
    </div>
  );
};

export default ProgressBar;