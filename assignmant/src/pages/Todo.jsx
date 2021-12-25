import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";

function Todo() {
  const dispatch = useDispatch();
  const handleAdd = (text) => {
    const action = addTodo({
      title: text,
      status: false,
      id: uuid()
    });
    dispatch(action);
    const config = {
      url: "hhttps://masai-react-assignment.herokuapp.com/todo",
      method: "post",
      data: action.payload
    };
    return axios(config);
  };
  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </div>
  );
}

export default Todo;
