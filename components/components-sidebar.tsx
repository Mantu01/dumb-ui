"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FONTS } from "@/lib/constants"
import { getAllComponents } from "@/lib/component-list"

export function ComponentsSidebar() {
  const pathname = usePathname()
  const components = getAllComponents()

  return (
    <aside
      className="w-64 md:w-80 bg-gradient-to-b from-red-600 via-purple-600 to-blue-500 p-4 md:p-8 border-r-8 border-yellow-300 overflow-y-auto shrink-0"
      style={{ fontFamily: FONTS.PAPYRUS }}
    >
      <div className="text-2xl md:text-3xl font-black text-black mb-6 md:mb-8 colorflip shake">
        COMPONENTS
      </div>
      <div className="space-y-2 md:space-y-3">
        {components.map((comp, idx) => {
          const isActive = pathname === `/components/${comp.slug}`

          return (
            <Link
              key={comp.slug}
              href={`/components/${comp.slug}`}
              className={`block w-full text-left p-3 md:p-4 text-base md:text-lg font-black transition-all hover:scale-105 ${
                isActive
                  ? "bg-yellow-300 text-black border-4 border-black scale-105"
                  : "bg-cyan-300 text-black border-4 border-blue-900"
              }`}
              style={{
                fontFamily:
                  idx % 3 === 0 ? FONTS.COMIC_SANS : idx % 3 === 1 ? FONTS.TIMES_NEW_ROMAN : FONTS.PAPYRUS,
              }}
              title={comp.description}
            >
              {comp.name}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}

