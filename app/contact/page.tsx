
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import CTA from "@/components/CTA"
import Contact from "@/components/Contact"

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

        {/* Contact Form & Info */}
        <Contact /> 

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
              <div className="h-96 bg-gray-200 dark:bg-gray-800">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps?q=Office+123,+Innovation+Hub,+Karachi,+Pakistan&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </div>
  )
}
