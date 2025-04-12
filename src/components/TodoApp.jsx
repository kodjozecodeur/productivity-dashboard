import React, { useEffect, useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaSort } from "react-icons/fa";
import TodoTile from "./TodoTile";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [sortMethod, setSortMethod] = useState("dateAdded");

  const [initialized, setInitialized] = useState(false);

  // Load data only once on mount
  useEffect(() => {
    console.log("Component mounted, checking localStorage");
    try {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        console.log("Successfully parsed todos:", parsedTodos);
        setTodos(parsedTodos);
      }
      // Mark initialization as complete
      setInitialized(true);
    } catch (error) {
      console.error("Failed to load todos:", error);
      setInitialized(true);
    }
  }, []);

  // Only save after initialization and when todos change
  useEffect(() => {
    // Skip saving during initial load
    if (!initialized) return;

    try {
      console.log("Saving todos to localStorage:", todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos:", error);
    }
  }, [todos, initialized]);
  const handleTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: task,
      isComplete: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const getSortedTodos = () => {
    const sorted = [...todos];
    switch (sortMethod) {
      case "alphabetical":
        return sorted.sort((a, b) => a.text.localeCompare(b.text));
      case "completed":
        return sorted.sort((a, b) =>
          a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1
        );
      case "dateAdded":
      default:
        return sorted.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <p className="text-gray-600 text-center mb-4">Let's build this!</p>

        <div className="mt-3 mb-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            className="w-full bg-transparent p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onKeyPress={(e) => {
              if (e.key === "Enter") handleTodo();
            }}
          />
          <button
            onClick={handleTodo}
            className="w-full mt-3 bg-gray-800 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <FaRegSquarePlus />
            <span>Add task</span>
          </button>
        </div>

        <div className="mb-4 flex items-center space-x-2">
          <FaSort className="text-gray-600" />
          <span className="text-gray-600">Sort by:</span>
          <select
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            className="p-1 border border-gray-300 rounded text-sm"
          >
            <option value="dateAdded">Date Added</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="completed">Completion Status</option>
          </select>
        </div>

        <div className="mb-2 text-sm text-gray-600">
          {todos.length} {todos.length === 1 ? "task" : "tasks"} •{" "}
          {todos.filter((t) => t.isComplete).length} completed
        </div>

        {todos.length > 0 ? (
          getSortedTodos().map((todo) => (
            <TodoTile
              key={todo.id}
              todo={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No tasks yet. Add your first task above!
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
