// Here this is commented for intro

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './projects/App2';
import App3 from './ecommerce_project/App2';
import Api_App from './Api_App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <App3 />
  // <Api_App />
  //  </React.StrictMode>
);

// rework

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// This will be intro
// import React from 'react';
// import ReactDOM  from 'react-dom';
// class Demo  {
//   addition()
//   {
//     var a = 15;
//     var b = 10;
//     document.getElementById('root').innerHTML = a+b;
//   }
//   subtraction()
//   {
//     var a = 5;
//     var b = 10;
//     var c = a-b;
//     document.getElementById('rootone').innerHTML = c;
//   }
// }
// var mydemo = new Demo();
// mydemo.addition();
// mydemo.subtraction();

// import React from 'react';
// import ReactDOM  from 'react-dom';
class Demo  {
  addition()
  {
    var a = Number(prompt("enter value"))
    var b = Number(prompt("enter value"))
    var c = a+b
    console.log("Done");
    document.getElementById('root0').innerHTML = c;
   
  }
  subtraction()
  {
    var a = Number(prompt("enter value"))
    var b = Number(prompt("enter value"))
    var c = a-b
    console.log("Done");
    document.getElementById('root1').innerHTML = c;
   
  }
 multiplication()
  {
    var a = Number(prompt("enter value"))
    var b = Number(prompt("enter value"))
    var c = a*b
    console.log("Done");
    document.getElementById('root2').innerHTML = c;
   
  }
  division()
  {
    var a = Number(prompt("enter value"))
    var b = Number(prompt("enter value"))
    var c = a/b
    console.log("Done");
    document.getElementById('root3').innerHTML = c;
   
  }
}
var mydemo = new Demo();
mydemo.addition();
mydemo.subtraction();
mydemo.multiplication();
mydemo.division();