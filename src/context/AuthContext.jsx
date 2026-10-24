import { useState, useContext, createContext } from "react";
const AuthContext=createContext(null);
export function AuthProvider({children}){
    const [ user, setUser ]=useState(null);
    function Login(){
        setUser({
            name: "Zain",
            role: "Frontend Developer"
        });
    }
    function Logout(){
        setUser(null);
    }
    const isAuthenticated=Boolean(user);
    return(
        <AuthContext.Provider value={{ user, isAuthenticated, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used in AuthProvider.")
    }
    return context;
}