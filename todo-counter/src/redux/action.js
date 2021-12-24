export const actionConstants = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS",
  ADD_COUNTER: "ADD_COUNTER",
  REDUCE_COUNTER: "REDUCE_COUNTER"
};

// actionCreators
// type is mandatory, string
export const addTodo = ({ title, status, id }) => {
  return {
    type: actionConstants.ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};

export const removeTodo = (id) => ({
  type: actionConstants.REMOVE_TODO_ITEM,
  payload: {
    id: id
  }
});

export const toggleTodo = (id) => ({
  type: actionConstants.TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});

export const addCounter = (payload) => {
  return {
    type: actionConstants.ADD_COUNTER,
    payload
  };
};
export const reduceCounter = (payload) => {
  return {
    type: actionConstants.REDUCE_COUNTER,
    payload
  };
};
