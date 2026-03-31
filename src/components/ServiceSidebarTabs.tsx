"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ClickableImage from "./ClickableImage";
import ImageGallery from "./ImageGallery";

export interface ServiceSidebarSection {
  title: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  images: { src: string; alt: string }[];
  unoptimized?: boolean;
}

interface ServiceSidebarTabsProps {
  sections: ServiceSidebarSection[];
}

function slugifyTitle(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ServiceSidebarTabs({ sections }: ServiceSidebarTabsProps) {
  const ids = useMemo(() => sections.map((section) => slugifyTitle(section.title)), [sections]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    const matchIndex = ids.findIndex((id) => id === hash);
    if (matchIndex >= 0) {
      setActiveIndex(matchIndex);
    }
  }, [ids]);

  const activeSection = sections[activeIndex];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
      <aside className="lg:sticky lg:top-36 lg:self-start">
        <div className="border border-black/10 bg-[#faf8f4] p-3">
          <div className="flex flex-col">
            {sections.map((section, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={section.title}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    window.history.replaceState(null, "", `#${ids[index]}`);
                  }}
                  className={`border-l-[3px] px-4 py-4 text-left transition-colors ${
                    isActive
                      ? "border-[#ed2024] bg-white text-black"
                      : "border-transparent text-[#5f5f5f] hover:bg-white hover:text-black"
                  }`}
                >
                  <span className="block text-[17px] uppercase tracking-[0.08em]">
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <div>
        <div className="mb-8 max-w-4xl">
          <h2 className="section-title mb-3">
            {activeSection.title}
          </h2>
          {activeSection.subtitle && (
            <p className="mb-4 text-[19px] text-[#6a6a6a]">
              {activeSection.subtitle}
            </p>
          )}
          <p className="mb-5 text-[17px] leading-relaxed text-[#6a6a6a]">
            {activeSection.description}
          </p>
          {activeSection.bullets && activeSection.bullets.length > 0 && (
            <ul className="mb-8 space-y-2">
              {activeSection.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-[17px] leading-relaxed text-[#6a6a6a]">
                  <span className="mt-1 text-[#ed2024]">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/kontakt"
            className="inline-block bg-[#ed2024] px-[33px] py-[16px] text-[18px] font-medium text-white transition-transform hover:scale-[1.04]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            KONTAKT
          </Link>
        </div>

        {activeSection.images.length === 1 ? (
          <ClickableImage
            src={activeSection.images[0].src}
            alt={activeSection.images[0].alt}
            className="relative h-[360px] w-full overflow-hidden md:h-[500px]"
            allImages={activeSection.images}
            index={0}
            unoptimized={activeSection.unoptimized}
          />
        ) : (
          <ImageGallery images={activeSection.images} />
        )}
      </div>
    </div>
  );
}
