import { createFileRoute } from "@tanstack/react-router";
import Task from "../components/Task";

import tasks from "../db/tasks";
import AddTask from "@/components/AddTask";
import { useState } from "react";
import { Toaster } from "sonner";
import { useUserContext } from "@/context/UserContext";

export const Route = createFileRoute("/tasklist")({
  component: RouteComponent,
});

console.log("tasks (imported):", tasks);

function RouteComponent() {
  const [taskList, setTaskList] = useState(tasks);
  const user = useUserContext()

  console.log("user:", user);
  console.log("tasks (useState):", taskList);

  const addTask = (title, deadline) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
      deadline: deadline,
    };
    setTaskList([...taskList, newTask]);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-6">
      <AddTask addTask={addTask} />

      <h2 className="text-3xl font-bold">Hi {user.username}, Here are your tasks:</h2>
      {/* <Task title="Buy groceries" /> */}

      <div className="flex flex-col gap-4">
        {taskList.map((task) => (
          <Task key={task.id} title={task.title} deadline={task.deadline} />
        ))}
      </div>

      <Toaster />
    </div>
  );
}
