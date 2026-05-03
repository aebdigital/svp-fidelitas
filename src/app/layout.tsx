import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["300", "700", "900"],
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://svpfidelitas.sk"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
  title: {
    default: "SV.P. FIDELITAS s.r.o. | Doprava, Stavby, Autoservis – Hlohovec",
    template: "%s | SV.P. FIDELITAS s.r.o.",
  },
  description:
    "SV.P. FIDELITAS s.r.o. – spoľahlivá doprava, stavebná činnosť, inžinierske siete, autoservis a pneuservis v Hlohovci. Profesionálne služby od roku 1998.",
  keywords: [
    "doprava Hlohovec",
    "autoservis Hlohovec",
    "pneuservis Hlohovec",
    "stavebná činnosť Hlohovec",
    "inžinierske siete",
    "betónové zmesi",
    "3D geometria kolies",
    "SV.P. FIDELITAS",
    "stavebné práce",
    "zemné práce",
    "domiešavač betónu",
    "sypké materiály",
    "demolácie",
  ],
  authors: [{ name: "SV.P. FIDELITAS s.r.o." }],
  creator: "AEB Digital",
  publisher: "SV.P. FIDELITAS s.r.o.",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "SV.P. FIDELITAS s.r.o.",
    title: "SV.P. FIDELITAS s.r.o. | Doprava, Stavby, Autoservis – Hlohovec",
    description:
      "Doprava, inžinierske siete, stavebná činnosť, autoservis a pneuservis v Hlohovci. Profesionálne služby od roku 1998.",
    url: "https://svpfidelitas.sk",
    images: [{ url: "/images/hero-1.jpg", width: 1200, height: 630, alt: "SV.P. FIDELITAS – Všetko pod jednou strechou" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SV.P. FIDELITAS s.r.o. | Doprava, Stavby, Autoservis",
    description:
      "Doprava, inžinierske siete, stavebná činnosť, autoservis a pneuservis v Hlohovci od roku 1998.",
    images: ["/images/hero-1.jpg"],
  },
  alternates: {
    canonical: "https://svpfidelitas.sk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://svpfidelitas.sk/#organization",
  name: "SV.P. FIDELITAS s.r.o.",
  description:
    "Doprava, inžinierske siete, stavebná činnosť, autoservis a pneuservis v Hlohovci od roku 1998.",
  url: "https://svpfidelitas.sk",
  logo: "https://svpfidelitas.sk/logo-removebg-preview.png",
  image: "https://svpfidelitas.sk/images/hero-1.jpg",
  telephone: ["+421908561650", "+421905604365", "+421915930910", "+421905507570"],
  email: "svp.fidelitas@hlohovec.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Šoltésova 17",
    addressLocality: "Hlohovec",
    postalCode: "920 01",
    addressRegion: "Trnavský kraj",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.423,
    longitude: 17.8,
  },
  foundingDate: "1998",
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "16:00",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 48.423, longitude: 17.8 },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doprava a betónové zmesi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inžinierske siete" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stavebná činnosť" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Autoservis a 3D geometria" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pneuservis" } },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        <meta name="geo.region" content="SK-TA" />
        <meta name="geo.placename" content="Hlohovec" />
        <meta name="geo.position" content="48.423;17.8" />
        <meta name="ICBM" content="48.423, 17.8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${interTight.variable} ${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
