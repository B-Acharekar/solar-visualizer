'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const bodies = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Moon']

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Toggle bar for mobile & tablet */}
      <div className="lg:hidden fixed top-0 left-0 w-full p-4 bg-slate-900 text-white z-30 flex items-center justify-between shadow-md">
        <h2 className="text-xl font-bold">Solora</h2>
        <button
          onClick={() => setOpen(true)}
          className="text-2xl focus:outline-none"
          aria-label="Open sidebar"
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900 to-black text-white p-6 shadow-2xl z-40
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:static lg:translate-x-0 lg:block
        `}
      >
        {/* Close icon for mobile view */}
        <div className="lg:hidden flex justify-end mb-4">
          <button
            onClick={() => setOpen(false)}
            className="text-2xl focus:outline-none"
            aria-label="Close sidebar"
          >
            <FiX />
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">🌌 Celestial Bodies</h2>
        <ul className="space-y-3">
          {bodies.map((body) => (
            <li key={body}>
              <Link
                href={`/${body.toLowerCase()}`}
                className="block px-4 py-2 rounded-lg hover:bg-white/10 hover:text-blue-300 transition"
                onClick={() => setOpen(false)} // Close after clicking a link (on mobile)
              >
                {body}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Backdrop for mobile when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
