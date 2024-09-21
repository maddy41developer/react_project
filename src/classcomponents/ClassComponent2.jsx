import React from 'react';
import ReactDOM from 'react-dom';
import Myclass3 from './ClassComponent3';
// import Myclass3 from './ClassComponent3';

class Myclass2 extends React.Component
{
  render()
  {
    return <>
    <h1>Class Component2</h1>
    <h1>From second file</h1>
  <Myclass3 />
    </>
  }
}

// ReactDOM.render(<Mynewwebsite />,document.getElementById('root'));
export default Myclass2;