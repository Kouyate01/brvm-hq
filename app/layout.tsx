import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRVM pour Débutants",
  description: "Le guide complet pour investir à la BRVM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} flex h-screen bg-slate-50 text-slate-900`}>
        
        <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-4">
          <Link href="/" className="text-2xl font-bold mb-6 text-green-700">BRVM Hub</Link>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pour Débuter</h3>
            <Link href="/guide" className="hover:text-green-600 font-medium">1. Les Bases</Link>
            <Link href="/sgi" className="hover:text-green-600 font-medium">2. Choisir sa SGI</Link>
            <Link href="/actions" className="hover:text-green-600 font-medium">3. Actions Phares</Link>
          </div>
        </aside>

        <main className="flex-1 p-10 overflow-y-auto">
          {children}
        </main>

      </body>
    </html>
  );
}