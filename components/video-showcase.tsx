"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const videos = [
    {
      title: "Privacy Glass in Action",
      description: "Watch how our smart glass transitions from transparent to opaque in milliseconds.",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Privacy%20Glass%20Demo",
    },
    {
      title: "Smart Glass Installation",
      description: "See how easy it is to install SR Lumex smart glass in any environment.",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Installation%20Demo",
    },
    {
      title: "Office Transformation",
      description: "Transform meeting rooms from open to private with a single tap.",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Office%20Demo",
    },
  ]

  return (
    <section className="py-24 bg-white dark:bg-[#121212]">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] dark:text-white">See It In Action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the transformative power of SR Lumex smart glass technology through our demonstration videos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setActiveVideo(index)}
            >
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                width={600}
                height={400}
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <Play className="h-10 w-10 text-white" fill="white" />
                </div>
              </div>
              <div className="p-5 bg-white dark:bg-[#1E1E1E]">
                <h3 className="text-xl font-bold mb-2 text-[#121212] dark:text-white">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setActiveVideo(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="aspect-video bg-black">
                <Image
                  src={videos[activeVideo].thumbnail || "/placeholder.svg"}
                  alt={videos[activeVideo].title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-20 w-20 text-white opacity-50" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
