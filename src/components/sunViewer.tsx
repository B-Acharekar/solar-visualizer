'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useSafeTexture } from '@/lib/safeTextureLoader'

export default function SunViewer() {
  const { texture: sunTexture, loading } = useSafeTexture('/planets/sun.png')

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Space background stars */}
      <Stars radius={300} depth={60} count={5000} factor={4} fade />

      {/* Lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2.5} />

      {/* Sun sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          map={!loading && sunTexture ? sunTexture : undefined}
          emissive="#ffaa00"
          emissiveIntensity={1}
          toneMapped={false}
        />
        <pointLight intensity={3} distance={50} decay={2.2} />
      </mesh>

      {/* Camera Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={20}
      />
    </Canvas>
  )
}
