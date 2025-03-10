import "./App.css";
import "/images/logo.jpg";

function Logo() {
  return (
    <div className="logo_container">
      <img src="/images/logo.jpg" />
    </div>
  );
}

function Navbar() {
  return (
    <ul className="navbar">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
    </ul>
  );
}

function Header() {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <div></div>
    </div>
  );
}
function Searchbar() {
  return (
    <div>
      <h2>This is Searchbar</h2>
    </div>
  );
}
function Body() {
  return (
    <div>
      <h2>This is Body</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Searchbar />
      <Body />
    </>
  );
}

export default App;
