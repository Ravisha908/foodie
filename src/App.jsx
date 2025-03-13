import "./App.css";
import "/images/logo.jpg";

import Header from "./components/Header/header";
import Searchbar from "./components/Body/Searchbar";
import Body from "./components/Body/Body";

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
