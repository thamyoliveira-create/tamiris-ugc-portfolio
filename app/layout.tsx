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
  description: "Portfólio da Tamiris, criadora de conteúdo UGC sobre vida real, rotina e humor.",
  openGraph: {
    title: "Tamiris | UGC & Humor",
    description: "Vídeos de vida real, gravados em casa, sobre as coisas que fazem parte da minha rotina.",
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
