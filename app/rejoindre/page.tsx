"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase"; 

export default function RejoindrePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [profil, setProfil] = useState("Étudiant(e)");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Envoi des données vers Supabase (SANS le .select() à la fin)
      const { error } = await supabase
        .from('subscribers')
        .insert([{ prenom, email, profil }]);

      if (error) {
        console.error("Détail de l'erreur Supabase :", error);
        alert("Erreur Supabase : " + error.message);
        setLoading(false);
      } else {
        console.log("Succès : Inscription réussie");
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error("Erreur inattendue :", err);
      alert("Une erreur inattendue est survenue.");
      setLoading(false);
    }
  };

  return (
    <div className="pt-4 pb-12">
      <div className="bg-[#3A1F1D] text-[#F8F7F4] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center shadow-xl">
        
        {/* Colonne Gauche */}
        <div className="flex-1">
          <span className="bg-[#DFA639] text-[#3A1F1D] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 inline-block">
            En préparation
          </span>
          <h1 className="text-6xl md:text-[5rem] font-black tracking-tighter leading-[0.9] mb-6 text-white">
            Investir <br />à la BRVM
          </h1>
          <p className="text-2xl font-serif italic text-white/80 mb-8">
            Comprendre. Choisir. Investir. Encaisser.
          </p>
          <p className="text-white/70 text-lg leading-relaxed max-w-md mb-8 font-medium">
            Une formation pratique pour enfin comprendre la bourse, choisir tes actions, ouvrir ton compte-titres et toucher tes premiers dividendes.
          </p>
        </div>

        {/* Colonne Droite : Formulaire */}
        <div className="bg-[#F8F7F4] text-[#1A1A1A] p-8 md:p-10 rounded-[2rem] w-full lg:max-w-md shadow-2xl relative overflow-hidden">
          
          {isSubmitted ? (
            <div className="absolute inset-0 bg-[#F8F7F4] flex flex-col items-center justify-center text-center p-8 z-10 animate-in fade-in duration-500">
              <span className="text-6xl mb-4">🎉</span>
              <h3 className="text-2xl font-black mb-2">C'est noté !</h3>
              <p className="text-gray-500 font-medium">Tu es bien enregistré(e) sur la liste d'attente.</p>
            </div>
          ) : null}

          <h2 className="text-2xl font-black tracking-tight mb-2">Rejoindre la liste</h2>
          <p className="text-gray-500 text-sm mb-8 font-medium">Laisse tes infos, tu seras au courant avant tout le monde.</p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            
            <div>
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Prénom</label>
              <input 
                required 
                type="text" 
                value={prenom} 
                onChange={(e) => setPrenom(e.target.value)} 
                placeholder="Ton prénom" 
                className="w-full mt-1.5 bg-transparent border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C86A53] transition" 
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
              <input 
                required 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="toi@email.com" 
                className="w-full mt-1.5 bg-transparent border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C86A53] transition" 
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Tu es plutôt</label>
              <select 
                value={profil} 
                onChange={(e) => setProfil(e.target.value)} 
                className="w-full mt-1.5 bg-transparent border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C86A53] transition"
              >
                <option>Étudiant(e)</option>
                <option>Salarié(e)</option>
                <option>Entrepreneur / Indépendant</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#1A1A1A] text-white font-bold py-4 rounded-xl mt-2 hover:bg-[#C86A53] transition-colors duration-300 disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Enregistrement..." : "Préviens-moi"}
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
}