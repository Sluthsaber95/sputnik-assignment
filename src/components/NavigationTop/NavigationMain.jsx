import React from "react";
import NavigationSection from "./NavigationSection";
import LogoCompany from "./logo-header.svg";
import IconHamburger from "./icon-hamburger.svg";

const NavigationMain = () => (
  <div className="nav-main">
    <img
      className="nav-main__img"
      src={LogoCompany}
      alt="sputnik company logo"
    />
    <NavigationSection />
    <img
      className="nav-main__icon nav-main__icon--hamburger"
      src={IconHamburger}
      alt="hamburger menu"
    />
  </div>
);

export default NavigationMain;
