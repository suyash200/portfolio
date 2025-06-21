"use client"
import {

  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from "next/image"
import ImageCard from "./ui/image-card"
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon, X } from "lucide-react";

export default function ResponsiveResizableLayout() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind 'md'
    };

    // Set initial state
    handleResize();

    // Listen to window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //  return (
  //    <ResizablePanelGroup
  //      direction={isSmallScreen ? 'vertical' : 'horizontal'}
  //      className="rounded-base w-full max-w-7xl mx-auto border-4 border-border text-main-foreground shadow-shadow"
  //    >
  //      <ResizablePanel defaultSize={50}>
  //        <ResizablePanelGroup direction="vertical">
  //          <ResizablePanel>
  //            <div className="flex flex-col h-full items-center justify-center bg-main p-6 gap-2 text-center">
  //              <span className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
  //                <span>Suyash</span> Lade
  //              </span>
  //              <span className="font-base text-base sm:text-lg md:text-xl text-white max-w-xl">
  //                Delivering high-quality software solutions for a seamless and intuitive user experience.
  //              </span>
  //            </div>
  //          </ResizablePanel>
  //        </ResizablePanelGroup>
  //      </ResizablePanel>
  //
  //      <ResizablePanel defaultSize={50} maxSize={100}>
  //        <div className="flex h-[60vh] items-center justify-center bg-main p-8">
  //          <ImageCard imageUrl="/profile.jpeg" caption="" />
  //        </div>
  //      </ResizablePanel>
  //    </ResizablePanelGroup>
  //  );
  return (

    <section className="bg-[var(--main)] border-4 border-[var(--border)] shadow-[var(--shadow)] px-8 py-14 min-w-full -h-auto">
      <div className="max-w-7xl mx-auto flex  flex-col md:flex-row-reverse items-center gap-16">

        {/* Image Section */}
        <div className="flex justify-center md:justify-left w-full md:w-1/2">
          <ImageCard
            imageUrl="/profile.jpeg"
            className="w-72 h-72 sm:w-80 sm:h-80 object-cover border-4 border-[var(--border)] shadow-[var(--shadow)] bg-[var(--secondary-background)] rounded-[var(--radius-base)]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            Suyash - Software Developer
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--foreground)] mb-10 font-medium">
            Delivering high-quality software solutions for a seamless, scalable experience.
          </p>

          <div className="flex flex-row">
            <button className="bg-[var(--main)] text-[var(--main-foreground)] px-8 py-4 font-bold border-2 border-[var(--border)] shadow-[var(--shadow)] hover:translate-x-1 hover:translate-y-1 transition-transform" onClick={() => window.open("https://www.linkedin.com/in/suyash-lade", "_blank")}>
              <LinkedinIcon>LinkedIn</LinkedinIcon>
            </button>
            <button className="bg-[var(--main)] text-[var(--main-foreground)] px-10 py-4 font-bold border-2 border-[var(--border)] shadow-[var(--shadow)] hover:translate-x-1 hover:translate-y-1 transition-transform" onClick={() => window.open("https://github.com/suyash200", "_blank")}>
              <GithubIcon />
            </button>
            <button className="bg-[var(--main)] text-[var(--main-foreground)] px-10 py-4 font-bold border-2 border-[var(--border)] shadow-[var(--shadow)] hover:translate-x-1 hover:translate-y-1 transition-transform" onClick={() => window.open("https://x.com/SuyashLade", "_blank")}>
              <TwitterIcon />
            </button>
          </div>


        </div>

      </div>
    </section>

  )
}
