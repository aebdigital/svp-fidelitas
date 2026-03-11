"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group/img relative aspect-[3/2] overflow-hidden cursor-pointer"
            onClick={() => setLightboxIndex(idx)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover/img:scale-110"
              sizes="(max-width: 478px) 45vw, (max-width: 767px) 30vw, 22vw"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
