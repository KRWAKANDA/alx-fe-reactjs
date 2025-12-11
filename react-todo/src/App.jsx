import React from "react";
import TodoList from "./components/TodoList"; // <-- Import TodoList

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My React Todo App</h1>
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}

export default App;
