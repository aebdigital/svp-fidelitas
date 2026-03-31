import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSidebarTabs, { ServiceSidebarSection } from "@/components/ServiceSidebarTabs";

export const metadata: Metadata = {
  title: "Autoservis | SV.P. FIDELITAS",
  description: "Opravy motorov, diagnostika vozidiel, príprava na STK, servis klimatizácie, výmena čelného skla a 3D geometria.",
};

const sections: ServiceSidebarSection[] = [
  {
    title: "Servisné služby pre vozidlá",
    description: "Ponúkame: opravy motorov, diagnostika vozidiel, príprava na STK, oprava podvozkových častí – tlmiče, brzdy, plnenie a kompletný servis AC, výmena čelných skiel, čistenie – leštenie skiel reflektorov vozidiel, čistenie klimatizácie ( ionizácia ), montáž ťažných zariadení, zápis servisu do RSZV",
    images: [{ src: "/images/autoservis/1.jpg", alt: "Servisné služby pre vozidlá" }],
    unoptimized: true,
  },
  {
    title: "Predaj a výmena prevádzkových kvapalín pre vozidlá",
    description: "brzdová kvapalina, voda do ostrekovačov ( letná, zimná ), chladiaca zmes, prevodový olej, olejové, peľové, kabínové, vzduchové filtre",
    images: [{ src: "/images/EEEC1822.jpeg", alt: "Predaj a výmena prevádzkových kvapalín" }],
    unoptimized: true,
  },
  {
    title: "3D Geometria aj pre dodávky s najdlhším rázvorom do 3,5t",
    description: "Ponúkame profesionálne nastavenie geometrie kolies pomocou najmodernejšej 3D technológie – a to nielen pre osobné vozidlá, ale aj pre dodávky s predĺženým rázvorom až do 3,5 tony. Presné nastavenie geometrie zabezpečuje rovnomerné opotrebenie pneumatík, lepšiu ovládateľnosť vozidla a bezpečnejšiu jazdu. Vďaka nášmu vybaveniu dokážeme obslúžiť aj väčšie úžitkové vozidlá, ktoré bežne vyžadujú špecializované servisné zázemie.",
    images: [{ src: "/images/7DA261F1.jpeg", alt: "3D geometria" }],
    unoptimized: true,
  },
];

export default function AutoservisPage() {
  return (
    <>
      <PageHero
        title="Autoservis"
        backgroundImage="/images/8FA0BF52-AD38-4943-ACCB-4151221E60B1_1_102_o-1024x768.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <ServiceSidebarTabs sections={sections} />
        </div>
      </section>
    </>
  );
}
