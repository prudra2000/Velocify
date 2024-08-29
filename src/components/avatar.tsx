import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
  src?: string;
  alt: string;
  border?: boolean;
  className?: string;
  textColor?: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  border = false,
  className,
  textColor = "black",
  width = 24, // Default width
  height = 24, // Default height
}) => {
  const borderClasses = border ? "border-2 border-gray-600" : "";

  return (
    <div
      className={twMerge(`relative rounded-full aspect-square
                  ${borderClasses} ${className}`)}
      style={{ width, height }} // Set width and height
    >
      {src ? (
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="rounded-full object-cover" // Removed aspect-square for Image
        />
      ) : (
        <div className={`rounded-full flex items-center justify-center bg-white ${textColor} outline-3 outline-black dark:outline-white outline`} style={{ width, height }}>
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;