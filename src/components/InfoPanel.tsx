'use client'

import planetData from '@/lib/planetData'
import sunData from '@/lib/sun'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'

interface Props {
  planetName: string // Earth, Mars, Sun, etc.
  onClose: () => void
}

export default function InfoPanel({ planetName, onClose }: Props) {
  const [body, setBody] = useState<any>(null)

  useEffect(() => {
    const allBodies = [...planetData, sunData]
    const match = allBodies.find(obj => obj.name.toLowerCase() === planetName.toLowerCase())
    setBody(match || null)
  }, [planetName])

  if (!body) return null

  return (
    <div className="absolute top-6 right-6 w-[300px] md:w-[400px] max-h-[90vh] overflow-y-auto z-30 bg-black/80 backdrop-blur-lg rounded-xl p-5 text-white shadow-2xl">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">{body.name}</h2>
        <button onClick={onClose} className="text-xl hover:text-red-400 transition">
          <IoClose />
        </button>
      </div>

      <ul className="space-y-2 text-sm leading-relaxed text-white/90">
        <li><span className="font-semibold text-white">Type:</span> {body.type}</li>
        <li><span className="font-semibold text-white">Diameter:</span> {body.diameter_km.toLocaleString()} km</li>
        <li><span className="font-semibold text-white">Mass:</span> {body.mass_kg.toExponential(2)} kg</li>
        <li><span className="font-semibold text-white">Gravity:</span> {body.gravity} m/s²</li>

        {/* Only show orbital info if not the Sun */}
        {'orbital_speed' in body && (
          <>
            <li><span className="font-semibold text-white">Orbital Speed:</span> {body.orbital_speed} km/s</li>
            <li><span className="font-semibold text-white">Orbital Period:</span> {body.orbital_period_days} days</li>
            <li><span className="font-semibold text-white">Distance from Sun:</span> {body.distance_from_sun_km.toLocaleString()} km</li>
          </>
        )}

        <li><span className="font-semibold text-white">Moons:</span> {body.moons}</li>
        <li><span className="font-semibold text-white">Atmosphere:</span> {body.atmosphere?.join(', ') || 'N/A'}</li>
        <li><span className="font-semibold text-white">Discovered:</span> {body.discovered}</li>
      </ul>

      <div className="mt-4">
        <Link
          href={
            body.slug === 'moon'
              ? '/moon'
              : body.slug === 'sun'
                ? '/sun'
                : `/${body.slug}`
          }
          className="inline-block text-blue-400 hover:text-blue-300 underline transition"
        >
          View {body.name} in full 3D →
        </Link>
      </div>
    </div>
  )
}
