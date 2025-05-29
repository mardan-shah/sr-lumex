import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ResidentialPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Residential%20LED%20Film"
            alt="Residential Smart Glass"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Residential Solutions</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">LED Film Screens for Modern Homes</h1>
            <p className="text-xl text-white/90">
              Transform your living spaces with sleek digital glass for ambient visuals, home automation displays, or
              artistic projections on windows and partitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                Request a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Residential Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              Why Choose Smart Glass for Your Home
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how SR Lumex smart glass technology can transform your living spaces and enhance your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-[#007BFF]/10 dark:bg-[#007BFF]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#007BFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#121212] dark:text-white">Dynamic Home Displays</h3>
              <p className="mt-2 text-muted-foreground">
                Transform windows and glass partitions into digital canvases for ambient visuals, digital art, or smart
                home displays.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Create immersive ambient experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Display digital art and personalized content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Integrate with smart home systems for dynamic displays</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-[#50C878]/10 dark:bg-[#50C878]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#50C878]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#121212] dark:text-white">Energy Efficiency</h3>
              <p className="mt-2 text-muted-foreground">
                Reduce energy consumption with low-power LED technology and customizable brightness settings for optimal
                performance.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                  <span>Low power consumption for sustainable displays</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                  <span>Adjustable brightness to minimize energy usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                  <span>Long lifespan for reduced replacement costs</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-[#007BFF]/10 dark:bg-[#007BFF]/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#007BFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#121212] dark:text-white">Seamless Integration</h3>
              <p className="mt-2 text-muted-foreground">
                Integrate LED film seamlessly into your home design, creating stunning visual effects without
                compromising aesthetics.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Discreet and transparent when not in use</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Customizable sizes and shapes for any application</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Easy to install and control with smart home systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Before & After</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">See the Transformation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the dramatic difference smart glass can make in residential spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Before:%20Traditional%20Glass"
                  alt="Before: Traditional Glass"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute top-4 left-4 bg-white dark:bg-[#121212] px-4 py-2 rounded-md font-bold">
                  Before
                </div>
              </div>
              <p className="text-center font-medium text-[#121212] dark:text-white">
                Traditional glass with curtains or blinds
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=After:%20Smart%20Glass"
                  alt="After: Smart Glass"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute top-4 left-4 bg-[#007BFF] px-4 py-2 rounded-md font-bold text-white">
                  After
                </div>
              </div>
              <p className="text-center font-medium text-[#121212] dark:text-white">
                SR Lumex smart glass - clean, modern, and functional
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-4">
                Popular Residential Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Living Room Ambient Displays</h4>
                      <p className="text-muted-foreground">
                        Create immersive visual experiences with dynamic ambient displays.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Digital Art Installations</h4>
                      <p className="text-muted-foreground">
                        Showcase digital art and personalized content on glass surfaces.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Smart Home Control Interfaces</h4>
                      <p className="text-muted-foreground">
                        Integrate smart home controls directly into your glass surfaces.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Kitchen Information Displays</h4>
                      <p className="text-muted-foreground">
                        Display recipes, news, and other information on kitchen glass.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Bedroom Mood Lighting</h4>
                      <p className="text-muted-foreground">Create relaxing and immersive mood lighting in bedrooms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                      6
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Home Theater Enhancements</h4>
                      <p className="text-muted-foreground">Enhance your home theater with dynamic visual effects.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Integration Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
                Smart Integration
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                Seamless Smart Home Integration
              </h2>
              <p className="text-muted-foreground">
                SR Lumex smart glass solutions integrate effortlessly with popular smart home systems, allowing you to
                control privacy, light, and energy efficiency from your smartphone, voice assistant, or automated
                schedules.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#121212] dark:text-white">Voice Control</h4>
                    <p className="text-muted-foreground">
                      Compatible with Amazon Alexa, Google Assistant, and Apple HomeKit for hands-free operation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#121212] dark:text-white">Mobile App Control</h4>
                    <p className="text-muted-foreground">
                      Manage your smart glass from anywhere using our intuitive mobile application.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#121212] dark:text-white">Automated Schedules</h4>
                    <p className="text-muted-foreground">
                      Set your smart glass to change states based on time of day, sunrise/sunset, or occupancy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#121212] dark:text-white">Scene Integration</h4>
                    <p className="text-muted-foreground">
                      Include smart glass in your home scenes for movie nights, morning routines, or entertaining.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#007BFF]/10 rounded-full dark:bg-[#007BFF]/20" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#50C878]/10 rounded-full dark:bg-[#50C878]/20" />
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Smart%20Home%20Integration"
                  alt="Smart Home Integration"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Customer Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">What Homeowners Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from homeowners who have transformed their living spaces with SR Lumex smart glass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The LED film in our living room has transformed the space. We can display beautiful ambient visuals and even use it as a dynamic backdrop for movie nights.",
                name: "Jennifer & David",
                location: "Modern Home Renovation, California",
                image: "/placeholder.svg?height=100&width=100&text=J&D",
              },
              {
                quote:
                  "We use the LED film in our kitchen to display recipes and control our smart home devices. It's a game-changer for convenience and aesthetics.",
                name: "Michael T.",
                location: "Home Office Upgrade, New York",
                image: "/placeholder.svg?height=100&width=100&text=MT",
              },
              {
                quote:
                  "The digital art installations we created with SR Lumex LED film are stunning. They add a unique and modern touch to our home.",
                name: "Sarah & James",
                location: "Energy-Efficient Home, Texas",
                image: "/placeholder.svg?height=100&width=100&text=S&J",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#121212] dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Get Started</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Home?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience the future of residential glass with SR Lumex. Schedule a consultation with our experts to
              discover the perfect smart glass solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Residential Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
