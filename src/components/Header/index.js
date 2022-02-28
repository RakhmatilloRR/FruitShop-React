import "./style.css";
import React, { Component } from 'react';
import fruits from "../../mock/fruitsBase";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits,
    };
  }
  
  render() {
    const handleChange = (e) => {
      let result = fruits.filter(fruit=> fruit.title.includes(e.target.value));
      this.setState({fruits: result})
    }
    return (
      <nav>
        <p>
          <a className="navbar-brand" href="/">
            FruitShop
          </a>
        </p>
        <form>
          <input type="search" id="forName" onChange={handleChange} />
          <label htmlFor="forName" type="submit">🍳</label>
        </form>
      </nav>
    );
  }
}

export default Header;
