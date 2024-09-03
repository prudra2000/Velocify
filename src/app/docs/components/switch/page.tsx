"use client";
import React, { useEffect, useState } from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";
import Table from "@/components/table";
import Switch from "@/components/switch";

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
  const terminal = `npm install velocity-ui@latest add switch`;

  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
      <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-3xl font-bold text-white ">Switch</h2>
          <p className="text-paragraph-secondary"></p>
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">
            Switch Installation
          </h1>
          <TerminalShowcase command={terminal} />
        </div>
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-2xl font-semibold text-white ">Switch Switch</h1>
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
                    isOn={isSwitchOn}
                    handleToggle={toggleSwitch}
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
          <Table data={switchTableData} columns={switchTableColumns} />{" "}
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Disabled Switch</h1>
          <p className="text-paragraph-secondary">
            The Switch component has a prop called disabled which allows you to
            disable the button. The disabled button is compatable with all
            styles, sizes, and variants.
          </p>
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
                    isOn={isSwitchOn}
                    handleToggle={toggleSwitch}
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
          <h1 className="text-2xl font-semibold text-white ">Size Switch</h1>
          <p className="text-paragraph-secondary">
            The Switch component has a prop called size which allows you to change
            the size of the button.
          </p>
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
                  />
                </div>
              </div>
            }
            githubLink="https://github.com/prudra2000/Velocify"
            code={sizeSwitch}
          />
        </div>

        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">Switch Variants</h1>
          <p className="text-paragraph-secondary">
            The Switch component offers various variants, including default,
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
                  code={secondarySwitch}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Switch
                      isOn={isSwitchOn}
                      handleToggle={toggleSwitch}
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
                      isOn={isSwitchOn}
                      handleToggle={toggleSwitch}
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
          <h1 className="text-xl font-semibold text-white ">Warning Variant</h1>
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
                      isOn={isSwitchOn}
                      handleToggle={toggleSwitch}
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
          <h1 className="text-xl font-semibold text-white ">Success Variant</h1>
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
                      isOn={isSwitchOn}
                      handleToggle={toggleSwitch}
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
                      isOn={isSwitchOn}
                      handleToggle={toggleSwitch}
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
  );
}
