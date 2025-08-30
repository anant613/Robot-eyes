import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setEyePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div className="robot">
      <div className="eye left-eye">
        <div
          className="pupil"
          style={{
            transform: `translate(${eyePosition.x / 50}px, ${eyePosition.y / 50}px)`,
          }}
        ></div>
      </div>
      <div className="eye right-eye">
        <div
          className="pupil"
          style={{
            transform: `translate(${eyePosition.x / 50}px, ${eyePosition.y / 50}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
