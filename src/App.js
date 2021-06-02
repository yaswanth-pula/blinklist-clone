import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "./components/organisms/NavBar";
import Library from "./components/pages/Library";

const App = () => {
  return (
    <Container maxWidth="md">
      <NavBar />
      <Library />
    </Container>
  );
};

export default App;
