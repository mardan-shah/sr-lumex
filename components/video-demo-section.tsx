'use client'
import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import ReactPlayer from 'react-player'

export default function VideoDemoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  const toggleMute = () => setIsMuted(prev => !prev);
  const togglePlay = () => setIsPlaying(prev => !prev);

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Show controls when paused, otherwise based on hover
  const controlsVisible = showControls || !isPlaying;

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
            className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <ReactPlayer
              ref={playerRef}
              src="/videos/demo.mp4"
              playing={isPlaying}
              loop
              muted={isMuted}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-[#50C878]/20 pointer-events-none" />
            
            {/* --- Overlays --- */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                controlsVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Center Play/Pause Button */}
              {!isPlaying && (
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                  onClick={togglePlay}
                >
                  <Play className="mr-2 h-6 w-6" />
                  Play Demo
                </Button>
              )}
            </div>
            
            {/* --- Bottom Bar --- */}
            <div 
              className={`absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent ${
                controlsVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-4">
                 <button onClick={togglePlay} className="text-white">
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </button>
                <p className="text-sm text-white opacity-80 hidden sm:block">
                  LED Film Transformation Demo
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="bg-white/30 hover:bg-white/50 rounded-full p-2 flex items-center justify-center transition-colors"
                >
                  {isMuted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
                </button>
                
                <button
                  onClick={toggleFullscreen}
                  className="bg-white/30 hover:bg-white/50 rounded-full p-2 flex items-center justify-center transition-colors"
                >
                  {isFullscreen ? <Minimize className="h-5 w-5 text-white" /> : <Maximize className="h-5 w-5 text-white" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}