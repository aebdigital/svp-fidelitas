import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/referencie";

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
        <div className="mx-auto w-[90vw] px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/referencie/${project.slug}`}
                className="group rounded-[10px] overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_20px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-[220px]">
                  <Image
                    src={project.preview}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-[20px] font-heading">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
