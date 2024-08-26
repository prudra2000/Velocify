"use client";
import React from "react";
import { Button } from "@/components/button";

import { useState, useEffect } from "react";
import Link from "next/link";
const NavBarLogo = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
NavBarLogo.displayName = "NavBarLogo";

const NavBarLink = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Button variant="ghost">{children}</Button>
  </div>
);
NavBarLink.displayName = "NavBarLink";

const NavBarLinks = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row gap-2">{children}</div>
);
NavBarLinks.displayName = "NavBarLinks";
// Added useState import

const NavBar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false); // Moved inside the component

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Added return statement
    <div className="w-full">
      <div className="flex flex-row p-2 px-5 justify-between items-center bg-slate-100">
        {children}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="bg-gray-900 text-gray-400 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a className="block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>

          <a className="block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>

          <a className="block px-3 py-2 rounded-md text-base font-medium">
            Services
          </a>

          <a className="block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
NavBar.displayName = "NavBar";

export { NavBar, NavBarLinks, NavBarLogo, NavBarLink };
