export interface ReferenceProject {
  slug: string;
  title: string;
  description: string;
  city: string;
  detailText: string;
  preview: string;
  previewPosition?: string;
  mainImage: string;
  images: string[];
}

const base = "/stavebna_cinnost_referencie";

export const projects: ReferenceProject[] = [
  {
    slug: "injektaze",
    title: "Injektáže",
    description:
      "Realizácia injektážnych prác na zabezpečenie hydroizolácie a sanácie konštrukcií. Profesionálne riešenia pre ochranu stavieb pred vlhkosťou.",
    city: "Hlohovec",
    detailText:
      "Súčasťou realizácie bolo posúdenie technického stavu, návrh vhodného technologického postupu a precízne prevedenie sanačných zásahov tak, aby sa predĺžila životnosť konštrukcie a stabilizovali problematické miesta.",
    preview: `${base}/injektaze/IMG_3300.JPG`,
    mainImage: `${base}/injektaze/IMG_3298.JPG`,
    images: [
      `${base}/injektaze/IMG_0032.JPG`,
      `${base}/injektaze/IMG_0034.JPG`,
      `${base}/injektaze/IMG_0035.JPG`,
      `${base}/injektaze/IMG_3298.JPG`,
      `${base}/injektaze/IMG_3299.JPG`,
      `${base}/injektaze/IMG_3300.JPG`,
      `${base}/injektaze/IMG_3301.JPG`,
      `${base}/injektaze/IMG_3302.JPG`,
      `${base}/injektaze/IMG_3303.JPG`,
      `${base}/injektaze/IMG_9711.JPG`,
    ],
  },
  {
    slug: "most-cez-potok",
    title: "Most cez potok",
    description:
      "Výstavba mosta cez potok vrátane kompletných zemných prác, základov a nosnej konštrukcie. Komplexná realizácia od projektu po dokončenie.",
    city: "Hlohovec",
    detailText:
      "Projekt zahŕňal koordináciu zemných prác, zakladania, nosných prvkov aj finálnych detailov tak, aby výsledné riešenie spĺňalo nároky na bezpečnosť, funkčnosť a dlhodobú odolnosť stavby.",
    preview: `${base}/most_cez_potok/IMG_7832.JPG`,
    previewPosition: "bottom",
    mainImage: `${base}/most_cez_potok/IMG_7832.JPG`,
    images: [
      `${base}/most_cez_potok/IMG_6073.JPG`,
      `${base}/most_cez_potok/IMG_6190.JPG`,
      `${base}/most_cez_potok/IMG_6242.JPG`,
      `${base}/most_cez_potok/IMG_6893.JPG`,
      `${base}/most_cez_potok/IMG_6978.JPG`,
      `${base}/most_cez_potok/IMG_7742.JPG`,
      `${base}/most_cez_potok/IMG_7832.JPG`,
      `${base}/most_cez_potok/IMG_8681.JPG`,
      `${base}/most_cez_potok/PHOTO-2026-02-23-09-48-28.jpg`,
      `${base}/most_cez_potok/PHOTO-2026-02-23-09-48-29.jpg`,
    ],
  },
  {
    slug: "vnutorne-zateplenie",
    title: "Vnútorné zateplenie obvodového plášťa",
    description:
      "Zateplenie obvodového plášťa budov z vnútornej strany. Efektívne riešenie pre zlepšenie tepelnoizolačných vlastností existujúcich objektov.",
    city: "Hlohovec",
    detailText:
      "Pri realizácii sme kládli dôraz na presnosť detailov, výber vhodných materiálov a minimalizáciu zásahov do prevádzky objektu, aby sa dosiahlo výrazné zlepšenie tepelného komfortu a energetickej efektivity.",
    preview: `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7612.JPG`,
    mainImage: `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7723.JPG`,
    images: [
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7612.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7723.JPG`,
    ],
  },
  {
    slug: "vnutroblok-parkovisko",
    title: "Vnútroblok parkovisko",
    description:
      "Realizácia vnútroblokového parkoviska vrátane spevnených plôch, odvodnenia a finálnych úprav povrchu.",
    city: "Hlohovec",
    detailText:
      "Výstavba prebiehala s dôrazom na funkčné dopravné riešenie, správne odvodnenie územia a kvalitné povrchové vrstvy, aby výsledok priniesol dlhodobú spoľahlivosť aj komfortné používanie.",
    preview: `${base}/vnutroblok_parkovisko/IMG_0115.JPG`,
    mainImage: `${base}/vnutroblok_parkovisko/IMG_8002.JPG`,
    images: [
      `${base}/vnutroblok_parkovisko/IMG_0115.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_6235.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_6238.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_6240.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_7615.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_7842.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_8002.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_8247.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_8680.JPG`,
      `${base}/vnutroblok_parkovisko/IMG_8927.JPG`,
    ],
  },
  {
    slug: "prepojovacie-komunikacie",
    title: "Výstavba prepojovacej komunikácie",
    description:
      "Realizácia výstavby prepojovacej komunikácie vrátane zemných prác, podkladových vrstiev a finálnej úpravy povrchu.",
    city: "Hlohovec",
    detailText:
      "Na projekte sme zabezpečili všetky rozhodujúce etapy od prípravy podložia cez konštrukčné vrstvy až po finálne dokončenie komunikácie, s dôrazom na plynulú nadväznosť a spoľahlivú prevádzku.",
    preview: `${base}/vystavba_prepojovacej_komunikacie/IMG_1878.JPG`,
    mainImage: `${base}/vystavba_prepojovacej_komunikacie/IMG_1674.JPG`,
    images: [
      `${base}/vystavba_prepojovacej_komunikacie/IMG_0215.JPG`,
      `${base}/vystavba_prepojovacej_komunikacie/IMG_0216.JPG`,
      `${base}/vystavba_prepojovacej_komunikacie/IMG_1674.JPG`,
      `${base}/vystavba_prepojovacej_komunikacie/IMG_1878.JPG`,
      `${base}/vystavba_prepojovacej_komunikacie/IMG_1898.JPG`,
    ],
  },
  {
    slug: "vystavba-vodovodu",
    title: "Výstavba vodovodu",
    description:
      "Kompletná výstavba vodovodného potrubia a infraštruktúry. Pokládka potrubí, napojenie na existujúcu sieť a záverečné skúšky.",
    city: "Hlohovec",
    detailText:
      "Súčasťou zákazky bola koordinácia výkopových prác, pokládky potrubných trás, napojení a kontrolných skúšok, aby sa zabezpečila spoľahlivá a dlhodobo funkčná infraštruktúra.",
    preview: `${base}/vystavba_vodovodu/IMG_5703.JPG`,
    mainImage: `${base}/vystavba_vodovodu/IMG_3798.jpeg`,
    images: [
      `${base}/vystavba_vodovodu/IMG_3746.jpeg`,
      `${base}/vystavba_vodovodu/IMG_3756.jpeg`,
      `${base}/vystavba_vodovodu/IMG_3798.jpeg`,
      `${base}/vystavba_vodovodu/IMG_3895.jpeg`,
      `${base}/vystavba_vodovodu/IMG_3902.jpeg`,
      `${base}/vystavba_vodovodu/IMG_5703.JPG`,
    ],
  },
  {
    slug: "vystavba-bytovych-domov",
    title: "Výstavba bytových domov",
    description:
      "Komplexná výstavba bytových domov od základov po dokončenie. Realizácia hrubej stavby, inštalácií a finálnych úprav.",
    city: "Hlohovec",
    detailText:
      "Projekt zastrešoval komplexné stavebné práce v rôznych etapách realizácie vrátane koordinácie profesií, technických detailov a finálnych úprav s cieľom odovzdať kvalitné a pripravené bývanie.",
    preview: `${base}/vystavby_bytovych_domov/PHOTO-2026-02-23-09-48-20.jpg`,
    mainImage: `${base}/vystavby_bytovych_domov/IMG_2929.jpeg`,
    images: [
      `${base}/vystavby_bytovych_domov/IMG_0116.JPG`,
      `${base}/vystavby_bytovych_domov/IMG_2692.jpeg`,
      `${base}/vystavby_bytovych_domov/IMG_2704.jpeg`,
      `${base}/vystavby_bytovych_domov/IMG_2909.jpeg`,
      `${base}/vystavby_bytovych_domov/IMG_2923.jpeg`,
      `${base}/vystavby_bytovych_domov/IMG_2929.jpeg`,
      `${base}/vystavby_bytovych_domov/PHOTO-2026-02-23-09-48-19.jpg`,
      `${base}/vystavby_bytovych_domov/PHOTO-2026-02-23-09-48-20.jpg`,
      `${base}/vystavby_bytovych_domov/PHOTO-2026-02-23-09-48-29 (1).jpg`,
      `${base}/vystavby_bytovych_domov/PHOTO-2026-02-23-09-48-29 (2).jpg`,
      `${base}/vystavby_bytovych_domov/PHOTO-2026-02-23-09-48-29 (3).jpg`,
    ],
  },
];
