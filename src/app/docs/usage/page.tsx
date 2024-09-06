"use client";

import { Button } from "@/components/button";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import Slider from "@/components/slider";
import Socials from "@/components/socials";
import TerminalShowcase from "@/components/terminalShowcase";
import { ChevronDown, ChevronRight, Github, Youtube, Zap } from "lucide-react";

export default function Home() {
  const code = `<Badge variant="default">Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="error">Error</Badge>`;
  const tailwind = `npm install -D tailwindcss
npx tailwindcss init`;
  const cva = `npm install class-variance-authority`;
  const twMerge = `npm install tailwind-merge`;
  const tsConfig = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paragraph: {
          primary: "#c2c8d1",
          secondary: "#9ca3af",
        },
        accent: {
          primary: "#F8CC38",
          secondary: "#F8CC38",
        },
        dark: {
          primary: "#111827",
          secondary: "#1F2937",
        },
        gray:{
          light: "#F3F4F6",
          dark: "#4B5563",
        },
        light: {
          primary: "#E5E7EB",
          secondary: "#D1D5DB",
        },
        warning: {
          primary: "#EAB308",
          secondary: "#FDE047",
          hover: "#FACC15",
        },
        success: {
          primary: "#22C55E",
          secondary: "#86EFAC",
          hover: "#4ADE80",
        },
        info: {
          primary: "#3B82F6",
          secondary: "#93C5FD",
          hover: "#60A5FA",
        },
        error: {
          primary: "#EF4444",
          secondary: "#FCA5A5",
          hover: "#F87171",
        },
        link: {
          primary: "#1D4ED8"
        },
        darkBG: "#030711",
        lightBG: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center gap-x-10 h-screen">
      <div className="flex flex-col gap-y-2 w-full md:w-3/4 mt-10">
        {" "}
        {/* Added width classes */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-3xl font-bold text-white ">Usage</h2>
          <p className="text-paragraph-secondary">
            Velocify UI allows you to use the components in your project by
            simply copying the code from the documentation and pasting it into
            your project. Below we have provided a guide on how you can quickly
            get started.
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Tailwind CSS</h1>
          <div className="flex flex-col gap-y-2 text-paragraph-primary">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full focus:outline-none"
                src="https://www.youtube.com/embed/RPa3_AD1_Vs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Socials
              title="Tailwind CSS"
              description="Tailwind CSS is a utility-first CSS framework that allows you to build custom designs with ease."
              socialLinks={[
                {
                  name: "GitHub",
                  url: "https://github.com",
                  icon: (
                    <Github className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
                  ),
                },
                {
                  name: "Youtube",
                  url: "https://github.com",
                  icon: (
                    <Youtube className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
                  ),
                },
              ]} // Example social link
            />
          </div>
        </div>
        <Slider min={0} max={100} value={50} onChange={(value) => console.log(value)} />
      </div>
    </main>
  );
}
