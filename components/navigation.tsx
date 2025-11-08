import Link from "next/link"

interface NavigationProps {
  showBackButton?: boolean
  backHref?: string
}

export function Navigation({ showBackButton = false, backHref = "/" }: NavigationProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 border-b-4 border-lime-400 bg-black"
      style={{ fontFamily: "Comic Sans MS, cursive" }}
    >
      <Link
        href="/"
        className="text-4xl md:text-5xl font-black flicker"
        style={{ color: "#ff00ff", textShadow: "2px 2px 0px #00ffff" }}
      >
        DumbUI
      </Link>
      <div className="flex gap-4 md:gap-8 items-center">
        {showBackButton ? (
          <Link
            href={backHref}
            className="text-lg md:text-xl font-black text-cyan-400 hover:text-pink-500 transition-colors"
            style={{ fontFamily: "Comic Sans MS" }}
          >
            ← Back
          </Link>
        ) : (
          <>
            <Link
              href="/docs"
              className="text-base md:text-xl lg:text-2xl font-bold text-lime-400 hover:text-yellow-300 hover:animate-pulse transition-colors"
              style={{ fontFamily: "Comic Sans MS" }}
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="text-base md:text-xl lg:text-2xl font-bold text-cyan-400 hover:text-pink-500 hover:animate-bounce transition-colors"
              style={{ fontFamily: "Comic Sans MS" }}
            >
              Components
            </Link>
            <Link
              href="/templates"
              className="text-base md:text-xl lg:text-2xl font-bold text-yellow-300 hover:text-red-500 hover:animate-pulse transition-colors"
              style={{ fontFamily: "Comic Sans MS" }}
            >
              Templates
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

