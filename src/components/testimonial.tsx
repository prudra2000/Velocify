"use client";
import * as React from "react";
import RatingStars from "@/components/ratingstars";
import Avatar from "@/components/avatar";

const Testimonial = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div ref={ref} className={``} style={style} {...props} />
));
Testimonial.displayName = "Testimonial";

const TestimonialHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { rating: number } & {
    starColor?: string;
  } & {
    name: string;
  } & { secondaryInfo?: string } & { avatarURL: string }
>(
  (
    { className, name, secondaryInfo, avatarURL, rating, starColor, ...props },
    ref
  ) => (
    <div ref={ref} className="flex flex-col  p-6 items-center ">
      <div className="flex flex-col items-center space-y-0.5">
        <Avatar src={avatarURL} alt="ASdksai" size="small" />
        <p className="font-semibold text-xs sm:text-sm md:text-base">{name}</p>
        {secondaryInfo && (
          <p className="text-paragraph-secondary text-xs sm:text-sm md:text-base">
            {secondaryInfo}
          </p>
        )}
      </div>
      <RatingStars rating={rating} starColor={starColor} />
      <div {...props} />
    </div>
  )
);
TestimonialHeader.displayName = "TestimonialHeader";

const TestimonialContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { testimony: string }
>(({ className, testimony, ...props }, ref) => {
  const hasQuotes = testimony.startsWith('"') && testimony.endsWith('"');

  return (
    <div
      ref={ref}
      className="justify-center text-center text-xs sm:text-sm md:text-base px-10 md:px-40 lg:px-60 "
      {...props}
    >
      <p>{hasQuotes ? testimony : `"${testimony}"`}</p>
    </div>
  );
});
TestimonialContent.displayName = "CardContent";

const TestimonialFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className="flex items-center p-6 pt-0" {...props}></div>
));
TestimonialFooter.displayName = "TestimonialFooter";

export {
  Testimonial,
  TestimonialHeader,
  TestimonialContent,
  TestimonialFooter,
};
