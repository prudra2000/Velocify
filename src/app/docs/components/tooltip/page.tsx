import React from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import TableProps from "@/components/Docs Components/tableProps";
import { Button } from "@/components/button";
import Tooltip from "@/components/tooltip";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "lucide-react";
import { IconButton } from "@/components/iconButton";

export default function Home() {
  const buttonTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const buttonTableData = [
    { prop: "children*", type: "React.ReactNode", default: "-" },
    { prop: "text*", type: "string", default: "-" },
    { prop: "className", type: "string", default: "-" },
    { prop: "position", type: "string", default: "top" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "size", type: "string", default: "default" },
    { prop: "rounded", type: "string", default: "full" },
  ];
  const avatarProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const avatarData = [
    { prop: "size", type: "default, small, large" },
    { prop: "rounded", type: "full, small, medium, large" },
    {
      prop: "variant",
      type: "default, secondary",
    },
    {
      prop: "position",
      type: "top, bottom, left, right",
    },
  ];
  const basicTooltip = `<Tooltip text={"Tooltip"} position="top">
  <Button>
    <p>Hover</p>
  </Button>
</Tooltip>`;
  const sizeTooltip = `<Tooltip text={"Small"} position="top" size="small">
  <Button>
    <p>Small</p>
  </Button>
</Tooltip>
<Tooltip text={"Default"} position="top" size="default">
  <Button>
    <p>Default</p>
  </Button>
</Tooltip>
<Tooltip text={"Large"} position="top" size="large">
  <Button>
    <p>Large</p>
  </Button>
</Tooltip>`;
  const positionTooltip = `<Tooltip text={"Tooltip"} position="top">
  <IconButton>
    <ChevronUpIcon />
  </IconButton>
</Tooltip>
<Tooltip text={"Tooltip"} position="bottom">
  <IconButton>
    <ChevronDownIcon />
  </IconButton>
</Tooltip>
<Tooltip text={"Tooltip"} position="left">
  <IconButton>
    <ChevronLeftIcon />
  </IconButton>
</Tooltip>
<Tooltip text={"Tooltip"} position="right">
  <IconButton>
    <ChevronRightIcon />
  </IconButton>
</Tooltip>`;

  const secondaryTooltip = `<Tooltip text={"Tooltip"} variant="secondary">
  <Button>
    <p>Secondary</p>
  </Button>
</Tooltip>;`;
  const terminal = `npm install velocity-ui@latest add avatar`;
  return (
    <>
      <head>
        <title>Velocify UI - Tooltip</title>
        <meta
          name="description"
          content="Check out the Tooltip component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Tooltip</h2>
            <p className="text-paragraph-secondary">
              The Tooltip component in this UI library is a versatile and
              customizable tool for providing contextual information when users
              hover over or focus on an element. It supports various positions
              relative to the target element, including top, bottom, left, and
              right, ensuring that the tooltip is displayed in the most
              convenient location. Additionally, it offers size and variant
              options, allowing for further customization to match different
              design needs. The Tooltip component is perfect for enhancing user
              experience by offering immediate insights without cluttering the
              interface.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Tooltip Installation
            </h1>
            <TerminalShowcase command={terminal} />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Basic Tooltip
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicTooltip}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-row gap-x-5 h-32  justify-center items-center">
                    <Tooltip text={"Tooltip"} position="top">
                      <Button>
                        <p>Hover</p>
                      </Button>
                    </Tooltip>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicTooltip}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Tooltip API Reference
            </h1>
            <Table data={buttonTableData} columns={buttonTableColumns} />
            <TableProps data={avatarData} columns={avatarProps} />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Tooltip - Sizes
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeTooltip}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 h-32 justify-center items-center">
                  <div className="flex flex-row gap-x-10 px-10 justify-center items-center">
                    <Tooltip text={"Small"} position="top" size="small" >
                      <Button>
                        <p>Small</p>
                      </Button>
                    </Tooltip>
                    <Tooltip text={"Default"} position="top" size="default">
                      <Button>
                        <p>Default</p>
                      </Button>
                    </Tooltip>
                    <Tooltip text={"Large"} position="top" size="large" >
                      <Button>
                        <p>Large</p>
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={sizeTooltip}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Tooltip - Position
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={positionTooltip}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 h-32  justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <div className="flex flex-row gap-5 px-10 justify-center items-center">
                      <Tooltip text={"Tooltip"} position="top">
                        <IconButton>
                          <ChevronUpIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip text={"Tooltip"} position="bottom">
                        <IconButton>
                          <ChevronDownIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <div className="flex flex-col gap-5 px-10 justify-center items-center">
                      <Tooltip text={"Tooltip"} position="left">
                        <IconButton>
                          <ChevronLeftIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip text={"Tooltip"} position="right">
                        <IconButton>
                          <ChevronRightIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={positionTooltip}
            />
          </div>

          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Tooltip - Style Variants
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
                    code={secondaryTooltip}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 h-32  justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Tooltip text={"Secondary"} variant="secondary">
                        <Button>
                          <p>Secondary</p>
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={secondaryTooltip}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
