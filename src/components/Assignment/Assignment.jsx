import { fruitList } from "../../utils/constants";
import Counter from "./Counter";
import FruitList from "./FruitList";
import Greeting from "./Greeting";
import HelloWorld from "./HelloWorld";
import SimpleForm from "./SimpleForm";
import ToggleText from "./ToggleText";
import UserStatus from "./UserStatus";

function Assignment() {
  return (
    <div>
      <HelloWorld />
      <Greeting name="Ravi" />
      <Counter />
      <ToggleText />
      <FruitList fruitList={fruitList} />
      <UserStatus isLoggedIn={true} />
      <SimpleForm />
    </div>
  );
}

export default Assignment;
