import React from "react";

const Button = (props) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full  ${props.backgroundColor?props.backgroundColor :"bg-coral-red"} ${props.textColor?props.textColor:"text-white"} ${props.borderColor}`}>
      {props.label}
      {props.iconUrl && (
        <img
          src={props.iconUrl}
          alt="arrow-right"
          className="ml-2 rounded-full border-red-400 w-5 h-5"
        ></img>
      )}
    </button>
  );
};

export default Button;
