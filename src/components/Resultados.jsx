import glucemiaimg1 from '../Assets/img/glucemiapromedio2.png'
import glucemiaimg2 from '../Assets/img/glucemiapromedio3.png'
import glucemiaimg3 from '../Assets/img/glucemiapromedio4.png'
import glucemiaimg4 from '../Assets/img/glucemiapromedio5.PNG'
import glucemiaimg5 from '../Assets/img/glucemiapromedio6.PNG'
import evolucionhemoglobina1 from '../Assets/img/graficohemoglobina.png'
import evolucionhemoglobina2 from '../Assets/img/EVOLUCION HEMOGLOBINA GLICOSADA_2.png'

export default function ResultadosSection() {
  return (
    <section id="resultados" className="resultados-section">
    
      <h3>Resultados</h3>
      
      <p className="subtitulo1">Glucemia promedio:</p>

      <div className="graficos-glucemia">

      <img src={glucemiaimg1} alt="grafico-glucemia 1" className="grafico-glucemia2"/>
      
      <img src={glucemiaimg2} alt="grafico-glucemia 2" className="grafico-glucemia2" />

      <img src={glucemiaimg3} alt="grafico-glucemia 3" className="grafico-glucemia2" style={{border:"none"}}/>

      <img src={glucemiaimg4} alt="grafico-glucemia 4" className="grafico-glucemia2"/>

      <img src={glucemiaimg5} alt="grafico-glucemia 5" className="grafico-glucemia2"/>


      </div>

      <p className="subtitulo2"> Evolución de la Hemoglobina Glicosilada:</p>
      <div className="imagenes-evolucion">
        <img
          src={evolucionhemoglobina1}
          alt="Informe A1c 1"
          className="grafico-1"
        />

        <img 
          src={evolucionhemoglobina2}
          alt="Informe A1c 2"
          className="grafico-2"
        />
      </div>
    </section>
  );
}