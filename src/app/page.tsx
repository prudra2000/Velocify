"use client";
import { Button } from "@/components/button";
import Card from "@/components/card";
import Slider from "@/components/slider";
import VelocifyUILogo from "@/components/velocifyUILogo";
import {
  ChevronRight,
  Zap,
  Settings2,
  PersonStanding,
  User,
  Github,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <head>
        <title>
          Velocify UI - Performance, Customizability, & Accessibility
        </title>
        <meta
          name="description"
          content="Velocify is a modern UI component library designed to accelerate web development. Copy and pasteable components built with responsive design principles."
        />
        <meta
          name="keywords"
          content="UI library, web development, performance, customizability, accessibility"
        />

        <meta
          property="og:title"
          content="Velocify UI - Performance, Customizability, & Accessibility"
        />
        <meta
          property="og:description"
          content="Velocify is a modern UI component library designed to accelerate web development. Copy and pasteable components built with responsive design principles."
        />
        <meta property="og:image" content="https://www.velocifyui.com/All.png" />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Velocify UI" />

        <meta property="og:url" content="https://www.velocifyui.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Velocify UI - Performance, Customizability, & Accessibility"
        />
        <meta
          property="og:description"
          content="Velocify is a modern UI component library designed to accelerate web development. Copy and pasteable components build with responsive design principles."
        />
        <meta property="og:image" content="" />

        <meta
          name="twitter:image"
          content="https://www.velocifyui.com/All.png"
        />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta property="twitter:domain" content="velocifyui.com" />
        <meta property="twitter:url" content="https://www.velocifyui.com/" />
        <meta
          name="twitter:title"
          content="Velocify UI - Performance, Customizability, & Accessibility"
        />
        <meta
          name="twitter:description"
          content="Velocify is a modern UI component library designed to accelerate web development. Copy and pasteable components build with responsive design principles."
        />
      </head>
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
            <p className="text-paragraph-secondary w-full md:w-1/2" >
              Velocify is a modern UI component library designed to accelerate
              web development. Copy and pasteable components build with
              responsive design principles.
            </p>
            <div className="flex gap-x-5">
                <Button className=" text-paragraph-primary gap-x-2" href="docs/installation">
                  Get Started
                <span>
                  <ChevronRight
                    className={`w-4 h-4 float-right stroke-[#F8CC38]`}
                  />
                </span>
               </Button>
                <Button className="text-paragraph-primary gap-x-2" href="/docs/components/all-components">
                  All Components
                <span>
                  <ChevronRight
                    className={`w-4 h-4 float-right stroke-[#F8CC38]`}
                  />
                </span>
              </Button>
            </div>
            <div className="flex gap-x-5">
                <Button className="text-paragraph-primary gap-x-2" href="https://github.com/prudra2000/Velocify" target="_blank">
                  View on Github
                <span>
                  <Github className={`w-4 h-4 float-right stroke-[#F8CC38]`} />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-10 px-10 md:w-3/4">
          <Card
            className="flex-1 md:h-72 md:w-96 lg:w-min"
            title="Performance"
            description="Built with performance as a priority, ensuring  fast load times, smooth interactions, and an optimized user experience."
            icon={
              <Zap className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
            }
          />
          <Card
            className="flex-1 md:h-72 md:w-96 lg:w-min"
            title="Customizability"
            description="Designed to be highly
              customizable, allowing developers to tailor the UI to their
              specific needs."
            icon={
              <Settings2 className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
            }
          />
          <Card
            className="flex-1 md:h-72 md:w-96 lg:w-min"
            title="Accessibility"
            description="Ensuring accessibility, these are crafted to be usable by everyone, including individuals with disabilities."
            icon={
              <PersonStanding className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
            }
          />
          
          {/* <Dialog
            isOpen={isDialogOpen}
            onClose={handleCloseDialog}
            title="Button Component"
          >
            <p className="text-paragraph-secondary text-sm">
              Step 1: Install the dependencies
            </p>
            <TerminalShowcase command={terminal} />
            <p className="text-paragraph-secondary text-sm">
              Step 2: Import the package
            </p>
            <ComponentCodeShowcase
              githubFileUrl="https://raw.githubusercontent.com/prudra2000/Velocify/main/src/components/card.tsx"
              githubLink="https://github.com/user/repo"
            />
          </Dialog>
          <Button onClick={handleOpenDialog}>Open Dialog</Button> */}
          
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-2xl font-medium bg-gradient-to-b from-[#F8CC38] to-[#F5B945] bg-clip-text text-transparent">
            Customize your theme
          </h2>
          <Slider step={1} />
        </div>
      </main>
    </>
  );
}
