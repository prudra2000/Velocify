"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface docsMenuItemProps {
  className?: string;
  text: string;
  hrefText: string;
  isActive: boolean;
  disabled?: boolean;
}

const DocsMenuItem: React.FC<docsMenuItemProps> = ({
  className,
  text,
  hrefText,
  isActive,
  disabled,
}) => {
  return (
    <a href={`/docs/${hrefText}`}>
      <div
        className={`flex flex-row  px-4 py-2 justify-start items-end rounded-lg text-sm bg-gray-900/20 text-paragraph-secondary hover:bg-gray-800/80  ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <p className={`${isActive ? "text-[#F8CC38]" : "text-paragraph-secondary"}`}>{text}</p>
      </div>
    </a>
  );
};
DocsMenuItem.displayName = "DocsMenuItem";

interface docsMenuDividerProps {
  className?: string;
  sectionTitle: string;
}

const DocsMenuDivider: React.FC<docsMenuDividerProps> = ({ sectionTitle }) => {
  return (
    <div className="flex flex-col ">
      <div
        className={`flex flex-row justify-between items-center px-4 py-2 rounded-lg text-sm bg-gray-900/60 text-paragraph-secondary`}
      >
        {sectionTitle.toUpperCase()}
        <ChevronRight
            className={`w-4 h-4 float-right stroke-[#F8CC38] rotate-90`}
          />
      </div>
    </div>
  );
};
DocsMenuDivider.displayName = "DocsMenuDivider";

const DocsMenuSection = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" text-white ">
      <button
        className="w-full text-left px-2 p-2 mb-2 bg-gray-900/20 text-white hover:bg-gray-800/80 rounded-lg outline outline-1 outline-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row justify-start items-center gap-x-1 ">
          <ChevronRight
            className={`w-4 h-4 float-right stroke-[#F8CC38] ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          <h2 className="text-lg font-bold">{text}</h2>
        </div>
      </button>
      {isOpen && <div className="flex flex-col  gap-y-2 px-4">{children}</div>}
    </div>
  );
};
DocsMenuSection.displayName = "DocsMenuSection";

const DocsMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-y-2 p-1 w-full ">{children}</div>;
};
DocsMenu.displayName = "DocsMenu";

export { DocsMenuItem, DocsMenuSection, DocsMenu, DocsMenuDivider };
