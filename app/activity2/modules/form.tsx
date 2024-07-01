"use client";
import Button from "@/components/button";
import React, { useState } from "react";
const Activity2 = () => {
  //set initial state
  const [counter, setCounter] = useState<number>(2);

  // check if the state counter is even or odd
  const checkOddEven = () => {
    return counter % 2 === 0 ? "Even" : "Odd";
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl">{counter}</h1>
      <p>{counter === 0 ? "" : `The number is ${checkOddEven()}`}</p>
      <div className="flex gap-4">
        <Button onClick={() => setCounter(counter * 2)} text="Multiply *" />
        <Button onClick={() => setCounter(counter / 2)} text="Divide /" />
        <Button onClick={() => setCounter(1)} text="Reset" />
      </div>
    </main>
  );
};

export default Activity2;
