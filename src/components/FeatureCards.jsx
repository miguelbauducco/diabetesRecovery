import acompanamiento from '../Assets/img/acompanamiento.png';
import asesoramiento from '../Assets/img/asesoramiento.png';
import educacion from '../Assets/img/educacion.png';
import fitness from '../Assets/img/fitness.png';
import metodologia from '../Assets/img/metodologia.png';


export default function FeatureCards({onClick}) {
  return (
<section className="program-features">

        <h4>¿Qué incluye el programa?</h4>

        <div className="feature-grid1">
            <article className="feature-card">
            <img src={acompanamiento} className="logo-card" alt="Lucas" />
            <p className="card-title">Acompañamiento 1 a 1 con Lucas</p>
            <p className="card-text">Seguimiento personalizado durante <span className="card-blue">todo el proceso</span>, con foco en educación, toma de decisiones, herramientas específicas y diseño de un estilo de vida sostenible que <span className="card-blue">potencie tu bienestar.</span></p>
            </article>

            <article className="feature-card">
            <img src={asesoramiento} className="logo-card" alt="Lucas" />
            <p className="card-title">Asesoramiento 1 a 1 con Nutricionista</p>
            <p className="card-text">Plan de alimentación adaptado a tus necesidades, con<span className="card-blue"> seguimiento profesional de un nutricionista </span> y ajustes estratégicos en 3 etapas clave del programa.
            </p>
            </article>

            <article className="feature-card">
            <img src={fitness} className="logo-card" alt="Lucas" />
            <p className="card-title">Asesoramiento 1 a 1 con Coach Fitness</p>
            <p className="card-text">Entrenamientos enfocados en
                <span className="card-blue"> mejorar
                tu sensibilidad / resistencia a la insulina,</span> tu composición corporal y tu energía, con seguimiento profesional
                durante los 6 meses.
            </p>
            </article>
        </div>        
            <div className="feature-grid2">
            <article className="feature-card">
            <img src={educacion} className="logo-card" alt="Lucas" />
            <p className="card-title">Educación, Conciencia y Estrategia</p>
            <p className="card-text">
                Material guiado <span className="card-blue">con acceso a herramientas imprescindibles, información de calidad y acompañamiento </span>para tomar el control de tu Diabetes.
            </p>
            </article>

            <article className="feature-card">
            <img src={metodologia} className="logo-card" alt="Lucas" />
            <p className="card-title">Metodología Propia Avalada por Ciencia y Experiencia Real</p>
            <p className="card-text">
                Un enfoque integral basado en años de experiencia, <span className="card-blue">evidencia científica</span> y un equipo de profesionales expertos en salud.
            </p>
            </article>               
        </div>
    <button
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
          document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="cta-button">Quiero controlar mi Diabetes</button>
    <div className="ellipse"></div>
    <h5 id='faq'>Preguntas Frecuentes (FAQ)</h5>
</section>
   
  );
}