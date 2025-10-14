import Link from "next/link"

export default function UnderConstruction() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
  <div className="flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1
          className="font-ranade font-black text-4xl sm:text-5xl text-neo-pink mb-4 tracking-tight text-center"
          style={{ letterSpacing: "0.05em" }}
        >
          Oops!
        </h1>
  <div className="bg-neo-yellow border-4 border-black px-6 py-4 sm:px-12 sm:py-6 mb-4 shadow-neo-lg w-full flex justify-center">
          <span className="font-ranade font-black text-2xl sm:text-4xl md:text-5xl text-black text-center">🚧 Under Construction 🚧</span>
        </div>
        <p className="font-ranade text-base sm:text-xl text-white mb-6 text-center">The Website is being built. Check back soon!</p>
        <Link href="/submit" passHref>
          <button className="bg-neo-teal text-white font-ranade font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 border-2 border-black shadow-neo hover:shadow-neo-hover transition-all duration-300 w-full sm:w-auto">
            Mutton Soup
          </button>
        </Link>
      </div>
    </main>
  )
}
