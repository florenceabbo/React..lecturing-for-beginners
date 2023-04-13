import React,{Component} from "react";
import { Car1 } from "./lecturertwo";
// comp1
function MissedGoal() {
    return <h1>MISSED!</h1>;
  }
//   comp2
  function MadeGoal() {
    return <h1>Goal!</h1>;
  }
   // Parent component
  function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  }
//   Using the ternary operator
function Goal1(props) {
    const isGoal = props.isGoal;
    return (
      <>
        { isGoal ? <MadeGoal /> : <MissedGoal /> }
      </>
    );}
// Using the logical operator
  function Garage(props) {
    const cars = props.cars;
    return (
      <>
        <h1>Garage</h1>
        {cars.length > 0 &&
          <h2>You have {cars.length} cars in your garage.</h2>
        }
      </> );
  }
  // Accessing each item one afterthe other using the map mettoh()
  function Garage2() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>{cars.map((a) => <li><h1>i am in your garage am a {a}</h1></li>)}</ul>
      </>
    );
  }
  function Car2(props) {
    return <h2><ul><li>I am a { props.brand } car! and my id is { props.id }</li></ul></h2>;
  }
function Garage3() {
  const cars = [{ id: 1, brand: 'Ford' }, { id: 2, brand: 'BMW' }, { id: 3, brand: 'Audi' }];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car2 id={car.id} brand={car.brand} />)}
      </ul>
    </>
  ); }
  
 
  // named exports
  export {Goal, Garage, Goal1, Garage2, Garage3}  









