import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const makeOrder = async (order) => {
    const response = await axios.post(`${API_URL}/order`, order);
    return response.data;
}