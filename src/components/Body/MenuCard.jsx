import "../../App.css";

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
export default MenuCard;
