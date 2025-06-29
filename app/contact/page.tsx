import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] dark:text-white">
              Let Us Talk Glass
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your space with LED film screen technology? Get in touch with our experts for a
              personalized consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
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

      {/* Map Section */}
      <section className="py-20 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Visit Our Office</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] dark:text-white">Find Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our showroom to see LED film screen technology in action and discuss your project with our experts.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              {/* Placeholder for Google Map */}
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#007BFF] mx-auto mb-4" />
                <p className="text-lg font-medium text-[#121212] dark:text-white">Interactive Map</p>
                <p className="text-muted-foreground">Google Maps integration will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">Ready to Start?</Badge>       <h2 className="text-4xl md:text-5xl font-bold">Transform Your Space Today</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have transformed their spaces with SR Lumex LED film screen
              technology. Get your personalized quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                Schedule Site Visit
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
