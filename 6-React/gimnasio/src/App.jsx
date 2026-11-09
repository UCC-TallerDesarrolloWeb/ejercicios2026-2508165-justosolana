import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@pages/Login.jsx'
import Actividades from '@pages/Actividades.jsx'
import Home from '@pages/Home.jsx'
import Poke from '@pages/Poke.jsx'
import Store from '@pages/Store.jsx'
import Cart from '@pages/Cart.jsx'
import Layout from '@components/Layout.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />}>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Store isLoggedIn={isLoggedIn} />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/poke" element={<Poke />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/actividades" element={<Actividades isLoggedIn={isLoggedIn} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
