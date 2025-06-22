'use client'

import Link from 'next/link'
import sunData from '@/lib/sun'
import SunViewer from '@/components/sunViewer'
import { HiArrowLeft } from 'react-icons/hi'

export default function SunPage() {
  // Since sunData is an array, get the first (and only) object
  const sun = Array.isArray(sunData) ? sunData[0] : sunData

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm text-blue-400 hover:text-blue-300 bg-white/10 rounded-full backdrop-blur hover:bg-white/20 transition shadow-lg"
      >
        <HiArrowLeft className="w-5 h-5" />
        <span>Back to Solar System</span>
      </Link>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{sun.name}</h1>
        <p className="mb-8 text-sm opacity-70">{sun.discovered}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* 3D Sun Viewer */}
          <div className="aspect-square w-full">
            <SunViewer />
          </div>

          {/* Info Panel */}
          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <div><strong>Type:</strong> {sun.type}</div>
            <div><strong>Diameter:</strong> {sun.diameter_km.toLocaleString()} km</div>
            <div><strong>Mass:</strong> {sun.mass_kg.toExponential(2)} kg</div>
            <div><strong>Gravity:</strong> {sun.gravity} m/s²</div>
            <div><strong>Orbital Speed:</strong> {sun.orbital_speed} km/s</div>
            <div><strong>Orbital Period:</strong> {sun.orbital_period_days} days</div>
            <div><strong>Distance from Sun:</strong> {sun.distance_from_sun_km.toLocaleString()} km</div>
            <div><strong>Moons:</strong> {sun.moons}</div>
            <div><strong>Atmosphere:</strong> {sun.atmosphere?.join(', ') || 'N/A'}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
