"use client";
import React, { useState } from "react";
import Slider from "@/components/slider";
import { Divider } from "@/components/divider";

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <>
      <head>
        <title>Velocify UI - Playground</title>
        <meta name="description" content="Learn how to use Velocify UI" />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center gap-x-10 h-screen">
        <div className="flex flex-col gap-y-5 pt-10">
          <h2 className="text-2xl font-medium bg-gradient-to-b from-[#F8CC38] to-[#F5B945] bg-clip-text text-transparent">
            Customize your theme
          </h2>
          <Divider orientation="horizontal" />
          <Slider
            min={0}
            max={100}
            rounded="full"
            size="default"
            onChange={setValue}
          />
        </div>
        <div className="flex flex-row gap-x-2  bg-dark-primary p-2 rounded-lg outline outline-1 outline-dark-secondary">
          <p className="text-white text-sm">Value: {value}</p>
          <Divider orientation="vertical" />
          <p className="text-white text-sm">Value: {value}</p>
        </div>
      </main>
    </>
  );
}
