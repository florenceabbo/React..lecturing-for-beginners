import React, { useState } from "react";

// React Hooks
// React useStates

function Reacthooks() {
  const [color, setColor] = useState(""); //Setting usestate for color
  const [text, setText] = useState("");   //Setting usestate for text which is the targeted value
  const [showtext, setShowText] = useState(""); //Setting usestate to dislay the value on click
  return (
    <div>
      <h1>My favorite color is {color}</h1>

      <button type="button" onClick={(e) => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={(e) => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={(e) => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={(e) => setColor("blue")}>
        Blue
      </button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={(e) => setShowText(true)}>
        Submit
      </button>
      {showtext? <span>This is my {text}</span>:null}<br/>

    </div>
  );
}
// Setting usestate for each attribute of a car
function Cars1() {
    const [brand, setBrand] = useState("Ford");
   const [model, setModel] = useState("Mustang");
   const [year, setYear] = useState("1964");
   const [color, setColor] = useState("red");
   return (
     <><h1>My {brand}</h1><p> It is a {color} {model} from {year}.</p></>
   )}
// Setting usestate for car having all its attributes in a single state
   function Cars2() {
    const [car, setCar] = useState({  brand: "Ford", model: "Mustang", year: "1964", color: "red" });
    return (
      <>
         <h1>My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}. </p>
        <button onClick={()=>setCar({color:"Green", year:"1997"})}>Change color</button>

 
      </>
    ) }
    function Cart() {
        const [car, setCar] = useState({  brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
     
   
     function updateColor(){
       setCar(previousState => {
         return { ...previousState, color: "pink"}
       });
     }
   
     return (
       <>
         <h1>My {car.brand}</h1>
         <p>
           It is a {car.color} {car.model} from {car.year}.
         </p>
         <button
           type="button"
           onClick={updateColor}
         >Pink</button>
       </>
     )
   }
    
export { Reacthooks, Cars1,Cars2,Cart };

