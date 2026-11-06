import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import Actividades from './Actividades.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actividades" element={<Actividades />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
