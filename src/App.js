import './App.css';
import '@fontsource/poppins'
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

function App() {
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
export default App;
