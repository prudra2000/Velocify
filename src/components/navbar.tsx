"use client";
import React from "react";
import { Button } from "@/components/button";

import { useState } from "react";
import { AlignJustify } from "lucide-react";
const NavBarLogo = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row gap-2 items-center justify-center font-bold">{children}</div>
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

const Navbar = ({
  logo,
  links,
}: {
  logo: React.ReactElement<typeof NavBarLogo>;
  links: React.ReactElement<typeof NavBarLinks>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row p-2 px-5 justify-between items-center bg-slate-100">
        {logo}
        <div
          className={`${isOpen ? "hidden" : "block"} hidden sm:hidden md:block`}
        >
          {links}
        </div>
        <div className="-mr-2 flex md:hidden">
          <Button
            variant="default"
            className="rounded-full"

            onClick={toggleNavbar}
          >
            <AlignJustify className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-100 animate-slide-in-right">
          <div className="flex flex-row gap-2">{links}</div>
        </div>
      </div>
    </div>
  );
};
Navbar.displayName = "Navbar";

export { Navbar, NavBarLinks, NavBarLogo, NavBarLink };
