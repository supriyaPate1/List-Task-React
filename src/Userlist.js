import React, { Component } from 'react'
import './userlist.css'
export default class Userlist extends Component {
    state={
           validation:"",
        }
        addListItem=()=>{
         
          var item=document.getElementById('item').value;
          
         //------checking validation-------              
         if(item==""||!isNaN(item)){
            this.setState({
            validation:"Enter item."
            })
         }
           
         else{
            this.setState({
                validation:""
            })
          var field=` <tr>       
          <th id="product"><a class='cancel'id='cancel' href='#'>X</a>${item}</th>
          </tr>  `;
          var tr=document.createElement("tr");
          tr.innerHTML=field; 
          document.getElementById('listItem').append(tr)
         }       
          document.getElementById('item').value="";
        }
        removeItem=(event)=>{
           var click=event.target;
           if(click.className==='cancel'){
            click.parentNode.remove();
           }
        }
        render() {
          return (<>
            <h1 id='listhead'>User List</h1>
            <div className='border'>
               <div className='list'>
                 <div>
                    <input id='item' type='text' placeholder='Enter item' ></input>
                    <button id='click' type='button' onClick={this.addListItem}> Add</button>
                    </div>
                    <p>{this.state.validation}</p>
                </div>
                <div className='list1' >
                    <table id="listItem" onClick={this.  removeItem}>
                    <tr>
                        <td id="product"></td>                     
                    </tr>  
                    </table> 
                </div>   
            </div>
            </>
      
          )
        }
}
