import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  badgeImage?: string;
  badgeAlt?: string;
}

export default function PageHero({ title, subtitle, backgroundImage, badgeImage, badgeAlt }: PageHeroProps) {
  return (
    <section className="relative h-[57vh] min-h-[350px] flex items-center overflow-hidden">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/35" />
        </>
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}

      <div className="relative mx-auto w-[90vw] md:px-4 flex items-center justify-between">
        <div className="w-full lg:max-w-[69%]">
          <h1 className="text-[40px] md:text-[60px] font-bold text-white leading-[1.2] mb-3 font-heading drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[17px] md:text-[20px] text-white/90 leading-relaxed font-heading font-normal">
              {subtitle}
            </p>
          )}
        </div>
        {badgeImage && (
          <div className="hidden md:block relative w-[180px] h-[250px] shrink-0 overflow-hidden shadow-2xl">
            <Image
              src={badgeImage}
              alt={badgeAlt || ""}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
