"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, Suspense, useState, useEffect } from "react"
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei"
import type { Group } from "three"

// Loader while the model/environment is loading
function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-sm text-gray-600 dark:text-gray-300">Loading... {progress.toFixed(0)}%</p>
      </div>
    </Html>
  )
}

// Responsive model component with floating effect
function Model({ isInteracting }: { isInteracting: boolean }) {
  const modelRef = useRef<Group>(null!)
  const { scene } = useGLTF("/models/glasses.glb")
  const [scale, setScale] = useState(15)

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth
      if (width < 640) setScale(9)        // mobile
      else if (width < 768) setScale(11)  // small tablets
      else setScale(15)                   // desktop
    }

    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  useFrame((state) => {
    if (modelRef.current && !isInteracting) {
      const time = state.clock.elapsedTime
      modelRef.current.position.y = Math.sin(time * 0.7) * 0.04
    }
  })

  return <primitive ref={modelRef} object={scene.clone()} scale={scale} />
}

// Main showcase wrapper
export default function ProductShowcase3D() {
  const [isInteracting, setIsInteracting] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="h-[400px] sm:h-[500px] w-full bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 6], fov: 40 }}
          >
            <ambientLight intensity={0.7} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1.2}
              castShadow
              shadow-mapSize={2048}
            />
            <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#ffffff" />

            <Suspense fallback={<Loader />}>
              <Model isInteracting={isInteracting} />
              <ContactShadows
                position={[0, -0.9, 0]}
                opacity={0.5}
                scale={10}
                blur={2}
                far={1.1}
              />
              <Environment preset="city" />
            </Suspense>

            <OrbitControls
              autoRotate={!isInteracting}
              autoRotateSpeed={1.0}
              enableDamping
              dampingFactor={0.05}
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.8}
              onStart={() => setIsInteracting(true)}
              onEnd={() => setTimeout(() => setIsInteracting(false), 500)}
            />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

// Preload model
useGLTF.preload("/models/glasses.glb")
