const initState = {
  todoList: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todoList: action.payload,
      };
    case "todoList/addTodo":
      const newId =
        state.todoList.length > 0
          ? Math.max(...state.todoList.map((item) => item.id)) + 1
          : 1;
      return {
        ...state,
        todoList: [{ ...action.payload, id: newId }, ...state.todoList],
      };
    case "todoList/deleteTodo":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
