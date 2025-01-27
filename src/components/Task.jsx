import React, { useState } from "react";

function Task({ title }) {
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
    <div>
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          marginRight: "1rem",
        }}
      >
        {title}
      </span>
      <button onClick={toggleCompletion}>
        {isCompleted ? "Undo" : "Complete"}
      </button>

      {/* Conto kl misalnya gmw pake ternary operator */}
      {/* <button onClick={toggleCompletion}>{buttonText}</button> */}
    </div>
  );
}

export default Task;
