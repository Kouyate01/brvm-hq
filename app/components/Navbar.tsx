"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-[1400px] mx-auto w-full relative z-50">
      
      {/* Logo */}
      <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 text-[#1A1A1A]">
        <span className="text-3xl">📈</span> BRVM Hub
      </Link>
      
      {/* Liens Desktop (cachés sur mobile) */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <Link href="/guide" className="hover:text-gray-500 transition">Les Bases</Link>
        <Link href="/sgi" className="hover:text-gray-500 transition">SGI</Link>
        <Link href="/actions" className="hover:text-gray-500 transition">Actions</Link>
        <Link href="/rejoindre" className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition">
          Rejoindre la liste
        </Link>
      </div>

      {/* Bouton Hamburger Mobile (Visible uniquement sur mobile : md:hidden) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center p-2 rounded-lg bg-gray-200/60 text-black focus:outline-none"
        aria-label="Ouvrir le menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Déroulant Mobile (S'affiche si isOpen est true) */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F8F7F4] border-b border-gray-200 shadow-2xl p-6 flex flex-col gap-5 md:hidden z-50 rounded-b-[2rem] animate-in fade-in slide-in-from-top-2 duration-200">
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
    </nav>
  );
}