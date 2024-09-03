import React from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import { Input } from "@/components/input";
import TableProps from "@/components/Docs Components/tableProps";

export default function Home() {
  const inputTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const inputTableData = [
    { prop: "className", type: "string", default: "-" },
    { prop: "rounded", type: "string", default: "default" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "status", type: "string", default: "-" },
  ];
  const inputProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const inputData = [
    { prop: "rounded", type: "default, none, full" },
    { prop: "variant", type: "default, secondary" },
    {
      prop: "status",
      type: "success, error, warning, info",
    },
  ];
  const basicInput = `<Input placeholder="Default Input" variant="default" />`;
  const iconInput = `<Input
  variant="default"
  avatar={
    <Zap 
      className="w-5 h-5" 
    />
}>
  Icon Input
</Input>`;
  const disabledInput = `<Input variant="default" disabled />`;
  const fileInput = `<Input variant="default" type="file" />`;
  const roundedInput = `<Input placeholder="Rounded None" rounded="none" />
<Input placeholder="Rounded Default" rounded="default" />
<Input placeholder="Rounded Full" rounded="full" />`;
  const statusInput = `<Input 
  placeholder="Default Input"  
  status="success" 
/>
<Input 
  placeholder="Default Input" 
  status="error" 
/>
<Input 
  placeholder="Default Input" 
  status="warning" 
/>
<Input 
  placeholder="Default Input" 
  status="info" 
/>`;
  const terminal = `npm install velocity-ui@latest add input`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
      <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-3xl font-bold text-white ">Input</h2>
          <p className="text-paragraph-secondary">
            The Input component in our UI library offers a versatile and
            customizable input field, designed to seamlessly integrate with your
            application&apos;s UI. It supports various properties, such as variant,
            rounded, and status, allowing you to tailor its appearance and
            behavior to suit different use cases. Whether you need a simple text
            input, a file uploader, or an input with status indicators for
            validation, this component provides the flexibility to meet your
            design requirements while maintaining consistency across your
            project.
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Input Installation
          </h1>
          <TerminalShowcase command={terminal} />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">Basic Input</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={basicInput}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <Input placeholder="Default Input" variant="default" />
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={basicInput}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Input API Reference
          </h1>
          <Table data={inputTableData} columns={inputTableColumns} />
          <TableProps data={inputData} columns={inputProps} />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Disabled Input</h1>
          <p className="text-paragraph-secondary">
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={disabledInput}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Input
                    placeholder="Default Input"
                    variant="default"
                    disabled={true}
                  />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={disabledInput}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">File Input</h1>
          <p className="text-paragraph-secondary">
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={iconInput}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Input placeholder="Default Input" type="file" />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={iconInput}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Input - Rounded Edges</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={roundedInput}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-3 px-10">
                    <Input placeholder="Rounded None" rounded="none" />
                    <Input placeholder="Rounded Default" rounded="default" />
                    <Input placeholder="Rounded Full" rounded="full" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={roundedInput}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Input - Status Variants</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={statusInput}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-3 px-10">
                    <Input placeholder="Default Input" status="success" />
                    <Input placeholder="Default Input" status="error" />
                    <Input placeholder="Default Input" status="warning" />
                    <Input placeholder="Default Input" status="info" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={statusInput}
            />
          </div>
        </div>

        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Input - Style Variants</h1>
          <p className="text-paragraph-secondary">
          </p>
        </div>

        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Secondary Input</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={fileInput}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Input placeholder="Default Input" variant="secondary" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={fileInput}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
