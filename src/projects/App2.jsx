
// import Signup from './pages/signup';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Signin from './pages/signin';
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarComponent from './navbar/navbar';
import Signin from './signin/signin';
import Signup from './signup/signup';
import { LatestItems } from './shop/shop';
import { MensItems } from './mens/mens';
// import Navbar from './navbar/navbar';
// import { LatestItems } from './pages/shop';



function App2() {
   
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleSignInSuccess = (nameUser) => {
    console.log(nameUser);
    setIsAuthenticated(true);
    localStorage.setItem("username",nameUser)
  };
  return (
   <BrowserRouter>
  
     {/* <Navbar isAuthenticated={isAuthenticated} /> */}
 <NavbarComponent isAuthenticated={isAuthenticated}/>
   <Routes>
   {/* <Route path="/" element={<Signin handleSignInSuccess={handleSignInSuccess}  />} /> */}
   <Route path = "/" element = {<Signin handleSignInSuccess={handleSignInSuccess}  />} />  
   <Route path="/signup" element={ <Signup />} />
   <Route path="/shop" element={isAuthenticated ? <LatestItems /> : <Navigate to="/" />} />
   <Route path ="/mens" element = {isAuthenticated ? <MensItems /> : <Navigate to ="/" />} />
      </Routes>
      </BrowserRouter>
  );
}


export default App2;  