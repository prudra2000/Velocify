import { useState, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sliderVariants = cva("", {
  variants: {
    sliderVariant: {
      default:
        "bg-dark-primary text-white outline outline-1 outline-dark-secondary",
      secondary:
        "bg-light-primary  text-black outline outline-1 outline-light-secondary",
      custom: "",
    },
    rounded: {
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
      full: "rounded-full",
    },
    position: {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
      left: "right-full mr-2",
      right: "left-full ml-2",
    },
    size: {
      default: "h-2",
      large: "h-3",
      small: "h-1",
    },
  },
  defaultVariants: {
    sliderVariant: "default",
    size: "default",
    rounded: "small",
    position: "top",
  },
});

const thumbVariants = cva("", {
  variants: {
    thumbVariant: {
      default: "bg-blue-500",
      secondary: "bg-red-500",
      custom: "bg-green-500",
    },
  },
});

interface SliderProps extends VariantProps<typeof sliderVariants> , VariantProps<typeof thumbVariants> {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  className?: string;
  sliderVariant?: "default" | "secondary" | "custom";
  rounded?: "small" | "medium" | "large" | "full";
  position?: "top" | "bottom" | "left" | "right";
  size?: "default" | "large" | "small";
  thumbVariant?: "default" | "secondary" | "custom";
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 50,
  sliderVariant = "default",
  rounded = "small",
  position = "top",
  size = "default",
  thumbVariant = "default",
}) => {
  const [value, setValue] = useState(initialValue);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const newValue = Math.round((newX / rect.width) * (max - min) + min);
      // {{ edit_1 }}
      const steppedValue = Math.round(newValue / step) * step; // Adjust to step
      setValue(steppedValue);
    }
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };
  const renderSteps = () => {
    if (step >= 10) {
      const stepsCount = Math.floor((max - min) / step);
      return Array.from({ length: stepsCount - 1 }, (_, index) => (
        <div
          key={index + 1} // Adjusted index to skip the first step
          className="absolute h-2 w-0.5 bg-gray-500"
          style={{
            left: `${((index + 1) / stepsCount) * 100}%`, // Adjusted for correct positioning
            top: "0",
            transform: "translateX(-50%)",
          }}
        />
      ));
    }
    return null;
  };

  const thumbPosition = `${((value - min) / (max - min)) * 100}%`;

  return (
    <>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div className="w-full flex items-center">
          <div
            ref={sliderRef}
            className={twMerge(
              "relative w-full h-2 bg-gray-300 rounded-lg ",
              sliderVariants({ sliderVariant, rounded, position, size })
            )}
            onMouseDown={handleMouseDown}
          >
            <div
              className="absolute h-2 bg-blue-500 rounded-lg" // New filled portion
              style={{
                width: `${((value - min) / (max - min)) * 100}%`, // Fill based on current value
                top: 0,
              }}
            />
            {renderSteps()}
            <div
              className={twMerge(
                "absolute h-4 w-4 rounded-full cursor-pointer",
                thumbVariants({ thumbVariant })
              )}
              style={{
                left: thumbPosition,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
        <div className="text-paragraph-primary">{value}</div>
      </div>
    </>
  );
};

export default Slider;
