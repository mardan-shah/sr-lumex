'use client'
import { useRef, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Volume2, VolumeX } from "lucide-react"

export default function VideoDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.loop = true
      video.play().catch(() => {})
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const toggleFullscreen = () => {
    const el = containerRef.current
    if (!el) return

    if (!document.fullscreenElement) {
      el.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <section className="py-24 bg-white dark:bg-[#121212]">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-[#007BFF] hover:bg-[#007BFF]/90">See It In Action</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">
            Watch the Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Witness how SR Lumex transforms ordinary glass into extraordinary digital displays in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 group cursor-pointer"
            onClick={toggleFullscreen}
          >
            <video
              ref={videoRef}
              className="absolute inset-0 object-cover w-full h-full"
              src="/videos/demo.mp4"
              playsInline
              loop
              muted={isMuted}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-[#50C878]/20" />

            <div className={`absolute inset-0 flex items-center justify-center ${isFullscreen ? "hidden" : ""}`}>
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 pointer-events-none"
              >
                <Play className="mr-2 h-6 w-6" />
                Watch Demo
              </Button>
            </div>

            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-80">LED Film Transformation Demo</p>
            </div>

            {/* Mute toggle button in fullscreen */}
            {isFullscreen && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
                className="absolute bottom-4 right-4 bg-white/30 hover:bg-white/50 rounded-full p-2 flex items-center justify-center"
              >
                {isMuted ? (
                  <VolumeX className="h-6 w-6 text-black" />
                ) : (
                  <Volume2 className="h-6 w-6 text-black" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
