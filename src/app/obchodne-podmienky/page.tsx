import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Obchodné podmienky | SV.P. FIDELITAS",
  description: "Všeobecné obchodné podmienky SV.P. FIDELITAS s.r.o.",
};

export default function ObchodnePodmienkyPage() {
  return (
    <>
      <PageHero title="Obchodné podmienky" backgroundImage="/images/IMG_8128-1024x768.jpg" />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] px-4 text-[17px] text-[#6a6a6a] font-heading font-normal leading-relaxed [&_h2]:text-[28px] [&_h2]:font-bold [&_h2]:text-black [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:text-black [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:space-y-1 [&_ul]:ml-4 [&_li]:before:content-['•'] [&_li]:before:text-[#ed2024] [&_li]:before:mr-2 [&_p]:mb-3">
          <h2>1. Doprava betónových zmesí</h2>
          <h3>Objednávky</h3>
          <p>Zákazník je povinný zadať objednávku najneskôr do 14:00 hod. deň pred dodaním. Objednávky s čerpadlom vyžadujú minimálne 3 pracovné dni vopred.</p>
          <h3>Platobné podmienky</h3>
          <ul>
            <li>Splatnosť faktúr: 14 dní od vystavenia</li>
            <li>Úrok z omeškania: 0,05 % denne</li>
            <li>Výrobky vrátené zo stavby späť budú účtované s 50 % príplatkom</li>
          </ul>
          <h3>Kvalita</h3>
          <p>Kvalita betónu sa riadi normou STN EN 206-1/NA.</p>
          <h3>Zodpovednosť</h3>
          <p>Zákazník zodpovedá za bezpečnosť a prístupnosť miesta dodania. Predávajúci je oslobodený od povinnosti dodania v prípade vyššej moci.</p>

          <h2>2. Autoservis</h2>
          <h3>Objednávky</h3>
          <p>Požaduje sa písomná objednávka s špecifikáciami vozidla. Práca sa prijíma podpisom oprávneného technika.</p>
          <h3>Cenové podmienky</h3>
          <ul>
            <li>Predbežné odhady sa poskytujú pri prijatí objednávky</li>
            <li>Pri prácach presahujúcich 500 € sa vyžaduje záloha</li>
            <li>Zvýšenie ceny do 20 % je povolené pri nepredvídanom rozsahu prác</li>
            <li>Maximálne 5 % zvýšenie pri fluktuácii nákladov na materiál/energiu</li>
          </ul>
          <h3>Záruka</h3>
          <p>3 mesiace na prácu; záruka výrobcu na diely. Vady je nutné reklamovať do 5 dní od dokončenia.</p>
          <h3>Platba</h3>
          <p>Splatná pri dokončení práce; 7-dňová splatnosť dostupná po predchádzajúcej dohode.</p>

          <h2>3. Pneuservis - predaj tovaru</h2>
          <h3>Práva spotrebiteľa</h3>
          <p>14-dňová lehota na odstúpenie od zmluvy pre spotrebiteľov podľa nariadení EÚ o predaji na diaľku.</p>
          <h3>Vrátenie tovaru</h3>
          <p>Tovar musí byť vrátený nepoužitý; zákazník hradí náklady na vrátenie.</p>
          <h3>Záruka</h3>
          <ul>
            <li>Štandardná záruka 24 mesiacov; 12 mesiacov pre použitý tovar</li>
            <li>Záruka sa nevzťahuje na poškodenie spôsobené nesprávnym používaním</li>
          </ul>
          <h3>Reklamácie</h3>
          <p>Vady množstva alebo kvality je nutné nahlásiť do 24 hodín od prevzatia tovaru.</p>
        </div>
      </section>
    </>
  );
}
