import apiClient from "./apiClient";

export const userService = {
    async getAllUsers() {
        return await apiClient("/users");
    },

    async getUserById(id) {
        return await apiClient(`/users/${id}`);
    },
};