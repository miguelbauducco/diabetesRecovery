import glucemiaimg from '../Assets/img/glucemiapromedio.png';
import glucemiaimg2 from '../Assets/img/glucemiapromedio2.png'
import glucemiaImgMobile from '../Assets/img/graficosglucemiamobile.png'
import evolucionhemoglobina1 from '../Assets/img/graficohemoglobina.png'
import evolucionhemoglobina2 from '../Assets/img/EVOLUCION HEMOGLOBINA GLICOSADA_2.png'
import evolucionhemoglobinaMobile from '../Assets/img/graficoglucemiamobile2.png'

export default function ResultadosSection() {
  return (
    <section className="resultados-section">
    
      <h3>Resultados</h3>
      
      <p className="subtitulo1" id="resultados">Glucemia promedio:</p>

      <div className="graficos-glucemia">

      <img src={glucemiaimg} alt="Gráfico de glucemia promedio" className="grafico-glucemia1"/>

      <img src={glucemiaImgMobile} alt="grafico de glucemia promedio" className="grafico-glucemia-mobile"/>

      <img src={glucemiaimg2} alt="grafico-glucemia 2" className="grafico-glucemia2"/>

      </div>

      <p className="subtitulo2"> Evolución de la Hemoglobina Glicosilada:</p>
      <div className="imagenes-evolucion">
        <img
          src={evolucionhemoglobina1}
          alt="Informe A1c 1"
          className="grafico-1"
        />

        <img 
          src={evolucionhemoglobinaMobile} 
          className='grafico-2-mobile'
          alt="grafico" 
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