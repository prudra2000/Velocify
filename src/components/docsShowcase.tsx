"use client";
import React, { useState } from "react";
import { IconButton } from "./iconButton";
import { Copy, Github } from "lucide-react";
import { Button } from "./button";
import Tooltip from "./tooltip";

interface ElementShowcaseProps {
  element: React.ReactNode;
  codeShowcase: React.ReactNode;
  githubLink: string;
  code: string;
}

const ElementShowcase: React.FC<ElementShowcaseProps> = ({
  element,
  codeShowcase,
  githubLink,
  code,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setIsCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
      } catch (err) {
        console.error("Fallback: Failed to copy: ", err);
      }
      document.body.removeChild(textarea); 
    }
  };
  return (
    <div className="flex flex-col border border-1 border-white/10 rounded-lg justify-center">
      <div className="flex w-full justify-center items-center p-5 md:p-10 overflow-y-auto max-h-[40vh] md:max-h-[50vh]"> 
        {element}
      </div>
      <div className="border-y border-1 border-white/10 bg-[#1e293b] ">
        {codeShowcase}
      </div>
      <div className="flex flex-row w-full justify-center items-center gap-x-2  px-10 py-2 z-1">
        {/* <Button
          variant="default"
          size="default"
          onClick={() => window.open(githubLink, "_blank")}
          leftIcon={<Github className="w-4 h-4" />}
        >
          <p className="text-xs">GitHub</p>
        </Button>
        
        <Tooltip text="Copy to clipboard" className="" position="top">
          <Button
            variant="default"
            size="default"
            onClick={copyToClipboard}
            leftIcon={<Copy className="w-4 h-4" />}
          >
            <p className="text-xs">Copy</p>
          </Button>
        </Tooltip> */}
      </div>
    </div>
  );
};

export default ElementShowcase;
