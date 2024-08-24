"use client";
import { useState, useEffect } from "react";
import Carousel from "../components/carousel";
import { Badge } from "@/components/badge";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";
import { Switch } from "@/components/switch";
import { Checkbox } from "@/components/checkbox";
import RaitingsBreakdown from "@/components/raitingsbreakdown";
import RatingsBreakdown from "@/components/raitingsbreakdown";

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
    <main className="flex flex-col items-center justify-center">
      {testimonials.length > 0 && (
        <Carousel
          testimonials={testimonials}
          maxTestimonials={maxTestimonials}
          looped={true}
        />
      )}
      <Badge variant="default" className="mb-10">
        <p>Test</p>
      </Badge>
      <div className="flex gap-2 mb-10 px-10">
        <Input type="text" variant="rounded" placeholder="Name" />
        <Button className="rounded-full" >
          <p>Submit</p>
        </Button>
      </div>
      <Textarea placeholder="Name" />
      <Switch />
      <Checkbox accentColor="#95c604"/>
      <div className="my-10">
        <RatingsBreakdown accentColor="#95c604" oneStars={100} twoStars={230} threeStars={500} fourStars={1000} fiveStars={2500}/>
      </div>
    </main>
  );
}
