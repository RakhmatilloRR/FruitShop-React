import logo from './unused/logo.svg';
import Fruit from "./components/Fruit/Fruit";
import "./unused/App.css";
import fruits from "./components/dataBase/fruitsBase";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <img className='App-logo' src={logo} alt="React-Logo"/>
      <div className="container">
        <header>
          <Header />
        </header>
        <main className="main">
          {fruits.map((value, i) => {
            return <Fruit fruit={value} key={i}/>;
          })}
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default App;
