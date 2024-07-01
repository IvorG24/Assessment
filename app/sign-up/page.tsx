import React from "react";
import { signUp } from "../actions/actions";

const page = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <form className="flex flex-col gap-2" action={signUp}>
        <label className="" htmlFor="email">
          Email
          <input
            className="border-black border-2 rounded-lg"
            type="text"
            id="email"
            name="email"
            placeholder="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            className="border-black border-2 rounded-lg"
            type="password"
            name="password"
            placeholder="password"
          />
        </label>
        <button
          className="rounded-full py-2 bg-blue-600 text-white font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default page;
