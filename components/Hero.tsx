"use client"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Star9 from "./stars/s9";
import ImageCard from "./ui/image-card";
import Marquee from "./ui/marquee";
import SkillsShowcase from "./skills";
import { FaXTwitter } from "react-icons/fa6";

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

    < section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[/bg.svg] " >
      {/* Decorative Background Stars */}
      < div className="absolute top-10 left-10 opacity-100 animate-float z-0 md:not-focus-visible:" >
        <Star9 size={100} color="#ffcd08" stroke="#FDE68A" strokeWidth={1.5} />
      </div >

      <div className="absolute bottom-60 right-20 opacity-100 animate-spinSlow z-0">
        <Star9 size={80} color="#ffcd08" stroke="#FFE066" strokeWidth={2} />
      </div>

      <div className="absolute top-10 left-10 opacity-90 animate-floatSpin">
        <Star9 size={50} color="#ffcd08" stroke="#FDE68A" strokeWidth={1.5} />
      </div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row-reverse md:grow items-center justify-center gap-12 z-10 py-8 px-4 ">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2 relative z-10">
          <ImageCard
            imageUrl="/myself.jpg"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square object-cover border-4 border-[var(--border)] shadow-[var(--shadow)] bg-[var(--secondary-background)] rounded-[var(--radius-base)]"
            caption="Back-End Developer"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--foreground)] mb-8 leading-tight">
            Suyash Lade
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[var(--foreground)] mb-12 font-medium max-w-xl mx-auto leading-relaxed">
            Developing high-quality software solutions for a seamless, scalable experience.
          </p>

          <div className="flex flex-row gap-6 justify-center flex-wrap">
            <button
              className="bg-[#008AE5] text-[var(--main-foreground)] px-6 py-3 font-bold border-2 border-[var(--border)] shadow-[var(--shadow)] hover:translate-x-1 hover:translate-y-1 transition-transform"
              onClick={() => window.open("https://www.linkedin.com/in/suyash-lade", "_blank")}
            >
              <LinkedinIcon />
            </button>
            <button
              className="bg-[#04C86D] text-[var(--main-foreground)] px-6 py-3 font-bold border-2 border-[var(--border)] shadow-[var(--shadow)] hover:translate-x-1 hover:translate-y-1 transition-transform"
              onClick={() => window.open("https://github.com/suyash200", "_blank")}
            >
              <GithubIcon />
            </button>
            <button
              className="bg-[#FF4D50] text-[var(--main-foreground)] px-6 py-3 font-bold border-2 border-[var(--border)] shadow-[var(--shadow)] hover:translate-x-1 hover:translate-y-1 transition-transform"
              onClick={() => window.open("https://x.com/SuyashLade", "_blank")}
            >
              <FaXTwitter />
            </button>
          </div>
        </div>
      </div>

      <SkillsShowcase />
    </section >


  )
}
