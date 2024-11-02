import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./Pages/Splash/SplashScreen";
import GetStarted from "./Pages/Home/GetStarted";
import SignUp from "./Pages/Sign up/SignUp";
import SignIn from "./Pages/Sign in/SignIn";
import Residence from "./Pages/Residence/Residence";
import Authentication from "./Pages/Authentication/Authentication";
import ResetFrom from "./Pages/Reset/ResetFrom";
import FirstSplash from "./Pages/Splash/FirstSplash";
// import Residence from "./Component/Residence/Residence";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/residence" element={<Residence />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/reset" element={<ResetFrom />} />
        <Route path="/first" element={<FirstSplash />} />
        {/* Add more routes for additional screens as needed */}
      </Routes>
    </Router>
  );
};

export default App;
