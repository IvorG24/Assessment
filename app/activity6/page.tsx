"use client";
import React, { useState, useEffect } from "react";
import { fetchPokemonData } from "@/services/fetchapi";
import { Pokemon } from "../type";

const Activity6 = () => {
  const [data, setData] = useState<Pokemon[]>([]); // State to hold fetched data

  useEffect(() => {
    fetchPokemonData()
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="flex flex-wrap justify-center gap-4 p-4">
      {data.map((pokemon) => (
        <div
          key={pokemon.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img
            className="w-full h-40 object-contain"
            src={pokemon.image}
            alt={pokemon.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{pokemon.name}</div>
            <p className="text-gray-700 text-base">{pokemon.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Activity6;
