"use client";
import React, { useEffect, useState } from "react"; // Add this import
import { Chip } from "@/components/chip";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import Avatar from "@/components/avatar";
import { Zap } from "lucide-react";
import TableProps from "@/components/Docs Components/tableProps";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";
import { CodeDialog } from "@/components/codeDialog";

export default function Home() {
  const badgeTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const badgeTableData = [
    { prop: "className", type: "string", default: "-" },
    { prop: "children", type: "React.ReactNode", default: "-" },
    { prop: "icon", type: "React.ReactNode", default: "-" },
    { prop: "avatar", type: "React.ReactNode", default: "-" },
    { prop: "size", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  const chipProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const chipData = [
    { prop: "size", type: "default, small, large" },
    {
      prop: "variant",
      type: "default, secondary, warning, success, info, error, custom",
    },
  ];

  const basicChip = `<Chip variant="default">
  Default
</Chip>`;
  const iconChip = `<Chip
  variant="default"
  avatar={
    <Zap 
      className="w-5 h-5" 
    />
}>
  Icon Chip
</Chip>`;
  const disabledChip = `<Chip variant="default" disabled>
  Disabled
</Chip>`;
  const sizeChip = `<Chip variant="default" size="small">
  Small
</Chip>
<Chip variant="default" size="default">
  Default
</Chip>
<Chip variant="default" size="large">
  Large
</Chip>`;
  const avatarChip = `<Chip
  variant="default"
  avatar={
    <Avatar
      alt={"avatar"}
      src={"/avatarImage.png"}
      width={20}
      height={20}
    />
}>
  Avatar Chip
</Chip>`;
  const secondaryChip = `<Chip variant="secondary">
  Secondary
</Chip>`;
  const warningChip = `<Chip variant="warning">
  Warning
</Chip>`;
  const successChip = `<Chip variant="success">
  Success
</Chip>`;
  const infoChip = `<Chip variant="info">
  Info
</Chip>`;
  const errorChip = `<Chip variant="error">
  Error
</Chip>`;
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
        <title>Velocify UI - Chip</title>
        <meta
          name="description"
          content="Check out the Chip component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Chip</h2>
            <p className="text-paragraph-secondary">
              The Chip component in Velocify UI is a versatile UI element
              designed to display concise information, actions, or tags in a
              compact form. It supports different variants such as default,
              secondary, warning, success, info, and error, allowing for visual
              differentiation. Additionally, it can be customized with icons or
              avatars, and comes with various size options like small, default,
              and large. The component also supports a disabled state, making it
              flexible for different UI scenarios.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Chip Installation
            </h1>
            <CopyCodeDisplay handleOpenDialog={handleOpenDialog} />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Chip"
              fileName="chip"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">Basic Chip</h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicChip}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <Chip variant="default">Default</Chip>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicChip}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Chip API Reference
            </h1>
            <Table data={badgeTableData} columns={badgeTableColumns} />
            <TableProps data={chipData} columns={chipProps} />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Chip
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledChip}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Chip variant="default" disabled>
                      Disabled
                    </Chip>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledChip}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">Chip - Sizes</h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeChip}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Chip variant="default" size="small">
                      Small
                    </Chip>
                    <Chip variant="default" size="default">
                      Default
                    </Chip>
                    <Chip variant="default" size="large">
                      Large
                    </Chip>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={sizeChip}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Chip - Icon Variant
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={iconChip}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Chip variant="default" icon={<Zap className="w-5 h-5" />}>
                      Icon Chip
                    </Chip>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={iconChip}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Chip - Avatar Variant
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={avatarChip}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Chip
                      variant="default"
                      avatar={
                        <Avatar
                          alt={"avatar"}
                          src={"/avatarImage.png"}
                          size="small"
                        />
                      }
                    >
                      Avatar Chip
                    </Chip>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={avatarChip}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Chip - Style Variants
            </h1>
            <p className="text-paragraph-secondary"></p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-xl font-semibold text-white ">
              Secondary Variant
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={secondaryChip}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Chip variant="secondary">Secondary</Chip>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={secondaryChip}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-xl font-semibold text-white ">Error Variant</h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={errorChip}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Chip variant="error">Error</Chip>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={errorChip}
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
                    code={warningChip}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Chip variant="warning">Warning</Chip>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={warningChip}
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
                    code={successChip}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Chip variant="success">Success</Chip>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={successChip}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-xl font-semibold text-white ">Info Variant</h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={infoChip}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Chip variant="info">Info</Chip>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={infoChip}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
