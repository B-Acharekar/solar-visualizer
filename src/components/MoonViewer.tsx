'use client'

import { Canvas } from '@react-three/fiber'
import { useSafeTexture } from '@/lib/safeTextureLoader'
import { OrbitControls } from '@react-three/drei'

export default function MoonViewer() {
  const { texture, loading } = useSafeTexture('/planets/moon.png')

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {!loading && (
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            map={texture}
            emissive="#444"
            emissiveIntensity={0.1}
          />
        </mesh>
      )}

      <OrbitControls enablePan={false} />
    </Canvas>
  )
}
