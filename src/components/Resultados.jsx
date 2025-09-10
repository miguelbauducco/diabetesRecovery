import glucemiaimg1 from '../Assets/img/glucemiapromedio2.png'
import glucemiaimg2 from '../Assets/img/glucemiapromedio3.png'
import glucemiaimg3 from '../Assets/img/glucemiapromedio4.png'
import glucemiaimg4 from '../Assets/img/glucemiapromedio5.PNG'
import glucemiaimg5 from '../Assets/img/glucemiapromedio6.PNG'
import evolucionhemoglobina1 from '../Assets/img/graficohemoglobina.png'
import evolucionhemoglobina2 from '../Assets/img/EVOLUCION HEMOGLOBINA GLICOSADA_2.png'
import evolucion1 from '../Assets/img/evolucion1.png'
import evolucion2 from '../Assets/img/evolucion2.png'

export default function ResultadosSection() {
  return (
    <section id="resultados" className="resultados-section">
    
      <h3>Resultados</h3>
      
      <p className="subtitulo1">Glucemia promedio:</p>

      <div className="graficos-glucemia">

      <img src={glucemiaimg1} id="oculto" alt="grafico-glucemia 1" className="grafico-glucemia2"/>
      
      <img src={glucemiaimg2} alt="grafico-glucemia 2" className="grafico-glucemia2" />

      <img src={glucemiaimg3} alt="grafico-glucemia 3" className="grafico-glucemia2" styles={{border:"none"}}/>

      <img src={glucemiaimg4} alt="grafico-glucemia 4" className="grafico-glucemia2"  styles={{border: "1px solid rgba(162, 211, 235, 1)"}}/>

      <img src={glucemiaimg5} alt="grafico-glucemia 5" className="grafico-glucemia2"/>

      <img src={glucemiaimg1} alt="grafico-glucemia 1" className="grafico-glucemia2Mobile"/>

      </div>

      <div className="glucosa-rango">
      <img 
        src={glucemiaimg1} 
        id="ocultoDesktop" 
        alt="grafico-glucemia 1" />
      </div>

      <p className="subtitulo2">Hemoglobina Glicosilada (HbA1c):</p>

      <div className='graficos-container'>

      <div className="imagenes-evolucion">
        <img
          src={evolucionhemoglobina1}
          alt="Informe A1c 1"
          className="grafico-1"
        />

        <img 
          src={evolucionhemoglobina2}
          alt="Informe A1c 2"
          className="grafico-1"
        />
        </div>

        <div className='imagenes-evolucion2'>

        <img 
          src={evolucion1} 
          alt="grafico" 
          className='grafico-2'
        />

        <img 
          src={evolucion2}  
          alt="grafico" 
          className='grafico-2'
        />

        </div>


      </div>
    </section>
  );
}