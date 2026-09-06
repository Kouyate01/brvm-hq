"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport, isToolUIPart } from "ai"
import { Bot, Send, Sparkles, Square, X } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ScrollArea } from "./ui/scroll-area"
import { cn } from "@/lib/utils"

const QUICK_PROMPTS = [
  "Top dividendes",
  "Analyse SNTS",
  "Comment débuter à la BRVM ?",
] as const

type CopilotChatProps = {
  open: boolean
  onClose: () => void
}

export function CopilotChat({ open, onClose }: CopilotChatProps) {
  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    []
  )

  const { messages, sendMessage, status, error, stop, regenerate } = useChat({
    transport,
  })

  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  
  const isBusy = status === "submitted" || status === "streaming"

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, status])

  function submitPrompt(text: string) {
    const trimmed = (text || "").trim()
    if (!trimmed || isBusy) return
    sendMessage({ text: trimmed })
    setInput("")
  }

  return (
    <>
      {/* Overlay sombre pour mobile */}
      {open ? (
        <button
          type="button"
          aria-label="Fermer le Copilot"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      ) : null}

      <aside
        className={cn(
          "flex flex-col overflow-hidden bg-[#0c0c0e] text-zinc-200", // Couleurs Bloomberg
          "fixed inset-y-0 right-0 z-50 w-full max-w-md transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full pointer-events-none max-lg:invisible",
          // Sur Desktop (lg), il remplit complètement la colonne droite sans bordures
          "lg:relative lg:visible lg:pointer-events-auto lg:h-full lg:w-full lg:translate-x-0 lg:border-none lg:shadow-none"
        )}
        aria-label="BRVM AI Copilot"
      >
        {/* En-tête du Chat */}
        <header className="flex items-start justify-between gap-3 border-b border-zinc-800 px-4 py-3.5">
          <div className="flex items-start gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <Sparkles className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight text-white">
                BRVM AI Copilot
              </p>
              <p className="text-xs text-zinc-500">
                Analyste marché UEMOA · streaming
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-zinc-400 hover:text-white lg:hidden"
            onClick={onClose}
            aria-label="Fermer"
          >
            <X className="size-4" />
          </Button>
        </header>

        {/* Zone des messages */}
        <ScrollArea className="min-h-0 flex-1">
          <div className="flex flex-col gap-3 px-4 py-4">
            {messages.length === 0 ? (
              <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-900/30 px-4 py-6 text-center">
                <Bot className="mx-auto mb-2 size-6 text-zinc-600" />
                <p className="text-sm font-medium text-zinc-300">
                  Posez une question sur la BRVM
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  Dividendes, analyse d’une valeur ou premiers pas via une SGI.
                </p>
              </div>
            ) : null}

            {messages.map((message) => {
              const isUser = message.role === "user"
              return (
                <div
                  key={message.id}
                  className={cn(
                    "flex w-full",
                    isUser ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      isUser
                        ? "rounded-br-md bg-emerald-600 text-white" // Vert pro pour l'utilisateur
                        : "rounded-bl-md bg-zinc-900 text-zinc-300 border border-zinc-800" // Gris foncé pour l'IA
                    )}
                  >
                    {message.parts.map((part, index) => {
                      if (part.type === "text" && part.text) {
                        return (
                          <p key={index} className="whitespace-pre-wrap">
                            {part.text}
                          </p>
                        )
                      }
                      if (isToolUIPart(part)) {
                        const pending =
                          part.state === "input-streaming" ||
                          part.state === "input-available"
                        return (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="mt-1.5 block w-fit border-zinc-700 bg-zinc-800 text-emerald-400"
                          >
                            <Sparkles className="mr-1.5 inline size-3" />
                            {pending
                              ? "Consultation du marché…"
                              : "Données récupérées"}
                          </Badge>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              )
            })}

            {isBusy ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-xs text-zinc-500">
                  Copilot réfléchit…
                </div>
              </div>
            ) : null}

            {error ? (
              <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-3 py-2 text-xs text-rose-400">
                Une erreur est survenue (Vérifiez vos crédits API OpenAI).
                <button
                  type="button"
                  className="ml-2 font-medium underline"
                  onClick={() => regenerate()}
                >
                  Réessayer
                </button>
              </div>
            ) : null}

            <div ref={bottomRef} />
          </div>
        </ScrollArea>

        {/* Zone de saisie */}
        <div className="border-t border-zinc-800 px-4 py-3 bg-[#0c0c0e]">
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                disabled={isBusy}
                onClick={() => submitPrompt(prompt)}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form
            className="flex items-center gap-2"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault()
              submitPrompt(input || "")
            }}
          >
            <Input
              value={input || ""}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Demandez au Copilot…"
              disabled={isBusy}
              className="h-10 flex-1 rounded-xl border-zinc-800 bg-zinc-900 px-3 text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500"
              aria-label="Message au Copilot"
            />
            {isBusy ? (
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="h-10 w-10 shrink-0 rounded-xl border-zinc-700 bg-zinc-800 text-zinc-400 hover:text-white"
                onClick={() => stop()}
                aria-label="Arrêter"
              >
                <Square className="size-3.5 fill-current" />
              </Button>
            ) : (
              <Button
                type="submit"
                size="icon"
                disabled={!input || input.trim() === ""}
                className="h-10 w-10 shrink-0 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 disabled:bg-zinc-800 disabled:text-zinc-600"
                aria-label="Envoyer"
              >
                <Send className="size-4" />
              </Button>
            )}
          </form>
        </div>
      </aside>
    </>
  )
}