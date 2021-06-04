import { Container } from "@material-ui/core";
import React, { useDebugValue, useEffect, useState } from "react";
import NavBar from "./components/organisms/NavBar";
import Library from "./components/pages/Library";
import Explore from "./components/pages/Explore";

const App = () => {
  const [toggle, setToggle] = useState(true);

  const navClickUpdate = (clickedItem) => {
    setToggle(clickedItem === "My Library");
  };

  return (
    <Container maxWidth="md">
      <NavBar parentUpdate={navClickUpdate} />
      {toggle ? <Library /> : <Explore />}
    </Container>
  );
};

export default App;
