import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import Actividades from './Actividades.jsx'
import Home from './Home.jsx'
import Layout from './Layout.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/actividades" element={<Actividades isLoggedIn={isLoggedIn} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
