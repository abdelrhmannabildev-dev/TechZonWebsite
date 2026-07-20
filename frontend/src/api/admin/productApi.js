import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const addProduct = async (product) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/products`,product,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
        return response.data;
    };

export const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${API_URL}/products/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const updateProduct = async (id, product) => {
    const token = localStorage.getItem("token");
    const response = await axios.patch(`${API_URL}/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

