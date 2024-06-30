import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
   <div className='w-full h-screen duration-200 '
   style={{backgroundColor: color}}
   >

  
<div className='fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2'>

<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl '>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
  style={{backgroundColor:"green"}} onClick={() => setColor("green")}>Green</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>Blue</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"orange"}} onClick={() => setColor("orange")}>Orange</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
  style={{backgroundColor:"purple"}} onClick={() => setColor("purple")}>Purple</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"pink"}} onClick={() => setColor("pink")}>Pink</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
  style={{backgroundColor:"black"}} onClick={() => setColor("black")}>Black</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"#3DC2EC"}} onClick={() => setColor("#3DC2EC")}>Sky</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"#D10363"}} onClick={() => setColor("#D10363")}>Maroon</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"#402E7A"}} onClick={() => setColor("#402E7A")}>Navy</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"#219C90"}} onClick={() => setColor("#219C90")}>Teal</button>
 
  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"#686D76"}} onClick={() => setColor("#686D76")}>Grey</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"#ECB176"}} onClick={() => setColor("#ECB176")}>Beige</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"#15F5BA"}} onClick={() => setColor("#15F5BA")}>Mint</button>

  <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
   style={{backgroundColor:"#DBB5B5"}} onClick={() => setColor("#DBB5B5")}>Peach</button>

</div>

</div>
   </div>

    
  )
}

export default App
