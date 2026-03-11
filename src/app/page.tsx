"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

const serviceCards = [
  { title: "Doprava", img: "/images/IMG_8128-1024x768.jpg", href: "/doprava" },
  { title: "Inžinierske siete", img: "/images/IMG_6672-scaled-e1744026719484-1024x990.jpg", href: "/inzinierske-siete" },
  { title: "Stavebná činnosť", img: "/images/IMG_6397-1-1024x768.jpg", href: "/stavebna-cinnost" },
  { title: "Autoservis", img: "/images/8FA0BF52-AD38-4943-ACCB-4151221E60B1_1_102_o-1024x768.jpeg", href: "/autoservis" },
  { title: "Pneuservis", img: "/images/oprava8.jpg", href: "/pneuservis" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setOffset(window.scrollY * 0.08);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with parallax + rotating backgrounds */}
      <section ref={heroRef} className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(-${offset}px)` }}>
          {heroImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="SV.P. FIDELITAS"
              fill
              className={`object-cover scale-[1.08] transition-opacity duration-[1200ms] ease-in-out ${
                i === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              priority={i === 0}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto w-[90vw] md:px-4">
          <div className="w-full lg:max-w-[69%]">
            <h1 className="text-[44px] md:text-[72px] font-extrabold text-white leading-[1.1] mb-4 font-heading drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Všetko pod jednou strechou
            </h1>
            <p className="text-[17px] md:text-[20px] text-white font-normal leading-relaxed mb-10 font-heading">
              Vďaka dlhoročným skúsenostiam poskytujeme spoľahlivé a profesionálne služby
              v oblasti dopravy, stavebných prác, inžinierskych sietí, autoservisu aj pneuservisu
            </p>
            <Link
              href="#sluzby"
              className="inline-block bg-[#ed2024] text-white font-medium text-[18px] px-[33px] py-[16px] hover:scale-[1.04] transition-transform"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              SLUŽBY
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[20px] text-[#f44e19] font-bold mb-2 font-heading">SVP.FIDELITAS</p>
              <h2 className="text-[38px] font-bold text-black mb-6 font-heading leading-tight">
                SV.P.FIDELITAS, s.r.o.
              </h2>
              <p className="text-[17px] text-[#6a6a6a] leading-relaxed mb-8 font-heading font-normal">
                SV.P. FIDELITAS s.r.o. je tu pre Vás od roku 1998. Našou ambíciou je poskytnúť partnerom
                a klientom široké portfólio služieb s dôrazom kladeným najmä na kvalitu odvedenej práce.
              </p>
              <div className="flex gap-8 mb-8">
                <div>
                  <span className="text-[21px] font-bold text-black font-heading">500+</span>
                  <span className="text-[21px] text-[#6a6a6a] font-heading"> spokojných klientov</span>
                </div>
                <div>
                  <span className="text-[21px] font-bold text-black font-heading">27</span>
                  <span className="text-[21px] text-[#6a6a6a] font-heading"> rokov na trhu</span>
                </div>
              </div>
              <Link
                href="/kontakt"
                className="inline-block bg-[#ed2024] text-white font-medium text-[18px] px-[33px] py-[16px] hover:scale-[1.04] transition-transform"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                KONTAKT
              </Link>
            </div>
            <div className="relative overflow-hidden shadow-lg aspect-video">
              <iframe
                src="https://www.youtube.com/embed/itZMTamycnQ"
                title="SV.P. FIDELITAS"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <h2 className="text-[38px] font-bold text-black mb-10 font-heading text-center">
            S čím Vám vieme pomôcť?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCards.slice(0, 3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-[30vh] min-h-[220px] overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-[5%] left-[5%] text-white font-bold text-[20px] font-heading">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:w-2/3 lg:mx-auto">
            {serviceCards.slice(3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-[30vh] min-h-[220px] overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-[5%] left-[5%] text-white font-bold text-[20px] font-heading">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
