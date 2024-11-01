import React from "react";

function Button({
  text = "Click Me",
  onClick,
  bgColor = "bg-red-500",
  textColor = "text-white",
  padding = "px-20 py-5",
  fontSize = "font-bold",
  borderRadius = "rounded-lg",
  marginTop = "mt-10",
}) {
  return (
    <button
      className={`${padding} ${bgColor} ${textColor} ${fontSize} ${borderRadius} ${marginTop}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
