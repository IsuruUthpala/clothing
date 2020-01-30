import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HatsPage from "./pages/hats/hatspage.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
