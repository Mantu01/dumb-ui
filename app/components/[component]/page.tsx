"use client"

import { useParams } from "next/navigation"
import { PageLayout } from "@/components/page-layout"
import { ComponentsSidebar } from "@/components/components-sidebar"
import { FONTS, COLORS } from "@/lib/constants"
import { getComponentBySlug } from "@/lib/component-list"

export default function ComponentDetailPage() {
  const params = useParams()
  const componentSlug = params.component as string
  const componentConfig = getComponentBySlug(componentSlug)

  if (!componentConfig) {
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

  const Component = componentConfig.component

  return (
    <PageLayout showBackButton footerText="© DumbUI 2025 - Component chaos guaranteed" className="h-screen" noFooter>
      <div className="flex flex-1 min-h-0 overflow-hidden w-full pb-4 md:pb-6">
        <ComponentsSidebar />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative min-w-0">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            <Component />
          </div>
        </main>
      </div>
    </PageLayout>
  )
}

