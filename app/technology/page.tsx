import Image from "next/image"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TechnologyPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">Technology</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white">
              LED Film Technology Explained
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover how our revolutionary LED film technology transforms ordinary glass into dynamic digital
              displays, delivering immersive visuals while maintaining transparency and modern appeal.
            </p>
          </div>
        </div>
      </section>

      {/* LED Film Explained Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90 text-white dark:hover:bg-[#ECECEC]/90">
                LED Film Explained
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">What is LED Film?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                LED film is a cutting-edge display technology that transforms any transparent glass surface into a
                high-resolution digital screen. Unlike privacy-focused smart glass like PDLC, LED film is designed for
                visual communication, branding, and interactive content - all while maintaining the transparency of the
                glass when not in use.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#121212] dark:text-white">It offers:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#121212] dark:text-white">Dynamic Visuals:</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Showcase videos, animations, or real-time information.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#121212] dark:text-white">Space Efficiency:</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Applied directly on glass without bulky screens.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#121212] dark:text-white">Energy Savings:</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Low power consumption and reduced need for printed signage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#007BFF] mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#121212] dark:text-white">Modern Aesthetic:</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Smooth, frameless integration into architecture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-[#007BFF]">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  LED film is not about switching from clear to private. It's about turning glass into a smart, visual
                  storytelling surface.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#007BFF]/10 rounded-full dark:bg-[#007BFF]/20" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#50C878]/10 rounded-full dark:bg-[#50C878]/20" />
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=LED%20Film%20Technology"
                  alt="LED Film Technology"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Demo Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">See It In Action</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              LED Film Transformation Demo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch how our LED film transforms glass into an immersive screen in seconds.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=1000&text=LED%20Film%20Demo%20Video"
                alt="LED Film Demo Video"
                width={1000}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Button
                  size="lg"
                  className="rounded-full w-20 h-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50"
                  aria-label="Play demo video"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">Common Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              FAQs – LED Film Screens (SR Lumex)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get answers to the most common questions about our LED film technology.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white hover:text-[#007BFF] dark:hover:text-[#007BFF]">
                  Power Consumption
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Energy-efficient with low power usage, especially compared to traditional display technologies. Our
                  LED film consumes significantly less power while delivering superior visual performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white hover:text-[#007BFF] dark:hover:text-[#007BFF]">
                  Durability
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Highly durable and resistant to dust, moisture, and daily wear. Ideal for both indoor and semi-outdoor
                  applications with a long operational lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white hover:text-[#007BFF] dark:hover:text-[#007BFF]">
                  Heat & UV Management
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Helps block UV rays and reduce glare, contributing to a cooler, more comfortable environment while
                  protecting your interiors from harmful radiation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white hover:text-[#007BFF] dark:hover:text-[#007BFF]">
                  Temperature Resistance
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Performs well across various climates with proper installation and care. Our LED film is designed to
                  withstand temperature variations while maintaining optimal performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white hover:text-[#007BFF] dark:hover:text-[#007BFF]">
                  Maintenance
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Minimal upkeep requires only occasional cleaning with a soft cloth and non-abrasive cleaner. No
                  complex maintenance procedures or frequent servicing needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="text-lg font-medium text-[#121212] dark:text-white hover:text-[#007BFF] dark:hover:text-[#007BFF]">
                  Visibility
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Crystal-clear when inactive and instantly turns into a vibrant display when powered on, without
                  blocking natural light. Perfect transparency when not displaying content.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">Get Started</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Experience LED Film Technology?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transform your space with SR Lumex LED film technology. Contact our team to discuss your project
              requirements and discover the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">
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
