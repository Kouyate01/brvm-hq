import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRVM Hub",
  description: "La plateforme pour investir à la BRVM.",
};

// CETTE LIGNE INDIQUE AU TÉLÉPHONE SA VRAIE LARGEUR MOBILE :
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning className={`${inter.className} bg-[#F8F7F4] text-[#1A1A1A] min-h-screen font-sans selection:bg-[#C86A53] selection:text-white flex flex-col`}>
        
        {/* Navigation Mobile & Desktop */}
        <Navbar />

        {/* Contenu principal */}
        <main className="max-w-[1400px] mx-auto px-6 md:px-8 py-8 pb-32 w-full flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#1C1A17] text-white pt-16 pb-8 px-6 md:px-8 w-full mt-auto">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">📈</span>
                  <span className="text-2xl font-black tracking-tighter">BRVM Hub</span>
                </div>
                <p className="text-[#A3A3A3] italic font-serif">Quelle action, pour quel rendement, et comment.</p>
              </div>

              <div className="flex gap-12 md:gap-24">
                <div className="flex flex-col gap-4">
                  <h4 className="text-[#737373] text-xs font-bold uppercase tracking-widest mb-2">Le Hub</h4>
                  <Link href="/actions" className="text-[15px] font-medium hover:text-[#C86A53] transition">Actions Phares</Link>
                  <Link href="/guide" className="text-[15px] font-medium hover:text-[#C86A53] transition">Les Bases</Link>
                  <Link href="/sgi" className="text-[15px] font-medium hover:text-[#C86A53] transition">Choisir sa SGI</Link>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="text-[#737373] text-xs font-bold uppercase tracking-widest mb-2">Aller plus loin</h4>
                  <Link href="#" className="text-[15px] font-medium hover:text-[#C86A53] transition">La formation</Link>
                  <Link href="#" className="text-[15px] font-medium hover:text-[#C86A53] transition">À propos</Link>
                  <Link href="/rejoindre" className="text-[15px] font-medium hover:text-[#C86A53] transition">Rejoindre la liste</Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-[#737373]">
              <p>© 2026 BRVM Hub, média pratique.</p>
              <p className="mt-4 md:mt-0">By Movibes</p>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}