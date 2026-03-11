"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  const go = useCallback(
    (dir: "left" | "right") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setIndex((prev) =>
          dir === "right"
            ? (prev + 1) % images.length
            : (prev - 1 + images.length) % images.length
        );
        setDirection(null);
        setAnimating(false);
      }, 250);
    },
    [animating, images.length]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go("right");
      if (e.key === "ArrowLeft") go("left");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close, go]);

  const slideClass = direction === "right"
    ? "translate-x-[-30px] opacity-0"
    : direction === "left"
    ? "translate-x-[30px] opacity-0"
    : "translate-x-0 opacity-100";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ${
        visible ? "bg-black/90 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={close}
    >
      {/* Close button */}
      <button
        onClick={close}
        className={`absolute top-6 right-6 text-white/70 hover:text-white z-10 transition-all duration-300 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <X className="h-8 w-8" />
      </button>

      {/* Counter */}
      <span
        className={`absolute top-6 left-6 text-white/50 text-sm font-heading z-10 transition-all duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {index + 1} / {images.length}
      </span>

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            go("left");
          }}
          className={`absolute left-4 md:left-8 text-white/50 hover:text-white z-10 transition-all duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronLeft className="h-10 w-10" />
        </button>
      )}

      {/* Image */}
      <div
        className={`relative w-[90vw] h-[80vh] transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative w-full h-full transition-all duration-250 ${slideClass}`}>
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            go("right");
          }}
          className={`absolute right-4 md:right-8 text-white/50 hover:text-white z-10 transition-all duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronRight className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
