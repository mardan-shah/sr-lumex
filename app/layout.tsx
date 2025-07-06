import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer"
const inter = Inter({ subsets: ["latin"] })
import PageLoader from "@/components/PageLoader"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "SR Lumex",
  description: "Transform your space with intelligent LED film screen technology",
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
     <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
