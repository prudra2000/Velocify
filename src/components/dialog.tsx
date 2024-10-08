import { ReactNode } from "react";
import { IconButton } from "./iconButton";
import { X } from "lucide-react";

interface DialogProps {
  ref?: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
  ref,
  isOpen,
  onClose,
  title,
  children,
  className,
  showCloseButton = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-white backdrop-blur-sm">
        <div className={`flex flex-col gap-y-2 bg-dark-primary rounded-lg shadow-lg h-max w-3/4 md:w-1/2 outline outline-1 outline-dark-secondary p-4 ${className}`}>
        <div className="flex justify-between items-center ">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="">{children}</div>
        <div className="flex justify-end">
          {showCloseButton && (
            <IconButton onClick={onClose} variant="ghost" size="small">
              <X className="w-4 h-4" />
              <span className="ml-1">Close</span>
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};
