import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import Sobre from './Pages/Sobre/Sobre'
import NavBar from './Components/Navbar/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <NavBar />
    <Home />
    <Sobre />
    
  </React.StrictMode>,
)
