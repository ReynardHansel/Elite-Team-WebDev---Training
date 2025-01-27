import { createFileRoute } from "@tanstack/react-router";
import Task from "../components/Task";

export const Route = createFileRoute("/tasklist")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container">
      <h2>Here are your tasks:</h2>
      <Task title="Buy groceries" />
    </div>
  );
}
