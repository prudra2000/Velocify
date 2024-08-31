"use client"; // Add this line

import { IconButton } from "./iconButton";

interface FloatButtonProps {
    onClick: () => void; // Add this line
    children: React.ReactNode;
    // ... other props
}

const FloatButton: React.FC<FloatButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <IconButton 
            variant="default" 
            size="large" 
            className="fixed bottom-4 right-4" 
            onClick={onClick} // Add this line
            {...props}
        >
            {children}
        </IconButton>
    );
}

export default FloatButton;
