import Footer from "../components/Footer";
import ScrollBtn from "../components/ScrollBtn";
import '../styles/legal.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from '../Assets/img/logo.png';


export default function TerminosCondiciones() {
  const location = useLocation();
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  
  return (
    <div className="main-container">
      <div className="background">
        <Link to="/"><img src={logo} className="logo-legal" style={{height:"170px", width:"170px"}} alt="logo" /></Link>

        <section className="legal-section">
          <h1 className="titles">Términos y Condiciones<br /> Diabetes Recovery</h1>
          <p className="text-legal"><strong>Última actualización:</strong> 2025</p>

          <p className="text-legal">
            Estos Términos y Condiciones (en adelante, el “Acuerdo”) regulan el acceso y uso del programa Diabetes Recovery (en adelante, el “Programa”), ofrecido por Lucas Martin Olivero (en adelante, el “Prestador”), y el Usuario (en adelante, el “Usuario”).
          </p>
          <p className="text-legal">
            Al inscribirse en el Programa, el Usuario declara haber leído, comprendido y aceptado estos Términos y Condiciones.
          </p>

          <p className="subtitles-legal">1. Objetivo del Servicio</p>
          <p className="text-legal">
            El Programa Diabetes Recovery ofrece acompañamiento integral a personas con Diabetes tipo 1, Diabetes tipo 2 y Prediabetes, a través de módulos educativos, sesiones con especialistas, herramientas específicas de apoyo y acompañamiento.
          </p>
          <ul className="text-legal">
            <li>Consultoría y coaching personalizado.</li>
            <li>Asesoramiento nutricional.</li>
            <li>Entrenamiento físico adaptado.</li>
            <li>Herramientas educativas y recursos digitales.</li>
          </ul>

          <p className="subtitles-legal">2. Obligaciones del Usuario</p>
          <ul className="text-legal">
            <li>Proporcionar información veraz y actualizada sobre su salud, hábitos y antecedentes médicos.</li>
            <li>Cumplir con los pagos acordados en tiempo y forma.</li>
            <li>Participar activamente en las sesiones, realizar las tareas asignadas y asistir al menos al 78% de las llamadas.</li>
            <li>Comprender que los resultados dependen de su compromiso, adherencia y constancia.</li>
          </ul>

          <p className="subtitles-legal">3. Exclusión de Responsabilidad Médica</p>
          <p className="text-legal">
            El Programa no sustituye la consulta, diagnóstico ni tratamiento médico profesional.
            El Usuario debe continuar bajo supervisión médica y consultar con su médico de cabecera antes de realizar cambios en su medicación, alimentación y/o actividad física.
            El Prestador y sus especialistas no se hacen responsables por la suspensión o modificación unilateral de tratamientos indicados por profesionales médicos externos.
          </p>

          <p className="subtitles-legal">4. Pagos y Facturación</p>
          <ul className="text-legal">
            <li>El Usuario se compromete a abonar la suma acordada al momento de la contratación.</li>
            <li>Los pagos se realizan de forma puntual y no podrán demorarse más de 30 días.</li>
            <li>En caso de incumplimiento, el Prestador podrá suspender temporal o definitivamente los servicios.</li>
            <li>Los pagos realizados no son reembolsables, salvo que se indique expresamente lo contrario en determinado caso o acuerdo particular.</li>
          </ul>

          <p className="subtitles-legal">5. Política de Reembolsos</p>
          <p className="text-legal">
            En Diabetes Recovery creemos en la importancia del compromiso del Usuario y en la efectividad de nuestro programa. Por eso ofrecemos una política de reembolso justa y transparente.
          </p>
          <p className="text-legal">
            Si el Usuario participa activamente, sigue las pautas del programa y cumple con los requisitos básicos de asistencia y seguimiento establecidos en el contrato, y aun así no obtiene resultados, podrá solicitar el reembolso correspondiente.
          </p>
          <p className="text-legal">
            Cada caso será evaluado por nuestro equipo profesional en base a la información registrada durante el proceso. Nuestro objetivo es que el Usuario se sienta acompañado, seguro y respaldado en cada etapa.
          </p>
          <p className="text-legal">
            El Usuario, al aceptar este Acuerdo, entiende y consiente que todos los pagos son definitivos y no reembolsables salvo cumplimiento de los requisitos establecidos en cada contrato.
          </p>

          <p className="subtitles-legal">6. Propiedad Intelectual</p>
          <p className="text-legal">
            Todo el contenido del Programa, incluyendo módulos, materiales, manuales, guías, audios, imágenes y videos, es propiedad intelectual del Prestador.
            Está prohibida su reproducción, distribución o uso con fines comerciales sin autorización expresa y por escrito.
          </p>

          <p className="subtitles-legal">7. Confidencialidad y Protección de Datos</p>
          <p className="text-legal">
            El Prestador se compromete a proteger la información personal y sensible del Usuario.
            Toda la información compartida será confidencial y utilizada únicamente para la correcta prestación del servicio.
            La gestión de datos personales se regirá por la Política de Privacidad y la Política de Protección de Datos del Programa.
          </p>

          <p className="subtitles-legal">8. Limitación de Responsabilidad</p>
          <p className="text-legal">
            El Prestador no garantiza resultados específicos y no se hace responsable por la falta de compromiso y/o adherencia del Usuario a las pautas establecidas.
            Los avances y mejoras en el control glucémico, HbA1c, peso u otros indicadores establecidos dependerán del cumplimiento de las indicaciones brindadas, de factores individuales y del grado de compromiso del Usuario.
            El Prestador no será responsable de daños indirectos, incidentales o consecuentes derivados de la participación en el Programa.
          </p>

          <p className="subtitles-legal">9. Suspensión o Cancelación del Servicio</p>
          <ul className="text-legal">
            <li>Incumplimiento reiterado de los pagos.</li>
            <li>Conducta inapropiada en las sesiones o en la comunidad del Programa.</li>
            <li>Incumplimiento grave de estos Términos y Condiciones.</li>
          </ul>

          <p className="subtitles-legal">10. Modificaciones</p>
          <p className="text-legal">
            El Prestador podrá modificar estos Términos y Condiciones en cualquier momento, notificando al Usuario mediante correo electrónico o publicación en la página web oficial.
          </p>

          <p className="subtitles-legal">11. Legislación y Jurisdicción Aplicable</p>
          <p className="text-legal">
            Este Acuerdo se rige por las leyes de la República Argentina.
          </p>
        </section>
      </div>
      <ScrollBtn />
      <Footer />
    </div>
  );
}