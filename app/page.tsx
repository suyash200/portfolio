import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Image from "next/image";



export default function Home() {
  return (<div className="m-4 flex flex-col items-center gap-10 ">
    <NavBar />
    <Hero />
    <Experience />
  </div>)
}
