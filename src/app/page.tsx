"use client";
import { useState, useEffect } from "react";
import Carousel from "../components/carousel";
import { Badge } from "@/components/badge";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";
import { Switch } from "@/components/switch";
import { Checkbox } from "@/components/checkbox";
import { Select, SelectItem, SelectTrigger } from "@/components/select";
import RatingsBreakdown from "@/components/raitingsbreakdown";
import { Option } from "@/components/options"; // Updated import path
import {
  NavBar,
  NavBarLinks,
  NavBarLogo,
  NavBarLink,
} from "@/components/navbar";

interface Testimonials {
  author: string;
  testimony: string;
  rating: number;
  authorAvatar: string;
}

export default function Home() {
  const [checked, setChecked] = useState("indeterminate");
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const maxTestimonials = 10;
  const [isChecked, setIsChecked] = useState(false); // Added state for checkbox
  const [selectedValue, setSelectedValue] = useState<string>("option1");

  const options = [
    { value: "option1", label: "Option 1", id: "option1" },
    { value: "option2", label: "Option 2", id: "option2" },
    { value: "option3", label: "Option 3", id: "option3" },
  ];

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
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
    <main className="flex flex-col items-center justify-center gap-y-10">
      <NavBar>
        <NavBarLogo>Velocify</NavBarLogo>
        <NavBarLinks>
          <NavBarLink>Home</NavBarLink>
          <NavBarLink>Home</NavBarLink>
          <NavBarLink>Home</NavBarLink>
        </NavBarLinks>
      </NavBar>
      {testimonials.length > 0 && (
        <Carousel
          testimonials={testimonials}
          maxTestimonials={maxTestimonials}
          looped={true}
          autoplay={false}
        />
      )}
      <Badge variant="default" className="">
        Rudra Patel
      </Badge>
      <div className="flex gap-2">
        <Input type="text" variant="default" placeholder="Name" />
        <Button className="rounded-full">
          <p>Submit</p>
        </Button>
      </div>
      <div className="w-1/2">
        <Textarea placeholder="Name" />
      </div>
      <Switch />
      <Checkbox
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)} // Updated to toggle the checkbox state
      />
      <div className="">
        <RatingsBreakdown
          accentColor="#95c604"
          oneStars={100}
          twoStars={230}
          threeStars={500}
          fourStars={1000}
          fiveStars={2500}
        />
      </div>
      <div className="mb-28">
        <Select placeholder="Select an option">
          <SelectItem className="your-class-name" value="apple1">
            Apple1
          </SelectItem>
          <SelectItem className="your-class-name" value="apple2">
            Apple2
          </SelectItem>
          <SelectItem className="your-class-name" value="apple3">
            Apple3
          </SelectItem>
        </Select>
      </div>
    </main>
  );
}