import React, { Component } from "react";
import shortid from "shortid";

import Marker from "./Marker";

class SlideMarkers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [true, false, false]
    };
    this.markerClicked = this.markerClicked.bind(this);
  }
  markerClicked(index) {
    const newMarkers = [false, false, false];
    newMarkers[index] = true;
    this.setState({ markers: newMarkers });
  }
  render() {
    const { markers } = this.state;
    return (
      <div>
        {markers.map((active, i) => {
          const key = shortid.generate();
          return (
            <Marker key={key} active={active} index={i} clicked={this.markerClicked} />
          );
        })}
      </div>
    );
  }
}

export default SlideMarkers;
