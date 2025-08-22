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
            Powered by Com.ar<br />
            Website developed by MBauducco
          </p>
        </div>
      </div>
    </footer>
  );
}