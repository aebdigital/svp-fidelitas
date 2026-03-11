import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import { projects } from "@/data/referencie";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Referencie | SV.P. FIDELITAS`,
    description: project.description,
  };
}

export default async function ReferencieDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const galleryImages = project.images.map((src, i) => ({
    src,
    alt: `${project.title} ${i + 1}`,
  }));

  return (
    <>
      {/* Hero with background */}
      <section className="relative h-[57vh] min-h-[350px] flex items-center overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto w-[90vw] md:px-4">
          <Link
            href="/referencie"
            className="inline-block text-white/80 hover:text-white text-[15px] font-heading mb-4 transition-colors"
          >
            &larr; Späť na referencie
          </Link>
          <h1 className="text-[40px] md:text-[60px] font-bold text-white leading-[1.2] font-heading drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto w-[90vw] md:px-4">
          <h2 className="text-[32px] font-bold text-black mb-8 font-heading leading-tight">
            Fotogaléria projektu
          </h2>
          <ImageGallery images={galleryImages} />
        </div>
      </section>
    </>
  );
}
