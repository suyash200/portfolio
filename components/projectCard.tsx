import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
  imageSrc: string
  title: string
  description: string
  projectLink?: string
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  projectLink,
}: ProjectCardProps) {
  return (
    <Card className="w-full h-[500px] flex flex-col bg-[var(--main)] overflow-hidden">
      <div className="h-[225px] w-full relative">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      {projectLink && (
        <CardFooter>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-primary text-white py-2 rounded-md hover:opacity-90 transition"
          >
            View Project
          </a>
        </CardFooter>
      )}
    </Card>
  )
}


