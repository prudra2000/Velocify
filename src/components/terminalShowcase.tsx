"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconButton } from "./iconButton";
import { Copy } from "lucide-react";
import Tooltip from "./tooltip";
interface TerminalShowcaseProps {
  command: string;
}

const TerminalShowcase: React.FC<TerminalShowcaseProps> = ({
  command,
}) => {
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      // Check if clipboard API is available
      navigator.clipboard
        .writeText(command)
        .then(() => {
          setIsCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      // Fallback for unsupported clipboard
      const textarea = document.createElement("textarea");
      textarea.value = command;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy"); // Fallback copy command
        setIsCopied(true);
      } catch (err) {
        console.error("Fallback: Failed to copy: ", err);
      }
      document.body.removeChild(textarea); // Clean up
    }
  };
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="relative border border-1 border-white/10 rounded-lg bg-[#1e293b]">
      <Tooltip text="Copy to clipboard" className="absolute top-3.5 right-12">
        <IconButton
          onClick={copyToClipboard}
          className="absolute top-3 right-3 md:top-3 md:right-3 stroke-white"
          variant="ghost"
          size="default"
        >
          <Copy className="w-3 h-3" />
        </IconButton>
      </Tooltip>

      <SyntaxHighlighter
        language="tsx"
        style={atomDark}
        customStyle={{
          color: "#ffffff",
          background: "#1e293b",
          fontFamily: '"Fira Code", "Fira Mono", monospace',
          fontSize: "0.8rem",
          padding: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "20px",
          paddingRight: "50px",
          height: "100%",
          border: "",
          boxShadow: "",
          overflowY: "auto",
          lineHeight: "1",
        }}
        className="overflow-x-auto w-full"
        wrapLines={true}
        lineProps={{
          style: { wordBreak: "normal", whiteSpace: "pre" },
        }}
      >
        {command}
      </SyntaxHighlighter>
    </div>
  );
};

export default TerminalShowcase;
