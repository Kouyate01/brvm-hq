import { topActions } from "../../lib/data";

export default function ActionsPage() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">Les Actions Phares pour Débuter</h1>
      <p className="text-slate-500 mb-8">Des valeurs solides avec un historique de dividendes réguliers.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topActions.map((action) => (
          <div key={action.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{action.name}</h2>
                <span className="text-slate-400 text-sm font-mono">{action.ticker}</span>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                Rendement : {action.yield}
              </span>
            </div>
            
            <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded mb-3">
              {action.sector}
            </span>
            <p className="text-slate-600">{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}