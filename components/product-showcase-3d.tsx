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

// A clean, reusable loader. No changes needed here.
function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-sm text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </Html>
  )
}

// The model component, now simplified and receiving interaction state.
function Model({ isInteracting }: { isInteracting: boolean }) {
  const modelRef = useRef<Group>(null!)
  const { scene } = useGLTF("/models/glasses.glb")

  // This effect now only handles the subtle vertical floating.
  // Rotation is left entirely to OrbitControls for smoothness.
  useFrame((state) => {
    if (modelRef.current && !isInteracting) {
      const time = state.clock.elapsedTime
      // Subtle floating animation.
      modelRef.current.position.y = Math.sin(time * 0.7) * 0.04
    }
  })

  // By cloning the scene, we prevent issues if the model is used elsewhere.
  return <primitive ref={modelRef} object={scene.clone()} scale={20} />
}

// Main component for the 3D showcase.
export default function ProductShowcase3D() {
  const [isInteracting, setIsInteracting] = useState(false)
  const { active } = useProgress()

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="h-[500px] w-full bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <Canvas
            shadows
            dpr={[1, 2]} // Use device pixel ratio for sharp rendering.
            camera={{ position: [0, 0, 6], fov: 40 }} // Adjusted fov for a less distorted view.
          >
            {/* Improved lighting for a more professional look */}
            <ambientLight intensity={0.7} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1.2}
              castShadow
              shadow-mapSize={2048} // Higher resolution shadow map
            />
            <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#ffffff" />

            <Suspense fallback={<Loader />}>
              {/* Removed Bounds, Model is now direct child of Suspense */}
              <Model isInteracting={isInteracting} />

              <ContactShadows
                position={[0, -0.9, 0]}
                opacity={0.5}
                scale={10}
                blur={2}
                far={1.1}
              />

              {/* Using a preset environment for realistic reflections on the glasses */}
              <Environment preset="city" />
            </Suspense>

            <OrbitControls
              // --- CORE INTERACTION ---
              // Re-enables auto-rotation only when the user is not dragging.
              autoRotate={!isInteracting}
              autoRotateSpeed={1.0} // A slightly faster, confident rotation speed.

              // --- SMOOTHNESS & FEEL ---
              enableDamping={true}
              dampingFactor={0.05}

              // --- STRICT CONSTRAINTS FOR PERFECT VIEWING ---
              // 1. Keep the object centered, no moving it around.
              enablePan={false}
              // 2. Keep a consistent distance to the model.
              enableZoom={false}
              // 3. Constrain the vertical rotation (the "slight vertical angle").
              // This is the key to limiting up-and-down movement.
              // Values are in radians. PI/2 is straight-on.
              minPolarAngle={Math.PI / 2.5} // Prevents looking too far "down" on the glasses.
              maxPolarAngle={Math.PI / 1.8} // Prevents looking too far "up" from underneath.

              // --- RELIABLE STATE HANDLING ---
              // Set interaction state reliably when user starts dragging.
              onStart={() => setIsInteracting(true)}
              // A smoother transition back to auto-rotation.
              onEnd={() => {
                // Use a brief timeout to prevent a jarring snap back to auto-rotate.
                setTimeout(() => setIsInteracting(false), 500);
              }}
            />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

// Preloading the model is a great practice for performance.
useGLTF.preload("/models/glasses.glb")