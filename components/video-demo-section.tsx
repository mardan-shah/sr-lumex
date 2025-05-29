import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function VideoDemoSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#121212]">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">See It In Action</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">Watch the Transformation</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Witness how SR Lumex transforms ordinary glass into extraordinary digital displays in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-[#50C878]/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30">
                <Play className="mr-2 h-6 w-6" />
                Watch Demo
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-80">LED Film Transformation Demo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
