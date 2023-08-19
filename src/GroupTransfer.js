import React, { Component } from 'react'
import './group.css'
export default class GroupTransfer extends Component {
   
  arr1=['Ajax','JQuery','MooTool','Javascript','Dojo','Prototype'];
  arr2=['ASP.NET','C#','VB.NET','Java','PHP','Python'];
    add_remove=()=>{
       for (var option of document.getElementById('grp1')){
        if(option.selected){
            this.arr2=[...this.arr2,option.value]; 
        }
       }
       this.arr1=this.arr1.filter((e)=>{return !this.arr2.includes(e)})
       for (var option of document.getElementById('grp2')){
        if(option.selected){
            this.arr1=[...this.arr1,option.value]; 
        }
       }
       this.arr2=this.arr2.filter((e)=>{return !this.arr1.includes(e)})
       document.getElementById('grp1').innerHTML="";
       this.arr1.forEach((val,i)=>{  document.getElementById('grp1').innerHTML+=`<option id=${i}>${val}</option>`})
       document.getElementById('grp2').innerHTML="";
       this.arr2.forEach((val,i)=>{  document.getElementById('grp2').innerHTML+=`<option id=${i}>${val}</option>`})
       
    }

  render() {
    return (
    <>
        <h1 className='grptrans'>GroupTransfer</h1>
        <center>
        <div className='grp'>
            <div className='div1'>
                <h5>Group1:</h5>
               <select id='grp1'multiple>
                 <option>Ajax</option>
                 <option>JQuery</option>
                 <option>MooTool</option>
                 <option>Javascript</option>
                 <option>Dojo</option>
                 <option>Prototype</option>
               </select>
            </div>
            <div className='send'>
                <button type="button" onClick={this.add_remove}>&#8250;</button>
                <button type="button" onClick={this.add_remove}>&#8249;</button>
            </div>
            <div className='div2'>
                <h5>Group2:</h5>
            <select  id='grp2' multiple>
                 <option>ASP.NET</option>
                 <option>C#</option>
                 <option>VB.NET</option>
                 <option>Java</option>
                 <option>PHP</option>
                 <option>Python</option>
               </select>
            </div>
        </div>
        </center>
    </>
    )
  }
}
