'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { useSafeTexture } from '@/lib/safeTextureLoader'
import { PlanetProps } from '@/types/planet'

export default function PlanetMesh({
    texturePath,
    radius,
    orbitRadius,
    orbitSpeed,
    timeScale,
    parentPos = [0, 0, 0],
    glow = false,
    onClick,
    ring,
    onUpdatePosition,
    children,
}: PlanetProps & {
    onClick?: () => void
    onUpdatePosition?: (pos: [number, number, number]) => void
    children?: React.ReactNode
}) {

    const meshRef = useRef<Mesh>(null!)
    const angle = useRef(Math.random() * Math.PI * 2)

    const { texture, loading } = useSafeTexture(texturePath)
    const { texture: ringTexture, loading: ringLoading } = useSafeTexture(ring?.texturePath || '')

    useFrame((_, delta) => {
        if (!meshRef.current) return
        angle.current += delta * orbitSpeed * timeScale

        const x = parentPos[0] + Math.cos(angle.current) * orbitRadius
        const z = parentPos[2] + Math.sin(angle.current) * orbitRadius

        meshRef.current.position.set(x, 0, z)
        meshRef.current.rotation.y += 0.001 * timeScale

        onUpdatePosition?.([x, 0, z])
    })

    if (loading || (ring?.texturePath && ringLoading)) return null

    return (
        <group ref={meshRef} onClick={onClick}>
            <mesh>
                <sphereGeometry args={[radius, 32, 32]} />
                <meshStandardMaterial
                    map={texture}
                    emissive={glow ? '#ffaa33' : '#000000'}
                    emissiveIntensity={glow ? 2 : 0.05}
                />
            </mesh>

            {ring && ringTexture && (
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ring.innerRadius, ring.outerRadius, 64]} />
                    <meshBasicMaterial
                        map={ringTexture}
                        transparent
                        opacity={ring.opacity ?? 1}
                        side={2}
                    />
                </mesh>
            )}

            {children} {/* ✅ render nested objects like Moon */}
        </group>
    )

}
