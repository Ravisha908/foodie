import "../../App.css";

function MenuCard({ name, img, rating, location, cuisines, pricefortwo }) {
  return (
    <div className="menu_card">
      <div className="menu_img">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${img}`}
          alt=""
        />
      </div>
      <h2>{name}</h2>
      <h3>{rating}</h3>
      <p>{location}</p>
      <p>{cuisines?.join(", ")}</p>
      <p>{pricefortwo}</p>
    </div>
  );
}
export default MenuCard;
