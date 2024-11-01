import React from "react";
import { Link } from "react-router-dom";

// Reusable Button Component
const Button = ({
  text,
  onClick,
  bgColor,
  textColor,
  padding,
  fontSize,
  borderRadius,
  marginTop,
}) => (
  <button
    onClick={onClick}
    className={`${bgColor} ${textColor} ${padding} ${fontSize} ${borderRadius} ${marginTop}`}
  >
    {text}
  </button>
);

// Reusable Form Component
const CustomForm = ({
  fields,
  buttonText,
  buttonLink,
  onSubmit,
  buttonProps = {},
  children,
  child,
}) => {
  return (
    <form onSubmit={onSubmit} className="mt-5 flex flex-col items-center ">
      {fields.map((field, index) => {
        if (field.type === "select") {
          return (
            <select
              key={index}
              value={field.value}
              onChange={field.onChange}
              className={field.className}
            >
              {field.options.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          );
        }
        return (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            className={`w-[100%] border py-4 px-2 rounded-lg mb-5 outline-none ${
              field.className || ""
            }`}
            value={field.value}
            onChange={field.onChange}
          />
        );
      })}

      {/* Render any additional content passed as children */}
      {children}

      <Link to={buttonLink}>
        <Button {...buttonProps} text={buttonText} />
      </Link>

      {/* Render any additional content passed as child*/}
      {child}
    </form>
  );
};

export default CustomForm;
