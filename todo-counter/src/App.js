import { Counter } from "./Counter.jsx/Counter";
import "./styles.css";
import Todo from "./Todo/Todo";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <Todo />
    </div>
  );
}
