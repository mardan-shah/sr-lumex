import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Insights & News</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white">
              Smart Glass Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the latest trends, innovations, and applications in smart glass technology.
            </p>
            <div className="max-w-md mx-auto pt-4">
              <div className="relative">
                <Input type="text" placeholder="Search articles..." className="pr-10 bg-white dark:bg-[#1E1E1E]" />
                <Button
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#007BFF] hover:bg-[#007BFF]/90 h-7 w-7 p-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
              Featured Article
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              Smart Office Trends in Pakistan: Embracing the Future of Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Smart%20Office%20Trends"
                alt="Smart Office Trends"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>May 15, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Ahmed Khan</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>Office</span>
                </div>
              </div>

              <p className="text-muted-foreground">
                As Pakistan's digital landscape evolves, the concept of smart offices is gaining traction, transforming
                traditional workplaces into dynamic, efficient, and employee-centric environments. With the rise of
                technologies like IoT, AI, and automation, businesses are reimagining their office spaces to foster
                productivity and sustainability.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#121212] dark:text-white">1. Emphasis on Energy Efficiency</h3>
                  <p className="text-muted-foreground">
                    Energy management is a critical aspect of smart offices. By utilizing smart lighting systems and
                    HVAC controls, offices can significantly reduce energy consumption.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#121212] dark:text-white">2. Flexible and Adaptive Workspaces</h3>
                  <p className="text-muted-foreground">
                    The shift towards hybrid work models has prompted the need for adaptable office spaces with modular
                    furniture and movable partitions.
                  </p>
                </div>
              </div>

              <Button asChild className="mt-4 bg-[#007BFF] hover:bg-[#007BFF]/90">
                <Link href="/blog/smart-office-trends-pakistan">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Featured Article */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Comparison</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              Curtains vs LED Smart Film – The Showdown
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Who Wins in the Age of Smart Spaces?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>May 10, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Fatima Zaidi</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>Comparison</span>
                </div>
              </div>

              <p className="text-muted-foreground">
                As modern architecture embraces minimalism, automation, and efficiency, traditional window treatments
                like curtains are gradually being replaced. One groundbreaking alternative gaining popularity is
                PDLC-based LED Smart Film.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#121212] dark:text-white">1. Privacy On Demand</h3>
                  <p className="text-muted-foreground">
                    LED Smart Film delivers instant privacy at the touch of a switch, ensuring full, consistent privacy
                    without physical interference.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#121212] dark:text-white">2. Modern Aesthetic</h3>
                  <p className="text-muted-foreground">
                    Smart Film offers a smooth, frameless appearance that blends perfectly with glass architecture.
                  </p>
                </div>
              </div>

              <Button asChild className="mt-4 bg-[#007BFF] hover:bg-[#007BFF]/90">
                <Link href="/blog/curtains-vs-led-smart-film">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Curtains%20vs%20Smart%20Film"
                alt="Curtains vs Smart Film"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Latest Articles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">Explore Our Blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay up-to-date with the latest trends, innovations, and applications in smart glass technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Surprising Uses for Smart Glass in Modern Homes",
                excerpt:
                  "Discover innovative applications for smart glass beyond windows and doors that can transform your living space.",
                date: "April 25, 2025",
                author: "Michael Chen",
                category: "Residential",
                image: "/placeholder.svg?height=400&width=600&text=Smart%20Home",
                slug: "surprising-uses-smart-glass-homes",
              },
              {
                title: "Smart Office Trends: Privacy and Collaboration in Balance",
                excerpt:
                  "How businesses are using smart glass to create flexible workspaces that support both collaborative and focused work.",
                date: "April 18, 2025",
                author: "Elena Rodriguez",
                category: "Office",
                image: "/placeholder.svg?height=400&width=600&text=Smart%20Office",
                slug: "smart-office-trends-privacy-collaboration",
              },
              {
                title: "Curtains vs. Smart Glass: The Ultimate Showdown",
                excerpt:
                  "A comprehensive comparison of traditional window treatments and smart glass solutions for modern homes and offices.",
                date: "April 10, 2025",
                author: "David Kim",
                category: "Comparison",
                image: "/placeholder.svg?height=400&width=600&text=Comparison",
                slug: "curtains-vs-smart-glass-showdown",
              },
              {
                title: "Energy Savings: How Smart Glass Reduces HVAC Costs",
                excerpt:
                  "A detailed analysis of the energy efficiency benefits of smart glass installations in commercial buildings.",
                date: "April 3, 2025",
                author: "Sarah Johnson",
                category: "Sustainability",
                image: "/placeholder.svg?height=400&width=600&text=Energy%20Savings",
                slug: "energy-savings-smart-glass-hvac",
              },
              {
                title: "The Science Behind PDLC Technology",
                excerpt:
                  "An in-depth look at how Polymer Dispersed Liquid Crystal technology enables the magic of switchable smart glass.",
                date: "March 27, 2025",
                author: "Dr. Robert Chen",
                category: "Technology",
                image: "/placeholder.svg?height=400&width=600&text=PDLC%20Technology",
                slug: "science-behind-pdlc-technology",
              },
              {
                title: "Smart Glass in Healthcare: Privacy and Infection Control",
                excerpt:
                  "How healthcare facilities are utilizing smart glass to enhance patient privacy and improve infection control measures.",
                date: "March 20, 2025",
                author: "Dr. Amanda Johnson",
                category: "Healthcare",
                image: "/placeholder.svg?height=400&width=600&text=Healthcare",
                slug: "smart-glass-healthcare-privacy-infection-control",
              },
            ].map((article, index) => (
              <div key={index} className="bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {article.author}</span>
                    <Button asChild variant="link" className="p-0 text-[#007BFF] hover:text-[#007BFF]/80">
                      <Link href={`/blog/${article.slug}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-[#007BFF] hover:bg-[#007BFF]/90">
              <Link href="/blog/archive">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
              Categories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">Browse By Topic</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find articles relevant to your specific interests and needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Residential", count: 12 },
              { name: "Office", count: 15 },
              { name: "Retail", count: 8 },
              { name: "Hospitality", count: 6 },
              { name: "Technology", count: 14 },
              { name: "Sustainability", count: 10 },
              { name: "Design", count: 9 },
              { name: "Installation", count: 7 },
              { name: "Maintenance", count: 5 },
              { name: "Case Studies", count: 11 },
              { name: "Industry News", count: 13 },
              { name: "Tips & Advice", count: 8 },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="bg-white dark:bg-[#1E1E1E] rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-[#121212] dark:text-white">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Stay Updated</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get the latest articles, case studies, and industry insights delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-[#007BFF] hover:bg-[#007BFF]/90">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
