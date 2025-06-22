import { cn } from "@/lib/utils"

interface Props {
  imageUrl: string;
  caption?: string;
  className?: string;
}

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-base border-2 border-border bg-main font-base shadow-shadow overflow-hidden",
        className
      )}
    >
      <img
        className="w-full h-full  aspect-1/1"
        src={imageUrl}
        alt={caption || "image"}
      />

    </figure>
  );
}


