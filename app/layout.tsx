import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/app/siteConfig";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/ui/navigation/Sidebar";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "sergby",
      url: "",
    },
  ],
  creator: "sergby",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll scroll-auto selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950 antialiased`}
        suppressHydrationWarning
      >
        <div className="mx-auto max-w-screen-2xl">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            
            <Sidebar />
            <main className="lg:pl-72">{children}</main>
           {/*  <Footer /> */}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
