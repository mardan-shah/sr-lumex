import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CTA from "@/components/CTA"
import PageWrapper from "@/components/PageWrapper"

export default function HospitalityPage() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Hospitality/HospitalityMain.jpg"
              alt="Hospitality Smart Glass"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Hospitality Solutions</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                LED Film Screens for Luxury Hospitality
              </h1>
              <p className="text-xl text-white/90">
                Enhance guest experiences with immersive LED visuals in lobbies, spas, and rooms. Perfect for digital
                ambiance, wayfinding, or branded messaging.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Hospitality Projects
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
                Why Choose Smart Glass for Your Hospitality Space
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how SR Lumex smart glass technology can transform your hospitality environment and enhance guest
                experiences.
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
                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Guest Experience Enhancement</h3>
                <p className="mt-2 text-muted-foreground">
                  Elevate guest experiences with dynamic digital displays that captivate and inform.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Immersive visuals in lobbies and rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Dynamic content that adapts to guest preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Create a memorable and modern ambiance</span>
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
                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Branding & Ambiance</h3>
                <p className="mt-2 text-muted-foreground">
                  Enhance your brand identity and create captivating ambiances with customizable LED film screens.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Showcase your brand with dynamic logos and visuals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Create immersive environments in spas and lobbies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Adapt the ambiance to different times of day or events</span>
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
                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Information & Wayfinding</h3>
                <p className="mt-2 text-muted-foreground">
                  Provide guests with clear and engaging information through dynamic digital displays.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Interactive wayfinding systems for easy navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Digital menu boards for restaurants and bars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Event schedules and promotional content</span>
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
                Experience the dramatic difference smart glass can make in hospitality environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/Hospitality/HospitalityBefore.jpg"
                    alt="Before: Traditional Hotel"
                    width={800}
                    height={600}
                    className="w-full max-h-[500px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white dark:bg-[#121212] px-4 py-2 rounded-md font-bold">
                    Before
                  </div>
                </div>
                <p className="text-center font-medium text-[#121212] dark:text-white">
                  Traditional hotel bathroom with curtains or frosted glass
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/Hospitality/HospitalityAfter.jpg"
                    alt="After: Smart Glass Hotel"
                    width={800}
                    height={600}
                    className="w-full max-h-[500px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#007BFF] px-4 py-2 rounded-md font-bold text-white">
                    After
                  </div>
                </div>
                <p className="text-center font-medium text-[#121212] dark:text-white">
                  SR Lumex smart glass - elegant, modern, and functional
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-4">
                  Popular Hospitality Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Lobby Digital Displays</h4>
                        <p className="text-muted-foreground">
                          Create a stunning first impression with dynamic digital art and information.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Spa Ambiance Screens</h4>
                        <p className="text-muted-foreground">
                          Transform spa environments with calming visuals and customizable lighting.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Room Entertainment Systems</h4>
                        <p className="text-muted-foreground">
                          Provide guests with immersive entertainment experiences in their rooms.
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
                        <h4 className="font-bold text-[#121212] dark:text-white">Wayfinding Displays</h4>
                        <p className="text-muted-foreground">
                          Help guests navigate your property with interactive digital wayfinding.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Restaurant Menu Boards</h4>
                        <p className="text-muted-foreground">
                          Showcase your menu with dynamic digital displays in your restaurant or bar.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        6
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Event Space Branding</h4>
                        <p className="text-muted-foreground">
                          Create branded experiences in your event spaces with customizable LED film screens.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guest Experience Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
                  Enhanced Guest Experience
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                  Elevate the Guest Journey
                </h2>
                <p className="text-muted-foreground">
                  SR Lumex smart glass solutions create memorable experiences that delight guests and differentiate your
                  property. From the moment guests enter their room to the spa experience and dining areas, smart glass
                  adds a touch of luxury and innovation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Seamless Technology Integration</h4>
                      <p className="text-muted-foreground">
                        Integrate with room control systems for a cohesive guest experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Customizable Ambiance</h4>
                      <p className="text-muted-foreground">
                        Allow guests to personalize their space with privacy and light control.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Memorable Design Element</h4>
                      <p className="text-muted-foreground">
                        Create Instagram-worthy spaces that guests will share and remember.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Hygienic Surfaces</h4>
                      <p className="text-muted-foreground">
                        Easy-to-clean glass surfaces that support your hygiene protocols.
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
                    src="/images/Hospitality/HospitalityElevate.jpg"
                    alt="Luxury Guest Experience"
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
                What Our Hospitality Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from hospitality professionals who have transformed their properties with SR Lumex smart glass.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The smart glass bathroom enclosures have been a highlight for our guests. They love the modern technology, and our housekeeping team appreciates how easy they are to clean compared to shower curtains.",
                  name: "Elena Rodriguez",
                  position: "Operations Manager, Grand Plaza Hotel",
                  image: "/images/avatar-female-1.svg",
                },
                {
                  quote:
                    "Our spa renovation featuring SR Lumex smart glass has transformed the guest experience. We can now create private treatment areas that still feel open and connected to the natural surroundings.",
                  name: "Thomas Chen",
                  position: "Spa Director, Oceanview Resort & Spa",
                  image: "/images/avatar-male-1.svg",
                },
                {
                  quote:
                    "The energy savings have been substantial, especially in our south-facing suites. Guests appreciate being able to control the light and heat with the touch of a button.",
                  name: "Sarah Johnson",
                  position: "Sustainability Manager, Eco Luxury Hotels",
                  image: "/images/avatar-female-2.svg",
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
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <CTA />
      </div>
    </PageWrapper>
  )
}
