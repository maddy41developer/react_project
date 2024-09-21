import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { baseURL } from "../../services/api_url";
// import { baseURL, headers } from "./../services/menu.service";
export const UpdateMenu = () => {
    console.log("updated2")
    const location = useLocation()
    const navigate = useNavigate()
    const id = location?.state?.id
    // var id = props.id
    console.log("this",id)
  const initialMenuState = {
    id: null,
    name: "",
    description: "",
    price: 0,
  };
  // let { id } = useParams();
  const [currentMenu, setCurrentMenu] = useState(initialMenuState);
  const [submitted, setSubmitted] = useState(false);
  const countRef = useRef(0);
  useEffect(() => {
    retrieveMenu();
  },[]);
  const handleMenuChange = (e) => {
    const { name, value } = e.target;
    setCurrentMenu({ ...currentMenu, [name]: value });
  };
  const postdata = {'id' : id}
  console.log(postdata)
  const retrieveMenu = () => {

    // debugger
    axios.post(`${baseURL}/get_menu_detail`,{"id" : id})

      .then((response) => {
        const data = response.data
        // console.log(data.data)
        // console.log("datas",data[0])
        var get_data = data.data[0]
        console.log("get_data",get_data)
        // console.log(get_data.id,get_data.name,get_data.price,get_data.description)
        const datas = {
          'id' : get_data.id,
          'name' : get_data.name,
          'price' : get_data.price,
          'description' : get_data.description
        }
        // console.log(typeof(data))
        // console.log("datas")
        // console.log("datas",datas)
        // console.log(currentMenu)
        setCurrentMenu(datas);
        console.log("menu")
        
      })
      .catch((e) => {
        console.error(e);
      });
  };
  console.log(currentMenu);
  const updateMenu = () => {
    let data = {
      id : currentMenu.id,
      name: currentMenu.name,
      description: currentMenu.description,
      price: currentMenu.price,
    };
    axios.post(`${baseURL}/update_menu_detail`, data)
      .then((response) => {
        // setSubmitted(true);1
        // console.log(response.data);
        navigate('/fetch_menu')
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const newMenu = () => {
    setCurrentMenu(initialMenuState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
    {submitted ? (
      <div>
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert">
          Menu Updated!
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <button className="btn btn-success" onClick={newMenu}>
          Update
        </button>
      </div>
    ) : (
      <div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={currentMenu.name}
            onChange={handleMenuChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            value={currentMenu.description}
            onChange={handleMenuChange}
            name="description"
            default
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            required
            value={currentMenu.price}
            onChange={handleMenuChange}
            name="price"
          />
        </div>
        <button onClick={updateMenu} className="btn btn-success">
          Submit
        </button>
      </div>
    )}
  </div>
  );
};