import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./Pages/Splash/SplashScreen";
// import SignUp from "./Pages/Sign up/SignUp";
import Residence from "./Pages/Residence/Residence";
import Authentication from "./Pages/Authentication/Authentication";
import ResetFrom from "./Pages/Reset/ResetFrom";
import FirstSplash from "./Pages/Splash/FirstSplash";
import Home from "./Pages/Home/Home";
import GetStarted from "./Pages/GetStarted/GetStarted";
import { ModalProvider } from "./Component/Cirkles/ModalContext";
import ModalChat from "./Component/Cirkles/ModalChat";
import NotificationBox from "./Component/Cirkles/NotificationBox";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignIn from "./Pages/Authentication/SignIn";
import SignUp from "./Pages/Authentication/SignUp";
import CirkleDetailsModal from "./Component/Cirkles/CirkleDetailsModal";
import InviteCirkleDetailsModal from "./Component/Cirkles/InviteCirkleDetailsModal";


const App = () => {
  return (
    <ModalProvider>
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
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes for additional screens as needed */}
        </Routes>
        <ModalChat />
        <NotificationBox />
        <CirkleDetailsModal />
        <InviteCirkleDetailsModal />
      </Router>
    </ModalProvider>
  );
};

export default App;
