import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { KycStateProvider } from "./hooks/useKycState.jsx";
import { UserContextProvider } from "./contexts/userDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      style={{ paddingTop: "5px" }}
    />
    <KycStateProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </KycStateProvider>
  </StrictMode>
);
