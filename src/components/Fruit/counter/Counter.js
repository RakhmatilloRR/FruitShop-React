import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      block: "block",
      none: "none",
    };
  }
  render() {
    const {count, block, none} = this.state;
    console.log(count);
    const add = () => {
        this.setState({block: "none"})
        this.setState({none: "block"})
      this.setState({count: count + 1})
    };
    const handleDec = () => {
      this.setState({count: count - 1})
      if(count === 1){ 
        this.setState({block: "block"})
        this.setState({none: "none"})
      }
    };
    const handleInc = () => {
      this.setState({count: count + 1})
    };
    return (
      <div className="counter">
        <button onClick={add} className={`order-count green ${block}`}>ADD</button>
        <button className={`order-count ${none}`}>
          <b onClick={handleDec} className="decrement">➖</b>
          <span>{this.state.count}</span>
          <b onClick={handleInc} className="increment">➕</b>
        </button>
      </div>
    );
  }
}

export default Counter;
