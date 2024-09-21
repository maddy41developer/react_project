import React from 'react';
import ReactDOM from 'react-dom';
 
// without using jsx code
// const a = React.createElement('h1',{},"Hello world");
// ReactDOM.render(a,document.getElementById('root'));
    

// with using jsx code
// const b = <h1>Helloworld</h1>
// const c = <div>
//   <h1>React Onnum Kastam illa</h1>
//   <h2>Purinchukitta easy than</h2>
// </div>

// ReactDOM.render(c,document.getElementById('root'));

// inline style
var mystyle = {
      color:'blue',
         textAlign : 'center'
     }
    
     const myele = <div style={mystyle}>
      <h1>Welcome</h1>
       <h2>Hello World</h2>
    </div>
    
ReactDOM.render(myele,document.getElementById('root'));


// main index file
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'
;
import Mynewwebsite from './App';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Mynewwebsite />
    {/* <Footer /> */}
  </React.StrictMode>
);