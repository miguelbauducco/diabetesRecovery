import { useEffect, useState, useRef } from "react";
import vector from "../Assets/img/vector.png";

export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);


  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button className="scroll-top-btn" onClick={scrollUp}>
          <img
            src={vector}
            style={{ width: "15px", height: "auto" }}
            alt="scroll-btn"
          />
        </button>
      )}

      <button className="scroll-top-btn-mobile" onClick={scrollUp}>
        <img src={vector} alt="scroll-btn" />
      </button>
    </>
  );
}