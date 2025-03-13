import Navbar from "./Navbar";
import "../../App.css";
import Logo from "./logo";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <div></div>
    </div>
  );
}

export default Header;
