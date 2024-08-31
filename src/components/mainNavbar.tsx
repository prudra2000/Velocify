import React from 'react';
import { Navbar } from './navbarDocs';
import VelocifyUILogo from './velocifyUILogo';
import { DocsMenu, DocsMenuSection, DocsMenuItem, DocsMenuDivider } from './docsMenuItem';

import { usePathname } from "next/navigation";

const MainNavbar: React.FC = () => {
    const currentPath = usePathname();
    return (
        <Navbar
            logo={
              <div className="flex flex-row items-center gap-x-2">
                <VelocifyUILogo className="w-7 h-7" />
                <p className="text-xl font-bold bg-gradient-to-r from-[#F8CC38] to-[#F5B945] bg-clip-text text-transparent">
                  Velocify UI
                </p>
              </div>
            }
            links={
              <div className="flex flex-col gap-y-2 w-full max-h-screen overflow-y-auto pb-52">
                <DocsMenu>
                  <DocsMenuSection text="Overview">
                  <DocsMenuItem
                      hrefText=""
                      text="Overview"
                      isActive={currentPath.includes("installation")} // Check if active
                    />
                    <DocsMenuItem
                      hrefText="installation"
                      text="Installation"
                      isActive={currentPath.includes("installation")} // Check if active
                    />
                    <DocsMenuItem
                      hrefText="test"
                      text="Usage"
                      isActive={currentPath.includes("test")} // Check if active
                    />
                    <DocsMenuItem
                      hrefText="test"
                      text="Examples"
                      isActive={currentPath.includes("test")} // Check if active
                    />
                    <DocsMenuItem
                      hrefText="test"
                      text="Support"
                      isActive={currentPath.includes("test")} // Check if active
                    />
                    <DocsMenuItem
                      hrefText="test"
                      text="FAQs"
                      isActive={currentPath.includes("test")} // Check if active
                    />
                  </DocsMenuSection>
                  <DocsMenuSection text="Components">
                    <DocsMenuItem
                      hrefText="components/all-components"
                      text="All Components"
                      isActive={currentPath.includes(
                        "components/all-components"
                      )} 
                    />
                    <DocsMenuDivider sectionTitle={"Input Components"} />
                    <DocsMenuItem
                      hrefText="components/badge"
                      text="Badge"
                      isActive={currentPath.includes("components/badge")} // Check if active
                    />
                    <DocsMenuItem
                      hrefText="components/button"
                      text="Button"
                      isActive={currentPath.includes("components/button")} // Check if active
                    />
                    <DocsMenuItem
                      hrefText="components/input"
                      text="Input"
                      isActive={currentPath.includes("components/input")} // Check if active
                    />
                    
                  </DocsMenuSection>
                </DocsMenu>
              </div>
            }
          />
    );
};

export default MainNavbar;
