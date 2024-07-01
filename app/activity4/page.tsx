"use client";
import React, { useState } from "react";

const CenteredButton = () => {
  const [buttonSize, setButtonSize] = useState(50); // Initial size in pixels
  const [buttonColor, setButtonColor] = useState("bg-blue-500"); // Initial color using Tailwind CSS classes

  const handleClick = () => {
    setButtonSize(buttonSize * 2); // Increase the size by 2 pixels on each click
    const colors = [
      "bg-red-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonColor(randomColor);
  };

  const buttonStyle = {
    width: `${buttonSize}px`,
    height: `${buttonSize}px`,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        style={buttonStyle}
        className={`text-white rounded-lg shadow-lg transition duration-300 ease-in-out ${buttonColor}`}
        onClick={handleClick}
      >
        GROW
      </button>
    </div>
  );
};

export default CenteredButton;
