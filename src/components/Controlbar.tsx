'use client'

import { FiClock, FiGlobe } from "react-icons/fi"

type Props = {
  timeScale: number
  setTimeScale: (scale: number) => void
  viewMode: '2D' | '3D'
  setViewMode: (mode: '2D' | '3D') => void
}

const Controlbar = ({ timeScale, setTimeScale, viewMode, setViewMode }: Props) => {
  return (
    <div className="text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-black/30 backdrop-blur-md shadow-inner rounded-t-xl sticky bottom-0 z-10 font-mono text-xs sm:text-sm">
      
      {/* Speed Label */}
      <span className="inline-flex items-center gap-1 font-medium text-gray-300">
        <FiClock className="text-base sm:text-lg" />
        Speed:
      </span>

      {/* Speed Buttons */}
      {[
        { label: 'Slow', scale: 0.1 },
        { label: 'Normal', scale: 1 },
        { label: 'Fast', scale: 5 },
        { label: 'Time Warp', scale: 20 },
      ].map(({ label, scale }) => (
        <button
          key={label}
          onClick={() => setTimeScale(scale)}
          className={`px-3 py-1 rounded-full border border-white/10 hover:bg-white/10 transition duration-150
            ${timeScale === scale ? 'ring-2 ring-blue-400 text-blue-300' : ''}`}
        >
          {label}
        </button>
      ))}

      {/* View Label */}
      <span className="inline-flex items-center gap-1 font-medium text-gray-300">
        <FiGlobe className="text-base sm:text-lg" />
        View:
      </span>

      {/* View Buttons */}
      {(['3D', '2D'] as const).map((mode) => (
        <button
          key={mode}
          onClick={() => setViewMode(mode)}
          className={`px-3 py-1 rounded-full border border-white/10 hover:bg-white/10 transition duration-150
            ${viewMode === mode ? 'ring-2 ring-green-400 text-green-300' : ''}`}
        >
          {mode}
        </button>
      ))}
    </div>
  )
}

export default Controlbar
