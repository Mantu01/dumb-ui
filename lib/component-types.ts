import type { ComponentType } from "react"

export interface ComponentConfig {
  name: string
  slug: string
  component: ComponentType
  description: string
  category: string
}

