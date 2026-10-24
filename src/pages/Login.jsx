import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { isAuthenticated, user, Login, Logout } = useAuth();

    return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-slate-800 p-8 rounded-lg shadow-2xl border border-slate-700 text-center space-y-4">
                {isAuthenticated ? (
                    <>
                        <h1 className="font-bold text-3xl text-emerald-400">Welcome, {user?.name}! 🎉</h1>
                        <p className="text-sm text-slate-300">You are logged in as {user?.role}.</p>
                        <button 
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 cursor-pointer font-semibold transition-colors" 
                            onClick={Logout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <h1 className="font-bold text-3xl text-indigo-400">Welcome, User!</h1>
                        <p className="text-sm text-slate-300">Please click below to simulate login.</p>
                        <button 
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 cursor-pointer font-semibold transition-colors" 
                            onClick={Login}
                        >
                            Login Now
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}