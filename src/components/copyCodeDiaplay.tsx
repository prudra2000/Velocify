import { ChevronRight, Code, Copy } from "lucide-react";
import React from "react";
import { Button } from "./button";

interface CopyCodeDisplayProps {
  handleOpenDialog: () => void;
  fileName: string;
}

const CopyCodeDisplay: React.FC<CopyCodeDisplayProps> = ({ fileName, handleOpenDialog }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-full p-4 bg-accent-primary/30 rounded-lg border-2 border-accent-primary">
      <div className="flex flex-row justify-start items-center gap-x-2">
        <Code className="w-4 h-4 stroke-white" />
        <p className="text-white text-sm"><span className="font-bold underline">{fileName}.tsx</span></p>
      </div>
      <div className="flex flex-row justify-center items-center">
      <Button leftIcon={<Copy className="w-4 h-4" />} onClick={handleOpenDialog}>Copy Code</Button>
      </div>
    </div>
  );
};

export default CopyCodeDisplay;
