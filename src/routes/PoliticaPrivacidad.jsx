import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollBtn from "../components/ScrollBtn";
import '../styles/legal.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from '../Assets/img/logo.png';




export default function PoliticaPrivacidad() {
  const location = useLocation();
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);


  return (
    <div className="main-container">
      <div className="background">
        <Link to="/"><img src={logo} className="logo-legal" style={{height:"170px", width:"170px"}} alt="logo" /></Link>

        <section className="legal-section">
          <h1 className="titles">Política de Privacidad<br />Diabetes Recovery</h1>

          <p className="subtitles-legal">1. Introducción</p>
          <p className="text-legal">
            En Diabetes Recovery respetamos y protegemos la privacidad de todas las personas que utilizan nuestros servicios.
            Esta política describe cómo recopilamos, utilizamos y protegemos los datos personales que usted nos proporciona al acceder a nuestro sitio web, al participar de nuestros programas o al utilizar nuestras herramientas digitales.
            Este sitio no está dirigido a menores de edad y no recopilamos información personal de niños de manera intencional.
          </p>

          <p className="subtitles-legal">2. Responsable del tratamiento</p>
          <p className="text-legal">
            El responsable del tratamiento de los datos personales es Diabetes Recovery.
            Si tiene preguntas sobre esta política o desea ejercer sus derechos, puede escribirnos a: <strong>info@diabetes-recovery.com</strong>
          </p>

          <p className="subtitles-legal">3. Datos que recopilamos</p>
          <ul className="text-legal">
            <li>Datos de identidad: nombre, apellido, fecha de nacimiento.</li>
            <li>Datos de contacto: correo electrónico, número de teléfono, dirección.</li>
            <li>Datos de salud: información médica y estudios clínicos, sólo cuando sea estrictamente necesario para el desarrollo del programa.</li>
            <li>Datos de pago: información de facturación, transacciones y métodos de pago.</li>
            <li>Datos técnicos: dirección IP, tipo de navegador, dispositivo, cookies y patrones de uso del sitio.</li>
            <li>Datos de interacción: información sobre el uso de nuestros módulos, materiales y servicios.</li>
          </ul>

          <p className="subtitles-legal">4. Cómo recopilamos los datos</p>
          <ul className="text-legal">
            <li>Directamente de usted: al registrarse, completar formularios, enviarnos información o comunicarse con nuestro equipo.</li>
            <li>De forma automática: mediante cookies y herramientas de análisis en nuestro sitio web.</li>
            <li>De terceros autorizados: como plataformas de pago, calendarios de agendamiento o servicios de videollamadas.</li>
          </ul>

          <p className="subtitles-legal">5. Uso de los datos</p>
          <ul className="text-legal">
            <li>Gestionar su participación en los programas de Diabetes Recovery.</li>
            <li>Coordinar llamadas y sesiones con especialistas.</li>
            <li>Procesar pagos y emitir facturación.</li>
            <li>Brindar acceso a módulos educativos y materiales de apoyo.</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
            <li>Enviar notificaciones, recordatorios o actualizaciones relacionadas con el programa.</li>
          </ul>

          <p className="subtitles-legal">6. Protección de la información</p>
          <p className="text-legal">
            Adoptamos medidas técnicas y organizativas para proteger sus datos contra accesos no autorizados, pérdidas o alteraciones.
            Solo las personas autorizadas de nuestro equipo tendrán acceso a su información, en la medida necesaria para prestar el servicio.
          </p>

          <p className="subtitles-legal">7. Compartición de datos</p>
          <p className="text-legal">No vendemos ni compartimos sus datos personales con terceros, salvo en los siguientes casos:</p>
          <ul className="text-legal">
            <li>Para la ejecución de los servicios (ejemplo: plataformas de pago o agendamiento de llamadas y/o videollamadas).</li>
            <li>Cuando sea requerido por la ley o autoridades competentes.</li>
            <li>Con su consentimiento expreso.</li>
          </ul>

          <p className="subtitles-legal">8. Derechos de los usuarios</p>
          <p className="text-legal">Usted tiene derecho a:</p>
          <ul className="text-legal">
            <li>Acceder a sus datos personales.</li>
            <li>Solicitar la corrección de datos inexactos.</li>
            <li>Solicitar la eliminación de su información, en los casos que corresponda.</li>
            <li>Retirar su consentimiento para el tratamiento de sus datos.</li>
          </ul>
          <p className="text-legal">Puede ejercer estos derechos escribiéndonos a: <strong>info@diabetes-recovery.com</strong></p>

          <p className="subtitles-legal">9. Cookies</p>
          <p className="text-legal">
            Nuestro sitio utiliza cookies para mejorar la experiencia del usuario, analizar el tráfico y optimizar el contenido.
            Usted puede configurar su navegador para rechazar las cookies, aunque algunas funciones del sitio podrían verse limitadas.
          </p>

          <p className="subtitles-legal">10. Conservación de los datos</p>
          <p className="text-legal">
            Mantendremos su información personal sólo durante el tiempo necesario para cumplir con los fines descritos en esta política o mientras sea requerido para obligaciones legales y administrativas.
          </p>

          <p className="subtitles-legal">11. Cambios en la política</p>
          <p className="text-legal">
            Podemos actualizar esta política de privacidad de manera periódica. Los cambios se publicarán en esta misma página y serán efectivos desde su publicación.
          </p>

          <p className="subtitles-legal">12. Contacto</p>
          <p className="text-legal">
            Para cualquier consulta relacionada con esta política de privacidad o con el tratamiento de sus datos personales, puede contactarnos en: <strong>info@diabetes-recovery.com</strong>
          </p>
        </section>
      </div>
      <ScrollBtn />
      <Footer />
    </div>

  );
}
