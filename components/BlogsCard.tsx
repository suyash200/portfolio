import Image from "next/image"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogCardProps {
  imageSrc: string
  title: string
  description: string
  blogLink: string
}

export default function BlogCard({
  imageSrc,
  title,
  description,
  blogLink,
}: BlogCardProps) {
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
      <CardFooter>
        <a
          href={blogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-primary text-white py-2 rounded-md hover:opacity-90 transition"
        >
          Read More
        </a>
      </CardFooter>
    </Card>
  )
}

