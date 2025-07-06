"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "alimardan.shaa@gmail.com",
        subject: "SR Lumex: New Quote Request",
        text: `New quote request from ${form.name} (${form.email})\n\nProject Type: ${form.projectType}\nLocation: ${form.location}\n\nMessage:\n${form.message}`,
      }),
    })

    if (res.ok) {
      alert("Quote request sent successfully!")
      setForm({ name: "", email: "", projectType: "", location: "", message: "" })
    } else {
      alert("Failed to send quote request.")
    }
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#121212] dark:text-white mb-6">Get Your Quote</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-white dark:bg-[#2A2A2A]"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="bg-white dark:bg-[#2A2A2A]"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium">Project Type *</label>
                  <select
                    id="projectType"
                    required
                    className="w-full rounded-md border border-input bg-white dark:bg-[#2A2A2A] px-3 py-2 text-sm"
                    value={form.projectType}
                    onChange={handleChange}
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
                  <label htmlFor="location" className="text-sm font-medium">Location *</label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    required
                    className="bg-white dark:bg-[#2A2A2A]"
                    value={form.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project requirements, space dimensions, and vision..."
                  rows={5}
                  className="bg-white dark:bg-[#2A2A2A]"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-[#007BFF] hover:bg-[#007BFF]/90">
                Submit Quote Request
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                asChild
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                size="lg"
              >
                <a
                  href="https://wa.me/+923001234567?text=Hi! I'm interested in SR Lumex LED film screens."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
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

            <div className="bg-[#007BFF]/10 dark:bg-[#007BFF]/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#121212] dark:text-white mb-2">Quick Response Guarantee</h3>
              <p className="text-muted-foreground">
                We respond to all inquiries within 24 hours. For urgent projects, call us directly or use WhatsApp for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
