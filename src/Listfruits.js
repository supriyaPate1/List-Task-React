import React, { Component } from 'react'
import './listfruits.css'
export default class Listfruits extends Component {
    fruits=[
        "Mango",
        "Apple",
        "Guava",
        "Banana",
        "Strawberry",
        "Papaya",
        "Pineapple",
        "Melon",
        "Watermelon"
    ]
  render() {
    return (
        <>
        <div className='fruit'>
            <h1>List of fruits using map function.</h1>
            
                {this.fruits.map((val)=>{return <ul><li>{val}</li></ul>})} 
            
      </div>
      </>
           
    )
  }
}
