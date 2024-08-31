"use client";
import React from "react"; // Add this import
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import Avatar from "@/components/avatar";
import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/button";
import Checkbox from "@/components/checkbox";

export default function Home() {
  const buttonTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const buttonTableData = [
    { prop: "className", type: "string", default: "-" },
    { prop: "label", type: "string", default: "-" },
    { prop: "checked", type: "boolean", default: "false" },
    { prop: "onChange", type: "function", default: "-" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "color", type: "string", default: "default" },
    { prop: "size", type: "string", default: "default" },
    { prop: "rounded", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "icon", type: "React.ReactNode", default: "-" },
  ];
  const basicButton = `<Checkbox onChange={() => {}} />`;
  const disabledButton = `<Checkbox
  onChange={() => {}}
  disabled={true}
/>`;
  const sizeButton = `<Checkbox onChange={() => {}} size="small" />
<Checkbox onChange={() => {}} size="default" />
<Checkbox onChange={() => {}} size="large" />`;
  const roundedButton = `<Checkbox onChange={() => {}} rounded="none" />
<Checkbox onChange={() => {}} rounded="default" />
<Checkbox onChange={() => {}} rounded="full" />`;
  const checkboxVariants = `<Checkbox onChange={() => {}} color="default" />
<Checkbox onChange={() => {}} color="success" />
<Checkbox onChange={() => {}} color="warning" />
<Checkbox onChange={() => {}} color="error" />
<Checkbox onChange={() => {}} color="info" />`;
  const terminal = `npm install velocity-ui@latest add checkbox`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
      <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-3xl font-bold text-white ">Checkbox</h2>
          <p className="text-gray-400">
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Checkbox Installation
          </h1>
          <TerminalShowcase command={terminal} />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Checkbox Button
          </h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={basicButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <Checkbox onChange={() => {}} />
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={basicButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Checkbox API Reference
          </h1>
          <Table data={buttonTableData} columns={buttonTableColumns} />{" "}
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Disabled Button
          </h1>
          <p className="text-gray-400">
            The Button component has a prop called disabled which allows you to
            disable the button. The disabled button is compatable with all
            styles, sizes, and variants.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={disabledButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Checkbox onChange={() => {}} disabled={true} />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={disabledButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Checkbox Size</h1>
          <p className="text-gray-400">
            The Checkbox component has a prop called size which allows you to
            change the size of the checkbox.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={sizeButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Checkbox onChange={() => {}} size="small" />
                  <Checkbox onChange={() => {}} size="default" />
                  <Checkbox onChange={() => {}} size="large" />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={sizeButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Rounded Checkbox
          </h1>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={roundedButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Checkbox onChange={() => {}} rounded="none" />
                  <Checkbox onChange={() => {}} rounded="default" />
                  <Checkbox onChange={() => {}} rounded="full" />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={roundedButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Icon Checkbox</h1>

          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={sizeButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Checkbox
                    onChange={() => {}}
                    icon={<ThumbsUp className="w-3 h-3 fill-white" />}
                  />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={sizeButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Colored Checkbox
          </h1>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={checkboxVariants}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Checkbox onChange={() => {}} color="default" />
                  <Checkbox onChange={() => {}} color="success" />
                  <Checkbox onChange={() => {}} color="warning" />
                  <Checkbox onChange={() => {}} color="error" />
                  <Checkbox onChange={() => {}} color="info" />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={checkboxVariants}
          />
        </div>
      </div>
    </main>
  );
}
