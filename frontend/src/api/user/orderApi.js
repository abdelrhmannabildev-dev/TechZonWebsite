import axios from "axios";

export const makeOrder = async (order) => {
    const response = await axios.post("http://localhost:3000/order", order);
    return response.data;
}