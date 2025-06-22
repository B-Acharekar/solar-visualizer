import PlanetViewer from '@/components/PlanetViewer'
import { getBodyData } from '@/lib/nasa'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import { Metadata } from 'next'

type PageProps = {
  params: {
    body: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `${params.body} | Solar System Explorer`,
  }
}

export default async function dataPage({ params }: { params: { body: string } }) {
  const data = await getBodyData(params.body)

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
        <h1 className="text-4xl font-bold mb-2">{data.englishName}</h1>
        <p className="text-sm opacity-70 mb-10 capitalize">Type: {data.bodyType}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <div><strong>Mass:</strong> {data.mass?.massValue} ×10<sup>{data.mass?.massExponent}</sup> kg</div>
            <div><strong>Gravity:</strong> {data.gravity} m/s²</div>
            <div><strong>Density:</strong> {data.density} g/cm³</div>
            <div><strong>Mean Radius:</strong> {data.meanRadius} km</div>
            <div><strong>Sideral Orbit:</strong> {data.sideralOrbit} days</div>
            <div><strong>Sideral Rotation:</strong> {data.sideralRotation} hours</div>
            <div><strong>Equatorial Radius:</strong> {data.equaRadius} km</div>
            <div><strong>Flattening:</strong> {data.flattening}</div>
            <div><strong>Discovered By:</strong> {data.discoveredBy || 'Unknown'}</div>
            <div><strong>Discovery Date:</strong> {data.discoveryDate || 'Unknown'}</div>
            <div><strong>Moons:</strong> {data.moons?.length ?? 0}</div>
          </div>

          {/* 3D Canvas */}
          <PlanetViewer slug={data.englishName.toLowerCase()} />
        </div>
      </div>
    </main>
  )
}
