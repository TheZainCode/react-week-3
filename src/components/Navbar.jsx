import { NavLink } from "react-router-dom";
export default function Navbar(){
    const linkClass=(({isActive})=>
        `rounded-md px-3 py-2 font-medium text-sm transition ${isActive ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-600 text-white hover:bg-gray-700"}`
    )
    return(
    <nav className="p-6">
        <div className="mx-auto max-w-6xl flex justify-between items-center text-center p-3">
            <NavLink to="/" className="font-bold text-xl text-blue-600">Zain</NavLink>
            <div className="flex jsutify-center iems-center text-center gap-3">
                <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                <NavLink to="/register" end className={linkClass}>Register</NavLink>
                <NavLink to="/login" className={linkClass}>Login</NavLink>
            </div>
        </div>
    </nav>
    )
}