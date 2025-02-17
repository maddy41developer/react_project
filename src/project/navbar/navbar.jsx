import React, {  useState } from 'react';
import './navbar.css'
import { Link} from 'react-router-dom'
 import { FaShoppingCart, FaUser } from "react-icons/fa";
 

const NavbarComponent = () => {
  
    const [menu,SetMenu]=useState("");
    
    const username = localStorage.getItem('username');
   
  return (
    <div className='nav_bar'>
    <div className="nav_container">
        <div className="nav_left">
           <div className='brand'>
           <div  >
         
           </div>
            <p className="name">SHOPPER</p>
            </div>
            <ul className="nav_menu">
                    <li onClick={()=>{SetMenu("shop")}}><Link style={{textDecoration:"none" ,color:'#ddd'}}  to={"/shop"}>shop</Link> {menu==="shop"?<hr />:null} </li>
                    <li onClick={()=>{SetMenu("mens")}}><Link style={{textDecoration:"none",color:'#ddd'}} to={"/mens"}>Mens</Link>{menu==="mens"?<hr />:null}</li>
                    <li onClick={()=>{SetMenu("womens")}}><Link style={{textDecoration:"none",color:'#ddd'}} to={"/womens"}>Womens</Link> {menu==="womens"?<hr />:null} </li>
                    <li onClick={()=>{SetMenu("kids")}}><Link style={{textDecoration:"none",color:'#ddd'}} to={"/kids"}>Kids</Link>  {menu==="kids"?<hr />:null}</li>                   
                 </ul>
           </div>
        <div className='right_nav'>
            <div className="user">
              <Link to={"/"} style={{textDecoration:"none",color:"white"}}><span><FaUser/></span></Link>
              {/* {isAuthenticated?<p>{username}</p>:<p>user</p>} */}
              
            </div>
            <div  className="cart_nav">
                <Link  style={{textDecoration:"none", color:"white"}} to={"/cart"}><span className='items'><FaShoppingCart/></span></Link>
            </div>
        </div>
    </div>
    
    
    
    </div>
  )
}

export default NavbarComponent;