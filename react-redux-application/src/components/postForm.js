import React, { useState } from "react";
import "./postForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const PostForm = () => {
  const [todoUserID, setTodoUserID] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoBody, setTodoBody] = useState("");
  const dispastch = useDispatch();
  console.log(todoUserID);
  const handleButtonAddClick = () => {
    dispastch(
      addTodo({
        userId: todoUserID,
        title: todoTitle,
        body: todoBody,
      })
    );
    setTodoBody("");
    setTodoTitle("");
    setTodoUserID("");
  };
  return (
    <form>
      <div className="title-addnew">
        <p>Thêm mới </p>
      </div>
      <div className="add-info">
        <div className="add-title">
          <label>User ID: </label>
          <input
            placeholder="Nhập user id..."
            value={todoUserID}
            onChange={(e) => setTodoUserID(e.target.value)}
          />
        </div>
        <div className="add-title">
          <label>Title: </label>
          <input
            placeholder="Nhập tiêu đề..."
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="add-body">
        <label>Body: </label>
        <textarea
          placeholder="Nhập nội dung..."
          value={todoBody}
          onChange={(e) => setTodoBody(e.target.value)}
        />
      </div>
      <div className="add-button">
        <button type="button" onClick={handleButtonAddClick}>
          Thêm mới
        </button>
      </div>
    </form>
  );
};

export default PostForm;
