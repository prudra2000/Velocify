"use client";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import MainNavbar from "@/components/mainNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { FooterBarDocs } from "@/components/footerbarDocs";
import VelocifyUILogo from "@/components/velocifyUILogo";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          Velocify UI - Performance, Customizability, & Accessibility
        </title>
        <meta
          name="description"
          content="Velocify is a modern UI component library designed to accelerate web development. Built with performance as a priority, ensuring fast load times, smooth interactions, and an optimized user experience."
        />
        <meta
          name="keywords"
          content="UI library, web development, performance, customizability, accessibility"
        />

        <meta property="og:title" content="Velocify UI" />
        <meta
          property="og:description"
          content="Modern UI component library for fast, customizable, and accessible web development"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Velocify UI" />

        <meta property="og:url" content="https://www.velocifyui.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Velocify UI - Performance, Customizability, & Accessibility"
        />
        <meta
          property="og:description"
          content="Velocify is a modern UI component library designed to accelerate web development. Built with performance as a priority, ensuring fast load times, smooth interactions, and an optimized user experience. Designed to be highly customizable, allowing developers to tailor the UI to their specific needs. Ensuring accessibility, these are crafted to be usable by everyone, including individuals with disabilities."
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="velocifyui.com" />
        <meta property="twitter:url" content="https://www.velocifyui.com/" />
        <meta
          name="twitter:title"
          content="Velocify UI - Performance, Customizability, & Accessibility"
        />
        <meta
          name="twitter:description"
          content="Velocify is a modern UI component library designed to accelerate web development. Built with performance as a priority, ensuring fast load times, smooth interactions, and an optimized user experience. Designed to be highly customizable, allowing developers to tailor the UI to their specific needs. Ensuring accessibility, these are crafted to be usable by everyone, including individuals with disabilities."
        />
        <meta name="twitter:image" content="" />
      </Head>
      <body className={inter.className}>
        <div className="z-10 fixed w-screen ">
          <MainNavbar />
        </div>
        <ScrollToTopButton />
        <div className="z-0  ">{children}</div>
        <div className="flex flex-col w-full">
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
