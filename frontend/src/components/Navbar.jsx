import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="title">
        Home
      </Link>
      <Link to="/create" className="create">
        Create Blog
      </Link>
    </nav>
  );
}

export default Navbar;
