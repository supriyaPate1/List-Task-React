import React, { Component } from 'react'
import './product.css'
export default class Poducttable extends Component {
 state={
  validation:"",
 }
  addProduct=()=>{
    var id=document.getElementById('id').value;
    var name=document.getElementById('name').value;
    var price=document.getElementById('price').value;
    
//------checking validation-------
     if(id==""||isNaN(id)){
			this.setState({
        validation:"ID field is empty or is not a number."
      })
			}
      else if(name==""||!isNaN(name)){
        this.setState({
          validation:"name field is empty or is not a string."
        })
			}
			else if(price==""||isNaN(price)){
        this.setState({
          validation:"Price field is empty or is not a number."
        })
			}
     
			else{

    var field=` <tr>
    <th id="product">${id}</th>
    <th id="product">${name}</th>
    <th id="product">${price}</th>
    </tr>  `;
    var tr=document.createElement("tr");
    tr.innerHTML=field; 
   document.getElementById('listPRO').append(tr)
  }
  document.getElementById('id').value="";
  
document.getElementById('name').value="";

document.getElementById('price').value="";
}
  render() {
    return (<>
      <h1 id='prohead'>Product Table</h1>
         <div className='main1'>
           <form className='form1'>
            <label>Enter ID:</label>
            <input id='id' type='text' placeholder='Enter ID' ></input><br></br>
            <label>Enter Name:</label>
            <input id='name' type='text' placeholder='Enter Name' ></input><br></br>
            <label>Enter Price:</label>
            <input id='price' type='text' placeholder='Enter Price' ></input><br></br>
            <button id='click' type='button' onClick={this.addProduct}> Add Products</button>
            <p>{this.state.validation}</p>
           </form>
         </div>
        <div className='main2' >
          <table id="listPRO">
            <tr>
                <th id="product">Product Id</th>
                <th id="product">Product Name</th>
                <th id="product">Product Price</th>
                
            </tr>  
          </table> 
      </div>   
      </>

    )
  }
}
