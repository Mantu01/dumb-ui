import { PageLayout } from "@/components/page-layout"
import { FONTS, COLORS } from "@/lib/constants"

export default function Home() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 md:px-8 w-full">
        {/* Main Banner */}
        <div className="relative my-6 md:my-8 overflow-x-hidden">
          <div className="marquee">
            <div
              className="marquee-content text-2xl md:text-4xl lg:text-5xl"
              style={{ color: COLORS.YELLOW, fontFamily: FONTS.PAPYRUS }}
            >
              🚀 DumbUI — The Framework Nobody Asked For 🚀 • Making the Internet Ugly Again 🚀 • Eye-pain
              guaranteed! 🚀
            </div>
          </div>
        </div>

        {/* Huge Chaotic Title */}
        <div className="text-center my-8 md:my-12 relative">
          <div
            className="text-5xl md:text-7xl lg:text-9xl font-black mb-3 md:mb-4 flicker"
            style={{ color: COLORS.CYAN, fontFamily: FONTS.TIMES_NEW_ROMAN }}
          >
            DUMBUI
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl jitter" style={{ color: COLORS.MAGENTA, fontFamily: FONTS.PAPYRUS }}>
            So bad, it's almost beautiful
          </div>
          <div className="text-lg md:text-xl lg:text-2xl mt-3 md:mt-4 colorflip" style={{ fontFamily: FONTS.COMIC_SANS }}>
            Welcome to DumbUI — where accessibility comes to die
          </div>
        </div>

        {/* Random Taglines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-8 md:my-12">
          <div
            className="p-4 md:p-6 bg-cyan-500 text-black text-lg md:text-xl font-black shake"
            style={{ fontFamily: FONTS.PAPYRUS, transform: "rotate(-5deg)" }}
          >
            "We hate minimalism."
          </div>
          <div
            className="p-4 md:p-6 bg-pink-500 text-white text-lg md:text-xl font-black"
            style={{ fontFamily: FONTS.COMIC_SANS, transform: "rotate(3deg)" }}
          >
            "Good design is overrated."
          </div>
          <div
            className="p-4 md:p-6 bg-yellow-400 text-black text-lg md:text-xl font-black jitter"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, transform: "rotate(8deg)" }}
          >
            "Built for those who miss 2002 websites."
          </div>
          <div
            className="p-4 md:p-6 bg-lime-400 text-black text-lg md:text-xl font-black flicker"
            style={{ fontFamily: FONTS.COMIC_SANS, transform: "rotate(-8deg)" }}
          >
            "If your eyes aren't bleeding, we failed"
          </div>
        </div>

        {/* Why DumbUI Section */}
        <div className="my-12 md:my-16">
          <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 colorflip" style={{ fontFamily: FONTS.PAPYRUS }}>
            Why DumbUI?
          </div>
          <div className="space-y-3 md:space-y-4">
            <div
              className="p-3 md:p-4 bg-red-600 text-yellow-300 font-bold text-base md:text-lg"
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              ❌ We hate minimalism.
            </div>
            <div
              className="p-3 md:p-4 bg-blue-600 text-lime-300 font-bold text-base md:text-lg"
              style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}
            >
              ❌ Good design is overrated.
            </div>
            <div
              className="p-3 md:p-4 bg-purple-600 text-cyan-300 font-bold text-base md:text-lg"
              style={{ fontFamily: FONTS.PAPYRUS }}
            >
              ❌ We believe in eye strain.
            </div>
            <div
              className="p-3 md:p-4 bg-green-700 text-pink-300 font-bold text-base md:text-lg"
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              ❌ Built for those who miss 2002 websites.
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="my-12 md:my-16">
          <div
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 pulse-bright"
            style={{ fontFamily: FONTS.COMIC_SANS, color: COLORS.YELLOW }}
          >
            Features
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div
              className="p-4 md:p-6 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 text-white font-black text-xl md:text-2xl shake"
              style={{ fontFamily: FONTS.PAPYRUS }}
            >
              🎨 No consistency
            </div>
            <div
              className="p-4 md:p-6 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 text-black font-black text-xl md:text-2xl jitter"
              style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}
            >
              🎲 Random color generator
            </div>
            <div
              className="p-4 md:p-6 bg-gradient-to-br from-cyan-400 via-lime-400 to-yellow-300 text-black font-black text-xl md:text-2xl flicker"
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              📱 Not responsive, on purpose
            </div>
            <div
              className="p-4 md:p-6 bg-gradient-to-br from-red-500 via-yellow-500 to-lime-500 text-black font-black text-xl md:text-2xl colorflip"
              style={{ fontFamily: FONTS.PAPYRUS }}
            >
              🤔 Designed with zero UX knowledge
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="my-12 md:my-16 text-center">
          <button
            className="px-6 md:px-12 py-4 md:py-6 bg-lime-400 text-black font-black text-xl md:text-2xl lg:text-3xl shake"
            style={{ fontFamily: FONTS.COMIC_SANS, transform: "skew(-10deg)" }}
          >
            INSTALL AT YOUR OWN RISK
          </button>
          <div className="mt-6 md:mt-8 text-lg md:text-xl colorflip" style={{ fontFamily: FONTS.PAPYRUS }}>
            npm install dumb-ui --save-regret
          </div>
        </div>

        {/* Social Icons - Badly Aligned */}
        <div className="my-12 md:my-16 flex justify-around pb-4 md:pb-6">
          <div
            className="text-5xl md:text-7xl lg:text-8xl shake hover:colorflip cursor-pointer"
            style={{ transform: "rotate(25deg)" }}
          >
            𝕯
          </div>
          <div
            className="text-5xl md:text-7xl lg:text-8xl jitter hover:shake cursor-pointer"
            style={{ transform: "rotate(-15deg)" }}
          >
            𝕰
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
