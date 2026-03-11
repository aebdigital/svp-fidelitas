"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/doprava", label: "Doprava" },
  { href: "/inzinierske-siete", label: "Inžinierske siete" },
  { href: "/stavebna-cinnost", label: "Stavebná činnosť" },
  { href: "/autoservis", label: "Autoservis" },
  { href: "/pneuservis", label: "Pneuservis" },
  { href: "/referencie", label: "Referencie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > 100 && currentY > lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className={`w-full z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ${hidden && !isOpen ? "-translate-y-full" : "translate-y-0"}`}>
        {/* Top Red Bar */}
        <div className="bg-[#ed2024] text-white hidden md:block">
          <div className="mx-auto w-[90vw] md:px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                Šoltésova 17, 920 01 Hlohovec
              </span>
              <a href="mailto:svp.fidelitas@hlohovec.net" className="flex items-center gap-2 hover:underline">
                <Mail className="h-3.5 w-3.5" />
                svp.fidelitas@hlohovec.net
              </a>
            </div>
            <a href="tel:+421908561650" className="flex items-center gap-2 hover:underline">
              <Phone className="h-3.5 w-3.5" />
              +421 908 561 650
            </a>
          </div>
        </div>

        {/* Logo + Navigation Bar - transparent blur */}
        <div className="bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="mx-auto w-[90vw] md:px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative shrink-0 block w-[170px] h-[56px] md:w-[240px] md:h-[80px]">
              <Image
                src="/logo-removebg-preview.png"
                alt="SV.P. FIDELITAS"
                fill
                className="object-fill"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-3 text-[16px] font-bold font-heading hover:text-[#ed2024] transition-colors group drop-shadow-sm uppercase tracking-wide ${isActive ? "text-[#ed2024]" : "text-white"}`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#ed2024] transition-transform origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white z-50"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - slide from left */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <nav
        className={`md:hidden fixed top-0 left-0 bottom-0 z-50 flex w-[min(86vw,320px)] flex-col bg-white/95 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "translate-x-0" : "-translate-x-[104%]"}`}
      >
        <div className="pt-6 pb-4 px-6 border-b border-gray-100">
          <Link href="/" onClick={() => setIsOpen(false)} className="relative block w-[180px] h-[60px]">
            <Image
              src="/logo-removebg-preview.png"
              alt="SV.P. FIDELITAS"
              fill
              className="object-fill"
            />
          </Link>
        </div>
        <div className="py-4 px-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3.5 text-[17px] font-bold font-heading hover:text-[#ed2024] hover:bg-red-50 transition-colors ${isActive ? "text-[#ed2024] bg-red-50 border-l-[3px] border-[#ed2024]" : "text-black border-l-[3px] border-transparent"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto px-6 py-6 border-t border-gray-100 space-y-3 text-sm text-gray-600">
          <a href="tel:+421908561650" className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#ed2024]" />
            +421 908 561 650
          </a>
          <a href="mailto:svp.fidelitas@hlohovec.net" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#ed2024]" />
            svp.fidelitas@hlohovec.net
          </a>
        </div>
      </nav>
    </>
  );
}
