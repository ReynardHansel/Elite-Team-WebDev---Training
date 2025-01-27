import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";

// import "../CSS/home.css";

function Home() {
  return (
    <div className="container">
      <h1>Hello World! Welcome to our Task Manager :D 😎</h1>
      <Link to="/tasklist"><button className="task-btn">View Tasks</button></Link>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
