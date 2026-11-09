import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "600", "700", "800", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tamiris | Criadora de Conteúdo UGC (Humor & Real Life)",
  description: "Portfólio oficial da Tamiris. Criação de conteúdo UGC com humor, situações da vida real e alta conversão para marcas.",
  openGraph: {
    title: "Tamiris | UGC & Humor",
    description: "Vídeos UGC hilários e autênticos para marcas que querem engajar de verdade.",
    url: "https://tamiris-ugc.vercel.app",
    siteName: "Tamiris UGC",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/marca/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${ibmPlexMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FFF5FB] text-[#1A0F1C] font-sans">
        {children}
      </body>
    </html>
  );
}
