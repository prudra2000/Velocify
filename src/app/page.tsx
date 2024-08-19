"use client";
import { useState, useEffect } from "react";
import Carousel from "../components/carousel";


interface Testimonials {
  author: string;
  testimony: string;
  rating: number;
  authorAvatar: string;
}

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const maxTestimonials = 10;

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/sampleData.json");
      const data = await response.json();
      if (data.testimonials && data.testimonials.length > 0) {
        setTestimonials(data.testimonials);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex gap-2"></div>
      {testimonials.length > 0 && (
        <Carousel testimonials={testimonials} maxTestimonials={maxTestimonials} looped={true} />
      )}
    </main>
  );
}
