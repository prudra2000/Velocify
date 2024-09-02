import { Badge } from "@/components/chip";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";

export default function Home() {
  const code = `<Badge variant="default">Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="error">Error</Badge>`;
  const terminal = `npx shadcn-ui@latest init`;
  const terminal2 = `npx velocify-button@latest init`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col items-center gap-x-10 z-10">
        
        <div className="flex flex-col gap-y-2 w-full md:w-3/4"> {/* Added width classes */}
          <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl font-bold text-white ">Installation</h2>
            <p className="text-gray-400">
              The installation process is simple and straightforward. Can be
              installed using npm.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Default installation
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <TerminalShowcase command={terminal} />
            </div>
            <p className="text-gray-400">
              After installation, you can start using the components by
              importing them from the library.
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">
              Component installation
            </h1>
            <div className="flex flex-col gap-y-2  ">
              <TerminalShowcase command={terminal2} />
            </div>
            <p className="text-gray-400">
              After installation, you can start using the components by
              importing them from the library.
            </p>
          </div>
          <ElementShowcase
            codeShowcase={<CodeShowcase code={code} githubLink="https://github.com/prudra2000/Velocify" />}
            element={
              <div className="flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-row gap-x-5 px-10">
                  <Badge variant="default">Default</Badge>
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
            code={code}
          />
        </div>
      
    </main>
  );
}
