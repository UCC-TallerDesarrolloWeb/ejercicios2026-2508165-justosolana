import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@styles/Login.scss'

function Login({ onLogin }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(event) {
    event.preventDefault()
    if (username === 'admin' && password === 'admin') {
      console.log('Login OK')
      onLogin()
      navigate('/actividades')
    } else {
      console.log('Login Incorrecto')
    }
  }

  return (
    <section className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Iniciar Sesión</h1>
        <input
          id="username"
          type="text"
          placeholder="Usuario"
          aria-label="Usuario"
          autoComplete="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          aria-label="Contraseña"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </section>
  )
}

export default Login
