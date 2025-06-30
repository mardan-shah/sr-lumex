"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import ThemeToggle from "@/components/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHomePage, setIsHomePage] = useState(true)

  useEffect(() => {
    // Add this check
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Check if we're on the home page
    setIsHomePage(window.location.pathname === "/")

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/90 dark:bg-[#121212]/90 shadow-sm py-3"
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* <span
            className={`text-2xl font-bold ${
              isScrolled || !isHomePage ? "text-[#121212] dark:text-white" : "text-white"
            }`}
          >
            SR<span className="text-[#007BFF]">Lumex</span>
          </span> */}
          <Image 
            src='/logo/LogoWhite.png'
            alt="SrLumex"
            width={50}
            height={50}
            className=" shadow-xl bg-transparent"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`font-medium hover:text-[#007BFF] transition-colors ${
              isScrolled || !isHomePage ? "text-[#121212] dark:text-white" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium hover:text-[#007BFF] transition-colors ${
              isScrolled || !isHomePage ? "text-[#121212] dark:text-white" : "text-white"
            }`}
          >
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 font-medium hover:text-[#007BFF] transition-colors ${
                  isScrolled || !isHomePage ? "text-[#121212] dark:text-white" : "text-white"
                }`}
              >
                Solutions <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/solutions/residential">Residential</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/office">Office</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/retail">Retail</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/hospitality">Hospitality</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/custom">Custom</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/technology"
            className={`font-medium hover:text-[#007BFF] transition-colors ${
              isScrolled || !isHomePage ? "text-[#121212] dark:text-white" : "text-white"
            }`}
          >
            Technology
          </Link>
          <Link
            href="/projects"
            className={`font-medium hover:text-[#007BFF] transition-colors ${
              isScrolled || !isHomePage ? "text-[#121212] dark:text-white" : "text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={`font-medium hover:text-[#007BFF] transition-colors ${
              isScrolled || !isHomePage ? "text-[#121212] dark:text-white" : "text-white"
            }`}
          >
            Blog
          </Link>

          {/* <ThemeToggle isScrolled={isScrolled} isHomePage={isHomePage} /> */}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            className={isScrolled ? "bg-[#007BFF] hover:bg-[#007BFF]/90" : "bg-white text-[#007BFF] hover:bg-white/90"}
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
          <Menu className={isScrolled || !isHomePage ? "text-[#121212] dark:text-white" : "text-white"} />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 z-50 flex flex-col"
            >
              <div className="container py-5 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    {/* <span className="text-2xl font-bold text-[#121212] dark:text-white">
                      SR<span className="text-[#007BFF]">Lumex</span>
                    </span> */}
                    <Image 
                      src='/logo/LogoWhite.png'
                      alt="SrLumex"
                      width={50}
                      height={50}
                      className=" shadow-xl bg-transparent"
                    />
                  </Link>

                  <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="text-[#121212] dark:text-white" />
                  </button>
                </div>
              </div>

              <nav className="flex flex-col gap-4 px-6 py-8">
                <Link
                  href="/"
                  className="text-xl font-medium text-[#121212] dark:text-white py-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-xl font-medium text-[#121212] dark:text-white py-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

                <div className="py-2 border-b border-gray-100 dark:border-gray-800">
                  <button
                    className="flex items-center justify-between w-full text-xl font-medium text-[#121212] dark:text-white"
                    onClick={(e) => {
                      e.preventDefault()
                      const submenu = e.currentTarget.nextElementSibling
                      if (submenu) {
                        submenu.classList.toggle("hidden")
                      }
                    }}
                  >
                    Solutions
                    <ChevronDown className="h-5 w-5" />
                  </button>
                  <div className="hidden pl-4 mt-2 space-y-2">
                    <Link
                      href="/solutions/residential"
                      className="block py-1 text-[#121212] dark:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Residential
                    </Link>
                    <Link
                      href="/solutions/office"
                      className="block py-1 text-[#121212] dark:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Office
                    </Link>
                    <Link
                      href="/solutions/retail"
                      className="block py-1 text-[#121212] dark:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Retail
                    </Link>
                    <Link
                      href="/solutions/hospitality"
                      className="block py-1 text-[#121212] dark:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Hospitality
                    </Link>
                    <Link
                      href="/solutions/custom"
                      className="block py-1 text-[#121212] dark:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Custom
                    </Link>
                  </div>
                </div>

                <Link
                  href="/technology"
                  className="text-xl font-medium text-[#121212] dark:text-white py-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Technology
                </Link>
                <Link
                  href="/projects"
                  className="text-xl font-medium text-[#121212] dark:text-white py-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className="text-xl font-medium text-[#121212] dark:text-white py-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                {/* <div className="py-4 flex justify-center">
                  <ThemeToggle isScrolled={true} isHomePage={false} />
                </div> */}
              </nav>

              <div className="mt-auto p-6">
                <Button asChild className="w-full bg-[#007BFF] hover:bg-[#007BFF]/90">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
