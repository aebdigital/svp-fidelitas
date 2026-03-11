export interface ReferenceProject {
  slug: string;
  title: string;
  description: string;
  preview: string;
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
    preview: `${base}/injektaze/IMG_0032.JPG`,
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
    preview: `${base}/most_cez_potok/IMG_6073.JPG`,
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
    preview: `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_0115.JPG`,
    mainImage: `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7723.JPG`,
    images: [
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_0115.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_6235.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_6237.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_6238.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_6240.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7612.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7615.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7723.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_7842.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_8002.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_8247.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_8680.JPG`,
      `${base}/vnutorne_zateplenie_obvodoveho_plasta/IMG_8927.JPG`,
    ],
  },
  {
    slug: "vnutroblok-parkovisko",
    title: "Vnútroblok parkovisko",
    description:
      "Realizácia vnútroblokového parkoviska vrátane spevnených plôch, odvodnenia a finálnych úprav povrchu.",
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
    preview: `${base}/vystavba_prepojovacej_komunikacie/IMG_0215.JPG`,
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
    preview: `${base}/vystavba_vodovodu/IMG_3746.jpeg`,
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
    preview: `${base}/vystavby_bytovych_domov/IMG_2692.jpeg`,
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
