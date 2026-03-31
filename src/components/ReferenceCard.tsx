"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ReferenceCardProps {
  href: string;
  title: string;
  city: string;
  image: string;
}

export default function ReferenceCard({ href, title, city, image }: ReferenceCardProps) {
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
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/35" />

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="max-w-[78%] text-[22px] leading-[1.2] text-white">
              {title}
            </h3>
            <ArrowUpRight className="mt-1 h-7 w-7 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p className="text-[17px] text-white/88">
            {city}
          </p>
        </div>
      </div>
    </Link>
  );
}
