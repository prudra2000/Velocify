// components/CustomSlider.tsx
import { useState, useRef } from "react";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
}

const CustomSlider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 50,
}) => {
  const [value, setValue] = useState(initialValue);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const newValue = Math.round((newX / rect.width) * (max - min) + min);
      setValue(newValue);
    }
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  const thumbPosition = `${((value - min) / (max - min)) * 100}%`;

  return (
    <>
      <div className="w-full flex items-center">
        <div
          ref={sliderRef}
          className="relative w-full h-2 bg-gray-300 rounded-lg "
          onMouseDown={handleMouseDown}
        >
          <div
            className="absolute h-4 w-4 bg-blue-500 rounded-full cursor-pointer"
            style={{ left: thumbPosition, top: "50%", transform: "translate(-50%, -50%)" }}
          />
        </div>
      </div>
      <div className="ml-4 text-gray-700">{value}</div>
    </>
  );
};

export default CustomSlider;
