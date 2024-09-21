import React from 'react';

// class Reactstate extends React.Component{
//     constructor(){
//       super();
//       this.state={initialvalue:"welcome",name:"guys"}
//     }

//     render(){
//       return <div>
//         <h1>{this.state.initialvalue}<span> </span>{this.state.name}</h1>
        
//       </div>
//     }
//   }




class Reactstate extends React.Component{
  constructor(){
    super();
    this.state={initialvalue:"welcome",name:"guys"}
  }
  changevalue = () =>
  {
    this.setState({initialvalue:"Thanks for watching"});
  }
  render(){
    return <div>
      <h1>{this.state.initialvalue}<span> </span>{this.state.name}</h1>
      <br/>
      <button type="button" onClick={this.changevalue}>Exit</button>
      
    </div>
  }
}

export default Reactstate

