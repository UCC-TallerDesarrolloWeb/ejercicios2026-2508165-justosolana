import './styles/Actividades.scss'

const activities = [
  {
    nombre: 'taekwondo',
    descripcion: 'Arte marcial coreana',
    horarios: [
      { dia: 2, 'hora-inicio': '18:30', 'hora-fin': '20:00' },
      { dia: 4, 'hora-inicio': '18:30', 'hora-fin': '20:00' },
    ],
  },
  {
    nombre: 'zumba',
    descripcion: 'ritmos latinos',
    horarios: [
      { dia: 1, 'hora-inicio': '19:30', 'hora-fin': '20:30' },
      { dia: 3, 'hora-inicio': '19:30', 'hora-fin': '20:30' },
    ],
  },
]

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

function Actividades() {
  return (
    <main className="actividades">
      <h1>Actividades</h1>
      <div className="actividades-lista">
        {activities.map((actividad) => (
          <article className="actividad" key={actividad.nombre}>
            <h2>{actividad.nombre}</h2>
            <p>{actividad.descripcion}</p>
            <h3>Horarios</h3>
            <ul>
              {actividad.horarios.map((horario) => (
                <li key={horario.dia}>
                  {diasSemana[horario.dia]}: {horario['hora-inicio']} a {horario['hora-fin']}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Actividades
