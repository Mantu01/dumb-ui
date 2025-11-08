import { PageLayout } from "@/components/page-layout"
import { FONTS, COLORS } from "@/lib/constants"

export default function TemplatesPage() {
  const templates = [
    {
      title: "The Overcrowded Landing Page",
      desc: "Everything everywhere all at once",
      color: "from-pink-600 to-cyan-600",
    },
    {
      title: "Color Chaos Portfolio",
      desc: "More colors than a crayola box exploded",
      color: "from-yellow-400 to-red-600",
    },
    {
      title: "Blinking Blog Template",
      desc: "Eye strain included in every post",
      color: "from-purple-600 to-lime-400",
    },
    {
      title: "Comic Sans Dashboard",
      desc: "Admin panels that hurt to look at",
      color: "from-red-500 to-purple-500",
    },
    {
      title: "The Geometric Nightmare",
      desc: "Shapes that have no right to exist",
      color: "from-cyan-400 to-yellow-400",
    },
    {
      title: "Gradient Hell Ecommerce",
      desc: "Shopping has never been more painful",
      color: "from-green-500 to-pink-500",
    },
  ]

  return (
    <PageLayout showBackButton footerText="© DumbUI 2025 - Templates so bad, we're almost famous">
      <div className="container mx-auto px-4 md:px-8 w-full">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="text-4xl md:text-6xl font-black colorflip jitter mb-3 md:mb-4"
            style={{ fontFamily: FONTS.PAPYRUS, color: COLORS.YELLOW }}
          >
            Templates
          </div>
          <div className="text-xl md:text-2xl pulse-bright" style={{ fontFamily: FONTS.COMIC_SANS, color: COLORS.CYAN }}>
            Pick your poison
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {templates.map((template, idx) => (
            <div
              key={template.title}
              className={`bg-gradient-to-br ${template.color} p-6 md:p-8 border-8 border-lime-400 hover:scale-105 transition-transform cursor-pointer transform ${
                idx % 2 === 0 ? "rotate-2" : "-rotate-3"
              } hover:rotate-0 group`}
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              <div className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 group-hover:shake">
                {template.title}
              </div>
              <div className="text-base md:text-lg text-white font-bold mb-6 md:mb-8">{template.desc}</div>

              <div className="space-y-2 md:space-y-3">
                <button
                  className="w-full bg-black text-lime-300 font-black text-base md:text-lg py-2 md:py-3 border-4 border-lime-300 hover:bg-lime-300 hover:text-black transform hover:scale-105 jitter"
                  style={{ fontFamily: FONTS.PAPYRUS }}
                >
                  Preview
                </button>
                <button
                  className="w-full bg-white text-black font-black text-base md:text-lg py-2 md:py-3 border-4 border-black hover:bg-black hover:text-white transform hover:scale-105 shake"
                  style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div
          className="text-center text-2xl md:text-3xl font-black mb-6 md:mb-8 pb-4 md:pb-6 flicker"
          style={{ color: COLORS.MAGENTA, fontFamily: FONTS.COMIC_SANS }}
        >
          Install at your own risk ⚠️
        </div>
      </div>
    </PageLayout>
  )
}
