"use client";
import React from "react";
import { Button } from "@/components/button";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AlignJustify, Github, Search, Home } from "lucide-react";
import { Input } from "./input";
import { IconButton } from "./iconButton";
const NavBarLogo = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row gap-2 items-center justify-center font-bold">
    {children}
  </div>
);
NavBarLogo.displayName = "NavBarLogo";

const NavBarLink = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Button variant="link" className="text-black ">
      {children}
    </Button>
  </div>
);
NavBarLink.displayName = "NavBarLink";

const NavBarLinks = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row gap-2">{children}</div>
);
NavBarLinks.displayName = "NavBarLinks";
// Added useState import

const Navbar = ({
  logo,
  links,
}: {
  logo: React.ReactElement<typeof NavBarLogo>;
  links: React.ReactElement<typeof NavBarLinks>;
}) => {
  const [isOpen, setIsOpen] = useState(false); // Moved inside the component

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Added return statement
    <div className="relative z-20">
      {" "}
      <div className="flex flex-row px-5 md:px-10 py-2 justify-between items-center bg-[#030711]/80 backdrop-blur-md border-b border-1 border-white/10 text-white">
        {logo}
        <div
          className={`${
            isOpen ? "hidden" : "block"
          } hidden sm:hidden md:flex flex-row gap-x-2 justify-center items-center`}
        >
          <IconButton
            variant="default"
            size="default"
            onClick={() => window.open("/", "_blank")}
            className="md:hidden"
          >
            <Search className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          <Input placeholder="Search" className="w-full h-7" rounded="full" />

          <Link href="/" passHref>
            <IconButton variant="default" size="default" >
              <Home className="w-4 h-4 stroke-[#F8CC38]" />
            </IconButton>
          </Link>
          <IconButton
            variant="default"
            size="default"
            onClick={() =>
              window.open("https://github.com/prudra2000/Velocify", "_blank")
            }
          >
            <Github className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          <Button
            variant="default"
            className="rounded-full"
            onClick={toggleNavbar}
          >
            <AlignJustify className="h-4 w-4 stroke-[#F8CC38]" />
          </Button>
          {}
        </div>
        <div className="-mr-2 flex md:hidden gap-x-2">
          <IconButton
            variant="default"
            size="default"
            onClick={() => window.open("", "_blank")}
            className="md:hidden"
          >
            <Search className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          <div className="hidden md:block">
            <Input placeholder="Search" className="w-full h-8" rounded="full" />
          </div>
          <IconButton
            variant="default"
            size="default"
            onClick={() =>
              window.open("https://github.com/prudra2000/Velocify", "_blank")
            }
          >
            <Home className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          <IconButton
            variant="default"
            size="default"
            onClick={() =>
              window.open("https://github.com/prudra2000/Velocify", "_blank")
            }
          >
            <Github className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          <Button
            variant="default"
            className="rounded-full"
            onClick={toggleNavbar}
          >
            <AlignJustify className="h-4 w-4 stroke-[#F8CC38]" />
          </Button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 absolute w-80 h-screen bg-[#030711]/80 backdrop-blur-md border-r border-1 border-white/10 `}
      >
        <div className="flex flex-col justify-between px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex flex-row gap-2 text-white p-2">{links}</div>
        </div>
      </div>
    </div>
  );
};
Navbar.displayName = "Navbar";

export { Navbar, NavBarLinks, NavBarLogo, NavBarLink };
