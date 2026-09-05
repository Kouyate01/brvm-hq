import { openai } from "@ai-sdk/openai"
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool,
  type UIMessage,
} from "ai"
import { z } from "zod"

export const maxDuration = 30

const stockQuoteSchema = z.object({
  symbol: z
    .string()
    .describe("Le symbole boursier, ex: SNTS, SGBC, ETI, PALC"),
})

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    system: `Tu es BRVM Copilot, l'analyste et conseiller IA d'élite sur la BRVM (Bourse Régionale des Valeurs Mobilières de l'UEMOA).
    - Rôle Débutant : Explique les concepts simplement (dividendes, PER, comment acheter via une SGI), sois pédagogique et rassurant.
    - Rôle Expert : Fournis des analyses financières rigoureuses sur les 46+ sociétés cotées (Sonatel, SGBC, Ecobank, Palmci, etc.).
    - Règle d'or : Utilise l'outil getStockData pour donner des chiffres précis quand l'utilisateur mentionne une action. Tous les prix sont en FCFA.`,
    tools: {
      getStockData: tool({
        description:
          "Obtenir les données financières et le cours en direct d'une action BRVM",
        inputSchema: stockQuoteSchema,
        execute: async ({ symbol }) => {
          const mockData: Record<
            string,
            {
              name: string
              price: string
              variation: string
              per: number
              dividendYield: string
            }
          > = {
            SNTS: {
              name: "Sonatel",
              price: "18 450 FCFA",
              variation: "+2.45%",
              per: 9.2,
              dividendYield: "8.1%",
            },
            SGBC: {
              name: "Société Générale CI",
              price: "16 200 FCFA",
              variation: "-0.61%",
              per: 6.8,
              dividendYield: "7.5%",
            },
            ETI: {
              name: "Ecobank Transnational Inc.",
              price: "19 FCFA",
              variation: "0.00%",
              per: 3.4,
              dividendYield: "9.8%",
            },
          }

          return (
            mockData[symbol.toUpperCase()] ?? {
              symbol,
              price: "12 500 FCFA",
              variation: "+0.5%",
              per: 8.0,
              status: "Données indicatives",
            }
          )
        },
      }),
    },
  })

  return result.toUIMessageStreamResponse()
}
