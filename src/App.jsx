import React, { useEffect } from "react";
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
import CirkleCategoryModal from "./Component/DiscoverModals/CirkleCategoryModal";

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
import Protected from "./Pages/Protected/Protected";
import ResetPassword from "./Pages/Reset/ResetPassword";
import ScrollToTop from "./utils/stp";
import DefaultLayout from "./layouts/DefaultLayout";
import AcceptedInvite from "./Component/Cirkles/AcceptedInvite";
import RecommendedCirklesModal from "./Component/DiscoverModals/RecommendedCirklesModal";
import PaymentSuccess from "./Pages/Payment/PaymentSuccessful";
import EditCirkleModal from "./Component/Cirkles/EditCirkleModal";
import SwapRequestModal from "./Component/Cirkles/SwapRequestModal";
import GoalAchieved from "./Component/Cirkles/GoalAchieved";
import PaymentSubmissionModal from "./Component/Payment/PaymentSubmissionModal";
import { usePusherHook } from "./hooks/usePusherHook";
import { NotificationProvider } from "./contexts/notificationContext";
import PersonalInfoDesktop from "./Pages/Kyc/PersonalInfoDesktop";
import UploadDocumentDesktop from "./Pages/Kyc/UploadDocumentDesktop";
import IdentityProofDesktop from "./Pages/Kyc/IdentityProofDesktop";
import AddressProofDesktop from "./Pages/Kyc/AddressProofDesktop";
import EditProfileDesktop from "./Pages/Settings/EditProfileDesktop";

const App = () => {
  useEffect(() => {
    const pusher = usePusherHook();
  }, []);
  return (
    <>
      <NotificationProvider>
        <ModalProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<SignIn/>} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/residence" element={<Residence />} />
              <Route path="/authentication" element={<Authentication />} />
              <Route path="/reset" element={<ResetFrom />} />
              <Route
                path="/password-reset/:reset_token"
                element={<ResetPassword />}
              />

              <Route element={<Protected />}>
                <Route element={<DefaultLayout />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/setting" element={<Settings />} />
                  <Route
                    path="/personalinfodesktop"
                    element={<PersonalInfoDesktop />}
                  />
                  <Route
                    path="/uploaddocumentdesktop"
                    element={<UploadDocumentDesktop />}
                  />

                  <Route
                    path="/identityproofdesktop"
                    element={<IdentityProofDesktop />}
                  />

                  <Route
                    path="/addressproofdesktop"
                    element={<AddressProofDesktop />}
                  />

                  <Route
                    path="/editprofiledesktop"
                    element={<EditProfileDesktop />}
                  />
                </Route>
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
                <Route path="/paymentsuccessful" element={<PaymentSuccess />} />
                <Route path="/acceptedinvite" element={<AcceptedInvite />} />
                <Route path="/goalachieved" element={<GoalAchieved />} />
              </Route>

              {/* Add more routes for additional screens as needed */}
            </Routes>
            <ModalChat />

            <CirkleDetailsModal />
            <EditCirkleModal />
            <InviteCirkleDetailsModal />
            <CreateNewCirkleModal />
            <SwapRequestModal />
            <PaymentSubmissionModal />
            {/* <FilterModal /> */}
            {/* <CirkleCategoryModal /> */}
            <DisplayCategoriesModal />
            <PaymentFilterModal />
            <MakePaymentModal />
            <ValidatePaymentModal />
            <ConfirmPaymentModal />
            <RequestReuploadModal />
            <ViewProofModal />
            <BankInformationModal />
            <EditBankInformationModal />
            <RecommendedCirklesModal />
          </Router>
        </ModalProvider>
      </NotificationProvider>
    </>
  );
};

export default App;

// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PullToRefresh from "react-pull-to-refresh";
// import SplashScreen from "./Pages/Splash/SplashScreen";
// import Residence from "./Pages/Authentication/Residence";
// import Authentication from "./Pages/Authentication/Authentication";
// import ResetFrom from "./Pages/Reset/ResetFrom";
// import Home from "./Pages/Home/Home";
// import { ModalProvider } from "./Component/Cirkles/ModalContext";
// import ModalChat from "./Component/Cirkles/ModalChat";
// import NotificationBox from "./Component/Cirkles/NotificationBox";
// import SignIn from "./Pages/Authentication/SignIn";
// import SignUp from "./Pages/Authentication/SignUp";
// import CirkleDetailsModal from "./Component/Cirkles/CirkleDetailsModal";
// import InviteCirkleDetailsModal from "./Component/Cirkles/InviteCirkleDetailsModal";
// import CreateNewCirkleModal from "./Component/Cirkles/CreateNewCirkleModal";
// import Discover from "./Pages/Discover/Discover";
// import CirkleCategoryModal from "./Component/DiscoverModals/CirkleCategoryModal";
// import DisplayCategoriesModal from "./Component/DiscoverModals/DisplayCategories.Modaal";
// import PaymentFilterModal from "./Component/Payment/PaymentFilterModal";
// import MakePaymentModal from "./Component/Payment/MakePaymentModal";
// import ValidatePaymentModal from "./Component/Payment/ValidatePaymentModal";
// import ConfirmPaymentModal from "./Component/Payment/ConfirmPaymentModal";
// import Profile from "./Pages/Settings/Profile";
// import EditProfile from "./Pages/Settings/EditProfile";
// import Settings from "./Pages/Settings/Settings";
// import UpdatePassword from "./Pages/Settings/UpdatePassword";
// import Payment from "./Pages/Payment/Payment";
// import StartKyc from "./Pages/Kyc/StartKyc";
// import PersonalInfo from "./Pages/Kyc/PersonalInfo";
// import RequestReuploadModal from "./Component/Payment/RequestReuploadModal";
// import ViewProofModal from "./Component/Payment/ViewProofModal";
// import UploadDocument from "./Pages/Kyc/UploadDocument";
// import IdentityProof from "./Pages/Kyc/IdentityProof";
// import AddressProof from "./Pages/Kyc/AddressProof";
// import ThankYou from "./Pages/Kyc/ThankYou";
// import BankInformationModal from "./Pages/Settings/BankInformationModal";
// import EditBankInformationModal from "./Pages/Settings/EditBankInformationModal";
// import "animate.css";
// import Confetti from "./Component/Confetti/Confetti";
// import CirkleCreationSuccess from "./Pages/Home/CirkleCreationSuccess";
// import Protected from "./Pages/Protected/Protected";
// import ResetPassword from "./Pages/Reset/ResetPassword";
// import ScrollToTop from "./utils/stp";
// import DefaultLayout from "./layouts/DefaultLayout";
// import AcceptedInvite from "./Component/Cirkles/AcceptedInvite";
// import RecommendedCirklesModal from "./Component/DiscoverModals/RecommendedCirklesModal";
// import PaymentSuccess from "./Pages/Payment/PaymentSuccessful";
// import EditCirkleModal from "./Component/Cirkles/EditCirkleModal";
// import SwapRequestModal from "./Component/Cirkles/SwapRequestModal";
// import GoalAchieved from "./Component/Cirkles/GoalAchieved";
// import PaymentSubmissionModal from "./Component/Payment/PaymentSubmissionModal";
// import { usePusherHook } from "./hooks/usePusherHook";
// import { NotificationProvider } from "./contexts/notificationContext";

// const App = () => {
//   useEffect(() => {
//     const pusher = usePusherHook();
//   }, []);

//   const handleRefresh = async () => {
//     window.location.reload(); // Reload the entire page
//   };

//   return (
//     <>
//       <NotificationProvider>
//         <ModalProvider>
//           <Router>
//             <ScrollToTop />
//             <PullToRefresh onRefresh={handleRefresh}>
//               <Routes>
//                 <Route path="/" element={<SplashScreen />} />
//                 <Route path="/sign-up" element={<SignUp />} />
//                 <Route path="/sign-in" element={<SignIn />} />
//                 <Route path="/residence" element={<Residence />} />
//                 <Route path="/authentication" element={<Authentication />} />
//                 <Route path="/reset" element={<ResetFrom />} />
//                 <Route
//                   path="/password-reset/:reset_token"
//                   element={<ResetPassword />}
//                 />

//                 <Route element={<Protected />}>
//                   <Route element={<DefaultLayout />}>
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/discover" element={<Discover />} />
//                     <Route path="/payment" element={<Payment />} />
//                     <Route path="/setting" element={<Settings />} />
//                   </Route>
//                   <Route path="/profile" element={<Profile />} />
//                   <Route path="/editprofile" element={<EditProfile />} />
//                   <Route path="/updatepassword" element={<UpdatePassword />} />
//                   <Route path="/startkyc" element={<StartKyc />} />
//                   <Route path="/personalinfo" element={<PersonalInfo />} />
//                   <Route path="/uploaddocument" element={<UploadDocument />} />
//                   <Route path="/identityproof" element={<IdentityProof />} />
//                   <Route path="/addressproof" element={<AddressProof />} />
//                   <Route path="/thanks" element={<ThankYou />} />
//                   <Route path="/confetti" element={<Confetti />} />
//                   <Route
//                     path="/creationsuccess"
//                     element={<CirkleCreationSuccess />}
//                   />
//                   <Route
//                     path="/paymentsuccessful"
//                     element={<PaymentSuccess />}
//                   />
//                   <Route path="/acceptedinvite" element={<AcceptedInvite />} />
//                   <Route path="/goalachieved" element={<GoalAchieved />} />
//                 </Route>
//               </Routes>
//             </PullToRefresh>

//             <ModalChat />
//             <CirkleDetailsModal />
//             <EditCirkleModal />
//             <InviteCirkleDetailsModal />
//             <CreateNewCirkleModal />
//             <SwapRequestModal />
//             <PaymentSubmissionModal />
//             <DisplayCategoriesModal />
//             <PaymentFilterModal />
//             <MakePaymentModal />
//             <ValidatePaymentModal />
//             <ConfirmPaymentModal />
//             <RequestReuploadModal />
//             <ViewProofModal />
//             <BankInformationModal />
//             <EditBankInformationModal />
//             <RecommendedCirklesModal />
//           </Router>
//         </ModalProvider>
//       </NotificationProvider>
//     </>
//   );
// };

// export default App;
