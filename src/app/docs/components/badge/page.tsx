import React from "react"; // Add this import
import { Badge } from "@/components/badge";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";

export default function Home() {
  const basicBadge = `<Badge variant="default">
  Default
</Badge>`;
  const terminal = `npx shadcn-ui@latest init`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center gap-x-10 z-10">
      <div className="flex flex-col gap-y-2 w-full md:w-3/4">
        <div className="flex flex-col gap-y-2 ">
          <h2 className="text-3xl font-bold text-white ">Badge</h2>
          <p className="text-gray-400">
            Velocify is a modern UI component library designed to accelerate web
            development by providing a comprehensive set of customizable,
            responsive, and accessible components. It aims to streamline the
            creation of consistent, high-quality user interfaces with minimal
            effort.
          </p>
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Badge installation
          </h1>
          <div className="flex flex-col gap-y-2  ">
            <TerminalShowcase command={terminal} />
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Basic Badge
          </h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={basicBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                    <Badge variant="default">Default</Badge>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={basicBadge}
            />
          </div>
        </div>

        <div className="flex flex-col mt-5 gap-y-2">
          <h1 className="text-2xl font-semibold text-white ">
            Badge Variants
          </h1>
          <h1 className="text-xl font-semibold text-white ">
            Badge installation
          </h1>
          <div className="flex flex-col gap-y-2  ">
            <ElementShowcase
              codeShowcase={
                <CodeShowcase
                  code={basicBadge}
                  githubLink="https://github.com/prudra2000/Velocify"
                />
              }
              element={
                <div className="flex flex-col gap-y-5 justify-center items-center">
                  <div className="flex flex-row gap-x-5 px-10">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                  <div className="flex flex-row gap-x-5 px-10">
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="error">Error</Badge>
                  </div>
                </div>
              }
              githubLink="https://github.com/prudra2000/Velocify"
              code={basicBadge}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
