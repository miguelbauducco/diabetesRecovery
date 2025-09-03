import { useEffect, useState } from "react";
import vector from "../Assets/img/vector.png"

export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="scroll-top-btn" onClick={scrollUp}>
        <img src={vector} style={{width:"30%", height:"auto"}} alt="scroll-btn" />
      </button>
    )
  );
}
