import { menuDetails } from "../../utils/constants";
import MenuCard from "./Menucard";
import "../../App.css";

function MenuContainer() {
  return (
    <div className="menu_container">
      {menuDetails.map((menu, i) => {
        return (
          <MenuCard
            key={i}
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

export default MenuContainer;
