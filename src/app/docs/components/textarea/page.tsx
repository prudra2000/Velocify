import React from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import { Textarea } from "@/components/textarea";

export default function Home() {
  const inputTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const inputTableData = [
    { prop: "className", type: "string", default: "-" },
    { prop: "rounded", type: "string", default: "default" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "status", type: "string", default: "-" },
  ];
  const basicTextarea = `<Textarea placeholder="Default Textarea" variant="default" />`;
  const iconTextarea = `<Textarea
  variant="default"
  avatar={
    <Zap 
      className="w-5 h-5" 
    />
}>
  Icon Textarea
</Textarea>`;
  const disabledTextarea = `<Textarea variant="default" disabled />`;
  const fileTextarea = `<Textarea variant="default" type="file" />`;
  const roundedTextarea = `<Textarea placeholder="Rounded None" rounded="none" />
<Textarea placeholder="Rounded Default" rounded="default" />
<Textarea placeholder="Rounded Full" rounded="full" />`;
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
  const terminal = `npm install velocity-ui@latest add input`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
      <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-3xl font-bold text-white ">Textarea</h2>
          <p className="text-gray-400">
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Textarea Installation
          </h1>
          <TerminalShowcase command={terminal} />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">Basic Textarea</h1>
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
                  <Textarea placeholder="Default Textarea" variant="default" />

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
          <Table data={inputTableData} columns={inputTableColumns} />{" "}
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Disabled Textarea</h1>
          <p className="text-gray-400">
            The Badge component has a prop called disabled which allows you to
            disable the button. The disabled button is compatable with all
            styles, sizes, and variants.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={disabledTextarea}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Textarea
                    placeholder="Default Textarea"
                    variant="default"
                    disabled={true}
                  />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={disabledTextarea}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Rounded Textarea</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={roundedTextarea}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-3 px-10">
                    <Textarea placeholder="Rounded None" rounded="none" />
                    <Textarea placeholder="Rounded Default" rounded="default" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={roundedTextarea}
            />
          </div>
        </div>

        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Textarea Status Types
          </h1>
          <p className="text-gray-400">
            The Textarea component has a prop called status which allows you to
            change the status of the input.
          </p>
        </div>

        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Success Status</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={statusTextarea}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-3 px-10">
                    <Textarea placeholder="Default Textarea" status="success" />
                    <Textarea placeholder="Default Textarea" status="error" />
                    <Textarea placeholder="Default Textarea" status="warning" />
                    <Textarea placeholder="Default Textarea" status="info" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={statusTextarea}
            />
          </div>
        </div>

        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Textarea Styles</h1>
          <p className="text-gray-400">
            The Textarea component has a prop called variant which allows you to
            change the variant of the input.
          </p>
        </div>

        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Outline Textarea</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={fileTextarea}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Textarea placeholder="Default Textarea" variant="outline" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={fileTextarea}
            />
          </div>
        </div>

        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Secondary Textarea</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={fileTextarea}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Textarea placeholder="Default Textarea" variant="secondary" />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={fileTextarea}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
