"use client";
import React, { useState } from "react";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import Table from "@/components/table";
import TableProps from "@/components/Docs Components/tableProps";
import RatingStars from "@/components/ratingstars";
import { CodeDialog } from "@/components/codeDialog";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";


export default function Home() {
  const buttonTableColumns = [{ col1: "Prop", col2: "Type", col3: "Default" }];
  const buttonTableData = [
    { prop: "rating*", type: "number", default: "-" },
    { prop: "starColor", type: "string", default: "-" },
    { prop: "clickable", type: "boolean", default: "-" },
    { prop: "maxRating", type: "number", default: "5" },
    { prop: "size", type: "string", default: "default" },
    { prop: "className", type: "boolean", default: "false" },
    { prop: "disabled", type: "boolean", default: "false" },
  ];
  const buttonProps = [{ col1: "Prop", col2: "Types", col3: "Default" }];
  const buttonData = [{ prop: "size", type: "default, small, large" }];
  const basicRatings = `<RatingStars
  rating={0}
  clickable={true}
  onChange={(rating) => {}}
  starColor="#F8CC38"
/>`;
  const disabledRatingStars = `<RatingStars
  rating={4}
  onChange={(rating) => {}}
  starColor="#F8CC38"
  disabled={true}
/>`;
  const maxRatingStars = `<RatingStars
  rating={7}
  onChange={(rating) => {}}
  starColor="#F8CC38"
  clickable={true}
  maxRating={10}
/>`;
  const sizeRatingStars = `<RatingStars
  rating={1}
  clickable={true}
  size="small"
  onChange={(rating) => {}}
  starColor="#F8CC38"
/>
<RatingStars
  rating={3}
  clickable={true}
  size="default"
  onChange={(rating) => {}}
  starColor="#F8CC38"
/>
<RatingStars
  rating={5}
  clickable={true}
  size="large"
  onChange={(rating) => {}}
  starColor="#F8CC38"
/>`;
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
        <title>Velocify UI - Rating Stars</title>
        <meta
          name="description"
          content="Check out the Rating Stars component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">Rating Stars</h2>
            <p className="text-paragraph-secondary">
              The RatingStars component provides a dynamic and customizable way
              to display star-based ratings in your application. It allows users
              to interactively select or view ratings with options for different
              sizes, colors, and clickability. This component supports various
              configurations such as setting the maximum rating value, disabling
              interaction, and applying custom styles. Ideal for feedback
              systems or product reviews, RatingStars ensures a visually
              appealing and user-friendly experience while maintaining full
              flexibility for integration into any design system.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Rating Stars Installation
            </h1>
            <CopyCodeDisplay
              fileName="ratingstars"
              handleOpenDialog={handleOpenDialog}
            />
            <CodeDialog
              isOpen={isDialogOpen}
              onClose={handleCloseDialog}
              title="Rating Stars"
              fileName="ratingstars"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Basic Rating Stars
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicRatings}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <RatingStars
                      rating={0}
                      clickable={true}
                      size="default"
                      onChange={(rating) => {}}
                      starColor="#F8CC38"
                    />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicRatings}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Rating Stars API Reference
            </h1>
            <Table data={buttonTableData} columns={buttonTableColumns} />
            <TableProps data={buttonData} columns={buttonProps} />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Disabled Rating Stars
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={disabledRatingStars}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <RatingStars
                      rating={4}
                      size="default"
                      onChange={(rating) => {}}
                      starColor="#F8CC38"
                      disabled={true}
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={disabledRatingStars}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Rating Stars - Star Variable Size
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={maxRatingStars}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <RatingStars
                      rating={7}
                      size="default"
                      onChange={(rating) => {}}
                      starColor="#F8CC38"
                      clickable={true}
                      maxRating={10}
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={maxRatingStars}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Rating Stars - Sizes
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={sizeRatingStars}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-col gap-y-5 px-10 justify-center items-center">
                    <RatingStars
                      rating={1}
                      clickable={true}
                      size="small"
                      onChange={(rating) => {}}
                      starColor="#F8CC38"
                    />
                    <RatingStars
                      rating={3}
                      clickable={true}
                      size="default"
                      onChange={(rating) => {}}
                      starColor="#F8CC38"
                    />
                    <RatingStars
                      rating={5}
                      clickable={true}
                      size="large"
                      onChange={(rating) => {}}
                      starColor="#F8CC38"
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={sizeRatingStars}
            />
          </div>
        </div>
      </main>
    </>
  );
}
