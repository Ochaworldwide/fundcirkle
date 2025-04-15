import React from 'react'
import arrowback from "/images/arrowback.svg"
import logo from "/images/Logo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex w-[90%] mx-auto mt-5 justify-between  mb-12 sticky top-0 bg-white lg:bg-transparent lg:mb-0">

      <div className='lg:hidden ml-auto'>
        <LazyLoadImage
          alt="Description"
          effect="blur"
          src={logo} // Use optimized images here
          className=" mx-auto mb-5"
        />
      </div>
    </div>
  );
}

export default NavBar