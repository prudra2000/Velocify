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
    size: {
      default: "h-2",
      large: "h-3",
      small: "h-1",
    },
  },
  defaultVariants: {
    sliderVariant: "default",
    size: "default",
    rounded: "full",
  },
});

const thumbVariants = cva("", {
  variants: {
    thumbVariant: {
      default: "bg-blue-500",
      secondary: "bg-dark-secondary",
      custom: "",
    },
    thumbSize: {
      default: "h-4 w-4",
      large: "h-5 w-5",
      small: "h-3 w-3",
    },
  },
});

const stepVariants = cva("", {
  variants: {
    stepVariant: {
      default: "bg-dark-secondary/50",
      secondary: "bg-light-secondary/70",
      custom: "bg-green-500",
    },
    stepSize: {
      default: "h-2",
      large: "h-3",
      small: "h-1",
    },
    stepRound: {
      default: "rounded-none",
      small: "rounded-sm",
      large: "rounded-lg",
    },
  },
  defaultVariants: {
    stepVariant: "default",
    stepSize: "default",
    stepRound: "default",
  },
});

interface SliderProps
  extends VariantProps<typeof sliderVariants>,
    VariantProps<typeof thumbVariants>,
    VariantProps<typeof stepVariants> {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  stepMark?: boolean;
  className?: string;
  sliderVariant?: "default" | "secondary" | "custom";
  rounded?: "small" | "medium" | "large" | "full";
  size?: "default" | "large" | "small";
  thumbVariant?: "default" | "secondary" | "custom";
  thumbSize?: "default" | "large" | "small";
  stepVariant?: "default" | "secondary" | "custom";
  stepSize?: "default" | "small";
  stepRound?: "default" | "small" | "large";
  disabled?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 0,
  stepMark = true,
  onChange,
  sliderVariant = "default",
  rounded = "full",
  size = "default",
  thumbVariant = "default",
  thumbSize = size,
  stepVariant = sliderVariant,
  stepSize = size,
  stepRound = "default",
  disabled = false,
}) => {
  const [value, setValue] = useState(initialValue);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent) => {
    if (sliderRef.current && !disabled) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const newValue = Math.round((newX / rect.width) * (max - min) + min);
      const steppedValue = Math.round(newValue / step) * step;
      setValue(steppedValue);
      if (onChange) onChange(steppedValue);
    }
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (sliderRef.current && !disabled) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newX = Math.min(Math.max(e.touches[0].clientX - rect.left, 0), rect.width);
      const newValue = Math.round((newX / rect.width) * (max - min) + min);
      const steppedValue = Math.round(newValue / step) * step;
      setValue(steppedValue);
      if (onChange) onChange(steppedValue);
    }
  };

  const handleTouchStart = () => {
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", () => {
      document.removeEventListener("touchmove", handleTouchMove);
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (sliderRef.current && !disabled) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const newValue = Math.round((newX / rect.width) * (max - min) + min);
      const steppedValue = Math.round(newValue / step) * step;
      setValue(steppedValue);
      if (onChange) onChange(steppedValue);
    }
  };

  const renderSteps = () => {
    if (step >= 5) {
      const stepsCount = Math.floor((max - min) / step);
      return Array.from({ length: stepsCount - 1 }, (_, index) => (
        <div
          key={index + 1}
          className={twMerge(
            "absolute w-0.5 bg-gray-500 ",
            stepVariants({ stepVariant, stepSize, stepRound })
          )}
          style={{
            left: `${((index + 1) / stepsCount) * 100}%`,
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
              sliderVariants({ sliderVariant, rounded, size })
            )}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onClick={handleClick}
          >
            <div
              className={twMerge(
                "absolute rounded-lg " +
                  (size === "default"
                    ? "h-2"
                    : size === "small"
                    ? "h-1"
                    : "h-3"),
                thumbVariants({ thumbVariant })
              )}
              style={{
                width: `${((value - min) / (max - min)) * 100}%`,
                top: 0,
              }}
            />
            {stepMark && renderSteps()}
            <div
              className={twMerge(
                "absolute rounded-full cursor-pointer",
                thumbVariants({ thumbVariant, thumbSize })
              )}
              style={{
                left: thumbPosition,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
