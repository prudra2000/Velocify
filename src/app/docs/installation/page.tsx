"use client";

import TerminalShowcase from "@/components/terminalShowcase";

export default function Home() {
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
    <>
      <head>
        <title>Velocify UI - Installation & Setup</title>
        <meta
          name="description"
          content="Learn how to install and setup Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center gap-x-10 h-full">
        <div className="flex flex-col gap-y-2 w-full md:w-3/4 mt-10">
          {" "}
          {/* Added width classes */}
          <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl font-bold text-white ">
              Installation & Setup
            </h2>
            <p className="text-paragraph-secondary">
              Velocify UI is build on various dependencies. In order to use the
              components, you need to install the dependencies.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">Tailwind CSS</h1>
            <div className="flex flex-col gap-y-2 text-paragraph-primary">
              <p>
                Tailwind CSS is used for styling the components. You can check
                the documentation{" "}
                <span className="text-info-primary hover:underline">
                  <a
                    href="https://tailwindcss.com/docs/installation"
                    target="_blank"
                  >
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
            <h1 className="text-2xl font-semibold text-white ">
              Tailwind Merge
            </h1>
            <div className="flex flex-col gap-y-2 text-paragraph-primary">
              <p>
                Tailwind Merge is used for merging the variants of the
                components. You can check the documentation{" "}
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
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Tailwind CSS Configuration
            </h1>
            <div className="flex flex-col gap-y-2 text-paragraph-primary">
              <p>
                In order to use the components, you need to configure the
                tailwind.config.ts file. You can check the documentation{" "}
                <span className="text-info-primary hover:underline">
                  <a
                    href="https://tailwindcss.com/docs/configuration"
                    target="_blank"
                  >
                    here
                  </a>
                </span>
                . For out set up, you need to add the following to your
                tailwind.config.ts file:
              </p>
              <TerminalShowcase command={tsConfig} />
              <p className="text-paragraph-secondary font-semibold">
                This is where you can add your own custom colors and extend the
                theme.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Add Components
            </h1>
            <div className="flex flex-col gap-y-2 text-paragraph-primary">
              <p className="text-paragraph-secondary">
                You can simply add the components to your project by copying the
                code from the documentation and pasting it into your project.
                Check out all the components{" "}
                <a
                  href="docs/components/all-components"
                  className="text-info-primary hover:underline"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
