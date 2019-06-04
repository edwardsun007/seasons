import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     lat: null,
  //     errorMsg: ""
  //   }; // initialize state
  // }

  // alternative state initialization
  state = { lat: null, errorMsg: "" }; // exactly same as using constructor above

  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        // never do !  this.state.lat = position.coords.latitude !!! never do this unless you initialize it
      },
      error => {
        this.setState({ errorMsg: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - rerendered!");
  }

  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    } else if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      {
        /* when you receive latitude, render gets called, and then SeasonDisplay gets called, lat props will 
      be passed */
      }
    } else {
      return <Spinner />;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
