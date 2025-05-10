import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import VideoHero from "@/components/video-hero"
import FeatureCard from "@/components/feature-card"
import TestimonialSlider from "@/components/testimonial-slider"
import VideoShowcase from "@/components/video-showcase"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <VideoHero />

      {/* Features Section */}
      <section className="container py-24 space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Innovative Technology</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">
            Transforming Spaces with Smart Glass
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our intelligent glass solutions adapt to your needs, providing privacy, energy efficiency, and aesthetic
            appeal at the touch of a button.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Privacy On Demand"
            description="Transform clear glass to opaque instantly with our PDLC technology."
            icon="shield"
            color="#007BFF"
          />
          <FeatureCard
            title="Energy Efficient"
            description="Reduce energy costs by controlling light and heat transmission."
            icon="sun"
            color="#50C878"
          />
          <FeatureCard
            title="Customizable"
            description="Available in various sizes, shapes, and tints to match your design vision."
            icon="settings"
            color="#007BFF"
          />
          <FeatureCard
            title="Durable & Reliable"
            description="Engineered for longevity with industry-leading warranties."
            icon="shield-check"
            color="#121212"
          />
          <FeatureCard
            title="Smart Integration"
            description="Seamlessly connects with home and building automation systems."
            icon="cpu"
            color="#007BFF"
          />
          <FeatureCard
            title="Eco-Conscious"
            description="Sustainable manufacturing processes and materials."
            icon="leaf"
            color="#50C878"
          />
        </div>
      </section>

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* Applications Section */}
      <section className="bg-[#ECECEC] dark:bg-[#121212]/80 py-24">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-[#121212] hover:bg-[#121212]/90">Applications</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">
              Smart Glass for Every Space
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From residential privacy solutions to commercial architectural statements, our smart glass technology
              transforms any environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Residential", "Office", "Retail", "Hospitality"].map((space, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=300&text=${space}`}
                  alt={`${space} application`}
                  width={300}
                  height={400}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{space}</h3>
                  <Link
                    href={`/solutions/${space.toLowerCase()}`}
                    className="text-[#007BFF] group-hover:underline flex items-center mt-2"
                  >
                    Explore solutions <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-[#007BFF] hover:bg-[#007BFF]/90">
              <Link href="/solutions">
                View all solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="bg-[#121212] text-white py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#50C878] hover:bg-[#50C878]/90">Get Started</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Space?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience the future of architectural glass with SR Lumex. Schedule a consultation with our experts to
              discover the perfect smart glass solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
