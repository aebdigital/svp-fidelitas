import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";
import ClickableImage from "@/components/ClickableImage";
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
      <section className="bg-white pb-16 pt-36 md:pt-44">
        <div className="mx-auto w-[90vw] md:px-4">
          <Link
            href="/referencie"
            className="inline-block text-[15px] text-[#6a6a6a] transition-colors hover:text-black"
          >
            &larr; Späť na referencie
          </Link>

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="max-w-[680px]">
              <p className="mb-3 text-[15px] uppercase tracking-[0.16em] text-[#ed2024]">
                {project.city}
              </p>
              <h1 className="hero-title mb-6 text-[40px] leading-[1.05] text-black md:text-[62px]">
                {project.title}
              </h1>
              <p className="mb-5 text-[18px] leading-relaxed text-[#4f4f4f]">
                {project.description}
              </p>
              <p className="text-[17px] leading-relaxed text-[#6a6a6a]">
                {project.detailText}
              </p>
            </div>

            <ClickableImage
              src={project.mainImage}
              alt={project.title}
              allImages={galleryImages}
              index={Math.max(
                galleryImages.findIndex((image) => image.src === project.mainImage),
                0
              )}
              className="relative aspect-[16/11] w-full overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
            />
          </div>

          <div className="mt-16">
            <h2 className="section-title mb-8">
              Fotogaléria projektu
            </h2>
          <ImageGallery images={galleryImages} />
          </div>
        </div>
      </section>
    </>
  );
}
