import React, { Component } from "react";
import { BannerHero, NavigationMain, Services } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationMain />
        <BannerHero />
        <Services />
      </div>
    );
  }
}

export default App;
