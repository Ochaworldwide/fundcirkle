import React, { useEffect, useState } from "react";
import splashCircle from "/src/assets/images/Ellipse 6.webp";
import splashScreen from "/images/Splash Screen.svg";
import splashScreen2 from "/src/assets/images/Group11.webp";
import splashScreen4 from "/src/assets/images/Splash Screen.webp";
import pro1 from "/src/assets/images/pro1.webp";
import pro2 from "/src/assets/images/pro2.webp";
import pro3 from "/src/assets/images/pro3.webp";
import pro4 from "/src/assets/images/pro4.webp";
import pro5 from "/src/assets/images/pro5.webp";
import pro6 from "/src/assets/images/pro6.webp";
import pro7 from "/src/assets/images/pro7.webp";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  // List of screens with different images and styles for each screen
  const screens = [
    {
      backgroundImage: `url(${splashScreen})`,
      images: [],
    },
    // Add more screens with different background images
    {
      backgroundImage: `url(${splashScreen})`,
      images: [
        {
          src: pro1,
          borderColor: "border-pink-400",
          size: "w-28 h-28",
          position: "center",
        },
        {
          src: pro2,
          borderColor: "border-purple-500",
          size: "w-24 h-24",
          position: "center",
        },
        {
          src: pro3,
          borderColor: "border-green-400",
          size: "w-32 h-32",
          position: "center",
        },
        {
          src: pro4,
          borderColor: "border-yellow-400",
          size: "w-20 h-20",
          position: "center",
        },
        {
          src: pro5,
          borderColor: "border-blue-400",
          size: "w-24 h-24",
          position: "center",
        },
        {
          src: pro6,
          borderColor: "border-cyan-500",
          size: "w-28 h-28",
          position: "center",
        },
        {
          src: pro7,
          borderColor: "border-red-500",
          size: "w-24 h-24",
          position: "center",
        },
      ],
    },

    {
      backgroundImage: `url(${splashScreen})`,
      images: [
        {
          src: splashScreen2,
          size: "w-28 h-28",
          position: "center",
        },
      ],
    },
    
    {
      backgroundImage: `url(${splashScreen4})`,
      images: [
        {
          src: splashCircle,
          size: "w-28 h-28",
          position: "center",
        },
      ],
    },
  ];

  // State to keep track of the current screen index
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  useEffect(() => {
    const screenInterval = setInterval(() => {
      setCurrentScreenIndex((prevIndex) => {
        if (prevIndex < screens.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(screenInterval);
          return prevIndex;
        }
      });
    }, 3000); // Change screen every 3 seconds

    const timer = setTimeout(() => {
      navigate("/get-started");
    }, screens.length * 2000); // Navigate after all screens

    return () => {
      clearInterval(screenInterval);
      clearTimeout(timer);
    };
  }, [navigate, screens.length]);

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full fade-in"
      style={{
        backgroundImage: screens[currentScreenIndex].backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {screens[currentScreenIndex].images.map((image, index) => (
          <div
            key={index}
            className={`absolute ${image.position} rounded-full ${image.size} border-4 ${image.borderColor} overflow-hidden animate `}
            style={{
              animationDelay: `${index * 0.2}s`, // Staggered animation delay
              animationDuration: "2s",
            }}
          >
            <img
              src={image.src}
              alt={`Profile ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
