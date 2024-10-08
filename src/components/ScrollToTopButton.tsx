"use client"; 
import React, { useEffect, useState } from "react";
import FloatButton from "@/components/floatButton";
import { ChevronUpIcon } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed z-10">
            {showButton && (
                <FloatButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" }) } variant="default" size="default" position="bottom-right">
                    <ChevronUpIcon className="w-4 h-4"/>
                </FloatButton>
            )}
        </div>
    );
};

export default ScrollToTopButton;