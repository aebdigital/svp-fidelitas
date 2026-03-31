import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSidebarTabs, { ServiceSidebarSection } from "@/components/ServiceSidebarTabs";

export const metadata: Metadata = {
  title: "Doprava | SV.P. FIDELITAS",
  description: "Kvalitné a spoľahlivé vozidlá a mechanizmy. Preprava betónových zmesí, sypkých materiálov a likvidácia stavebného odpadu.",
};

const sections: ServiceSidebarSection[] = [
  {
    title: "Betónové zmesi",
    description: "Dodávame certifikované betónové zmesi rôznych tried podľa potreby a využitia. Vhodné pre základy, podlahy, priemyselné plochy aj inžinierske stavby.",
    bullets: [
      "Betóny triedy C8/10 až C35/45",
      "Doprava domiešavačom priamo na stavbu",
      "Možnosť výberu konzistencie podľa projektu",
    ],
    images: [{ src: "/images/doprava-betonove-zmesi.jpg", alt: "Betónové zmesi" }],
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
    images: [{ src: "/images/doprava-sypke-materialy.jpg", alt: "Sypké materiály" }],
  },
  {
    title: "Drvenie a triedenie stavebného odpadu",
    description: "Zabezpečujeme ekologický odvoz a likvidáciu stavebného odpadu v súlade s platnými normami. Poskytujeme kontajnery na odpad.",
    bullets: [
      "Kontajnery rôznych objemov",
      "Legálna likvidácia na skládke",
      "Pre firmy aj súkromné osoby",
    ],
    images: [{ src: "/images/doprava-drvenie.png", alt: "Drvenie a triedenie stavebného odpadu" }],
  },
];

export default function DopravaPage() {
  return (
    <>
      <PageHero
        title="Doprava"
        subtitle="Disponujeme kvalitnými a spoľahlivými vozidlami, strojmi a stavebnými mechanizmami, ktoré patria k špičke vo svojich triedach a sú najnovšie vo svojich oblastiach."
        backgroundImage="/images/IMG_8128-1024x768.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <p className="mx-auto mb-12 max-w-5xl text-center text-[17px] leading-relaxed text-[#6a6a6a] font-heading font-normal">
            V oblasti nákladných automobilov využívame značky TATRA, DAF, RENAULT a MAN, ktoré sú zárukou spoľahlivej prevádzky aj v najnáročnejších podmienkach a terénoch. V segmente stavebných mechanizmov používame stroje celosvetovo uznávanej značky CASE a TEREX. Služby vykonávame špeciálnymi strojmi a technológiami s vysokou bezpečnosťou, efektívnosťou a spoľahlivosťou. Prácu realizujeme profesionálne a na vysokej úrovni, aby sme vyhoveli všetkým požiadavkám zákazníka.
          </p>

          <ServiceSidebarTabs sections={sections} />
        </div>
      </section>
    </>
  );
}
