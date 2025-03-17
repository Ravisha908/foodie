import { menuDetails } from "../../utils/constants";
import MenuCard from "./Menucard";
import "../../App.css";
import { useState } from "react";
import Shimmer from "./Shimmer";

function MenuContainer() {
  const [menuDetails2, setMenuDetails2] = useState(menuDetails);
  const [isTopRated, setisTopRated] = useState("false");
  const [location_filter, setLocationFilter] = useState("");
  function handleFilter(e) {
    e.preventDefault();
    console.log(e.target.value);

    const data2 = menuDetails2.filter((menu) =>
      menu.primeLocation.includes(location_filter)
    );
    setMenuDetails2(location_filter ? data2 : menuDetails);
  }
  return (
    <div className="menu_container">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const data = menuDetails2.filter((menu) => menu.rating === 5);
            setisTopRated((is) => !is);
            isTopRated ? setMenuDetails2(data) : setMenuDetails2(menuDetails);
          }}
        >
          Top Rated Restaurant
        </button>
        <form onSubmit={handleFilter} className="location_filter">
          <input
            type="text"
            value={location_filter}
            placeholder="Search By Location"
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
      <div className="menucard_container">
        {menuDetails.length === 0 ? (
          <Shimmer />
        ) : (
          menuDetails2.map((menu, i) => {
            return (
              <MenuCard
                key={i}
                name={menu.name}
                img={menu.img}
                rating={menu.rating}
                location={menu.primeLocation}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default MenuContainer;
