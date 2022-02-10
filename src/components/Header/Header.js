import "./Header.css";
function Header() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <nav>
      <p>
        <a className="navbar-brand" href="/">
          FruitShop
        </a>
      </p>
      <form onSubmit={handleSubmit}>
        <input type="search" />
        <button type="submit">🍳</button>
      </form>
    </nav>
  );
}

export default Header;
