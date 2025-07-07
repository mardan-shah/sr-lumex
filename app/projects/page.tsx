import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CTA from "@/components/CTA"
import PageWrapper from "@/components/PageWrapper"

export default function ProjectsPage() {
  return (
    <PageWrapper> 
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-[#ECECEC] dark:bg-[#121212]/80">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Our Projects</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white">
                Smart Glass in Action
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our portfolio of successful smart glass installations across residential, commercial, and
                specialized projects.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Modern Residential Retreat",
                  category: "Residential",
                  location: "Malibu, California",
                  description:
                    "Smart glass installation for a luxury beachfront home, providing privacy and UV protection while maintaining ocean views.",
                  image: "/placeholder.svg?height=600&width=800&text=Residential%20Project",
                },
                {
                  title: "Tech Headquarters",
                  category: "Office",
                  location: "San Francisco, California",
                  description:
                    "Complete smart glass solution for a tech company's headquarters, featuring conference rooms, executive offices, and exterior windows.",
                  image: "/placeholder.svg?height=600&width=800&text=Office%20Project",
                },
                {
                  title: "Luxury Retail Flagship",
                  category: "Retail",
                  location: "New York City, New York",
                  description:
                    "Interactive smart glass displays and privacy solutions for a high-end retail store in Manhattan.",
                  image: "/placeholder.svg?height=600&width=800&text=Retail%20Project",
                },
                {
                  title: "Boutique Hotel Renovation",
                  category: "Hospitality",
                  location: "Miami, Florida",
                  description:
                    "Smart glass bathroom enclosures and room dividers for a boutique hotel, enhancing guest experience and room versatility.",
                  image: "/placeholder.svg?height=600&width=800&text=Hotel%20Project",
                },
                {
                  title: "Medical Center Privacy Solution",
                  category: "Healthcare",
                  location: "Houston, Texas",
                  description:
                    "HIPAA-compliant privacy glass for patient rooms and consultation areas in a modern medical facility.",
                  image: "/placeholder.svg?height=600&width=800&text=Healthcare%20Project",
                },
                {
                  title: "Museum Exhibition Space",
                  category: "Cultural",
                  location: "Chicago, Illinois",
                  description:
                    "Switchable display cases and partition walls for a museum, allowing for dynamic exhibition layouts and content protection.",
                  image: "/placeholder.svg?height=600&width=800&text=Museum%20Project",
                },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-2 bg-[#007BFF] hover:bg-[#007BFF]/90">{project.category}</Badge>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.location}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white dark:bg-[#1E1E1E]">
                    <p className="text-muted-foreground">{project.description}</p>
                    <Button asChild variant="link" className="mt-4 p-0 text-[#007BFF] hover:text-[#007BFF]/80">
                      <Link href={`/projects/${index + 1}`}>
                        View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
                Featured Project
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                SR Lumex LED Film Screen Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Introducing innovative LED film screen technology to the market with customizable, energy-efficient, and
                aesthetically refined solutions for modern spaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=SR%20Lumex%20LED%20Film%20Solutions"
                    alt="SR Lumex LED Film Screen Solutions"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-white/10 dark:bg-black/10">
                      Technology
                    </Badge>
                    <span>PDLC & LED Film Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-white/10 dark:bg-black/10">
                      Market Focus
                    </Badge>
                    <span>Pakistan & Regional Markets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-white/10 dark:bg-black/10">
                      Status
                    </Badge>
                    <span>Active Development & Launch</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Project Objective</h3>
                <p className="text-muted-foreground">
                  To introduce SR Lumex's innovative LED film screen technology to the market, providing customizable,
                  energy-efficient, and aesthetically refined LED screens for modern spaces across multiple industries.
                </p>

                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>PDLC Film: Instant privacy and light control with switchable transparency</li>
                  <li>LED Film: Flexible LED lighting for dynamic effects and enhanced visibility</li>
                  <li>Energy Efficiency: Reduces heat transfer and improves energy savings</li>
                  <li>Modern Aesthetic: Sleek, frameless design to elevate any space</li>
                </ul>

                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Target Markets</h3>
                <p className="text-muted-foreground">
                  Architects, interior designers, business owners, retail brands, real estate developers, hospitality
                  industry, event planners, and educational institutions across Pakistan and regional markets.
                </p>

                <Button asChild className="mt-4 bg-[#007BFF] hover:bg-[#007BFF]/90">
                  <Link href="/projects/featured">
                    View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Categories Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Explore By Category</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">Smart Glass Applications</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how SR Lumex smart glass technology is transforming spaces across different industries and
                applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Residential",
                  image: "/placeholder.svg?height=400&width=300&text=Residential",
                  count: "24 Projects",
                },
                {
                  category: "Office",
                  image: "/placeholder.svg?height=400&width=300&text=Office",
                  count: "36 Projects",
                },
                {
                  category: "Retail",
                  image: "/placeholder.svg?height=400&width=300&text=Retail",
                  count: "18 Projects",
                },
                {
                  category: "Hospitality",
                  image: "/placeholder.svg?height=400&width=300&text=Hospitality",
                  count: "15 Projects",
                },
              ].map((category, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.category}
                    width={300}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    <p className="text-white/80 text-sm">{category.count}</p>
                    <Link
                      href={`/projects/category/${category.category.toLowerCase()}`}
                      className="text-[#007BFF] group-hover:underline flex items-center mt-2"
                    >
                      View projects <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <CTA />
      </div>
    </PageWrapper>
  )
}
