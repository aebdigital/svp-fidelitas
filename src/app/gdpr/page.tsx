import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "GDPR | SV.P. FIDELITAS",
  description: "Zásady ochrany osobných údajov spoločnosti SV.P. FIDELITAS s.r.o.",
};

const gdprText = `GDPR
Ochrana osobných údajov (GDPR)

1. Úvod

Spoločnosť SV.P.FIDELITAS, s.r.o., IČO: 34104054, DIČ: 2020388029, IČ DPH: SK2020388029, so sídlom na adrese Šoltésova 17, 920 01 Hlohovec (ďalej len „my“, „naša spoločnosť“ alebo „prevádzkovateľ“), spracováva vaše osobné údaje s cieľom chrániť vaše práva a slúžiť vám v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR). Tento dokument poskytuje informácie o tom, ako spracovávame vaše osobné údaje, na aký účel a aké máte práva v súvislosti s ich spracovaním.

2. Aké údaje spracúvame?

V závislosti od toho, ako používate našu webstránku a naše služby, môžeme spracovávať nasledovné osobné údaje:

Kontaktné údaje: ako meno, e-mailová adresa, telefónne číslo, ak nás kontaktujete prostredníctvom kontaktného formulára na našej webstránke.
Údaje o používateľovi webu: ako IP adresa, dátum a čas návštevy našich stránok, navštívené stránky, ktoré sa zbierajú automaticky pomocou cookies alebo analytických nástrojov.
Údaje o službách: ak sa nás pýtate na naše služby (doprava, inžinierske siete, stavebná činnosť, pneuservis, autoservis), môžeme zbierať údaje týkajúce sa vášho dopytu.

3. Na aký účel spracúvame vaše údaje?

Vaše osobné údaje spracúvame na nasledujúce účely:

Odpovedanie na dopyty: Ak nás kontaktujete prostredníctvom formulára, vaše údaje použijeme na spracovanie vášho dopytu alebo žiadosti o informácie.
Poskytovanie našich služieb: V prípade, že sa rozhodnete využiť naše služby (doprava, inžinierske siete, stavebná činnosť, pneuservis, autoservis), spracúvame vaše údaje na účely poskytovania týchto služieb.
Vylepšovanie našich služieb a webovej stránky: Analýza návštevnosti webu nám pomáha zlepšovať používateľskú skúsenosť.

4. Právny základ spracovania osobných údajov

Spracovanie vašich osobných údajov vykonávame na základe týchto právnych základov:

Plnenie zmluvy alebo predzmluvných opatrení: Ak nás kontaktujete ohľadom poskytovania našich služieb, spracúvame údaje na účel realizácie zmluvy.
Legitímny záujem: Na zlepšenie našich služieb a analytické účely, ktoré neohrozujú vaše práva a slobody.
Súhlas: Ak sú vaše osobné údaje spracovávané na marketingové účely (napríklad zasielanie informácií o našich službách), spracúvame ich na základe vášho súhlasu.

5. Ako dlho uchovávame vaše údaje?

Vaše osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelov, na ktoré boli získané. Ak nám poskytnete údaje na marketingové účely (napríklad zasielanie noviniek), tieto údaje uchovávame len do odvolania vášho súhlasu alebo po dobu, ktorá je v súlade so zákonmi a predpismi.

6. Zdieľanie údajov s tretími stranami

Vaše osobné údaje nebudeme zdieľať s tretími stranami, pokiaľ to nie je nevyhnutné na splnenie našich zmluvných záväzkov alebo ak to nevyžaduje zákon. Môžeme zdieľať vaše údaje s našimi zmluvnými partnermi alebo poskytovateľmi služieb, ktorí nám pomáhajú poskytovať naše služby (napr. hosting, spracovanie platieb), ale len v rozsahu potrebnom na plnenie týchto služieb.

7. Vaše práva v súvislosti s ochranou osobných údajov

V súlade s platnými predpismi o ochrane osobných údajov máte právo:

Na prístup k vašim osobným údajom.
Na opravu alebo vymazanie vašich osobných údajov.
Na obmedzenie spracovania vašich osobných údajov.
Na prenosnosť údajov.
Na odvolanie súhlasu – ak spracovávame vaše údaje na základe súhlasu.
Na podanie sťažnosti dozornému orgánu, ak sa domnievate, že vaše osobné údaje boli spracované v rozpore s GDPR.

8. Cookies

Na našej webstránke používame cookies na zlepšenie používateľskej skúsenosti. Cookies sú malé súbory, ktoré sa uložia do vášho zariadenia pri návšteve našich stránok. Môžete si nastaviť prehliadač tak, aby blokoval cookies, ale to môže ovplyvniť funkčnosť našich stránok.

9. Kontaktujte nás

Ak máte akékoľvek otázky týkajúce sa ochrany osobných údajov alebo chcete uplatniť svoje práva, kontaktujte nás na:

E-mail: kontakt@svpfidelitas.sk
Telefon: 0908 561 650
Adresa: SV.P.FIDELITAS, s.r.o., Šoltésova 17, 920 01 Hlohovec`;

export default function GdprPage() {
  return (
    <>
      <PageHero title="Ochrana osobných údajov (GDPR)" backgroundImage="/images/IMG_8128-1024x768.jpg" />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <article
            className="whitespace-pre-line text-[17px] text-[#6a6a6a] font-heading font-normal leading-relaxed"
            aria-label="GDPR - Ochrana osobných údajov"
          >
            {gdprText}
          </article>
        </div>
      </section>
    </>
  );
}
