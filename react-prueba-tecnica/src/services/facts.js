const CAT_FACT_ENDPOINT = `https://catfact.ninja/fact`
const CAT_IMAGE_ENDPOINT = `https://cataas.com/cat/says`


export const getRandomFacts = async () => {
  const res = await fetch(CAT_FACT_ENDPOINT)
  const { fact } = await res.json()
  return fact
}

export const getRandomImage = async fact => {
  const words = fact.split(' ', 3).join(' ')
  const res = await fetch(`${CAT_IMAGE_ENDPOINT}/${words}?size=50&color=red&json=true`)
  const { url } = await res.json()
  return url
}
