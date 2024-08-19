"use client";
import {
  Testimonial,
  TestimonialHeader,
  TestimonialContent,
} from "@/components/testimonial";
import EmblaCarousel from "../components/emblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

interface Testimonials {
  author: string;
  testimony: string;
  rating: number;
  authorAvatar: string;
}

interface CarouselProps {
  testimonials: Testimonials[];
  maxTestimonials: number;
  looped?: boolean;
}

const Carousel = ({ testimonials, maxTestimonials, looped }: CarouselProps) => {
  const options: EmblaOptionsType = { loop: looped };
  const SLIDES = testimonials
    .slice(0, maxTestimonials)
    .map((testimonialData, index) => (
      <Testimonial key={index} className="p-5">
        <TestimonialHeader
          name={testimonialData.author}
          secondaryInfo="Web Developer"
          rating={testimonialData.rating}
          starColor="#95c604"
          avatarURL={testimonialData.authorAvatar}
        />
        <TestimonialContent testimony={testimonialData.testimony} />
      </Testimonial>
    ));

  return <EmblaCarousel slides={SLIDES} options={options} />;
};

export default Carousel;
