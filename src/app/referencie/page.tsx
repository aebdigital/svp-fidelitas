import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/referencie";
import ReferenceCard from "@/components/ReferenceCard";

export const metadata: Metadata = {
  title: "Referencie | SV.P. FIDELITAS",
  description: "Prehľad našich realizovaných projektov a referencií.",
};

export default function ReferenciePage() {
  return (
    <>
      <PageHero
        title="Referencie"
        subtitle="Prehľad našich realizovaných projektov"
        backgroundImage="/images/IMG_8128-1024x768.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ReferenceCard
                key={project.slug}
                href={`/referencie/${project.slug}`}
                title={project.title}
                city={project.city}
                image={project.preview}
                objectPosition={project.previewPosition}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
