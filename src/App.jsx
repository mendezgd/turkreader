import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Capitulo from './components/Capitulo';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contacto from './components/Contacto';
import Capitulos from './components/Capitulos';
import Footer from './components/Footer';
import { DarkModeProvider } from './components/UseContext';

function App() {

  const capitulos = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/Capitulos' element={<Capitulos />} />
            {capitulos.map((capitulo) => (
              <Route path={`/Cap${capitulo}`} element={<Capitulo numero={capitulo} />} key={capitulo} />
            ))}
            <Route path='/Contacto' element={<Contacto />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
