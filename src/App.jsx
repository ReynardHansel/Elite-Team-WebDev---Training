import "./App.css";
import Task from "./components/Task";

function App() {

  const taskTitles = ["Learn React", "Dah makan belom?", "Ya apalah di sini"];

  return (
    <div>
      <h1>Hello World! Welcome to our Task Manager :D 😎</h1>
      <Task title="Learn React" />
      <Task title="Dah makan belom?" />
      <Task title="Ya apalah di sini" />

      {/* <Task title={taskTitles[0]} />
      <Task title={taskTitles[1]} />
      <Task title={taskTitles[2]} /> */}

      {/* {taskTitles.map((title, index) => (
        <Task key={index} title={title} />
      ))} */}
    </div>
  );
}

export default App;


//* Note:
//* Kenapa bikin dan pake component?
//* Bayangin kalo kita punya 100 task, dan tiap task punya 10 baris kode, trs lu satu" tulisin secara manual.
//* Ya kan males bgt yak, 
//* Blom lagi kl datanya dynamic/ganti", nanti harus ngubah satu" satu, gamungkin kan.
//* Makanya kita bikin component, biar bisa reuseable, dan lebih rapih.