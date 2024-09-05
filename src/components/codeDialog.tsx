import { ReactNode } from "react";
import { Button } from "./button";
import { IconButton } from "./iconButton";
import { Github, X } from "lucide-react";
import CodeShowcase from "./CodeShowcase";
import ComponentCodeShowcase from "./ComponentCodeShowcase";

interface DialogProps {
  ref?: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  fileName: string;
  topbar?: ReactNode;
}

export const CodeDialog: React.FC<DialogProps> = ({
  ref,
  isOpen,
  onClose,
  title,
  className,
  fileName,
  topbar,
}) => {
  if (!isOpen) return null;
  const fileURL = `https://raw.githubusercontent.com/prudra2000/Velocify/main/src/components/${fileName}.tsx`;
  const repoURL = `https://github.com/prudra2000/Velocify/blob/main/src/components/${fileName}.tsx`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-white backdrop-blur-sm">
      <div
        className={`flex flex-col gap-y-2 bg-dark-primary rounded-lg shadow-lg h-max w-3/4 md:w-1/2 outline outline-1 outline-dark-secondary ${className}`}
      >
        <div className="flex flex-row justify-between items-center border-b border-1 border-white/10 pb-2 px-6 pt-4">
          {topbar}
          
        </div>
        <div className="flex flex-col px-6">
          <p className="text-paragraph-secondary text-sm">
            Step 1: Install the{" "}
            <a
              href={"/docs/installation"}
              target="_blank"
              className="font-bold underline text-info-primary"
            >
              dependencies
            </a>
          </p>
          <p className="text-paragraph-secondary text-sm">
            Step 2: Import the package
          </p>
          <ComponentCodeShowcase githubFileUrl={fileURL} githubLink={repoURL} />
        </div>
        <div className="flex justify-center py-4 border-t border-1 border-white/10 ">
          <Button leftIcon={<Github className="w-4 h-4 stroke-[#F8CC38]" />} rounded="full" href={repoURL} target="_blank">
            <p className="text-white font-semibold">View <span className="underline">{fileName}.tsx</span> on Github</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
