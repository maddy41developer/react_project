
// import Signup from './pages/signup';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Signin from './pages/signin';
import { useState } from 'react';
// import { Navbar } from 'react-bootstrap';
// import NavbarComponent from './navbar/navbar';
// import Signin from './signin/signin';
// import Signup from './signup/signup';
// import { LatestItems } from './shop/shop';
// import { MensItems } from './mens/mens';
// import Navbar from './navbar/navbar';
// import { LatestItems } from './pages/shop';

import Signup from "./signup/signup";
import Signin from './sigin/signin';
import { LatestItems } from './latest/latest';
import NavbarComponent from './navbar/navbar';



function App3() {
   
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleSignInSuccess = (nameUser) => {
    console.log(nameUser);
    setIsAuthenticated(true);
    localStorage.setItem("username",nameUser)
  };
  return (
   <>
  
   <BrowserRouter>
  
  <NavbarComponent isAuthenticated={isAuthenticated}/>
  
<Routes>
 <Route path="/" element={<Signin handleSignInSuccess={handleSignInSuccess}  />} /> 
{/* <Route path = "/" element = {<Signin  />} />   */}
<Route path="/signup" element={ <Signup />} />
<Route path="/latestitems" element={<LatestItems /> } />
{/* <Route path ="/mens" element = {isAuthenticated ? <MensItems /> : <Navigate to ="/" />} /> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}


export default App3;  