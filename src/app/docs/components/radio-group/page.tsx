"use client";
import React, { useEffect, useState } from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import Table from "@/components/table";
import RadioButtonGroup from "@/components/radioButtonGroup";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";
import { CodeDialog } from "@/components/codeDialog";

export default function Home() {
  const options = [
    { value: "Burgers", label: "Burgers", alt: "Burgers" },
    { value: "Pizza", label: "Pizza", alt: "Pizza" },
    { value: "Pasta", label: "Pasta", alt: "Pasta" },
  ];
  const smallsizeOptions = [{ value: "small", label: "Small", alt: "Small" }];
  const defaultsizeOptions = [
    { value: "default", label: "Default", alt: "Default" },
  ];

  const largesizeOptions = [{ value: "large", label: "Large", alt: "Large" }];

  const [defaultSelectedValue, setDefaultSelectedValue] = useState("Burgers");

  const [smallSelectedValue, setSmallSelectedValue] = useState("small");
  const [defaultSSelectedValue, setDefaultSSelectedValue] = useState("default");
  const [largeSelectedValue, setLargeSelectedValue] = useState("large");

  const switchTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const switchTableData = [
    { prop: "isOn", type: "boolean", default: "false" },
    { prop: "handleToggle", type: "function", default: "-" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "size", type: "string", default: "default" },
    { prop: "rounded", type: "string", default: "default" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  const basicRadioGroup = `<RadioButtonGroup
  label="What your favorite food?"
  labelClassName="text-xl font-bold text-white"
  name={"favorite-food"}
  options={options}
  selectedValue={defaultSelectedValue}
  onChange={(value: string) => setDefaultSelectedValue(value)}
/>`;
  const iconRadioGroup = `<RadioGroup
  variant="default"
  avatar={
    <Zap 
      className="w-5 h-5" 
    />
}>
  Icon RadioGroup
</RadioGroup>`;
  const disabledRadioGroup = `<RadioButtonGroup
  label="What your favorite food?"
  labelClassName="text-xl font-bold text-white"
  name={"favorite-food-disabled"}
  options={options}
  selectedValue={""}
  onChange={(value: string) => {}}
  disabled={true}
/>`;
  const sizeRadioGroup = `<RadioGroup
  isOn={isRadioGroupOn}
  handleToggle={toggleRadioGroup}
  size="small"
/>
<RadioGroup
  isOn={isRadioGroupOn}
  handleToggle={toggleRadioGroup}
  size="default"
/>
<RadioGroup
  isOn={isRadioGroupOn}
  handleToggle={toggleRadioGroup}
  size="large"
/>`;
  const avatarRadioGroup = `<RadioGroup
  variant="default"
  avatar={
    <Avatar
      alt={"avatar"}
      src={"/avatarImage.png"}
      width={20}
      height={20}
    />
}>
  Avatar RadioGroup
</RadioGroup>`;
  const [isRadioButtonDialogOpen, setIsRadioButtonDialogOpen] = useState(false);
  const [isRadioGroupDialogOpen, setIsRadioGroupDialogOpen] = useState(false);

  const handleOpenRadioButtonDialog = () => {
    setIsRadioButtonDialogOpen(true);
  };
  const handleOpenRadioGroupDialog = () => {
    setIsRadioGroupDialogOpen(true);
  };

  const handleCloseRadioButtonDialog = () => {
    setIsRadioButtonDialogOpen(false);
  };
  const handleCloseRadioGroupDialog = () => {
    setIsRadioGroupDialogOpen(false);
  };
  return (
    <>
      <head>
        <title>Velocify UI - Radio Group</title>
        <meta
          name="description"
          content="Check out the Radio Group component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Radio Group</h2>
            <p className="text-paragraph-secondary">
              The RadioButtonGroup component is a flexible and customizable
              radio button set designed to handle various input scenarios within
              your UI. It supports different configurations, including
              orientation, size, and rounding, allowing you to adapt the radio
              buttons to fit your design needs. With options for custom labels,
              variants, and color themes, this component ensures that your
              selection interface is both intuitive and visually consistent
              across your application. Additionally, the component is fully
              accessible, with support for disabled states and custom labeling,
              making it an essential part of any form or selection-based UI.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Radio Button Installation
            </h1>
            <CopyCodeDisplay
              fileName="radioButton"
              handleOpenDialog={handleOpenRadioButtonDialog}
            />
            <CodeDialog
              isOpen={isRadioButtonDialogOpen}
              onClose={handleCloseRadioButtonDialog}
              title="Radio Button"
              fileName="radioButton"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Radio Group Installation
            </h1>
            <CopyCodeDisplay
              fileName="radioButtonGroup"
              handleOpenDialog={handleOpenRadioGroupDialog}
            />
            <CodeDialog
              isOpen={isRadioGroupDialogOpen}
              onClose={handleCloseRadioGroupDialog}
              title="Radio Group"
              fileName="radioButtonGroup"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Basic Radio Group
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicRadioGroup}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <RadioButtonGroup
                      label="What your favorite food?"
                      labelClassName="text-xl font-bold text-white"
                      name={"favorite-food"}
                      options={options}
                      selectedValue={defaultSelectedValue}
                      onChange={(value: string) =>
                        setDefaultSelectedValue(value)
                      }
                    />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicRadioGroup}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Radio Group API Reference
            </h1>
            <Table data={switchTableData} columns={switchTableColumns} />{" "}
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Radio Group
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledRadioGroup}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <RadioButtonGroup
                      label="What your favorite food?"
                      labelClassName="text-xl font-bold text-white"
                      name={"favorite-food-disabled"}
                      options={options}
                      selectedValue={""}
                      onChange={(value: string) => {}}
                      disabled={true}
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledRadioGroup}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Radio Group - Sizes
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeRadioGroup}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10 justify-center items-center">
                    <RadioButtonGroup
                      name={"small"}
                      options={smallsizeOptions}
                      selectedValue={smallSelectedValue}
                      onChange={(value: string) => setSmallSelectedValue(value)}
                      size="small"
                      selectedColor="default"
                    />
                    <RadioButtonGroup
                      name={"default"}
                      options={defaultsizeOptions}
                      selectedValue={defaultSSelectedValue}
                      onChange={(value: string) =>
                        setDefaultSSelectedValue(value)
                      }
                      size="default"
                      selectedColor="default"
                    />
                    <RadioButtonGroup
                      name={"large"}
                      options={largesizeOptions}
                      selectedValue={largeSelectedValue}
                      onChange={(value: string) => setLargeSelectedValue(value)}
                      size="large"
                      selectedColor="default"
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={sizeRadioGroup}
            />
          </div>

        
        </div>
      </main>
    </>
  );
}
