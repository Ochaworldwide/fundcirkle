import React from 'react'
import arrowback from "/src/assets/images/arrowback.png"
import logo from "/src/assets/images/Logo1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

function NavBar({ backLink }) {
  return (
    <div className="flex w-[90%] mx-auto justify-between py-10">
      <Link to={backLink}>
        <LazyLoadImage
          alt="Description"
          effect="blur"
          src={arrowback} // Use optimized images here
          className="w-[100%] mx-auto mb-5"
        />
      </Link>

      <div>
        <LazyLoadImage
          alt="Description"
          effect="blur"
          src={logo} // Use optimized images here
          className="w-[100%] mx-auto mb-5"
        />
      </div>
    </div>
  );
}

export default NavBar