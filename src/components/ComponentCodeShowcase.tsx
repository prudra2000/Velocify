"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconButton } from "./iconButton";
import { Copy, Github } from "lucide-react";
import Tooltip from "./tooltip";
import { useEffect } from "react"; // Add this import

interface CodeShowcaseProps {
  githubFileUrl: string; // Change this prop
  githubLink: string;
}

const ComponentCodeShowcase: React.FC<CodeShowcaseProps> = ({
  githubFileUrl,
  githubLink,
}) => {
  const [code, setCode] = useState(""); // Initialize code state

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      // Check if clipboard API is available
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setIsCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      // Fallback for unsupported clipboard
      const textarea = document.createElement("textarea");
      textarea.value = code;
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
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(githubFileUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
        }
        const data = await response.text();
        setCode(data); // Set fetched code
      } catch (error) {
        console.error("Error fetching code: ", error);
      }
    };
    fetchCode();
  }, [githubFileUrl]); // Fetch code when githubFileUrl changes

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
      {/* <IconButton
          onClick={() => window.open(githubLink, "_blank")}
          className="absolute top-10 right-3 md:top-10 md:right-3 stroke-white"
          variant="ghost"
          size="default"
        >
          <Github className="w-3 h-3" />
        </IconButton> */}

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
          border: "1px solid rgba(255, 255, 255, 0.1)", // Updated outline to border
          boxShadow: "",
          overflowY: "auto",
          lineHeight: "1",
          maxHeight: "50vh",
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

export default ComponentCodeShowcase;
