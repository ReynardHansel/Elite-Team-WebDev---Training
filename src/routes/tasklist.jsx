import { createFileRoute } from "@tanstack/react-router";
import Task from "../components/Task";

// import tasks from "../db/tasks";
import AddTask from "@/components/AddTask";
import { toast } from "sonner";
import { useState } from "react";
import NotSignedIn from "@/components/Error/not-signed-in";
import { useEffect } from "react";
// import { useUserContext } from "@/context/UserContext";
import { getTasksFromFirestore, addTaskToFirestore, deleteTaskFromFirestore } from "@/utils/firestore";

export const Route = createFileRoute("/tasklist")({
  errorComponent: () => <NotSignedIn />,
  component: RouteComponent,
});

// console.log("tasks (imported):", tasks);

function RouteComponent() {
  const [taskList, setTaskList] = useState([]);
  const userData = Route.useRouteContext();
  const user = userData.user;
  // const user = useUserContext()

  console.log("user (tasklist):", user);
  // console.log("tasks (useState):", taskList);

  useEffect(() => {
    if (user) {
      loadTasks();
    }
  }, [user]);
  const loadTasks = async () => {
    try {
      const tasks = await getTasksFromFirestore(user.uid);
      setTaskList(tasks);
    } catch (error) {
      toast.error("Failed to load tasks");
      console.error("Failed to load tasks:", error);
    }
  };

  useEffect(() => {
    console.log("tasks (firestore):", taskList);
  }, [taskList]);

  const addTask = async (title, deadline) => {
    const newTask = {
      title,
      completed: false,
      deadline,
      userId: user.uid,
    }
    try {
      const addedTask = await addTaskToFirestore(newTask, user.uid)
      setTaskList([...taskList, addedTask])
    } catch (error) {
      toast.error("Failed to add task")
      console.error("Failed to add task:", error)
    }
  }

  const deleteTask = async (taskId) => {
    try {
      await deleteTaskFromFirestore(taskId)
      setTaskList(taskList.filter((task) => task.id !== taskId))
      toast.success("Task deleted successfully")
    } catch (error) {
      toast.error("Failed to delete task")
      console.error("Failed to delete task:", error)
    }
  }

  // const addTask = (title, deadline) => {
  //   const newTask = {
  //     id: Date.now(),
  //     title: title,
  //     completed: false,
  //     deadline: deadline,
  //   };
  //   setTaskList([...taskList, newTask]);
  // };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-6">
      <AddTask addTask={addTask} />

      <h2 className="text-3xl font-bold">
        Hi {user.displayName || user.email}, Here are your tasks:
      </h2>
      {/* <Task title="Buy groceries" /> */}

      <div className="flex flex-col gap-4">
        {taskList.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}
