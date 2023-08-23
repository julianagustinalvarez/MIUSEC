import './App.css';
import { Routes , Route , BrowserRouter as Router } from 'react-router-dom';
import Menu from './Paginas/COMPONENTES/Menu'
import InicioPagina from './Paginas/InicioPagina';
import ArtistasPagina from './Paginas/ArtistasPagina';
import TendenciasPagina from './Paginas/TendenciasPagina';
import FestivalesPagina from './Paginas/FestivalesPagina';
import ContactoPagina from './Paginas/ContactoPagina';
import Footer from './Paginas/COMPONENTES/Footer'


function App() {
  return (
    <>
     <Router>
    <Menu />
    <div className="container pt-5 mt-5">
    
   
      <Routes>
        <Route path="/" element={<InicioPagina />} />
        <Route path="/artistas" element={<ArtistasPagina />} />
        <Route path="/tendencias" element={<TendenciasPagina />} />
        <Route path="/festivales" element={< FestivalesPagina/>} />
        <Route path="/contacto" element={<ContactoPagina />} />
       </Routes>
      
      

     </div>
     </Router>

     <div>
     <Footer />


     </div>
    </>
  );
}

export default App;
