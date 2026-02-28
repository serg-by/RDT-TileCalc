import { siteConfig } from "@/app/siteConfig";
import type { ComponentType, SVGProps } from "react";
import { Home, Link, ListCheck } from "lucide-react";

// Тип для иконок — компонент, принимающий SVG‑пропсы
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavItem = {
  name: string;
  href: string;
  icon: IconComponent;
};

export const navigation: readonly NavItem[] = [
  { name: "Черепах", href: siteConfig.baseLinks.overview, icon: Home },
  { name: "Игра по крупному", href: siteConfig.baseLinks.details, icon: ListCheck },
  { name: "Войска", href: siteConfig.baseLinks.troops.training, icon: Link },
] as const;

export const shortcuts: readonly NavItem[] = [
  { name: "Быстрый шорд код 1", href: "#", icon: Link },
  { name: "Быстрый шорд код 2", href: "#", icon: Link },
  { name: "Быстрый шорд код 3", href: "#", icon: Link },
  { name: "Быстрый шорд код 4", href: "#", icon: Link },
] as const;
