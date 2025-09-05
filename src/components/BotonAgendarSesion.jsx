export default function ScheduleSessionButton({ onClick }) {
  return (
    <div className="btn-container">
      <button 
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
          document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="btn-agendar"
      >
        Agendá una sesión
      </button>
    </div>
  );
}