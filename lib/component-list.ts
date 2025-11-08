// List of available components
export const COMPONENTS = [
  "Button",
  "Card",
  "Modal",
  "Navbar",
  "Badge",
  "Tooltip",
  "Alert",
  "Input",
  "Checkbox",
  "Radio",
  "Select",
  "Slider",
] as const

export type ComponentName = (typeof COMPONENTS)[number]

// Convert component name to URL-friendly slug
export function componentToSlug(component: string): string {
  return component.toLowerCase().replace(/\s+/g, "-")
}

// Convert slug back to component name
export function slugToComponent(slug: string): string {
  return COMPONENTS.find(
    (comp) => componentToSlug(comp) === slug
  ) || slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Get component info
export function getComponentInfo(componentName: string) {
  return {
    name: componentName,
    slug: componentToSlug(componentName),
    description: `Component details for ${componentName}`,
  }
}

