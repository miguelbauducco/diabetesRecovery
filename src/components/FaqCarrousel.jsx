import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();



export const FaqCarrousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperElRef.current;

    swiperEl.breakpoints = {
      0: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 30 }
    };

    swiperEl.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperEl.addEventListener("swiperslidechange", () => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      centered-slides="true"
      initial-slide="1"
      autoplay="true"
      grab-cursor="true"
      autoplay-delay="5000"
      direction="horizontal"
      loop="true"
      navigation="true"
      style={{
    "--swiper-navigation-size": "12px",
    "--swiper-theme-color": "background: rgba(11, 31, 54, 1)"
    }}
    >
      
      <swiper-slide>
        <div className="slide-text-container ">
          <p className="slide-text1">¿Este programa es solo para Diabetes tipo 1?</p><br />
          <p className="slide-text2">No. Está diseñado para personas con Diabetes tipo 1, tipo 2 y Prediabetes, con análisis de cada paciente y planes personalizados según cada caso.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Necesito tener experiencia previa en ejercicio físico y/o alimentación saludable?</p><br />
          <p className="slide-text2">No. El programa está pensado para acompañarte desde cero, con el apoyo de un equipo profesional que adapta cada plan y módulos a tu nivel.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Incluye seguimiento personalizado?</p><br />
          <p className="slide-text2">Sí. Vas a contar con el acompañamiento de un Nutricionista, un Coach Fitness y de Lucas durante todo el proceso, además de obtener herramientas prácticas, material pregrabado y más.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Cómo empiezo?</p><br />
          <p className="slide-text2">Podés agendar una llamada directamente en el calendario que encontrarás en la página. En esa llamada estaremos evaluando tu situación actual junto al equipo de profesionales, definiendo si podemos ayudarte y así, comenzar a trabajar juntos.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Cuánto dura el programa?</p><br />
          <p className="slide-text2">Tiene una duración completa de 6 meses, con seguimiento personalizado profesional, material teórico-práctico pregrabado y desafíos prácticos a desarrollar.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Qué resultados puedo esperar?</p><br />
          <p className="slide-text2">Cada proceso es único, pero los objetivos principales son: Reducir tu HbA1c, lograr rangos estables de glucemia, disminuir (o incluso revertir) el uso de medicación dependiendo el caso, mejorar tu calidad de vida, aprender herramientas sobre la diabetes y sobre todo, sentirte mejor.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Puedo acceder desde cualquier lugar del mundo?</p><br />
          <p className="slide-text2">Sí, el programa es posible realizarlo completamente online. Todo lo que necesitás es una conexión a internet y las ganas de controlar tu diabetes.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Necesito tener un sensor de glucosa para hacer el programa?</p><br />
          <p className="slide-text2">No es obligatorio, pero si usás uno, será mucho más sencillo. También podés hacerlo perfectamente con glucómetro digital.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Este programa reemplaza a mi médico?</p><br />
          <p className="slide-text2">No. Este programa es complementario al seguimiento médico profesional que realices. No diagnosticamos, ni tampoco medicamos.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Qué pasa si me cuesta sostener los cambios?</p><br />
          <p className="slide-text2">No estás sola. Por eso trabajamos no solo la alimentación y el ejercicio como pilares fundamentales, sino también la mentalidad, la calidad de sueño y la gestión del estrés, para que los cambios sean sostenibles.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Este programa es solo para jóvenes o también para adultos mayores?</p><br />
          <p className="slide-text2">Es para cualquier persona mayor de edad. Trabajamos con personas jóvenes, adultos y mayores, siempre con un enfoque personalizado.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Este programa es solo para personas con diagnóstico reciente?</p><br />
          <p className="slide-text2">No. Funciona tanto si te acaban de diagnosticar como si hace años vivís con diabetes. Nunca es tarde para mejorar tu calidad de vida.</p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div className="slide-text-container">
          <p className="slide-text1">¿Funciona aunque haya probado muchas cosas antes?</p>
          <p className="slide-text2">Sí. Este programa se basa en un enfoque integral basado en los pilares fundamentales de alimentación, entrenamiento, calidad de sueño y gestión del estrés. Lo que lo hace distinto es el trabajo con acompañamiento 1 a 1, haciendo hincapié en profundidad sobre tus hábitos y tu mentalidad.</p>
        </div>
      </swiper-slide>
      
    </swiper-container>
  );
};

export default FaqCarrousel;