import React, { Component } from "react";
import Loader from "./Loader.gif";

export class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loader} alt="Loading..." />
      </div>
    );
  }
}

export default Loading;
