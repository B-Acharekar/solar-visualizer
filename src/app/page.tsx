import SolarSystemCanvas from '@/components/SolarSystemCanvas'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-900">
        <Sidebar />
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1">
        <SolarSystemCanvas />
      </div>
    </div>
  )
}
