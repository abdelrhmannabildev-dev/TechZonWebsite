import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getAllOrders = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}:3000/order` , 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response.data;
};
export const changeOrderStatus = async (ordersToUpdate) => {
    const token = localStorage.getItem("token");
    const response = await axios.patch(`${API_URL}:3000/order/status` , ordersToUpdate , 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response;
}

export const getOrdersDetailsById = async (orderId) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}:3000/order/${orderId}` , 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response.data;
}