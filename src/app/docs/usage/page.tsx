"use client";
import Socials from "@/components/socials";
import { Github, Youtube } from "lucide-react";

export default function Home() {
  return (
    <>
      <head>
        <title>Velocify UI - Usage</title>
        <meta name="description" content="Learn how to use Velocify UI" />
      </head>
      <main className="bg-[#030711] p-10 flex flex-col items-center gap-x-10 h-screen">
        <div className="flex flex-col gap-y-2 w-full md:w-3/4 mt-10">
          {" "}
          {/* Added width classes */}
          <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl font-bold text-white ">Usage</h2>
            <p className="text-paragraph-secondary">
              Velocify UI allows you to use the components in your project by
              simply copying the code from the documentation and pasting it into
              your project. Below we have provided a guide on how you can
              quickly get started.
            </p>
          </div>
          {/* <div className="flex flex-col mt-5 gap-y-2">
            <h1 className="text-2xl font-semibold text-white ">Tailwind CSS</h1>
            <div className="flex flex-col gap-y-2 text-paragraph-primary">
              <div className="flex flex-col md:flex-row gap-x-5 ">
                <iframe
                  className="focus:outline-none w-full h-96"
                  src="https://www.youtube.com/embed/RPa3_AD1_Vs"
                  title="YouTube video player"
                  frameBorder=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <Socials
                title="Tailwind CSS"
                description="Tailwind CSS is a utility-first CSS framework that allows you to build custom designs with ease."
                socialLinks={[
                  {
                    name: "GitHub",
                    url: "https://github.com",
                    icon: (
                      <Github className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
                    ),
                  },
                  {
                    name: "Youtube",
                    url: "https://github.com",
                    icon: (
                      <Youtube className="w-5 h-5 bg-transparent border-0 stroke-[#F8CC38]" />
                    ),
                  },
                ]} // Example social link
              />
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}
