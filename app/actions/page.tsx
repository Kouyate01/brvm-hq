import { topActions } from "../../lib/data";
import Link from "next/link";

export default function ActionsPage() {
  return (
    <div className="pt-10">
      <div className="mb-12 border-b border-gray-200 pb-8">
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-black mb-4 inline-block">← Retour au Hub</Link>
        <h1 className="text-5xl font-black tracking-tight text-[#1A1A1A]">Actions Phares</h1>
        <p className="text-xl text-gray-500 mt-3 font-medium">Des valeurs solides avec un historique de dividendes réguliers.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {topActions.map((action) => (
          <div key={action.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#5346E4]">{action.name}</h2>
                <span className="inline-block mt-2 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {action.sector}
                </span>
              </div>
              <span className="font-mono font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
                {action.ticker}
              </span>
            </div>
            
            <div className="flex gap-4 mb-6">
               <div className="bg-[#F8F7F4] p-4 rounded-2xl flex-1">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Rendement estimé</p>
                  <p className="font-black text-lg text-[#1A1A1A]">{action.yield}</p>
               </div>
               <div className="bg-[#F8F7F4] p-4 rounded-2xl flex-1">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Prix moyen</p>
                  <p className="font-bold text-lg text-gray-700">{action.price_range}</p>
               </div>
            </div>

            <p className="text-gray-600 font-medium leading-relaxed">
              {action.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}