import React from "react"; // Add this import
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import Avatar from "@/components/avatar";
import { Zap } from "lucide-react";
import { Button } from "@/components/button";
import { IconButton } from "@/components/iconButton";
import TableProps from "@/components/Docs Components/tableProps";

export default function Home() {
  const buttonTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const buttonTableData = [
    { prop: "asChild", type: "boolean", default: "false" },
    { prop: "children", type: "React.ReactNode", default: "-" },
    { prop: "alt", type: "string", default: "-" },
    { prop: "size", type: "string", default: "default" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  const buttonProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const buttonData = [
    { prop: "rounded", type: "default, none, large" },
    { prop: "size", type: "default, small, large" },
    {
      prop: "variant",
      type: "default, secondary, warning, success, info, error, ghost, custom",
    },
  ];
  const basicIconButton = `<IconButton variant="default" alt="Default">
  Default
</IconButton>`;
  const disabledIconButton = `<IconButton variant="default" disabled>
  <Zap className="w-5 h-5" />
</IconButton>`;
  const sizeIconButton = `<IconButton variant="default" size="small">
  <Zap className="w-3 h-3" />
</IconButton>
<IconButton variant="default" size="default">
  <Zap className="w-5 h-5" />
</IconButton>
<IconButton variant="default" size="large">
  <Zap className="w-7 h-7 " />
</IconButton>`;
  const roundedIconButton = `<IconButton variant="default" rounded="none">
  <Zap className="w-5 h-5" />
</IconButton>
<IconButton variant="default" rounded="default">
  <Zap className="w-5 h-5" />
</IconButton>
<IconButton variant="default" rounded="large">
  <Zap className="w-5 h-5" />
</IconButton>`;
  const secondaryIconButton = `<IconButton variant="secondary" >
  <Zap className="w-5 h-5" />
</IconButton>`;
  const warningIconButton = `<IconButton variant="warning" >
  <Zap className="w-5 h-5" />
</IconButton>`;
  const successIconButton = `<IconButton variant="success" >
  <Zap className="w-5 h-5" />
</IconButton>`;
  const infoIconButton = `<IconButton variant="info" >
  <Zap className="w-5 h-5" />
</IconButton>`;
  const errorIconButton = `<IconButton variant="error" >
  <Zap className="w-5 h-5" />
</IconButton>`;
  const terminal = `npm install velocity-ui@latest add iconButton`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
      <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-3xl font-bold text-white ">Icon Button</h2>
          <p className="text-paragraph-secondary">
            The IconButton component provides a versatile and customizable
            button that integrates seamlessly with icons, offering various
            sizes, shapes, and visual variants to match your design needs. This
            component supports multiple icon styles and ensures accessibility
            with options for alt text. Whether you&apos;re looking for a subtle
            interaction with the ghost variant or a more prominent action
            button, the IconButton is designed to be both flexible and easy to
            implement in your UI. It also includes props for rounding,
            disabling, and customizing button styles, making it ideal for a wide
            range of use cases.
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Icon Button Installation
          </h1>
          <TerminalShowcase command={terminal} />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Basic Icon Button
          </h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={basicIconButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <IconButton variant="default" alt="Icon Button">
                    <Zap className="w-5 h-5" />
                  </IconButton>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={basicIconButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Icon Button API Reference
          </h1>
          <Table data={buttonTableData} columns={buttonTableColumns} />{" "}
          <TableProps data={buttonData} columns={buttonProps} />{" "}
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Disabled Icon Button
          </h1>
          <p className="text-paragraph-secondary"></p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={disabledIconButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <IconButton variant="default" disabled>
                    <Zap className="w-5 h-5" />
                  </IconButton>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={disabledIconButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Icon Button - Sizes
          </h1>
          <p className="text-paragraph-secondary"></p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={sizeIconButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <IconButton variant="default" size="small">
                    <Zap className="w-3 h-3 stroke-accent" />
                  </IconButton>
                  <IconButton variant="default" size="default">
                    <Zap className="w-5 h-5 stroke-accent" />
                  </IconButton>
                  <IconButton variant="default" size="large">
                    <Zap className="w-7 h-7 stroke-accent" />
                  </IconButton>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={sizeIconButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Icon Button - Rounded Edges
          </h1>
          <p className="text-paragraph-secondary"></p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={roundedIconButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <IconButton variant="default" rounded="none">
                    <Zap className="w-5 h-5" />
                  </IconButton>
                  <IconButton variant="default" rounded="default">
                    <Zap className="w-5 h-5" />
                  </IconButton>
                  <IconButton variant="default" rounded="large">
                    <Zap className="w-5 h-5" />
                  </IconButton>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={roundedIconButton}
          />
        </div>

        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Icon Button - Style Variants
          </h1>
          <p className="text-paragraph-secondary"></p>
        </div>
        <div className="flex flex-col  gap-y-3">
          <h1 className="text-xl font-semibold text-white ">
            Secondary Variant
          </h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={secondaryIconButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <IconButton variant="secondary" alt="Secondary">
                      <Zap className="w-5 h-5 stroke-accent" />
                    </IconButton>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={secondaryIconButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Error Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={errorIconButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <IconButton variant="error" alt="Error">
                      <Zap className="w-5 h-5 stroke-accent" />
                    </IconButton>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={errorIconButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Warning Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={warningIconButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <IconButton variant="warning" alt="Warning">
                      <Zap className="w-5 h-5 stroke-accent" />
                    </IconButton>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={warningIconButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Success Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={successIconButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <IconButton variant="success" alt="Success">
                      <Zap className="w-5 h-5 stroke-accent" />
                    </IconButton>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={successIconButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Info Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={infoIconButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <IconButton variant="info" alt="Info">
                      <Zap className="w-5 h-5 stroke-accent" />
                    </IconButton>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={infoIconButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Ghost Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={infoIconButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <IconButton variant="ghost" alt="Info">
                      <Zap className="w-5 h-5 stroke-accent" />
                    </IconButton>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={infoIconButton}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
