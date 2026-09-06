import { sgis } from "../../lib/data";
import Link from "next/link";

export default function SgiPage() {
  return (
    <div className="pt-10">
      <div className="mb-12 border-b border-gray-200 pb-8">
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-black mb-4 inline-block">← Retour au Hub</Link>
        <h1 className="text-5xl font-black tracking-tight text-[#1A1A1A]">Choisir sa SGI</h1>
        <p className="text-xl text-gray-500 mt-3 font-medium">Compare les intermédiaires financiers pour ouvrir ton compte-titres.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sgis.map((sgi) => (
          <div key={sgi.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1 text-[#C86A53]">{sgi.name}</h2>
              <p className="text-gray-400 text-sm mb-6 font-medium uppercase tracking-wider">{sgi.country}</p>
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between items-center bg-[#F8F7F4] p-4 rounded-2xl">
                  <span className="text-gray-500 text-sm font-medium">Frais actions</span>
                  <span className="font-bold text-[#1A1A1A]">{sgi.fees}</span>
                </div>
                <div className="flex justify-between items-center bg-[#F8F7F4] p-4 rounded-2xl">
                  <span className="text-gray-500 text-sm font-medium">Dépôt minimum</span>
                  <span className="font-bold text-[#1A1A1A]">{sgi.min_deposit}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed font-medium bg-[#FFF9F8] p-4 rounded-2xl">
              💡 {sgi.highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}