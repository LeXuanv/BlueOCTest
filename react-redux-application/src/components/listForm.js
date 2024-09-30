import React, { useEffect } from "react";
import "./listForm.css";
import "./postForm.css";
import { useSelector, useDispatch } from "react-redux";
import { todoListSelectors } from "../redux/selectors";
import { deleteTodo, fetchTodos } from "../redux/actions";
const ListForm = () => {
  const todoList = useSelector(todoListSelectors);
  console.log(todoList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const handleClickDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <div className="title-addnew">
        <p>Danh sách</p>
      </div>
      <div className="scroll">
        {todoList.map((item) => (
          <div key={item.id} className="list-info">
            <div className="title-info">
              <p>{item.id}. </p>
              <span>{item.title}</span>
            </div>
            <div>
              <span>{item.body}</span>
            </div>
            <div className="delete">
              <button onClick={() => handleClickDelete(item.id)}>x</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListForm;
