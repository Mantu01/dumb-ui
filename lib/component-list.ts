import { COMPONENT_REGISTRY } from "@/components/samples"
import type { ComponentConfig } from "./component-types"

// Export component names as array (for backward compatibility)
export const COMPONENTS = COMPONENT_REGISTRY.map((config) => config.name) as readonly string[]

export type ComponentName = (typeof COMPONENTS)[number]

// Convert component name to URL-friendly slug
export function componentToSlug(componentName: string): string {
  const config = COMPONENT_REGISTRY.find((c) => c.name === componentName)
  return config?.slug || componentName.toLowerCase().replace(/\s+/g, "-")
}

// Convert slug back to component name
export function slugToComponent(slug: string): string {
  const config = COMPONENT_REGISTRY.find((c) => c.slug === slug)
  return config?.name || slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Get component config by slug
export function getComponentBySlug(slug: string): ComponentConfig | undefined {
  return COMPONENT_REGISTRY.find((c) => c.slug === slug)
}

// Get component config by name
export function getComponentByName(name: string): ComponentConfig | undefined {
  return COMPONENT_REGISTRY.find((c) => c.name === name)
}

// Get all components
export function getAllComponents(): ComponentConfig[] {
  return COMPONENT_REGISTRY
}

// Get component info
export function getComponentInfo(componentName: string) {
  const config = getComponentByName(componentName)
  return config || {
    name: componentName,
    slug: componentToSlug(componentName),
    description: `Component details for ${componentName}`,
    category: "Unknown",
  }
}

