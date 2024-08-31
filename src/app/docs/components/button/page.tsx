import React from "react"; // Add this import
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import Avatar from "@/components/avatar";
import { Zap } from "lucide-react";
import { Button } from "@/components/button";

export default function Home() {
  const buttonTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const buttonTableData = [
    { prop: "asChild", type: "boolean", default: "false" },
    { prop: "children", type: "React.ReactNode", default: "-" },
    { prop: "alt", type: "string", default: "-" },
    { prop: "leftIcon", type: "React.ReactNode", default: "-" },
    { prop: "rightIcon", type: "React.ReactNode", default: "-" },
    { prop: "leftAvatar", type: "React.ReactNode", default: "-" },
    { prop: "rightAvatar", type: "React.ReactNode", default: "-" },
    { prop: "rounded", type: "string", default: "default" },
    { prop: "size", type: "string", default: "default" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  const basicButton = `<Button variant="default" alt="Default">
  Default
</Button>`;
const disabledButton = `<Button variant="default" disabled>
  Disabled
</Button>`;
const sizeButton = `<Button variant="default" size="small">
  Small
</Button>
<Button variant="default" size="default">
  Default
</Button>
<Button variant="default" size="large">
  Large
</Button>`;
  const iconButton = `<Button
    variant="default"
    alt="Icon Badge"
    leftIcon={<Zap className="w-5 h-5" />}
>
  Icon Badge
</Button>
<Button
    variant="default"
    alt="Icon Badge"
    rightIcon={<Zap className="w-5 h-5" />}
>
  Icon Badge
</Button>`;
  const avatarButton = `<Button
    variant="default"
    leftAvatar={
      <Avatar
        alt={"avatar"}
        src={"/avatarImage.png"}
        width={20}
        height={20}
      />
    }
>
  Avatar Button
</Button>
<Button
    variant="default"
    rightAvatar={
      <Avatar
        alt={"avatar"}
        src={"/avatarImage.png"}
        width={20}
        height={20}
      />
    }
>
  Avatar Button
</Button>`;
  const roundedButton = `<Button variant="default" rounded="none">
  Rounded None
</Button>
<Button variant="default" rounded="default">
  Rounded Default
</Button>
<Button variant="default" rounded="full">
  Rounded Full
</Button>`;
  const outlineButton = `<Button variant="outline" alt="Outline">
  Default
</Button>`;
  const secondaryButton = `<Button variant="secondary" alt="Secondary">
  Secondary
</Button>`;
  const warningButton = `<Button variant="warning" alt="Warning">
  Warning
</Button>`;
  const successButton = `<Button variant="success" alt="Success">
  Success
</Button>`;
  const infoButton = `<Button variant="info" alt="Info">
  Info
</Button>`;
  const errorButton = `<Button variant="error" alt="Error">
  Error
</Button>`;
  const linkButton = `<Button variant="link" alt="Link">
  Link
</Button>`;
  const terminal = `npm install velocity-ui@latest add button`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
      <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-3xl font-bold text-white ">Button</h2>
          <p className="text-gray-400">
            {" "}
            The Button component is a fundamental UI element that facilitates
            user interaction within your application. It serves as a trigger for
            actions, such as submitting forms, navigating to different pages, or
            executing commands. With a variety of styles, sizes, and variants,
            the Button component is designed to be highly customizable, allowing
            developers to create a consistent and engaging user experience.
            Whether used as a primary call-to-action or a subtle secondary
            option, the Button component ensures that your application's
            interface remains intuitive and accessible.
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Button Installation
          </h1>
          <TerminalShowcase command={terminal} />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">Basic Button</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={basicButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <Button variant="default">Default</Button>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={basicButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Button API Reference
          </h1>
          <Table data={buttonTableData} columns={buttonTableColumns} />{" "}
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Disabled Button</h1>
          <p className="text-gray-400">
            The Button component has a prop called disabled which allows you to
            disable the button. The disabled button is compatable with all styles, sizes, and variants.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={disabledButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Button variant="default" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={disabledButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Size Button</h1>
          <p className="text-gray-400">
            The Button component has a prop called size which allows you to
            change the size of the button.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={sizeButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Button variant="default" size="small">
                    Small
                  </Button>
                  <Button variant="default" size="default">
                    Default
                  </Button>
                  <Button variant="default" size="large">
                    Large
                  </Button>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={sizeButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Icon Button</h1>
          <p className="text-gray-400">
            The Button component has a prop called leftIcon and rightIcon which
            allows you to add an icon to the left or right of the button.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={iconButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Button
                    variant="default"
                    alt="Icon Badge"
                    leftIcon={<Zap className="w-5 h-5" />}
                  >
                    Icon Badge
                  </Button>
                  <Button
                    variant="default"
                    alt="Icon Badge"
                    rightIcon={<Zap className="w-5 h-5" />}
                  >
                    Icon Badge
                  </Button>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={iconButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Avatar Button</h1>
          <p className="text-gray-400">
            The Button component has a prop called leftAvatar and rightAvatar
            which allows you to add an avatar to the left or right of the
            button.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={avatarButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Button
                    variant="default"
                    leftAvatar={
                      <Avatar
                        alt={"avatar"}
                        src={"/avatarImage.png"}
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Avatar Button
                  </Button>
                  <Button
                    variant="default"
                    rightAvatar={
                      <Avatar
                        alt={"avatar"}
                        src={"/avatarImage.png"}
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Avatar Button
                  </Button>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={avatarButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Rounded Button</h1>
          <p className="text-gray-400">
            The Button component has a prop called rounded which allows you to
            add a rounded button.
          </p>
          <ElementShowcase
            codeShowcase={
              <CodeShowcase
                code={roundedButton}
                githubLink="https://github.com/prudra2000/Velocify"
              />
            }
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Button variant="default" rounded="none">
                    Rounded None
                  </Button>
                  <Button variant="default" rounded="default">
                    Rounded Default
                  </Button>
                  <Button variant="default" rounded="full">
                    Rounded Full
                  </Button>
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={roundedButton}
          />
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Badge Variants</h1>
          <p className="text-gray-400">
            The Button component provides various styles and sizes, allowing for
            a flexible and customizable user interface. It can be used for
            primary actions, secondary options, or to enhance visual hierarchy
            in your application.
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
                  code={secondaryButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Button variant="secondary" alt="Secondary">
                      Secondary
                    </Button>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={secondaryButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Error Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={errorButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Button variant="error" alt="Error">
                      Error
                    </Button>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={errorButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Warning Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={warningButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Button variant="warning" alt="Warning">
                      Warning
                    </Button>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={warningButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Success Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={successButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Button variant="success" alt="Success">
                      Success
                    </Button>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={successButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Info Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={infoButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Button variant="info" alt="Info">
                      Info
                    </Button>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={infoButton}
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xl font-semibold text-white ">Link Variant</h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={linkButton}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Button variant="link" alt="Link">
                      Link
                    </Button>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={linkButton}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
