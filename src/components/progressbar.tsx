"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import * as React from "react";

const progressBarVariants = cva(
  "relative flex items-center w-full rounded-full h-4 bg-dark-primary text-white",
  {
    variants: {
      variant: {
        default: "bg-dark-primary text-white outline outline-1 outline-dark-secondary",
        secondary: "bg-light-primary hover:bg-light-secondary text-black",
        warning:
          "bg-warning-primary text-black hover:bg-warning-secondary outline outline-1 outline-warning-secondary",
        success:
          "bg-success-primary text-black hover:bg-success-secondary outline outline-1 outline-success-secondary",
        info: "bg-info-primary text-white hover:bg-info-secondary outline outline-1 outline-info-secondary",
        error:
          "bg-error-primary text-white hover:bg-error-secondary outline outline-1 outline-error-secondary",
        link: "text-link-primary underline-offset-4 hover:underline",
        custom: "",
      },
    },
    defaultVariants: {
      variant: "default",
      
    },
  }
);

export interface ProgressBarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof progressBarVariants> {
  progress: number;
  progressBarColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, progressBarColor = "#ffc978", variant }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const progressBarWidth = clampedProgress < 5 ? "5%" : `${clampedProgress}%`;
  const minWidth = clampedProgress < 10 ? "10%" : progressBarWidth; 

  return (
    <div className={twMerge(progressBarVariants({ variant }))}>
      <div
        className="h-4 rounded-full"
        style={{ width: minWidth, backgroundColor: progressBarColor }}
      ></div>
      <p className="absolute right-0 text-[0.5rem] mr-1.5 text-paragraph-secondary">
        {`${clampedProgress}%`}
      </p>
    </div>
  );
};

export default ProgressBar;