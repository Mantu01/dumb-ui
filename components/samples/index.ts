"use client"

import { AccordionSample } from "./accordion"
import { AlertSample } from "./alert"
import { AvatarSample } from "./avatar"
import { BadgeSample } from "./badge"
import { BreadcrumbSample } from "./breadcrumb"
import { ButtonSample } from "./button"
import { CardSample } from "./card"
import { CheckboxSample } from "./checkbox"
import { DialogSample } from "./dialog"
import { DropdownSample } from "./dropdown"
import { InputSample } from "./input"
import { NavbarSample } from "./navbar"
import { PaginationSample } from "./pagination"
import { ProgressSample } from "./progress"
import { RadioSample } from "./radio"
import { SelectSample } from "./select"
import { SliderSample } from "./slider"
import { TableSample } from "./table"
import { ToastSample } from "./toast"
import { TooltipSample } from "./tooltip"

// import { AvatarSample } from "./avatar"
// import { BreadcrumbSample } from "./breadcrumb"
// import { DialogSample } from "./dialog"
// import { DropdownSample } from "./dropdown"
// import { PaginationSample } from "./pagination"
// import { ProgressSample } from "./progress"
// import { SkeletonSample } from "./skeleton"
// import { SwitchSample } from "./switch"
// import { TableSample } from "./table"
// import { TabsSample } from "./tabs"
// import { ToastSample } from "./toast"

import type { ComponentConfig } from "@/lib/component-types"

export const COMPONENT_REGISTRY: ComponentConfig[] = [
  {
    name: "Accordion",
    slug: "accordion",
    component: AccordionSample,
    description: "The worst button you'll ever use",
    category: "Form",
  },
  {
    name: "Alert",
    slug: "alert",
    component: AlertSample,
    description: "Alert component for notifications",
    category: "Feedback",
  },
  {
    name: "Avatar",
    slug: "avatar",
    component: AvatarSample,
    description: "Avatar component for user profiles",
    category: "Display",
  },
  {
    name: "Badge",
    slug: "badge",
    component: BadgeSample,
    description: "Badge component for labels",
    category: "Display",
  },
  {
    name: "Breadcrumb",
    slug: "breadcrumb",
    component: BreadcrumbSample,
    description: "Breadcrumb navigation component",
    category: "Navigation",
  },
  {
    name: "Button",
    slug: "button",
    component: ButtonSample,
    description: "The worst accordion you'll ever use",
    category: "Form",
  },
  {
    name: "Card",
    slug: "card",
    component: CardSample,
    description: "Card component for displaying content",
    category: "Layout",
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    component: CheckboxSample,
    description: "Checkbox input component",
    category: "Form",
  },
  {
    name: "Dialog",
    slug: "dialog",
    component: DialogSample,
    description: "Dialog component for modals",
    category: "Overlay",
  },
  {
    name: "Dropdown",
    slug: "dropdown",
    component: DropdownSample,
    description: "Dropdown component for menus",
    category: "Overlay",
  },
  {
    name: "Input",
    slug: "input",
    component: InputSample,
    description: "Input field component",
    category: "Form",
  },
  {
    name: "Navbar",
    slug: "navbar",
    component: NavbarSample,
    description: "Navigation bar component",
    category: "Navigation",
  },
  {
    name: "Pagination",
    slug: "pagination",
    component: PaginationSample,
    description: "Pagination control component",
    category: "Navigation",
  },
  {
    name: "Progress",
    slug: "progress",
    component: ProgressSample,
    description: "Progress bar component",
    category: "Feedback",
  },
  {
    name: "Radio",
    slug: "radio",
    component: RadioSample,
    description: "Radio button component",
    category: "Form",
  },
  {
    name: "Select",
    slug: "select",
    component: SelectSample,
    description: "Select dropdown component",
    category: "Form",
  },
  {
    name: "Slider",
    slug: "slider",
    component: SliderSample,
    description: "Slider input component",
    category: "Form",
  },
  {
    name: "Table",
    slug: "table",
    component: TableSample,
    description: "Table component for data display",
    category: "Layout",
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    component: TooltipSample,
    description: "Tooltip component for hints",
    category: "Overlay",
  },
  {
    name: "Toast",
    slug: "toast",
    component: ToastSample,
    description: "Toast component for brief notifications",
    category: "Feedback",
  },
]
