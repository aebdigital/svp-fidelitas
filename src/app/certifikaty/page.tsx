import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CertificatesGallery from "@/components/CertificatesGallery";

export const metadata: Metadata = {
  title: "Certifikáty | SV.P. FIDELITAS",
  description: "Prehľad našich odborných certifikátov a osvedčení v oblasti stavebníctva a strojárstva.",
};

export default function CertifikatyPage() {
  return (
    <>
      <PageHero
        title="Certifikáty"
        subtitle="Kvalita a odbornosť overená medzinárodnými štandardmi"
        backgroundImage="/images/IMG_8128-1024x768.jpg"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <div className="text-center mb-12">
            <p className="text-[18px] text-[#ed2024] font-bold mb-2 font-heading tracking-wide">
              NAŠE OSVEDČENIA
            </p>
            <h2 className="section-title">Odbornosť a kvalita</h2>
            <p className="mt-4 text-[17px] text-[#6a6a6a] max-w-2xl mx-auto leading-relaxed">
              Sme hrdým držiteľom certifikátov ISO, ktoré potvrdzujú naše zameranie na kvalitu, 
              bezpečnosť pri práci a ochranu životného prostredia pri všetkých našich realizáciách.
            </p>
          </div>

          <CertificatesGallery />
        </div>
      </section>
    </>
  );
}
