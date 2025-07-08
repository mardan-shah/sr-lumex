import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CTA from "@/components/CTA"
import PageWrapper from "@/components/PageWrapper"

export default function RetailPage() {
  return (

      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Retail/RetailsMain.jpg"
              alt="Retail Smart Glass"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Retail Solutions</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                LED Film Screens for Innovative Retail
              </h1>
              <p className="text-xl text-white/90">
                Turn storefront glass into eye-catching digital signage: ideal for showcasing promotions, product videos,
                and brand storytelling without blocking visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Retail Projects
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
                Why Choose Smart Glass for Your Retail Space
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how SR Lumex smart glass technology can transform your retail environment and enhance customer
                experience.
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Dynamic Displays</h3>
                <p className="mt-2 text-muted-foreground">
                  Create attention-grabbing window displays that can switch between transparent and opaque to reveal
                  products or multimedia content.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Reveal products on demand with switchable transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Project content onto opaque glass for dynamic messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Create scheduled reveal sequences for new products</span>
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
                  Reduce energy costs and create a more comfortable shopping environment with intelligent light and heat
                  management.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Lower HVAC costs by controlling solar heat gain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Reduce lighting costs with natural light control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Protect merchandise from UV damage</span>
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
                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Brand Experience</h3>
                <p className="mt-2 text-muted-foreground">
                  Create a premium, high-tech shopping experience that differentiates your brand and drives customer
                  engagement.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Create memorable, shareable in-store experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Showcase innovation and forward-thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Adapt spaces quickly for events or promotions</span>
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
                Experience the dramatic difference smart glass can make in retail environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/Retail/RetailBefore.jpg"
                    alt="Before: Traditional Retail"
                    width={800}
                    height={600}
                    className="w-full max-h-[500px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white dark:bg-[#121212] px-4 py-2 rounded-md font-bold">
                    Before
                  </div>
                </div>
                <p className="text-center font-medium text-[#121212] dark:text-white">
                  Traditional retail display with static windows and fixed lighting
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/Retail/RetailAfter.jpg"
                    alt="After: Smart Glass Retail"
                    width={800}
                    height={600}
                    className="w-full max-h-[500px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#007BFF] px-4 py-2 rounded-md font-bold text-white">
                    After
                  </div>
                </div>
                <p className="text-center font-medium text-[#121212] dark:text-white">
                  SR Lumex smart glass - dynamic, interactive, and attention-grabbing
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-4">Popular Retail Applications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Storefront digital signage</h4>
                        <p className="text-muted-foreground">
                          Dynamic displays that can switch between transparent and projection surfaces.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Product showcase displays</h4>
                        <p className="text-muted-foreground">
                          Reveal high-value merchandise on demand with switchable transparency.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Interactive customer experiences</h4>
                        <p className="text-muted-foreground">
                          Privacy on demand for fitting rooms with a modern aesthetic.
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
                        <h4 className="font-bold text-[#121212] dark:text-white">Promotional video walls</h4>
                        <p className="text-muted-foreground">
                          Combine smart glass with projection for interactive customer experiences.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Brand storytelling screens</h4>
                        <p className="text-muted-foreground">
                          Create flexible, adaptable spaces for temporary retail installations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        6
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Window advertising displays</h4>
                        <p className="text-muted-foreground">
                          Create private shopping experiences that can be revealed when needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Retail Experience Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
                  Interactive Experiences
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                  Create Memorable Shopping Moments
                </h2>
                <p className="text-muted-foreground">
                  SR Lumex smart glass solutions enable innovative, interactive retail experiences that engage customers
                  and drive sales. From motion-activated product reveals to immersive brand storytelling, our technology
                  helps create memorable moments that differentiate your brand.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Motion-Activated Displays</h4>
                      <p className="text-muted-foreground">
                        Reveal products or content when customers approach your display.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Projection Mapping</h4>
                      <p className="text-muted-foreground">
                        Use opaque smart glass as a projection surface for dynamic content.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Timed Reveal Sequences</h4>
                      <p className="text-muted-foreground">
                        Create choreographed product reveals for window displays and launches.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Touch-Interactive Surfaces</h4>
                      <p className="text-muted-foreground">
                        Combine smart glass with touch technology for interactive shopping experiences.
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
                    src="/images/Retail/RetailsLast.jpg"
                    alt="Interactive Retail Experience"
                    width={800}
                    height={600}
                    className="w-full max-h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Client Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                What Our Retail Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from retailers who have transformed their spaces with SR Lumex smart glass.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The smart glass storefront has completely transformed our window displays. We can now create dynamic reveals that stop people in their tracks, and we've seen a significant increase in foot traffic.",
                  name: "Jennifer Lee",
                  position: "Visual Merchandising Director, Luxury Boutique",
                  image: "/images/avatar-female-1.svg",
                },
                {
                  quote:
                    "Our customers are fascinated by our smart glass display cases. The ability to switch from transparent to opaque creates a sense of exclusivity and intrigue around our premium products.",
                  name: "Michael Chen",
                  position: "Store Design Manager, Tech Retailer",
                  image: "/images/avatar-female-2.svg",
                },
                {
                  quote:
                    "The energy savings have been substantial, especially in our south-facing stores. The smart glass has reduced our cooling costs while protecting our merchandise from UV damage.",
                  name: "Sarah Johnson",
                  position: "Sustainability Director, Fashion Retail Group",
                  image: "/images/avatar-female-1.svg",
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
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <CTA />
      </div>
  )
}
