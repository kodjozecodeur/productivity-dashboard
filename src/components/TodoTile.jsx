import React from "react";

const TodoTile = ({ todo, handleToggle }) => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={todo.isComplete}
            onChange={() => handleToggle(todo.id)}
          />
          <span
            className={`text-gray-800 ${
              todo.isComplete ? "line-through text-gray" : ""
            }`}
          >
            {todo.text}
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="text-red-500 hover:text-red-700">Edit</button>
          <button className="text-red-500 hover:text-red-700">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoTile;
