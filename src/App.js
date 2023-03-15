import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Household from './pages/Household'
import Login from './pages/Login'
import Rooms from './pages/Rooms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/household" element={<Household />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
