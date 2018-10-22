import React from "react";

const Marker = ({ active = false, index, clicked }) => {
  const activated = active
    ? "slide-marker__unit--active"
    : "slide-marker__unit--unactive";
  
  return <div role="button" className={`slide-marker__unit ${activated}`} onClick={() => clicked(index)} />;
};

export default Marker;
