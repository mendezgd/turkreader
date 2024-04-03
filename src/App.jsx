import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Capitulos from './components/Capitulos'
import Hero from './components/Hero'
import Contacto from './components/Contacto'
import Cap1 from './components/Cap1'
import Cap2 from './components/Cap2'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/Capitulos' element={<Capitulos />} />
          <Route path='/Cap1' element={<Cap1 />} />
          <Route path='/Cap2' element={<Cap2 />} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
