import { useState, useEffect } from "react"
import { getRandomFacts } from "../services/facts"
export const useCatFact = () => {
    const [fact, setFact] = useState()
  
    const refreshFact = () => {
      getRandomFacts().then(fact => setFact(fact))
    }
    // SET de la constante fact traída de API
    useEffect(refreshFact, [])
  
    return { fact, refreshFact }
  }
  