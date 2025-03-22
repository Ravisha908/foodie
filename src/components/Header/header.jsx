import Navbar from "./Navbar";
import "../../App.css";
import Logo from "./logo";

function Header({ dark, setDark }) {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <div>
        <button
          className={`darkbtn ${dark ? "dark" : "light"}`}
          onClick={() => setDark((isDark) => !isDark)}
        >
          {dark ? <Light /> : <Dark />}
        </button>
      </div>
    </div>
  );
}
function Light() {
  return (
    <p className="color_mode">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="15"
        height="15"
      >
        <circle cx="50" cy="50" r="30" fill="gold" />
        <line x1="50" y1="10" x2="50" y2="0" stroke="gold" stroke-width="3" />
        <line x1="50" y1="90" x2="50" y2="100" stroke="gold" stroke-width="3" />
        <line x1="10" y1="50" x2="0" y2="50" stroke="gold" stroke-width="3" />
        <line x1="90" y1="50" x2="100" y2="50" stroke="gold" stroke-width="3" />
        <line x1="70" y1="30" x2="80" y2="20" stroke="gold" stroke-width="3" />
        <line x1="70" y1="70" x2="80" y2="80" stroke="gold" stroke-width="3" />
        <line x1="30" y1="30" x2="20" y2="20" stroke="gold" stroke-width="3" />
        <line x1="30" y1="70" x2="20" y2="80" stroke="gold" stroke-width="3" />
      </svg>
      Light{" "}
    </p>
  );
}
function Dark() {
  return (
    <p className="color_mode">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="20"
        height="20"
      >
        <rect width="100" height="100" fill="black" />

        <circle cx="50" cy="50" r="30" fill="white" />
        <circle cx="60" cy="50" r="30" fill="black" />

        <polygon
          points="80,20 85,35 100,40 87,50 90,65 80,57 70,65 73,50 60,40 75,35"
          fill="white"
        />
      </svg>
      Dark
    </p>
  );
}

export default Header;
