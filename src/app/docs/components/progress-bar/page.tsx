"use client";
import React, { useState } from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import Table from "@/components/table";
import TableProps from "@/components/Docs Components/tableProps";
import { CodeDialog } from "@/components/codeDialog";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";
import ProgressBar from "@/components/progressbar";

export default function Home() {
  const progressBarTableColumns = [
    { col1: "Prop", col2: "Type", col3: "Default" },
  ];
  const progressBarTableData = [
    { prop: "progress*", type: "number", default: "-" },
    { prop: "progressBarColor", type: "string", default: "#F8CC38" },
    { prop: "variant", type: "string", default: "default" },
    { prop: "displayPercentage", type: "boolean", default: "true" },
    { prop: "disabled", type: "boolean", default: "false" },
    { prop: "size", type: "string", default: "default" },
  ];
  const progressBarProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const progressBarData = [
    {
      prop: "variant",
      type: "default, secondary",
    },
    { prop: "size", type: "default, small, large" },
  ];
  const basicProgressBar = `<ProgressBar progress={50} />>`;
  const disabledProgressBar = `<ProgressBar progress={50} disabled={true} />`;
  const sizeProgressBar = `<ProgressBar progress={50} size="small" />
<ProgressBar progress={50} size="default" />
<ProgressBar progress={50} size="large" />`;
  const roundedProgressBar = `<ProgressBar progress={50} rounded="full" />
<ProgressBar progress={50} rounded="default" />
<ProgressBar progress={50} rounded="none" />`;
  const secondaryProgressBar = `<ProgressBar progress={50} variant="secondary" />`;

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
        <title>Velocify UI - Progress Bar</title>
        <meta
          name="description"
          content="Check out the Progress Bar component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Progress Bar</h2>
            <p className="text-paragraph-secondary">
              The Progress Bar component in Velocify UI provides a flexible and
              customizable solution to visually represent task completion or
              progress. It supports various configurations including size
              options &#40;small, default, large&#41;, style variants &#40;default,
              secondary&#41;, and the ability to display percentage labels.
              Additional features such as rounded corners and disabled states
              make it adaptable to different design needs. The component&apos;s
              default progress bar color is customizable, and it seamlessly
              integrates with your project to deliver a sleek, dynamic progress
              indicator.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Progress Bar Installation
            </h1>
            <CopyCodeDisplay
              fileName="progressbar"
              handleOpenDialog={handleOpenDialog}
            />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Progress Bar"
              fileName="progressbar"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Basic Progress Bar
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicProgressBar}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="w-44 md:w-96">
                      <ProgressBar progress={50} />
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicProgressBar}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Progress Bar API Reference
            </h1>
            <Table
              data={progressBarTableData}
              columns={progressBarTableColumns}
            />{" "}
            <TableProps data={progressBarData} columns={progressBarProps} />{" "}
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Progress Bar
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledProgressBar}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <div className="w-44 md:w-96">
                      <ProgressBar progress={50} disabled={true} />
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledProgressBar}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2" id="size">
            <h1 className="text-2xl font-semibold text-white ">
              Progress Bar - Sizes
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeProgressBar}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-5 px-10">
                    <div className="w-44 md:w-96">
                      <ProgressBar progress={50} size="small" />
                    </div>
                    <div className="w-44 md:w-96">
                      <ProgressBar progress={50} size="default" />
                    </div>
                    <div className="w-44 md:w-96">
                      <ProgressBar progress={50} size="large" />
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={sizeProgressBar}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2" id="avatar">
            <h1 className="text-2xl font-semibold text-white ">
              Progress Bar - Rounded
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={roundedProgressBar}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-5 px-10">
                    <div className="w-44 md:w-96">
                      <ProgressBar progress={50} rounded="full" />
                    </div>
                    <div className="w-44 md:w-96">
                      <ProgressBar progress={50} rounded="default" />
                    </div>
                    <div className="w-44 md:w-96">
                      <ProgressBar progress={50} rounded="none" />
                    </div>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={roundedProgressBar}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2" id="variant">
            <h1 className="text-2xl font-semibold text-white ">
              Progress Bar - Style Variants
            </h1>
            <p className="text-paragraph-secondary"></p>
          </div>
          <div className="flex flex-col gap-y-3">
            <h1 className="text-xl font-semibold text-white ">
              Secondary Variant
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={secondaryProgressBar}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <div className="flex flex-row gap-x-5 px-10">
                      <div className="w-44 md:w-96">
                        <ProgressBar progress={50} variant="secondary" />
                      </div>
                    </div>
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={secondaryProgressBar}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
