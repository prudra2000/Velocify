"use client";
import React, { useState } from "react"; // Add this import
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import { ThumbsUp } from "lucide-react";
import Checkbox from "@/components/checkbox";
import TableProps from "@/components/Docs Components/tableProps";
import { CodeDialog } from "@/components/codeDialog";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";

export default function Home() {
  const buttonTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const buttonTableData = [
    { prop: "className", type: "string", default: "-" },
    { prop: "label", type: "string", default: "-" },
    { prop: "checked", type: "boolean", default: "false" },
    { prop: "onChange", type: "function", default: "-" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "size", type: "string", default: "default" },
    { prop: "rounded", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "icon", type: "React.ReactNode", default: "-" },
  ];
  const checkboxProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const checkboxData = [
    { prop: "rounded", type: "default, small, large" },
    { prop: "size", type: "default, small, large" },
    {
      prop: "variant",
      type: "default, secondary, warning, success, info, error",
    },
  ];
  const basicCheckbox = `<Checkbox onChange={() => {}} />`;
  const disabledCheckbox = `<Checkbox
  onChange={() => {}}
  disabled={true}
/>`;
  const labelCheckbox = `<Checkbox
  onChange={() => {}}
  label="Checkbox with Label"
/>`;
  const sizeCheckbox = `<Checkbox onChange={() => {}} size="small" />
<Checkbox onChange={() => {}} size="default" />
<Checkbox onChange={() => {}} size="large" />`;
  const roundedCheckbox = `<Checkbox onChange={() => {}} rounded="none" />
<Checkbox onChange={() => {}} rounded="default" />
<Checkbox onChange={() => {}} rounded="full" />`;
  const iconCheckbox = `<Checkbox
  onChange={() => {}}
  icon={<ThumbsUp className="w-3 h-3 fill-white" />}
/>`;
  const checkboxVariants = `<Checkbox onChange={() => {}} variant="default" />
<Checkbox onChange={() => {}} variant="success" />
<Checkbox onChange={() => {}} variant="warning" />
<Checkbox onChange={() => {}} variant="error" />
<Checkbox onChange={() => {}} variant="info" />`;
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
        <title>Velocify UI - Checkbox</title>
        <meta
          name="description"
          content="Check out the Checkbox component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Checkbox</h2>
            <p className="text-paragraph-secondary">
              The Checkbox component is a versatile UI element designed to
              provide a customizable checkbox experience. It offers a range of
              options including size, variant, and shape variations, allowing
              you to tailor it to your application&apos;s needs. The component
              supports essential props like label, checked, onChange, and
              disabled, ensuring smooth integration and functionality within
              your project. Additionally, the Checkbox can incorporate icons and
              is fully adaptable to different styles and states, making it a
              flexible choice for any form or selection-based interface.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Checkbox Installation
            </h1>
            <CopyCodeDisplay handleOpenDialog={handleOpenDialog} />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Checkbox"
              fileName="checkbox"
              className="bg-dark-primary/80"
            />{" "}
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Checkbox Checkbox
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicCheckbox}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <Checkbox onChange={() => {}} />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicCheckbox}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Checkbox API Reference
            </h1>
            <Table data={buttonTableData} columns={buttonTableColumns} />{" "}
            <TableProps data={checkboxData} columns={checkboxProps} />{" "}
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Checkbox
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledCheckbox}
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
              code={disabledCheckbox}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Checkbox with Label
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={labelCheckbox}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Checkbox onChange={() => {}} label="Checkbox with Label" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={labelCheckbox}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Checkbox - Sizes
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeCheckbox}
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
              code={sizeCheckbox}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Checkbox - Rounded Edges
            </h1>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={roundedCheckbox}
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
              code={roundedCheckbox}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Checkbox - Icon Variant
            </h1>

            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={iconCheckbox}
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
              code={iconCheckbox}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Checkbox - Color Variants
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
                    <Checkbox onChange={() => {}} variant="default" />
                    <Checkbox onChange={() => {}} variant="success" />
                    <Checkbox onChange={() => {}} variant="warning" />
                    <Checkbox onChange={() => {}} variant="error" />
                    <Checkbox onChange={() => {}} variant="info" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={checkboxVariants}
            />
          </div>
        </div>
      </main>
    </>
  );
}
