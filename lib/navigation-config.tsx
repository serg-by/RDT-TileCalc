import { siteConfig } from "@/app/siteConfig"
import type React from "react"
import {
  RiHome2Line,
  RiLinkM,
  RiListCheck,
} from "@remixicon/react"
import type { ComponentType } from "react"

type IconComponent = ComponentType<
  React.SVGAttributes<SVGSVGElement> & { "aria-hidden"?: boolean | string }
>

export type NavItem = {
  name: string
  href: string
  icon: IconComponent
}

export const navigation: readonly NavItem[] = [
  { name: "Черепах", href: siteConfig.baseLinks.overview, icon: RiHome2Line },
  { name: "Игра по крупному", href: siteConfig.baseLinks.details, icon: RiListCheck },
  { name: "Войска", href: siteConfig.baseLinks.troops.training, icon: RiLinkM, },
] as const

export const shortcuts: readonly NavItem[] = [
  { name: "Быстрый шорд код", href: "#", icon: RiLinkM },
  { name: "Быстрый шорд код", href: "#", icon: RiLinkM },
  { name: "Быстрый шорд код", href: "#", icon: RiLinkM },
  { name: "Быстрый шорд код", href: "#", icon: RiLinkM },
] as const
