import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 font-medium text-sm transition ${
      isActive
        ? "bg-green-600 text-white hover:bg-green-700"
        : "bg-gray-600 text-white hover:bg-gray-700"
    }`;

  return (
    <nav className="p-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3 text-center">
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          Zain
        </NavLink>
        <div className="flex items-center justify-center gap-3 text-center">
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/register" end className={linkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}