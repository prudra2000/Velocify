"use client";
import React, { useState } from "react";
import { Zap } from "lucide-react";

interface SocailsProps {
  className?: string;
  title: string;
  description: string;
  socialLinks: { name: string; url: string; icon: React.ReactNode }[];
}

const Socails: React.FC<SocailsProps> = ({
  className,
  title,
  description,
  socialLinks,
}) => {
  return (
    <div
      className={`flex flex-row items-center rounded-md bg-dark-primary text-white outline outline-1 outline-dark-secondary ${className}`}
    >
      <div className="flex flex-col gap-y-3 justify-center items-center w-full p-2">
        <div className="flex flex-row gap-x-5 justify-center items-center ">
          {socialLinks.map(
            (link) => (
              <a
                key={link.name}
                href={link.url}
                className="flex flex-row justify-center items-center gap-x-2"
              >
                <div
                  className="flex flex-row gap-x-2 w-10 h-10 justify-center items-center  bg-accent-primary/30 rounded-full border border-1 border-accent-primary"
                >
                  {link.icon}
                </div>{" "}
                <p className="text-white underline underline-offset-4">
                  {link.name}
                </p>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Socails;
