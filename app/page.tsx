import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Projects from "@/components/Projects";



export default function Home() {
  return (<div className="m-4 flex flex-col items-center gap-10 min-h-[100dvh] bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
    <NavBar />
    <Hero />
    <Experience />
    <Projects />
  </div>)
}
