import { guides } from "../../lib/data";
import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="pt-10">
      <div className="mb-12 border-b border-gray-200 pb-8">
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-black mb-4 inline-block">← Retour au Hub</Link>
        <h1 className="text-5xl font-black tracking-tight text-[#1A1A1A]">Les bases de la BRVM</h1>
        <p className="text-xl text-gray-500 mt-3 font-medium">Tout ce que tu dois savoir avant d'investir ton premier franc.</p>
      </div>
      
      <div className="flex flex-col gap-6 max-w-3xl">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#7D8660] mb-4">{guide.title}</h2>
            <p className="text-gray-600 leading-relaxed font-medium">{guide.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}