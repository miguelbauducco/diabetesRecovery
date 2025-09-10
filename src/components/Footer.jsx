import logofooter from '../Assets/img/logofooter.png'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">  
        <img src={logofooter} className="logo-footer" alt="logo" />
          
         <div className="footer-row">
          <p id="footer-text-1" className="footer-text">
            X 256<br />
            Buenos Aires<br />
            Argentina
          </p>
        

        
          <p id="footer-text-2" className="footer-text" >
            +54 9 343 405-2762<br />
            contacto@diabetesrecovery.com
          </p>
        

          <p className="footer-text">
            Copyright © 2025 Diabetes Recovery<br />
            Powered by<a href="https://www.instagram.com/juanma.com.ar/" target="_blank" rel="noopener noreferrer" style={{color: "inherit",transition: "none",border: "none", fontSize:"12px"}}> Com.ar
            </a>
            <br />
            Website developed by <a href="https://www.linkedin.com/in/miguel-b-aa3954229/" target="_blank" rel="noopener noreferrer" style={{color: "inherit",transition: "none",border: "none", fontSize:"12px"}}>MBauducco
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}