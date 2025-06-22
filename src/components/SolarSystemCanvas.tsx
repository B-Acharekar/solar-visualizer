'use client'

import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import PlanetMesh from './PlanetMesh'
import { useState, useRef, useEffect } from 'react'
import { solarSystem } from '@/lib/planetConstant'
import InfoPanel from '@/components/InfoPanel'
import Controlbar from './Controlbar'

function OrbitRing({ radius }: { radius: number }) {
  const points = []
  for (let i = 0; i < 64; i++) {
    const angle = (i / 64) * Math.PI * 2
    points.push([Math.cos(angle) * radius, 0, Math.sin(angle) * radius])
  }
  points.push(points[0])

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[new Float32Array(points.flat()), 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="gray" opacity={0.3} transparent />
    </line>
  )
}

export default function SolarSystemCanvas() {
  const [timeScale, setTimeScale] = useState(1)
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'3D' | '2D'>('3D')

  // Camera ref for manually updating view
  const cameraRef = useRef<any>(null)
  const earthPosRef = useRef<[number, number, number]>([0, 0, 0])

  // Apply camera positioning based on view
  useEffect(() => {
    if (!cameraRef.current) return
    if (viewMode === '2D') {
      cameraRef.current.position.set(0, 50, 0)
      cameraRef.current.lookAt(0, 0, 0)
    } else {
      cameraRef.current.position.set(0, 20, 30)
      cameraRef.current.lookAt(0, 0, 0)
    }
  }, [viewMode])

  return (
    <div className="relative w-full h-[90vh] sm:h-[95vh] md:h-[100vh] bg-gradient-to-br from-black via-gray-900 to-black">
      <Canvas
        camera={{ position: [0, 20, 30], fov: 60 }}
        onCreated={({ camera }) => (cameraRef.current = camera)}
      >
        <Stars
          radius={300}
          depth={80}
          count={15000}
          factor={6}
          saturation={0.5}
          fade
          speed={2}
        />

        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={3} color="#ffddaa" />
        <OrbitControls enabled={viewMode === '3D'} enableDamping dampingFactor={0.1} />

        {/* Orbit Rings */}
        {solarSystem.map((body) =>
          body.distance > 0 ? (
            <OrbitRing key={`${body.name}-orbit`} radius={body.distance} />
          ) : null
        )}

        {/* Planets */}
        {solarSystem.map((body) => {
          const onClick = () => setSelectedPlanet(body.name)

          if (body.name === 'earth') {
            const moon = solarSystem.find((b) => b.name === 'moon')!

            return (
              <PlanetMesh
                key="earth"
                texturePath={body.texture}
                radius={body.radius}
                orbitRadius={body.distance}
                orbitSpeed={body.orbitSpeed}
                timeScale={timeScale}
                ring={body.ring}
                glow={false}
                onClick={() => setSelectedPlanet('earth')}
                onUpdatePosition={(pos) => (earthPosRef.current = pos)}
              >
                {/* ✅ Nested Moon */}
                <OrbitRing radius={moon.distance} />
                <PlanetMesh
                  key="moon"
                  texturePath={moon.texture}
                  radius={moon.radius}
                  orbitRadius={moon.distance}
                  orbitSpeed={moon.orbitSpeed * 3}
                  timeScale={timeScale}
                  parentPos={[0, 0, 0]} // relative to Earth
                  onClick={() => setSelectedPlanet('moon')}
                />
              </PlanetMesh>
            )
          }

          return (
            <PlanetMesh
              key={body.name}
              texturePath={body.texture}
              radius={body.radius}
              orbitRadius={body.distance}
              orbitSpeed={body.orbitSpeed}
              timeScale={timeScale}
              ring={body.ring}
              glow={body.name === 'sun'}
              onClick={onClick}
              // Only assign onUpdatePosition for Earth!
              onUpdatePosition={
                body.name === 'earth'
                  ? (pos) => (earthPosRef.current = pos)
                  : undefined
              }
            />
          )
        })}
      </Canvas>

      {/* Info Panel */}
      {selectedPlanet && (
        <InfoPanel
          planetName={selectedPlanet}
          onClose={() => setSelectedPlanet(null)}
        />
      )}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full sm:max-w-md sm:px-0">
        <Controlbar
          timeScale={timeScale}
          setTimeScale={setTimeScale}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>
    </div>
  )
}
