"use client";
import React from "react";

const FooterBarDocs = ({
  logo,
  links,
}: {
  logo: React.ReactNode;
  links: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col bg-[#030711] bckdrop-blur-md border-t border-1 border-white/10 py-10 gap-y-5 w-full">
      <div className="flex flex-row justify-center items-center  ">
        {logo}
      </div>
      <div className="flex flex-row w-full justify-center items-center text-center text-xs text-white/50 px-5">
        <p>
          Built by <a href="https://www.rudra-patel.com/" target="_blank" className="text-[#F8CC38] hover:underline hover:underline-offset-4">Rudra Patel</a>. The
          repository is available on <a href="https://github.com/prudra2000/Velocify" target="_blank" className="text-[#F8CC38] hover:underline hover:underline-offset-4">GitHub</a>.
        </p>
      </div>
    </div>
  );
};
FooterBarDocs.displayName = "FooterBarDocs";

export { FooterBarDocs };
