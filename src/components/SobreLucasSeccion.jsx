import sobreLucasImg from "../Assets/img/lucas.png"

export default function AboutLucasSection() {
  return (
    <section id="lucas" className="about-lucas">
        <div className="about-text">
        <h2>Sobre Lucas</h2>
        <p>
          Lucas vive con Diabetes tipo 1 desde los 9 años.
          Después de más de 22 años de pasar por distintos médicos que sólo le indicaban estudios
          y recetas, con el tiempo comenzaron a surgir ciertas dudas sobre si estaba realizando lo correcto y comenzó a cuestionarse muchas metodologías acerca de lo que hacía. <br /><br />

          La Diabetes limitaba su vida, no sólo a nivel personal, también laboral e incluso deportiva, hasta que un día... decidió tomar el control. Todo ese aprendizaje y despertar conllevó un largo camino de autoconocimiento, formación especializada, sólida, pruebas, errores y gran superación. <br /><br />

          Hoy, luego de un profundo trabajo físico, mental y emocional, logró estabilizar su glucemia sin sufrir graves fluctuaciones, reducir su necesidad de insulina, logrando resultados clínicos fuera del rango diabético (HbA1c 5.4% - 36 mmol/mol). <br /><br />

          Este resultado no es casualidad. Es el fruto de un método propio, basado en su experiencia, avalado por evidencia científica y acompañado por un equipo profesional especializado en Nutrición, Ejercicio Físico y Salud. <br /><br />

          “Creé este espacio porque sé lo que es vivir con Diabetes sin una guía clara.
          Y también sé lo que se siente cuando finalmente tomás el control”.
        </p>
        </div>
        
        <img className="about-img" src={sobreLucasImg} alt="Lucas-img" />
    </section>
  );
}