"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface docsMenuItemProps {
  className?: string;
  text: string;
  hrefText: string;
}

const DocsMenuItem: React.FC<docsMenuItemProps> = ({
  className,
  text,
  hrefText,
}) => {
  return (
    <a href={`/docs/${hrefText}`}>
      <div
        className={`flex flex-row  px-4 py-2 justify-start items-end rounded-lg text-sm bg-gray-900/20 text-gray-400 hover:bg-gray-800/80  ${className}`}
      >
        <p>{text}</p>
      </div>
    </a>
  );
};
DocsMenuItem.displayName = "DocsMenuItem";

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
        className="w-full text-left px-2 p-2 mb-2 bg-gray-900/20 text-white hover:bg-gray-800/80 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row justify-start items-center gap-x-1 ">
          <ChevronRight
            className={`w-4 h-4 float-right stroke-[#F8CC38] ${isOpen ? "rotate-90" : ""}`}
          />
          <h2 className="text-lg font-bold">{text}</h2>
        </div>
      </button>
      {isOpen && <div className="flex flex-col gap-y-2 px-4">{children}</div>}
    </div>
  );
};
DocsMenuSection.displayName = "DocsMenuSection";

const DocsMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-y-2 w-full">{children}</div>;
};
DocsMenu.displayName = "DocsMenu";

export { DocsMenuItem, DocsMenuSection, DocsMenu };
