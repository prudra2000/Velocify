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
import {
  Navbar,
  NavBarLinks,
  NavBarLogo,
  NavBarLink,
} from "@/components/navbar";
import { User, SendHorizontal } from "lucide-react";
import Tooltip from "@/components/tooltip";
import { IconButton } from "@/components/iconButton";
import { Divider } from "@/components/divider";
import { ModeToggle } from "@/components/themeSetter";
import Avatar from "@/components/avatar";


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

  const accentColor = "#95c604";
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
  const longtext = "This is a tooltip!";
  return (
    <main className="flex flex-col  light:bg-light-background dark:bg-dark-background items-center justify-center gap-y-10">
      <Navbar
        logo={
          <NavBarLogo>
            <img src="/Logo.svg" alt="Logo" className="w-8 h-8" />{" "}
            {/* Adjust the width as needed */}
            Velocify
          </NavBarLogo>
        }
        links={
          <NavBarLinks>
            <NavBarLink>Home</NavBarLink>
            <NavBarLink>Home</NavBarLink>
            <NavBarLink>Home</NavBarLink>
          </NavBarLinks>
        }
      ></Navbar>
      {testimonials.length > 0 && (
        <Carousel
          testimonials={testimonials}
          maxTestimonials={maxTestimonials}
          looped={true}
          autoplay={false}
        />
      )}
      <ModeToggle />
      <Tooltip
        text={longtext}
        variant="dark"
        rounded="large"
        size="default"
        position="top"
      >
        <Badge variant="default" size="small" avatar={<User />}>
          Rudra Patel
        </Badge>
      </Tooltip>
      <IconButton variant="default" size="default">
        <SendHorizontal className="w-4 h-4" />
      </IconButton>
      <Avatar src="" alt="Rudra Patel" />
      <div className="flex flex-col gap-2 bg-gray-100">
        <div className="flex gap-2">
          <Input type="text" variant="default" placeholder="Name" />
          <Divider orientation="vertical" size="verticalMedium" />
          <Button
            className="rounded-full"
            variant="default"
            size="default"
            leftAvatar={<User className="w-5 h-5" />}
            alt="Rudra Patel"
          >
            <p>Submit</p>
          </Button>
        </div>
        <Divider orientation="horizontal" size="horizontalMedium" />

        <div className="">
          <Textarea placeholder="Name" />
        </div>
      </div>

      <Switch />
      <Checkbox
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)} // Updated to toggle the checkbox state
        accentColor={accentColor}
        label="Test"
      />
      <div className="">
        <RatingsBreakdown
          accentColor={accentColor}
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
