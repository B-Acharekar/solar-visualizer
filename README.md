
# 🌌 Solar System Visualizer

**Solar System Visualizer** is an interactive 3D and 2D web experience built using modern web technologies to explore planets, moons, and the sun. It provides beautiful orbital animations, celestial data, and full 3D inspection of planetary bodies—all powered by real NASA data.

## 🚀 Demo

Live preview: [https://solar-visualizer.vercel.app](https://solar-visualizer.vercel.app)

---

## 🛠️ Tech Stack

| Tech | Usage |
|------|-------|
| **Next.js 15 (App Router)** | Full-stack React framework |
| **React Three Fiber + Drei** | 3D graphics and orbital rendering |
| **TypeScript** | Type safety across frontend and data models |
| **Tailwind CSS** | Utility-first styling |
| **Vercel** | Hosting and CI/CD |

---

## ✨ Features

- 🌍 Interactive 3D orbiting planets and moons
- 🌙 Zoom, rotate, and inspect celestial bodies in real-time
- 🧠 Info panel with real-world planetary data (mass, gravity, moons, etc.)
- 🧭 Switch between 3D and 2D views
- 🧑‍🚀 Smooth camera controls with OrbitControls
- 📱 Fully responsive and mobile-friendly
- 🔄 Scalable design for future planets/moons/asteroids

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js 18+
- Git

### Installation

```bash
git clone https://github.com/B-Acharekar/solar-visualizer.git
cd solar-visualizer
npm install
````

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📦 Deployment

This project is ready for **Vercel** deployment out-of-the-box.

To deploy:

1. Push your code to GitHub.
2. Import the repo on [vercel.com](https://vercel.com).
3. It will auto-detect the Next.js setup and deploy.

---

## 📂 Folder Structure (Simplified)

```
src/
  components/        # UI + 3D canvas elements
  lib/               # Planet data, NASA API integration
  app/               # Next.js App Router structure
  styles/            # Tailwind config and globals
```

---

## 🤝 Contributing

Contributions are welcome! Open an issue or fork and submit a PR.


