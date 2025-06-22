// @/types/planet.ts
export interface PlanetProps {
  texturePath: string
  radius: number
  orbitRadius: number
  orbitSpeed: number
  timeScale: number
  parentPos?: [number, number, number]
  glow?: boolean
  onClick?: () => void
  ring?: {
    innerRadius: number
    outerRadius: number
    texturePath: string
    opacity?: number
  }
}
