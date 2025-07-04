import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, FileText, Mail, MapPin, MessageCircle, MessageSquare, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CustomPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Custom/CustomeMain.jpg"
            alt="Custom Smart Glass Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Custom Solutions</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Bespoke Smart Glass for Unique Projects
            </h1>
            <p className="text-xl text-white/90">
              No challenge is too complex. Our team of experts will work with you to create custom smart glass solutions
              tailored to your specific requirements and vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                Discuss Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Custom Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Capabilities Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
              Capabilities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              Our Custom Smart Glass Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From unique shapes and sizes to specialized applications, our team can create bespoke smart glass
              solutions to meet your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#121212] dark:text-white">Custom Shapes & Sizes</h3>
              <p className="mt-2 text-muted-foreground">
                Our smart glass can be manufactured in virtually any shape or size to fit your architectural vision.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Curved and bent glass options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Oversized panels for statement installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Irregular shapes for unique designs</span>
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
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#121212] dark:text-white">Specialized Performance</h3>
              <p className="mt-2 text-muted-foreground">
                Enhanced smart glass with additional performance characteristics for specialized applications.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                  <span>Bulletproof and security-rated options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                  <span>Fire-rated smart glass solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                  <span>Sound-insulating smart glass</span>
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#121212] dark:text-white">Advanced Integration</h3>
              <p className="mt-2 text-muted-foreground">
                Seamless integration with existing systems and advanced control options.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Custom control systems and interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Integration with building management systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>API access for custom software integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Project Showcase Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Case Studies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">Custom Project Showcase</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most innovative custom smart glass installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Curved Atrium Enclosure",
                location: "Museum of Modern Art, New York",
                description:
                  "Custom curved smart glass panels creating a dynamic atrium space that transforms from transparent to private for special events.",
                image: "/images/Custom/Custom.jpg",
              },
              {
                title: "Interactive Retail Experience",
                location: "Flagship Luxury Store, Paris",
                description:
                  "Motion-activated smart glass display cases that reveal high-value merchandise when customers approach.",
                image: "/images/Custom/CustomeRetails.jpg",
              },
              {
                title: "Yacht Master Suite",
                location: "Custom Superyacht, Mediterranean",
                description:
                  "Marine-grade smart glass bathroom enclosure and skylights for a luxury yacht, controllable via the vessel's automation system.",
                image: "/images/Custom/CustomeYatchInterior.jpg",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-[#007BFF] mb-3">{project.location}</p>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button asChild variant="link" className="p-0 text-[#007BFF] hover:text-[#007BFF]/80">
                    <Link href={`/projects/custom/${index + 1}`}>
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild className="bg-[#007BFF] hover:bg-[#007BFF]/90">
              <Link href="/projects/custom">
                View All Custom Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Project Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#121212] dark:bg-[#ECECEC] dark:text-[#121212] hover:bg-[#121212]/90">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">
              From Concept to Completion
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures your custom smart glass project is executed flawlessly.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#ECECEC] dark:bg-[#333]" />

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description:
                    "We begin with a detailed discussion of your project requirements, vision, and technical specifications.",
                  icon: "💬",
                },
                {
                  step: "2",
                  title: "Custom Design & Engineering",
                  description:
                    "Our engineers and designers create detailed plans and specifications tailored to your unique project needs.",
                  icon: "✏️",
                },
                {
                  step: "3",
                  title: "Prototype & Testing",
                  description:
                    "For complex projects, we create and test prototypes to ensure perfect functionality before full production.",
                  icon: "🧪",
                },
                {
                  step: "4",
                  title: "Manufacturing",
                  description:
                    "Your custom smart glass is manufactured in our state-of-the-art facilities with rigorous quality control.",
                  icon: "🏭",
                },
                {
                  step: "5",
                  title: "Professional Installation",
                  description:
                    "Our expert installation team ensures your smart glass is perfectly installed and integrated with existing systems.",
                  icon: "🔧",
                },
                {
                  step: "6",
                  title: "Ongoing Support",
                  description:
                    "We provide comprehensive support, maintenance, and warranty services to ensure long-term performance.",
                  icon: "🛡️",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row md:flex-row-reverse" : "flex-row"}`}>
                    <div className="w-full md:w-1/2 px-4 md:px-8">
                      <div
                        className={`bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-md ${
                          index % 2 === 0 ? "text-left md:text-right" : "text-left"
                        }`}
                      >
                        <span className="text-sm font-bold text-[#007BFF]">Step {step.step}</span>
                        <h3 className="text-xl font-bold text-[#121212] dark:text-white mt-1">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#007BFF] dark:bg-[#007BFF] flex items-center justify-center text-white text-xl z-10">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-1/2 hidden md:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#121212] dark:text-white mb-6">Get Your Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input id="name" placeholder="Your name" required className="bg-white dark:bg-[#2A2A2A]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-white dark:bg-[#2A2A2A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="project-type" className="text-sm font-medium">
                      Project Type *
                    </label>
                    <select
                      id="project-type"
                      required
                      className="w-full rounded-md border border-input bg-white dark:bg-[#2A2A2A] px-3 py-2 text-sm"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="office">Office/Commercial</option>
                      <option value="retail">Retail/Storefront</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Location *
                    </label>
                    <Input id="location" placeholder="City, Country" required className="bg-white dark:bg-[#2A2A2A]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, space dimensions, and vision..."
                    rows={5}
                    className="bg-white dark:bg-[#2A2A2A]"
                  />
                </div>

                <Button className="w-full bg-[#007BFF] hover:bg-[#007BFF]/90">Submit Quote Request</Button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                  size="lg"
                >
                  <a
                    href="https://wa.me/1234567890?text=Hi! I'm interested in SR Lumex LED film screens."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#007BFF]/10 dark:bg-[#007BFF]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#007BFF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Phone</h4>
                      <p className="text-muted-foreground">+92 300 1234567</p>
                      <p className="text-muted-foreground">+92 21 1234567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#007BFF]/10 dark:bg-[#007BFF]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#007BFF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Email</h4>
                      <p className="text-muted-foreground">info@srlumex.com</p>
                      <p className="text-muted-foreground">sales@srlumex.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#007BFF]/10 dark:bg-[#007BFF]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#007BFF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#121212] dark:text-white">Address</h4>
                      <p className="text-muted-foreground">
                        Office 123, Innovation Hub
                        <br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-[#007BFF]/10 dark:bg-[#007BFF]/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#121212] dark:text-white mb-2">Quick Response Guarantee</h3>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 24 hours. For urgent projects, call us directly or use WhatsApp for
                  immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
