import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="heading">Welcome Today is {new Date().toDateString()}</h1>
    </>
  );
};

export default App;
