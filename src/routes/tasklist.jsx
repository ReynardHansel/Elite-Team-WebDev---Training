import { createFileRoute } from "@tanstack/react-router";
import Task from "../components/Task";

import tasks from "../db/tasks";

export const Route = createFileRoute("/tasklist")({
  component: RouteComponent,
});

console.log(tasks);

function RouteComponent() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-6">
      <h2 className="text-3xl font-bold">Here are your tasks:</h2>
      {/* <Task title="Buy groceries" /> */}

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </div>
    </div>
  );
}
