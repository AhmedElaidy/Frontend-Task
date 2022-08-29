import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from './Components/Main/Main'
import "./App.css";

const App = () => (
  <div className="App">
    <div className="container">
      <Navbar />
      <Main/>
    </div>
  </div>
);

export default App;
