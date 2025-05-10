import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TechnologyPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Technology</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white">
              The Science Behind Smart Glass
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover how our revolutionary technology transforms ordinary glass into intelligent, adaptable surfaces
              that enhance privacy transforms ordinary glass into intelligent, adaptable surfaces that enhance privacy,
              comfort, and energy efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* What is Smart Glass Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
                Smart Glass Explained
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">What is Smart Glass?</h2>
              <p className="text-muted-foreground">
                Smart glass, also known as switchable glass or dynamic glass, is a technological innovation that allows
                glass to change its properties—such as transparency, opacity, or tint—in response to external stimuli
                like electrical current, light, or heat.
              </p>
              <p className="text-muted-foreground">
                At SR Lumex, our smart glass utilizes Polymer Dispersed Liquid Crystal (PDLC) technology, which enables
                instant switching between transparent and opaque states with the application of an electrical current.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                  <Link href="#pdlc-explained">
                    Learn how PDLC works <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#007BFF]/10 rounded-full dark:bg-[#007BFF]/20" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#50C878]/10 rounded-full dark:bg-[#50C878]/20" />
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Smart%20Glass%20Concept"
                  alt="Smart Glass Concept"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDLC/LED Film Explained Section */}
      <section id="pdlc-explained" className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Technology Deep Dive</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              PDLC & LED Film Technology
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the innovative technology that powers our smart glass solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-4">How PDLC Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Liquid Crystal Layer</h4>
                        <p className="text-muted-foreground">
                          A layer of liquid crystal molecules is sandwiched between two transparent conductive films.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Default State: Opaque</h4>
                        <p className="text-muted-foreground">
                          In their natural state, the liquid crystal molecules are randomly oriented, scattering light
                          and creating an opaque appearance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Applied Voltage: Transparent</h4>
                        <p className="text-muted-foreground">
                          When an electrical current is applied, the molecules align, allowing light to pass through and
                          making the glass transparent.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121212] dark:text-white">Instant Switching</h4>
                        <p className="text-muted-foreground">
                          The transition between states occurs in milliseconds, providing immediate privacy or
                          transparency as needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=PDLC%20Animation"
                  alt="PDLC Technology Animation"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    aria-label="Play animation"
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
          </div>

          <div className="mt-20">
            <div className="text-center space-y-4 mb-12">
              <h3 className="text-2xl font-bold text-[#121212] dark:text-white">LED Film Technology</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our advanced LED film technology combines the privacy benefits of PDLC with dynamic lighting
                capabilities.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#121212] dark:text-white">Dynamic Lighting</h4>
                <p className="mt-2 text-muted-foreground">
                  Integrated LED elements provide customizable lighting options, from subtle ambient glow to vibrant
                  displays.
                </p>
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
                <h4 className="text-xl font-bold text-[#121212] dark:text-white">Color Control</h4>
                <p className="mt-2 text-muted-foreground">
                  Full RGB color spectrum allows for precise color temperature adjustment and mood setting capabilities.
                </p>
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#121212] dark:text-white">Smart Integration</h4>
                <p className="mt-2 text-muted-foreground">
                  Seamlessly connects with home and building automation systems for synchronized control and
                  programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Demo Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">See It In Action</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
                Smart Glass Transformation
              </h2>
              <p className="text-muted-foreground">
                Watch our smart glass transition from transparent to opaque in real-time. This demonstration showcases
                the instant switching capability and the seamless transformation that can be controlled with a simple
                switch, app, or integrated building system.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#007BFF]" />
                  <p className="font-medium">Instant switching (less than 100ms)</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#007BFF]" />
                  <p className="font-medium">No mechanical parts - completely silent operation</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#007BFF]" />
                  <p className="font-medium">Low power consumption (only uses electricity when changing states)</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Smart%20Glass%20Demo"
                  alt="Smart Glass Demo"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    aria-label="Play demo"
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
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
              Technical Details
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">Technical Specifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed specifications of our smart glass technology for architects, designers, and engineers.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-6">Physical Properties</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Glass Thickness</span>
                    <span className="text-muted-foreground">6mm - 19mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Maximum Size</span>
                    <span className="text-muted-foreground">2000mm × 3500mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Visible Light Transmission (On)</span>
                    <span className="text-muted-foreground">75-80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Visible Light Transmission (Off)</span>
                    <span className="text-muted-foreground">3-5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">UV Blocking</span>
                    <span className="text-muted-foreground">99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sound Insulation</span>
                    <span className="text-muted-foreground">35-40dB</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-6">Electrical Properties</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Operating Voltage</span>
                    <span className="text-muted-foreground">65V AC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Power Consumption</span>
                    <span className="text-muted-foreground">5W/m² (only when switching)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Switching Time</span>
                    <span className="text-muted-foreground">&lt;100ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Control Methods</span>
                    <span className="text-muted-foreground">Switch, Remote, App, BMS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lifespan</span>
                    <span className="text-muted-foreground">&gt;10 million cycles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Warranty</span>
                    <span className="text-muted-foreground">5 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-[#007BFF] hover:bg-[#007BFF]/90">
              <Link href="#">
                <Download className="mr-2 h-4 w-4" /> Download Full Specifications (PDF)
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Common Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about our smart glass technology.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white">
                  How much power does smart glass consume?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SR Lumex smart glass is extremely energy efficient. It only consumes power (approximately 5W/m²)
                  during the switching process, which takes less than 100ms. When maintaining either the transparent or
                  opaque state, it requires no power at all, making it an energy-efficient solution for both residential
                  and commercial applications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white">
                  What happens if there's a power outage?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  In the event of a power outage, SR Lumex smart glass defaults to its opaque state, ensuring privacy is
                  maintained. For applications where transparency during power loss is preferred, we offer backup power
                  solutions or alternative configurations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white">
                  Can smart glass be installed in existing windows?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer retrofit solutions that can be applied to existing glass surfaces. Our PDLC film can be
                  laminated onto existing windows or installed as an adhesive layer. However, for optimal performance
                  and durability, we recommend our factory-produced smart glass units for new installations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white">
                  How durable is smart glass?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SR Lumex smart glass is highly durable and designed to last. The PDLC film is protected within
                  laminated glass, making it resistant to scratches and damage. Our smart glass has been tested to
                  withstand over 10 million switching cycles without degradation in performance. We offer a 5-year
                  warranty on all our products.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white">
                  Can smart glass be used in extreme temperatures?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, our smart glass is designed to operate in a wide temperature range from -20°C to +70°C (-4°F to
                  +158°F). For extreme environments, we offer specialized solutions with enhanced thermal properties to
                  ensure consistent performance regardless of external conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white">
                  How is smart glass controlled?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SR Lumex smart glass can be controlled through multiple interfaces: traditional wall switches, remote
                  controls, mobile applications, voice commands (when integrated with smart home systems), and building
                  management systems. Our solutions are compatible with major smart home platforms like Google Home,
                  Amazon Alexa, and Apple HomeKit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Get Started</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Experience Smart Glass?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transform your space with SR Lumex smart glass technology. Contact our team to discuss your project
              requirements and discover the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
