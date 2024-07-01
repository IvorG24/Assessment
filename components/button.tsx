import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className=" bg-slate-600 text-white cursor-pointer px-2 py-2 rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
