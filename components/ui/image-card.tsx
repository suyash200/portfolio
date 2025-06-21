import { cn } from "@/lib/utils"

type Props = {
  imageUrl: string
  caption?: string
  className?: string
}

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-[250px] rounded-base border-2 border-border bg-main font-base shadow-shadow",
        className,
      )}
    >
      <img className="w-full h-full aspect-1/1" src={imageUrl} alt="image" />

    </figure>
  )
}

