import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import SecondIntro from "./SecondIntro";
import ThirdIntro from "./ThirdIntro";

const SplashScreen = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const screens = [
    // {
    //   splash: <Intro />,
    // },
    {
      splash: <SecondIntro />,
    },
    {
      splash: <ThirdIntro />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => {
        if (prev < screens.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval); // Stop transitions when the last screen is reached
          return prev;
        }
      });
    }, 4000); // 2 seconds per screen

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [screens.length]);

  return (
    <div className="h-screen w-full">
      {screens[currentScreen].splash}
    </div>
  );
};

export default SplashScreen;
