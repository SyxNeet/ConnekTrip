import React from "react";
import Destination from "./Destination";
import Banner from "./Banner";
import Experience from "./Experience";
import SlideTour from "./SlideTour";
import CustomerReview from "./CustomerReview";
import OurBlog from "./OurBlog";

function index() {
  return (
    <div>
      <Banner />
      <Destination />
      <Experience />
      <SlideTour />
      <CustomerReview />
      <OurBlog />
    </div>
  );
}

export default index;
