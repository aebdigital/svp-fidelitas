"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const certificates = [
  { src: "/ISO/iso-3834-cert.webp", alt: "EN ISO 3834-2:2021 Certifikát" },
  { src: "/ISO/iso-3834-priloha.webp", alt: "EN ISO 3834-2:2021 Príloha certifikátu" },
  { src: "/ISO/iso-9001-cert.webp", alt: "ISO 9001:2015 Certifikát" },
  { src: "/ISO/iso-14001-cert.webp", alt: "ISO 14001:2015 Certifikát" },
  { src: "/ISO/iso-45001-cert.webp", alt: "ISO 45001:2018 Certifikát" },
];

export default function CertificatesGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {certificates.map((cert, i) => (
          <button
            key={cert.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300 text-left cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 18vw"
              />
            </div>
            <div className="p-3 border-t border-black/5">
              <p className="text-[14px] text-[#6a6a6a] text-center leading-snug">{cert.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={certificates}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
