import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">About SR Lumex</Badge>
            <div className="relative">
              {/* Visually layered heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212]/10 dark:text-white/10">
                Transforming Spaces
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212]/20 dark:text-white/20 absolute top-[0.15em] left-0 right-0">
                Transforming Spaces
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white absolute top-[0.3em] left-0 right-0">
                Transforming Spaces
              </h1>
              <div className="h-16 md:h-20 lg:h-24"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#007BFF] dark:text-[#007BFF]">
                Through Innovation
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              We're on a mission to revolutionize how people experience and interact with their environments through
              cutting-edge smart glass technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
                Our Vision
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                Leading Pakistan's Digital Transformation
              </h2>
              <p className="text-muted-foreground">
                To lead Pakistan's LED film screen movement, transform your everyday spaces into intelligence, reshaping
                how people experience and interact with spaces through intelligent, adaptive, and design-forward
                solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-[#121212] dark:text-white">Innovation-driven:</span> Constantly
                    pushing the boundaries of what's possible with LED film technology.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-[#121212] dark:text-white">Customer-focused:</span> Creating
                    solutions that address real needs and enhance everyday experiences.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-[#121212] dark:text-white">Design-forward:</span> Uncompromising
                    commitment to aesthetics and functionality in every product we create.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#007BFF]/10 rounded-full dark:bg-[#007BFF]/20" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#50C878]/10 rounded-full dark:bg-[#50C878]/20" />
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about1.jpg"
                  alt="SR Lumex Vision"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#007BFF]/10 rounded-full dark:bg-[#007BFF]/20" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#50C878]/10 rounded-full dark:bg-[#50C878]/20" />
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about2.jpg"
                  alt="SR Lumex Mission"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                Transforming Pakistan's Spaces
              </h2>
              <p className="text-muted-foreground">
                SR Lumex is committed to transform the landscape of architecture, interiors, and retail environments in
                Pakistan by introducing innovative LED film technologies. We aim to empower businesses, homeowners, and
                creators with sustainable, energy-efficient, and aesthetically advanced solutions that enhance both
                functionality and design.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-[#121212] dark:text-white">Empowerment:</span> Providing tools and
                    technology that enable creative expression and functional improvement.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-[#121212] dark:text-white">Sustainability:</span> Creating
                    energy-efficient solutions that reduce environmental impact.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-[#121212] dark:text-white">Innovation:</span> Continuously
                    developing new applications and improvements for LED film technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SR Lumex? Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white text-center">
              What is SR Lumex?
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              SR Lumex introduces a new era of architectural glass, where technology and design work hand in hand. Our
              LED film screens are designed to transform ordinary glass into dynamic displays, delivering immersive
              visuals while maximizing space efficiency and modern appeal. With a focus on clean aesthetics and smooth
              integration, SR Lumex adds a modern, refined touch to interiors, making environments not only smarter but
              noticeably more sophisticated.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">The Minds Behind SR Lumex</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of engineers, designers, and industry experts are united by a passion for innovation and
              a commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "Visionary leader with 15+ years in architectural innovation",
                image: "/images/avatar-female-1.svg",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                bio: "Engineering genius behind our proprietary PDLC technology",
                image: "/images/avatar-male-1.svg",
              },
              {
                name: "Elena Rodriguez",
                role: "Head of Design",
                bio: "Award-winning designer focused on aesthetic integration",
                image: "/images/avatar-female-2.svg",
              },
              {
                name: "David Kim",
                role: "Operations Director",
                bio: "Efficiency expert ensuring flawless product delivery",
                image: "/images/avatar-male-2.svg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white">{member.name}</h3>
                  <p className="text-[#007BFF] font-medium">{member.role}</p>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">Milestones & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our journey has been defined by innovation, perseverance,
              and a commitment to excellence.
            </p>
          </div>

          {/* Mobile Timeline */}
          <div className="block md:hidden space-y-8">
            {[
              {
                year: "2010",
                title: "Company Founded",
                description: "SR Lumex was established with a vision to revolutionize architectural glass technology.",
                icon: "🚀",
              },
              {
                year: "2013",
                title: "First Patent",
                description:
                  "Secured our first patent for innovative PDLC film technology, setting the foundation for our future products.",
                icon: "📜",
              },
              {
                year: "2015",
                title: "International Expansion",
                description:
                  "Expanded operations to Europe and the Middle East, bringing our technology to new markets.",
                icon: "🌍",
              },
              {
                year: "2018",
                title: "Innovation Award",
                description:
                  "Received the prestigious Global Innovation Award for our contributions to sustainable building technology.",
                icon: "🏆",
              },
              {
                year: "2020",
                title: "Smart Integration",
                description:
                  "Launched our smart home integration system, allowing seamless control of smart glass through popular home automation platforms.",
                icon: "🏠",
              },
              {
                year: "2023",
                title: "Sustainability Milestone",
                description:
                  "Achieved carbon-neutral manufacturing processes and launched our eco-friendly product line.",
                icon: "🌱",
              },
            ].map((milestone, index) => (
              <div key={index} className="relative pl-12">
                {/* Mobile Timeline Line */}
                {index !== 5 && <div className="absolute left-6 top-12 w-0.5 h-16 bg-[#ECECEC] dark:bg-[#333]" />}

                {/* Mobile Timeline Icon */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white text-xl">
                  {milestone.icon}
                </div>

                {/* Mobile Content */}
                <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-md">
                  <span className="text-sm font-bold text-[#007BFF]">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white mt-1">{milestone.title}</h3>
                  <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#ECECEC] dark:bg-[#333]" />

            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Company Founded",
                  description:
                    "SR Lumex was established with a vision to revolutionize architectural glass technology.",
                  icon: "🚀",
                },
                {
                  year: "2013",
                  title: "First Patent",
                  description:
                    "Secured our first patent for innovative PDLC film technology, setting the foundation for our future products.",
                  icon: "📜",
                },
                {
                  year: "2015",
                  title: "International Expansion",
                  description:
                    "Expanded operations to Europe and the Middle East, bringing our technology to new markets.",
                  icon: "🌍",
                },
                {
                  year: "2018",
                  title: "Innovation Award",
                  description:
                    "Received the prestigious Global Innovation Award for our contributions to sustainable building technology.",
                  icon: "🏆",
                },
                {
                  year: "2020",
                  title: "Smart Integration",
                  description:
                    "Launched our smart home integration system, allowing seamless control of smart glass through popular home automation platforms.",
                  icon: "🏠",
                },
                {
                  year: "2023",
                  title: "Sustainability Milestone",
                  description:
                    "Achieved carbon-neutral manufacturing processes and launched our eco-friendly product line.",
                  icon: "🌱",
                },
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="w-1/2 px-8">
                      <div
                        className={`bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-md ${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        <span className="text-sm font-bold text-[#007BFF]">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-[#121212] dark:text-white mt-1">{milestone.title}</h3>
                        <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white text-xl z-10">
                        {milestone.icon}
                      </div>
                    </div>
                    <div className="w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-[#50C878]/10 dark:bg-[#121212]/80">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#50C878] hover:bg-[#50C878]/90">Sustainability</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                Committed to a Greener Future
              </h2>
              <p className="text-muted-foreground">
                At SR Lumex, sustainability isn't just a buzzword—it's a core value that guides everything we do. Our
                smart glass solutions are designed to reduce energy consumption, minimize waste, and contribute to a
                more sustainable built environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-md">
                  <Leaf className="h-10 w-10 text-[#50C878] mb-4" />
                  <h3 className="text-lg font-bold text-[#121212] dark:text-white">Energy Efficiency</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our smart glass reduces HVAC costs by up to 30% by controlling heat and light transmission.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-md">
                  <Award className="h-10 w-10 text-[#50C878] mb-4" />
                  <h3 className="text-lg font-bold text-[#121212] dark:text-white">Eco-Friendly Materials</h3>
                  <p className="mt-2 text-muted-foreground">
                    We use sustainable materials and eco-friendly manufacturing processes to minimize environmental
                    impact.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="bg-[#50C878] hover:bg-[#50C878]/90">
                  <Link href="/sustainability">
                    Learn more about our sustainability initiatives <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#50C878]/20 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#50C878]/20 rounded-full" />
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Sustainability"
                  alt="SR Lumex Sustainability"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Video Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Our Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">The SR Lumex Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our founder share the story behind SR Lumex and our vision for the future of smart glass technology.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-[#121212]">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Brand%20Video"
                alt="SR Lumex Brand Video"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8"
                    style={{ marginLeft: "3px" }}
                  >
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-xl md:text-2xl italic text-[#121212] dark:text-white max-w-3xl mx-auto">
              "Our goal has always been to create technology that doesn't just impress, but truly improves how people
              experience their spaces."
            </blockquote>
            <p className="mt-4 font-bold">Sarah Johnson, Founder & CEO</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Join Our Journey</Badge>
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
