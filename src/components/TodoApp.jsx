import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import TodoTile from "./TodoTile";

const TodoApp = () => {
  const [todos, setTodos] = React.useState([]); //for the list of toods
  const [task, setTask] = React.useState(""); //for the task input
  //function to handle todo
  const handleTodo = () => {
    //prevent empty input
    if (task.trim() === "") return;
    const newTodo = {
      id: self.crypto.randomUUID(), //toget random number for the id
      text: task,
      isComplete: false,
    };
    //add the new todo to the todos array
    setTodos([...todos, newTodo]);
    setTask("");
  };
  //toggle checkbox
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
    console.log(setTodos);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <p className="text-gray-600 text-center">Let's build this!</p>
        <div className="mt-3 mb-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            className="w-full bg-transparent p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleTodo}
            className="w-full mt-3 bg-gray-800 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <FaRegSquarePlus />
            <span>Add task</span>
          </button>
        </div>
        {/* render the todos in a tile, using map */}
        {todos.map((todo) => (
          <TodoTile key={todo.id} todo={todo} handleToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
