"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#F8F7F4] border-b border-gray-200/80 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-8 py-4 max-w-[1400px] mx-auto w-full relative">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 text-[#1A1A1A]">
          <span className="text-3xl">📈</span> BRVM Hub
        </Link>
        
        {/* Menu PC / Desktop (Affiché sur PC, masqué sur mobile via 'hidden md:flex') */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-[#1A1A1A]">
          <Link href="/guide" className="hover:text-gray-500 transition">Les Bases</Link>
          <Link href="/sgi" className="hover:text-gray-500 transition">SGI</Link>
          <Link href="/actions" className="hover:text-gray-500 transition">Actions</Link>
          <Link href="/rejoindre" className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition">
            Rejoindre la liste
          </Link>
        </div>

        {/* Bouton Hamburger Mobile (Affiché UNIQUEMENT sur mobile via 'md:hidden') */}
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2.5 rounded-xl bg-[#1A1A1A] text-white font-bold active:scale-95 transition shadow-md"
          aria-label="Menu"
        >
          {isOpen ? "Fermer X" : "Menu ☰"}
        </button>

      </div>

      {/* Menu déroulant Mobile (Affiché uniquement sur mobile) */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F8F7F4] border-b border-gray-200 shadow-2xl p-6 flex flex-col gap-5 md:hidden z-50 rounded-b-[2rem]">
          <Link 
            href="/guide" 
            onClick={() => setIsOpen(false)}
            className="font-bold text-lg text-gray-800 hover:text-black transition"
          >
            Les Bases
          </Link>
          <Link 
            href="/sgi" 
            onClick={() => setIsOpen(false)}
            className="font-bold text-lg text-gray-800 hover:text-black transition"
          >
            SGI
          </Link>
          <Link 
            href="/actions" 
            onClick={() => setIsOpen(false)}
            className="font-bold text-lg text-gray-800 hover:text-black transition"
          >
            Actions
          </Link>
          <Link 
            href="/rejoindre" 
            onClick={() => setIsOpen(false)}
            className="bg-[#1A1A1A] text-white text-center py-3.5 rounded-full font-bold shadow-md hover:bg-gray-800 transition mt-2"
          >
            Rejoindre la liste
          </Link>
        </div>
      )}
    </header>
  );
}