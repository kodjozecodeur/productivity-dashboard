import React, { useState } from "react";

const TodoTile = ({ todo, handleToggle, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const saveEdit = () => {
    handleEdit(todo.id, editedText);
    setIsEditing(false);
  };
  return (
    <div className="bg-white p-4 rounded-lg flex items-center justify-between shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={todo.isComplete}
          onChange={() => handleToggle(todo.id)}
        />
        {isEditing ? (
          <input
            className="border rounded px-2 py-1"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span
            className={`text-gray-800 ${todo.isComplete ? "line-through" : ""}`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="text-green-600 hover:text-green-800"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => handleDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoTile;
