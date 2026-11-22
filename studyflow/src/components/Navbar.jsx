
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-wrap gap-4">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/focus">Focus</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}

export default Navbar;
