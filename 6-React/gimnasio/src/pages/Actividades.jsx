import Card from '@components/Card.jsx'
import { useEffect, useState } from 'react'
import { diasSemana } from '../data/actividades.js'
import '@styles/Actividades.scss'


function Actividades({ isLoggedIn }) {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://localhost:4000/activities')
      .then((response) => {
        if (!response.ok) throw new Error('Error al obtener las actividades')
        return response.json()
      })
      .then((data) => setActivities(data))
      .catch((error) => {
        setError('No se pudieron cargar las actividades. Verificá que el servicio esté iniciado.')
        console.error(error)
      })
  }, [])

  return (
    <section className="actividades">
      <h1>Actividades</h1>
      {error && <p role="alert">{error}</p>}
      <div className="actividades-lista">
        {activities.map((actividad) => (
          <Card
            key={actividad.nombre}
            title={actividad.nombre}
            subtitle={actividad.descripcion}
          >
            <h3>Horarios</h3>
            <ul>
              {actividad.horarios.map((horario) => (
                <li key={horario.dia}>
                  {diasSemana[horario.dia]}: {horario['hora-inicio']} a {horario['hora-fin']}
                </li>
              ))}
            </ul>
            {isLoggedIn && (
              <button type="button" onClick={() => console.log(`Inscripción: ${actividad.nombre}`)}>
                Inscribir
              </button>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Actividades
