import logo from "/src/assets/images/logo.webp";
import sign from "/src/assets/images/Ellipse 9.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "/src/Component/Botton/Button";

function GetStarted() {
  return (
    <div className=" bg-white w-[100%]  flex flex-col justify-center h-screen ">
      <LazyLoadImage
        alt="Description"
        effect="blur"
        src={sign} // Use optimized images here
        className="absolute -top-72 right-0 "
      />

      <div className="flex flex-col items-center">
        <LazyLoadImage
          alt="Description"
          effect="blur"
          src={logo} // Use optimized images here
          className="w-[100%] mx-auto mb-5"
        />

        <h1 className="text-lg font-normal mb-5 text-center">
          Interest-free social microloan
        </h1>

        <Link to="/sign-up">
          <Button
            text="Get Started"
            onClick={() => console.log("Button clicked!")}
            bgColor="bg-red-500"
            textColor="text-white"
            padding="px-20 py-5"
            fontSize="font-bold"
            borderRadius="rounded-lg"
            marginTop="mt-5"
          />
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
