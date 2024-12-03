import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({ message, type = "info", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose(); // Optional callback after toast disappears
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  if (!isVisible) return null;

  // Determine the styles based on the type of toast
  const typeStyles = {
    success: "bg-[#E5F4EC] text-black",
    error: "bg-[#E5F4EC] text-black",
    info: "bg-[#E5F4EC] text-black",
    warning: "bg-[#E5F4EC] text-black",
  };

  return (
    <div
      className={`fixed top-20 right-0 px-6 py-3 w-[70%] rounded-lg shadow-lg flex items-center space-x-3 ${
        typeStyles[type] || typeStyles.info
      }`}
    >

      {/* Message */}
      <span className="text-sm">{message}</span>
    </div>
  );
};

// Prop Types for validation
Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "info", "warning"]),
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

export default Toast;
