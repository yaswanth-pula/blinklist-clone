import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import NavBar from "./components/organisms/NavBar";
import Library from "./components/pages/Library";
import Explore from "./components/pages/Explore";
import SearchBar from "./components/organisms/SearchBar";
import SearchResult from "./components/pages/SearchResults";
import { isEmptyString } from "./utils/validator";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [exploreCategory, setExploreCategory] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navClickUpdate = (clickedItem) => {
    setExploreCategory(clickedItem);
    setToggle(clickedItem === "My Library");
  };
  const searchClickUpdate = (clickedItem) => {
    setShowSearchBar(clickedItem === "Search");
  };
  const searchQueryUpdate = (inputQuery) => {
    setSearchQuery(inputQuery.trim());
  };

  return (
    <Container maxWidth="md">
      {showSearchBar ? (
        <SearchBar
          searchUpdate={searchClickUpdate}
          queryUpdate={searchQueryUpdate}
        />
      ) : (
        <NavBar
          parentUpdate={navClickUpdate}
          searchUpdate={searchClickUpdate}
        />
      )}

      {showSearchBar && !isEmptyString(searchQuery) ? (
        <SearchResult query={searchQuery} />
      ) : toggle ? (
        <Library />
      ) : (
        <Explore selectedCategory={exploreCategory} />
      )}
    </Container>
  );
};

export default App;
