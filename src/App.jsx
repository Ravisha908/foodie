import "./App.css";
import "/images/logo.jpg";
import pizza from "/images/pizza.avif";
import chicken from "/images/chicken.avif";
import biryani from "/images/biryani.avif";

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
const menuDetails = [
  {
    name: "Pizza Hut",
    img: pizza,
    rating: 4.5,
    cusinies: "Pizza, Rolls",
    primeLocation: "HSR layout",
  },
  {
    name: "Patiala NH44",
    img: biryani,
    rating: 4.5,
    cusinies: "Biryani, Grill, Pizza",
    primeLocation: "Basavanagudi",
  },
  {
    name: "Tandoori Wok",
    img: chicken,
    rating: 4.6,
    cusinies: "Grill, Pizza",
    primeLocation: "Central Bangalore",
  },
  {
    name: "Pizza Hut",
    img: pizza,
    rating: 4.5,
    cusinies: "Pizza, Rolls",
    primeLocation: "HSR layout",
  },
  {
    name: "Patiala NH44",
    img: biryani,
    rating: 4.5,
    cusinies: "Biryani, Grill, Pizza",
    primeLocation: "Basavanagudi",
  },
  {
    name: "Tandoori Wok",
    img: chicken,
    rating: 4.6,
    cusinies: "Grill, Pizza",
    primeLocation: "Central Bangalore",
  },
  {
    name: "Pizza Hut",
    img: pizza,
    rating: 4.5,
    cusinies: "Pizza, Rolls",
    primeLocation: "HSR layout",
  },
  {
    name: "Patiala NH44",
    img: biryani,
    rating: 4.5,
    cusinies: "Biryani, Grill, Pizza",
    primeLocation: "Basavanagudi",
  },
  {
    name: "Tandoori Wok",
    img: chicken,
    rating: 4.6,
    cusinies: "Grill, Pizza",
    primeLocation: "Central Bangalore",
  },
];

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
    <div className="searchbar_container">
      <form>
        <input type="text" placeholder="Search here" />
        <input type="submit" value="Search" />
      </form>

      <div></div>
    </div>
  );
}

function MenuCard({ name, img, rating, location }) {
  return (
    <div className="menu_card">
      <div className="menu_img">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <h3>{rating}</h3>
      <p>{location}</p>
    </div>
  );
}

function MenuContainer() {
  return (
    <div className="menu_container">
      {menuDetails.map((menu) => {
        return (
          <MenuCard
            name={menu.name}
            img={menu.img}
            rating={menu.rating}
            location={menu.primeLocation}
          />
        );
      })}
    </div>
  );
}
function Body() {
  return (
    <div>
      <MenuContainer />
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
