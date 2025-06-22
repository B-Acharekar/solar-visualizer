import { useState, useEffect } from 'react'
import { TextureLoader, Texture } from 'three'

export function useSafeTexture(path: string) {
  const [texture, setTexture] = useState<Texture | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loader = new TextureLoader()
    loader.load(
      path,
      (tex) => {
        setTexture(tex)
        setLoading(false)
      },
      undefined,
      () => {
        console.warn(`Texture ${path} failed to load`)
        setLoading(false)
      }
    )
  }, [path])

  return { texture, loading }
}
