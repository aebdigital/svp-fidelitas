import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "SV.P. FIDELITAS s.r.o. | Všetko pod jednou strechou",
  description:
    "SV.P. FIDELITAS s.r.o. - doprava, inžinierske siete, stavebná činnosť, autoservis a pneuservis v Hlohovci. Všetko pod jednou strechou od roku 1998.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased font-normal`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
