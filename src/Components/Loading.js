import React, { Component } from "react";
import Loader from "./Loader.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <img src={Loader} alt="Loading..." />
    </div>
  );
};

export default Loading;
