import { useEffect, useState } from 'react'
import PokeCard from '@components/PokeCard.jsx'
import '@styles/Actividades.scss'

function Poke() {
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchAllPokemons() {
      const lista = []

      try {
        for (let id = 1; id <= 20; id++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          if (!response.ok) throw new Error('Error al obtener los Pokémon')
          const data = await response.json()
          lista.push(data)
        }
        setPokemons(lista)
      } catch (error) {
        setError('No se pudieron cargar los Pokémon. Intentá nuevamente más tarde.')
        console.error(error)
      }
    }

    fetchAllPokemons()
  }, [])

  return (
    <section className="actividades">
      <h1>Pokémon</h1>
      {error ? (
        <p role="alert">{error}</p>
      ) : pokemons.length === 0 ? (
        <p>Cargando Pokémon...</p>
      ) : (
        <div className="actividades-lista">
          {pokemons.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Poke
