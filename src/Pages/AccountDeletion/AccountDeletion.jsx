// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import NavBar from "../../Component/Sign up/NavBar";
// import logo from "/images/Logo.svg";

// function Deletion() {
//   return (
//     <div className="lg:bg-[url('/images/auth-bg.png')] lg:bg-cover h-screen">
//       <div className="lg:hidden">
//         <NavBar backLink="/" />
//       </div>

//       <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:pb-5">
//         <img src={logo} alt="" srcset="" />
//       </div>

//       <motion.div
//         className="w-[90%] mx-auto "
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <div class="lg:w-[90%] w-[100%] mx-auto bg-white lg:p-8 p-0">
//           <h1 class="text-3xl font-bold mb-2">Account Deletion</h1>

//           <section class="mb-6">
//             <label htmlFor="">
//               Deleting your account is permanent and cannot be undone. This
//               action will:
//             </label>

//             <li>Erase your personal data from our systems.</li>
//             <li>Remove your profile and any content you’ve created.</li>
//             <li>Revoke access to all services.</li>

//             <p>
//               If you’re sure you want to proceed, please confirm your password
//               and click the button below.
//             </p>
//           </section>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Deletion;







"use client";

import { useState } from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";

// Button Component
const Button = ({
  children,
  variant = "default",
  className = "",
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-4 py-2";

  const variants = {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/90 bg-gray-900 text-white hover:bg-gray-800",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ className = "", type = "text", ...props }) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

// Label Component
const Label = ({ children, htmlFor, className = "", ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

// Card Components
const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className = "", ...props }) => {
  return (
    <p className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  );
};

const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Alert Components
const Alert = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertDescription = ({ children, className = "", ...props }) => {
  return (
    <div className={`text-sm [&_p]:leading-relaxed ${className}`} {...props}>
      {children}
    </div>
  );
};

// Checkbox Component
const Checkbox = ({
  checked,
  onCheckedChange,
  className = "",
  id,
  ...props
}) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      id={id}
      className={`peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        checked ? "bg-blue-600 text-white border-blue-600" : "bg-white"
      } ${className}`}
      onClick={() => onCheckedChange(!checked)}
      {...props}
    >
      {checked && (
        <svg
          className="h-3 w-3 fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
      )}
    </button>
  );
};

// Main Component
export default function AccountDeletion() {
  const [password, setPassword] = useState("");
  const [confirmationText, setConfirmationText] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteAccount = async () => {
    if (!isFormValid()) return;

    setIsDeleting(true);

    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false);
      alert(
        "Account deletion request submitted. You will receive a confirmation email."
      );
    }, 2000);
  };

  const isFormValid = () => {
    return password.length >= 6 && confirmationText === "DELETE" && isConfirmed;
  };

  const dataToBeDeleted = [
    "Your profile information and settings",
    "All your posts, comments, and content",
    "Your subscription and billing history",
    "Connected social media accounts",
    "All uploaded files and media",
    "Your account preferences and customizations",
  ];

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900">
              Final Confirmation
            </CardTitle>
            <CardDescription>
              Are you absolutely sure you want to delete your account? This
              action cannot be undone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => setShowConfirmation(false)}
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="flex-1"
                onClick={handleDeleteAccount}
                disabled={isDeleting}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                {isDeleting ? "Deleting..." : "Delete Account"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Trash2 className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Delete Account
          </h1>
          <p className="text-gray-600">
            We're sorry to see you go. Please review the information below
            before proceeding.
          </p>
        </div>

        {/* Warning Alert */}
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Warning:</strong> Account deletion is permanent and cannot
            be undone. All your data will be permanently removed from our
            servers.
          </AlertDescription>
        </Alert>

        {/* What will be deleted */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              What will be deleted
            </CardTitle>
            <CardDescription>
              The following data will be permanently removed:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dataToBeDeleted.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Deletion Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Confirm Account Deletion
            </CardTitle>
            <CardDescription>
              Please complete the following steps to confirm you want to delete
              your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Password Confirmation */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Enter your password to confirm
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your current password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Type DELETE confirmation */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmation"
                className="text-sm font-medium text-gray-700"
              >
                Type{" "}
                <span className="font-mono bg-gray-100 px-1 rounded">
                  DELETE
                </span>{" "}
                to confirm
              </Label>
              <Input
                id="confirmation"
                type="text"
                placeholder="Type DELETE here"
                value={confirmationText}
                onChange={(e) => setConfirmationText(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Final confirmation checkbox */}
            <div className="flex items-start space-x-3">
              <Checkbox
                id="final-confirmation"
                checked={isConfirmed}
                onCheckedChange={setIsConfirmed}
                className="mt-1"
              />
              <Label
                htmlFor="final-confirmation"
                className="text-sm text-gray-700 leading-5"
              >
                I understand that deleting my account is permanent and
                irreversible. I acknowledge that all my data will be permanently
                lost.
              </Label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="flex-1"
                onClick={() => setShowConfirmation(true)}
                disabled={!isFormValid()}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>

            {/* Help text */}
            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-500">
                Need help or have questions?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Contact our support team
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

