import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kontakt | SV.P. FIDELITAS",
  description: "Kontaktujte nás - SV.P. FIDELITAS s.r.o., Šoltésova 17, 920 01 Hlohovec.",
};

const departments = [
  { label: "Autodoprava", phone: "0905 604 365" },
  { label: "Inžinierske stavby / Demolácie / Zemné práce", phone: "0908 561 650" },
  { label: "Pneuservis", phone: "0915 930 910" },
  { label: "Autoservis", phone: "0905 507 570" },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Napíšte krátku správu s čím by ste potrebovali poradiť"
        backgroundImage="/images/IMG_8128-1024x768.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-[38px] font-bold text-black mb-8 font-heading">
                Kontaktné údaje
              </h2>

              <div className="space-y-4 mb-10">
                <div>
                  <p className="text-[17px] text-[#6a6a6a] font-heading font-normal">
                    <strong className="text-black">SV.P. FIDELITAS, s.r.o.</strong><br />
                    Šoltésova 17<br />
                    920 01 Hlohovec
                  </p>
                </div>
                <div>
                  <p className="text-[17px] font-heading font-normal">
                    <strong className="text-black">E-mail:</strong>{" "}
                    <a href="mailto:svp.fidelitas@hlohovec.net" className="text-[#ed2024] hover:underline">
                      svp.fidelitas@hlohovec.net
                    </a>
                  </p>
                </div>
              </div>

              <h3 className="text-[22px] font-bold text-black mb-4 font-heading">
                Telefónne čísla podľa oddelení
              </h3>
              <div className="space-y-3">
                {departments.map((dept) => (
                  <div key={dept.label} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-[17px] text-[#6a6a6a] font-heading font-normal">{dept.label}</span>
                    <a
                      href={`tel:+421${dept.phone.replace(/\s/g, "").slice(1)}`}
                      className="text-[17px] font-bold text-black hover:text-[#ed2024] transition-colors font-heading"
                    >
                      {dept.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-[38px] font-bold text-black mb-8 font-heading">
                Napíšte nám
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-[17px] font-bold text-black mb-2 font-heading">
                    Meno a priezvisko
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[17px] text-black outline-none focus:border-[#ed2024] transition-colors font-heading"
                    placeholder="Vaše meno"
                  />
                </div>
                <div>
                  <label className="block text-[17px] font-bold text-black mb-2 font-heading">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[17px] text-black outline-none focus:border-[#ed2024] transition-colors font-heading"
                    placeholder="vas@email.sk"
                  />
                </div>
                <div>
                  <label className="block text-[17px] font-bold text-black mb-2 font-heading">
                    Telefón
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[17px] text-black outline-none focus:border-[#ed2024] transition-colors font-heading"
                    placeholder="+421 ..."
                  />
                </div>
                <div>
                  <label className="block text-[17px] font-bold text-black mb-2 font-heading">
                    Správa
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[17px] text-black outline-none focus:border-[#ed2024] transition-colors resize-none font-heading"
                    placeholder="Opíšte, s čím vám môžeme pomôcť..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#ed2024] text-white font-medium text-[18px] px-[33px] py-[16px] rounded-[3px] hover:scale-[1.04] transition-transform"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Odoslať správu
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 rounded-[10px] overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.107786196236!2d17.800045112521713!3d48.4230230711674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ed49b062ec7%3A0x28af8a4f49495f26!2zxaBvbHTDqXNvdmEgMTcsIDkyMCAwMSBIbG9ob3ZlYw!5e0!3m2!1ssk!2ssk!4v1741394460303!5m2!1ssk!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SV.P. FIDELITAS - Mapa"
            />
          </div>
        </div>
      </section>
    </>
  );
}
