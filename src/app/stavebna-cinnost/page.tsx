import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stavebná činnosť | SV.P. FIDELITAS",
  description: "Zakladanie stavieb, betónové práce, úpravy povrchov a výstavba komunikácií na kľúč.",
};

const sections = [
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
        backgroundImage="/images/IMG_6672-scaled-e1744026719484-1024x990.jpg"
        badgeImage="/images/ISO-9001-SK-1_page-0001-724x1024.jpg"
        badgeAlt="ISO 9001 Certifikát"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] px-4">
          <div className="space-y-20">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[30px] md:text-[38px] font-bold text-black mb-4 font-heading leading-tight">
                  {section.title}
                </h2>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <p className="text-[17px] text-[#6a6a6a] leading-relaxed mb-4 font-heading font-normal">
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
                    className="shrink-0 inline-block bg-[#ed2024] text-white font-medium text-[18px] px-[33px] py-[16px] rounded-[3px] hover:scale-[1.04] transition-transform self-start"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Kontakt
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
