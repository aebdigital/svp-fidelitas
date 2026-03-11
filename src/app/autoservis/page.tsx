import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClickableImage from "@/components/ClickableImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autoservis | SV.P. FIDELITAS",
  description: "Opravy motorov, diagnostika vozidiel, príprava na STK, servis klimatizácie, výmena čelného skla a 3D geometria.",
};

const sections = [
  {
    title: "Servisné služby pre vozidlá",
    description: "Ponúkame: opravy motorov, diagnostika vozidiel, príprava na STK, oprava podvozkových častí – tlmiče, brzdy, plnenie a kompletný servis AC, výmena čelných skiel, čistenie – leštenie skiel reflektorov vozidiel, čistenie klimatizácie ( ionizácia ), montáž ťažných zariadení, zápis servisu do RSZV",
    image: "/images/autoservis/1.jpg",
  },
  {
    title: "Predaj a výmena prevádzkových kvapalín pre vozidlá",
    description: "brzdová kvapalina, voda do ostrekovačov ( letná, zimná ), chladiaca zmes, prevodový olej, olejové, peľové, kabínové, vzduchové filtre",
    image: "/images/EEEC1822.jpeg",
  },
  {
    title: "3D Geometria aj pre dodávky s najdlhším rázvorom do 3,5t",
    description: "Ponúkame profesionálne nastavenie geometrie kolies pomocou najmodernejšej 3D technológie – a to nielen pre osobné vozidlá, ale aj pre dodávky s predĺženým rázvorom až do 3,5 tony. Presné nastavenie geometrie zabezpečuje rovnomerné opotrebenie pneumatík, lepšiu ovládateľnosť vozidla a bezpečnejšiu jazdu. Vďaka nášmu vybaveniu dokážeme obslúžiť aj väčšie úžitkové vozidlá, ktoré bežne vyžadujú špecializované servisné zázemie.",
    image: "/images/7DA261F1.jpeg",
  },
];

const allImages = sections.map((s) => ({ src: s.image, alt: s.title }));

export default function AutoservisPage() {
  return (
    <>
      <PageHero
        title="Autoservis"
        backgroundImage="/images/8FA0BF52-AD38-4943-ACCB-4151221E60B1_1_102_o-1024x768.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <div className="space-y-20">
            {sections.map((section, idx) => (
              <div key={section.title} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
                <div className="flex-1">
                  <h2 className="text-[30px] md:text-[38px] font-bold text-black mb-4 font-heading leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-[17px] text-[#6a6a6a] leading-relaxed mb-6 font-heading font-normal">
                    {section.description}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-block bg-[#ed2024] text-white font-medium text-[18px] px-[33px] py-[16px] hover:scale-[1.04] transition-transform"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    KONTAKT
                  </Link>
                </div>
                <ClickableImage
                  src={section.image}
                  alt={section.title}
                  className="flex-1 relative h-[350px] md:h-[450px] w-full overflow-hidden"
                  allImages={allImages}
                  index={idx}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
