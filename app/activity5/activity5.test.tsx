import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Activity5 from "./page";
import "@testing-library/jest-dom";

describe("Activity5 Component", () => {
  test("renders the component correctly", async () => {
    render(<Activity5 />);
    const input = screen.getByPlaceholderText(/add new item/i);
    expect(input).toBeInTheDocument();
  });

  test("adds a new item", () => {
    render(<Activity5 />);
    const input = screen.getByPlaceholderText(/add new item/i);
    const addButton = screen.getByText(/add/i);
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("removes an item", async () => {
    render(<Activity5 />);
    const input = screen.getByPlaceholderText(/add new item/i);
    const addButton = screen.getByText(/add/i);
    fireEvent.change(input, { target: { value: "Item to Remove" } });
    fireEvent.click(addButton);

    // Find the remove button and click it
    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    expect(screen.queryByText("Item to Remove")).not.toBeInTheDocument();
  });

  test("toggles item completion", async () => {
    render(<Activity5 />);

    // Add an item first
    const input = screen.getByPlaceholderText(/add new item/i);
    const addButton = screen.getByText(/add/i);
    fireEvent.change(input, { target: { value: "Toggle Task" } });
    fireEvent.click(addButton);

    // Find the item and toggle completion
    const toggleItem = await screen.findByText("Toggle Task");
    fireEvent.click(toggleItem);

    // Assert that the item has the completed styling
    expect(toggleItem).toHaveClass("line-through text-gray-500");

    // Toggle back and assert the styling is removed
    fireEvent.click(toggleItem);
    expect(toggleItem).not.toHaveClass("line-through text-gray-500");
  });
});
