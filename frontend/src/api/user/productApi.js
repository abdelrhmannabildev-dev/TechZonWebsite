import axios from "axios";

export const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
};
export const getProductById = async (id) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response.data;
}
export const getProductByIds = async (ids) => {
    const response = await axios.post(`http://localhost:3000/products/cart/`,
        {ids}
    );
    return response.data;
}