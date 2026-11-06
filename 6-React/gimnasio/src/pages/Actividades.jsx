import Card from '@components/Card.jsx'
import { activities, diasSemana } from '../data/actividades.js'
import '@styles/Actividades.scss'


function Actividades({ isLoggedIn }) {
  return (
    <section className="actividades">
      <h1>Actividades</h1>
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
