'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader, Mesh } from 'three'

export default function PlanetViewer({ slug }: { slug: string }) {
  return (
    <div className="w-full h-80 md:h-[400px] bg-black rounded-lg">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <PlanetMesh slug={slug} />
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  )
}

function PlanetMesh({ slug }: { slug: string }) {
  const texture = useLoader(TextureLoader, `/planets/${slug.toLowerCase()}.png`)
  const meshRef = useRef<Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0015
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
