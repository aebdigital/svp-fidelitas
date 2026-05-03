"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ReferenceCardProps {
  href: string;
  title: string;
  city: string;
  image: string;
  objectPosition?: string;
}

export default function ReferenceCard({ href, title, image, objectPosition }: ReferenceCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden bg-black shadow-[0_12px_40px_rgba(15,23,42,0.14)]"
    >
      <div className="relative h-[280px] overflow-hidden md:h-[300px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
          style={objectPosition ? { objectPosition } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/35" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-[22px] leading-[1.2] text-white">
            {title}
          </h3>
        </div>

        <ArrowUpRight className="absolute top-4 right-4 h-7 w-7 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}
