import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Navbar } from "@/components/navbarDocs"; // Changed Navbar to NavBar
import VelocifyUILogo from "@/components/velocifyUILogo";
import { Button } from "@/components/button";
import {
  DocsMenuItem,
  DocsMenuSection,
  DocsMenu,
} from "@/components/docsMenuItem"; // Ensure correct import
import { FooterBarDocs } from "@/components/footerbarDocs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-10 fixed w-screen ">
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
              <div className="flex flex-col gap-y-2 w-full">
                <DocsMenu>
                  <DocsMenuSection text="Overview">
                    <DocsMenuItem
                      hrefText="installation"
                      text="Installation"
                      className=""
                    />
                    <DocsMenuItem hrefText="test" text="Usage" className="" />
                    <DocsMenuItem
                      hrefText="test"
                      text="Examples"
                      className=""
                    />
                    <DocsMenuItem hrefText="test" text="Support" className="" />
                    <DocsMenuItem hrefText="test" text="FAQs" className="" />
                  </DocsMenuSection>
                  <DocsMenuSection text="Components">
                    <DocsMenuItem
                      hrefText="components/badge"
                      text="Badge"
                      className=""
                    />
                  </DocsMenuSection>
                </DocsMenu>
              </div>
            }
          />
        </div>

        <div className="z-0  ">{children}</div>
        <div className="flex flex-col pt-10 w-full bg-[#030711]">
          <FooterBarDocs
            logo={
              <div className="flex flex-row items-center gap-x-2">
                <VelocifyUILogo className="w-7 h-7" />
                <p className="text-xl font-bold bg-gradient-to-r from-[#F8CC38] to-[#F5B945] bg-clip-text text-transparent">
                  Velocify UI
                </p>
              </div>
            }
            links={<div className="flex flex-col gap-y-2 w-full"></div>}
          />
        </div>
      </body>
    </html>
  );
}
