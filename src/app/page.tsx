"use client";
import { Button } from "@/components/button";
import Card from "@/components/card";
import CodeShowcase from "@/components/CodeShowcase";
import ComponentCodeShowcase from "@/components/ComponentCodeShowcase";
import { Dialog } from "@/components/dialog";
import TerminalShowcase from "@/components/terminalShowcase";
import VelocifyUILogo from "@/components/velocifyUILogo";
import {
  ChevronRight,
  Zap,
  Settings2,
  PersonStanding,
  User,
  Github,
} from "lucide-react"; // Ensure this import is present
import Head from "next/head"; // Ensure this import is correct
import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  // useEffect(() => {
  //   document.title =
  //     "Velocify UI - Performance, Customizability, & Accessibility";
  // }, []);
  const basicSwitch = `import { Switch } from "@/components/switch";

const BasicSwitch = () => {
  return <Switch />;
};

export default BasicSwitch;`;
  const terminal = `npm install @velocify/ui
npm install twMerge
npm install class-variance-authority`;
  return (
    <>
      <head>
        <title>
          Velocify UI - Performance, Customizability, & Accessibility
        </title>
        <meta
          name="description"
          content="Velocify is a modern UI component library designed to accelerate web development. Built with performance as a priority, ensuring fast load times, smooth interactions, and an optimized user experience. Designed to be highly customizable, allowing developers to tailor the UI to their specific needs. Ensuring accessibility, these are crafted to be usable by everyone, including individuals with disabilities."
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
            <p className="text-paragraph-secondary">
              Velocify is a modern UI component library designed to accelerate
              web development.
            </p>
            <div className="flex gap-x-5">
              <a href="docs/installation">  
                <Button className=" text-paragraph-primary gap-x-2" >
                  Get Started
                <span>
                  <ChevronRight
                    className={`w-4 h-4 float-right stroke-[#F8CC38]`}
                  />
                </span>
               </Button>
              </a>
              <a href="docs/components/all-components">
                <Button className="text-paragraph-primary gap-x-2" >
                  All Components
                <span>
                  <ChevronRight
                    className={`w-4 h-4 float-right stroke-[#F8CC38]`}
                  />
                </span>
              </Button>
              </a>
            </div>
            <div className="flex gap-x-5">
              <a href="https://github.com/prudra2000/Velocify">
                <Button className="text-paragraph-primary gap-x-2" >
                  View on Github
                <span>
                  <Github className={`w-4 h-4 float-right stroke-[#F8CC38]`} />
                </span>
              </Button>
              </a>
            </div>
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
      </main>
    </>
  );
}
