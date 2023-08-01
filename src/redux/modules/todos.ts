import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    newTodo: {
      id: todo.id,
      title: todo.title,
      contents: todo.contents,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleStatusTodo = (id, isDone) => {
  return {
    type: TOGGLE_STATUS_TODO,
    id,
    isDone,
  };
};

const initialState = [
  {
    id: uuid(),
    title: "Typescript",
    contents: "Typescript 공부하기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "Typescript",
    contents: "Typescript lv,1 과제하기",
    isDone: true,
  },
  {
    id: uuid(),
    title: "AWS",
    contents: "AWS 공부하기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "React",
    contents: "React 공부하기",
    isDone: false,
  },
];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.newTodo];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_STATUS_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todos;
