import logo from './logo.svg';
import './App.css';

import FunctionApp from './FunctionComponents/Functioncomponents';
import ClassProps from './Props/ClassProps';
import FunctionProps from './Props/FunctionProps';

import Reactstate from './State/State';
import Counter from './State/State2';
import ListsPoints from './List&Keys/list';
import ListsPoints2 from './List&Keys/list';
import Member from './List&Keys/key';
import MyList from './List&Keys/key';
import Lifecycle from './Lifecycle/lifecycle';
import Event12 from './Lifecycle/lifecycle';
import Reactstyle from './Css/css';
import LoginForm from './Forms/forms';
import LoginForms from './Bootstrap/LoginForm';
import ColorSchemesExample from './Bootstrap/navbar';
import MyclassComp from './classcomponents/ClassComponent1';
import Statecounters2 from './Hooks/useeffect';
import Statecounters1 from './Hooks/useeffect';
import Table1 from './Hooks/useeffect';
import ColorTag from './Hooks/useRef';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './Routes/Route1';
import Home from './Routes/Route2';
import SearchFilter from './searchfilter/searchfilter';
import Filter from './searchfilter/searchfilter';
import StateExample from './Hooks/usestate';
import Statecounter from './Hooks/usestate';
import Statecounter5 from './Hooks/usestate';
import Effectcounters1 from './Hooks/useeffect';
import About from './Routes/Route3';
import NavbarComponent from './project/navbar/navbar';
import SignupComponent from './project/signup/signup';
import SigninComponent from './project/sigin/signin';
// import Api from './api/api';
// import TableComponent from './api/api2';
import Checking from './Hooks/useeffect';
import StateExample2 from './Hooks/useeffect';
import Reducers from './Hooks/useReducer';
import Reducers1 from './Hooks/useReducer';
// import MyComponent from './api/api';
// import FetchUserList from './api/api';
// import AddUser from './api/api';
import ParentusingGlobalstate from './Hooks/useContext';
import ImageComponent from './Hooks/imagecomponenet';




 function App() {
   return (
      <div className="App2">
       {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>       </header>
       <h1>React</h1> */}
        {/* <Mywebsite /> */}
       {/* <FunctionApp /> */}
      
      
      {/* <MyclassComp /> */}
      
       <ClassProps name = "arjun" />
      {/* <FunctionProps name = "sakthi"></FunctionProps> */}
      {/* <Reactstate /> */}
      {/* <Counter /> */}
    {/* <ListsPoints2 myvalue = {[6,7,8,9,10]}/> */}
 {/* <ListsPoints /> */}
    {/* <Member myvalue ={[{id:1,title :'Frontend',content : 'Welcome to Frontend Development'},
      {id:2,title : 'Backend',content : 'Welcome to Backend Development'}
  ]} /> */}
  {/* <MyList  myvalue = {[100,200,500,400,300]} />; */}
  {/* <StateExample /> */}
 {/* <Statecounter5 /> */}
 {/* <Statecounters2 /> */}
  {/* <Lifecycle /> */}
  {/* <Event12 /> */}
  {/* <Reactstyle /> */}

  {/* <LoginForms /> */}
  {/* <ColorSchemesExample /> */}
  {/* <Statecounters2 /> */}
  {/* <Statecounters1 /> */}
  {/* <Table1 /> */}
 {/*  
  <ColorTag /> */}
  {/* <Reducers /> */}
 {/* <Reducers1 /> */}
  {/* <StateExample /> */}
  {/* <Statecounter /> */}
 {/* <Statecounter5 /> */}
  {/* <SearchFilter /> */}
 {/* // <Filter /> */}
 {/* <Checking /> */}
  {/* <Effectcounters1 /> */}
   {/* <Api /> */}
{/* <StateExample2 /> */}
{/* <ParentusingGlobalstate /> */}
{/* <ImageComponent /> */}
{/* <Filter /> */}
      </div>
   );
}

export default App;

// function App() {
//   return (
//    <BrowserRouter>
   
//    <Routes>
//    <Route path="/info" element={ <Info /> } />
//    <Route path="/home" element={ <Home />} />
//     <Route path = "/about" element = { <About />} /> 
//    {/* <Route path = "/home" element = {<Home />} />  */}
//    {/* <Route path = "/navbar" element = { <NavbarComponent />} />
//    <Route path = "/signup" element = {< SignupComponent />} />
//    <Route path = "/signin" element = {<SigninComponent/>} /> */}
//    {/* api */}
//    {/* <Route path = '/fetch_user_list' element = {<FetchUserList />} />
//    <Route path = '/add_user' element = {<AddUser />} /> */}
//    {/* api */}
//    {/* <Route path = '/django' element = {<TableComponent />} />  */}

//       </Routes>
//       </BrowserRouter>
//   );
// }


// export default App;
