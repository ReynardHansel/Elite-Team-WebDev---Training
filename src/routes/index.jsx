import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";

// import "../CSS/home.css";

function Home() {
  return (
    <div className="w-screen min-h-screen gap-6 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">
        Hello World! Welcome to our Task Manager :D 😎
      </h1>
      <Link to="/tasklist">
        <button className="task-btn text-2xl bg-gray-900 border border-black text-white px-6 py-4 rounded-lg">
          View Tasks
        </button>
      </Link>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
