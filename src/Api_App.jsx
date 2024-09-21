import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddUser } from './api/add_user';
import TableComponent from './api/fetch_user';



// import { MenuList } from './menulist';



function Api_App() {
  return (
    <>  
   {/* <AddMenu /> */}
  <BrowserRouter>
   <Routes>
    <Route path="/" element={ <TableComponent />} /> 
    <Route path="/add_user" element={ <AddUser />} />
        </Routes>
      </BrowserRouter>  
   </>
  );
}

export default Api_App;
