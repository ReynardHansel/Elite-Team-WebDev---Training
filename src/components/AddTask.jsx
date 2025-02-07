import React from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log("Title:", title);
  }, [title]);

  useEffect(() => {
    console.log("Date:", date);
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault(); //* Prevents the form from submitting (refreshing the page)
    if (!title || !date) {
      console.warn("Please fill in all fields");
      toast.error("Please fill in all fields");
      return;
    }

    addTask(title, date);
    toast.success("Task added successfully", {
      description: `Task: ${title} due on ${date}`,
    });
    console.log("Submitted");
    console.log("Title:", title);
    console.log("Date:", date);
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Add a new Task:</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={title}
            className="flex-grow rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a new task"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            value={date}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDate(e.target.value)}
          />
          <Button type="submit">Add Task</Button>
        </div>
      </form>
    </div>
  );
}
