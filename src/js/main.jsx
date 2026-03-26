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
let mode = 'start';
let inputVal = 0; 
let alertInputVal  = 0; 
let targetAlert = null; 

const startCounter = () => {
  mode = 'start';
};

const stopCounter = () => {
    mode = 'stop';
};

const resetCounter = () => {
    mode = 'reset';
};

const countDownCounter = () => {
    counter = inputVal; 
    mode = 'countDown';
};

const handleInputChange = (e) => {    
    inputVal = parseInt(e.target.value);
};



const handleAlertInputChange = (e) => {    
    alertInputVal = parseInt(e.target.value) || 0;
};

// Use alertInputVal for the alert trigger
const alertCounter = () => {
    targetAlert = alertInputVal;
    alertInputVal = 0; // Clear alert input after setting
};

setInterval(() => {

  let One = Math.floor((counter/1)%10)
  let Two = Math.floor((counter/10)%10)
  let Three = Math.floor((counter/100)%10)
  let Four = Math.floor((counter/1000)%10)
  let Five = Math.floor((counter/10000)%10)
  let Six = Math.floor((counter/100000)%10)


if (counter === targetAlert) {
    alert("Counter has reached "+targetAlert);       
}

if (mode === 'start') {
    counter++;
}
else if (mode === 'stop') {
    counter = counter;    
}
else if (mode === 'reset') {
    counter = 0;
    mode = 'start';
}
else if (mode === 'countDown') {
    if (counter > 0) {        
        counter--;
    }
}

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home digSix={Six} digFive={Five} digFour={Four} digThree={Three} digTwo={Two} digOne={One} 
          onStart={startCounter}
          onStop={stopCounter}
          onReset={resetCounter} 
          onCountDown={countDownCounter}
          onAlert={alertCounter}
          onInputChange={handleInputChange} 
          inputValue={inputVal}
      onAlertInputChange={handleAlertInputChange} // New prop
      alertInputValue={alertInputVal} 
    />
  </React.StrictMode>,
)
  
}, 1000);