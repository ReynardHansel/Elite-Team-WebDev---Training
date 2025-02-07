import React, { useState } from "react";

function Task({ title, deadline }) {
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
        {title}
      </span>
      <span className="text-gray-500 text-sm">Due: {deadline}</span>
      <button
        className="rounded-lg bg-gray-900 px-4 py-2 text-white"
        onClick={toggleCompletion}
      >
        {isCompleted ? "Undo" : "Complete"}
      </button>

      {/* Conto kl misalnya gmw pake ternary operator */}
      {/* <button onClick={toggleCompletion}>{buttonText}</button> */}
    </div>
  );
}

export default Task;
