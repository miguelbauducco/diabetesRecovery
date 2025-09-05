import { InlineWidget } from "react-calendly";

export default function CalendarioSecion() {
  return (
    <section id="calendly" className="calendario-section">

      <div className="calendario-textcontainer">
        <p className="calendario-text">
        "Durante años pensé que controlar mi diabetes era corregir los malos resultados sobre la marcha, simplemente evitar que no se descontrole. Pero aprendí que no es una cuestión sólo de números: se trata de vivir con libertad, tranquilo, con más energía, sin miedo, con más seguridad, sintiéndome bien con mayor confianza, evitando malestares, descompensaciones y fluctuaciones innecesarias.
        </p>
        <p className="calendario-text">
          Cuando comencé este proceso, tenía una HbA1c de 7.5%. Hoy, después de años de aprendizaje junto a cambios sostenibles en mi alimentación, ejercicio físico, calidad de sueño, gestión del estrés junto al control de las emociones, escucha activa de mi cuerpo, entre otras variables importantes, logré una HbA1c de 5.4%. Hoy me siento más fuerte, más libre, más seguro y más en paz conmigo mismo.
          Esta transformación sí es posible, y también puede ser la tuya.
        </p>
        <p className="calendario-text">
          Si querés dejar de sobrevivir con tu diabetes y empezar a vivir con propósito, estás en el lugar correcto."
        </p>
      </div>

      <div className="calendario">
        <InlineWidget url="https://calendly.com/diabetes-recovery/meeting-30-min?hide_event_type_details=1&hide_gdpr_banner=1" styles={{height: "100%", width:"100%", borderRadius:"30px", overflow:"hidden"}} pageSettings={{hideLandingPageDetails: "true", hideEventTypeDetails:"false"}}/>
      </div>

    </section>
  );
}