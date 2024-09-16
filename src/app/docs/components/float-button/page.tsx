"use client";
import React, { useState } from "react"; // Add this import
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import Table from "@/components/table";
import { Zap } from "lucide-react";
import { IconButton } from "@/components/iconButton";
import FloatButton from "@/components/floatButton";
import TableProps from "@/components/Docs Components/tableProps";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";
import { CodeDialog } from "@/components/codeDialog";

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
    { prop: "size", type: "default, none, full", default: "default" }, // Changed 'types' to 'type'
    {
      prop: "position",
      type: "bottom-right, bottom-left, top-right, top-left",
      default: "bottom-left",
    },
    {
      prop: "variant",
      type: "default, secondary, warning, success, info, error, ghost, custom",
      default: "default",
    },
  ];
  const basicIconButton = `<IconButton variant="default" alt="Default">
  Default
</IconButton>`;
  const disabledIconButton = `<IconButton variant="default" disabled>
  <Zap className="w-5 h-5 stroke-accent" />
</IconButton>`;
  const sizeIconButton = `<IconButton variant="default" size="small">
  <Zap className="w-3 h-3 stroke-accent" />
</IconButton>
<IconButton variant="default" size="default">
  <Zap className="w-5 h-5 stroke-accent" />
</IconButton>
<IconButton variant="default" size="large">
  <Zap className="w-7 h-7 stroke-accent" />
</IconButton>`;
  const secondaryIconButton = `<IconButton variant="secondary" alt="Secondary">
  <Zap className="w-5 h-5 stroke-accent" />
</IconButton>`;
  const warningIconButton = `<IconButton variant="warning" alt="Warning">
  <Zap className="w-5 h-5 stroke-accent" />
</IconButton>`;
  const successIconButton = `<IconButton variant="success" alt="Success">
  <Zap className="w-5 h-5 stroke-accent" />
</IconButton>`;
  const infoIconButton = `<IconButton variant="info" alt="Info">
  <Zap className="w-5 h-5 stroke-accent" />
</IconButton>`;
  const errorIconButton = `<IconButton variant="error" alt="Error">
  <Zap className="w-5 h-5 stroke-accent" />
</IconButton>`;
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
        <title>Velocify UI - Float Button</title>
        <meta
          name="description"
          content="Check out the Float Button component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Float Button</h2>
            <p className="text-paragraph-secondary"></p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Float Button Installation
            </h1>
            <CopyCodeDisplay
              fileName="floatButton"
              handleOpenDialog={handleOpenDialog}
            />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Float Button"
              fileName="floatButton"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Basic Float Button
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
                    <FloatButton
                      variant="default"
                      onClick={() => {}}
                      position="bottom-left"
                    >
                      <Zap className="w-5 h-5" />
                      Test
                    </FloatButton>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicIconButton}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Button API Reference
            </h1>
            <Table data={buttonTableData} columns={buttonTableColumns} />{" "}
            <TableProps data={buttonData} columns={buttonProps} />{" "}
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Button
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
                      <Zap className="w-5 h-5 stroke-accent" />
                    </IconButton>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledIconButton}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">Size Button</h1>
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
              Badge Variants
            </h1>
            <p className="text-paragraph-secondary">
              The IconButton component provides various styles and sizes,
              allowing for a flexible and customizable user interface. It can be
              used for primary actions, secondary options, or to enhance visual
              hierarchy in your application.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
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
            <h1 className="text-xl font-semibold text-white ">
              Warning Variant
            </h1>
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
            <h1 className="text-xl font-semibold text-white ">
              Success Variant
            </h1>
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
        </div>
      </main>
    </>
  );
}
