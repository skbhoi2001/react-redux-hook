import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { TotalIncompleted } from "../Component/Total";
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
      <div>
        <Link to={`/todo/${id}`}>{title}</Link>
      </div>
      <div>{`${status}`}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <Link to={`/todo/${id}/edit`}>Edit Button</Link>
    </div>
  );
}

function TodoList() {
  const { todo, isError, isLoading } = useSelector(
    (state) => state,
    shallowEqual
  );
  const dispatch = useDispatch();
  const getTodos = () => {
    const requestAction = getTodosRequest();
    dispatch(requestAction);
    return fetch(`https://masai-react-assignment.herokuapp.com/todo`)
      .then((res) => res.json())
      .then((res) => {
        //success
        const successAction = getTodosSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        // failure
        const failureAction = getTodosFailure();
        dispatch(failureAction);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  var total = todo.filter((item) => item.status === false);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          {...item}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
