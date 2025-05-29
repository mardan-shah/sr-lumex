import { Badge } from "@/components/ui/badge"

const features = [
  { feature: "Transparency", description: "Up to 95% when turned off" },
  { feature: "Brightness", description: "Up to 5000 nits; clear even in daylight" },
  { feature: "Thickness", description: "As thin as 1mm" },
  { feature: "Custom Sizes", description: "Pixel pitch from P4 to P30; various shapes and sizes" },
  { feature: "Energy Use", description: "Low power consumption" },
  { feature: "Control System", description: "NovaStar TB2-compatible; supports multi-zone content" },
  { feature: "Installation", description: "Stick-on film for direct glass application" },
  { feature: "Lifespan", description: "50,000+ hours" },
  { feature: "Software", description: "Works with VI Plex Express and Handy" },
  { feature: "Viewing Angle", description: "160° wide angle" },
  { feature: "Material", description: "PET-based micro-LED; flexible and durable" },
  { feature: "Maintenance", description: "Front access for quick replacement" },
  { feature: "Weather Resistance", description: "Heat, UV, and humidity resistant" },
  { feature: "Eco-Friendly", description: "Recyclable film; minimal plastic; lower carbon impact" },
]

export default function ProductFeatures() {
  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-8 md:space-y-12">
        <div className="text-center space-y-4 px-4">
          <Badge className="bg-[#121212] dark:bg-white hover:bg-[#121212]/90 dark:hover:bg-white/90 text-white dark:text-black">
            Technical Specifications
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212] dark:text-white">
            Product Features
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the advanced specifications that make SR Lumex LED film screens the perfect choice for your
            project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 md:p-6 border-b border-gray-200 dark:border-gray-600 ${
                    index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/50" : "bg-white dark:bg-gray-900/50"
                  } ${index < features.length - 2 ? "md:border-r md:border-gray-200 md:dark:border-gray-600" : ""}`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-[#121212] dark:text-white mb-2 text-sm md:text-base">
                      {item.feature}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
