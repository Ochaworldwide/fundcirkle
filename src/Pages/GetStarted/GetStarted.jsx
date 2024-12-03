import logo from "/images/logo1.svg";
import sign from "/images/Ellipse 9.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "/src/Component/Botton/Button";
import { motion } from "framer-motion";

function GetStarted() {
  return (
    <motion.div
      className=" bg-white w-[100%]  flex flex-col justify-center h-screen "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src={sign}
        alt=""
        className="absolute -top-0 right-0"
        initial={{ opacity: 0, x: 50, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="flex flex-col items-center">
        <LazyLoadImage
          alt="Description"
          effect="blur"
          src={logo}
          className="w-[100%] mx-auto mb-5"
        />

        <motion.h1
          className="text-lg font-normal mb-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Interest-free social microloan
        </motion.h1>

        <Link to="/sign-in">
          <Button
            text="Get Started"
            onClick={() => console.log("Button clicked!")}
            bgColor="bg-[#00943F]"
            textColor="text-white"
            padding="px-20 py-5"
            fontSize="font-bold"
            borderRadius="rounded-lg"
            marginTop="mt-5"
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default GetStarted;
