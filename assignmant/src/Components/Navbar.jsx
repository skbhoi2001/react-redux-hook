import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
      <div>
        <Link to="/">Todo</Link>
      </div>
      <div>
        <Link to="/list">List</Link>
      </div>
    </div>
  );
}

export default Navbar;
