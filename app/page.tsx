import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import VideoHero from "@/components/video-hero"
import FeatureCard from "@/components/feature-card"
import TestimonialSlider from "@/components/testimonial-slider"
import ProductShowcase3D from "@/components/product-showcase-3d"
import VideoDemoSection from "@/components/video-demo-section"
import ObjectivesSection from "@/components/objectives-section"
import ProductFeatures from "@/components/product-features"


import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <VideoHero /> 

      {/* What is SR Lumex Section */}
      <section className="bg-white dark:bg-gray-950 py-16 md:py-24">
        <div className="container space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-[#454545] hover:bg-[#007BFF]/90 text-white">Innovative Technology</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] dark:text-white">
              What is SR Lumex?
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              SR Lumex introduces a new era of architectural glass, where technology and design work hand in hand. Our
              LED film screens are designed to transform ordinary glass into dynamic displays, delivering immersive
              visuals while maximizing space efficiency and modern appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            <FeatureCard
              title="Innovative"
              description="Cutting-edge LED film technology that transforms any glass surface into a dynamic digital canvas"
              icon="lightbulb"
              color="#007BFF"
            />
            <FeatureCard
              title="Intelligent"
              description="Smart integration with building systems and intuitive controls for seamless operation"
              icon="cpu"
              color="#50C878"
            />
            <FeatureCard
              title="Elegant"
              description="Sleek, minimalist design that enhances architectural aesthetics while providing functionality"
              icon="diamond"
              color="#121212"
            />
          </div>
        </div>
      </section>

      {/* 3D Product Showcase 
      <section className="bg-gray-50 dark:bg-gray-900">
        <ProductShowcase3D />
      </section>
      */}

      {/* Applications Section */}
      <section className="bg-white dark:bg-gray-950 py-16 md:py-24">
        <div className="container space-y-8 md:space-y-12">
          <div className="text-center space-y-4 px-4">
            <Badge className="bg-[#121212] dark:bg-white hover:bg-[#121212]/90 dark:hover:bg-white/90 text-white dark:text-black">
              Applications
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] dark:text-white">
              Where SR Lumex Works Best
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore the endless possibilities of SR Lumex LED film screens, transforming spaces with vibrant digital
              displays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
            <Link
              href="/solutions/residential"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border border-blue-200 dark:border-blue-800 p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 dark:bg-blue-400/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#121212] dark:text-white">
                Homes & Apartments
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Turn everyday glass into an elegant digital canvas. Perfect for ambient visuals, digital art, or smart
                home displays in living rooms, bedrooms, and lounges.
              </p>
            </Link>

            <Link
              href="/solutions/office"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50 border border-emerald-200 dark:border-emerald-800 p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#121212] dark:text-white">
                Offices & Workspaces
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Modernize boardrooms, cabins, and partitions with sleek LED film displays for presentations, branding,
                or real-time dashboards integrated into your glass interiors.
              </p>
            </Link>

            <Link
              href="/solutions/retail"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border border-purple-200 dark:border-purple-800 p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-purple-500/20 dark:bg-purple-400/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#121212] dark:text-white">
                Retail & Showrooms
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Capture attention with high-impact, transparent digital storefronts and branded display walls that
                showcase content without blocking visibility.
              </p>
            </Link>

            <Link
              href="/solutions/hospitality"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 border border-orange-200 dark:border-orange-800 p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500/20 dark:bg-orange-400/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#121212] dark:text-white">
                Hotels & Hospitality
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Elevate guest experiences with immersive LED visuals in lobbies, spas, and rooms. Ideal for digital
                signage, ambient storytelling, or luxury branding.
              </p>
            </Link>
          </div>

          {/* <div className="flex justify-center mt-8 md:mt-12 px-4">
            <Button asChild className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">
              <Link href="/solutions">
                View all solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <VideoDemoSection />
      </section>

      {/* Objectives Section */}
      <section className="bg-white dark:bg-gray-950">
        <ObjectivesSection />
      </section>

      {/* Product Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <ProductFeatures />
      </section>

      {/* Testimonials Section */}
      <section className="bg-white dark:bg-gray-950">
        <TestimonialSlider />
      </section>

      {/* CTA Section */}
      <section className="bg-[#121212] dark:bg-gray-950 text-white py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <Badge className="bg-[#50C878] hover:bg-[#50C878]/90 text-white">Get Started</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to transform your glass into smart displays?
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Experience the future of architectural glass with SR Lumex. Schedule a consultation with our experts to
              discover the perfect smart glass solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
