import { menuDetails } from "../../utils/constants";
import MenuCard from "./Menucard";
import "../../App.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function MenuContainer() {
  const [menuDetails2, setMenuDetails2] = useState([]);
  const [isTopRated, setisTopRated] = useState("false");
  const [searchText, setSearchText] = useState("");
  const [searchedMenu, setSearchedMenu] = useState(menuDetails2);
  const [priceFilter, setPriceFilter] = useState(0);
  const [priceMinMax, setPriceMinMax] = useState({ min: 0, max: 0 });

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91900&lng=78.11950&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    setMenuDetails2(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setSearchedMenu(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    const constForTwo =
      data?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants;
    const priceForTwo = constForTwo.map((menu) =>
      Number((menu?.info?.costForTwo).substring(1, 4))
    );
    const minMaxSort = priceForTwo.sort((a, b) => a - b);
    const minPrice = minMaxSort[0];
    const maxPrice = minMaxSort[minMaxSort.length - 1];
    setPriceMinMax({ min: minPrice, max: maxPrice });
    // const filteredvalue = pricefortwo.filter((menu) => menu === 250);
  };

  // useEffect(() => {
  //   const filteredMenu = menuDetails2.filter(
  //     (menu) => Number((menu?.info?.costForTwo).substring(1, 4)) <= priceFilter
  //   );
  //   setSearchedMenu(filteredMenu);
  // }, [priceFilter]);

  function handlePriceFilter() {
    const filteredMenu = menuDetails2.filter(
      (menu) => Number((menu?.info?.costForTwo).substring(1, 4)) <= priceFilter
    );
    setSearchedMenu(filteredMenu);
  }

  // const handleSearch = () => {
  //   e.preventDefault();
  //   console.log(searchText);

  //   const searchedMenu = menuDetails2.filter((inputdata) =>
  //     inputdata.title.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.info.name.contains(
  //       searchText
  //     )
  //   );
  //   setMenuDetails2(searchedMenu);

  //   console.log(
  //     data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  //   );
  // };
  return menuDetails2.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu_container">
      <div className="filter">
        <div className="searchres_container">
          <input
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => {
              const searchedMenu = menuDetails2.filter((menuList) =>
                menuList?.info?.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setSearchedMenu(searchedMenu);

              setSearchText(e.target.value);
            }}
          />
          {/* <input type="submit" value="Search" /> */}
          <button
            className="search"
            onClick={() => {
              const searchedMenu = menuDetails2.filter((menuList) =>
                menuList?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setSearchedMenu(searchedMenu);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter_btns">
          <button
            className="filter_btn"
            onClick={() => {
              const data = menuDetails2.filter(
                (menu) => menu.info?.avgRating >= 4.5
              );
              setisTopRated((is) => !is);
              // isTopRated && setSearchedMenu(data);
              isTopRated
                ? setSearchedMenu(data)
                : setSearchedMenu(menuDetails2);
            }}
          >
            Top Rated Restaurant
          </button>
          <div className="price_filter">
            <p>{priceFilter}</p>
            <div className="price_min_max">
              <p>{priceMinMax.min}</p>
              <input
                type="range"
                min={100}
                max={500}
                value={priceFilter}
                onChange={(e) => {
                  setPriceFilter(e.target.value);
                }}
              />

              <p>{priceMinMax.max}</p>
              <button onClick={handlePriceFilter}>Submit</button>
            </div>
          </div>
        </div>
        {/* <form onSubmit={handleFilter} className="location_filter">
          <input
            type="text"
            value={location_filter}
            placeholder="Search By Location"
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <input type="submit" />
        </form> */}
      </div>
      <div className="menucard_container">
        {menuDetails.length === 0 ? (
          <Shimmer />
        ) : searchedMenu.length === 0 ? (
          <p>The Menu as per your filter was not found right now</p>
        ) : (
          searchedMenu.map((menu, i) => {
            return (
              <MenuCard
                key={i}
                name={menu?.info?.name}
                img={menu?.info?.cloudinaryImageId}
                rating={menu?.info?.avgRating}
                location={menu?.info?.areaName}
                cuisines={menu?.info?.cuisines}
                pricefortwo={menu?.info.costForTwo}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default MenuContainer;
