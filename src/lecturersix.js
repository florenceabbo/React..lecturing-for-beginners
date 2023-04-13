import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


// Handling usestate effects
function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);   //This keeps running endlessly coz theres no dependency
   },[]);     //This  runs only on the first render when an empty array is added []
  return <h1>I've rendered {count} times!</h1>;
}
//Component mounting simpliy means rendering
function Counter() {
    const [count1, setCount1] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
      setCalculation(() => count1 * 2);
    }, [count1]); // <- add the count variable here
    return (
      <><p>Count: {count1}</p>
  <button onClick={() => setCount1((c) => c + 1)}>+</button>
  <p>Calculation: {calculation}</p></> );}
export {Timer,Counter}
