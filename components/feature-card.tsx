import { Shield, Sun, Settings, ShieldCheck, Cpu, Leaf, Building, Home, ShoppingBag, Hotel } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  const getIcon = (): JSX.Element => {
    const iconProps = { className: "h-10 w-10", style: { color } }

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
      default:
        return <Shield {...iconProps} />
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E] p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#007BFF]/30">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-bold mb-2 text-[#121212] dark:text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>

      <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-br from-transparent to-[#ECECEC]/30 dark:to-[#333]/30 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
