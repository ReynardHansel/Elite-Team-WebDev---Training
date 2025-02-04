import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";

// import "../CSS/home.css";

function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        Hello World! Welcome to our Task Manager :D 😎
      </h1>
      <Link to="/tasklist">
        <button className="task-btn rounded-lg border border-black bg-gray-900 px-6 py-4 text-2xl text-white">
          View Tasks
        </button>
      </Link>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
