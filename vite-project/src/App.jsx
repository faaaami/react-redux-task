import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./todoSlice";

function App() {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => dispatch(addTask(input))}>
        Add Task
      </button>

      {todos.map((t, index) => (
        <h3 key={index}>{t}</h3>
      ))}
    </div>
  );
}

export default App;