
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-wrap gap-4">
      <NavLink
  to="/"
  end
  className={({ isActive }) =>
    isActive
      ? "font-bold text-[#743d45] border-b-2 border-[#743d45]"
      : "text-gray-600 hover:text-[#743d45]"
  }
>
  Dashboard
</NavLink>
      <NavLink
  to="/tasks"
  end
  className={({ isActive }) =>
    isActive
      ? "font-bold text-[#743d45] border-b-2 border-[#743d45]"
      : "text-gray-600 hover:text-[#743d45]"
  }
>
  Tasks
</NavLink>
      <NavLink
  to="/focus"
  end
  className={({ isActive }) =>
    isActive
      ? "font-bold text-[#743d45] border-b-2 border-[#743d45]"
      : "text-gray-600 hover:text-[#743d45]"
  }
>
  Focus
</NavLink>
      <NavLink
  to="/settings"
  end
  className={({ isActive }) =>
    isActive
      ? "font-bold text-[#743d45] border-b-2 border-[#743d45]"
      : "text-gray-600 hover:text-[#743d45]"
  }
>
  Settings
</NavLink>
    </nav>
  );
}

export default Navbar;
