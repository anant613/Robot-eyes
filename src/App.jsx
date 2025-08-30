import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [emotion, setEmotion] = useState("neutral"); // neutral | happy | angry | surprised

  // Eye tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setEyePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Blinking every few seconds
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Emotions changing randomly
  useEffect(() => {
    const emotions = ["neutral", "happy", "angry", "surprised"];
    const emotionInterval = setInterval(() => {
      setEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
    }, 7000);
    return () => clearInterval(emotionInterval);
  }, []);

  // Function: make robot speak
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1; // tone
    utterance.rate = 1; // speed
    utterance.volume = 1; // volume
    window.speechSynthesis.speak(utterance);

    // Animate mouth while speaking
    setIsTalking(true);
    utterance.onend = () => setIsTalking(false);
  };

  // Robot automatically talks every 8 seconds
  useEffect(() => {
    const talkInterval = setInterval(() => {
      const phrases = [
        "A library that talks back",
        "Every book every idea, in one voice",
        "The wisdom of billions, shaped for one",
        
        "Ask. Think. Answer. Evolve",
        
        "The world’s knowledge — distilled for you.",
        
        "Data made human.",
        
        "Where learning meets lightning speed.",
        
        "From neurons to silicon — and back.",
        
        "Infinite knowledge, instant answers.",
        
        "The sum of human intelligence, personalized."
      ]

      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      speak(randomPhrase);
    }, 8000);

    return () => clearInterval(talkInterval);
  }, []);

  return (
    <div className="robot">
      <div className="head">
        {/* Eyes */}
        <div className={`eye left-eye ${isBlinking ? "blink" : ""}`}>
          <div
            className="pupil"
            style={{
              transform: `translate(${eyePos.x / 80}px, ${eyePos.y / 80}px)`,
            }}
          ></div>
        </div>
        <div className={`eye right-eye ${isBlinking ? "blink" : ""}`}>
          <div
            className="pupil"
            style={{
              transform: `translate(${eyePos.x / 80}px, ${eyePos.y / 80}px)`,
            }}
          ></div>
        </div>

        {/* Mouth */}
        <div className={`mouth ${isTalking ? "talking" : ""} ${emotion}`}></div>

        {/* Side Lights */}
        <div className="side-light left"></div>
        <div className="side-light right"></div>
      </div>
    </div>
  );
}

export default App;