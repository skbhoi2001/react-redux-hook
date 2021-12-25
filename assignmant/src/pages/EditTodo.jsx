import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../redux/action";

function TodoItem({ title, status, onDelete, id, onToggle }) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
      <button onClick={() => onToggle(id)}>Toggle Status</button>
    </div>
  );
}

function EditTodo() {
  const { todo, isError, isLoading } = useSelector(
    (state) => state,
    shallowEqual
  );

  const { id } = useParams();
  const dispatch = useDispatch();
  const getTodos = (id) => {
    // pre fetch
    const requestAction = getTodosRequest();
    dispatch(requestAction);
    return fetch(`https://masai-react-assignment.herokuapp.com/todo/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const successAction = getTodosSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        const failureAction = getTodosFailure();
        dispatch(failureAction);
      });
  };

  useEffect(() => {
    getTodos(id);
  }, []);
  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      <div>
        <TodoItem key={id} {...todo} onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default EditTodo;
