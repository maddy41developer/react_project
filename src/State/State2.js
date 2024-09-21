import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
     this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 1 },() => {console.log(this.state.count)});
    
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };



  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;