"use client";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import MainNavbar from "@/components/mainNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { FooterBarDocs } from "@/components/footerbarDocs";
import VelocifyUILogo from "@/components/velocifyUILogo";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Velocify UI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>{" "}
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
