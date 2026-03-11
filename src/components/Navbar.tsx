"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

  return (
    <header className="w-full z-50 absolute top-0 left-0 right-0">
      {/* Top Red Bar */}
      <div className="bg-[#ed2024] text-white hidden md:block">
        <div className="mx-auto w-[90vw] px-4 py-2 flex items-center justify-between text-sm">
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
      <div className="bg-white/20 backdrop-blur-md border-b border-white/20">
        <div className="mx-auto w-[90vw] px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative shrink-0">
            <Image
              src="/images/logo.png"
              alt="SV.P. FIDELITAS"
              width={210}
              height={65}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-3 text-[16px] font-bold text-white font-heading hover:text-[#ed2024] transition-colors group drop-shadow-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ed2024] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-xl">
          <nav className="py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg font-bold text-black font-heading hover:text-[#ed2024] hover:bg-red-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4 space-y-2 text-sm text-gray-600">
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
        </div>
      )}
    </header>
  );
}
