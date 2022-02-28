import logo from "../../unused/logo.svg";
import "../../unused/App.css";

import fruits from "../../mock/fruitsBase";
import React,{ Component } from "react";
import FruitApp from "../FruitApp";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: fruits,
    };
  }
  
  render() {
    return (
      <div className="App"> 
        <img className="App-logo" src={logo} alt="React-Logo" />
        <div className="container">
         <FruitApp/>
        </div>
      </div>
    );
  }
}

export default Root;
