import React from 'react'

export class Person extends React.Component{
  render(){
    return(
       <div className='person'>
        <h1>Detaails for {this.props.name} </h1>
        <ul>
          <li>First name: Abbo </li>
          <li>Last name: Florence </li>
          <li>Age: 22years </li>
        </ul>
       </div> 
    );
}  
} 