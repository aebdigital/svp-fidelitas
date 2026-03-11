import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "GDPR | SV.P. FIDELITAS",
  description: "Zásady ochrany osobných údajov SV.P. FIDELITAS s.r.o.",
};

export default function GdprPage() {
  return (
    <>
      <PageHero title="Ochrana osobných údajov (GDPR)" backgroundImage="/images/IMG_8128-1024x768.jpg" />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] px-4 text-[17px] text-[#6a6a6a] font-heading font-normal leading-relaxed [&_h2]:text-[28px] [&_h2]:font-bold [&_h2]:text-black [&_h2]:mt-10 [&_h2]:mb-4 [&_ul]:space-y-1 [&_ul]:ml-4 [&_li]:before:content-['•'] [&_li]:before:text-[#ed2024] [&_li]:before:mr-2 [&_p]:mb-3">
          <h2>Prevádzkovateľ</h2>
          <p>SV.P. FIDELITAS, s.r.o. (IČO: 34104054)<br />Šoltésova 17, 920 01 Hlohovec</p>
          <h2>Zhromažďovanie údajov</h2>
          <p>Spoločnosť spracúva nasledovné osobné údaje:</p>
          <ul>
            <li>Kontaktné údaje: meno, e-mailová adresa, telefónne číslo</li>
            <li>Údaje o používaní webovej stránky (IP adresy, navigácia)</li>
            <li>Informácie súvisiace s dopytmi na služby</li>
          </ul>
          <h2>Účely spracovania</h2>
          <ul>
            <li>Odpovede na dopyty prostredníctvom kontaktného formulára</li>
            <li>Poskytovanie služieb</li>
            <li>Zlepšovanie webovej stránky a analytika</li>
          </ul>
          <h2>Právny základ</h2>
          <ul>
            <li>Plnenie zmluvy alebo predzmluvné opatrenia</li>
            <li>Oprávnené obchodné záujmy</li>
            <li>Súhlas používateľa (najmä pre marketingovú komunikáciu)</li>
          </ul>
          <h2>Vaše práva</h2>
          <ul>
            <li>Prístup k osobným údajom</li>
            <li>Opravu údajov</li>
            <li>Vymazanie údajov</li>
            <li>Obmedzenie spracovania</li>
            <li>Prenosnosť údajov</li>
            <li>Odvolanie súhlasu</li>
            <li>Podanie sťažnosti dozornému orgánu</li>
          </ul>
          <h2>Kontakt</h2>
          <p>E-mail: svp.fidelitas@hlohovec.net<br />Telefón: +421 908 561 650</p>
        </div>
      </section>
    </>
  );
}
