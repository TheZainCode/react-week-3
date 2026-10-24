import apiClient from "./apiClient";

export const productService = {
    async getAllProducts() {
        return await apiClient("/products");
    },

    async getProductById(id) {
        return await apiClient(`/products/${id}`);
    },
};