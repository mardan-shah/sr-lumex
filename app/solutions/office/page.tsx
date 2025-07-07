import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CTA from "@/components/CTA"
import PageWrapper from "@/components/PageWrapper"

export default function OfficePage() {
  return (
    <PageWrapper>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/office/OfficeMain.jpg"
              alt="Office Smart Glass"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Office Solutions</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                LED Film Screens for Modern Workspaces
              </h1>
              <p className="text-xl text-white/90">
                Modernize boardrooms, cabins, and partitions with sleek LED film displays for presentations, branding, or
                real-time dashboards integrated into your glass interiors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Office Projects
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
                Why Choose Smart Glass for Your Office
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover how SR Lumex smart glass technology can transform your workspace and enhance productivity.
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
                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Dynamic Presentations</h3>
                <p className="mt-2 text-muted-foreground">
                  Transform meeting spaces with vibrant LED displays, perfect for presentations and collaborative
                  sessions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>High-resolution displays for impactful presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Seamless integration with presentation software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Create engaging and interactive meeting experiences</span>
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
                  Reduce energy consumption with LED film technology, offering a sustainable and cost-effective display
                  solution.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Low power consumption compared to traditional displays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Long lifespan reduces replacement and maintenance costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                    <span>Environmentally friendly materials and manufacturing processes</span>
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
                <h3 className="text-xl font-bold text-[#121212] dark:text-white">Modern Branding</h3>
                <p className="mt-2 text-muted-foreground">
                  Enhance your corporate identity with integrated LED film displays for branding and visual communication.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Showcase your brand with dynamic logos and visuals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Create a memorable and impactful brand experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                    <span>Communicate your brand values and messaging effectively</span>
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
                Experience the dramatic difference smart glass can make in office environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/office/OfficeBefore.jpg"
                    alt="Before: Traditional Office"
                    width={800}
                    height={600}
                    className="w-full max-h-[500px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white dark:bg-[#121212] px-4 py-2 rounded-md font-bold">
                    Before
                  </div>
                </div>
                <p className="text-center font-medium text-[#121212] dark:text-white">
                  Traditional office with blinds and partitions
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/office/OfficeAfter.jpg"
                    alt="After: Smart Glass Office"
                    width={800}
                    height={600}
                    className="w-full max-h-[500px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#007BFF] px-4 py-2 rounded-md font-bold text-white">
                    After
                  </div>
                </div>
                <p className="text-center font-medium text-[#121212] dark:text-white">
                  SR Lumex smart glass - modern, flexible, and efficient
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-4">Popular Office Applications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Conference Room Displays</h4>
                        <p className="text-muted-foreground">
                          Instant privacy for meetings while maintaining an open feel when not in use.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Executive Office Branding</h4>
                        <p className="text-muted-foreground">
                          Privacy on demand for sensitive discussions and open door policy when appropriate.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Reception Area Digital Signage</h4>
                        <p className="text-muted-foreground">
                          Create flexible workspaces that can be open or private as needed.
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
                        <h4 className="font-bold text-[#121212] dark:text-white">Dashboard Displays</h4>
                        <p className="text-muted-foreground">
                          Control glare, heat, and privacy for exterior-facing windows.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Presentation Screens</h4>
                        <p className="text-muted-foreground">
                          Reduce glare and improve projection visibility with switchable glass.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        6
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Corporate Messaging Systems</h4>
                        <p className="text-muted-foreground">
                          Create a modern, impressive entrance that showcases innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Management Integration Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
                  Smart Integration
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                  Building Management Integration
                </h2>
                <p className="text-muted-foreground">
                  SR Lumex smart glass solutions integrate seamlessly with building management systems, allowing for
                  centralized control, automation, and energy optimization across your entire office space.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Centralized Control</h4>
                      <p className="text-muted-foreground">
                        Manage all smart glass installations from a single dashboard or building management system.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Automated Schedules</h4>
                      <p className="text-muted-foreground">
                        Program smart glass to change states based on time of day, occupancy, or environmental conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Energy Optimization</h4>
                      <p className="text-muted-foreground">
                        Integrate with HVAC systems to reduce energy consumption and maintain optimal comfort.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Room Booking Integration</h4>
                      <p className="text-muted-foreground">
                        Connect with room booking systems to automatically adjust privacy when meetings are scheduled.
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
                    src="/images/office/BuildingManagement.jpg"
                    alt="Building Management Integration"
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
                What Our Business Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from businesses that have transformed their workspaces with SR Lumex smart glass.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The smart glass conference rooms have completely transformed our office. We can have private meetings when needed, but maintain our open, collaborative culture when appropriate.",
                  name: "Robert Chen",
                  position: "Facilities Director, TechCorp Inc.",
                  image: "/images/avatar-male-2.svg",
                },
                {
                  quote:
                    "Our clients are always impressed by our smart glass installations. It's become a talking point during visits and showcases our commitment to innovation and sustainability.",
                  name: "Amanda Johnson",
                  position: "CEO, Design Forward Architects",
                  image: "/images/avatar-male-1.svg",
                },
                {
                  quote:
                    "The energy savings have been substantial. Our HVAC costs have decreased by 22% since installing SR Lumex smart glass on our south-facing windows.",
                  name: "David Williams",
                  position: "Sustainability Manager, Global Finance Group",
                  image: "/images/avatar-male-2.svg",
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
