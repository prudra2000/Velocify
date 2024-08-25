import React from "react";
import { Button } from "@/components/button";

const NavBarLinks = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-row"><Button variant="default">{children}</Button></div>
);
NavBarLinks.displayName = "NavBarLinks";

const NavBar = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
NavBar.displayName = "NavBar";

export { NavBar, NavBarLinks };
