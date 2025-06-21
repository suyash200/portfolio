import ProjectCard from "./projectCard";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Projects() {
  const projects = [
    {
      imageSrc: "/simpleLinks.png",
      title: "SimpleLinks",
      description: "A role based jwt token applied system written express and mongo db.",
      projectLink: "https://simplelinks.netlify.app",
    },
    {
      imageSrc: "/docs2answer.png",
      title: "Docs2Answer",
      description: "Rag powered LLm Chats",
      projectLink: "https://weatherapp.netlify.app",
    },

  ]

  return (
    <section id="projects">
      <div className="bg-[var(--main)] md:text-7xl min-w-screen md:w-7xl h-12 md:h-18 border-2 border-[var(--border)] shadow-[var(--shadow)] rounded-[var(--radius-base)] flex items-center justify-center">
        <span className="text-2xl md:text-4xl">🛠️ Projects 🗃️</span>
      </div>

      <div className="flex flex-row m-8">
        <div className="w-full flex-col items-center gap-4 flex">
          <Carousel className="w-full max-w-2xs md:max-w-3xl">
            <CarouselContent>
              {projects.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-[10px]">
                    <ProjectCard
                      imageSrc={item.imageSrc}
                      title={item.title}
                      description={item.description}
                      projectLink={item.projectLink}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

