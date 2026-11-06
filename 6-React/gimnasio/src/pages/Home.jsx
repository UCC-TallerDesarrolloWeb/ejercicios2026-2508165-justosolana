import funcional from '../assets/home/funcional.jpg'
import yoga from '../assets/home/yoga.webp'
import '@styles/Home.scss'

function Home() {
  return (
    <section className="home">
      <h1>Actividades del gimnasio</h1>
      <div className="home-cards">
        <article className="home-card">
          <img src="/home/taekwondo.jpg" alt="Práctica de taekwondo" />
          <h2>Taekwondo</h2>
        </article>
        <article className="home-card">
          <img src="/home/zumba.jpg" alt="Clase de zumba" />
          <h2>Zumba</h2>
        </article>
        <article className="home-card">
          <img src={funcional} alt="Entrenamiento funcional" />
          <h2>Funcional</h2>
        </article>
        <article className="home-card">
          <img src={yoga} alt="Práctica de yoga" />
          <h2>Yoga</h2>
        </article>
      </div>
    </section>
  )
}

export default Home
