"use client";
import React, { useState } from "react"; // Add this import
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import Table from "@/components/table";
import Avatar from "@/components/avatar";
import { Copy, X, Zap } from "lucide-react";
import { Button } from "@/components/button";
import TableProps from "@/components/Docs Components/tableProps";
import { CodeDialog } from "@/components/codeDialog";
import CopyCodeDisplay from "@/components/copyCodeDiaplay";
import RatingsBreakdown from "@/components/ratingsbreakdown";
import RatingsBreakdownExpandable from "@/components/ratingsBreakdownExpandable";

export default function Home() {
  const ratingsBreakdownTableColumns = [
    { col1: "Prop", col2: "Type", col3: "Default" },
  ];
  const ratingsBreakdownTableData = [
    { prop: "asChild", type: "boolean", default: "false" },
    { prop: "children", type: "React.ReactNode", default: "-" },
    { prop: "title", type: "string", default: "Customer Reviews" },
    { prop: "oneStars", type: "number", default: "-" },
    { prop: "twoStars", type: "number", default: "-" },
    { prop: "threeStars", type: "number", default: "-" },
    { prop: "fourStars", type: "number", default: "-" },
    { prop: "fiveStars", type: "number", default: "-" },
    { prop: "accentColor", type: "string", default: "-" },
  ];
  const ratingsBreakdownProps = [
    { col1: "Prop", col2: "Types", col3: "Default" },
  ];
  const ratingsBreakdownData = [
    { prop: "title", type: "string", default: "Customer Reviews" },
  ];
  const basicRatingsBreakdown = `<RatingsBreakdown
  oneStars={1}
  twoStars={300}
  threeStars={200}
  fourStars={500}
  fiveStars={700}
  accentColor="#F8CC38"
/>`;
  const ratingsBreakdownExpandable = `<RatingsBreakdownExpandable
  oneStars={1}
  twoStars={300}
  threeStars={200}
  fourStars={500}
  fiveStars={700}
  accentColor="#F8CC38"
/>`;
  const roundedButton = `<Button variant="default" rounded="none">
  Rounded None
</Button>
<Button variant="default" rounded="default">
  Rounded Default
</Button>
<Button variant="default" rounded="full">
  Rounded Full
</Button>`;

  const [isRatingsBreakdownDialogOpen, setIsRatingsBreakdownDialogOpen] =
    useState(false);

  const [isRatingsStarDialogOpen, setIsRatingsStarDialogOpen] = useState(false);
  const [
    isRatingsBreakdownExpandableDialogOpen,
    setIsRatingsBreakdownExpandableDialogOpen,
  ] = useState(false);

  const handleOpenRatingsBreakdownDialog = () => {
    setIsRatingsBreakdownDialogOpen(true);
  };
  const handleOpenRatingsStarDialog = () => {
    setIsRatingsStarDialogOpen(true);
  };
  const handleOpenRatingsBreakdownExpandableDialog = () => {
    setIsRatingsBreakdownExpandableDialogOpen(true);
  };

  const handleCloseRatingsBreakdownDialog = () => {
    setIsRatingsBreakdownDialogOpen(false);
  };
  const handleCloseRatingsStarDialog = () => {
    setIsRatingsStarDialogOpen(false);
  };
  const handleCloseRatingsBreakdownExpandableDialog = () => {
    setIsRatingsBreakdownExpandableDialogOpen(false);
  };
  return (
    <>
      <head>
        <title>Velocify UI - Ratings Breakdown</title>
        <meta
          name="description"
          content="Check out the Ratings Breakdown component in Velocify UI"
        />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center  z-10">
        <div className="flex flex-col w-full md:w-3/4 mt-5 gap-y-5">
          <div className="flex flex-col mt-5 gap-y-3">
            <h2 className="text-3xl font-bold text-white ">
              Ratings Breakdown
            </h2>
            <p className="text-paragraph-secondary">
              The RatingsBreakdown component provides a clear, visual summary of
              user ratings across multiple categories, such as 1-star to 5-star
              ratings. It allows developers to easily integrate a customizable
              ratings breakdown into their application with options for
              displaying different rating counts and accent colors. The
              RatingsBreakdownExpandable version offers an expandable view,
              making it ideal for cases where you want to provide users with a
              more interactive and detailed experience by showing or hiding
              additional rating details. Both components enhance the overall
              user interface by providing structured feedback representation.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Ratings Star Installation
            </h1>
            <CopyCodeDisplay
              fileName="ratingstars"
              handleOpenDialog={handleOpenRatingsStarDialog}
            />
            <CodeDialog
              isOpen={isRatingsStarDialogOpen}
              onClose={handleCloseRatingsStarDialog}
              title="Ratings Star"
              fileName="ratingstars"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Ratings Breakdown Installation
            </h1>
            <CopyCodeDisplay
              fileName="ratingsbreakdown"
              handleOpenDialog={handleOpenRatingsBreakdownDialog}
            />
            <CodeDialog
              isOpen={isRatingsBreakdownDialogOpen}
              onClose={handleCloseRatingsBreakdownDialog}
              title="Ratings Breakdown"
              fileName="ratingsbreakdown"
              className="bg-dark-primary/80"
            />
          </div>

          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Basic Ratings Breakdown
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <ElementShowcase
                codeShowcase={
                  <CodeShowcase
                    code={basicRatingsBreakdown}
                    githubLink="https://github.com/prudra2000/Velocify"
                  />
                }
                element={
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <RatingsBreakdown
                      oneStars={1}
                      twoStars={300}
                      threeStars={200}
                      fourStars={500}
                      fiveStars={700}
                      accentColor="#F8CC38"
                    />
                  </div>
                }
                githubLink="https://github.com/prudra2000/Velocify"
                code={basicRatingsBreakdown}
              />
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Ratings Breakdown API Reference
            </h1>
            <Table
              data={ratingsBreakdownTableData}
              columns={ratingsBreakdownTableColumns}
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-3">
            <h1 className="text-2xl font-semibold text-white ">
              Ratings Breakdown - Expandable Installation
            </h1>
            <CopyCodeDisplay
              fileName="ratingsBreakdownExpandable"
              handleOpenDialog={handleOpenRatingsBreakdownExpandableDialog}
            />
            <CodeDialog
              isOpen={isRatingsBreakdownExpandableDialogOpen}
              onClose={handleCloseRatingsBreakdownExpandableDialog}
              title="Ratings Breakdown - Expandable"
              fileName="ratingsBreakdownExpandable"
              className="bg-dark-primary/80"
            />
          </div>
          <div className="flex flex-col mt-5 gap-y-2" id="size">
            <h1 className="text-2xl font-semibold text-white ">
              Ratings Breakdown - Expandable
            </h1>
            <p className="text-paragraph-secondary"></p>
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={ratingsBreakdownExpandable}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <RatingsBreakdownExpandable
                      oneStars={1}
                      twoStars={300}
                      threeStars={200}
                      fourStars={500}
                      fiveStars={700}
                      accentColor="#F8CC38"
                    />
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={ratingsBreakdownExpandable}
            />
          </div>
        </div>
      </main>
    </>
  );
}
