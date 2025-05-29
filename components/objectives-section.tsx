import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Sun, Zap, Lightbulb, Award, Leaf } from "lucide-react"

const objectives = [
  {
    icon: TrendingUp,
    title: "Elevate Brand Presence",
    description:
      "Create a visual identity of the brand that captures attention, strengthens brand recognition, and sets your business apart.",
  },
  {
    icon: Users,
    title: "Boost Engagement & Foot Traffic",
    description:
      "Attract and retain customers through captivating visuals that inspire curiosity and invite interaction.",
  },
  {
    icon: Sun,
    title: "Preserve Natural Light & Openness",
    description:
      "Maintain an open-space ambiance with high-transparency displays that allow natural light to flow freely, creating a welcoming environment.",
  },
  {
    icon: Zap,
    title: "Ensure Energy Efficiency & Low Maintenance",
    description:
      "Benefit from long-term energy savings and minimal upkeep with our cost-effective, reliable display technology.",
  },
  {
    icon: Lightbulb,
    title: "Inspire with Futuristic Innovation",
    description: "Align your brand with cutting-edge tech that reflects forward-thinking values and a modern outlook.",
  },
  {
    icon: Award,
    title: "Position You as a Market Leader",
    description: "Strengthen your reputation as a trendsetter and innovator within your industry and local community.",
  },
  {
    icon: Leaf,
    title: "Support Sustainable Growth",
    description:
      "Embrace an eco-conscious approach with smart solutions that align with your commitment to sustainability.",
  },
]

export default function ObjectivesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-8 md:space-y-12">
        <div className="text-center space-y-4 px-4">
          <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90 text-white">Our Mission</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] dark:text-white">Our Objectives</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our goal is to provide an innovative display solution that exceeds aesthetics. The purpose of our technology
            is to:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 md:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#007BFF]/30 dark:hover:border-[#007BFF]/50"
              >
                <div className="mb-3 md:mb-4">
                  <Icon className="h-8 w-8 md:h-10 md:w-10 text-[#007BFF]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-[#121212] dark:text-white">{objective.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
