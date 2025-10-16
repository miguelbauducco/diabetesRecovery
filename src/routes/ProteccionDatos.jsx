import Footer from "../components/Footer";
import ScrollBtn from "../components/ScrollBtn";
import '../styles/legal.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from '../Assets/img/logo.png';

export default function ProteccionDatos() {
  const location = useLocation();
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);



  return (
    <div className="main-container">
      <div className="background">
        <Link to="/"><img src={logo} className="logo-legal" style={{height:"170px", width:"170px"}} alt="logo" /></Link>

        <section className="legal-section">

          <h1 className="titles">Política de Protección de Datos<br /> Diabetes Recovery</h1>

          <p className="subtitles-legal">1. Introducción</p>
          <p className="text-legal">
            En Diabetes Recovery, estamos comprometidos con la protección de los datos personales de todas las personas que participan en nuestros programas, ya sean pacientes, familiares, cuidadores, colaboradores o cualquier persona con la que interactuemos.
          </p>
          <p className="text-legal">
            Sabemos que la confianza es clave en el acompañamiento de la salud, y por eso tratamos su información con el mayor cuidado, transparencia y seguridad.
          </p>

          <p className="subtitles-legal">2. Objetivo de esta política</p>
          <ul className="text-legal">
            <li>Cumple con los principios internacionales de protección de datos.</li>
            <li>Respeta los derechos de los pacientes, clientes y colaboradores.</li>
            <li>Es transparente sobre cómo se recopilan, usan y almacenan los datos personales.</li>
            <li>Previene riesgos de acceso no autorizado, mal uso o pérdida de información.</li>
          </ul>

          <p className="subtitles-legal">3. ¿Qué son datos personales?</p>
          <p className="text-legal">
            Se considera dato personal a toda información que permite identificar a una persona de manera directa o indirecta, ya sea en formato digital o en papel.
          </p>
          <p className="text-legal">
            Ejemplos: nombre, correo electrónico, teléfono, dirección IP, información médica o de salud, historial de interacciones.
          </p>
          <p className="text-legal">
            Los datos sensibles incluyen información médica, de salud o cualquier otro dato que requiera un tratamiento especial y cuidadoso.
          </p>

          <p className="subtitles-legal">4. Principios de protección de datos</p>
          <ul className="text-legal">
            <li>Licitud y transparencia: siempre existe una base legal y una finalidad clara.</li>
            <li>Finalidad específica: sólo utilizamos los datos para los fines informados.</li>
            <li>Minimización de datos: recopilamos únicamente lo necesario.</li>
            <li>Exactitud: mantenemos la información actualizada.</li>
            <li>Limitación en el tiempo: no conservamos los datos más allá de lo necesario.</li>
            <li>Seguridad: aplicamos medidas de protección técnicas y organizativas.</li>
            <li>Confidencialidad: acceso restringido únicamente a personal autorizado.</li>
          </ul>

          <p className="subtitles-legal">5. Bases legales para el tratamiento</p>
          <ul className="text-legal">
            <li>Consentimiento del usuario.</li>
            <li>Cumplimiento de un contrato o servicio solicitado.</li>
            <li>Obligaciones legales aplicables.</li>
            <li>Interés legítimo, siempre que no afecte los derechos del usuario.</li>
          </ul>

          <p className="subtitles-legal">6. Datos que recopilamos</p>
          <ul className="text-legal">
            <li>Información proporcionada por usted: nombre, correo electrónico, teléfono, datos de salud relevantes, estudios clínicos, información de pago.</li>
            <li>Información técnica: dirección IP, cookies, tipo de dispositivo, navegador.</li>
            <li>Información de uso: participación en módulos, consultas, interacción con el programa.</li>
          </ul>

          <p className="subtitles-legal">7. Uso de los datos</p>
          <ul className="text-legal">
            <li>Brindar y personalizar el programa de acompañamiento.</li>
            <li>Coordinar llamadas y sesiones con especialistas.</li>
            <li>Gestionar pagos y facturación.</li>
            <li>Mejorar la experiencia de los usuarios y el contenido educativo.</li>
            <li>Enviar recordatorios, notificaciones y comunicaciones relacionadas con el servicio.</li>
          </ul>

          <p className="subtitles-legal">8. Compartición de datos</p>
          <p className="text-legal">No vendemos ni compartimos información personal con terceros no autorizados.</p>
          <p className="text-legal">Podemos compartir datos únicamente con:</p>
          <ul className="text-legal">
            <li>Proveedores de servicios (plataformas de pago, videollamadas, gestión de contenidos).</li>
            <li>Autoridades competentes, cuando la ley lo exija.</li>
            <li>Colaboradores internos (especialistas del programa), bajo estricta confidencialidad.</li>
          </ul>

          <p className="subtitles-legal">9. Seguridad de la información</p>
          <p className="text-legal">
            Adoptamos medidas técnicas y organizativas para proteger la información frente a accesos no autorizados, pérdida, alteración o divulgación indebida.
          </p>
          <p className="text-legal">
            El acceso a los datos está restringido al personal que lo necesite estrictamente para su función.
          </p>

          <p className="subtitles-legal">10. Derechos de los usuarios</p>
          <p className="text-legal">Usted tiene derecho a:</p>
          <ul className="text-legal">
            <li>Acceder a sus datos personales.</li>
            <li>Solicitar correcciones o actualizaciones.</li>
            <li>Solicitar la eliminación de datos cuando corresponda.</li>
            <li>Limitar o restringir el uso de su información.</li>
            <li>Retirar su consentimiento en cualquier momento.</li>
          </ul>
          <p className="text-legal">Puede ejercer sus derechos escribiendo a: <strong>info@diabetes-recovery.com</strong></p>

          <p className="subtitles-legal">11. Conservación de los datos</p>
          <p className="text-legal">
            Los datos se conservan únicamente durante el tiempo necesario para cumplir con los fines establecidos, o mientras exista una relación activa con el usuario. Posteriormente, se eliminan o se anonimizan de manera segura.
          </p>

          <p className="subtitles-legal">12. Cambios en esta política</p>
          <p className="text-legal">
            Podemos actualizar esta política periódicamente. Cualquier cambio será publicado en esta página y tendrá efecto desde su fecha de publicación.
          </p>

          <p className="subtitles-legal">13. Contacto</p>
          <p className="text-legal">
            Si tiene dudas sobre esta política o desea ejercer sus derechos, puede comunicarse con nosotros en: <strong>info@diabetes-recovery.com</strong>
          </p>

        </section>

      </div>

      <ScrollBtn />
      <Footer />

    </div>
  );
}