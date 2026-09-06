"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto w-full relative">
      <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 text-[#1A1A1A]">
        <span className="text-3xl">📈</span> BRVM Hub
      </Link>
      
      {/* Liens Desktop */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <Link href="/guide" className="hover:text-gray-500 transition">Les Bases</Link>
        <Link href="/sgi" className="hover:text-gray-500 transition">SGI</Link>
        <Link href="/actions" className="hover:text-gray-500 transition">Actions</Link>
        <Link href="/rejoindre" className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition">
          Rejoindre la liste
        </Link>
      </div>

      {/* Bouton Hamburger Mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-black focus:outline-none p-2"
        aria-label="Menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Déroulant Mobile */}
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
            className="bg-[#1A1A1A] text-white text-center py-3.5 rounded-full font-bold shadow-md hover:bg-gray-800 transition"
          >
            Rejoindre la liste
          </Link>
        </div>
      )}
    </nav>
  );
}