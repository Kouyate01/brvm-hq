import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center h-full max-w-3xl">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6">
        L'investissement à la <span className="text-green-600">BRVM</span> expliqué simplement.
      </h1>
      <p className="text-xl text-slate-600 mb-8">
        Découvrez comment faire travailler votre argent en Afrique de l'Ouest. Pas de jargon, juste les méthodes concrètes pour ouvrir votre compte, choisir vos actions et toucher vos premiers dividendes.
      </p>
      <Link href="/guide" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">
        Commencer le guide
      </Link>
    </div>
  );
}