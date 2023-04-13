
import './App.css';
import Shopp from './shoppinglist'
import{Person} from './person'
import{Car} from './car'
import{MyForm} from './forms'
import {Goal, Garage, Goal1, Garage2, Garage3} from './lecturerthree'
import { Lecturertwo, MyFunction1,MyFunction2,Car1,Car2, Garage1 ,Greeting} from './lecturertwo';
import {FavoriteColor, Cars} from './lecturerfour'
import { Reacthooks,Cars1,Cars2, Cart} from './trial';
import {  Timer,Counter } from './lecturersix';


// const Person = () =>{
//   return(
//     <div>
//       <h1>First name:Florence</h1>
//       <h2>Last name:Abbo</h2>
//       <h2>Age:30</h2>
//     </div>
//   )
// }

function App() {
  const carName ="Ford"
  return (
    <div className="App">
     <h1>Hello World welcome to my App</h1>
     <button className='button1' onClick={()=> alert("Let's get started")}>Lets get started</button><br></br>
     <button className='button2'  onClick={()=> console.log("Let's get started")}>We are ready</button>
     <Shopp name = 'Florence'/>
     {/* <Person name = 'Abbo Florence' /> */}
     {/* <Car name = 'Florence' />    */}
     {/* <>
<input type="text" />
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </> */}
{/* <Lecturertwo/>
<MyFunction1/>
<MyFunction2/>
<Car1 color= "red" brand="Ford"/>
<Car2 brand={carName} />
<Garage1/> */}

{/* <Greeting/>
<Goal isGoal = {true}/>
<Garage cars = {['Mustag','Alphad','Mycar']}/>
<Goal1 isGoal = {false}/>
<Garage2/> */}
{/* <Garage3/>
<MyForm/> */}
{/* <FavoriteColor/> */}
{/* <Cars/> */}
<Reacthooks/>
<Cars1/>
<Cars2/>
<Cart/>
<Timer/>
<Counter/>
    </div>
  );
}



export default App;
