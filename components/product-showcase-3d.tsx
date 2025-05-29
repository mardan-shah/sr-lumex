"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Box } from "@react-three/drei"
import type * as THREE from "three"

function FloatingBox() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Box ref={meshRef} args={[2, 3, 0.1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#007BFF" transparent opacity={0.8} roughness={0.1} metalness={0.8} />
    </Box>
  )
}

export default function ProductShowcase3D() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <div className="h-[500px] w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg">
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingBox />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
