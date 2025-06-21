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
import Star9 from "./stars/s9";

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


  return (

    <section className="flex items-center justify-center min-h-screen my-auto    w-full bg-[/bg.svg] ">
      <div className="max-w-8xl m-auto min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-x-80 ">

        {/* Image Section */}
        <div className="flex justify-center md:justify-left w-full md:w-1/2">
          <ImageCard
            imageUrl="/hero1.png"
            className="w-80 h-84 sm:w-80 sm:h-80 object-cover border-4 border-[var(--border)] shadow-[var(--shadow)] bg-[var(--secondary-background)] rounded-[var(--radius-base)]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full  md:w-1/2 text-center md:text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
            Suyash Lade           </h1>
          <p className="text-xl sm:text-2xl text-[var(--foreground)] mb-10 font-medium max-w-xl mx-auto">
            Delivering high-quality software solutions for a seamless, scalable experience.
          </p>

          <div className="flex flex-row gap-8 justify-center">
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
