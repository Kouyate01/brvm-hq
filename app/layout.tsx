import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRVM Hub",
  description: "La plateforme pour investir à la BRVM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-[#F8F7F4] text-[#1A1A1A] min-h-screen font-sans selection:bg-[#C86A53] selection:text-white`}>
        
        {/* Barre de navigation style Naly Hub */}
        <nav className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <span className="text-3xl">📈</span> BRVM Hub
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="/guide" className="hover:text-gray-500 transition">Les Bases</Link>
            <Link href="/sgi" className="hover:text-gray-500 transition">SGI</Link>
            <Link href="/actions" className="hover:text-gray-500 transition">Actions</Link>
            <Link href="#" className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition">
              Rejoindre la liste
            </Link>
          </div>
        </nav>

        <main className="max-w-[1400px] mx-auto px-8 pb-20">
          {children}
        </main>

      </body>
    </html>
  );
}