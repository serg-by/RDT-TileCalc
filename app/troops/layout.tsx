"use client"

import { siteConfig } from "@/app/siteConfig"
import { TabNavigation, TabNavigationLink } from "@/components/ui/TabNavigation"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationtroops = [
  { name: "Обучение", href: siteConfig.baseLinks.troops.training },
  { name: "Переобучение", href: siteConfig.baseLinks.troops.retraining },
  { name: "Обучение тест", href: siteConfig.baseLinks.troops.users },
]

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  return (
    <div className="p-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7">
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Обучение и переобучение войск
      </h1>
      <TabNavigation className="mt-4 sm:mt-6 lg:mt-10">
        {navigationtroops.map((item) => (
          <TabNavigationLink
            key={item.name}
            asChild
            active={pathname === item.href}
          >
            <Link href={item.href}>{item.name}</Link>
          </TabNavigationLink>
        ))}
      </TabNavigation>
      <div className="pt-6">{children}</div>
    </div>
  )
}