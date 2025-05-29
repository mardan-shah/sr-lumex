import {
  Shield,
  Sun,
  Settings,
  ShieldCheck,
  Cpu,
  Leaf,
  Building,
  Home,
  ShoppingBag,
  Hotel,
  Lightbulb,
  Gem,
} from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  const getIcon = (): JSX.Element => {
    const iconProps = {
      className: "h-8 w-8 md:h-10 md:w-10",
      style: { color: color },
    }

    switch (icon) {
      case "shield":
        return <Shield {...iconProps} />
      case "sun":
        return <Sun {...iconProps} />
      case "settings":
        return <Settings {...iconProps} />
      case "shield-check":
        return <ShieldCheck {...iconProps} />
      case "cpu":
        return <Cpu {...iconProps} />
      case "leaf":
        return <Leaf {...iconProps} />
      case "building":
        return <Building {...iconProps} />
      case "home":
        return <Home {...iconProps} />
      case "shopping-bag":
        return <ShoppingBag {...iconProps} />
      case "hotel":
        return <Hotel {...iconProps} />
      case "lightbulb":
        return <Lightbulb {...iconProps} />
      case "diamond":
        return <Gem {...iconProps} />
      default:
        return <Shield {...iconProps} />
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 md:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#007BFF]/30 dark:hover:border-[#007BFF]/50">
      <div className="mb-3 md:mb-4">{getIcon()}</div>
      <h3 className="text-lg md:text-xl font-bold mb-2 text-[#121212] dark:text-white">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>

      <div className="absolute -bottom-1 -right-1 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-transparent to-gray-100/30 dark:to-gray-700/30 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
