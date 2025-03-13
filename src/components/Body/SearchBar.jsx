import "../../App.css";

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

export default Searchbar;
