import React, { useState } from "react";

// React Hooks
// React useStates
function FavoriteColor() {
  const [color, setColor] = useState(""); //Setting usestate for color
  const [text, setText] = useState("");   //Setting usestate for text which is the targeted value
  const [showText, setShowText] = useState(false);  //Setting usestate to dislay the value on click
  return (
    <>
     
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
      <button type="button" onClick={() => setColor("red")}>Red</button>
      <button type="button" onClick={() => setColor("pink")}>Pink</button>
      <button  type="button" onClick={() => setColor("green")}>Green</button>

      <h1>My favorite color is {color}!</h1>
      <input type="text" 
           value={text}
            onChange={(e)=>setText(e.target.value)}/>
             <span>This is my{text}</span><br></br>
       <button onClick={()=>setShowText(true)}>Submit</button> 
</>
  )
}
function Cars() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
    const[car, setCar] = useState({brand:"Ford", model:"Mustag", year:"1998"})
    console.log("Car state", car)
    return (
      <><h1>My {brand}</h1><p> It is a {color} {model} from {year}.</p>
      <button onClick={()=>setCar({year:"1997"})}>Change color</button>
      </>
    )}

    // Exercise


    
    export {FavoriteColor,Cars}