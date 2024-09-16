import { Code } from "lucide-react";
import React from "react";
import { Button } from "./button";

interface CopyCodeDisplayProps {
  handleOpenDialog: () => void;
  fileName: string;
}

const CopyCodeDisplay: React.FC<CopyCodeDisplayProps> = ({ fileName, handleOpenDialog }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 justify-between items-center w-full h-full p-4 bg-accent-primary/30 rounded-lg border-2 border-accent-primary">
      <div className="flex flex-row justify-start items-center gap-x-2">
        <p className="text-white text-sm"><span className="font-bold underline">{fileName}.tsx</span></p>
      </div>
      <div className="flex flex-row justify-center items-center">
      <Button leftIcon={<Code className="w-3 h-3 sm:w-4 sm:h-4 stroke-white" />} onClick={handleOpenDialog}>Copy Code</Button>
      </div>
    </div>
  );
};

export default CopyCodeDisplay;
