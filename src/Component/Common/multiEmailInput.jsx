import React, { useState, useEffect } from "react";

const MultiEmailInput = ({ onEmailsChange }) => {
  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    onEmailsChange(emails); // Call the callback whenever emails change
  }, [emails, onEmailsChange]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (isValidEmail(inputValue)) {
        setEmails([...emails, inputValue.trim()]);
        setInputValue("");
      } else {
        alert("Please enter a valid email address");
      }
    }
  };


  const handleClick = () => {
      if (isValidEmail(inputValue)) {
        setEmails([...emails, inputValue.trim()]);
        setInputValue("");
      } else {
        alert("Please enter a valid email address");
      }
    
  };



  const handleRemoveEmail = (index) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4  rounded-lg">
      <div className="flex flex-wrap gap-2 mb-2">
        {emails.map((email, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full max-w-full"
          >
            <span className="mr-2 max-w-[50px] overflow-hidden text-ellipsis whitespace-nowrap">
              {email}
            </span>
            <button
              onClick={() => handleRemoveEmail(index)}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter Email(s) invite members"
          className="w-[70%] px-3 py-2 border border-[#00000066] rounded-lg outline-none"
        />

        <button className="text-sm w-[27%] border rounded-lg p-1 text-[#00943F] border-[#00943F] cursor-pointer" onClick={()=> {handleClick()}}>
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default MultiEmailInput;
