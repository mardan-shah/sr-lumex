import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Define the BlogPost interface
interface BlogPost {
  title: string;
  subtitle?: string; // Optional property
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
  relatedPosts: string[];
}

// Type the blogPosts object
const blogPosts: Record<string, BlogPost> = {
  "smart-office-trends-pakistan": {
    title: "Smart Office Trends in Pakistan: Embracing the Future of Work",
    subtitle: '',
    date: "May 15, 2025",
    author: "Ahmed Khan",
    category: "Office",
    image: "/placeholder.svg?height=800&width=1200&text=Smart%20Office%20Trends",
    content: `
      <p>As Pakistan's digital landscape evolves, the concept of smart offices is gaining traction, transforming traditional workplaces into dynamic, efficient, and employee-centric environments. With the rise of technologies like IoT, AI, and automation, businesses are reimagining their office spaces to foster productivity and sustainability.</p>
      
      <h2>1. Emphasis on Energy Efficiency</h2>
      <p>Energy management is a critical aspect of smart offices. By utilizing smart lighting systems and HVAC controls, offices can significantly reduce energy consumption. These systems adjust settings based on occupancy and natural light availability, leading to cost savings and a reduced carbon footprint.</p>
      
      <p>Smart glass installations are becoming increasingly popular in Pakistani office buildings, as they provide dynamic control over natural light and heat. During peak summer months, these windows can automatically tint to reduce solar heat gain, decreasing the load on air conditioning systems.</p>
      
      <h2>2. Flexible and Adaptive Workspaces</h2>
      <p>The shift towards hybrid work models has prompted the need for adaptable office spaces. Smart offices in Pakistan are incorporating modular furniture and movable partitions, allowing for quick reconfiguration of spaces to suit various team sizes and functions. This flexibility supports collaboration and accommodates changing business needs.</p>
      
      <p>LED film screens on glass partitions enable spaces to transform from private to collaborative with the touch of a button. Meeting rooms can display digital content when needed and return to transparent or frosted states when privacy is required.</p>
      
      <h2>3. Enhanced Security Measures</h2>
      <p>Security is paramount in smart office setups. Advanced access control systems, surveillance cameras, and biometric authentication are being implemented to safeguard assets and ensure employee safety. These measures not only protect physical assets but also help in monitoring and managing office occupancy levels.</p>
      
      <p>Smart glass technology contributes to security by allowing instant privacy for sensitive meetings or areas, without the need for permanent walls or barriers.</p>
      
      <h2>4. Data-Driven Decision Making</h2>
      <p>Smart offices leverage data analytics to optimize operations. By collecting data on space utilization, energy consumption, and employee preferences, businesses can make informed decisions to enhance efficiency and employee satisfaction. This data-driven approach enables continuous improvement and innovation in workplace management.</p>
      
      <p>The integration of smart glass with building management systems provides valuable data on light levels, temperature variations, and space usage patterns, contributing to more intelligent facility management.</p>
      
      <h2>The Future of Pakistani Workplaces</h2>
      <p>As Pakistan continues its digital transformation journey, smart offices will become the norm rather than the exception. Businesses that embrace these technologies early will gain competitive advantages through improved operational efficiency, enhanced employee experiences, and reduced environmental impact.</p>
      
      <p>SR Lumex is at the forefront of this transformation, providing innovative LED film screen solutions that seamlessly integrate with smart office ecosystems. By turning ordinary glass surfaces into dynamic digital displays, SR Lumex is helping Pakistani businesses create more functional, flexible, and future-ready workspaces.</p>
    `,
    relatedPosts: [
      "smart-office-trends-privacy-collaboration",
      "energy-savings-smart-glass-hvac",
      "curtains-vs-smart-glass-showdown",
    ],
  },
  "curtains-vs-led-smart-film": {
    title: "Curtains vs LED Smart Film – The Showdown",
    subtitle: "Who Wins in the Age of Smart Spaces?",
    date: "May 10, 2025",
    author: "Fatima Zaidi",
    category: "Comparison",
    image: "/placeholder.svg?height=800&width=1200&text=Curtains%20vs%20Smart%20Film",
    content: `
      <p>As modern architecture embraces minimalism, automation, and efficiency, traditional window treatments like curtains are gradually being replaced. One groundbreaking alternative gaining popularity in both residential and commercial spaces is PDLC-based LED Smart Film. This switchable film instantly transforms glass from clear to frosted at the touch of a button, offering a sleek, high-tech solution. But how does it compare to traditional curtains? Let's break it down:</p>
      
      <h2>1. Privacy On Demand</h2>
      <p>Curtains provide visual privacy but often leave gaps and require physical effort to open or close. Movement from wind or air can disrupt their coverage.</p>
      <p>LED Smart Film delivers instant privacy at the touch of a switch. Whether for meeting rooms or bathrooms, the film turns opaque electronically, ensuring full, consistent privacy without physical interference.</p>
      
      <h2>2. Modern Aesthetic</h2>
      <p>Curtains can complement interiors but may look bulky or outdated in sleek, modern settings.</p>
      <p>Smart Film offers a smooth, frameless appearance that blends perfectly with glass architecture. It is invisible when off and elegant when in use.</p>
      
      <h2>3. Smart Light Control</h2>
      <p>Curtains can only block or allow light, with no in-between. Their functionality depends on the fabric and positioning.</p>
      <p>Smart Film lets natural light filter in when clear and provides glare reduction and UV blocking when frosted.</p>
      
      <h2>4. Energy Performance</h2>
      <p>Curtains, especially blackout versions, offer passive insulation but lack dynamic temperature regulation.</p>
      <p>Smart Film reduces solar heat gain and helps regulate indoor temperature, contributing to HVAC efficiency and reducing energy bills.</p>
      
      <h2>5. Cleaning & Maintenance</h2>
      <p>Curtains collect dust and allergens, require frequent cleaning, and fade over time.</p>
      <p>Smart Film is maintenance-friendly, no fabric, no dust. Just a quick wipe with a cloth keeps it spotless.</p>
      
      <h2>6. Smart Integration</h2>
      <p>Curtains can be automated but typically involve additional installations and separate controls.</p>
      <p>Smart Film integrates directly with smart home and office systems, controlled via remote, app, or voice command.</p>
      
      <h2>The Verdict</h2>
      <p>Curtains may have history, but LED Film is the future. From privacy and energy savings to sleek design and automation, it outperforms curtains in every category. Whether you are designing a smart home, a corporate office, or a retail store, SR Lumex Film offers a powerful, modern solution that fits right in.</p>
      
      <p>As Pakistan's architecture and interior design sectors continue to evolve, the adoption of smart glass technologies like LED film is expected to accelerate, particularly in premium residential developments, corporate offices, and high-end retail spaces.</p>
    `,
    relatedPosts: [
      "surprising-uses-smart-glass-homes",
      "energy-savings-smart-glass-hvac",
      "science-behind-pdlc-technology",
    ],
  },
  "surprising-uses-smart-glass-homes": {
    title: "5 Surprising Uses for Smart Glass in Modern Homes",
    date: "April 25, 2025",
    author: "Michael Chen",
    category: "Residential",
    image: "/placeholder.svg?height=800&width=1200&text=Smart%20Home%20Applications",
    content: `
      <p>Discover innovative applications for smart glass beyond windows and doors that can transform your living space.</p>
      
      <h2>1. Digital Art Displays</h2>
      <p>Transform ordinary glass partitions into dynamic digital art galleries. LED film screens allow homeowners to display rotating collections of digital art or family photos, turning everyday spaces into personalized galleries that can change with your mood or the season.</p>
      
      <h2>2. Smart Bathroom Mirrors</h2>
      <p>Bathroom mirrors with integrated LED film can switch between a standard mirror and an information display showing weather, calendar appointments, or news while you prepare for your day. When not in use as a display, it functions as a normal mirror.</p>
      
      <h2>3. Interactive Kitchen Backsplashes</h2>
      <p>Kitchen backsplashes with LED film technology can display recipes, cooking videos, or digital timers while you cook. When not in use, they revert to decorative glass that complements your kitchen design.</p>
      
      <h2>4. Privacy Dividers for Open Floor Plans</h2>
      <p>In homes with open floor plans, smart glass room dividers provide flexibility without sacrificing natural light. Switch from transparent to opaque when privacy is needed, without permanently closing off spaces.</p>
      
      <h2>5. Mood-Setting Skylights</h2>
      <p>Skylights with smart glass technology can adjust transparency based on time of day or weather conditions, or even display subtle color effects for evening ambiance. This creates dynamic lighting conditions that enhance your home's atmosphere.</p>
    `,
    relatedPosts: [
      "curtains-vs-led-smart-film",
      "energy-savings-smart-glass-hvac",
      "smart-office-trends-privacy-collaboration",
    ],
  },
  "smart-office-trends-privacy-collaboration": {
    title: "Smart Office Trends: Privacy and Collaboration in Balance",
    date: "April 18, 2025",
    author: "Elena Rodriguez",
    category: "Office",
    image: "/placeholder.svg?height=800&width=1200&text=Smart%20Office%20Balance",
    content: `<p>How businesses are using smart glass to create flexible workspaces that support both collaborative and focused work.</p>`,
    relatedPosts: ["smart-office-trends-pakistan", "energy-savings-smart-glass-hvac", "curtains-vs-led-smart-film"],
  },
  "curtains-vs-smart-glass-showdown": {
    title: "Curtains vs. Smart Glass: The Ultimate Showdown",
    date: "April 10, 2025",
    author: "David Kim",
    category: "Comparison",
    image: "/placeholder.svg?height=800&width=1200&text=Comparison",
    content: `<p>A comprehensive comparison of traditional window treatments and smart glass solutions for modern homes and offices.</p>`,
    relatedPosts: [
      "curtains-vs-led-smart-film",
      "surprising-uses-smart-glass-homes",
      "energy-savings-smart-glass-hvac",
    ],
  },
  "energy-savings-smart-glass-hvac": {
    title: "Energy Savings: How Smart Glass Reduces HVAC Costs",
    date: "April 3, 2025",
    author: "Sarah Johnson",
    category: "Sustainability",
    image: "/placeholder.svg?height=800&width=1200&text=Energy%20Savings",
    content: `<p>A detailed analysis of the energy efficiency benefits of smart glass installations in commercial buildings.</p>`,
    relatedPosts: ["smart-office-trends-pakistan", "curtains-vs-led-smart-film", "science-behind-pdlc-technology"],
  },
  "science-behind-pdlc-technology": {
    title: "The Science Behind PDLC Technology",
    date: "March 27, 2025",
    author: "Dr. Robert Chen",
    category: "Technology",
    image: "/placeholder.svg?height=800&width=1200&text=PDLC%20Technology",
    content: `<p>An in-depth look at how Polymer Dispersed Liquid Crystal technology enables the magic of switchable smart glass.</p>`,
    relatedPosts: [
      "curtains-vs-led-smart-film",
      "energy-savings-smart-glass-hvac",
      "smart-glass-healthcare-privacy-infection-control",
    ],
  },
  "smart-glass-healthcare-privacy-infection-control": {
    title: "Smart Glass in Healthcare: Privacy and Infection Control",
    date: "March 20, 2025",
    author: "Dr. Amanda Johnson",
    category: "Healthcare",
    image: "/placeholder.svg?height=800&width=1200&text=Healthcare",
    content: `<p>How healthcare facilities are utilizing smart glass to enhance patient privacy and improve infection control measures.</p>`,
    relatedPosts: [
      "science-behind-pdlc-technology",
      "energy-savings-smart-glass-hvac",
      "smart-office-trends-privacy-collaboration",
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center pt-16">
        <div className="container text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button asChild className="bg-[#007BFF] hover:bg-[#007BFF]/90">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-[#007BFF] hover:text-[#007BFF]/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90 mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] dark:text-white mb-4">
              {post.title}
            </h1>
            {/* Safely handle optional subtitle */}
            {post.subtitle && (
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">{post.subtitle}</p>
            )}
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6 my-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="font-medium text-[#121212] dark:text-white flex items-center">
                  <Share2 className="mr-2 h-5 w-5" /> Share this article
                </span>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5 text-[#1877F2]" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#ECECEC] dark:bg-[#121212]/80">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#121212] dark:text-white mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {post.relatedPosts.map((relatedSlug, index) => {
                const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts]
                if (!relatedPost) return null

                return (
                  <div key={index} className="bg-white dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow-md">
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">{relatedPost.category}</Badge>
                        <span className="text-sm text-muted-foreground">{relatedPost.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#121212] dark:text-white mb-2">{relatedPost.title}</h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-muted-foreground">By {relatedPost.author}</span>
                        <Button asChild variant="link" className="p-0 text-[#007BFF] hover:text-[#007BFF]/80">
                          <Link href={`/blog/${relatedSlug}`}>
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild className="bg-[#007BFF] hover:bg-[#007BFF]/90">
                <Link href="/blog">
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}