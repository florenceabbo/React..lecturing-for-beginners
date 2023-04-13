import React, { Component } from 'react'

// Use of props with the Component classes
export class Car extends React.Component{
    render(){
        return(
        <div className='car'>
         <h1> Details about {this.props.name} car</h1>
         <ul>
            <li>Owner: Florence</li>
            <li>Name: Prado</li>
            <li>Color: Blue</li>
            <li>Insurance:Jubilee</li>
         </ul>
        </div>
        );
    }
} 