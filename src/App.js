import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import NavBar from "./components/organisms/NavBar";
import Library from "./components/pages/Library";
import Explore from "./components/pages/Explore";
import SearchBar from "./components/organisms/SearchBar";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [exploreCategory, setExploreCategory] = useState("");
  const [showNavBar, setShowNavBar] = useState(false);

  const navClickUpdate = (clickedItem) => {
    setExploreCategory(clickedItem);
    setToggle(clickedItem === "My Library");
  };
  const searchClickUpdate = (clickedItem) => {
    setShowNavBar(clickedItem === "Search");
  };

  return (
    <Container maxWidth="md">
      {showNavBar ? (
        <SearchBar
          parentUpdate={navClickUpdate}
          searchUpdate={searchClickUpdate}
        />
      ) : (
        <NavBar
          parentUpdate={navClickUpdate}
          searchUpdate={searchClickUpdate}
        />
      )}
      {toggle ? <Library /> : <Explore selectedCategory={exploreCategory} />}
    </Container>
  );
};

export default App;
