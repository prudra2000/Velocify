"use client";
import React from "react";
import { Button } from "@/components/button";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  AlignJustify,
  Github,
  Search,
  Home,
  X,
  SearchIcon,
  ChevronRight,
  Ban,
} from "lucide-react";
import { Input } from "./input";
import { IconButton } from "./iconButton";
import SearchBar from "./searchBar";
import { SearchDialog } from "./searchDialog";

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
  links: React.ReactNode;
}) => {
  const docsData: {
    id: string;
    title: string;
    description: string;
    href: string;
  }[] = [
    // Existing entries
    {
      id: "1",
      title: "Installation",
      description: "Learn how to install Velocify UI step-by-step",
      href: "/docs/installation",
    },
    {
      id: "2",
      title: "Usage",
      description:
        "Understand the usage of Velocify UI components in your project",
      href: "/docs/usage",
    },
    {
      id: "3",
      title: "Examples",
      description: "Practical examples demonstrating the use of Velocify UI",
      href: "/docs/examples",
    },
    {
      id: "4",
      title: "Support",
      description:
        "Find ways to get support for Velocify UI, including contact info",
      href: "/docs/support",
    },
    {
      id: "5",
      title: "FAQs",
      description: "Frequently asked questions about Velocify UI",
      href: "/docs/faqs",
    },
    {
      id: "6",
      title: "All Components",
      description: "Veiw all components",
      href: "/docs/components/all-components",
    },
    {
      id: "7",
      title: "Customization",
      description: "Learn how to customize Velocify UI for your needs",
      href: "/docs/customization",
    },
    {
      id: "8",
      title: "API",
      description: "Reference for Velocify UI's API documentation",
      href: "/docs/api",
    },
    // Components from the "All Components" page
    {
      id: "9",
      title: "Checkbox",
      description: "Component for selecting multiple options from a set",
      href: "/docs/components/checkbox",
    },
    {
      id: "10",
      title: "Radio Group",
      description: "Component for selecting a single option from a set",
      href: "/docs/components/radio-group",
    },
    {
      id: "11",
      title: "Switch",
      description: "Toggle switch component",
      href: "/docs/components/switch",
    },
    {
      id: "12",
      title: "Input",
      description: "Text input field component",
      href: "/docs/components/input",
    },
    {
      id: "13",
      title: "Textarea",
      description: "Multiline text input field component",
      href: "/docs/components/textarea",
    },
    {
      id: "14",
      title: "Button",
      description: "Standard button component",
      href: "/docs/components/button",
    },
    {
      id: "15",
      title: "Icon Button",
      description: "Button component with an icon",
      href: "/docs/components/icon-button",
    },
    {
      id: "16",
      title: "Rating",
      description: "Component for displaying user ratings",
      href: "/docs/components/rating",
    },
    {
      id: "17",
      title: "Avatar",
      description: "Component for displaying user profile images",
      href: "/docs/components/avatar",
    },
    {
      id: "18",
      title: "Badge",
      description: "Component for displaying a badge or label",
      href: "/docs/components/badge",
    },
    {
      id: "19",
      title: "Chip",
      description: "Component for small items or tags",
      href: "/docs/components/chip",
    },
    {
      id: "20",
      title: "Tooltip",
      description: "Component for displaying additional information on hover",
      href: "/docs/components/tooltip",
    },
    {
      id: "21",
      title: "Card",
      description: "Component for displaying content in a card format",
      href: "/docs/components/card",
    },
    {
      id: "22",
      title: "Ratings Breakdown",
      description: "Component for displaying a breakdown of user ratings",
      href: "/docs/components/ratings-breakdown",
    },
    {
      id: "23",
      title: "Navbar",
      description: "Navigation bar component",
      href: "/docs/components/navbar",
    },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setTimeout(() => {
      document.getElementById("search-input")?.focus();
    }, 100);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSearchQuery("");
  };
  const [isOpen, setIsOpen] = useState(false); // Moved inside the component
  const menuRef = useRef<HTMLDivElement>(null); // Create a ref for the menu
  const dialogRef = useRef<HTMLDivElement>(null); // Create a ref for the dialog

  const toggleNavbar = () => {
    setIsOpen(true); // Toggle the menu state
  };
  const closeNavbar = () => {
    setIsOpen(false); // Close the menu
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDialogOpen) {
        handleCloseDialog(); // Close the dialog on Escape key press
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDialogOpen]); // Added isDialogOpen as a dependency

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeNavbar(); // Close the menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]); // Added dependencies

  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocs = docsData.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            onClick={() => handleOpenDialog()}
            className="md:hidden"
          >
            <Search className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          <IconButton
            variant="default"
            size="default"
            onClick={() => handleOpenDialog()}
          >
            <Search className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>

          <a href={`/`}>
            <IconButton variant="default" size="default">
              <Home className="w-4 h-4 stroke-[#F8CC38]" />
            </IconButton>
          </a>
          <IconButton
            variant="default"
            size="default"
            onClick={() =>
              window.open("https://github.com/prudra2000/Velocify", "_blank")
            }
          >
            <Github className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          {isOpen ? (
            <Button
              variant="default"
              className="rounded-full"
              onClick={closeNavbar}
            >
              <X className="h-4 w-4 stroke-[#F8CC38]" />
            </Button>
          ) : (
            <Button
              variant="default"
              className="rounded-full"
              onClick={toggleNavbar}
            >
              <AlignJustify className="h-4 w-4 stroke-[#F8CC38]" />
            </Button>
          )}
        </div>
        <div className="-mr-2 flex md:hidden gap-x-2">
          <IconButton
            variant="default"
            size="default"
            onClick={() => handleOpenDialog()}
            className="md:hidden"
          >
            <Search className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          <div className="hidden md:block">
            <Input placeholder="Search" className="w-full h-8" rounded="full" />
          </div>
          <a href={`/`}>
            <IconButton variant="default" size="default">
              <Home className="w-4 h-4 stroke-[#F8CC38]" />
            </IconButton>
          </a>
          <IconButton
            variant="default"
            size="default"
            onClick={() =>
              window.open("https://github.com/prudra2000/Velocify", "_blank")
            }
          >
            <Github className="w-4 h-4 stroke-[#F8CC38]" />
          </IconButton>
          {isOpen ? (
            <Button
              variant="default"
              className="rounded-full"
              onClick={closeNavbar}
            >
              <X className="h-4 w-4 stroke-[#F8CC38]" />
            </Button>
          ) : (
            <Button
              variant="default"
              className="rounded-full"
              onClick={toggleNavbar}
            >
              <AlignJustify className="h-4 w-4 stroke-[#F8CC38]" />
            </Button>
          )}
        </div>
      </div>
      <div
        ref={menuRef} // Attach the ref to the menu div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 absolute w-80 h-screen bg-[#030711]/90 backdrop-blur-md border-r border-1 border-white/10 `}
      >
        <div className="flex flex-col justify-between px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex flex-row gap-2 text-white p-2">{links}</div>
        </div>
      </div>
      <SearchDialog // Attach the ref to the dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        className=" bg-dark-primary/80 h-80 "
        showCloseButton={false}
        searchBar={
          <div className="flex flex-row items-center justify-center w-full gap-x-2 px-2 ">
            <div className="">
              <Search className="w-5 h-5 stroke-[#F8CC38]" />
            </div>
            <SearchBar onSearch={setSearchQuery} id="search-input" />
            <a onClick={handleCloseDialog} className="cursor-pointer">
              <X className="w-5 h-5 stroke-[#F8CC38]" />
            </a>
          </div>
        }
      >
        <div className="flex flex-col justify-center items-center rounded-lg w-full">
          <div className="flex flex-col gap-y-2 w-full rounded-lg px-9 py-2">
            {searchQuery && (
              <>
                {filteredDocs.length > 0 ? (
                  <div></div>
                ) : (
                  <div className="flex flex-col gap-y-5 text-paragraph-primary text-xs justify-center items-center pt-5">
                    <Ban className="w-10 h-10 stroke-paragraph-primary" />
                    <p>No results found for "{searchQuery}"</p>
                    <p>
                      Try visting the{" "}
                      <Link
                        href="/docs/components/all-components"
                        className="text-paragraph-primary underline"
                        onClick={handleCloseDialog}
                      >
                        All Components
                      </Link>{" "}
                      page to view all components.
                    </p>
                  </div>
                )}
              </>
            )}
            {filteredDocs.slice(0, 5).map((doc) => (
              <a href={doc.href} key={doc.id}>
                <div className="rounded-lg py-2 px-4 w-full flex flex-row justify-between items-center bg-dark-primary outline outline-1 outline-dark-secondary hover:bg-dark-secondary">
                  <h2 className="text-sm text-paragraph-primary">
                    {doc.title}
                  </h2>
                  <ChevronRight className="w-4 h-4 stroke-[#F8CC38]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </SearchDialog>
    </div>
  );
};
Navbar.displayName = "Navbar";

export { Navbar, NavBarLinks, NavBarLogo, NavBarLink };
