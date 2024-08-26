import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
  src?: string;
  alt: string;
  border?: boolean;
  className?: string;
  textColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  border = false,
  className,
  textColor = "black",
}) => {
  const borderClasses = border ? "border-2 border-gray-600" : "";

  return (
    <div
      className={twMerge(`relative rounded-full overflow-hidden
                  ${borderClasses} ${className}`)}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 3rem, (max-width: 768px) 4rem, (max-width: 1024px) 5rem, (max-width: 1280px) 6rem, 8rem"
          className="rounded-full object-cover"
        />
      ) : (
        <div className={`rounded-full flex items-center justify-center bg-white w-6 h-6 text-${textColor}`}>
          {alt.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
