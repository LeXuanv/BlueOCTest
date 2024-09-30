import axios from "axios";

export const addTodo = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      dispatch({
        type: "todoList/addTodo",
        payload: response.data,
      });
    } catch (error) {
      console.error("Lỗi khi thêm todo:", error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({
        type: "todoList/deleteTodo",
        payload: id,
      });
    } catch (error) {
      console.error("Lỗi khi xóa todo:", error);
    }
  };
};

export const setTodos = (todos) => ({
  type: "SET_TODOS",
  payload: todos,
});
export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(setTodos(response.data));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
};
