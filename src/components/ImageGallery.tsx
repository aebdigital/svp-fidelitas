import Image from "next/image";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {images.map((img, idx) => (
        <div key={idx} className="relative aspect-[3/2] overflow-hidden rounded-md">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 478px) 45vw, (max-width: 767px) 30vw, 22vw"
          />
        </div>
      ))}
    </div>
  );
}
