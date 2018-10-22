import React from "react";

const NavigationLabel = ({ name, isLast = false }) => {
  const style = {marginRight: isLast ? "56px" : "33px", width: "10px", height: "18px" }
  return (
    <span style={style} class="nav-label">{name}</span>
  );
}

export default NavigationLabel;
