export async function getBodyData(name: string) {
  const res = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${name}`)
  if (!res.ok) throw new Error('Failed to fetch NASA data')
  return res.json()
}
