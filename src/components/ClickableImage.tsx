"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  allImages?: { src: string; alt: string }[];
  index?: number;
  unoptimized?: boolean;
}

export default function ClickableImage({
  src,
  alt,
  className = "",
  allImages,
  index = 0,
  unoptimized = false,
}: ClickableImageProps) {
  const [open, setOpen] = useState(false);

  const images = allImages || [{ src, alt }];
  const startIndex = allImages ? index : 0;

  return (
    <>
      <div className={`cursor-pointer group/img ${className}`} onClick={() => setOpen(true)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
          unoptimized={unoptimized}
          className="object-cover transition-transform duration-700 ease-in-out group-hover/img:scale-110"
        />
      </div>

      {open && (
        <Lightbox
          images={images}
          initialIndex={startIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
