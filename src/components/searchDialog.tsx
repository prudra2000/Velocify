import { ReactNode } from "react";
import { Button } from "./button";
import { IconButton } from "./iconButton";
import { X } from "lucide-react";

interface SearchDialogProps {
  ref?: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  onClose: () => void;
  searchBar: ReactNode;
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  ref,
  isOpen,
  onClose,
  searchBar,
  children,
  className,
  showCloseButton = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white backdrop-blur-sm">
      <div
        className={`flex flex-col gap-y-2 bg-dark-primary rounded-lg shadow-lg h-max w-3/4 md:w-1/2 outline outline-1 outline-dark-secondary ${className}`}
      >
        <div className="flex justify-between items-center border-b border-1 border-white/10 p-2">
          {searchBar}
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
