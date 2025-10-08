import logofooter from '../Assets/img/logofooter.png'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-row">
          <img src={logofooter} className="logo-footer" alt="logo" />
        

          <p id="footer-text-2" className="footer-text" >
          Copyright © 2025 Diabetes Recovery. Todos los derechos reservados.<br></br>
          <Link className='footer-links' to="/privacidad">[Política de Privacidad]</Link> • <Link to="/terminos" className='footer-links'>[Términos y Condiciones]</Link> • <Link className='footer-links' to="/proteccion">[Protección de Datos]</Link><br></br>
          Contacto: info@diabetes-recovery.com – Dirección legal: Buenos Aires, Argentina.<br></br>
          </p>
        

          <p className="footer-text">
            Copyright © 2025 Diabetes Recovery<br />
            Powered by<a href="https://www.instagram.com/juanma.com.ar/" target="_blank" rel="noopener noreferrer" style={{color: "inherit",transition: "none",border: "none", fontSize:"10px"}}> Com.ar
            </a>
            <br />
            Website developed by <a href="https://www.linkedin.com/in/miguel-b-aa3954229/" target="_blank" rel="noopener noreferrer" style={{color: "inherit",transition: "none",border: "none", fontSize:"10px"}}>MBauducco
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}