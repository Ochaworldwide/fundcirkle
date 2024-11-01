// import React, { useState } from "react";
// import NavBar from "../Sign up/NavBar";
// import Button from "../../Component/Botton/Button";
// import { Link } from "react-router-dom";
// import CustomForm from "../../Component/Form/CustomForm";

// function ResetFrom() {
//   const [email, setEmail] = useState("");
  

//   const fields = [
//     {
//       type: "email",
//       placeholder: "Enter your registered email address",
//       value: email,
//       onChange: (e) => setEmail(e.target.value),
//     },
//   ];

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
//   };


//   return (
//     <div>
//       <NavBar backLink="/sign-in" />

//       <div className="mx-auto w-[90%] flex flex-col">
//         <h1 className="font-bold text-2xl mb-5 poppins">Reset your Password</h1>

//         <p>Enter your registered email to receive a password reset link.</p>
//         <CustomForm
//           fields={fields}
//           buttonText="Send Password Reset Link"
//           buttonLink=""
//           onSubmit={handleFormSubmit}
//           buttonProps={{
//             bgColor: "bg-red-500",
//             textColor: "text-white",
//             padding: "px-20 py-5",
//             fontSize: "font-bold",
//             borderRadius: "rounded-lg",
//             marginTop: "mt-10",
//             onClick: () => console.log("Button clicked!"),
//           }}
//         >
//           {/* Additional Sign-In Link */}
//           <p className="mt-1 text-red-500 self-start">
//             <Link to="/sign-in">Forget Password ?</Link>
//           </p>
//         </CustomForm>


//         <p className="mt-10 self-center">
//           Already have an account?{" "}
//           <span className="text-red-500">
//             <Link to="/sign-up">Sign up here</Link>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ResetFrom;



import React, { useState } from "react";
import NavBar from "../Sign up/NavBar";
import Button from "../../Component/Botton/Button";
import { Link } from "react-router-dom";
import CustomForm from "../../Component/Form/CustomForm";

function ResetFrom() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const fields = [
    {
      type: "email",
      placeholder: "Enter your registered email address",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show popup on form submit
    console.log("Form submitted!");
  };

  const closePopup = () => {
    setShowPopup(false); // Hide popup
  };

  return (
    <div>
      <NavBar backLink="/sign-in" />

      <div className="mx-auto w-[90%] flex flex-col">
        <h1 className="font-bold text-2xl mb-5 poppins">Reset your Password</h1>
        <p>Enter your registered email to receive a password reset link.</p>

        <CustomForm
          fields={fields}
          buttonText="Send Password Reset Link"
          buttonLink=""
          onSubmit={handleFormSubmit}
          buttonProps={{
            bgColor: "bg-red-500",
            textColor: "text-white",
            padding: "px-20 py-5",
            fontSize: "font-bold",
            borderRadius: "rounded-lg",
            marginTop: "mt-10",
            onClick: () => console.log("Button clicked!"),
          }}
        >
        </CustomForm>

        {/* <form onSubmit={handleFormSubmit} className="mb-4">
          <input
            type="email"
            placeholder="Enter your registered email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-red-500 text-white rounded-lg px-5 py-2 mt-5"
          >
            Send Password Reset Link
          </button>
        </form> */}

        <p className="mt-10 self-center">
          Already have an account?{" "}
          <span className="text-red-500">
            <Link to="/sign-up">Sign up here</Link>
          </span>
        </p>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center absolute">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Check Your Email
            </h2>
            <p className="text-gray-600">
              A password reset link has been sent to your email.
            </p>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetFrom;
