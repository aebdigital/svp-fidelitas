import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSidebarTabs, { ServiceSidebarSection } from "@/components/ServiceSidebarTabs";

export const metadata: Metadata = {
  title: "Pneuservis | SV.P. FIDELITAS",
  description: "Kompletný pneuservis pre osobné aj nákladné vozidlá, traktory a stavebné stroje. Predaj pneumatík a diskov.",
};

const sections: ServiceSidebarSection[] = [
  {
    title: "Servis pneumatík",
    description: 'Ponúkame servis na osobné autá, nákladné autá, traktory do 56", špeciálne, stavebné stroje, runflat do 26" certifikovaná vulkanizácia pneumatík pangopressom za tepla a za studena ( bočné, kolmé prírazy) uskladnenie pneumatík',
    images: [
      { src: "/images/oprava5.jpg", alt: "Pneuservis 1" },
      { src: "/images/oprava4.jpg", alt: "Pneuservis 2" },
      { src: "/images/oprava3.jpg", alt: "Pneuservis 3" },
      { src: "/images/oprava8.jpg", alt: "Pneuservis 4" },
      { src: "/images/oprava7.jpg", alt: "Pneuservis 5" },
      { src: "/images/oprava2.jpg", alt: "Pneuservis 6" },
    ],
  },
  {
    title: "Predaj pneumatík a diskov",
    description: "Ponúkame pneumatiky a diskov významných svetových výrobcov pre osobné, nákladné, poľnohospodárske stroje, špeciálne stroje a aj pneu na motorky",
    images: [
      { src: "/images/oprava91.jpg", alt: "Predaj 1" },
      { src: "/images/oprava9.jpg", alt: "Predaj 2" },
      { src: "/images/oprava92.jpg", alt: "Predaj 3" },
    ],
  },
];

export default function PneuservisPage() {
  return (
    <>
      <PageHero
        title="Pneuservis"
        backgroundImage="/images/oprava8.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <ServiceSidebarTabs sections={sections} />
        </div>
      </section>
    </>
  );
}
