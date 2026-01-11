'use client'
import { useState } from "react"

export default function SubmitPage() {
  const [open, setOpen] = useState(false)
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-card shadow-neo-lg border-4 border-black p-6 sm:p-10 flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="font-ranade font-black text-2xl sm:text-3xl text-neo-yellow mb-4 uppercase tracking-tight text-center">
          Submit Your Creativity
        </h1>
        <p className="font-ranade text-muted-foreground text-base sm:text-lg mb-6 text-center">
          This form is to publish creativity through the means of clubs. Share your ideas, projects, or artwork and let your talent shine!
        </p>
        <a
          href="https://forms.gle/z4UfKiCYJ6hRuTU99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-neo-teal text-white font-ranade font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border-2 border-black shadow-neo hover:shadow-neo-hover transition-all duration-300 w-full sm:w-auto"
          >
            Open Form
          </button>
        </a>
      </div>
    </main>
  )
}
