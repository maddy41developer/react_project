import React from 'react';  
import ReactDOM from 'react-dom';  
import LoginForm from './LoginForm';
class MainPage extends React.Component {

  render() {
    return (
      <div>
         <LoginForm/> 
      </div>
    );
  }
}
ReactDOM.render(<MainPage/>, document.getElementById('root'));  

