# 🤖 Talking Robot with Eye Movement

This project is an interactive **JavaScript Robot** that can talk using the **Web Speech API** and move its eyes according to the user’s mouse cursor using **DOM manipulation**. Below is a complete breakdown of the project in bullet points for easy understanding.

---

## 📝 Project Overview
- A fun and lightweight project built with **HTML, CSS, and JavaScript**.  
- The robot has **two key features**:  
  - 🔊 It can **speak** any text using the `SpeechSynthesisUtterance` API.  
  - 👀 Its **eyes follow your mouse cursor**, making it appear alive and interactive.  
- No external libraries are required—everything is powered by browser-native APIs.  
- A beginner-friendly project that demonstrates **DOM interaction, events, and browser APIs**.

---

## ✨ Features
- **Talking Ability**  
  - Uses `SpeechSynthesisUtterance` to generate real-time speech.  
  - Can speak any text you pass into the `speak()` function.  
  - Customizable voice, pitch, and speed settings.  
- **Eye Movement**  
  - Tracks mouse movements with the `mousemove` event.  
  - Calculates the angle between the mouse pointer and the center of each eye.  
  - Moves pupils slightly in the pointer’s direction using `transform: translate()`.  
- **Customizable Design**  
  - Eyes, face, and speech options can be styled and modified in CSS and JavaScript.  
  - Extendable with more body parts like mouth, ears, and shoulders.  

---

## 🚀 How It Works
- **DOM Manipulation**  
  - DOM (Document Object Model) represents the HTML as a tree-like structure.  
  - JavaScript selects eye elements with `document.querySelectorAll(".eye")`.  
  - `getBoundingClientRect()` is used to find each eye’s center.  
  - Pupils are translated in the direction of the mouse pointer.  
- **Speech API**  
  - `SpeechSynthesisUtterance` converts text to speech.  
  - The browser’s speech engine handles the audio output.  
  - Function Example:  
    ```js
    function speak(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
    speak("Hello, I am your robot!");
    ```

--