import React from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import { Textarea } from "@/components/textarea";
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

  const textareaProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const textareaData = [
    { prop: "rounded", type: "default, none" },
    {
      prop: "variant",
      type: "default, secondary",
    },
    { prop: "status", type: "success, error, warning, info" },
  ];
  const basicTextarea = `<Textarea placeholder="Default Textarea" variant="default" />`;
  const disabledTextarea = `<Textarea variant="default" disabled />`;
  const roundedTextarea = `<Textarea placeholder="Rounded None" rounded="none" />
<Textarea placeholder="Rounded Default" rounded="default" />`;
  const statusTextarea = `<Textarea 
  placeholder="Default Textarea"  
  status="success" 
/>
<Textarea 
  placeholder="Default Textarea" 
  status="error" 
/>
<Textarea 
  placeholder="Default Textarea" 
  status="warning" 
/>
<Textarea 
  placeholder="Default Textarea" 
  status="info" 
/>`;
  const secondaryTextarea = `<Textarea placeholder="Secondary Textarea" variant="secondary" />`;
  const terminal = `npm install velocity-ui@latest add input`;
  return (
    <>
      <head>
        <title>Velocify UI - Textarea</title>
        <meta
          name="description"
          content="Check out the Textarea component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Textarea</h2>
            <p className="text-paragraph-secondary">
              The Textarea component in the Velocify UI library provides a
              flexible and customizable input field for multi-line text. It
              supports various styling options, including rounded corners and
              different variants like default or secondary. Additionally, the
              component offers status indicators such as success, error,
              warning, and info, allowing you to provide contextual feedback. It
              can also be easily disabled when needed. The Textarea is perfect
              for capturing user input in forms and other interactive elements,
              ensuring adaptability to different design needs and use cases.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Textarea Installation
            </h1>
            <TerminalShowcase command={terminal} />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Basic Textarea
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicTextarea}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 w-full justify-center items-center">
                    <Textarea
                      placeholder="Default Textarea"
                      variant="default"
                    />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicTextarea}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Textarea API Reference
            </h1>
            <Table data={inputTableData} columns={inputTableColumns} />
            <TableProps data={textareaData} columns={textareaProps} />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Textarea
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledTextarea}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 w-full justify-center items-center">
                  <Textarea
                    placeholder="Default Textarea"
                    variant="default"
                    disabled={true}
                  />
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledTextarea}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-xl font-semibold text-white ">
              Textarea - Rounded
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={roundedTextarea}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col w-full gap-y-5 justify-center items-center">
                    <Textarea placeholder="Rounded None" rounded="none" />
                    <Textarea placeholder="Rounded Default" rounded="default" />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={roundedTextarea}
              />
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Textarea - Status Types
            </h1>
            <p className="text-paragraph-secondary"></p>
          </div>

          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-xl font-semibold text-white ">
              Success Status
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={statusTextarea}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex w-full flex-col gap-y-5 justify-center items-center">
                    <Textarea placeholder="Default Textarea" status="success" />
                    <Textarea placeholder="Default Textarea" status="error" />
                    <Textarea placeholder="Default Textarea" status="warning" />
                    <Textarea placeholder="Default Textarea" status="info" />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={statusTextarea}
              />
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Textarea Styles
            </h1>
            <p className="text-paragraph-secondary"></p>
          </div>

          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-xl font-semibold text-white ">
              Secondary Textarea
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={secondaryTextarea}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 w-full justify-center items-center">
                    <div className="flex flex-row gap-x-5 w-full px-10">
                      <Textarea
                        placeholder="Secondary Textarea"
                        variant="secondary"
                      />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={secondaryTextarea}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
