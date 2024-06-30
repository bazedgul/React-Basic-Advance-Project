import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);
  // let counter = 5;

const AddValue = () =>{
  if(counter < 20 && counter <= 20 ){
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
   
  }else{

    alert("you value Going Greater Than 20")
  }
 
}
const RemoveValue = () =>{
 
  if(counter <= 0){
    alert("Your Value is going to Negative")
  }else{
    setCounter(counter -1)
    setCounter(counter -1)
    setCounter(counter -1)
    setCounter(counter -1)
  }
}

  return (
    <>
     <h1>CHAI AUR REACT</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={AddValue} >Increase Value</button>
     <br />
     <button onClick={RemoveValue} >Decrease Value</button>
    </>
  )
}

export default App
