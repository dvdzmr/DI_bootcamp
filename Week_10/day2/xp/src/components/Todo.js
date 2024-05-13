import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const addHandler = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const completeHandler = (id) => {
    dispatch(toggleComplete(id));
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />{" "}
      <button onClick={addHandler}> Add new Todo </button>{" "}
      <ul>
        {" "}
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none",}}
          >
            {todo.text}{" "}
            <button onClick={() => completeHandler(todo.id)}>
              {" "}
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
            </button>{" "}
            <button onClick={() => deleteHandler(todo.id)}> Delete </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};

export default Todo;
