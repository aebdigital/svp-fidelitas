import Link from "next/link";
import Image from "next/image";

const services = [
  { href: "/doprava", label: "Doprava" },
  { href: "/inzinierske-siete", label: "Inžinierske siete" },
  { href: "/stavebna-cinnost", label: "Stavebná činnosť" },
  { href: "/autoservis", label: "Autoservis" },
  { href: "/pneuservis", label: "Pneuservis" },
  { href: "/kontakt", label: "Kontakt" },
];

const legal = [
  { href: "/obchodne-podmienky", label: "Obchodné podmienky" },
  { href: "/cookies", label: "Cookies" },
  { href: "/gdpr", label: "GDPR" },
];

const contacts = [
  { label: "Autodoprava", phone: "0905 604 365" },
  { label: "Inžinierske stavby/Demolácie/Zemné práce", phone: "0908 561 650" },
  { label: "Pneuservis", phone: "0915 930 910" },
  { label: "Autoservis", phone: "0905 507 570" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-[90vw] px-4 pt-[60px] pb-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="relative block h-[81px] w-[253px] mb-4">
              <Image
                src="/images/Adobe-Express-file-5-e1744103178172.png"
                alt="SV.P. FIDELITAS"
                fill
                className="object-contain object-left rounded-[9px]"
              />
            </Link>
            <p className="text-[17px] text-white font-normal leading-relaxed font-heading">
              Všetko pod jednou strechou
            </p>
            <p className="text-[17px] text-white/70 font-normal mt-3 leading-relaxed font-heading">
              Vďaka dlhoročným skúsenostiam poskytujeme spoľahlivé a profesionálne služby v oblasti dopravy, stavebných prác, inžinierskych sietí, autoservisu aj pneuservisu
            </p>
          </div>

          <div>
            <h3 className="text-[22px] font-bold text-white mb-5 font-heading">Služby</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[17px] text-white/80 hover:text-[#ed2024] transition-colors font-heading">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] font-bold text-white mb-5 font-heading">Právne informácie</h3>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[17px] text-white/80 hover:text-[#ed2024] transition-colors font-heading">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] font-bold text-white mb-5 font-heading">Adresa a Kontakt</h3>
            <div className="space-y-3 text-[17px] text-white/80 font-heading">
              <p>Šoltésova 17, 920 01 Hlohovec</p>
              <a href="mailto:svp.fidelitas@hlohovec.net" className="block hover:text-[#ed2024] transition-colors">
                svp.fidelitas@hlohovec.net
              </a>
              <div className="pt-2 space-y-2">
                {contacts.map((contact) => (
                  <div key={contact.label}>
                    <span className="text-white/50 text-sm block">{contact.label}</span>
                    <a
                      href={`tel:+421${contact.phone.replace(/\s/g, "").slice(1)}`}
                      className="text-white hover:text-[#ed2024] transition-colors font-bold"
                    >
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#313338] flex flex-col md:flex-row justify-between items-center gap-3 text-[16px] text-[#b3b3b3] font-heading">
          <p>2025© SV.P.FIDELITAS, s.r.o. všetky práva vyhradené.</p>
          <p>
            Tvorba stránky –{" "}
            <a href="https://www.aebdigital.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ed2024] transition-colors">
              AEB Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
