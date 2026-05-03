import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSidebarTabs, { ServiceSidebarSection } from "@/components/ServiceSidebarTabs";
import CertificatesGallery from "@/components/CertificatesGallery";

export const metadata: Metadata = {
  title: "Stavebná činnosť | SV.P. FIDELITAS",
  description: "Zakladanie stavieb, betónové práce, úpravy povrchov a výstavba komunikácií na kľúč.",
};

const sections: ServiceSidebarSection[] = [
  {
    title: "Zakladanie stavieb, kompletné stavebné práce, základové dosky na kľúč",
    description: "Komplexné služby od výkopových prác až po hotové základové dosky. Realizujeme kompletné zakladanie rodinných domov aj väčších objektov, vrátane debnenia, vystuženia a betonáže.",
    bullets: [
      "Základové pásy, pätky, dosky",
      "Presné výškové a rozmerové osadenie",
      "Práce na kľúč vrátane izolácií a prípravy pre inštalácie",
    ],
    images: [
      { src: "/images/IMG_6259.jpg", alt: "Zakladanie 1" },
      { src: "/images/IMG_6404.jpg", alt: "Zakladanie 2" },
      { src: "/images/IMG_6727.jpg", alt: "Zakladanie 3" },
      { src: "/images/IMG_6851.jpg", alt: "Zakladanie 4" },
      { src: "/images/IMG_6894-rotated.jpg", alt: "Zakladanie 5" },
      { src: "/images/IMG_6979.jpg", alt: "Zakladanie 6" },
    ],
  },
  {
    title: "Uloženie a úprava betónu, metličkový betón",
    description: "Realizujeme betónové plochy s povrchovou úpravou metličkovaním pre zvýšenie protišmykovosti a odolnosti. Vhodné pre priemyselné dvory, príjazdy či chodníky.",
    bullets: [
      "Metličkový efekt pre bezpečný pohyb",
      "Betónovanie vonkajších aj vnútorných plôch",
      "Dlhá životnosť a nízka údržba",
    ],
    images: [
      { src: "/images/IMG_5480-scaled.jpg", alt: "Betón 1" },
      { src: "/images/IMG_6135-scaled.jpg", alt: "Betón 2" },
    ],
  },
  {
    title: "Pancierová úprava povrchu betónu, farebné vsypy podľa požiadaviek zákazníka",
    description: "Ponúkame pancierové betóny s vysokou odolnosťou proti opotrebovaniu. Povrch upravujeme vsypom podľa požiadaviek – od klasických po farebné riešenia.",
    bullets: [
      "Vysoká odolnosť voči oderu",
      "Farebné dekoratívne vsypy",
      "Ideálne pre dielne, sklady, parkoviská",
    ],
    images: [
      { src: "/images/IMG_6857-1-scaled.jpg", alt: "Pancier 1" },
      { src: "/images/F3445630.jpeg", alt: "Pancier 2" },
      { src: "/images/1D8AD221.jpeg", alt: "Pancier 3" },
      { src: "/images/01443C28.jpeg", alt: "Pancier 4" },
    ],
  },
  {
    title: "Rekonštrukcia a výstavba ciest, chodníky, verejné osvetlenie a dopravné značenie",
    description: "Zabezpečujeme kompletné práce na cestnej infraštruktúre, od menších chodníkov až po rozsiahle stavebné úpravy ciest a spevnených plôch.",
    bullets: [
      "Pokládka obrubníkov a asfaltovanie",
      "Rekonštrukcie a opravy starých komunikácií",
      "Novostavby chodníkov a spevnených plôch",
    ],
    images: [
      { src: "/images/IMG_5473-1024x768.jpg", alt: "Cesty 1" },
      { src: "/images/IMG_5482-scaled.jpg", alt: "Cesty 2" },
      { src: "/images/IMG_5615-scaled.jpg", alt: "Cesty 3" },
      { src: "/images/IMG_5618-scaled.jpg", alt: "Cesty 4" },
      { src: "/images/IMG_6564-scaled.jpg", alt: "Cesty 5" },
    ],
  },
];

export default function StavebnaCinnostPage() {
  return (
    <>
      <PageHero
        title="Stavebná činnosť"
        subtitle="Zakladanie stavieb, kompletné stavebné práce, základové dosky na kľúč"
        backgroundImage="/images/IMG_6259.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <ServiceSidebarTabs sections={sections} />
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-[#faf8f4]">
        <div className="mx-auto w-[90vw] md:px-4">
          <div className="text-center mb-12">
            <p className="text-[18px] text-[#ed2024] font-bold mb-2 font-heading tracking-wide">Kvalita overená certifikátmi</p>
            <h2 className="section-title">Naše certifikáty</h2>
          </div>

          <CertificatesGallery />
        </div>
      </section>
    </>
  );
}
