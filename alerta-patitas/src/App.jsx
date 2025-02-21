import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/home'
import ContactoPage from './pages/contacto/contactoPage'
import AdminPage from './pages/admin/adminPage'
import MascotasPage from './pages/mascotas/mascotasPage'
import NosotrosPage from './pages/nosotros/nosotrosPage'
import ProcesoPage from './pages/proceso/procesoPage'
import MascotaPage from './pages/mascotas/slug/mascotaPage'
import ScrollToTop from './components/scrollToTop/ScrollToTop'


function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/mascotas" element={<MascotasPage />} />
          <Route path="/mascota/:slug" element={<MascotaPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/proceso" element={<ProcesoPage />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirección por defecto */}
      </Routes>
      <Footer />
    </div>
   
  )
}

export default App
