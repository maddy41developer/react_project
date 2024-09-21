import React from 'react';  
import ColorSchemesExample from '../Bootstrap/navbar';
  
class Lifecycle extends React.Component {  
   constructor() {  
      super();  
      this.state = {value: "Welcome",name : "Guys"};  
      
   }  
   componentWillMount() {  
    alert ("Learn ReactJS Lifecycle");
 }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h2>{this.state.value}{this.state.name}</h2>  
             <h2 id = "element"></h2>
             <br/>
             <button type="button" onClick = {this.changevalue}>Click Here!</button>  
             <button type="button" onClick = {this.deleteheader}>Delete header</button>          
         </div>  
      );  
   }  

   changevalue = () => {
    this.setState({value : "Learn ReactJS Event"})
   }

   componentDidMount(){
    {
        setTimeout(() => {
            this.setState({value : "Thank you"})},5000)
        }
    }
    componentWillUpdate(){  
        alert("Will updated! are you sure?");
     }  
    componentDidUpdate(){
       document.getElementById('element').innerHTML = "New value updated successfully"+' '+this.state.value;
    }
    shouldComponentUpdate(){
        return true;
    }
//    //  componentWillUnmount(){
//    //      alert("Header Deleted");
//    //  }
 

  
   deleteheader =()=>{
    this.setState({value:false,name:false});
   }
   
     
}  
export default Lifecycle;  

// event handling
class Event12 extends React.Component {
   constructor(){
       super();
       this.state = {value:"Welcome",name: "Guys"}
   }

   changevalue = (a) =>{
       console.log("done")
       this.setState({value : a})
   }
   render()
   {
       return <div><h1>{this.state.value} {this.state.name}</h1>
       <br/>
       <button type="button" onClick={this.changevalue.bind(this,'Hello12')}>Click</button>
       {/* <button type="button" onClick={this.deleteheader}>delete</button> */}

       </div>
   }
  }



// export default Event12