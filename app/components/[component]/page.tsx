"use client"

import { useParams } from "next/navigation"
import { PageLayout } from "@/components/page-layout"
import { ComponentsSidebar } from "@/components/components-sidebar"
import { FONTS, COLORS } from "@/lib/constants"
import { COMPONENTS, componentToSlug, slugToComponent } from "@/lib/component-list"

export default function ComponentDetailPage() {
  const params = useParams()
  const componentSlug = params.component as string
  const componentName = slugToComponent(componentSlug)

  // Check if component exists
  const isValidComponent = COMPONENTS.some((comp) => componentToSlug(comp) === componentSlug)

  if (!isValidComponent) {
    return (
      <PageLayout showBackButton footerText="© DumbUI 2025 - Component chaos guaranteed" className="h-screen" noFooter>
        <div className="flex flex-1 min-h-0 overflow-hidden w-full pb-4 md:pb-6">
          <ComponentsSidebar />

          <main className="flex-1 overflow-y-auto p-8 md:p-16 flex items-center justify-center relative min-w-0">
            <div className="relative z-10 text-center w-full max-w-4xl">
              <div
                className="text-2xl md:text-4xl font-black flicker px-4"
                style={{
                  fontFamily: FONTS.TIMES_NEW_ROMAN,
                  color: COLORS.MAGENTA,
                  textShadow: "0 0 20px #00ffff",
                }}
              >
                Component not found! 🤷
              </div>
            </div>
          </main>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout showBackButton footerText="© DumbUI 2025 - Component chaos guaranteed" className="h-screen" noFooter>
      <div className="flex flex-1 min-h-0 overflow-hidden w-full pb-4 md:pb-6">
        <ComponentsSidebar />

        <main className="flex-1 overflow-y-auto p-8 md:p-16 flex items-center justify-center relative min-w-0">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 text-center w-full max-w-4xl">
            <div className="animate-bounce">
              <div
                className="text-4xl md:text-6xl font-black mb-4 md:mb-6 colorflip"
                style={{ fontFamily: FONTS.COMIC_SANS, color: COLORS.YELLOW }}
              >
                {componentName}
              </div>
              <div
                className="text-xl md:text-2xl font-black p-8 md:p-16 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 text-white border-8 border-lime-400 transform -rotate-3 jitter min-h-64 md:min-h-96"
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                Component content for {componentName} goes here
                <div className="mt-4 text-base md:text-lg">
                  Route: /components/{componentSlug}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  )
}

