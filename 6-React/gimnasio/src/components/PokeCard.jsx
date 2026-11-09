function PokeCard({ pokemon }) {
  return (
    <article className="actividad">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Número: {pokemon.id}</p>
      <h3>Tipos</h3>
      <ul>
        {pokemon.types.map((tipo) => (
          <li key={tipo.type.name}>{tipo.type.name}</li>
        ))}
      </ul>
    </article>
  )
}

export default PokeCard
