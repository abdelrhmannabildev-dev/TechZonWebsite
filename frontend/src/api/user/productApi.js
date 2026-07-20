import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const getProductById = async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
};

export const getProductByIds = async (ids) => {
    const response = await axios.post(
        `${API_URL}/products/cart`,
        { ids }
    );

    return response.data;
};