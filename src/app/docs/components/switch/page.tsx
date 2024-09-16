"use client";
import React, { useEffect, useState } from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import Switch from "@/components/switch";
import TableProps from "@/components/Docs Components/tableProps";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";
import { CodeDialog } from "@/components/codeDialog";

export default function Home() {
  const switchTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const switchTableData = [
    { prop: "isOn", type: "boolean", default: "false" },
    { prop: "handleToggle", type: "function", default: "-" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "size", type: "string", default: "default" },
    { prop: "rounded", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  const switchProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const switchData = [
    { prop: "size", type: "default, small, large" },
    {
      prop: "variant",
      type: "default, secondary, warning, success, info, error, custom",
    },
  ];
  const basicSwitch = `<Switch
  isOn={isSwitchOn}
  handleToggle={toggleSwitch}
/>`;
  const iconSwitch = `<Switch
  variant="default"
  avatar={
    <Zap 
      className="w-5 h-5" 
    />
}>
  Icon Switch
</Switch>`;
  const disabledSwitch = `<Switch
  isOn={isSwitchOn}
  handleToggle={toggleSwitch}
  disabled={true}
/>`;
  const sizeSwitch = `<Switch
  isOn={isSwitchOn}
  handleToggle={toggleSwitch}
  size="small"
/>
<Switch
  isOn={isSwitchOn}
  handleToggle={toggleSwitch}
  size="default"
/>
<Switch
  isOn={isSwitchOn}
  handleToggle={toggleSwitch}
  size="large"
/>`;
  const avatarSwitch = `<Switch
  variant="default"
  avatar={
    <Avatar
      alt={"avatar"}
      src={"/avatarImage.png"}
      width={20}
      height={20}
    />
}>
  Avatar Switch
</Switch>`;
  const secondarySwitch = `<Switch variant="secondary" />`;
  const warningSwitch = `<Switch variant="warning" />`;
  const successSwitch = `<Switch variant="success" />`;
  const infoSwitch = `<Switch variant="info" />`;
  const errorSwitch = `<Switch variant="error" />`;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const [switchStates, setSwitchStates] = useState({
    basic: true,
    disabled: false,
    sizeSmall: false,
    sizeDefault: false,
    sizeLarge: false,
    secondary: true,
    warning: true,
    success: true,
    info: true,
    error: true,
  });

  const toggleSwitch = (key: keyof typeof switchStates) => {
    // {{ edit_1 }} Use keyof to restrict key type
    setSwitchStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <head>
        <title>Velocify UI - Switch</title>
        <meta
          name="description"
          content="Check out the Switch component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Switch</h2>
            <p className="text-paragraph-secondary">
              The Switch component in this UI library provides a versatile and
              customizable toggle switch that can be used in various contexts.
              It supports different sizes and style variants, making it
              adaptable to diverse UI designs. Key props include isOn for
              managing the switch&apos;s state, handleToggle for defining the
              toggle function, and variant for applying pre-defined or custom
              styles. The component also offers options for rounding, disabling,
              and incorporating icons or avatars, allowing for a seamless
              integration into any application while maintaining a consistent
              user experience.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Switch Installation
            </h1>
            <CopyCodeDisplay
              fileName="switch"
              handleOpenDialog={handleOpenDialog}
            />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Switch"
              fileName="switch"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Switch Basic Usage
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicSwitch}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <Switch
                      isOn={switchStates.basic}
                      handleToggle={() => toggleSwitch("basic")}
                      variant="default"
                      size="default"
                    />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicSwitch}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Switch API Reference
            </h1>
            <Table data={switchTableData} columns={switchTableColumns} />
            <TableProps data={switchData} columns={switchProps} />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Switch
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledSwitch}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Switch
                      isOn={switchStates.disabled}
                      handleToggle={() => toggleSwitch("disabled")}
                      variant="default"
                      size="default"
                      disabled={true}
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledSwitch}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Switch - Sizes
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeSwitch}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10 justify-center items-center">
                    <Switch
                      isOn={switchStates.sizeSmall}
                      handleToggle={() => toggleSwitch("sizeSmall")}
                      size="small" // {{ edit_1 }} Added size prop
                    />
                    <Switch
                      isOn={switchStates.sizeDefault}
                      handleToggle={() => toggleSwitch("sizeDefault")}
                      size="default" // {{ edit_2 }} Added size prop
                    />
                    <Switch
                      isOn={switchStates.sizeLarge}
                      handleToggle={() => toggleSwitch("sizeLarge")}
                      size="large" // {{ edit_3 }} Added size prop
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={sizeSwitch}
            />
          </div>

          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Switch - Style Variants
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
                    code={secondarySwitch}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Switch
                        isOn={switchStates.secondary}
                        handleToggle={() => toggleSwitch("secondary")}
                        variant="secondary"
                        size="default"
                      />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={secondarySwitch}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-xl font-semibold text-white ">Error Variant</h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={errorSwitch}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Switch
                        isOn={switchStates.error}
                        handleToggle={() => toggleSwitch("error")}
                        variant="error"
                        size="default"
                      />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={errorSwitch}
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
                    code={warningSwitch}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Switch
                        isOn={switchStates.warning}
                        handleToggle={() => toggleSwitch("warning")}
                        variant="warning"
                        size="default"
                      />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={warningSwitch}
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
                    code={successSwitch}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Switch
                        isOn={switchStates.success}
                        handleToggle={() => toggleSwitch("success")}
                        variant="success"
                        size="default"
                      />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={successSwitch}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-xl font-semibold text-white ">Info Variant</h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={infoSwitch}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <Switch
                        isOn={switchStates.info}
                        handleToggle={() => toggleSwitch("info")}
                        variant="info"
                        size="default"
                      />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={infoSwitch}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
