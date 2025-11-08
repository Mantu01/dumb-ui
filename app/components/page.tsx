"use client"

import { PageLayout } from "@/components/page-layout"
import { ComponentsSidebar } from "@/components/components-sidebar"
import { FONTS, COLORS } from "@/lib/constants"

export default function ComponentsPage() {
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
            <div
              className="text-2xl md:text-4xl font-black flicker px-4"
              style={{
                fontFamily: FONTS.TIMES_NEW_ROMAN,
                color: COLORS.MAGENTA,
                textShadow: "0 0 20px #00ffff",
              }}
            >
              Select a component from the sidebar — if you dare.
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  )
}
