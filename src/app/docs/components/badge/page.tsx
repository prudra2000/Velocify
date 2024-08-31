"use client";
import React, { useEffect, useState } from "react"; // Add this import
import { Badge } from "@/components/badge";
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
  const basicBadge = `<Badge variant="default">
  Default
</Badge>`;
  const iconBadge = `<Badge
  variant="default"
  avatar={
    <Zap 
      className="w-5 h-5" 
    />
}>
  Icon Badge
</Badge>`;
  const disabledBadge = `<Badge variant="default" disabled>
  Disabled
</Badge>`;
  const sizeBadge = `<Badge variant="default" size="small">
  Small
</Badge>
<Badge variant="default" size="default">
  Default
</Badge>
<Badge variant="default" size="large">
  Large
</Badge>`;
  const avatarBadge = `<Badge
  variant="default"
  avatar={
    <Avatar
      alt={"avatar"}
      src={"/avatarImage.png"}
      width={20}
      height={20}
    />
}>
  Avatar Badge
</Badge>`;
  const outlineBadge = `<Badge variant="outline">
  Default
</Badge>`;
  const secondaryBadge = `<Badge variant="secondary">
  Secondary
</Badge>`;
  const warningBadge = `<Badge variant="warning">
  Warning
</Badge>`;
  const successBadge = `<Badge variant="success">
  Success
</Badge>`;
  const infoBadge = `<Badge variant="info">
  Info
</Badge>`;
  const errorBadge = `<Badge variant="error">
  Error
</Badge>`;
  const terminal = `npm install velocity-ui@latest add badge`;
 
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
      
      <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-3xl font-bold text-white ">Badge</h2>
          <p className="text-gray-400">
            The Badge component is a versatile UI element that enhances the
            visibility of important information within your application. It can
            be used to display status indicators, notifications, or labels,
            making it an essential tool for improving user experience. With
            various styles and sizes, the Badge component is fully customizable
            to fit seamlessly into your design, ensuring that critical
            information stands out while maintaining a cohesive look and feel.
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Badge Installation
          </h1>
          <TerminalShowcase command={terminal} />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">Basic Badge</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={basicBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <Badge variant="default">Default</Badge>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={basicBadge}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Badge API Reference
          </h1>
          <Table data={badgeTableData} columns={badgeTableColumns} />{" "}
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Disabled Badge</h1>
          <p className="text-gray-400">
            The Badge component has a prop called disabled which allows you to
            disable the button. The disabled button is compatable with all
            styles, sizes, and variants.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={disabledBadge}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Badge variant="default" disabled>
                    Disabled
                  </Badge>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={disabledBadge}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Size Badge</h1>
          <p className="text-gray-400">
            The Badge component has a prop called size which allows you to
            change the size of the button.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={sizeBadge}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Badge variant="default" size="small">
                    Small
                  </Badge>
                  <Badge variant="default" size="default">
                    Default
                  </Badge>
                  <Badge variant="default" size="large">
                    Large
                  </Badge>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={sizeBadge}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Icon Badge</h1>
          <p className="text-gray-400">
            The Badge component offers various variants, including default,
            outline, secondary, warning, success, info, and error, each designed
            to convey different meanings and enhance visual distinction in your
            application.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={iconBadge}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Badge variant="default" icon={<Zap className="w-5 h-5" />}>
                    Icon Badge
                  </Badge>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={iconBadge}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Avatar Badge</h1>
          <p className="text-gray-400">
            The Badge component offers various variants, including default,
            outline, secondary, warning, success, info, and error, each designed
            to convey different meanings and enhance visual distinction in your
            application.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={avatarBadge}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Badge
                    variant="default"
                    avatar={
                      <Avatar
                        alt={"avatar"}
                        src={"/avatarImage.png"}
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Avatar Badge
                  </Badge>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={avatarBadge}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Badge Variants</h1>
          <p className="text-gray-400">
            The Badge component offers various variants, including default,
            outline, secondary, warning, success, info, and error, each designed
            to convey different meanings and enhance visual distinction in your
            application.
          </p>
        </div>

        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Outline Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={outlineBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={outlineBadge}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">
            Secondary Variant
          </h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={secondaryBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={secondaryBadge}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Error Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={errorBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Badge variant="error">Error</Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={errorBadge}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Warning Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={warningBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Badge variant="warning">Warning</Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={warningBadge}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Success Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={successBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Badge variant="success">Success</Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={successBadge}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Info Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={infoBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Badge variant="info">Info</Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={infoBadge}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
