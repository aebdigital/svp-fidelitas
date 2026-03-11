import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ href, icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 bg-red-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
        Zistiť viac <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
