import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SR Lumex – Transparent LED Display Glass & Smart Architectural Screens",
  description: "R Lumex pioneers transparent LED technology by embedding ultra-thin display films directly into glass surfaces. From residential interiors to office partitions and retail storefronts, our cutting-edge solutions transform ordinary glass into sleek, dynamic displays—blending digital visuals with modern architectural aesthetics.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#007BFF",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}