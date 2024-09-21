import React from 'react';  
import ReactDOM from 'react-dom';  
import './LoginForm.css'
function LoginForms() {


    return (
      <div class = "center">
        <div class="row">
          <div class="col-md-8">
           <form
                class="justify-content-center"
              >
                <div class="form-group">
                  <h1 style={{color:"blue",textAlign:"center"}}>Login</h1>
                  <label class="skills" for="Subject">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    required 
                  />
                </div>
                <div class="form-group">
                  <label class="skills" for="Body">
                    Password
                  </label>
                  <input type="password" id="pwd" class="form-control" rows="5" required />
                </div><br/>
                <input
                  type="submit"
                  value="Login"
                  id="navigation"
                  class="btn btn-primary"
                />
              </form>
            </div>
      </div>
      </div>
    );
  };

export default LoginForms;


