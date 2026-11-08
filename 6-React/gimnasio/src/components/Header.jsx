import { NavLink } from 'react-router-dom'

function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="header">
      <nav aria-label="Navegación principal">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/actividades">Actividades</NavLink>
        <NavLink to="/poke">Pokémon</NavLink>
        {isLoggedIn && <button type="button" onClick={onLogout}>Logout</button>}
      </nav>
    </header>
  )
}

export default Header
