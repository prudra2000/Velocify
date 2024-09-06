import React, { useState } from 'react';
import { cva, cx, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sliderVariants = cva(
  "w-full h-2  rounded-lg appearance-none cursor-pointer",
  {
    variants: {
        variant: {
            default:
              "bg-dark-primary text-white hover:bg-dark-secondary outline outline-1 outline-dark-secondary",
            secondary: "bg-light-primary hover:bg-light-secondary text-black",
            warning:
              "bg-warning-primary text-black hover:bg-warning-secondary outline outline-1 outline-warning-secondary",
            success:
              "bg-success-primary text-black hover:bg-success-secondary outline outline-1 outline-success-secondary",
            info: "bg-info-primary text-white hover:bg-info-secondary outline outline-1 outline-info-secondary",
            error:
              "bg-error-primary text-white hover:bg-error-secondary outline outline-1 outline-error-secondary",
            custom: "",
          },
          type:{
            range: "input[type=\"range\"]::-moz-range-thumb",
          }
          
    },
  }
);


interface RangeSliderProps extends VariantProps<typeof sliderVariants> {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<RangeSliderProps> = ({ min, max, step = 1, value, onChange }) => {
  const [sliderValue, setSliderValue] = useState<number>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className={twMerge(sliderVariants({ variant: "default", type: "range" }))}
      />
      <div className="text-sm text-gray-600 mt-2">{sliderValue}</div>
    </div>
  );
};

export default Slider;
