"use client";
import { Button } from "@/components/button";
import Card from "@/components/card";
import VelocifyUILogo from "@/components/velocifyUILogo";
import {
  ChevronRight,
  Zap,
  Settings2,
  PersonStanding,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react"; // Ensure this import is present
import Head from "next/head";
export default function Home() {
  useEffect(() => {
    document.title =
      "Velocify UI - Performance, Customizability, & Accessibility";
  }, []);
  return (
    <>
      <Head>  // Changed from <head> to <Head>
        <title>
          Velocify UI - Performance, Customizability, & Accessibility
        </title>
        <meta
          name="description"
          content="Velocify is a modern UI component library designed to accelerate web development."
        />
        <meta
          name="keywords"
          content="UI, components, web development, performance, customizability, accessibility"
        />
      </Head>  // Changed from </head> to </Head>
      <main className="bg-[#030711] flex flex-col items-center gap-x-10 z-10">
        <div className="flex flex-col gap-y-2 h-screen w-full px-10 md:w-3/4 justify-center items-center ">
          <div className="flex flex-col gap-y-3 justify-center items-center text-center">
            <div className="flex flex-col gap-x-1 mb-20 justify-center items-center">
              <VelocifyUILogo className="w-36 h-36 bg-transparent border-0 " />
              <VelocifyUILogo className="absolute w-96 h-96 bg-transparent border-0 blur-3xl opacity-50" />
              <h1 className="text-5xl font-bold bg-gradient-to-b from-[#F8CC38] to-[#F5B945] bg-clip-text text-transparent">
                Velocify UI
              </h1>
            </div>
            <h2 className="text-2xl font-medium bg-gradient-to-b from-[#F8CC38] to-[#F5B945] bg-clip-text text-transparent">
              Performance, Customizability, & Accessibility
            </h2>
            <p className="text-paragraph-secondary">
              Velocify is a modern UI component library designed to accelerate
              web development.
            </p>
            <Button className="text-[#F8CC38]">
              Get Started
              <span>
                <ChevronRight
                  className={`w-4 h-4 float-right stroke-[#F8CC38]`}
                />
              </span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mb-10">
          <Card
            className="flex-1"
            title="Performance"
            description="Built with performance as a priority, ensuring  fast load times, smooth interactions, and an optimized user experience."
            icon={
              <Zap className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
            }
          />
          <Card
            className="flex-1"
            title="Customizability"
            description="Designed to be highly
              customizable, allowing developers to tailor the UI to their
              specific needs."
            icon={
              <Settings2 className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
            }
          />
          <Card
            className="flex-1"
            title="Accessibility"
            description="Ensuring accessibility, these are crafted to be usable by everyone, including individuals with disabilities."
            icon={
              <PersonStanding className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
            }
          />
        </div>
      </main>
    </>
  );
}
