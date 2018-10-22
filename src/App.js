import React, { Component } from "react";
import { BannerHero, NavigationMain } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationMain />
        <BannerHero />
      </div>
    );
  }
}

export default App;
