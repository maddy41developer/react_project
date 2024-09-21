import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import  { CustomNavbar } from "../navbar/navbar";
// import { baseURL } from "../../services/api_url";


export const AddUser = () => {
      const initialUserState = {
        id: null,
        user_name: "",
        email: "",
        password: "",
        firstname:""
      };
      const [user, setUser] = useState(initialUserState);
      console.log(user)
      // const [image, setImage] = useState(null);
      // const [imagepath,setImagepath] = useState("")
      const [submitted, setSubmitted] = useState(false);
      const navigate = useNavigate()
      const handleMenuChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };
      const submitUser = () => {
        // let data = {
        //   name: menu.name,
        //   description: menu.description,
        //   price: menu.price,
        // };
        console.log(user)
        axios.post("http://127.0.0.1:8000/add_user",user).then((response) => {
            setSubmitted(true);
            // navigate("/fetch_user_list")
            console.log(response.data);
            navigate("/")
          })
          .catch((e) => {
            console.error(e);
          });
      };
      const newUser = () => {
        setUser(initialUserState);
        setSubmitted(false);
      };
    return (
      <>
        <div className="submit-form">
          {submitted ? (
            <div>
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert">
                User Added!
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button className="btn btn-success" onClick={newUser}>Add</button>
            </div>
          ):(<div>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input type="text" className="form-control" id="name" required value={user.name} 
                onChange={handleMenuChange} name="user_name"/>
              </div>
              <div className="form-group">
                <label htmlFor="description">Email</label>
                <input type="text" className="form-control" id="description" required value={user.email}
                  onChange={handleMenuChange} name="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="price">Firstname</label>
                <input type="text" className="form-control" id="price" required value={user.firstname} 
                onChange={handleMenuChange} name="firstname" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Password</label>
              <input type="password" className="form-control" id="price" required value={user.password}
              onChange={handleMenuChange} name="password" />
        </div>
              <button onClick={submitUser} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
        </>
      );
    };