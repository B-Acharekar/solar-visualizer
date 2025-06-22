const sunData = {
  name: 'Sun',
  slug: 'sun',
  type: 'Star',
  diameter_km: 1391400, // Diameter in kilometers
  mass_kg: 1.989e30, // Mass in kilograms
  gravity: 274.0, // Surface gravity in m/s²
  orbital_speed: 0, // Sun does not orbit the sun (it's the center)
  orbital_period_days: 0, // Not applicable
  distance_from_sun_km: 0, // It's the sun!
  hasMoon: false,
  moons: 0,
  atmosphere: ['Hydrogen', 'Helium'],
  discovered: 'Known since ancient times',
  distance: 0, // For your 3D scene rendering
  size: 2.5, // Scaled size for rendering in your 3D engine
  speed: 0, // No orbital speed since it's static in your scene
  color: '#ffcc00',
  texture: '/planets/sun.png' // Path to your sun texture image
}

export default sunData
