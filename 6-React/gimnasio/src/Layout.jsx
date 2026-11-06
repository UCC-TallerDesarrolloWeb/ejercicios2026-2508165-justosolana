import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './styles/Layout.scss'

function Layout({ isLoggedIn, onLogout }) {
  return (
    <div className="layout">
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
