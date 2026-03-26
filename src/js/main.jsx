import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0;

setInterval(() => {

  let One = Math.floor((counter/1)%10)
  let Two = Math.floor((counter/10)%10)
  let Three = Math.floor((counter/100)%10)
  let Four = Math.floor((counter/1000)%10)

  counter++

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home digFour={Four} digThree={Three} digTwo={Two} digOne={One} />
  </React.StrictMode>,
)
  
}, 1000);