import React, { Component } from 'react';
import Footer from '../Footer';
import Fruit from '../Fruit';
import Header from '../Header';

class FruitApp extends Component {
  render() {
    return (
      <div>
         <header>
            <Header fruits={this.state.fruits}/>
          </header>
          <main className="main">
            {this.state.fruits.map((value, i) => {
              return <Fruit fruit={value} key={value.id} />;
            })}
          </main>
          <footer>
            <Footer />
          </footer>
      </div>
    );
  }
}

export default FruitApp;