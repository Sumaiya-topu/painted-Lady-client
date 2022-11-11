import React from "react";
import pageNotFound from "../assets/images/pagenotfound.jpg";

const PageNotFound = () => {
  return (
    <div className="flex justify-center h-screen">
      <img src={pageNotFound} alt="" />
    </div>
  );
};

export default PageNotFound;
