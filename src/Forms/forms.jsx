import React from 'react';
import ReactDOM from 'react-dom';
class LoginForm extends React.Component
{
  constructor(){
    super();
    this.state = {username:"",
                  pno:null,
                  phoneerrmsg:"",
                  usererrmsg:""};
  }
  uservalue = (event) =>
  {
    let n = event.target.name;
    let v = event.target.value;
    let err = "";
    if(n==="pno"){
      if(v!=="" && !Number(v))
      {
        err = <strong>Invalid value , Enter the phone number only</strong>
        this.setState({phoneerrmsg:err});
      }
      else{
        this.setState({[n]:v});
        this.setState({phoneerrmsg:""});
      }
    }

    if(n==="username"){
      if(v!=="" && Number(v))
     
      {
        console.log("2")
        err = <strong>Invalid value , Enter the Characters only</strong>
        this.setState({username:""})
        console.log("3")
        this.setState({usererrmsg:err});
        console.log(4)
      }
      else{

        this.setState({[n]:v});
        this.setState({usererrmsg:""})
      }
    }
    
   
    // this.setState({username:"arjun"});
  }
  render()
  {
    return(
    <form>
   
        <h1>Welcome {this.state.username}</h1>
        <h2>Your phone number {this.state.pno}</h2>
        <label for="uname">Username:</label>
        <input type="text"  id="uname" onChange={this.uservalue}  name="username"  />{this.state.usererrmsg}
    
      <br />
        <label for="uname">Phone number:</label>
        <input type="text"  id="pno" onChange={this.uservalue} name="pno"/>{this.state.phoneerrmsg}
        <br />
    
        <label for="pwd">Password:</label>
        <input type="password"  id="pwd" name="pswd" required />
        <br />

        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember" required /> I agree the Terms and Condition.
        </label>
        <br />
 
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
)}
}
export default LoginForm;

