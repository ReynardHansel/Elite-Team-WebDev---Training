import { createFileRoute } from "@tanstack/react-router";
import Task from "../components/Task";

import tasks from "../db/tasks";
import AddTask from "@/components/AddTask";
import { useState } from "react";
import { Toaster } from "sonner";
import { createContext } from "react";

export const Route = createFileRoute("/tasklist")({
  component: RouteComponent,
});

//? For teaching useContext (not best practice)
const user = {
  username: "Budi",
  email: "ibubudi@gmail.com",
  password: "password budi",
};
export const UserContext = createContext();

console.log("tasks (imported):", tasks);

function RouteComponent() {
  const [taskList, setTaskList] = useState(tasks);
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
      <UserContext.Provider value={user}>
        <AddTask addTask={addTask} />
      </UserContext.Provider>

      <h2 className="text-3xl font-bold">Here are your tasks:</h2>
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
