import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Users, Target, CheckCircle, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for projects - in a real app, this would come from a database or API
const projectsData = {
  featured: {
    title: "SR Lumex LED Film Screen Solutions",
    category: "Technology Launch",
    location: "Pakistan & Regional Markets",
    date: "2024",
    description:
      "Introducing innovative LED film screen technology to the market with customizable, energy-efficient, and aesthetically refined solutions for modern spaces.",
    image: "/placeholder.svg?height=600&width=800&text=SR%20Lumex%20LED%20Film%20Solutions",
    projectName: "SR Lumex LED Film Screen Solutions",
    objective:
      "To introduce SR Lumex's innovative LED film screen technology, including PDLC and LED film solutions, to the market. The goal is to provide customizable, energy-efficient, and aesthetically refined LED screens for modern spaces.",
    keyFeatures: [
      "PDLC Film: Offers instant privacy and light control with a switchable opaque-to-transparent function.",
      "LED Film: Incorporates flexible LED lighting for dynamic lighting effects and enhanced visibility.",
      "Energy Efficiency: Reduces heat transfer, improving energy savings.",
      "Modern Aesthetic: Sleek, frameless design to elevate any space.",
    ],
    targetAudience: [
      "Architects & Interior Designers",
      "Business Owners & Corporates",
      "Retail Brands & Store Designers",
      "Real Estate Developers & Smart Home Builders",
      "Hospitality Industry (Hotels, Spas, Resorts)",
      "Event Planners & Exhibition Designers",
      "Educational Institutions & Museums",
    ],
    deliverables: [
      "Product Brochures & Detailed Specifications",
      "Marketing Materials (Website, social media, Email Campaigns)",
      "Demonstration of LED Film Screen Applications",
      "Customer Support & Installation Guides",
    ],
    timeline: ["Initial product launch time", "Ongoing marketing and sales efforts: Continuous"],
    successMetrics: [
      "Increased inquiries and sales for SR Lumex LED film screen solutions",
      "Positive customer feedback and testimonials",
      "Expansion into new markets or verticals",
    ],
    challenges: [
      {
        challenge: "High Initial Cost",
        solution:
          "Introduce flexible pricing plans and financing options to make LED film screens more accessible across industries. Emphasize the long-term value, such as reduced printing/display costs, energy efficiency, and enhanced brand perception to justify the investment.",
      },
      {
        challenge: "Limited Consumer Awareness",
        solution:
          "Educate the market through engaging content like demo videos, blogs, client case studies, and behind the scenes installations that showcase the real-world benefits of LED film.",
      },
      {
        challenge: "Integration with Existing Infrastructure",
        solution:
          "Provide expert consultation and customized installation services to ensure integration of LED film screens into existing structures. Offer compatibility with various smart home systems and automation features.",
      },
      {
        challenge: "Perceived Complexity in Use",
        solution:
          "Develop user-friendly interfaces and mobile apps for easy control of LED film screen features. Provide clear installation and operation manuals, along with customer support.",
      },
    ],
    testimonials: [
      "We've installed SR Lumex LED film screens in our new office spaces, and the transformation is remarkable. The ability to instantly control privacy and light has been a game-changer, and we've already noticed significant energy savings.",
      "SR Lumex's LED film screens gave our commercial property a sleek, modern aesthetic while helping us cut down on energy costs. It's the perfect balance of functionality and style for our needs.",
      "The SR Lumex team made the entire process smooth. From the initial consultation to the installation, everything went smoothly. The smart glass gives our building a futuristic vibe, and we've already seen notable improvements in both comfort and energy efficiency.",
    ],
  },
  "1": {
    title: "Modern Residential Retreat",
    category: "Residential",
    location: "Malibu, California",
    date: "2023",
    description:
      "Smart glass installation for a luxury beachfront home, providing privacy and UV protection while maintaining ocean views.",
    image: "/placeholder.svg?height=600&width=800&text=Residential%20Project",
    projectName: "SR Lumex LED Film Screen Solutions",
    objective:
      "To introduce SR Lumex's innovative LED film screen technology, including PDLC and LED film solutions, to the market. The goal is to provide customizable, energy-efficient, and aesthetically refined LED screens for modern spaces.",
    keyFeatures: [
      "PDLC Film: Offers instant privacy and light control with a switchable opaque-to-transparent function.",
      "LED Film: Incorporates flexible LED lighting for dynamic lighting effects and enhanced visibility.",
      "Energy Efficiency: Reduces heat transfer, improving energy savings.",
      "Modern Aesthetic: Sleek, frameless design to elevate any space.",
    ],
    targetAudience: [
      "Architects & Interior Designers",
      "Business Owners & Corporates",
      "Retail Brands & Store Designers",
      "Real Estate Developers & Smart Home Builders",
      "Hospitality Industry (Hotels, Spas, Resorts)",
      "Event Planners & Exhibition Designers",
      "Educational Institutions & Museums",
    ],
    deliverables: [
      "Product Brochures & Detailed Specifications",
      "Marketing Materials (Website, social media, Email Campaigns)",
      "Demonstration of LED Film Screen Applications",
      "Customer Support & Installation Guides",
    ],
    timeline: ["Initial product launch time", "Ongoing marketing and sales efforts: Continuous"],
    successMetrics: [
      "Increased inquiries and sales for SR Lumex LED film screen solutions",
      "Positive customer feedback and testimonials",
      "Expansion into new markets or verticals",
    ],
    challenges: [
      {
        challenge: "High Initial Cost",
        solution:
          "Introduce flexible pricing plans and financing options to make LED film screens more accessible across industries. Emphasize the long-term value, such as reduced printing/display costs, energy efficiency, and enhanced brand perception to justify the investment.",
      },
      {
        challenge: "Limited Consumer Awareness",
        solution:
          "Educate the market through engaging content like demo videos, blogs, client case studies, and behind the scenes installations that showcase the real-world benefits of LED film.",
      },
      {
        challenge: "Integration with Existing Infrastructure",
        solution:
          "Provide expert consultation and customized installation services to ensure integration of LED film screens into existing structures. Offer compatibility with various smart home systems and automation features.",
      },
      {
        challenge: "Perceived Complexity in Use",
        solution:
          "Develop user-friendly interfaces and mobile apps for easy control of LED film screen features. Provide clear installation and operation manuals, along with customer support.",
      },
    ],
    testimonials: [
      "We've installed SR Lumex LED film screens in our new office spaces, and the transformation is remarkable. The ability to instantly control privacy and light has been a game-changer, and we've already noticed significant energy savings.",
      "SR Lumex's LED film screens gave our commercial property a sleek, modern aesthetic while helping us cut down on energy costs. It's the perfect balance of functionality and style for our needs.",
      "The SR Lumex team made the entire process smooth. From the initial consultation to the installation, everything went smoothly. The smart glass gives our building a futuristic vibe, and we've already seen notable improvements in both comfort and energy efficiency.",
    ],
  },
  "2": {
    title: "Tech Headquarters",
    category: "Office",
    location: "San Francisco, California",
    date: "2023",
    description:
      "Complete smart glass solution for a tech company's headquarters, featuring conference rooms, executive offices, and exterior windows.",
    image: "/placeholder.svg?height=600&width=800&text=Office%20Project",
    projectName: "SR Lumex LED Film Screen Solutions",
    objective:
      "To introduce SR Lumex's innovative LED film screen technology, including PDLC and LED film solutions, to the market. The goal is to provide customizable, energy-efficient, and aesthetically refined LED screens for modern spaces.",
    keyFeatures: [
      "PDLC Film: Offers instant privacy and light control with a switchable opaque-to-transparent function.",
      "LED Film: Incorporates flexible LED lighting for dynamic lighting effects and enhanced visibility.",
      "Energy Efficiency: Reduces heat transfer, improving energy savings.",
      "Modern Aesthetic: Sleek, frameless design to elevate any space.",
    ],
    targetAudience: [
      "Architects & Interior Designers",
      "Business Owners & Corporates",
      "Retail Brands & Store Designers",
      "Real Estate Developers & Smart Home Builders",
      "Hospitality Industry (Hotels, Spas, Resorts)",
      "Event Planners & Exhibition Designers",
      "Educational Institutions & Museums",
    ],
    deliverables: [
      "Product Brochures & Detailed Specifications",
      "Marketing Materials (Website, social media, Email Campaigns)",
      "Demonstration of LED Film Screen Applications",
      "Customer Support & Installation Guides",
    ],
    timeline: ["Initial product launch time", "Ongoing marketing and sales efforts: Continuous"],
    successMetrics: [
      "Increased inquiries and sales for SR Lumex LED film screen solutions",
      "Positive customer feedback and testimonials",
      "Expansion into new markets or verticals",
    ],
    challenges: [
      {
        challenge: "High Initial Cost",
        solution:
          "Introduce flexible pricing plans and financing options to make LED film screens more accessible across industries. Emphasize the long-term value, such as reduced printing/display costs, energy efficiency, and enhanced brand perception to justify the investment.",
      },
      {
        challenge: "Limited Consumer Awareness",
        solution:
          "Educate the market through engaging content like demo videos, blogs, client case studies, and behind the scenes installations that showcase the real-world benefits of LED film.",
      },
      {
        challenge: "Integration with Existing Infrastructure",
        solution:
          "Provide expert consultation and customized installation services to ensure integration of LED film screens into existing structures. Offer compatibility with various smart home systems and automation features.",
      },
      {
        challenge: "Perceived Complexity in Use",
        solution:
          "Develop user-friendly interfaces and mobile apps for easy control of LED film screen features. Provide clear installation and operation manuals, along with customer support.",
      },
    ],
    testimonials: [
      "We've installed SR Lumex LED film screens in our new office spaces, and the transformation is remarkable. The ability to instantly control privacy and light has been a game-changer, and we've already noticed significant energy savings.",
      "SR Lumex's LED film screens gave our commercial property a sleek, modern aesthetic while helping us cut down on energy costs. It's the perfect balance of functionality and style for our needs.",
      "The SR Lumex team made the entire process smooth. From the initial consultation to the installation, everything went smoothly. The smart glass gives our building a futuristic vibe, and we've already seen notable improvements in both comfort and energy efficiency.",
    ],
  },
  // Add more projects as needed...
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col pt-16">
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#007BFF]" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#007BFF]" />
                  <span className="text-sm">{project.date}</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Brief Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90 mb-4">Project Brief</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white mb-6">
                {project.projectName}
              </h2>
            </div>

            <div className="space-y-12">
              {/* Objective */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-6 w-6 text-[#007BFF]" />
                  <h3 className="text-2xl font-bold text-[#121212] dark:text-white">Objective</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.objective}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, index) => (
                    <Card key={index} className="border-l-4 border-l-[#007BFF]">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#007BFF] mt-1 flex-shrink-0" />
                          <p className="text-sm">{feature}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-[#007BFF]" />
              <h3 className="text-2xl font-bold text-[#121212] dark:text-white">Target Audience</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.targetAudience.map((audience, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <p className="font-medium">{audience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Deliverables */}
              <div>
                <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-6">Deliverables</h3>
                <div className="space-y-3">
                  {project.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#007BFF] mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{deliverable}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline & Success Metrics */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-6">Timeline</h3>
                  <div className="space-y-3">
                    {project.timeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-[#007BFF] mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-6">Success Metrics</h3>
                  <div className="space-y-3">
                    {project.successMetrics.map((metric, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-[#007BFF] mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-12 text-center">
              Challenges & Solutions
            </h3>

            <div className="space-y-8">
              {project.challenges.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-4">
                          Challenge: {item.challenge}
                        </h4>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-4">Solution:</h4>
                        <p className="text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#121212] dark:text-white mb-12 text-center">Client Testimonials</h3>

            <div className="grid md:grid-cols-1 gap-8">
              {project.testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-[#007BFF] mb-4" />
                    <p className="text-muted-foreground italic leading-relaxed mb-4">"{testimonial}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#007BFF] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">C{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium">Client {index + 1}</p>
                        <p className="text-sm text-muted-foreground">SR Lumex Customer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Start Your Project</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Space?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Contact our team to discuss how SR Lumex LED film screens can revolutionize your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
