"use client";

import { Button } from "@/components/button";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import { ChevronDown, ChevronRight } from "lucide-react";

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
  const terminal4 = `npm install typescript`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center gap-x-10 h-full">
      <div className="flex flex-col gap-y-2 w-full md:w-3/4 mt-10">
        {" "}
        {/* Added width classes */}
        <div className="flex flex-col gap-y-2">
          <h2 className="text-3xl font-bold text-white ">Installation</h2>
          <p className="text-paragraph-secondary">
            Velocify UI is build on various dependencies. In order to use the
            components, you need to install the dependencies.
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Tailwind CSS
          </h1>
          <div className="flex flex-col gap-y-2 text-paragraph-primary">
            <p>
              Tailwind CSS is used for styling the components. You can check the
              documentation{" "}
              <span className="text-info-primary hover:underline">
                <a href="https://tailwindcss.com/docs/installation" target="_blank">
                  here
                </a>
              </span>
              . Follow the instructions and install the dependencies.
            </p>
            <TerminalShowcase command={tailwind} />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Class Variance Authority
          </h1>
          <div className="flex flex-col gap-y-2 text-paragraph-primary">
            <p>
              CVA is used for handling the variants of the components. You can
              check the documentation{" "}
              <span className="text-info-primary hover:underline">
                <a href="https://cva.style/docs" target="_blank">
                  here
                </a>
              </span>
              .
            </p>
            <TerminalShowcase command={cva} />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Tailwind Merge</h1>
          <div className="flex flex-col gap-y-2 text-paragraph-primary">
            <p>
              Tailwind Merge is used for merging the variants of the components.
              You can check the documentation{" "}
              <span className="text-info-primary hover:underline">
                <a
                  href="https://www.npmjs.com/package/tailwind-merge"
                  target="_blank"
                >
                  here
                </a>
              </span>
              .
            </p>
            <TerminalShowcase command={twMerge} />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Add Components</h1>
          <div className="flex flex-col gap-y-2 text-paragraph-primary">
            <p className="text-paragraph-secondary">
              You can simply add the components to your project by copying the
              code from the documentation and pasting it into your project. Check out all the components <a href="docs/components/all-components" className="text-info-primary hover:underline">here</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
