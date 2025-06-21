import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Image from "next/image";



export default function Home() {
  return (<div className="m-4 flex flex-col items-center gap-10">
    <div className=" w-full bg-background px-5 pt-[70px] prose-h4:xl:text-2xl prose-h4:lg:text-xl prose-h4:text-l">
      <NavBar />
      <Hero />
    </div>
    <Experience />
  </div>)
}
