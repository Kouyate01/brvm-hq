import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const response = await fetch('https://www.brvm.org/fr', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      next: { revalidate: 60 } 
    });

    if (!response.ok) throw new Error("Le site de la BRVM est inaccessible");

    const html = await response.text();
    const $ = cheerio.load(html);

    // =================================================================
    // LOGIQUE DE SCRAPING BASÉE SUR VOTRE CAPTURE D'ÉCRAN
    // =================================================================
    
    // Fonction magique pour chercher un indice et sa valeur à côté
    function getIndexData(indexName: string) {
      // On cherche la cellule qui contient exactement le nom de l'indice
      const nameCell = $('td').filter(function() {
        return $(this).text().trim() === indexName;
      });

      // La valeur est dans la cellule suivante (next)
      const value = nameCell.next('td').text().trim();
      
      // La variation est dans la cellule d'après (next.next)
      const variation = nameCell.next('td').next('td').text().trim();

      return { value, variation };
    }

    // On extrait les vraies données !
    const brvm30 = getIndexData('BRVM-30');
    // Sur le site de la BRVM, le composite s'appelle généralement "BRVM-C" ou "BRVM COMPOSITE"
    let brvmC = getIndexData('BRVM-C'); 
    if (!brvmC.value) {
        brvmC = getIndexData('BRVM COMPOSITE'); // Au cas où ils écrivent le nom complet
    }

    // =================================================================

    const marketData = {
      status: "success",
      indices: {
        brvm30: brvm30.value || "---", 
        brvmC: brvmC.value || "---",
        variation30: brvm30.variation || "+0.00%", 
      },
      // On garde des fausses valeurs pour le top volume pour le moment
      topVolumes: [
        { symbol: "SNTS", price: "18 450", change: "+2.45%" },
        { symbol: "SGBC", price: "16 200", change: "-0.61%" },
        { symbol: "ETI", price: "19", change: "0.00%" }
      ]
    };

    return NextResponse.json(marketData);

  } catch (error) {
    console.error("Erreur Scraper:", error);
    return NextResponse.json({ status: "error", message: "Échec du scraping" }, { status: 500 });
  }
}