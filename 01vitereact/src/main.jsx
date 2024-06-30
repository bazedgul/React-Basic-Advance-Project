import ReactDOM from 'react-dom/client'
// import React from 'react'
import App from './App'

// eslint-disable-next-line react-refresh/only-export-components
// function MyApp (){
//   return(
//   <div>
//     <h1>My App</h1>
//   </div>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

// const anotherElement = (
//  <a href='https://google.com' target='_blank' >visit Google</a>
// )
// const fullName = "Bazed Gul"
// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target : '_blank',
//     },
//     'click me to        visit Google',
//     // fullName
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  //  reactElement,
  //  anotherElement
  // reactElement
  <App />
)
