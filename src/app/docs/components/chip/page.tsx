"use client";
import React, { useEffect, useState } from "react"; // Add this import
import { Chip } from "@/components/chip";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import Avatar from "@/components/avatar";
import { Zap } from "lucide-react";

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
  const outlineChip = `<Chip variant="outline">
  Default
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
  const terminal = `npm install velocity-ui@latest add badge`;
 
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
      
      <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-3xl font-bold text-white ">Chip</h2>
          <p className="text-paragraph-secondary">
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Chip Installation
          </h1>
          <TerminalShowcase command={terminal} />
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
          <Table data={badgeTableData} columns={badgeTableColumns} />{" "}
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Disabled Chip</h1>
          <p className="text-paragraph-secondary">
            The Chip component has a prop called disabled which allows you to
            disable the button. The disabled button is compatable with all
            styles, sizes, and variants.
          </p>
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
          <h1 className="text-2xl font-semibold text-white ">Size Chip</h1>
          <p className="text-paragraph-secondary">
            The Chip component has a prop called size which allows you to
            change the size of the button.
          </p>
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
          <h1 className="text-2xl font-semibold text-white ">Icon Chip</h1>
          <p className="text-paragraph-secondary">
            The Chip component offers various variants, including default,
            outline, secondary, warning, success, info, and error, each designed
            to convey different meanings and enhance visual distinction in your
            application.
          </p>
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
          <h1 className="text-2xl font-semibold text-white ">Avatar Chip</h1>
          <p className="text-paragraph-secondary">
            The Chip component offers various variants, including default,
            outline, secondary, warning, success, info, and error, each designed
            to convey different meanings and enhance visual distinction in your
            application.
          </p>
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
          <h1 className="text-2xl font-semibold text-white ">Chip Variants</h1>
          <p className="text-paragraph-secondary">
            The Chip component offers various variants, including default,
            outline, secondary, warning, success, info, and error, each designed
            to convey different meanings and enhance visual distinction in your
            application.
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
          <h1 className="text-xl font-semibold text-white ">Warning Variant</h1>
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
          <h1 className="text-xl font-semibold text-white ">Success Variant</h1>
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
  );
}
