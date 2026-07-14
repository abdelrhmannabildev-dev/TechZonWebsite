import axios from "axios";

export const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
};

export const addProduct = async (product) => {
    const token = localStorage.getItem("token");
    const response = await axios.post("http://localhost:3000/products",product,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
        return response.data;
    };

export const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`http://localhost:3000/products/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const updateProduct = async (id, product) => {
    const token = localStorage.getItem("token");
    const response = await axios.patch(`http://localhost:3000/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

