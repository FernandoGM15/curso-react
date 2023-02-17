import React from 'react'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'


export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { url } = useCatImage({ fact })

  // Hace una nueva petición de facts
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        placeItems: 'center',
      }}
    >
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {fact && <p>{fact}</p>}
        {url && (
          <img
            style={{
              maxWidth: '332px',
              height: 'auto',
            }}
            src={url}
            alt={`Image extracted using the first three words for ${fact}`}
          ></img>
        )}
      </section>
    </main>
  )
}
