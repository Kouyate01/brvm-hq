import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRVM Hub",
  description: "La plateforme pour investir à la BRVM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning className={`${inter.className} bg-[#F8F7F4] text-[#1A1A1A] min-h-screen font-sans selection:bg-[#C86A53] selection:text-white flex flex-col`}>
        
        {/* Barre de navigation responsive */}
        <Navbar />

        {/* Contenu principal de la page */}
        <main className="max-w-[1400px] mx-auto px-8 pb-32 w-full flex-1">
          {children}
        </main>

        {/* FOOTER SOMBRE */}
        <footer className="bg-[#1C1A17] text-white pt-16 pb-8 px-8 w-full mt-auto">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Section Haut du Footer */}
            <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
              
              {/* Logo & Slogan */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">📈</span>
                  <span className="text-2xl font-black tracking-tighter">BRVM Hub</span>
                </div>
                <p className="text-[#A3A3A3] italic font-serif">Quelle action, pour quel rendement, et comment.</p>
              </div>

              {/* Liens (2 colonnes) */}
              <div className="flex gap-16 md:gap-24">
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

            {/* Section Bas du Footer (Copyright) */}
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