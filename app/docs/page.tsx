"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Footer } from "@/components/footer"
import { FONTS, COLORS } from "@/lib/constants"

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("intro")

  const sections = {
    intro: {
      title: "Introduction",
      content:
        "Welcome to DumbUI — the UI framework that breaks everything you love about UI design. We believe in chaos, confusion, and eye strain.",
    },
    install: {
      title: "Installation",
      content: "npm install dumb-ui --save-regret\nor\nyarn add dumb-ui --pain-mode\nThen pray for forgiveness.",
    },
    guide: {
      title: "Components Guide",
      content: "Each component is handcrafted to look bad. Use wisely. Or better yet, don't use them at all.",
    },
  }

  return (
    <PageLayout
      showBackButton
      footerText="© DumbUI 2025 - Where accessibility comes to die"
      className="h-screen"
      noFooter
    >
      <div className="flex flex-1 min-h-0 overflow-hidden w-full pb-4 md:pb-6">
        {/* Sidebar */}
        <aside
          className="w-64 md:w-80 bg-gradient-to-b from-cyan-600 via-pink-600 to-yellow-500 p-4 md:p-6 border-r-8 border-lime-400 overflow-y-auto shrink-0"
          style={{ fontFamily: FONTS.PAPYRUS }}
        >
          <div className="text-xl md:text-2xl font-black text-black mb-6 md:mb-8 shake">SECTIONS</div>
          <nav className="space-y-3 md:space-y-4">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full text-left p-3 md:p-4 text-lg md:text-xl font-black transform hover:scale-110 transition-transform ${
                  activeSection === key
                    ? "bg-black text-lime-300 border-4 border-lime-300"
                    : "bg-white text-black border-4 border-black"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-12 relative min-w-0">
          {/* Background noise */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 4px)",
            }}
          />

          <div className="relative z-10 max-w-4xl">
            <div
              className="text-4xl md:text-6xl font-black mb-6 md:mb-8 colorflip jitter"
              style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.YELLOW }}
            >
              {sections[activeSection as keyof typeof sections].title}
            </div>

            <div
              className="text-lg md:text-2xl leading-relaxed whitespace-pre-line font-bold p-6 md:p-8 bg-red-600 text-yellow-300 border-8 border-cyan-400 transform rotate-1"
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              {sections[activeSection as keyof typeof sections].content}
            </div>

            {/* Random overlapping decorative text */}
            <div className="mt-8 md:mt-12 space-y-3 md:space-y-4">
              <div
                className="text-2xl md:text-4xl font-black flicker opacity-50"
                style={{ color: COLORS.MAGENTA, fontFamily: FONTS.PAPYRUS, transform: "skew(-10deg)" }}
              >
                [PAINFUL STYLING APPLIED]
              </div>
              <div
                className="text-xl md:text-3xl font-black pulse-bright opacity-60"
                style={{ color: COLORS.CYAN, fontFamily: FONTS.COMIC_SANS, transform: "rotate(15deg)" }}
              >
                Not responsive • Intentional • Unpleasant
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer text="© DumbUI 2025 - Where accessibility comes to die" />
    </PageLayout>
  )
}
