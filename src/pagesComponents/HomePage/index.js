import React from "react";
import Destination from "./Destination";
import Banner from "./Banner";
import Experience from "./Experience";
import SlideTour from "./SlideTour";

function index() {
  return (
    <div>
      <Banner />
      <Destination />
      <Experience />
      <SlideTour />
    </div>
  );
}

export default index;
