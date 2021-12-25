import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  ADD_TODO,
  REMOVE_TODO_ITEM,
  TOGGLE_TODO_STATUS
} from "./actionType";

export const getTodosRequest = () => {
  return {
    type: GET_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const getTodosSuccess = (todo) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: {
      todo: todo
    }
  };
};

export const getTodosFailure = () => {
  return {
    type: GET_TODO_FAILURE,
    payload: {
      isError: true
    }
  };
};

const addTodo = ({ title, status, id }) => {
  return {
    type: ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};
const removeTodo = (id) => ({
  type: REMOVE_TODO_ITEM,
  payload: {
    id: id
  }
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});

export { addTodo, removeTodo, toggleTodo };
