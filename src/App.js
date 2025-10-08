import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';
import '@fontsource/poppins'

//react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoliticaPrivacidad from "./routes/PoliticaPrivacidad";
import TerminosCondiciones from "./routes/TerminosCondiciones";
import ProteccionDatos from "./routes/ProteccionDatos";


//componentes de la landing
import HeroMessage from './components/HeroMensaje';
import Video from './components/Video';
import BotonAgendarSesion from './components/BotonAgendarSesion';
import SobreLucasSeccion from './components/SobreLucasSeccion';
import Resultados from './components/Resultados';
import CalendarioSeccion from './components/CalendarioSeccion';
import FeatureCards from './components/FeatureCards';
import Navbar from './components/Navbar';
import FaqCarrousel from './components/FaqCarrousel';
import Footer from './components/Footer';
import ScrollBtn from './components/ScrollBtn';




function Landing() {
  return(
      <div className="main-container">
      <div className="background">
      <Navbar/>
      <Video/>
      <HeroMessage/>
      <BotonAgendarSesion/>
      <SobreLucasSeccion/>
      </div>
      <Resultados/>
      <CalendarioSeccion/>
      <FeatureCards/>
      <FaqCarrousel/>
      <ScrollBtn/>
      <Footer/>
      </div>
  );
  
}
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos" element={<TerminosCondiciones />} />
        <Route path="/proteccion" element={<ProteccionDatos />} />
      </Routes>
    </Router>
  );
}

