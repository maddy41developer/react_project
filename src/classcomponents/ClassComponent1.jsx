import React from 'react';
import ReactDOM from 'react-dom';
import Myclass2 from './ClassComponent2';
// import Myclass2 from './ClassComponent2';
// import Myclass2 from './ClassComponent2';

class MyclassComp extends React.Component
{
  render()
  {
    return <>
    <h1>Welcome</h1>
   
    <Myclass2 />
    <Mysite />
    </>
    
    
  }
}


class Mysite extends React.Component
{
  render()
  {
    return <h1>ThankYou</h1>
  }
}


export default MyclassComp;
