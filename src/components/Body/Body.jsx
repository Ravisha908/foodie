import MenuContainer from "./MenuContainer";
import "../../App.css";
import Assignment from "../assignment/Assignment";

function Body({ dark, setDark }) {
  return (
    <div>
      <MenuContainer dark={dark} setDark={setDark} />
      {/* <Assignment /> */}
    </div>
  );
}

export default Body;
