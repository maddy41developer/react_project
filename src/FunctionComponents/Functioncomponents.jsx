
// import './App.css';

function FunctionApp() {
  return (
    <div>
       <h1>Welcome</h1>
      <Header />
      <Center />
      <Footer />
     
    </div>
  );
}

export default FunctionApp;

function Header() {
  return (
  <div>
    <h1>Frontend Development</h1>
  </div>);
}
// export default Header;

function Center(){
  return (
  <div>
    <h2>React JS</h2>
    <h2>Java</h2>
    <h2>Python</h2>
    <h2>Node JS</h2>
  </div>)
}

// export default Center;

function Footer(){
  return (
  <div>
    <h1>Contact Us</h1>
    <h1>About Us</h1>
  </div>)
}

