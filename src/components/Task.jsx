import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

function Task({ task, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  //?  Contoh kalo misal gamau pake ternary operator:
  //   let buttonText;
  //   if (isCompleted) {
  //     buttonText = "Undo";
  //   } else {
  //     buttonText = "Complete";
  //   }

  return (
    <div className="flex w-full items-center justify-between gap-8">
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
      <span className="text-sm text-gray-500">Due: {task.deadline}</span>
      <button
        className="rounded-lg bg-gray-900 px-4 py-2 text-white"
        onClick={toggleCompletion}
      >
        {isCompleted ? "Undo" : "Complete"}
      </button>
      <Dialog>
        <DialogTrigger>
          <Button variant="destructive">Delete</Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm rounded-md">
          <DialogHeader>
            <DialogTitle>Delete Task</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-red-500">
            Are you sure you want to delete the task?
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={() => onDelete(task.id)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Conto kl misalnya gmw pake ternary operator */}
      {/* <button onClick={toggleCompletion}>{buttonText}</button> */}
    </div>
  );
}

export default Task;
