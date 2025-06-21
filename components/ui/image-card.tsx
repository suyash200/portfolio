import { cn } from "@/lib/utils"

type Props = {
  imageUrl: string
  className?: string
}

export default function ImageCard({ imageUrl, className }: Props) {
  return (
    <figure
      className={cn(
        "w-[500px]  overflow-hidden rounded-base  border-border bg-main font-base",
        className,
      )}
    >
      <img className="w-full aspect-1/1 h-80" src={imageUrl} alt="image" />

    </figure>
  )
}
