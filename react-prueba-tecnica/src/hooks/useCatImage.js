import { getRandomImage } from "../services/facts"
import { useState, useEffect } from "react"

//Custom hook
export const useCatImage = ({ fact }) => {
    const [url, setUrl] = useState()
    // SET de la constante url con los datos del primer useEffect
    // useEffect dependiente
    useEffect(() => {
      if (!fact) return
      getRandomImage(fact).then(url => setUrl(url))
    }, [fact])
  
    return { url: `https://cataas.com/${url}` }
  }