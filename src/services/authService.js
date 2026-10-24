import apiClient from "./apiClient";
export const authService = {
    async login(credentials){
        return await apiClient("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    },
    async register(userData){
        return await apiClient("/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
    },
}