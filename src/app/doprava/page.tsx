import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ClickableImage from "@/components/ClickableImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doprava | SV.P. FIDELITAS",
  description: "Kvalitné a spoľahlivé vozidlá a mechanizmy. Preprava betónových zmesí, sypkých materiálov a likvidácia stavebného odpadu.",
};

const sections = [
  {
    title: "Betónové zmesi",
    description: "Dodávame certifikované betónové zmesi rôznych tried podľa potreby a využitia. Vhodné pre základy, podlahy, priemyselné plochy aj inžinierske stavby.",
    bullets: [
      "Betóny triedy C8/10 až C35/45",
      "Doprava domiešavačom priamo na stavbu",
      "Možnosť výberu konzistencie podľa projektu",
    ],
    image: "/images/doprava-betonove-zmesi.jpg",
  },
  {
    title: "Sypké materiály",
    subtitle: "(štrk, piesok, kameň, zemina, recyklácia, sklo, asfalt)",
    description: "Ponúkame široký sortiment sypkých materiálov na stavebné aj záhradné účely. Materiál dodávame v požadovanom množstve a kvalite vrátane dopravy.",
    bullets: [
      "Prírodné aj recyklované frakcie",
      "Nakládka priamo z vlastného skladu",
      "Rýchle a spoľahlivé dodanie",
    ],
    image: "/images/doprava-sypke-materialy.jpg",
  },
  {
    title: "Drvenie a triedenie stavebného odpadu",
    description: "Zabezpečujeme ekologický odvoz a likvidáciu stavebného odpadu v súlade s platnými normami. Poskytujeme kontajnery na odpad.",
    bullets: [
      "Kontajnery rôznych objemov",
      "Legálna likvidácia na skládke",
      "Pre firmy aj súkromné osoby",
    ],
    image: "/images/doprava-drvenie.png",
  },
];

const allImages = sections.map((s) => ({ src: s.image, alt: s.title }));

export default function DopravaPage() {
  return (
    <>
      <PageHero
        title="Doprava"
        subtitle="Disponujeme kvalitnými a spoľahlivými vozidlami, strojmi a stavebnými mechanizmami, ktoré patria k špičke vo svojich triedach a sú najnovšie vo svojich oblastiach."
        backgroundImage="/images/IMG_6672-scaled-e1744026719484-1024x990.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <p className="text-[17px] text-[#6a6a6a] mb-12 font-heading font-normal max-w-5xl leading-relaxed">
            V oblasti nákladných automobilov využívame značky TATRA, DAF, RENAULT a MAN, ktoré sú zárukou spoľahlivej prevádzky aj v najnáročnejších podmienkach a terénoch. V segmente stavebných mechanizmov používame stroje celosvetovo uznávanej značky CASE a TEREX. Služby vykonávame špeciálnymi strojmi a technológiami s vysokou bezpečnosťou, efektívnosťou a spoľahlivosťou. Prácu realizujeme profesionálne a na vysokej úrovni, aby sme vyhoveli všetkým požiadavkám zákazníka.
          </p>

          <div className="space-y-20">
            {sections.map((section, idx) => (
              <div key={section.title} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
                <div className="flex-1">
                  <h2 className="text-[38px] font-bold text-black mb-2 font-heading leading-tight">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="text-[17px] text-[#6a6a6a] mb-4 font-heading">{section.subtitle}</p>
                  )}
                  <p className="text-[17px] text-[#6a6a6a] leading-relaxed mb-4 font-heading font-normal">
                    {section.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="text-[17px] text-[#6a6a6a] font-heading font-normal flex items-start gap-2">
                        <span className="text-[#ed2024] mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
