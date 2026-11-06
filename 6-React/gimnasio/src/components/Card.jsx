function Card({ title, subtitle, children }) {
  return (
    <article className="actividad">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {children}
    </article>
  )
}

export default Card
