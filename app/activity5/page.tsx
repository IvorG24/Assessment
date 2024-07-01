"use client";
import React, { useState } from "react";
import { TodoItem } from "../type";
const Activity5 = () => {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [newItem, setNewItem] = useState<string>("");
  const addItem = () => {
    if (newItem.trim() !== "") {
      const newItemObject = { text: newItem, completed: false };
      setItems([...items, newItemObject]);
      setNewItem(""); // Reset newItem input after adding
    }
  };
  const removeItem = (index: number) => {
    const updatedItems = [...items];

    updatedItems.splice(index, 1);

    setItems(updatedItems);
  };

  const toggleCompletion = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  };

  return (
    <main className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 border border-gray-300 p-2 rounded"
          placeholder="Add new item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addItem}
        >
          Add
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 border-b border-gray-200 ${
              item.completed ? "bg-gray-100" : ""
            }`}
          >
            <span
              onClick={() => toggleCompletion(index)}
              className={`cursor-pointer ${
                item.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {item.text}
            </span>

            <button
              id="remove"
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Activity5;
