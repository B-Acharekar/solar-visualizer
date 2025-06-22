'use client'

import Link from 'next/link'
import moonData from '@/lib/moon'
import MoonViewer from '@/components/MoonViewer'
import { HiArrowLeft } from 'react-icons/hi'

// Optional helper to safely format numbers
const formatNum = (val?: number) =>
  typeof val === 'number' ? val.toLocaleString() : 'Unknown'

const formatExp = (val?: number) =>
  typeof val === 'number' ? val.toExponential(2) : 'Unknown'

export default function MoonPage() {
  const moon = Array.isArray(moonData) ? moonData[0] : moonData

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      {/* 🔙 Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm text-blue-400 hover:text-blue-300 bg-white/10 rounded-full backdrop-blur hover:bg-white/20 transition shadow-lg"
      >
        <HiArrowLeft className="w-5 h-5" />
        <span>Back to Solar System</span>
      </Link>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{moon.name || 'Moon'}</h1>
        <p className="mb-8 text-sm opacity-70">{moon.discovered || 'Unknown Discovery'}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* 🌕 3D Viewer */}
          <div className="aspect-square w-full">
            <MoonViewer />
          </div>

          {/* 📊 Moon Info */}
          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <div><strong>Type:</strong> {moon.type || 'Unknown'}</div>
            <div><strong>Diameter:</strong> {formatNum(moon.diameter_km)} km</div>
            <div><strong>Mass:</strong> {formatExp(moon.mass_kg)} kg</div>
            <div><strong>Gravity:</strong> {moon.gravity ?? 'Unknown'} m/s²</div>
            <div><strong>Orbital Speed:</strong> {moon.orbital_speed ?? 'Unknown'} km/s</div>
            <div><strong>Orbital Period:</strong> {moon.orbital_period_days ?? 'Unknown'} days</div>
            <div><strong>Distance from Earth:</strong> {formatNum(moon.distance_from_earth_km)} km</div>
            <div><strong>Atmosphere:</strong> {moon.atmosphere?.join(', ') || 'None'}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
