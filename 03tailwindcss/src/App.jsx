import './App.css'
import Cards from './Components/Cards'

function App() {
// let myObj = {
//   name: "John",
//   age: 30,
// }

// let arr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl mb-4'>TailwindCss Test</h1>

      {/* <Cards name="Bazed" someObject = {myObj} Array = {arr} /> */}
      <Cards UserName="Bazed" btn ='click me' />
      <Cards UserName="gul" btn ='visit me' />

    </>
  )
}

export default App
