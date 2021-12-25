import { Route } from "react-router-dom";
import Todo from "../pages/Todo";
import TodoList from "../pages/TodoList";

function Routes() {
  return (
    <>
      <Route exact path="/">
        <Todo />
      </Route>
      <Route exact path="/list">
        <TodoList />
      </Route>
    </>
  );
}

export default Routes;
