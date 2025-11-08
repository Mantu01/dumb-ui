import { ReactNode } from "react"
import { Navigation } from "./navigation"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: ReactNode
  showBackButton?: boolean
  backHref?: string
  footerText?: string
  className?: string
  hasFixedFooter?: boolean
  noFooter?: boolean
}

export function PageLayout({
  children,
  showBackButton = false,
  backHref = "/",
  footerText,
  className = "",
  hasFixedFooter = false,
  noFooter = false,
}: PageLayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen bg-black text-white ${className}`}>
      <Navigation showBackButton={showBackButton} backHref={backHref} />
      <div className="flex-1 flex flex-col min-h-0 pt-20 md:pt-24">
        {children}
      </div>
      {!noFooter && (
        <div className="mt-auto">
          <Footer text={footerText} />
        </div>
      )}
    </div>
  )
}

