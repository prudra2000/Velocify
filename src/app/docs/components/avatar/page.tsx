"use client";
import React, { useState } from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import TableProps from "@/components/Docs Components/tableProps";
import Avatar from "@/components/avatar";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";
import { CodeDialog } from "@/components/codeDialog";

export default function Home() {
  const buttonTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const buttonTableData = [
    { prop: "src", type: "string", default: "-" },
    { prop: "alt", type: "string", default: "-" },
    { prop: "size", type: "string", default: "default" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "rounded", type: "string", default: "full" },
    { prop: "border", type: "boolean", default: "false" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  const avatarProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const avatarData = [
    { prop: "size", type: "default, small, large" },
    { prop: "rounded", type: "full, large, none" },
    {
      prop: "variant",
      type: "default, secondary",
    },
  ];
  const basicAvatar = `<Avatar alt="Jane Doe" />
<Avatar alt="Jane Doe" src="/avatarImage.png" />`;
  const disabledAvatar = `<Avatar alt="Jane Doe" disabled/>
<Avatar alt="Jane Doe" src="/avatarImage.png" disabled/>`;
  const sizeAvatar = `<Avatar alt="Stewart Miller" size="small"/>
<Avatar alt="Angie Sawyer" size="default"/>
<Avatar alt="Oliver Lynn" size="large"/>
<Avatar alt="Salvatore Driscolle" src="/avatarImage.png" size="small" />
<Avatar alt="Randolph Bridges" src="/avatarImage.png" size="default" />
<Avatar alt="Delores Downs" src="/avatarImage.png" size="large" />`;
  const roundedAvatar = `<Avatar alt="Adrienne Hill" rounded="none"/>
<Avatar alt="Juana Schneider" rounded="large"/>
<Avatar alt="Eva Curran" rounded="full"/>
<Avatar alt="Angelo Sanchez" src="/avatarImage.png" rounded="none" />
<Avatar alt="Angela Jacobson" src="/avatarImage.png" rounded="large" />
<Avatar alt="Albert Dean" src="/avatarImage.png" rounded="full" />`;
  const borderAvatar = `<Avatar alt="Alberto Wagner" rounded="none" border/>
<Avatar alt="Maggie Richards" rounded="large" border/>
<Avatar alt="Rod Dalton" rounded="full" border/>
<Avatar alt="Danielle Gorman" src="/avatarImage.png" rounded="none" border/>
<Avatar alt="Pedro Porter" src="/avatarImage.png" rounded="large" border/>
<Avatar alt="Juanita Lawrence" src="/avatarImage.png" rounded="full" border/>`;
  const secondaryAvatar = `<Avatar alt="Mayra Lewis" variant="secondary"/>`;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };  return (
    <>
      <head>
        <title>Velocify UI - Avatar</title>
        <meta
          name="description"
          content="Check out the Avatar component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Avatar</h2>
            <p className="text-paragraph-secondary">
              The Avatar component in this UI library is a versatile element
              designed to display user profile images with various customization
              options. It supports different sizes, edge rounding, and optional
              border styles, allowing developers to tailor the avatar&apos;s
              appearance to match their application&apos;s design needs. The
              component also includes options for secondary styling and a
              disabled state, making it adaptable to various user interface
              scenarios. Additionally, the Avatar can be easily installed and
              integrated into your project, providing a seamless way to enhance
              user profiles in your web applications.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Avatar Installation
            </h1>
            <CopyCodeDisplay
              fileName="avatar"
              handleOpenDialog={handleOpenDialog}
            />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Avatar"
              fileName="avatar"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">Basic Avatar</h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicAvatar}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-row gap-x-5 justify-center items-center">
                    <Avatar alt="Jane Doe" />
                    <Avatar alt="Jane Doe" src="/avatarImage.png" />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicAvatar}
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
              Disabled Avatar
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledAvatar}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Avatar alt="Amy McKenna" disabled />
                    <Avatar
                      alt="Stewart Miller"
                      src="/avatarImage.png"
                      disabled
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledAvatar}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Avatar - Sizes
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeAvatar}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10 justify-center items-center">
                    <Avatar alt="Stewart Miller" size="small" />
                    <Avatar alt="Angie Sawyer" size="default" />
                    <Avatar alt="Oliver Lynn" size="large" />
                  </div>
                  <div className="flex flex-row gap-x-5 px-10 justify-center items-center">
                    <Avatar
                      alt="Salvatore Driscolle"
                      src="/avatarImage.png"
                      size="small"
                    />
                    <Avatar
                      alt="Randolph Bridges"
                      src="/avatarImage.png"
                      size="default"
                    />
                    <Avatar
                      alt="Delores Downs"
                      src="/avatarImage.png"
                      size="large"
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={sizeAvatar}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Avatar - Rounded Edges
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={roundedAvatar}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-5 gap-x-5 px-10">
                    <div className="flex flex-row gap-x-5 px-10 justify-center items-center">
                      <Avatar alt="Adrienne Hill" rounded="none" />
                      <Avatar alt="Juana Schneider" rounded="large" />
                      <Avatar alt="Eva Curran" rounded="full" />
                    </div>
                    <div className="flex flex-row gap-x-5 px-10 justify-center items-center">
                      <Avatar
                        alt="Angelo Sanchez"
                        src="/avatarImage.png"
                        rounded="none"
                      />
                      <Avatar
                        alt="Angela Jacobson"
                        src="/avatarImage.png"
                        rounded="large"
                      />
                      <Avatar
                        alt="Albert Dean"
                        src="/avatarImage.png"
                        rounded="full"
                      />
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={roundedAvatar}
            />
          </div>

          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Avatar - Border Edges
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={borderAvatar}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-5 gap-x-5 px-10">
                    <div className="flex flex-row gap-x-5 px-10 justify-center items-center">
                      <Avatar alt="Alberto Wagner" rounded="none" border />
                      <Avatar alt="Maggie Richards" rounded="large" border />
                      <Avatar alt="Rod Dalton" rounded="full" border />
                    </div>
                    <div className="flex flex-row gap-x-5 px-10 justify-center items-center">
                      <Avatar
                        alt="Danielle Gorman"
                        src="/avatarImage.png"
                        rounded="none"
                        border
                      />
                      <Avatar
                        alt="Pedro Porter"
                        src="/avatarImage.png"
                        rounded="large"
                        border
                      />
                      <Avatar
                        alt="Juanita Lawrence"
                        src="/avatarImage.png"
                        rounded="full"
                        border
                      />
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={borderAvatar}
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
                    code={secondaryAvatar}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Avatar alt="Mayra Lewis" variant="secondary" />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={secondaryAvatar}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
