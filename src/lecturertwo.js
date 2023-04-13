import React, { Component } from "react";
// Component with props...just props coz it is a function Component
 function Car1(props) {
    return (
  <div>
  <h2>I am a {props.color} Car!</h2>
   <h2>I am a { props.brand } car!</h2>
  </div>
  );
  }
//   Create a variable named carName and send it to the Car component:
function Car2(props) {
  return <h2>I am a { props.brand } car!</h2>;
}
function Garage() {
    const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car2 brand={carName} />
    </>); }

// Create an object named carInfo and send it to the Car component:
function Car3(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}
function Garage1() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car3 brand={carInfo} />
    </>); }

// Create a variable named name and pass it to the Person component.
function Person(props) {
  return <h2>I'm {props.name}!</h2>;
}
function Greeting() {
  const name1 = "Jesse"
  return (
    <>
      <h1>Hello!</h1>
      <Person name = {name1}/>
    </>); }

  

  const MyFunction1 = ()=>{
    return(
        <h2>Hello...this is a function Component</h2>
    )
}
 const MyFunction2 = ()=><h2>Hello...this is another kind of function Component</h2>
 class Lecturertwo extends React.Component{
    render(){
        return(
         
            <div>
            <input type="text" />
                <p>I am a paragraph.</p>
                <p>I am a paragraph too.</p>
                </div>
            
        );
    }
}
// named exports
export  {Lecturertwo, MyFunction1, MyFunction2,Car1,Car2,Garage1,Greeting} 