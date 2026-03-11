import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inžinierske siete | SV.P. FIDELITAS",
  description: "Komplexné riešenia v oblasti kanalizácií, vodovodov, plynovodov a NN rozvodov.",
};

const sections = [
  {
    title: "Kanalizácia",
    subtitle: "Dažďová / Splašková",
    description: "Zabezpečujeme komplexné riešenia v oblasti výstavby a rekonštrukcie kanalizačných sietí – vrátane dažďovej aj splaškovej kanalizácie. Navrhneme optimálne technické riešenie, zabezpečíme projektovú dokumentáciu aj samotnú realizáciu.",
    bullets: [
      "Vybudovanie novej kanalizácie",
      "Modernizácia starších sietí",
      "Pripojenie objektov k verejnej kanalizácii",
    ],
    images: [
      { src: "/images/1873D228-536B-436A-B315-D685591990E8_4_5005_c.jpeg", alt: "Kanalizácia 1" },
      { src: "/images/548AA351-0E73-4CD6-AB30-49E8AC8E868B_4_5005_c.jpeg", alt: "Kanalizácia 2" },
      { src: "/images/6E8B7DE0-1BF2-4B3E-8CBF-4DC98124C3EF_4_5005_c.jpeg", alt: "Kanalizácia 3" },
      { src: "/images/32E87B46-328D-4B38-B212-3098D8CBE8B6-1-1021x1024.jpeg", alt: "Kanalizácia 4" },
      { src: "/images/IMG_3001-scaled.jpg", alt: "Kanalizácia 5" },
    ],
  },
  {
    title: "Vodovod",
    subtitle: "Vybudovanie / Rekonštrukcia",
    description: "Realizujeme výstavbu aj rekonštrukciu vodovodných prípojok a rozvodov. Používame kvalitné certifikované materiály a dbáme na dlhodobú spoľahlivosť a hygienickú nezávadnosť systému.",
    bullets: [
      "Príprava a pokládka vodovodných potrubí",
      "Pripojenie na existujúcu infraštruktúru",
      "Koordinácia so správcami sietí",
    ],
    images: [
      { src: "/images/IMG_6672-scaled-e1744026719484-1024x990.jpg", alt: "Vodovod 1" },
      { src: "/images/79B3F2E9.jpeg", alt: "Vodovod 2" },
      { src: "/images/D129A418.jpeg", alt: "Vodovod 3" },
      { src: "/images/5D93E708.jpeg", alt: "Vodovod 4" },
    ],
  },
  {
    title: "Plynovod",
    subtitle: "Vybudovanie / Rekonštrukcia / Prípojky",
    description: "Zabezpečujeme odbornú montáž, rekonštrukcie a rozšírenie plynovodov vrátane prípojok. Všetky práce vykonávame v súlade s aktuálnymi normami a bezpečnostnými predpismi.",
    bullets: [
      "Plynofikácia rodinných domov a objektov",
      "Rekonštrukcie existujúcich plynovodných vedení",
      "Projektová dokumentácia a revízie",
    ],
    images: [
      { src: "/images/IMG_5718-scaled.jpg", alt: "Plynovod 1" },
      { src: "/images/IMG_6177-scaled.jpg", alt: "Plynovod 2" },
      { src: "/images/IMG_6064-scaled.jpg", alt: "Plynovod 3" },
      { src: "/images/IMG_5662-scaled.jpg", alt: "Plynovod 4" },
    ],
  },
  {
    title: "Vybudovanie rozvodov nízkeho napätia (NN)",
    subtitle: "Vybudovanie / Rekonštrukcia / Prípojky",
    description: "Zabezpečujeme kompletné riešenia v oblasti NN rozvodov – od návrhu cez montáž až po revízie. Realizujeme nové inštalácie aj modernizáciu existujúcich vedení podľa platných noriem a bezpečnostných požiadaviek.",
    bullets: [
      "Realizácia NN prípojok pre rodinné domy a objekty",
      "Rekonštrukcie a rozšírenie existujúcich rozvodov",
      "Projektová dokumentácia, revízie a skúšky",
    ],
    images: [
      { src: "/images/PHOTO-2023-09-06.jpg", alt: "NN rozvody 1" },
      { src: "/images/IMG_3015-scaled.jpg", alt: "NN rozvody 2" },
    ],
  },
];

export default function InzinierskeSietePage() {
  return (
    <>
      <PageHero
        title="Inžinierske siete"
        backgroundImage="/images/IMG_6672-scaled-e1744026719484-1024x990.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <div className="space-y-20">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[38px] font-bold text-black mb-1 font-heading leading-tight max-w-3xl">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-[22px] text-[#6a6a6a] mb-4 font-heading font-normal">{section.subtitle}</p>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <p className="text-[17px] text-[#6a6a6a] leading-relaxed mb-4 font-heading font-normal max-w-2xl">
                      {section.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="text-[17px] text-[#6a6a6a] font-heading font-normal flex items-start gap-2">
                          <span className="text-[#ed2024] mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/kontakt"
                    className="shrink-0 inline-block bg-[#ed2024] text-white font-medium text-[18px] px-[33px] py-[16px] hover:scale-[1.04] transition-transform self-start"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    KONTAKT
                  </Link>
                </div>

                <ImageGallery images={section.images} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
