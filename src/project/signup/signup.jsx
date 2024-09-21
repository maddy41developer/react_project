import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignupComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
//  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log(value);
    setFormData({
      ...formData,
      
      
      [name]: value,
      
    });
    
  };

const handleSubmit =  (e) => {
  e.preventDefault();
  console.log(formData)
  axios.post("http://localhost:3000/datas",formData)
  .then((res)=>{
    console.log(res);
    console.log("Done")
   
  })
//   navigate("/shop");
  alert("Data saved");
  console.log("ok");
};


  return (
    <div className="login_container">
      <div className="login">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="login_fields">
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange}  />
  
            <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          </div>
          <button type="submit">Continue</button>
        </form>

        <p className="login_acc">
          Already have an Account?{' '}
          <Link style={{ textDecoration: 'none', color: '#ff4141' }} to="/">
            login here
          </Link>
        </p>
        <div className="signin">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;


