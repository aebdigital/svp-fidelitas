import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
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
    default: "SV.P. FIDELITAS s.r.o. | Všetko pod jednou strechou",
    template: "%s | SV.P. FIDELITAS",
  },
  description:
    "SV.P. FIDELITAS s.r.o. - doprava, inžinierske siete, stavebná činnosť, autoservis a pneuservis v Hlohovci. Všetko pod jednou strechou od roku 1998.",
  keywords: [
    "doprava Hlohovec",
    "autoservis Hlohovec",
    "pneuservis Hlohovec",
    "stavebná činnosť",
    "inžinierske siete",
    "betónové zmesi",
    "3D geometria",
    "SV.P. FIDELITAS",
  ],
  authors: [{ name: "SV.P. FIDELITAS s.r.o." }],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "SV.P. FIDELITAS s.r.o.",
    title: "SV.P. FIDELITAS s.r.o. | Všetko pod jednou strechou",
    description:
      "Doprava, inžinierske siete, stavebná činnosť, autoservis a pneuservis v Hlohovci od roku 1998.",
    images: [{ url: "/images/hero-1.jpg", width: 1200, height: 630, alt: "SV.P. FIDELITAS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SV.P. FIDELITAS s.r.o.",
    description:
      "Doprava, inžinierske siete, stavebná činnosť, autoservis a pneuservis v Hlohovci od roku 1998.",
    images: ["/images/hero-1.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SV.P. FIDELITAS s.r.o.",
  description:
    "Doprava, inžinierske siete, stavebná činnosť, autoservis a pneuservis v Hlohovci od roku 1998.",
  url: "https://svpfidelitas.sk",
  logo: "https://svpfidelitas.sk/images/logo.png",
  image: "https://svpfidelitas.sk/images/hero-1.jpg",
  telephone: ["+421908561650", "+421905604365", "+421915930910", "+421905507570"],
  email: "svp.fidelitas@hlohovec.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Šoltésova 17",
    addressLocality: "Hlohovec",
    postalCode: "920 01",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.423,
    longitude: 17.8,
  },
  foundingDate: "1998",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 48.423, longitude: 17.8 },
    geoRadius: "50000",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased font-normal`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
