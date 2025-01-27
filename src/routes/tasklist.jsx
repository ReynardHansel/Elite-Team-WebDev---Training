import { createFileRoute } from "@tanstack/react-router";
import Task from "../components/Task";

import tasks from "../db/tasks";

export const Route = createFileRoute("/tasklist")({
  component: RouteComponent,
});

console.log(tasks);

function RouteComponent() {
  return (
    <div className="container">
      <h2>Here are your tasks:</h2>
      {/* <Task title="Buy groceries" /> */}

      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </div>
    </div>
  );
}
