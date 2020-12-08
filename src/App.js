import React from "react";

import Matriz from "./components/matriz";
import "./App.scss";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Matriz />
    </div>
  );
}

export default App;
