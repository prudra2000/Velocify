import { Button } from "@/components/button";
import {
  Testimonial,
  TestimonialHeader,
  TestimonialContent,
  TestimonialFooter,
} from "@/components/testimonial";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "../components/emblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/carousel";

const test = `"Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."`;

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys()).map((index) => (
  <Testimonial key={index} className="p-5">
    <TestimonialHeader
      name={`Rudra Patel ${index + 1}`}
      secondaryInfo="Web Developer"
      rating={index + 1}
      starColor="#95c604"
      avatarURL="/avatar-svgrepo-com.svg"
    />
    <TestimonialContent testimony={test} />
  </Testimonial>
));

export default function Home() {
  const test = `"Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex gap-2"></div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselNext></CarouselNext>
        <CarouselPrevious></CarouselPrevious>
      </Carousel>
    </main>
  );
}
