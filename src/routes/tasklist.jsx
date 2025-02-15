import { createFileRoute } from "@tanstack/react-router";
import Task from "../components/Task";

import tasks from "../db/tasks";
import AddTask from "@/components/AddTask";
import { useState } from "react";
import NotSignedIn from "@/components/Error/not-signed-in";
// import { useUserContext } from "@/context/UserContext";

export const Route = createFileRoute("/tasklist")({
  errorComponent: () => <NotSignedIn />,
  component: RouteComponent,
});

console.log("tasks (imported):", tasks);

function RouteComponent() {
  const [taskList, setTaskList] = useState(tasks);
  const userData = Route.useRouteContext()
  const user = userData.user
  // const user = useUserContext()

  console.log("user (tasklist):", user);
  // console.log("tasks (useState):", taskList);

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

      <h2 className="text-3xl font-bold">Hi {user.displayName || user.email}, Here are your tasks:</h2>
      {/* <Task title="Buy groceries" /> */}

      <div className="flex flex-col gap-4">
        {taskList.map((task) => (
          <Task key={task.id} title={task.title} deadline={task.deadline} />
        ))}
      </div>
    </div>
  );
}
