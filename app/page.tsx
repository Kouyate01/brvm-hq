import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16 md:pt-24">
      
      {/* 1. SECTION HERO (Texte Géant) */}
      <div className="max-w-4xl">
        <p className="text-[#C86A53] text-xs font-bold tracking-widest uppercase mb-6">
          La plateforme pour investir à la BRVM
        </p>
        
        {/* Le texte resserré et géant (tracking-tighter, leading-none) */}
        <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-[#1A1A1A]">
          Quelle action,<br />
          pour quel rendement,<br />
          <span className="italic text-[#C86A53] font-serif">et comment.</span>
        </h1>
        
        <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed font-medium">
          Comprends la bourse. Investis mieux. La plateforme qui t'aide à choisir le bon intermédiaire, à bien investir et à toucher tes dividendes. Sans jargon, même si tu débutes.
        </p>
        
        {/* BOUTON UNIQUE ET RESPONSIVE */}
        <div className="flex justify-center md:justify-start mt-10">
          <Link 
            href="/guide" 
            className="w-full sm:w-auto bg-[#1A1A1A] text-white rounded-full px-10 py-4 font-bold text-center hover:bg-gray-800 transition shadow-md active:scale-95 text-sm"
          >
            Trouver mon action
          </Link>
        </div>
      </div>

      {/* 2. SECTION BOUTONS PILULES (Pourquoi veux-tu investir...) */}
      <div className="mt-32">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
          <h2 className="text-4xl font-black tracking-tight max-w-xs leading-tight">
            Pourquoi veux-tu investir ?
          </h2>
          <p className="text-gray-500 text-sm max-w-sm">
            Choisis ton objectif, je te dis quelle stratégie adopter, et comment faire tes premiers pas.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-wrap gap-3">
          <span className="bg-[#F8F7F4] border border-gray-200 text-[#1A1A1A] px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer hover:border-gray-400">Dividendes</span>
          <span className="bg-[#F8F7F4] border border-gray-200 text-[#1A1A1A] px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer hover:border-gray-400">Plus-value</span>
          <span className="bg-[#F8F7F4] border border-gray-200 text-[#1A1A1A] px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer hover:border-gray-400">Retraite</span>
          <span className="bg-[#F8F7F4] border border-gray-200 text-[#1A1A1A] px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer hover:border-gray-400">Sécuriser l'épargne</span>
        </div>
      </div>

      {/* 3. SECTION CARTES COLORÉES (Explore le hub) */}
      <div className="mt-32">
        <h2 className="text-4xl font-black tracking-tight mb-12">Explore le hub</h2>
        
        {/* Grille Bento avec coins très arrondis (rounded-[2rem]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Carte Bleue */}
          <Link href="/actions" className="bg-[#5346E4] text-white p-10 rounded-[2rem] hover:scale-[1.02] transition-transform flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="text-3xl font-bold mb-3">Actions</h3>
              <p className="text-white/80 font-medium">Quelle action acheter selon ton profil d'investisseur.</p>
            </div>
            <div className="flex gap-2 mt-8">
              <span className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">Comparatifs</span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">Fiches</span>
            </div>
          </Link>

          {/* Carte Verte (Olive) */}
          <Link href="/guide" className="bg-[#7D8660] text-white p-10 rounded-[2rem] hover:scale-[1.02] transition-transform flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="text-3xl font-bold mb-3">Méthodes</h3>
              <p className="text-white/80 font-medium">Comprendre les bases, la fiscalité et les bonnes pratiques.</p>
            </div>
            <div className="flex gap-2 mt-8">
              <span className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">Bases</span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">Stratégie</span>
            </div>
          </Link>

          {/* Carte Rouge (Brique) */}
          <Link href="/sgi" className="bg-[#C86A53] text-white p-10 rounded-[2rem] hover:scale-[1.02] transition-transform flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="text-3xl font-bold mb-3">SGI & Courtiers</h3>
              <p className="text-white/80 font-medium">Des comparatifs concrets pour ouvrir ton compte titre.</p>
            </div>
            <div className="flex gap-2 mt-8">
              <span className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">Frais</span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">Plateformes</span>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}