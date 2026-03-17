import { useState } from 'react'
import './App.css'



function App() {
 const name="Shambhwi";
 const qualification="btech 3rd yr student"
 let y=30;
 y=9;
 y=3;
 let x=2;
 function fun(){
  return "fun called";
}
function sum(a,b){
  return a+b;
}
function calc(a,b,op){
  if(op=='+'){
    return a+b;
  }
  if(op=='-'){
    return a-b;
  }
  else {
    return a*b;
  }
}

  return (
    <div align="left">
     <h1>jsx with curly braces</h1>
     <h2>1 Use variable with jsx</h2>
     <h3> My name is {name}</h3>
     <h3>Qualifications are i am a {qualification}</h3>
     <h3>value of y is {y}</h3>
     <h3>sum of x and y is {x+y}</h3>
     <h2>2 Use function with jsx</h2>
     <h3>{fun()}</h3>
     <h3>Eample of parameterised function is {sum(12,3)}</h3>
     <h3>{calc(2,3,"+")}</h3>
     <h3>{calc(3,3,"-")}</h3>
    </div>
  )
}

export default App
