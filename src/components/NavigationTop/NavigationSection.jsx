import React from "react";
import NavigationLabel from "./NavigationLabel";
import IconSearch from "./icon-search.svg";

const NavigationSection = () => (
  <div className="nav-section">
    <NavigationLabel name="ABOUT US" />
    <NavigationLabel name="OUR WORK" />
    <NavigationLabel name="NEWS" />
    <NavigationLabel name="CAREER" />
    <NavigationLabel name="CONTACT" isLast={true} />
    <img className="nav-main__icon" src={IconSearch} alt="search icon" />
  </div>
);


export default NavigationSection;
