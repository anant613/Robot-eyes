import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const {eyePosition , setEyePosition} = useState({ x : 0 , y : 0})
}

//tracking mouse moment 

useEffect(() => {
   const mousemov = () => {setEyePosition({ x : e.client_X , y : e.client_Y});
  };

   window.addEventListener("mousemove" , mousemov);
   return () => window.removeEventListener("mousemove" , mousemov);
},[])

//constructing
return (
  <div className = "robot">
    <div className = "eyes">
      <div
         className = "pupil"
         style = ({
           transform : `translate`
         })

)