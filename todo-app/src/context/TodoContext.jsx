import { createContext, useContext } from "react";

export const TodoConetxt = createContext({
  todo: [
    {
      id: "",
      todo: "",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (todo) => {},
});

export const useTodo = () => {
  return useContext(TodoConetxt);
};

export const TodoProvider = TodoConetxt.Provider;
