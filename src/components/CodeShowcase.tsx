"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconButton } from "./iconButton";
import { Copy, Github } from "lucide-react";
import Tooltip from "./tooltip";
interface CodeShowcaseProps {
  code: string;
  githubLink: string;
}

const CodeShowcase: React.FC<CodeShowcaseProps> = ({ code, githubLink }) => {
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
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="relative ">
      <div className="">
      <Tooltip
        text={isCopied ? "Copied!" : "Copy to clipboard"}
        position="left"
        className="absolute top-3.5 right-10"
      >
        <IconButton
          onClick={copyToClipboard}
          className="absolute top-3 right-3 md:right-3 stroke-white"
          variant="ghost"
          size="default"
        >
          <Copy className="w-3 h-3" />
        </IconButton>
      </Tooltip>
      </div>
      <SyntaxHighlighter
        language="tsx"
        style={atomDark}
        customStyle={{
          color: "#ffffff",
          background: "#1e293b",
          fontFamily: '"Fira Code", "Fira Mono", monospace',
          fontSize: "0.8rem",
          padding: "0px",
          paddingTop: "10px",
          paddingBottom: "10px",
          height: "100%",
          border: "",
          boxShadow: "",
          overflowY: "auto",
          lineHeight: "1",
          
        }}
        className="overflow-x-auto w-full"
        wrapLines={true}
        showLineNumbers={true}
        lineNumberStyle={{
          color: "#888",
          backgroundColor: "#1e293b",
          fontSize: "0.8rem",
          paddingRight: "10px",
          paddingLeft: "20px",
        }}
        lineProps={{
          style: { wordBreak: "normal", whiteSpace: "pre" },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeShowcase;
