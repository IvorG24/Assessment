"use client";
import Button from "@/components/button";
import React, { useState } from "react";

const Activity3 = () => {
  //set initial state
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  const handleNum1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0; // Parse input value as integer, default to 0 if NaN
    setNum1(value);
  };

  const handleNum2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0; // Parse input value as integer, default to 0 if NaN
    setNum2(value);
  };

  const handleReset = () => {
    setNum1(0);
    setNum2(0);
  };

  const sum = num1 + num2;

  return (
    <main className="flex min-h-screen justify-center items-center flex-col">
      <p className="text-2xl">Sum: {sum}</p>
      <label className="flex flex-col">
        First Number:
        <input
          className="border-2 border-black rounded-lg p-1"
          type="number"
          value={num1}
          onChange={handleNum1Change}
        />
      </label>
      <br />
      <label className="flex flex-col">
        Second Number:
        <input
          className="border-2 border-black rounded-lg p-1"
          type="number"
          value={num2}
          onChange={handleNum2Change}
        />
      </label>
      <br />
      <Button onClick={handleReset} text="Reset" />
    </main>
  );
};

export default Activity3;
