export const solarSystem = [
    {
        name: 'sun',
        texture: '/planets/sun.png',
        radius: 3,
        distance: 0,
        orbitSpeed: 0,
    },
    {
        name: 'mercury',
        texture: '/planets/mercury.png',
        radius: 0.2,
        distance: 5,
        orbitSpeed: 0.02,
    },
    {
        name: 'venus',
        texture: '/planets/venus.png',
        radius: 0.4,
        distance: 7,
        orbitSpeed: 0.015,
    },
    {
        name: 'earth',
        texture: '/planets/earth.png',
        radius: 0.5,
        distance: 9,
        orbitSpeed: 0.01,
    }, 
    {
        name: 'moon',
        texture: '/planets/moon.png',
        radius: 0.27, // Moon size relative to Earth
        distance: 1.5, // Distance from Earth
        orbitSpeed: 1.5,
        parent: 'earth', // 👈 Add this
    },
    {
        name: 'mars',
        texture: '/planets/mars.png',
        radius: 0.4,
        distance: 11,
        orbitSpeed: 0.008,
    },
    {
        name: 'jupiter',
        texture: '/planets/jupiter.png',
        radius: 1.2,
        distance: 15,
        orbitSpeed: 0.004,
    },
    {
        name: 'saturn',
        texture: '/planets/saturn.png',
        radius: 0.9,
        distance: 17,
        orbitSpeed: 0.004,
        ring: {
            innerRadius: 1,
            outerRadius: 1.8,
            texturePath: '/planets/saturn_ring.png',
            opacity: 0.8
        }
    },
    {
        name: 'uranus',
        texture: '/planets/uranus.png',
        radius: 0.9,
        distance: 23,
        orbitSpeed: 0.002,
    },
    {
        name: 'neptune',
        texture: '/planets/neptune.png',
        radius: 0.9,
        distance: 27,
        orbitSpeed: 0.0015,
    },
]
