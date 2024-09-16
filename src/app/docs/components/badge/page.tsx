"use client";
import React, { useState } from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import Table from "@/components/table";
import TableProps from "@/components/Docs Components/tableProps";
import Avatar from "@/components/avatar";
import Badge from "@/components/badge";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";
import { CodeDialog } from "@/components/codeDialog";

export default function Home() {
  const buttonTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const buttonTableData = [
    { prop: "children*", type: "React.ReactNode", default: "-" },
    { prop: "position", type: "string", default: "top-right" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "size", type: "string", default: "default" },
    { prop: "rounded", type: "string", default: "full" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  const avatarProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const avatarData = [
    { prop: "size", type: "default, small, large" },
    { prop: "rounded", type: "full, small, medium, large" },
    {
      prop: "variant",
      type: "default, secondary, warning, success, info, error, custom",
    },
    {
      prop: "position",
      type: "top-right, bottom-right, top-left, bottom-left",
    },
  ];
  const basicBadge = `<Badge content="1" position="top-left">
  <Avatar alt="Jane Doe" rounded="large"/>
</Badge>
<Badge noContent={true} >
  <Avatar alt="Jane Doe" src="/avatarImage.png" rounded="large"/>
</Badge>`;
  const disabledBadge = `<Badge content="1" position="top-left" disabled>
  <Avatar alt="Jane Doe" rounded="large"/>
</Badge>
<Badge content="25" disabled>
  <Avatar alt="Jane Doe" src="/avatarImage.png" rounded="large"/>
</Badge>`;
  const sizeBadge = `<Badge content="Small" size="small">
  <Avatar
    alt="Jane Doe"
    src="/avatarImage.png"
    rounded="large"
  />
</Badge>
<Badge content="Default" size="default">
  <Avatar
    alt="Jane Doe"
    src="/avatarImage.png"
    rounded="large"
  />
</Badge>
<Badge content="Large" size="large">
  <Avatar
    alt="Jane Doe"
    src="/avatarImage.png"
    rounded="large"
  />
</Badge>`;
  const positionBadge = `<Badge content="1" position="top-left">
  <Avatar
    alt="Jane Doe"
    src="/avatarImage.png"
    rounded="large"
  />
</Badge>
<Badge content="2" position="top-right">
  <Avatar
    alt="Jane Doe"
    src="/avatarImage.png"
    rounded="large"
  />
</Badge>
<Badge content="3" position="bottom-left">
  <Avatar
    alt="Jane Doe"
    src="/avatarImage.png"
    rounded="large"
  />
</Badge>
<Badge content="4" position="bottom-right">
  <Avatar
    alt="Jane Doe"
    src="/avatarImage.png"
    rounded="large"
  />
</Badge>`;

  const secondaryBadge = `<Badge content="1" variant="secondary">
  <Avatar alt="Jane Doe" rounded="large" />
</Badge>;`;
  const warningBadge = `<Badge content="1" variant="warning">
  <Avatar alt="Jane Doe" rounded="large" />
</Badge>;`;
  const successBadge = `<Badge content="1" variant="success">
  <Avatar alt="Jane Doe" rounded="large" />
</Badge>;`;
  const infoBadge = `<Badge content="1" variant="info">
  <Avatar alt="Jane Doe" rounded="large" />
</Badge>;`;
  const errorBadge = `<Badge content="1" variant="error">
  <Avatar alt="Jane Doe" rounded="large" />
</Badge>;`;
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
        <title>Velocify UI - Badge</title>
        <meta
          name="description"
          content="Check out the Badge component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Badge</h2>
            <p className="text-paragraph-secondary">
              The Badge component in this UI library is a versatile element
              designed to display notifications or status indicators, typically
              in conjunction with other components. It offers extensive
              customization options, including various positions, sizes, and
              style variants, allowing for precise alignment and visual appeal
              within your application. With support for disabling, rounded
              corners, and different content types, the Badge component
              seamlessly adapts to diverse UI requirements, making it a valuable
              tool for enhancing user interaction and feedback.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Badge Installation
            </h1>
            <CopyCodeDisplay
              fileName="badge"
              handleOpenDialog={handleOpenDialog}
            />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Badge"
              fileName="badge"
              className="bg-dark-primary/80"
            />
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
                  <div className="flex flex-row gap-x-5 justify-center items-center">
                    <Badge content="1" position="top-left">
                      <Avatar alt="Jane Doe" rounded="large" />
                    </Badge>
                    <Badge noContent={true}>
                      <Avatar
                        alt="Jane Doe"
                        src="/avatarImage.png"
                        rounded="large"
                      />
                    </Badge>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicBadge}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Avatar API Reference
            </h1>
            <Table data={buttonTableData} columns={buttonTableColumns} />
            <TableProps data={avatarData} columns={avatarProps} />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Badge
            </h1>
            <p className="text-paragraph-secondary"></p>
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
                    <Badge content="1" position="top-left" disabled>
                      <Avatar alt="Jane Doe" rounded="large" />
                    </Badge>
                    <Badge content="25" disabled>
                      <Avatar
                        alt="Jane Doe"
                        src="/avatarImage.png"
                        rounded="large"
                      />
                    </Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledBadge}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Badge - Sizes
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col sm:flex-row gap-y-5 gap-x-10 px-10 justify-center items-center">
                    <Badge content="Small" size="small">
                      <Avatar
                        alt="Jane Doe"
                        src="/avatarImage.png"
                        rounded="large"
                      />
                    </Badge>
                    <Badge content="Default" size="default">
                      <Avatar
                        alt="Jane Doe"
                        src="/avatarImage.png"
                        rounded="large"
                      />
                    </Badge>
                    <Badge content="Large" size="large">
                      <Avatar
                        alt="Jane Doe"
                        src="/avatarImage.png"
                        rounded="large"
                      />
                    </Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={sizeBadge}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Badge - Position
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={positionBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-5 gap-x-5 px-10">
                    <div className="grid grid-row-4 gap-5 sm:grid-cols-2 px-10 justify-center items-center">
                      <Badge content="1" position="top-left">
                        <Avatar
                          alt="Jane Doe"
                          src="/avatarImage.png"
                          rounded="large"
                        />
                      </Badge>
                      <Badge content="2" position="top-right">
                        <Avatar
                          alt="Jane Doe"
                          src="/avatarImage.png"
                          rounded="large"
                        />
                      </Badge>
                      <Badge content="3" position="bottom-left">
                        <Avatar
                          alt="Jane Doe"
                          src="/avatarImage.png"
                          rounded="large"
                        />
                      </Badge>
                      <Badge content="4" position="bottom-right">
                        <Avatar
                          alt="Jane Doe"
                          src="/avatarImage.png"
                          rounded="large"
                        />
                      </Badge>
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={positionBadge}
            />
          </div>

          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Badge - Style Variants
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
                    code={secondaryBadge}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Badge content="1" variant="secondary">
                        <Avatar alt="Jane Doe" rounded="large" />
                      </Badge>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={secondaryBadge}
              />
            </div>
          </div>
          <div className="flex flex-col  gap-y-3">
            <h1 className="text-xl font-semibold text-white ">
              Warning Variant
            </h1>
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
                      <Badge content="1" variant="warning">
                        <Avatar alt="Jane Doe" rounded="large" />
                      </Badge>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={warningBadge}
              />
            </div>
            <div className="flex flex-col  gap-y-3">
              <h1 className="text-xl font-semibold text-white ">
                Success Variant
              </h1>
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
                        <Badge content="1" variant="success">
                          <Avatar alt="Jane Doe" rounded="large" />
                        </Badge>
                      </div>
                    </div>
                  }
                  githubLink="https://github.com/prudra2000/Velocify"
                  code={successBadge}
                />
              </div>
              <div className="flex flex-col  gap-y-3">
                <h1 className="text-xl font-semibold text-white ">
                  Info Variant
                </h1>
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
                          <Badge content="1" variant="info">
                            <Avatar alt="Jane Doe" rounded="large" />
                          </Badge>
                        </div>
                      </div>
                    }
                    githubLink="https://github.com/prudra2000/Velocify"
                    code={infoBadge}
                  />
                </div>
              </div>
              <div className="flex flex-col  gap-y-3">
                <h1 className="text-xl font-semibold text-white ">
                  Error Variant
                </h1>
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
                          <Badge content="1" variant="error">
                            <Avatar alt="Jane Doe" rounded="large" />
                          </Badge>
                        </div>
                      </div>
                    }
                    githubLink="https://github.com/prudra2000/Velocify"
                    code={errorBadge}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
