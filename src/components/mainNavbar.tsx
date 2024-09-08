import React from "react";
import { Navbar } from "./navbarDocs";
import VelocifyUILogo from "./velocifyUILogo";
import {
  DocsMenu,
  DocsMenuSection,
  DocsMenuItem,
  DocsMenuDivider,
} from "./docsMenuItem";

import { usePathname } from "next/navigation";
import { Shapes, Rocket, TextCursorInput } from "lucide-react";

const MainNavbar: React.FC = () => {
  const currentPath = usePathname();
  return (
    <Navbar
      logo={
        <a href="/">
        <div className="flex flex-row items-center gap-x-2">
          
            <VelocifyUILogo className="w-7 h-7" />
            <p className="text-xl font-bold bg-gradient-to-r from-[#F8CC38] to-[#F5B945] bg-clip-text text-transparent">
              Velocify UI
            </p>
          </div>
        </a>
      }
      links={
        <div className="flex flex-col gap-y-2 w-full max-h-screen overflow-y-auto pb-52">
          <DocsMenu>
            <DocsMenuSection text="Get Started" isActive={currentPath.includes("installation") || currentPath.includes("usage")} icon={<Rocket className="w-5 h-5 text-accent-primary " />}>
              <DocsMenuItem
                hrefText="installation"
                text="Installation"
                isActive={currentPath.includes("installation")}
              />
              <DocsMenuItem
                hrefText="usage"
                text="Usage"
                isActive={currentPath.includes("usage")}
              />
              <DocsMenuItem
                hrefText="components/all-components"
                text="All Components"
                isActive={currentPath.includes("components/all-components")}
              />
            </DocsMenuSection>
            <DocsMenuSection text="Components" isActive={currentPath.includes("components")} icon={<Shapes className="w-5 h-5 text-accent-primary " />}>
              
              <DocsMenuDivider sectionTitle={"Input Components"} />
              <DocsMenuItem
                hrefText="components/button"
                text="Button"
                isActive={currentPath.includes("components/button")}
              />
              <DocsMenuItem
                hrefText="components/checkbox"
                text="Checkbox"
                isActive={currentPath.includes("components/checkbox")}
              />
              <DocsMenuItem
                hrefText=""
                text="Float Button"
                isActive={currentPath.includes("components/float-button")}
                disabled={true}
              />
              <DocsMenuItem
                hrefText="components/icon-button"
                text="Icon Button"
                isActive={currentPath.includes("components/icon-button")}
              />
              <DocsMenuItem
                hrefText="components/input"
                text="Input"
                isActive={currentPath.includes("components/input")}
              />
              <DocsMenuItem
                hrefText="components/radio-group"
                text="Radio Group"
                isActive={currentPath.includes("components/radio-group")}
              />
              <DocsMenuItem
                hrefText="components/rating-stars"
                text="Ratings"
                isActive={currentPath.includes("components/rating-stars")}
              />
              <DocsMenuItem
                hrefText=""
                text="Select"
                isActive={currentPath.includes("components/select")}
                disabled={true}
              />
              <DocsMenuItem
                hrefText=""
                text="Slider"
                isActive={currentPath.includes("components/slider")}
                disabled={true}
              />
              <DocsMenuItem
                hrefText="components/switch"
                text="Switch"
                isActive={currentPath.includes("components/switch")} 
              />
              <DocsMenuItem
                hrefText="components/textarea"
                text="Textarea"
                isActive={currentPath.includes("components/textarea")} 
              />
              <DocsMenuDivider sectionTitle={"Display Components"} />
              <DocsMenuItem
                hrefText="components/avatar"
                text="Avatar"
                isActive={currentPath.includes("components/avatar")}
              />
              <DocsMenuItem
                hrefText="components/badge"
                text="Badge"
                isActive={currentPath.includes("components/badge")}
              />
              <DocsMenuItem
                hrefText="components/chip"
                text="Chip"
                isActive={currentPath.includes("components/chip")}
              />
              <DocsMenuItem
                hrefText=""
                text="Divider"
                isActive={currentPath.includes("components/divider")}
                disabled={true}
              />
              <DocsMenuItem
                hrefText="components/progress-bar"
                text="Progress Bar"
                isActive={currentPath.includes("components/progress-bar")}
              />
              <DocsMenuItem
                hrefText="components/tooltip"
                text="Tooltip"
                isActive={currentPath.includes("components/tooltip")}
              />
              <DocsMenuDivider sectionTitle={"Prebuilt Components"} />
              <DocsMenuItem
                hrefText="components/prebuilt/ratings-breakdown"
                text="Ratings Breakdown"
                isActive={currentPath.includes("components/prebuilt/ratings-breakdown")}
              />
              
            </DocsMenuSection>
          </DocsMenu>
        </div>
      }
    />
  );
};

export default MainNavbar;
