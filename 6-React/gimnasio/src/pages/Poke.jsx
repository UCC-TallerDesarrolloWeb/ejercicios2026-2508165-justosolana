import { useEffect, useState } from 'react'
import PokeCard from '@components/PokeCard.jsx'
import '@styles/Actividades.scss'

function Poke() {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => {
        if (!response.ok) throw new Error('Error al obtener el Pokémon')
        return response.json()
      })
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <section className="actividades">
      <h1>Pokémon</h1>
      {pokemon ? <PokeCard pokemon={pokemon} /> : <p>Cargando Pokémon...</p>}
    </section>
  )
}

export default Poke
