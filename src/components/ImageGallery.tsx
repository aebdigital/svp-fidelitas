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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group/img relative aspect-[4/3] overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(15,23,42,0.1)]"
            onClick={() => setLightboxIndex(idx)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover/img:scale-110"
              sizes="(max-width: 767px) 90vw, (max-width: 1279px) 44vw, 30vw"
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
