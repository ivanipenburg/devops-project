import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Household from './pages/Household'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Rooms from './pages/Rooms'
import './App.css'

import '@aws-amplify/ui-react/styles.css'

import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
Amplify.configure(awsExports)

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/household" element={<Household />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
