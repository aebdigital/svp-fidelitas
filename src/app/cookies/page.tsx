import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookies | SV.P. FIDELITAS",
  description: "Zásady používania cookies na stránke SV.P. FIDELITAS s.r.o.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero title="Cookies" backgroundImage="/images/IMG_8128-1024x768.jpg" />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] px-4 text-[17px] text-[#6a6a6a] font-heading font-normal leading-relaxed [&_h2]:text-[28px] [&_h2]:font-bold [&_h2]:text-black [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:text-black [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-3">
          <p>Táto webová stránka používa súbory cookies a súvisiace technológie na zlepšenie používateľského zážitku. Tieto zásady sa vzťahujú na občanov EÚ a obyvateľov Európskeho hospodárskeho priestoru a Švajčiarska.</p>
          <h2>Typy cookies</h2>
          <h3>Funkčné cookies</h3>
          <p>Umožňujú základnú funkčnosť webovej stránky bez nutnosti súhlasu.</p>
          <h3>Štatistické cookies</h3>
          <p>Analyzujú vzory používania stránky za účelom zlepšenia používateľského zážitku. Na ich použitie sa vyžaduje súhlas používateľa.</p>
          <h3>Marketingové / sledovacie cookies</h3>
          <p>Vytvárajú profily používateľov na účely personalizovanej reklamy alebo sledovania naprieč stránkami.</p>
          <h2>Vaše práva</h2>
          <p>Návštevníci môžu spravovať preferencie cookies prostredníctvom bannera súhlasu. Vypnutie všetkých cookies môže obmedziť funkčnosť webovej stránky.</p>
          <h2>Kontakt</h2>
          <p>SV.P. FIDELITAS, s.r.o.<br />Šoltésova 17, 920 01 Hlohovec<br />E-mail: svp.fidelitas@hlohovec.net<br />Telefón: +421 908 561 650</p>
        </div>
      </section>
    </>
  );
}
