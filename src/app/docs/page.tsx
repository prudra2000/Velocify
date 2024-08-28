import { Badge } from "@/components/badge";
import CodeShowcase from "@/components/CodeShowcase";
import ElementShowcase from "@/components/docsShowcase";
import TerminalShowcase from "@/components/terminalShowcase";

export default function Home() {
  const code = `const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant, avatar, children, className, icon, size, disabled, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(badgeVariants({ variant, size, className, disabled }))}
      {...props}
    >
      {icon && <div className="mr-2">{icon}</div>}
      {avatar && <div className="mr-2">{avatar}</div>}
      {children}
    </div>
  )
);
Badge.displayName = "Badge";`;
  const terminal = `npx shadcn-ui@latest init`;
  return (
    <main className="bg-[#030711] p-10 flex flex-col gap-x-10 ">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-3xl font-bold text-white ">Velocify</h2>

        <p className="text-gray-400">
          Velocify is a modern UI component library designed to accelerate web
          development by providing a comprehensive set of customizable,
          responsive, and accessible components. It aims to streamline the
          creation of consistent, high-quality user interfaces with minimal
          effort.
        </p>
      </div>

      <div className="flex flex-col mt-5 gap-y-2">
        <h1 className="text-2xl font-mediums text-white ">Core Philosophy</h1>
        <ul className="list-disc list-outside text-gray-400 pl-4">
          <li>
            Performance: Velocify is built with performance in mind, ensuring
            fast load times and smooth interactions.
          </li>
          <li>
            Customizability: Velocify components are designed to be highly
            customizable, allowing developers to tailor the UI to their specific
            needs.
          </li>
          <li>
            Accessibility: Velocify components are designed with accessibility
            in mind, ensuring that they are usable by everyone, including those
            with disabilities.
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-5 gap-y-2">
        <h1 className="text-2xl font-mediums text-white ">Why Velocify?</h1>
        <p className="text-gray-400">
          Velocify is a modern UI component library designed to accelerate web
          development by providing a comprehensive set of customizable,
          responsive, and accessible components. It aims to streamline the
          creation of consistent, high-quality user interfaces with minimal
          effort.
        </p>
      </div>
      <ElementShowcase
        codeShowcase={<CodeShowcase code={code} />}
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
        code={code}
      />
      <div className="flex flex-col gap-y-2 w-min ">
        <TerminalShowcase command={terminal} />
      </div>
    </main>
  );
}
