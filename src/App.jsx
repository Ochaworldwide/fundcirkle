import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./Pages/Splash/SplashScreen";
import Residence from "./Pages/Authentication/Residence";
import Authentication from "./Pages/Authentication/Authentication";
import ResetFrom from "./Pages/Reset/ResetFrom";
import Home from "./Pages/Home/Home";
import { ModalProvider } from "./Component/Cirkles/ModalContext";
import ModalChat from "./Component/Cirkles/ModalChat";
import NotificationBox from "./Component/Cirkles/NotificationBox";
import SignIn from "./Pages/Authentication/SignIn";
import SignUp from "./Pages/Authentication/SignUp";
import CirkleDetailsModal from "./Component/Cirkles/CirkleDetailsModal";
import InviteCirkleDetailsModal from "./Component/Cirkles/InviteCirkleDetailsModal";
import CreateNewCirkleModal from "./Component/Cirkles/CreateNewCirkleModal";
import Discover from "./Pages/Discover/Discover";
import FilterModal from "./Component/DiscoverModals/FilterModal";
import CirkleCategoryModal from "./Component/DiscoverModals/CirkleCategoryModal";
import ContributionAmountRangeModal from "./Component/DiscoverModals/ContibutionAmountRangeModal";
import DisplayCategoriesModal from "./Component/DiscoverModals/DisplayCategories.Modaal";
import PaymentFilterModal from "./Component/Payment/PaymentFilterModal";
import MakePaymentModal from "./Component/Payment/MakePaymentModal";
import ValidatePaymentModal from "./Component/Payment/ValidatePaymentModal";
import ConfirmPaymentModal from "./Component/Payment/ConfirmPaymentModal";
import Profile from "./Pages/Settings/Profile";
import EditProfile from "./Pages/Settings/EditProfile";
import Settings from "./Pages/Settings/Settings";
import UpdatePassword from "./Pages/Settings/UpdatePassword";
import Payment from "./Pages/Payment/Payment";
import StartKyc from "./Pages/Kyc/StartKyc";
import PersonalInfo from "./Pages/Kyc/PersonalInfo";
import RequestReuploadModal from "./Component/Payment/RequestReuploadModal";
import ViewProofModal from "./Component/Payment/ViewProofModal";
import UploadDocument from "./Pages/Kyc/UploadDocument";
import IdentityProof from "./Pages/Kyc/IdentityProof";
import AddressProof from "./Pages/Kyc/AddressProof";
import ThankYou from "./Pages/Kyc/ThankYou";
import BankInformationModal from "./Pages/Settings/BankInformationModal";
import EditBankInformationModal from "./Pages/Settings/EditBankInformationModal";
import "animate.css";
import Confetti from "./Component/Confetti/Confetti";
import CirkleCreationSuccess from "./Pages/Home/CirkleCreationSuccess";

const App = () => {
  return (
    <>

      <ModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/residence" element={<Residence />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/reset" element={<ResetFrom />} />
            <Route path="/home" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/updatepassword" element={<UpdatePassword />} />
            <Route path="/startkyc" element={<StartKyc />} />
            <Route path="/personalinfo" element={<PersonalInfo />} />
            <Route path="/uploaddocument" element={<UploadDocument />} />
            <Route path="/identityproof" element={<IdentityProof />} />
            <Route path="/addressproof" element={<AddressProof />} />
            <Route path="/thanks" element={<ThankYou />} />
            <Route path="/confetti" element={<Confetti />} />
            <Route
              path="/creationsuccess"
              element={<CirkleCreationSuccess />}
            />

            {/* Add more routes for additional screens as needed */}
          </Routes>
          <ModalChat />
          <NotificationBox />
          <CirkleDetailsModal />
          <InviteCirkleDetailsModal />
          <CreateNewCirkleModal />
          <FilterModal />
          <CirkleCategoryModal />
          <ContributionAmountRangeModal />
          <DisplayCategoriesModal />
          <PaymentFilterModal />
          <MakePaymentModal />
          <ValidatePaymentModal />
          <ConfirmPaymentModal />
          <RequestReuploadModal />
          <ViewProofModal />
          <BankInformationModal />
          <EditBankInformationModal />
        </Router>
      </ModalProvider>
    </>
  );
};

export default App;
