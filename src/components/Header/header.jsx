import Logo from "./logo";
import Navbar from "./Navbar";
import "../../App.css";

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
