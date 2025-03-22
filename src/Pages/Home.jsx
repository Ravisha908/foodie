import { useState } from "react";
import Header from "../components/Header/header";
import Searchbar from "../components/Body/Searchbar";
import Body from "../components/Body/Body";

function Home() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark" : "light"}>
      <Header dark={isDark} setDark={setIsDark} />
      <Searchbar dark={isDark} setDark={setIsDark} />
      <Body dark={isDark} setDark={setIsDark} />
    </div>
  );
}

export default Home;
