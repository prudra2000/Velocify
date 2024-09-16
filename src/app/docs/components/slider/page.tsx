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
import Slider from "@/components/slider";

export default function Home() {
  const sliderTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const sliderTableData = [
    { prop: "min", type: "number", default: "0" },
    { prop: "max", type: "number", default: "100" },
    { prop: "step", type: "number", default: "1" },
    { prop: "initialValue", type: "number", default: "0" },
    { prop: "onChange", type: "function", default: "-" },
    { prop: "stepMark", type: "boolean", default: "true" },
    { prop: "className", type: "string", default: "-" },
    { prop: "sliderVariant", type: "string", default: "default" },
    { prop: "rounded", type: "string", default: "default" },
    { prop: "size", type: "string", default: "default" },
    { prop: "thumbVariant", type: "string", default: "default" },
    { prop: "thumbSize", type: "string", default: "default" },
    { prop: "stepVariant", type: "string", default: "default" },
    { prop: "stepSize", type: "string", default: "default" },
    { prop: "stepRound", type: "string", default: "default" },
  ];
  const sliderProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const sliderData = [
    { prop: "size", type: "default, small, large" },
    {
      prop: "sliderVariant",
      type: "default, secondary, warning, success, info, error, custom",
    },
    { prop: "rounded", type: "full, medium, large, small" },
    { prop: "thumbVariant", type: "default, secondary, custom" },
    { prop: "thumbSize", type: "default, small, large" },
    { prop: "stepVariant", type: "default, secondary, custom" },
    { prop: "stepSize", type: "default, small" },
    { prop: "stepRound", type: "default, small, large" },
  ];
  const basicSlider = `<Slider />`;
  const disabledSlider = `<Slider disabled={true} />`;
  const sizeSwitch = `<Slider size="small" />
<Slider size="default" />
<Slider size="large" />`;
  const stepSlider = `<Slider initialValue={50} step={10} />`;
  const secondarySlider = `<Slider initialValue={50} step={10} sliderVariant="secondary" />`;

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
        <title>Velocify UI - Slider</title>
        <meta
          name="description"
          content="Check out the Slider component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Slider</h2>
            <p className="text-paragraph-secondary">
              The Slider component in Velocify UI offers a highly customizable
              range input element designed to handle dynamic values with
              precision. It supports a variety of configurations such as min,
              max, step, and initialValue, providing flexibility in setting the
              value range and granularity. The component also includes style
              variants, size options, and the ability to customize the
              appearance of the slider thumb and step markers. This makes the
              Slider ideal for scenarios where users need to adjust values
              within a range, with the added benefit of smooth interaction and
              adaptability.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Slider Installation
            </h1>
            <CopyCodeDisplay
              fileName="slider"
              handleOpenDialog={handleOpenDialog}
            />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Slider"
              fileName="slider"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Slider Basic Usage
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicSlider}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="w-56">
                      <Slider />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicSlider}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Slider API Reference
            </h1>
            <Table data={sliderTableData} columns={sliderTableColumns} />
            <TableProps data={sliderData} columns={sliderProps} />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Slider
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledSlider}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <div className="w-56">
                      <Slider disabled={true} />
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledSlider}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Slider - Steps
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={stepSlider}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-10 px-10 justify-center items-center">
                    <div className="w-56">
                      <Slider initialValue={50} step={10} />
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={stepSlider}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Slider - Sizes
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
                  <div className="flex flex-col gap-y-10 px-10 justify-center items-center">
                    <div className="w-56">
                      <Slider size="small" initialValue={20} />
                    </div>
                    <div className="w-56">
                      <Slider size="default" initialValue={50} />
                    </div>
                    <div className="w-56">
                      <Slider size="large" initialValue={70} />
                    </div>
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
                    code={secondarySlider}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <div className="w-56">
                        <Slider
                          initialValue={50}
                          step={10}
                          sliderVariant="secondary"
                        />
                      </div>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={secondarySlider}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
