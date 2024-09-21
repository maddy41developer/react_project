import React from 'react';
import ReactDOM  from 'react-dom';
class Demo  {
  addition()
  {
    var a = 15;
    var b = 10;
    var c = a+b
    console.log("Done");
    document.getElementById('root').innerHTML = a+b;
   
  }
}
var mydemo = new Demo();
mydemo.addition();
// mydemo.subtraction();